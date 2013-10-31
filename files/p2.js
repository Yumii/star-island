

var direction ; // 旋轉次數
var countOK = 0;

//var c24 = 24;
//var c4 = 4;

var cardInfo = new Array(97);

//for(i=0;i<4;i++){
//	var cardInfo[i] = new Array(4);
//} //下面有宣告這邊就不用了

//             [上,右,下,左]
cardInfo[0]  = ["empt", "empt", "empt", "empt"];

cardInfo[1]  = ["univ", "univ", "univ", "univ"];
cardInfo[2]  = ["univ", "univ", "road", "univ"];
cardInfo[3]  = ["land", "land", "land", "land"];
cardInfo[4]  = ["land", "land", "univ", "land"];
cardInfo[5]  = ["land", "land", "univ", "land"];
cardInfo[6]  = ["land", "land", "road", "land"];
cardInfo[7]  = ["land", "land", "road", "land"];
cardInfo[8]  = ["land", "univ", "univ", "land"];
cardInfo[9]  = ["land", "univ", "univ", "land"];
cardInfo[10] = ["land", "road", "road", "land"];
cardInfo[11] = ["land", "road", "road", "land"];
cardInfo[12] = ["univ", "land", "univ", "land"];
cardInfo[13] = ["univ", "land", "univ", "land"];
cardInfo[14] = ["land", "univ", "univ", "land"];
cardInfo[15] = ["land", "univ", "land", "univ"];
cardInfo[16] = ["land", "univ", "univ", "univ"];
cardInfo[17] = ["land", "univ", "road", "road"];
cardInfo[18] = ["land", "road", "road", "univ"];
cardInfo[19] = ["land", "road", "road", "road"];
cardInfo[20] = ["land", "road", "univ", "road"]; //起始圖
cardInfo[21] = ["road", "univ", "road", "univ"];
cardInfo[22] = ["univ", "univ", "road", "road"];
cardInfo[23] = ["univ", "road", "road", "road"];
cardInfo[24] = ["road", "road", "road", "road"];

cardInfo[25] = ["univ", "univ", "univ", "univ"];
cardInfo[26] = ["univ", "univ", "univ", "road"];
cardInfo[27] = ["land", "land", "land", "land"];
cardInfo[28] = ["land", "land", "land", "univ"];
cardInfo[29] = ["land", "land", "land", "univ"];
cardInfo[30] = ["land", "land", "land", "road"];
cardInfo[31] = ["land", "land", "land", "road"];
cardInfo[32] = ["land", "land", "univ", "univ"];
cardInfo[33] = ["land", "land", "univ", "univ"];
cardInfo[34] = ["land", "land", "road", "road"];
cardInfo[35] = ["land", "land", "road", "road"];
cardInfo[36] = ["land", "univ", "land", "univ"];
cardInfo[37] = ["land", "univ", "land", "univ"];
cardInfo[38] = ["land", "land", "univ", "univ"];
cardInfo[39] = ["univ", "land", "univ", "land"];
cardInfo[40] = ["univ", "land", "univ", "univ"];
cardInfo[41] = ["road", "land", "univ", "road"];
cardInfo[42] = ["univ", "land", "road", "road"];
cardInfo[43] = ["road", "land", "road", "road"];
cardInfo[44] = ["road", "land", "road", "univ"]; //起始圖
cardInfo[45] = ["univ", "road", "univ", "road"];
cardInfo[46] = ["road", "univ", "univ", "road"];
cardInfo[47] = ["road", "univ", "road", "road"];
cardInfo[48] = ["road", "road", "road", "road"];

