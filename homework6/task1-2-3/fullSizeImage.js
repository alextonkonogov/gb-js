var currentFullSizeImage = 0;

function setFullSizeImage(id) {
    document.getElementsByClassName('full-size-image')[0].setAttribute('src', 'img/big/' + id + '.jpg' );
}

function changeFullSizeImage(e) {
    var direction = e.target.classList[0];
    var fullSizeImage = document.getElementsByClassName('full-size-image')[0];
    
    switch(direction) {
        case 'right':
           if (currentFullSizeImage == (goods.length-1)) {
               setFullSizeImage(goods[0].id);
               currentFullSizeImage = 0;
           } else {
               setFullSizeImage(goods[++currentFullSizeImage].id);
           }
           break;
            
        case 'left':
            if (currentFullSizeImage == 0) {
                setFullSizeImage(goods[goods.length - 1].id);
                currentFullSizeImage = goods.length - 1;
           } else {
               setFullSizeImage(goods[--currentFullSizeImage].id);
           }
           break;
    }
}
