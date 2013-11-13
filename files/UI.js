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
  
  var trash = new Image();
  trash.src = "assets/garbage.png"
  trash.onload = garbage;
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
    
    update = true;
    bitmap_UI.onClick = function(){
	    if(slaveTF == true) {
        cont_slave.removeChildAt(cont_slave.children.length - 1);
        slaveTF = false;
        slave_XY[Mycolor].splice(slave_XY[Mycolor].length-1, 1);
        sla_valX = null;
        sla_valY = null;
        temp_score = null;
      }
  
      cont_3.removeAllChildren();
      //var cont_r = stage.getChildAt(1);ss=wtf-1;
      var bmp_r = cont_2.getChildAt(HowManyCard);
      var bmp_rr = cont.getChildAt(0);
      bmp_rr.visible = true;
      bmp_r.visible = false;
      bmp_r.rotation = degree; //旋轉
      bmp_rr.rotation = degree;
      //alert(degree);
      CardsDegree[HowManyCard] = degree;
      degree = (degree + 90) % 360;
      if(degree==0) {
        degree=360;
      }
      cont_temp_slave.removeAllChildren();
      judge();

      createjs.Ticker.addListener(stage);
      stage.update();
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
    if(cont_temp_slave.children.length != 0) {
      cont_temp_slave.removeAllChildren();
      console.log("  NONONONONONNONONONONO  ");
    }
    else if(cont.getChildAt(0).visible == false || cont.getChildAt(0) == undefined) {//卡片已經放入場上
     /* cont_temp_slave.x=cont_2.x + cont_2.getChildAt(cont_2.children.length-1).x;
      cont_temp_slave.y=cont_2.y + cont_2.getChildAt(cont_2.children.length-1).y;
      console.log(cont_temp_slave.x + "    *****cont_temp_slave.x");
      console.log(cont_2.x + " cont_2.x//position  " + cont_2.getChildAt(cont_2.children.length-1).x);*/
      slaveXY();
     /* cont_temp_slave.rotation = CardsDegree[HowManyCard];
      cont_temp_slave.visible = true;*/
    }
    if(slaveTF == true) {//卡片在場上,且已有擺小人
      cont_slave.removeChildAt(cont_slave.children.length-1);
      slave_XY[Mycolor].splice(slave_XY[Mycolor].length-1, 1);
      console.log(slave_XY[Mycolor] + "************* slave_XY");
      slaveTF == false;
      sla_valX = null;
      sla_valY = null;
    }
  }
  createjs.Ticker.addListener(stage);
    stage.update();
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
	    cont_3.scaleX = cont_3.scaleY = cont_3.scale = zoom[zoomNo];
	    cont_2.scaleX = cont_2.scaleY = cont_2.scale = zoom[zoomNo];
	    cont_temp_slave.scaleX = cont_temp_slave.scaleY = cont_temp_slave.scale = zoom[zoomNo];
	    cont_slave.scaleX = cont_slave.scaleY = cont_slave.scale = zoom[zoomNo];
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
	    cont_3.scaleX = cont_3.scaleY = cont_3.scale = zoom[zoomNo];
    	cont_2.scaleX = cont_2.scaleY = cont_2.scale = zoom[zoomNo];
    	cont_temp_slave.scaleX = cont_temp_slave.scaleY = cont_temp_slave.scale = zoom[zoomNo];
    	cont_slave.scaleX = cont_slave.scaleY = cont_slave.scale = zoom[zoomNo];
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
function garbage(event){	//垃圾桶
	var image_UI = event.target;
  var bitmap_UI;

  bitmap_UI = new createjs.Bitmap(image_UI);
  bitmap_UI.name = "slave";
  cont_UI.addChild(bitmap_UI);
  bitmap_UI.scaleX = bitmap_UI.scaleY = bitmap_UI.scale = 0.5;
  bitmap_UI.x =700;
  bitmap_UI.y =570;
  bitmap_UI.onClick = function(){
    if(cont_temp_slave.children.length==0){
      wtf--;
      wtf_click=0;        
      cont.removeChildAt(0);
      cont_2.removeChildAt(HowManyCard);
      cont_3.removeAllChildren();
      /*if(wtf==2){
        cont_2.removeChildAt(0);
        HowManyCard=0;
        wtf=1;
        var image = new Image();
        image.src = "assets/11c.png"
        image.onload = handleImageLoad;
      
      }*/
      update=true;
      stage.update();
    }
    else {
      console.log("There have some frames that you can put this card.");
    }

  }
  createjs.Ticker.addListener(stage);
    stage.update();
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
	  
		socket.emit('OK', [ttt, degree-90, (yyy/150)-2+72, (xxx/150)-3+72, slave_color,  sla_valX, sla_valY]);
    //console.log(slave_color + "  UI");
	  HowManyCard = wtf-1; //場上卡片數量
	  cont.removeAllChildren();
	  cont_3.removeAllChildren();
	    cont_temp_slave.removeAllChildren();
	  RedNumber = 0;  wtf_click = 0;  wtf_slave = 0
	  cou++;
	  CardsDegree[HowManyCard-1] = degree-90; //存使用者所旋轉的度數
    TypeOfCard[HowManyCard-1] = ttt;//存使用者所抽到的卡片種類
    mapInfo[(yyy/150)-2+72][(xxx/150)-3+72]=n;
    slaveTF = false;
    
    if(temp_score != null) {
      //console.log(temp_score + "****************123");
        score_recordInfo[(yyy/150)-2+72][(xxx/150)-3+72][0] = temp_score + Mycolor*10;
      }
      temp_score = null;
      if(now_y !=0) {
        score_road((yyy/150)-2+72, (xxx/150)-3+72);
      }
    
    createjs.Ticker.addListener(stage);
    stage.update();
	
  }
  update = true;
}


function stop() {
  createjs.Ticker.removeEventListener("tick", tick);
}