cardInfo[49] = ["univ", "univ", "univ", "univ"];
cardInfo[50] = ["road", "univ", "univ", "univ"];
cardInfo[51] = ["land", "land", "land", "land"];
cardInfo[52] = ["univ", "land", "land", "land"];
cardInfo[53] = ["univ", "land", "land", "land"];
cardInfo[54] = ["road", "land", "land", "land"];
cardInfo[55] = ["road", "land", "land", "land"];
cardInfo[56] = ["univ", "land", "land", "univ"];
cardInfo[57] = ["univ", "land", "land", "univ"];
cardInfo[58] = ["road", "land", "land", "road"];
cardInfo[59] = ["road", "land", "land", "road"];
cardInfo[60] = ["univ", "land", "univ", "land"];
cardInfo[61] = ["univ", "land", "univ", "land"];
cardInfo[62] = ["univ", "land", "land", "univ"];
cardInfo[63] = ["land", "univ", "land", "univ"];
cardInfo[64] = ["univ", "univ", "land", "univ"];
cardInfo[65] = ["road", "road", "land", "univ"];
cardInfo[66] = ["road", "univ", "land", "road"];
cardInfo[67] = ["road", "road", "land", "road"];
cardInfo[68] = ["univ", "road", "land", "road"]; //起始圖
cardInfo[69] = ["road", "univ", "road", "univ"];
cardInfo[70] = ["road", "road", "univ", "univ"];
cardInfo[71] = ["road", "road", "univ", "road"];
cardInfo[72] = ["road", "road", "road", "road"];

cardInfo[73] = ["univ", "univ", "univ", "univ"];
cardInfo[74] = ["univ", "road", "univ", "univ"];
cardInfo[75] = ["land", "land", "land", "land"];
cardInfo[76] = ["land", "univ", "land", "land"];
cardInfo[77] = ["land", "univ", "land", "land"];
cardInfo[78] = ["land", "road", "land", "land"];
cardInfo[79] = ["land", "road", "land", "land"];
cardInfo[80] = ["univ", "univ", "land", "land"];
cardInfo[81] = ["univ", "univ", "land", "land"];
cardInfo[82] = ["road", "road", "land", "land"];
cardInfo[83] = ["road", "road", "land", "land"];
cardInfo[84] = ["land", "univ", "land", "univ"];
cardInfo[85] = ["land", "univ", "land", "univ"];
cardInfo[86] = ["univ", "univ", "land", "land"];
cardInfo[87] = ["univ", "land", "univ", "land"];
cardInfo[88] = ["univ", "univ", "univ", "land"];
cardInfo[89] = ["univ", "road", "road", "land"];
cardInfo[90] = ["road", "road", "univ", "land"];
cardInfo[91] = ["road", "road", "road", "land"];
cardInfo[92] = ["road", "univ", "road", "land"]; //起始圖
cardInfo[93] = ["univ", "road", "univ", "road"];
cardInfo[94] = ["univ", "road", "road", "univ"];
cardInfo[95] = ["road", "road", "road", "univ"];
cardInfo[96] = ["road", "road", "road", "road"];

/*測試：card資訊印出
for(i=0;i<25;i++){
	document.write("<br>");
	for(j=0;j<4;j++){
		document.write("cardInfo[" +i+ "][" +j+ "]=" +cardInfo[i][j]);
	}
}
//*/

var n;

var mapInfo = new Array(143);
for(k=0;k<143;k++){
	mapInfo[k] = new Array(143);
	//for(k=0;k<143;k++){
	for(l=0;l<143;l++){
		mapInfo[k][l] = 0;
	}
}
mapInfo[72][72] = 20; //起始圖
//mapInfo[72][73] = 21;

/*測試：map資訊印出
for(k=0;k<143;k++){
	document.write("<br>");
	for(l=0;l<143;l++){
		document.write("mapInfo[" +k+ "]" +mapInfo[k]);
	}
}
//*/

//print(cardInfo); //這是列印辣XD 是會連到印表機的列印!!!

var slaveInfo = new Array(24);

slaveInfo[0]  = []; // cardInfo[0]是empty,所以什麼都不能放什麼都不能放

