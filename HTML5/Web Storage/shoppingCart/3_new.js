let storage = sessionStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = '';   //storage.setItem('addItemList','');
    }
    //幫每個Add Cart建立事件聆聽功能
    let list = document.querySelectorAll('.addButton');   //list是陣列
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(){
            let teddyInfo = document.querySelector(`#${this.id} input`).value;
            addItem(this.id,teddyInfo);
        });
    }
}
function addItem(itemId,itemValue){
    // alert(`${itemId}: ${itemValue}`);
    let image = document.createElement('img');
    image.src = 'imgs/' + itemValue.split('|')[1];

    let title = document.createElement('span');
    title.innerText = itemValue.split('|')[0];

    let price = document.createElement('span');
    price.innerText = itemValue.split('|')[2];

    let newItem = document.getElementById('newItem');

    //先判斷此處是否已有物件，如果有要先刪除
    // alert(newItem.childNodes.length);
    if(newItem.hasChildNodes()){        
        while(newItem.childNodes.length >= 1){
            newItem.removeChild(newItem.firstChild);
        }
    }

    //再顯示新物件
    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);

    //存入storage
    if(storage[itemId]){
        alert('You have checked.');
    }else{
        storage['addItemList']  += `${itemId}, `;       // storage['addItemList']  += itemId + ', ';
        storage.setItem(itemId,itemValue);
    }

    //計算購買數量和小計
    let itemString = storage.getItem('addItemList');
    let items = itemString.substr(0,itemString.length-2).split(', ');
    // console.log(items);    //["A1001", "A1005", "A1006", "A1002"]

    subtotal = 0;
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i]);
        let itemPrice = parseInt(itemInfo.split('|')[2]);

        subtotal += itemPrice;
    }

    document.getElementById('itemCount').innerText = items.length;
    document.getElementById('subtotal').innerText = subtotal;
}
window.addEventListener('load', doFirst);