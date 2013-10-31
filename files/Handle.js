function handleImageLoad(event) {
        var image = event.target;
        var bitmap;
        
          bitmap = new createjs.Bitmap(image);
          
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
          	  cont.addChild(bitmap);
		      bitmap.x = 850;
		      bitmap.y = 550;
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
  console.log(bitmap_click.image.width/2);  /** difference */
  console.log(bitmap_click.image.height/2); /** difference */
  bitmap_click.name = "ii_"+wtf_click;
  
  update = true;
  (function(target) {
    bitmap_click.onPress = function(evt) {
      // bump the target in front of it's siblings:
      cont_3.addChild(target);
      var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
      
  	  if(cont_2.getChildAt(HowManyCard)!= null){
  	  	temp = cont_2.getChildAt(HowManyCard);
  	  	temp.x = target.x;
  	  	temp.y = target.y;
  	  
  	  }
  	  else{
  	  	temp = cont.getChildAt(0);
  	  	cont_2.addChild(temp);
  	  	temp.x = target.x;
  	  	temp.y = target.y;
          	  
  	  }
  	  
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
  
  bitmap = new createjs.Bitmap(image);
  cont_slave.addChild(bitmap);
  bitmap.x = temp_slave[slave_i][slave_j] + cardX[HowManyCard-1];
  bitmap.y = temp_slave[slave_i][slave_j] + cardY[HowManyCard-1];

  bitmap.regX = bitmap.image.width/2|0;
  bitmap.regY = bitmap.image.height/2|0;
  
  update = true;
  
  (function(target) {
	bitmap.onPress = function(evt) {
	  // bump the target in front of it's siblings:
	  cont_slave.addChild(target);
	  var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
	  
	  update = true;
	  stage.update();
	}
  })(bitmap);

createjs.Ticker.addEventListener("tick", tick);
}
      
      
      function tick(event) {
        // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
        if (update) {
          update = false; // only update once
          stage.update(event);
        }
      }
