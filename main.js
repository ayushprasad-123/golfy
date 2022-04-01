var canvas = new fabric.Canvas("fabric");
var bx=0,by=0;
var hx=550;
var hy=250;
var myImg=null;
function draw_Img(url,x,y){
	fabric.Image.fromURL(url, function(Img){
		Img.scaleToWidth(50);
		Img.scaleToHeight(50);
		Img.set({
			top:y,
			left:x
		});
		canvas.add(Img);
		canvas.setActiveObject(Img);
		myImg= canvas.getActiveObject();
	});

}
window.addEventListener("keydown", keydown);
function keydown(e){
	if((bx<=hx+5)&&(bx>=hx-5)&&(by<=hy+5)&&(by>=hy-5)){
		canvas.remove(myImg);
		document.getElementById("hd3").innerHTML="You hit the Goal!"
		document.getElementById("fabric").style.borderColor="red";
	}else{
		key = e.keyCode;
		if(key==37){
			bx--;
			draw_Img("ball.png",bx,by);
		}else if(key==39){
			bx++;
			draw_Img("ball.png",bx,by);
		}else if(key==40){
			by++;
			draw_Img("ball.png",bx,by);
		}else if(key==38){
			by--;
			draw_Img("ball.png",bx,by);
		}
		canvas.remove(myImg);
	}
}
