const form = document.getElementById('form-contato');
let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`;
    linha += `<td> ${inputNumero.value}</td>`;
    linha += '</tr>'

    linhas += linha

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumero.value = '';

});