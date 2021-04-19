function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.font = 'bold 50px Tahoma';
    // context.textBaseline = 'alphabetic';
    //第一個字
    context.fillText('Style', 100, 100);

    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.stroke();

     //第二個字
    context.shadowOffsetX = 3;
    context.shadowOffsetY = -3;
    context.shadowColor = 'rgba(255,0,0,1)';
    // context.shadowBlur = 5;

     context.fillText('Style', 100, 250);

     //第三個字
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
     context.shadowBlur = 8;
     context.fillStyle = '#fff';
     
     context.fillText('Style', 100, 400);

     //第四個字
     context.fillText('Style', 100, 550);

     context.shadowColor = 'blue';
     context.fillText('Style', 100, 550);
    
}
window.addEventListener('load',doFirst);