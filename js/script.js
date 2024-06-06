function setup(){
    createCanvas(1280,720)
    background(243,1,234)
}
function draw(){
    background(220,3,209);
    var x = 0;
    var y = 0;
    for(let j = 0; j<3;j++){
        console.log("Dibujando fila ",j+1)
        for (let index = 0; index < 10; index++) {
            console.log("Dibujando unidades", index+1)
            rect(x,y,128,10)
            x=x+128;   
        }
        x=0;
        y=y+10;
    }
}

