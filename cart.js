function updateQuantity(button)
{
    let quantity = button.parentElement.querySelector('.quantity');
    if(button.classList.contains('decrement') && parseInt(quantity.textContent)>1)
    {
        quantity.textContent = parseInt(quantity.textContent)-1;
    }
    else if(button.classList.contains('increment'))
    {
        quantity.textContent = parseInt(quantity.textContent)+1;
    }
}

function removeProduct(button)
{
    let productList = document.querySelector('.cart_products_list');
    let product = button.closest('.product');
    productList.removeChild(product);
}