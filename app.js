var mysql = require('mysql');

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    moment = require('moment');

var config = require('./config');

var connection = mysql.createConnection({
    host     : config.connectionHost,
    user     : config.connectionUser,
    password : config.connectionPassword,
    database : config.connectionDatabase
});

server.listen(config.port);

connection.connect();

app.use('/script', express["static"](__dirname + '/script'));
app.use('/css', express["static"](__dirname + '/css'));
app.use('/assets', express["static"](__dirname + '/assets'));
app.use('/files', express["static"](__dirname + '/files'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'Star Island'}));
app.engine('jshtml', require('jshtml-express'));
app.set('view engine', 'jshtml');

app.get('/', function(req, res) {
  res.render('login');
});

app.post('/login', function(req, res) {
  var id = connection.escape(req.body.id),
      pwd = connection.escape(req.body.pwd),
      sql = 'SELECT * FROM player WHERE id LIKE ' + id + ' ANd pwd LIKE ' + pwd;

  connection.query(sql, function(err, results) {
    if(results.length === 1) {
      console.log('results[0].id = ' + results[0].id)
      req.session.playerId = results[0].id;
      console.log(req.session.playerId);
      req.session.wtf = 'wtf';
      console.log(req.session.wtf);
      res.redirect('/game');//socket.emit('auth', results[0]);
    }
    else {
      res.send('invalid');
    }
  });

})

app.get('/game', function(req, res) {
  res.locals({
    title : 'title',
    playerId : req.session.playerId,
  });
  res.render('index');//sendfile('index.html');
});

app.get('/drag', function(req, res) {
  res.sendfile('drag.html');
});

app.get('/contain', function(req, res) {
  res.sendfile('contain.html');
});

var connections = 0,
    players = 0,
    ids = [],
    turns = 0,
    color = ['blue', 'gray', 'green', 'red', 'yellow'],
    round = 1;
io.sockets.on('connection', function(socket) {
  //console.log(socket.id);
  //sessionids[connections] = socket.id;
  //console.log(++connections);
  //console.log(sessionids);
  /**
   * Get the exist tiles.
   * @event getMap
   * @fires map
   */
  socket.on('getMap', function() {
    var sql = 'SELECT * FROM map';
    connection.query(sql, function(err, results) {
    /**
     * Emit map info.
     * @event map
     * @return results
     */
      socket.emit('map', results);
    });
  });
  socket.on('disconnect', function() {
    console.log(connections);
  });
  socket.on('id', function(playerId) {
    console.log('playerId is ' + playerId);
    var reconnect = false,
        i = 0,
        players = ids.length;
    if(players <= 5) { // TODO: change 5 to number of player of the desk
      for(; i < players; i += 1) {
        if(ids[i] === playerId) {
          reconnect = true;
          console.log('ids is ' + ids);
          console.log('playerId is ' + playerId);
          console.log('Reconnect!');
          break;
        }
      }
      if(reconnect) {
        connections--;
        socket.emit('color', color[i])
        socket.emit('turn', color[turns]);
        // TODO: player who reconnect can directly get map
      }
      else {
        ids[players] = playerId;
        console.log(ids);
        socket.emit('color', color[players]);
        socket.emit('turn', color[turns]);
      }
    }
    else {
      socket.emit('color', 'full');
      socket.emit('alert', 'Game is full, but you can watch it.');
      console.log(ids);
      socket.emit('turn', color[turns]);
    }
  });
  socket.on('OK', function(arr) {
    console.log(arr);
    connection.query("INSERT INTO map (`id`, `round`, `puz_no`, `puz_direction`, `puz_col`, `puz_row`, `slave_place`) VALUES ('"+color[turns]+"', '"+round+"', '"+arr[0]+"', '"+arr[1]+"', '"+arr[2]+"', '"+arr[3]+"', '0')", function(err, rows, fields) {
      if (err) throw err;
        datas = rows;
    });
    turns = (turns + 1)%5; //todo change 5 to number of player of the desk
    io.sockets.emit('turn', color[turns]);
    io.sockets.emit('show', arr);
  });
  socket.on('login', function(data) {
  });
});
//app.get('/login', function(req, res){
//  res.sendfile('login.html');
//});
//app.post('/table', function(req, res){
//  console.log(req.body.login);
//  var mysql      = require('mysql'),
//      http       = require('http');
//
//connection.connect();
//
//connection.query('SELECT * FROM player WHERE id = "test"', function(err, rows, fields) {
//    if (err) throw err;
//      console.log('(find id == test)');
//        console.log('The data is: ', rows[0]);
//});
//
//connection.end();
////  res.sendfile('drag.html');
//  res.send('id: ' + req.body.login);
//});

