function doFirst(){
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
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
    
    canvas.addEventListener('mousemove',drawUsePen);    
}
function drawUsePen(e){
    context.fillStyle = 'red';
    context.strokeStyle = 'red';
    
    // context.strokeRect(e.pageX, e.pageY, 5, 5);

    context.beginPath();
    context.arc(e.pageX, e.pageY, 5, 0, 2 * Math.PI);
    context.fill();
}
window.addEventListener('load',doFirst);