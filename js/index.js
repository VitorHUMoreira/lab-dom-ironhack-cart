// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = `${+price.innerText * +quantity.value}`;
}

// ITERATION 2 & ITERATION 3
function calculateAll() {
  const products = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');
  let totalTotal = 0;
  products.forEach((element) => {
    updateSubtotal(element);
    totalTotal += +element.querySelector('.subtotal span').textContent;
  });
  total.innerText = `${totalTotal}`;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const tbody = target.closest('tbody');
  const row = target.closest('tr');
  tbody.removeChild(row);
}

// ITERATION 5
function createProduct() {
  const productName = document.querySelector(
    ".create-product input[type='text']"
  );
  const unitPrice = document.querySelector(
    ".create-product input[type='text']"
  );
  const productNameValue = document.querySelector(
    ".create-product input[type='text']"
  ).value;
  const unitPriceValue = document.querySelector(
    ".create-product input[type='number']"
  ).value;
  const tbody = document.querySelector('tbody');
  let tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = `<td class="name">
    <span>${productNameValue}</span>
  </td>
  <td class="price">$<span>${unitPriceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;
  tbody.appendChild(tr);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  productName.value = '';
  unitPrice.value = '';
  productName.focus();
}

window.addEventListener('load', () => {
  const removeBtn = document.querySelectorAll('.btn-remove');
  const createBtn = document.querySelector('#create');
  const calculatePricesBtn = document.getElementById('calculate');

  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  createBtn.addEventListener('click', createProduct);

  calculatePricesBtn.addEventListener('click', calculateAll);
});
