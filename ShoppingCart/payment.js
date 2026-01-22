import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
let cartItems=getCartItems()
let cartTotal=getCartTotal()
let stotal=cartTotal
// 2. Apply discount if coupon provided
let discountResult
if (couponCode) {
    discountResult = applyDiscount(cartTotal, couponCode, cartItems);
        if (!discountResult.valid){
        return discountResult.message
        }
    stotal = discountResult.finalAmount
}
// 3. Validate payment method (card/upi/cod)
let valid=validatePaymentMethod(paymentMethod)
if(!valid) return 'Invalid Payment method'
// 4. Process payment (simulate)
console.log('Processing Payment.......')
// 5. Reduce stock for all items
for(let item of cartItems){
    reduceStock(item.id,item.quantity)
}
// 6. Clear cart
clearCart()
// 7. Generate order summary
return{
  orderId: generateOrderId(),
  items: cartItems,
  subtotal: cartTotal,
  discount: discountResult ? cartTotal - stotal : 0,
  total: stotal,
  paymentMethod: paymentMethod,
  status: 'success',
  message: `Amount paid: ₹${stotal}`

}
}
export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
if(method!=='card'&&method!=='upi'&&method!=='cod')
    return false
return true
}

function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}