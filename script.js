// Simulação de base de dados de veículos
const historicoAcessos = [
    { placa: "BRA2E19", status: "Autorizado" },
    { placa: "KLP-4055", status: "Não cadastrado" },
    { placa: "OLM-1122", status: "Autorizado" }
];

const logList = document.getElementById('log-list');

// Função para criar o elemento de log na tela
function renderizarLog(veiculo) {
    const div = document.createElement('div');
    div.className = 'log-item';
    
    const statusClass = veiculo.status === 'Autorizado' ? 'status-autorizado' : 'status-negado';
    const agora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    div.innerHTML = `
        <div>
            <div class="placa-tag">${veiculo.placa}</div>
            <div style="font-size: 0.7rem; color: #666; margin-top: 5px;">Acesso às ${agora}</div>
        </div>
        <span class="status-badge ${statusClass}">${veiculo.status}</span>
    `;

    // Insere sempre no topo da lista
    logList.insertBefore(div, logList.firstChild);
}

// Inicializa com dados fictícios
historicoAcessos.forEach(v => renderizarLog(v));

// Simula a detecção de uma nova placa a cada 8 segundos
setInterval(() => {
    const placasFalsas = ["GTR-0990", "ABC-1234", "LUX-2026", "OFF-7788"];
    const novaPlaca = placasFalsas[Math.floor(Math.random() * placasFalsas.length)];
    const novoStatus = Math.random() > 0.3 ? "Autorizado" : "Não cadastrado";

    renderizarLog({ placa: novaPlaca, status: novoStatus });

    // Remove registros antigos para não sobrecarregar a tela (mantém os 10 últimos)
    if (logList.children.length > 10) {
        logList.removeChild(logList.lastChild);
    }
}, 8000);