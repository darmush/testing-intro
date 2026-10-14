function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

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

function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
