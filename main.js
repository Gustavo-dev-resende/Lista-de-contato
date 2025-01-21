const form = document.getElementById('form-contato');
let linhas = '';
const contatos = new Set(); 

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-telefone');
    const nome = inputNomeContato.value.trim();
    const numero = inputNumero.value.trim();

    if (!nome || !numero) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const chaveContato = `${nome}-${numero}`;
    if (contatos.has(chaveContato)) {
        alert('Este contato já foi adicionado.');
        return;
    }

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${numero}</td>`;
    linha += '</tr>';

    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    contatos.add(chaveContato);

    inputNomeContato.value = '';
    inputNumero.value = '';

    alert('Contato salvo com sucesso!');
});
