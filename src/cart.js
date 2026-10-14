function addToCart(cart, product, quantity) {
  const productInCart = cart.find(el => el.id === product.id)

  if (quantity <= 0) throw new RangeError('Недопустимое количество');
  if (quantity > product.stock) throw new RangeError('Недопустимое количество');

  if (productInCart) {
    productInCart.quantity += quantity
  } else {
    cart.push({ ...product, quantity: quantity })
  }
  return cart
}

function changeQuantity(cart, id, quantity) {
  const productInCart = cart.find(el => el.id === id)

  if (!productInCart) return cart
  if (quantity <= 0) throw new RangeError('Недопустимое количество');
  if (quantity > productInCart.stock) throw new RangeError('Недопустимое количество');

  productInCart.quantity = quantity
  return cart
}

function removeFromCart(cart, id) {
  if (!cart.find(el => el.id === id)) return cart

  cart = cart.filter(el => el.id !== id)
  return cart
}

function calculateCartSubtotal(cart) {
  if (cart.length === 0) return 0
  return cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
}

function calculateOrderTotal(cart, promo) {
  const result = {
    subtotal: 0,
    discount: 0,
    delivery: 0,
    total: 0,
  }
  result.subtotal = calculateCartSubtotal(cart)

  if (result.subtotal === 0) return result
  if (promo === 'SAVE10' && result.subtotal >= 20000) {
    result.discount = result.subtotal / 10
  }
  result.delivery = result.subtotal < 50000 ? 30000 : 0
  result.total = result.subtotal - result.discount + result.delivery
  return result
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
