function toggleFiltros() {
    const tipo = document.getElementById('tipo-relatorio').value;
    const groupPlaca = document.getElementById('group-placa');
    const groupPeriodo = document.getElementById('group-periodo');

    if (tipo === 'placa') {
        groupPlaca.classList.remove('hidden');
        groupPeriodo.classList.add('hidden');
    } else {
        groupPlaca.classList.add('hidden');
        groupPeriodo.classList.remove('hidden');
    }
}

function processarRelatorio() {
    const previewArea = document.getElementById('preview-area');
    const tipo = document.getElementById('tipo-relatorio').value;
    
    // Simulação de carregamento
    previewArea.innerHTML = '<p style="color: var(--dourado)">Processando dados...</p>';

    setTimeout(() => {
        let htmlExtra = '';
        
        if (tipo === 'placa') {
            const placa = document.getElementById('filtro-placa').value || "GERAL";
            htmlExtra = `<caption>Resultados para a Placa: ${placa.toUpperCase()}</caption>`;
        } else {
            htmlExtra = `<caption>Resultados do Período Selecionado</caption>`;
        }

        previewArea.innerHTML = `
            <table class="report-table">
                ${htmlExtra}
                <thead>
                    <tr>
                        <th>Data/Hora</th>
                        <th>Placa</th>
                        <th>Evento</th>
                        <th>Unidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>28/01/2026 09:15</td>
                        <td>BRA2E19</td>
                        <td>Entrada Autorizada</td>
                        <td>Bloco A - 102</td>
                    </tr>
                    <tr>
                        <td>28/01/2026 10:30</td>
                        <td>KLP-4055</td>
                        <td>Acesso Negado</td>
                        <td>Visitante</td>
                    </tr>
                    <tr>
                        <td>28/01/2026 11:02</td>
                        <td>ABC-1234</td>
                        <td>Entrada Autorizada</td>
                        <td>Bloco B - 405</td>
                    </tr>
                </tbody>
            </table>
        `;
    }, 800);
}