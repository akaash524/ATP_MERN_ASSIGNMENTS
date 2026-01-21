import { getProductById, checkStock } from './product.js';                       
let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
// 1. Get product details
let product=getProductById(productId)
if(product==='undefined') return 'Product Not found'
// 2. Check stock availability
  if (!checkStock(productId, quantity)) {
    return "Insufficient stock"
  }
// 3. Check if product already in cart
//    - If yes, update quantity
let exist=false
cartItems=cartItems.map((e)=>{
    if(e.id===productId){
        exist=true
        return{
            ...e,
            quantity:e.quantity+quantity
        }
    }
    return e
})
//    - If no, add new item
if(!exist){
    cartItems=[
        ...cartItems,
        {
            id:productId,
            name:product.name,
            price:product.price,
            'quantity':quantity
        }
    ]
    exist=true
}
// 4. Return success/error message
if(exist)
    return 'SucessFully Updated'
return 'Failed to Update'

}

export function removeFromCart(productId) {
// Remove product from cart
cartItems=cartItems.filter((e)=>e.id!==productId)
}

export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
}

export function getCartItems() {
// Return all cart items with product details
}

export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
}

export function clearCart() {
// Empty the cart
}