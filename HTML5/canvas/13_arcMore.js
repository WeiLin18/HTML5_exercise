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

    context.lineWidth = 15;
    context.strokeStyle = 'red';

    context.beginPath();
    context.arc(250, 250, 150, 0, 2 * Math.PI);
    context.stroke();

    context.translate(250, 250);
    
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -100);
    context.stroke();

    // context.beginPath();
    // context.moveTo(250, 250);
    // context.lineTo(250, 150);
    // context.stroke();

    context.translate(-250, -250);
    context.lineWidth = 20;

    let gradient = context.createRadialGradient(750, 550, 190, 750, 550, 210);
    gradient.addColorStop(  0, '#555');
    gradient.addColorStop(0.5, '#fff');
    gradient.addColorStop(  1, '#555');

    context.beginPath();
    context.arc(750, 550, 200, 0, 2 * Math.PI);
    context.strokeStyle = gradient;
    context.stroke();
    
}
window.addEventListener('load',doFirst);