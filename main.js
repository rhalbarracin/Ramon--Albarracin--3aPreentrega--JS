// Inicializar el balance en 0
let balance = 0;

// Obtener el elemento del balance del HTML
const balanceEl = document.getElementById('balance');

// Actualizar el balance en el HTML
function actualizarBalance() {
  balanceEl.textContent = `Balance: $${balance.toFixed(2)}`;
}

// Obtener los botones de depósito y retiro del HTML
const depositarBtn = document.getElementById('depositarBtn');
const retirarBtn = document.getElementById('retirarBtn');

// Manejar los eventos de depósito y retiro
depositarBtn.addEventListener('click', () => {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  if (isNaN(cantidad)) return alert('Ingrese un número válido');
  balance += cantidad;
  actualizarBalance();
  guardarBalance();
});
retirarBtn.addEventListener('click', () => {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  if (isNaN(cantidad)) return alert('Ingrese un número válido');
  if (cantidad > balance) return alert('No tiene suficiente saldo');
  balance -= cantidad;
  actualizarBalance();
  guardarBalance();
});

// Obtener el balance del almacenamiento local si existe
if (localStorage.getItem('balance')) {
  balance = parseFloat(localStorage.getItem('balance'));
}

// Guardar el balance en el almacenamiento local
function guardarBalance() {
  localStorage.setItem('balance', balance);
}

// Actualizar el balance en el HTML
actualizarBalance();
