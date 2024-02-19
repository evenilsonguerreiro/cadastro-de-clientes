const inputNome = document.querySelector('#input-Nome')
const inputEmail = document.querySelector('#input-Email')
const inputTel = document.querySelector('#input-Tel')
const form = document.querySelector('#form')


let linhas = ''


form.addEventListener('submit', function(e){
    e.preventDefault()


    linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputEmail.value}</td>`
    linha += `<td>${inputTel.value} <i onclick="deletar()" class="bi bi-trash"></i></td>`
    linha += `</tr>`;
    linhas += linha

    const tbody = document.querySelector('#t-body')
    
    tbody.innerHTML = linhas


    inputNome.value = ''
    inputEmail.value = ''
    inputTel.value = ''

})

function deletar(){
    
}





