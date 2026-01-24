 // Available coupons
import { getCartItems,getCartTotal } from './cart.js'
const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
let copoun=coupons[couponCode]
if(!copoun) return{valid:false,message:'Coupon does not exist'}
// 2. Check minimum amount requirement
if(cartTotal<copoun.minAmount) return {valid:false,message:'Minimum amount not added'}
// 3. Check category requirement (if any)
if(copoun.category){
    let hasCategory=false
    for(let item of cartItems){
        if(item.category===copoun.category){
            hasCategory=true
            break
        }
    }
    if(!hasCategory){
        return { valid:true,  message:'Copoun not applicable for this category'}
    }
}
return { valid:true, message:'Coupon applied successfully'}
// Return { valid: true/false, message: '...' }
}


export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
let discountAmount
let copoun=coupons[couponCode]
if(copoun.type==='percentage')
    discountAmount=(cartTotal/100)*copoun.value
else discountAmount=(cartTotal-copoun.value)
// Return discount amount
return discountAmount
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
let copounResult=validateCoupon(couponCode,cartTotal,cartItems)
if(!copounResult.valid) return 'Copoun Inavlid'
// 2. If valid, calculate discount
let discountAmount=calculateDiscount(couponCode,cartTotal)
// 3. Return final amount and discount details
return { 
  originalTotal: cartTotal, 
  discount: discountAmount,
  finalTotal: cartTotal-discountAmount,
  message: 'Congrats copouns applied'
}
}