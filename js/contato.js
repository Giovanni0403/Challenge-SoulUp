const satisfacao = document.getElementById('satisfacao');
const valorSatisfacao = document.getElementById('valorSatisfacao');

satisfacao.addEventListener('input', function() {
    valorSatisfacao.textContent = this.value;
});