slaveInfo[1]  = [1, 9];
slaveInfo[2]  = [1, 9];
slaveInfo[3]  = [9];
slaveInfo[4]  = [2, 6];
slaveInfo[5]  = [2, 6];
slaveInfo[6]  = [2, 5, 6, 7];
slaveInfo[7]  = [2, 5, 6, 7];
slaveInfo[8]  = [1, 5];
slaveInfo[9]  = [1, 5];
slaveInfo[10] = [2, 4, 5, 9];
slaveInfo[11] = [2, 4, 5, 9];
slaveInfo[12] = [2, 6, 9];
slaveInfo[13] = [2, 6, 9];
slaveInfo[14] = [2, 8, 9];
slaveInfo[15] = [2, 6, 9];
slaveInfo[16] = [2, 9];
slaveInfo[17] = [2, 4, 6, 7];
slaveInfo[18] = [2, 4, 5, 7];
slaveInfo[19] = [2, 4, 5, 6, 7, 8, 9];
slaveInfo[20] = [2, 3, 6, 9]; //起始圖
slaveInfo[21] = [4, 8, 9];
slaveInfo[22] = [3, 7, 9];
slaveInfo[23] = [2, 4, 5, 6, 7, 8];
slaveInfo[24] = [1, 2, 3, 4, 5, 6, 7, 8];

slavePos = [ [-30, -30], [0, -30], [-30, 30], [0, 30], [30, 30], [30, 0], [30, -30], [0, -30], [0, 0] ];
	
var temp_slave = new Array();
var slave_i, slave_j;
function slaveXY() {		
	for(i=0; i<HowManyCard; i++){
		rotateNo = (CardsDegree[i]/90); //轉幾次
		
		for(j=0; j < slaveInfo[TypeOfCard[i]].length; j++){
			if(slaveInfo[i][j] != 9){
				temp_slave[i][j] = (slaveInfo[TypeOfCard[i]][j] + (rotateNo * 2)) % 8;
			}
			else{
				temp_slave[i][j] = 9;
			}
		}
	}
	
	for(slave_i=0; slave_i<HowManyCard; slave_i++){
		for(slave_j=0; slave_j< temp_slave[slave_i].length; slave_j++){
			var image = new Image();
			image.src = "assets/" + redPoint + ".png";
			image.onload = handleImageSlave;
			
			update = true;
		}
		
	}
	
}

	//judge();

	//*判斷可放的位置
