function handleImageLoad(event) {
  var image = event.target;
  var bitmap;
  
  bitmap = new createjs.Bitmap(image);
  TypeOfCard[HowManyCard]=ttt;
  if(wtf==1){ //第一張卡片位置
    cont_2.addChild(bitmap);
    bitmap.x = 450;
    bitmap.y = 300;
    CardsDegree[0] = 0;
    HowManyCard = 1; //場上卡片數量
    cardX[0] = 450; 
    cardY[0] = 300;
    TypeOfCard[0]=20;
  }
  else{
    CardsDegree[HowManyCard] = degree-90;
    cont_2.addChild(bitmap);
    bitmap.x = 850;
    bitmap.y = 550;
    bitmap.visible = false;
    update = true;
  }

  bitmap.regX = bitmap.image.width/2|0;
  bitmap.regY = bitmap.image.height/2|0;
  bitmap.scaleX = bitmap.scaleY = bitmap.scale = 0.5;
  bitmap.name = "bmp_"+wtf;
  wtf++;
  
  createjs.Ticker.addEventListener("tick", tick);
}
      
function handleImageRed(event) {
  var image_click = event.target;
  var bitmap_click;

  bitmap_click = new createjs.Bitmap(image_click);
  cont_3.addChild(bitmap_click);
  bitmap_click.x = RedRangeX[wtf_click];
  bitmap_click.y = RedRangeY[wtf_click];
    
    
    bitmap_click.regX = bitmap_click.image.width/2|0;
    bitmap_click.regY = bitmap_click.image.height/2|0;
    //console.log(bitmap_click.image.width/2);  /** difference */
   // console.log(bitmap_click.image.height/2); /** difference */
    bitmap_click.name = "ii_"+wtf_click;
    
  update = true;
  (function(target) {
    bitmap_click.onPress = function(evt) {
      // bump the target in front of it's siblings:
      temp = cont.getChildAt(0);
      temp.visible = false;
        
      cont_3.addChild(target);
      var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
      
      temp = cont_2.getChildAt(HowManyCard);
      temp.visible = true;
      temp.x = target.x;
      temp.y = target.y;
      
      cont_temp_slave.removeAllChildren();
      if(slaveTF == true) {
        cont_slave.removeChildAt(cont_slave.children.length-1);
        slaveTF = false;
        slave_XY[Mycolor].splice(slave_XY[Mycolor].length-1, 1);
        sla_valX = null;
        sla_valY = null;
      }
      else {
        cont_slave.removeChildAt(cont_slave.children.length);
      }
      cardX[HowManyCard] = bitmap_click.x;
      cardY[HowManyCard] = bitmap_click.y; //儲存卡片位置
      //slaveXY();
      
      update = true;
      stage.update();
    }
  })(bitmap_click);
wtf_click++;
createjs.Ticker.addEventListener("tick", tick);
}
      
function handleImageSlave(event) {
  var image = event.target;
  var bitmap;
  slave_j--;
      
    bitmap = new createjs.Bitmap(image);
    cont_temp_slave.addChild(bitmap);
    bitmap.x = slavePos[temp_slave[slave_j]-1][0] + cardX[HowManyCard];
    bitmap.y = slavePos[temp_slave[slave_j]-1][1] + cardY[HowManyCard];

  bitmap.regX = bitmap.image.width/2|0;
  bitmap.regY = bitmap.image.height/2|0;
  bitmap.scaleX = bitmap.scaleY = bitmap.scale = 0.5;
  bitmap.name = "slave_" + wtf_slave;

  update = true;

  (function(target) {
    bitmap.onPress = function(evt) {
      cont_temp_slave.addChild(target);
      var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
      
      console.log(bitmap.name);
      console.log(slave_color + "*****");
      var image_s = new Image();
      image_s.src = "assets/slave"+ slave_color +".png";
      bitmap_s = new createjs.Bitmap(image_s);
      cont_slave.addChild(bitmap_s);
    
      bitmap_s.regX = 200;
      bitmap_s.regY = 200;
      bitmap_s.x = sla_valX = bitmap.x;
      bitmap_s.y = sla_valY = bitmap.y;
      bitmap_s.scaleX = bitmap_s.scaleY = bitmap_s.scale = 0.15;
      slaveTF = true;
      cont_temp_slave.removeAllChildren();
      update = true;
      console.log(bitmap.x + " X/oo/Y "+ bitmap.y);
      if(slave_XY[Mycolor] == undefined) {
        slave_XY[Mycolor]=[];
      }
      //below: 存放slave_color顏色的玩家, 擁有的小人放在 cont_slave 裡的第幾個位置
      slave_XY[Mycolor].splice(cont_slave.children.length-1, 0, bitmap_s); 
      slave_len = cont_slave.children.length;
    
      update = true;
      createjs.Ticker.addListener(stage);
      stage.update();
    }
  })(bitmap);
  wtf_slave++;
  createjs.Ticker.addEventListener("tick", tick);
}
      
      
function tick(event) {
// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
  if (update) {
    update = false; // only update once
    stage.update(event);
  }
}
