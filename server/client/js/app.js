// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(slug) {
    const produtos = window.produtos || [];
    const produto = produtos.find(p => p.slug === slug);
    const qtdInput = document.getElementById(`qtd-${slug}`);
    let quantidade = parseInt(qtdInput.value); // Use let para possível validação

    // Validação: Garante que a quantidade seja no mínimo 1
    if (isNaN(quantidade) || quantidade < 1) {
        quantidade = 1; // Define a quantidade mínima como 1 se for inválida
        qtdInput.value = 1; // Atualiza o input para 1
    }

    if (!produto) {
        console.error("Produto não encontrado."); // Melhor usar console.error para debug
        return;
    }

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const existente = carrinho.find(item => item.slug === slug);

    if (existente) {
        existente.quantidade += quantidade;
    } else {
        carrinho.push({ ...produto, quantidade });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // --- Feedback Visual no Botão (Novo) ---
    const botaoAdicionar = qtdInput.nextElementSibling; // Pega o botão "Adicionar ao Carrinho"
    const textoOriginal = botaoAdicionar.textContent;
    const corOriginal = botaoAdicionar.style.backgroundColor;

    botaoAdicionar.textContent = "Adicionado!";
    botaoAdicionar.style.backgroundColor = '#28a745'; // Cor verde de sucesso
    botaoAdicionar.disabled = true; // Desativa o botão temporariamente

    setTimeout(() => {
        botaoAdicionar.textContent = textoOriginal;
        botaoAdicionar.style.backgroundColor = corOriginal; // Volta à cor original (que o CSS define)
        botaoAdicionar.disabled = false; // Reativa o botão
    }, 1500); // Volta ao normal após 1.5 segundos

    // --- Atualizar Contador do Carrinho (Novo) ---
    atualizarContadorCarrinho();
}

// Função para atualizar o contador de itens no botão "Ver Carrinho" (Novo)
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

    const spanContador = document.getElementById('contador-carrinho');
    if (spanContador) {
        if (totalItens > 0) {
            spanContador.textContent = totalItens;
            spanContador.style.display = 'flex'; // Mostra o contador
        } else {
            spanContador.style.display = 'none'; // Esconde o contador se não houver itens
        }
    }
}


window.adicionarAoCarrinho = adicionarAoCarrinho;

// Chamada inicial para atualizar o contador quando a página carrega
document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);
// ... (seu código app.js existente, incluindo adicionarAoCarrinho e atualizarContadorCarrinho)

// --- Lógica para os botões de quantidade (+ e -) (Novo) ---
document.addEventListener('click', function(event) {
    // Verifica se o clique foi em um botão com a classe 'btn-quantidade'
    if (event.target.classList.contains('btn-quantidade')) {
        const button = event.target;
        const action = button.dataset.action; // 'increase' ou 'decrease'
        const slug = button.dataset.slug; // O slug do produto associado

        const qtdInput = document.getElementById(`qtd-${slug}`);
        if (qtdInput) {
            let quantidadeAtual = parseInt(qtdInput.value);

            if (action === 'increase') {
                quantidadeAtual++;
            } else if (action === 'decrease') {
                if (quantidadeAtual > 1) { // Garante que a quantidade mínima é 1
                    quantidadeAtual--;
                }
            }
            qtdInput.value = quantidadeAtual;
        }
    }
});

// Chamada inicial para atualizar o contador quando a página carrega
document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);