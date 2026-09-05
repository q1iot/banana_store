let cart = [];

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function showCheckoutForm() {
  if (cart.length === 0) {
    alert("السلة فارغة حالياً!");
    return;
  }
  toggleCart();
  document.getElementById('checkout-modal').style.display = 'flex';
}

function hideCheckoutForm() {
  document.getElementById('checkout-modal').style.display = 'none';
}

document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const orderData = {
    name: document.getElementById('cust-name').value,
    phone: document.getElementById('cust-phone').value,
    address: document.getElementById('cust-address').value,
    notes: document.getElementById('cust-notes').value,
    items: cart,
    date: new Date().toLocaleString()
  };

  alert("شكراً لك! تم استقبال طلبك وسنتصل بك قريباً للتأكيد والدفع عند الاستلام.");

  cart = [];
  updateCartUI();
  hideCheckoutForm();
});

function updateCartUI() {
  document.getElementById('cart-count').innerText = cart.length;
}
