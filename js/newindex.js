
var text_title ="Overlay text";

var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img,ctx,"#0B656E",'p3.jpg',470,300));


var canvas1 = document.getElementById('imageCanvas1');
var ctx1 = canvas1.getContext('2d');
var img1 = new Image();
img1.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img1,ctx1,"#308F98",'p2.jpg',345,400));


var canvas2 = document.getElementById('imageCanvas2');
var ctx2 = canvas2.getContext('2d');
var img2 = new Image();
img2.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img2,ctx2,"#0B656E",'p1.jpg',345,400));


var canvas3 = document.getElementById('imageCanvas3');
var ctx3 = canvas3.getContext('2d');
var img3 = new Image();
img3.crossOrigin="anonymous";

    window.addEventListener('load', DrawPlaceholder(img3,ctx3,"#FFFFFF",'p4.jpg',350,400));



var canvas4 = document.getElementById('imageCanvas4');
var ctx4 = canvas4.getContext('2d');
var img4 = new Image();
img4.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img4,ctx4,"#0B656E",'p5.jpg',350,100));



var canvas5 = document.getElementById('imageCanvas5');
var ctx5 = canvas5.getContext('2d');
var img5 = new Image();
img5.crossOrigin="anonymous";

window.addEventListener('load', DrawPlaceholder(img5,ctx5,"#0B656E",'p6.jpg',350,220));



function DrawPlaceholder(photo,canv,clr,sorc,x,y) {
    photo.onload = function() {
        DrawOverlay(photo,canv);
        DrawText(canv,clr);
        DynamicText(canv,photo,clr,x,y)
};
    photo.src =sorc;
  
}
function DrawOverlay(photo,canv) {
canv.drawImage(photo,0,0);
    canv.fillStyle = 'rgba(0, 0, 0, 0)';
    canv.fillRect(0, 0, canvas.width, canvas.height);
}
function DrawText(canv,fillcolor) {
    canv.fillStyle = fillcolor; 
    canv.textBaseline = 'middle';
    canv.font = "19px Almarai";
}
function DynamicText(canv,photo,clr,x,y) {
  document.getElementById('name').addEventListener('keyup', function() {
    canv.clearRect(0, 0, canvas.width, canvas.height);
    DrawOverlay(photo,canv);
    DrawText(canv,clr); 
    text_title = this.value;
   
      
    var lineheight = 30;
var lines = text_title.split('\n');

for (var i = 0; i<lines.length; i++)
    canv.fillText(lines[i], x, y + (i*lineheight) );  
    canv.textAlign = 'center';
  });  
}




download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};

download_img1 = function(el) {
  var image1 = canvas1.toDataURL("image/jpg");
  el.href = image1;
};

download_img2 = function(el) {
  var image2 = canvas2.toDataURL("image/jpg");
  el.href = image2;
};

download_img3 = function(el) {
  var image3 = canvas3.toDataURL("image/jpg");
  el.href = image3;
};

download_img4 = function(el) {
  var image4 = canvas4.toDataURL("image/jpg");
  el.href = image4;
};

download_img5 = function(el) {
  var image5 = canvas5.toDataURL("image/jpg");
  el.href = image5;
};

download_img6 = function(el) {
  var image6 = canvas6.toDataURL("image/jpg");
  el.href = image6;
};

function setWordOrder(e) {
	if (e.key == " ") {
		var textbox = document.getElementById("mytextarea");
		textbox.value += "\u200F";
	}
}

