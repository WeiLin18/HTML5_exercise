function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
//格線開始
    context.beginPath();
    for(let i = 0; i < 100; i++){
        let position = i * 50;

        //水平線
        context.moveTo(0, position);
        context.lineTo(canvas.width, position);
        context.fillText(position, 0, position);
        

        //垂直線
        context.moveTo(position, 0);
        context.lineTo(position, canvas.height);
        context.fillText(position, position, 10);
    }   
    context.strokeStyle = 'rgba(0,0,0,0.2)';
    context.stroke();
//格線結束

    // let gradient = context.createLinearGradient(100, 100, 600, 400);
    let gradient = context.createLinearGradient(100, 250, 600, 250);
    // gradient.addColorStop(0, 'red');
    // gradient.addColorStop(1, 'blue');
    // gradient.addColorStop(0.5, 'yellow');

    gradient.addColorStop(  0, 'red');
    gradient.addColorStop(0.2, 'orange');
    gradient.addColorStop(0.4, 'yellow');
    gradient.addColorStop(0.5, 'green');
    gradient.addColorStop(0.7, 'blue');
    gradient.addColorStop(0.9, 'indigo');
    gradient.addColorStop(  1, 'violet');
  
    // context.fillStyle = 'yellow';
    context.fillStyle = gradient;
    context.fillRect(100, 100, 500, 300);    
}
window.addEventListener('load',doFirst);