function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

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
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
    
}
window.addEventListener('load',doFirst);