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

    context.lineWidth = 20;
    context.strokeStyle = 'red';

// lineCap
    context.beginPath();
    context.lineCap='butt';
    context.moveTo(100, 100);
    context.lineTo(250, 100);
    context.stroke();

    context.beginPath();
    context.lineCap='round';
    context.moveTo(100, 150);
    context.lineTo(250, 150);
    context.stroke();

    context.beginPath();
    context.lineCap='square';
    context.moveTo(100, 200);
    context.lineTo(250, 200);
    context.stroke();

// lineJoin
    context.lineJoin='miter';
    context.strokeRect(100, 300, 100, 200);

    context.lineJoin='bevel';
    context.strokeRect(300, 300, 100, 200);

    context.lineJoin='round';
    context.strokeRect(500, 300, 100, 200);
    
    
    
    
    


    
}
window.addEventListener('load',doFirst);