// Dados iniciais simulados
let dbVeiculos = [
    { placa: "BRA2E19", veiculo: "GM Blazer", unidade: "2ª Delegacia de Polícia", status: "Ativo" },
    { placa: "KLP-4055", veiculo: "Nissan Sentra", unidade: "Direção Geral", status: "Inativo" },
    { placa: "OLM-1122", veiculo: "Mitsubishi Pajero Dakar", unidade: "3ª Delegacia de Polícia", status: "Ativo" },
    { placa: "GTR-0990", veiculo: "Renault Logan", unidade: "1ª Delegacia de Polícia", status: "Ativo" }
];

const tabela = document.getElementById('tabela-veiculos');
const inputBusca = document.getElementById('inputBusca');

// Função para renderizar a tabela
function renderTabela(filtro = "") {
    tabela.innerHTML = "";
    const filtrados = dbVeiculos.filter(v => 
        v.placa.toLowerCase().includes(filtro.toLowerCase()) || 
        v.unidade.toLowerCase().includes(filtro.toLowerCase())
    );

    filtrados.forEach((v, index) => {
        const row = `
            <tr>
                <td><strong>${v.placa}</strong></td>
                <td>${v.veiculo}</td>
                <td>${v.unidade}</td>
                <td style="color: ${v.status === 'Ativo' ? '#4caf50' : '#f44336'}">${v.status}</td>
                <td>
                    <button class="btn-edit" onclick="abrirModal(${index})">Editar</button>
                </td>
            </tr>
        `;
        tabela.innerHTML += row;
    });
}

// Busca em tempo real
inputBusca.addEventListener('input', (e) => renderTabela(e.target.value));

// Lógica do Modal
let editIndex = null;
const modal = document.getElementById('modal-edit');

function abrirModal(index) {
    editIndex = index;
    const v = dbVeiculos[index];
    document.getElementById('edit-placa-label').innerText = `Placa: ${v.placa}`;
    document.getElementById('edit-veiculo').value = v.veiculo;
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
}

function salvarEdicao() {
    const novoModelo = document.getElementById('edit-veiculo').value;
    if(novoModelo) {
        dbVeiculos[editIndex].veiculo = novoModelo;
        renderTabela();
        fecharModal();
        alert("Veículo atualizado com sucesso!");
    }
}

// Simulação de Relatórios
function gerarRelatorio(tipo) {
    alert(`Gerando relatório de acessos em formato .${tipo}...\nO arquivo será baixado em instantes.`);
    console.log(`Relatório ${tipo.toUpperCase()} exportado com ${dbVeiculos.length} registros.`);
}

// Inicialização
renderTabela();