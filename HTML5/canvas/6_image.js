function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let image = new Image();
    image.src = '../../images/cityscape.jpg';
    image.addEventListener('load',function(){
        // context.drawImage(image, 100, 100);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
}
window.addEventListener('load',doFirst);