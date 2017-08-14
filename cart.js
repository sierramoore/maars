
function isSameItem(a, b) {
    return a.name == b.name
        && a.desc == b.desc
        && a.price == b.price;
}
function findOrderItem(orderItems, menuItem) {
    for (let i = 0; i < orderItems.length; ++i) {
        let orderItem = orderItems[i];
        if (isSameItem(orderItem.menuItem, menuItem)) {
            return orderItem;
        }
    }

    return null;
}

function loadCart(){
    let orderItems = JSON.parse(sessionStorage.cart);
    if (!Array.isArray(orderItems)) {
        orderItems = [];
    }
    return orderItems;
}

function saveCart(orderItems){
    sessionStorage.cart = JSON.stringify(orderItems);
}

function clearCart(){
    orderItems = [];
    saveCart(orderItems);
    return orderItems;
}