//1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
//2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.
//3) *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.
var RUB = ' &#8381;';
var goods = [
    {
        id: 1,
        name: "Молоток",
        price: 150
    },
    {
        id: 2,
        name: "Ножовка",
        price: 270
    },
    {
        id: 3,
        name: "Отвертка плоская",
        price: 85
    }
];

function createElementWithClass(el, cl) {
    var element = document.createElement(el);
    element.classList.add(cl);
    return element;
}


function init() {
    var container = createElementWithClass('div', 'container');
    var basketDiv = createElementWithClass('div', 'basket-div');
    var content = createElementWithClass('div', 'content');

    var left = createElementWithClass('div', 'left');
    left.onclick = changeFullSizeImage;
    var right = createElementWithClass('div', 'right');
    right.onclick = changeFullSizeImage;

    var fullSizeImageDiv = createElementWithClass('div', 'full-size-image-div');
    var goodsDiv = createElementWithClass('div', 'goods-div');

    content.appendChild(goodsDiv);
    
    var fullSizeImage = createElementWithClass('img', 'full-size-image');
    fullSizeImage.setAttribute('src', 'img/big/' + goods[0].id + '.jpg' );
    fullSizeImage.setAttribute('onerror', 'this.src=\'img/image-not-found.jpg\'');
    
    fullSizeImageDiv.appendChild(left);
    fullSizeImageDiv.appendChild(fullSizeImage);
    fullSizeImageDiv.appendChild(right);
    
    for (var i = 0; i < goods.length; i++) {
        var goodsContainer = createElementWithClass('div', 'goods-container');
        goodsContainer.setAttribute('id', goods[i].id);
        goodsContainer.setAttribute('index', i);
        
        var goodsImage = createElementWithClass('img', 'goods-image');
        goodsImage.setAttribute('src', 'img/small/' + goods[i].id + '.jpg');
        goodsImage.setAttribute( 'height', '213');
        goodsImage.setAttribute('alt', goods[i].name);
        goodsImage.onclick = function (e) {
            setFullSizeImage(e.target.parentElement.getAttribute('id'));
            currentFullSizeImage = e.target.parentElement.getAttribute('index');
        },
        goodsContainer.appendChild(goodsImage);
        
        var goodsName = createElementWithClass('span', 'goods-name');
        goodsName.innerHTML = goods[i].name;
        goodsContainer.appendChild(goodsName);
        
        var goodsPrice = createElementWithClass('span', 'goods-price');
        goodsPrice.innerHTML = 'Цена: ' + goods[i].price + RUB;
        goodsContainer.appendChild(goodsPrice);
        
        var buttonBuy =  createElementWithClass('button', 'button-buy');
        buttonBuy.innerHTML = 'Купить';
        buttonBuy.onclick = basket.add;
        goodsContainer.appendChild(buttonBuy);
        
        goodsDiv.appendChild(goodsContainer);
    }
    
    content.prepend(fullSizeImageDiv);
    container.append(content);
    container.append(basketDiv);
    document.body.append(basketDiv);
    document.body.append(container);
    basket.show();
}

document.readyState = init();
