var basket = {
    goods: {},
    add: function (e) {
        var id = e.target.parentElement.getAttribute('id');
        var index = e.target.parentElement.getAttribute('index');
        if(basket.goods.hasOwnProperty(id)){
            basket.goods[id].amount += 1;
        } else {
            basket.goods[id] = {
                "id": id,
                "name": goods[index].name,
                "price": goods[index].price,
                "amount": 1,
            };
        }
        basket.show();
    },
    show: function () {
        var goodsInBasket = 0;
        for (var i in basket.goods) goodsInBasket++;
        var basketDiv = document.getElementsByClassName('basket-div')[0];
        if (goodsInBasket == 0) {
            basketDiv.innerHTML = '<h3>Корзина пуста</h3>';
            return;
        } 
        
        var totalSum = 0;
        var table = document.createElement('table');
        var headRow = document.createElement('tr');
        headRow.innerHTML =  '<th>Товары</th><th>Кол-во</th><th>Стоимость</th>';
        table.append(headRow);
        
        for (var i in basket.goods) {
            var tr = document.createElement('tr');          
            tr.innerHTML =  '<td>' + basket.goods[i].name + '</td>' + 
                            '<td>' + basket.goods[i].amount + '</td>' + 
                            '<td>' +(basket.goods[i].amount * basket.goods[i].price) + RUB + '</td>';
            table.append(tr);
            totalSum += basket.goods[i].amount *  basket.goods[i].price;
        }
                
        basketDiv.innerHTML = '';
        var h = document.createElement('h3');
        h.innerHTML = 'Корзина';
        basketDiv.append(h);
        basketDiv.append(table);
        var p = document.createElement('p');
        p.innerHTML = 'Общая сумма: ' + totalSum + RUB;
        basketDiv.append(p);
    }
}
