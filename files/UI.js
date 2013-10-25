function LoadUI(){
	var frame_main = new Image();
  frame_main.src = "assets/upp.png"
  frame_main.onload = frame;
  
  var frame_2 = new Image();
  frame_2.src = "assets/underLeft.png"
  frame_2.onload = frame2;
  var frame_3 = new Image();
  frame_3.src = "assets/underUP.png"
  frame_3.onload = frame3;
  var frame_4 = new Image();
  frame_4.src = "assets/underdown.png"
  frame_4.onload = frame4;
  var frame_5 = new Image();
  frame_5.src = "assets/underRight.png"
  frame_5.onload = frame5;
  
  var puzzle = new Image();
  puzzle.src = "assets/frame-puzzle.png"
  puzzle.onload = frame_puzzle;
  var option = new Image();
  option.src = "assets/frame-option.png"
  option.onload = frame_option;
  
  var rotateButton = new Image();
  rotateButton.src = "assets/rotate.png"
  rotateButton.onload = frame_rotate;
  slave_image = new Image();
  slave_image.src = "assets/slave-red.png"
  slave_image.onload = frame_slave;
      
      
  var player1 = new Image();
  player1.src = "assets/headcard-blue.png"
  player1.onload = UI_player1;
  
  var player2 = new Image();
  player2.src = "assets/headcard-gray.png"
  player2.onload = UI_player2;
  
  var player3 = new Image();
  player3.src = "assets/headcard-green.png"
  player3.onload = UI_player3;
  
  var player4 = new Image();
  player4.src = "assets/headcard-red.png"
  player4.onload = UI_player4;
  
  var player5 = new Image();
  player5.src = "assets/headcard-yellow.png"
  player5.onload = UI_player5;
  
  var zoom1 = new Image();//放大縮小
  zoom1.src = "assets/zoomin.png"
  zoom1.onload = zoomIn;
  var zoom2 = new Image();
  zoom2.src = "assets/zoomout.png"
  zoom2.onload = zoomOut;
  
  var OK = new Image();
  OK.src = "assets/check.png"
  OK.onload = check;
  update = true;
  	
}
function frame(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =0;
  bitmap_UI.y =0;
  update = true;
}
function frame2(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =0;
  bitmap_UI.y =134;
  update = true;
}
function frame3(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =26;
  bitmap_UI.y =134;
  update = true;
}
function frame4(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =25;
  bitmap_UI.y =624;
  update = true;
}
function frame5(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =925;
  bitmap_UI.y =148;
  update = true;
}

function frame_puzzle(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =750;
  bitmap_UI.y =450;
  update = true;
}
function frame_option(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =750;
  bitmap_UI.y =225;
  update = true;
}
function frame_rotate(event){	//旋轉
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =776;
  bitmap_UI.y =350;

  bitmap_UI.onClick = function(){
	  cont_3.removeAllChildren();
	  var cont_r = stage.getChildAt(3);ss=wtf-1;
  	var bmp_r = cont_r.getChildByName("bmp_"+ss);
  	bmp_r.rotation=degree; //旋轉
  	//alert(degree);
  	degree+=90;
  
  	update = true;
  	judge();
	
  }
}
function frame_slave(event){	//小人
	var image_UI = event.target;
  var bitmap_UI;

  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "slave";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.scaleX = bitmap_UI.scaleY = bitmap_UI.scale = 0.3;
  bitmap_UI.x =776;
  bitmap_UI.y =250;
  bitmap_UI.onClick = function(){
    slaveRed();
  }

  update = true;
}
var zoom = [0.2, 0.4, 0.6, 1, 1.2],
    zoomNo = 3;
function zoomIn(event){	//地圖放大
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.scaleX = bitmap_UI.scaleY = bitmap_UI.scale = 0.7;
  bitmap_UI.x =880;
  bitmap_UI.y =150;

  bitmap_UI.onClick = function(){
  	zoomNo++;
  	if(zoomNo<=4){
	    cont_3.scaleX = cont_3.scaleY = cont_3.scale = 1.2;
	    cont_2.scaleX = cont_2.scaleY = cont_2.scale = 1.2;
  	}
  	else{
  		zoomNo--;
  	}
	  update = true;
  }
}
function zoomOut(event){	//地圖縮小
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.scaleX = bitmap_UI.scaleY = bitmap_UI.scale = 0.7;
  bitmap_UI.x =880;
  bitmap_UI.y =190;

  bitmap_UI.onClick = function(){   
  	zoomNo--;
  	if(zoomNo>=0){
	    cont_3.scaleX = cont_3.scaleY = cont_3.scale = 0.6;
    	cont_2.scaleX = cont_2.scaleY = cont_2.scale = 0.6;
    }
  	else{
  		zoomNo++;
  	}
  	update = true;
  }
}
function UI_player1(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "handcard-blue";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =25;
  bitmap_UI.y =25;
  update = true;
}
function UI_player2(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "handcard-gray";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =205;
  bitmap_UI.y =25;
  update = true;
}
function UI_player3(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "handcard-green";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =385;
  bitmap_UI.y =25;
  update = true;
}
function UI_player4(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "handcard-red";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =565;
  bitmap_UI.y =25;
  update = true;
}
function UI_player5(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "handcard-yellow";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.x =745;
  bitmap_UI.y =25;
  update = true;
}
  
  
function check(event){
	var image_UI = event.target;
  var bitmap_UI;
  
  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "check";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.regX = bitmap_UI.image.width/2|0;
  bitmap_UI.regY = bitmap_UI.image.height/2|0;
  bitmap_UI.x =850;
  bitmap_UI.y =550;
  bitmap_UI.onClick = function(evt){
	  var ccc = cont_2.getChildAt(HowManyCard);
	  xxx = ccc.x; yyy = ccc.y;
	  ccc.name = "bmp_" + (HowManyCard+1);
	
    socket.emit('OK', [ttt, degree-90, (yyy/150)-2+72, (xxx/150)-3+72]);
	  HowManyCard = wtf-1; //場上卡片數量
	  cardX[wtf-2] = xxx; cardY[wtf-2] = yyy; //儲存卡片位置
	
	  cont_3.removeAllChildren();
	  RedNumber=0;wtf_click=0;
	  cou++;
	  CardsDegree[HowManyCard-1] = degree-90; //存使用者所旋轉的度數
    TypeOfCard[HowManyCard-1] = ttt;//存使用者所抽到的卡片種類
    mapInfo[(yyy/150)-2+72][(xxx/150)-3+72]=n;
    //alert(cardInfo[ttt-1][( degree-90)/90]);
    
  //測試用～看是否資料有存入矩陣
  /* for(a=0; a<HowManyCard; a++){
	  alert("["+CardsDegree[a] + " , "+ TypeOfCard[a] + "  x:"+cardX[a] + " y:"+cardY[a]+"]");
  }*/
    slaveXY();
    //createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.addListener(stage);
    stage.update();
	
  }

  /** var bmp_wtf = cont_2.getChildByName("bmp_"+wtf);
  socket.emit('OK', [ttt, bmp_wtf.x]); */


  update = true;
}


function stop() {
  createjs.Ticker.removeEventListener("tick", tick);
}
