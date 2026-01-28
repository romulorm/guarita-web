document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura dos dados
    const dadosVeiculo = {
        placa: document.getElementById('placa').value.toUpperCase(),
        veiculo: document.getElementById('veiculo').value,
        unidade: document.getElementById('unidade').value,
        ativo: document.getElementById('ativo').checked
    };

    // Simulação de salvamento
    console.log("Enviando para o sistema LPR:", dadosVeiculo);

    // Feedback visual
    const btn = document.querySelector('.btn-salvar');
    const textoOriginal = btn.innerText;
    
    btn.innerText = "CADASTRADO COM SUCESSO!";
    btn.style.backgroundColor = "#4caf50";
    btn.style.color = "white";

    // Reset após 2 segundos
    setTimeout(() => {
        btn.innerText = textoOriginal;
        btn.style.backgroundColor = "";
        btn.style.color = "";
        document.getElementById('form-cadastro').reset();
    }, 2500);
});

// Máscara simples para placa (Transforma em maiúsculo enquanto digita)
document.getElementById('placa').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});