var posXNave = 610;
var posYNave= 700;
var posXPixel1 = 50;
var posYPixel1 = 50;
var posXPixel2 = 900;
var posYPixel2 = 50;
var vxbala = 2;
var vybala = -2;
function preload(){
imagenNave = loadImage('../assets/navecita.png');
imagenPixel1 = loadImage('../assets/pixel1.png');
imagenPixel2 = loadImage('../assets/pixel2.png');
imagenbala = loadImage('../assets/bala.png');
}
function comprobarSiChocaConpixeles(){
    Pixeles.forEach(posYPixel1  =>{
        if(!imagenPixel1.isBroken){
            if((posYPixel1.y == posYBala && posXBala>=posYPixel1.x) && posXBala <= pixelX.x + 128 ){
                pixelX.isBroken = true;
                vybala = vybala*-1;
            }

        }
    })
}
function setup(){
    createCanvas(1280,900)
    colorMode(RGB)


}
function draw(){
    background(244,141,48)
//circle(20,20,20,20)
pixelX  = 64 ;
pixelY = 0;
for (let i = 0; i < 9; i++) {
    if(i%2 == 0){
        image(imagenPixel1, pixelX, posYPixel1, 120,120)
  
    }else{
        image(imagenPixel2, pixelX, posYPixel2, 120,120)
    }
    pixelX+=128;
}
image(imagenbala, 665, 690, 10,20)
image(imagenNave, posXNave, posYNave, 120,120)
keydown();

}
function keydown(){
    if (keyIsDown(37) && posXNave > 0) {
        posXNave = posXNave-10;
      }
      if(keyIsDown(39) && posXNave < (1280-60)){
        posXNave = posXNave +10;
        }
        }