function judge() {
	direction =  (degree-90)/90;
	n = ttt;
	direction %= 4 ; // 旋轉次數 mod 4
	n += (24*direction); // 卡片編號 * 24, 可以改最上方的d值作測試
	
	for(k=0;k<143;k++){
		for(l=0;l<143;l++){
			//是否已放置卡片:若有
			if (mapInfo[k][l]!=0){
				var u = mapInfo[k][l]; // u 會是地圖上有的卡的卡號
				
				//有卡之位置
				var uy = k;
				var ux = l;
	//			document.write("<br>uy=" +uy+ " ux=" +ux+ " _4");
				//周遭資訊
				var up = mapInfo[uy-1][ux];
				var ri = mapInfo[uy][ux+1];
				var dw = mapInfo[uy+1][ux];
				var le = mapInfo[uy][ux-1];
	//			document.write("<br>cardInfo[" +up+ "]=" +cardInfo[up] +" _5_Up");
	//			document.write("<br>cardInfo[" +ri+ "]=" +cardInfo[ri] +" _5_Right");
	//			document.write("<br>cardInfo[" +dw+ "]=" +cardInfo[dw] +" _5_Down");
	//			document.write("<br>cardInfo[" +le+ "]=" +cardInfo[le] +" _5_Left");
				
				//* 下一張卡預計放置位置
				//上
				if (up==0){
					var ny = uy-1;
					var nx = ux;						
					mapInfo[ny][nx] = n;
					
					var nup = mapInfo[ny-1][nx];
					var nri = mapInfo[ny][nx+1];
					var ndw = mapInfo[ny+1][nx];
					var nle = mapInfo[ny][nx-1];

					judgeOK(nup, nri, ndw, nle, ny, nx);					 
				} // if up=0
				//右
				if (ri==0){
					var ny = uy;
					var nx = ux+1;						
					mapInfo[ny][nx] = n;
					
					var nup = mapInfo[ny-1][nx];
					var nri = mapInfo[ny][nx+1];
					var ndw = mapInfo[ny+1][nx];
					var nle = mapInfo[ny][nx-1];

					judgeOK(nup, nri, ndw, nle, ny, nx);					 
				} // if ri=0
				//下
				if (dw==0){
					var ny = uy+1;
					var nx = ux;						
					mapInfo[ny][nx] = n;
					
					var nup = mapInfo[ny-1][nx];
					var nri = mapInfo[ny][nx+1];
					var ndw = mapInfo[ny+1][nx];
					var nle = mapInfo[ny][nx-1];

					judgeOK(nup, nri, ndw, nle, ny, nx);					 
				} // if dw=0
				//左
				if (le==0){
					var ny = uy;
					var nx = ux-1;						
			//		document.write("<br>ny=" +ny+ " nx=" +nx+ " _6");
					mapInfo[ny][nx] = n;
			//		document.write("<br>cardInfo[" +n+ "]=" +cardInfo[n] +" _7");
					var nup = mapInfo[ny-1][nx];
					var nri = mapInfo[ny][nx+1];
					var ndw = mapInfo[ny+1][nx];
					var nle = mapInfo[ny][nx-1];

			//		document.write("<br>cardInfo[" +nup+ "]=" +cardInfo[nup] +" _8_Up");
			//		document.write("<br>cardInfo[" +nri+ "]=" +cardInfo[nri] +" _8_nRight");
			//		document.write("<br>cardInfo[" +ndw+ "]=" +cardInfo[ndw] +" _8_nDown");
			//		document.write("<br>cardInfo[" +nle+ "]=" +cardInfo[nle] +" _8_Left");

					judgeOK(nup, nri, ndw, nle, ny, nx);					 
				} // if le=0
				//*/
	
			} // if!=0		
		} // for l --> x
	} // for k --> y
} // judge() 
//*/

function judgeOK(nup, nri, ndw, nle, ny, nx) {

	countOK = 0;
	///相鄰邊是否相符
	if(cardInfo[nup][2] == cardInfo[n][0] || nup == 0){
		countOK += 1;
	}
	if(cardInfo[nri][3] == cardInfo[n][1] || nri == 0){
		countOK += 1;
	}
	if(cardInfo[ndw][0] == cardInfo[n][2] || ndw == 0){
		countOK += 1;
	}
	if(cardInfo[nle][1] == cardInfo[n][3] || nle == 0){
		countOK += 1;
  }
	//四邊是否都符合
	if(countOK == 4){
		//console.log("(x,y)=" + "("+(nx-72+3)*150 + "," + (ny-72+2)*150 + ")");
		//alert("Yes");
		RedNumber++;
		RedRangeX[RedNumber] = (nx-72+3)*150 ;
		RedRangeY[RedNumber] = (ny-72+2)*150;
		
		var ii = new Image();
		ii.src = "assets/ImageRed.png"
		ii.onload = handleImageRed;
//		document.write("<br>cardInfo[" +ny+ "][" +nx+ "] OK!!! _9_nOK ");
	}
	else {
		/*console.log(cardInfo[nup][2]+nup+" == "+cardInfo[n][0] + "  /  "+
		cardInfo[nri][3] +nri+" == "+cardInfo[n][1] + "  /  "+
		cardInfo[ndw][0] +ndw+" == "+ cardInfo[n][2] + "  /  "+
		cardInfo[nle][1] +nle+"=="+ cardInfo[n][3]+"  ;  ");
		console.log("[ "+ny+" ] [ "+nx+" ]");*/
		//alert("NO");
//		document.write("<br>countOK = " +countOK+ " NO!!! _9_nNO ");
	}


	mapInfo[ny][nx] = 0;

} // judgeOK()
