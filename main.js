const inputNome = document.querySelector('#input-Nome');
const inputEmail = document.querySelector('#input-Email');
const inputTel = document.querySelector('#input-Tel');
const form = document.querySelector('#form');
const tbody = document.querySelector('#t-body');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${inputNome.value}</td>
    <td>${inputEmail.value}</td>
    <td>${inputTel.value}</td>
    <td><button class="btn btn-danger" onclick="deletar(this)">Deletar</button></td>
  `;

  tbody.appendChild(newRow);

  // Limpa os campos do formulário
  inputNome.value = '';
  inputEmail.value = '';
  inputTel.value = '';
});

function deletar(element) {
  const row = element.parentNode.parentNode;
  row.remove();
}


