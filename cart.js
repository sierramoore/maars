//for side cart

function isSameItem(a, b) {
    return a.name == b.name     // if the item has the same name, desc, and price the it is indeed the same item
        && a.desc == b.desc
        && a.price == b.price;
}
function findOrderItem(orderItems, menuItem) {      
    for (let i = 0; i < orderItems.length; ++i) {       // iterate each item by 1 as long as the item amount is larger 
        let orderItem = orderItems[i];
        if (isSameItem(orderItem.menuItem, menuItem)) {     // if the item in the cart is the same item display that item's title only 1x and incriment the qty
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
    sessionStorage.cart = JSON.stringify(orderItems);       // save cart items and display order items them in a string
}

function clearCart(){
    orderItems = [];
    saveCart(orderItems);
    return orderItems;
}
