// Função para renderizar/atualizar o carrinho na página
function renderizarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalDiv = document.getElementById("total-geral");
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Limpa o conteúdo atual da lista e do total
    lista.innerHTML = "";
    totalDiv.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<li style='text-align: center; padding: 20px; color: #b0b0b0;'>Seu carrinho está vazio. Comece a adicionar produtos incríveis!</li>";
        return;
    }

    let totalGeral = 0;

    carrinho.forEach((item) => {
        const subtotal = item.preco * item.quantidade;
        totalGeral += subtotal;

        const li = document.createElement("li");
        li.className = "item-carrinho"; // Adiciona a classe CSS para estilização

        // Estrutura HTML para cada item do carrinho, incluindo a imagem e botões +/-
        li.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" />
            <div class="info-item">
                <h3>${item.nome}</h3>
                <p>Preço Unitário: R$ ${item.preco.toFixed(2)}</p>
                <div class="quantidade-controle-carrinho">
                    <button class="btn-quantidade-carrinho" data-action="decrease" data-slug="${item.slug}">-</button>
                    <input type="number" min="1" value="${item.quantidade}" class="quantidade-carrinho" data-slug="${item.slug}" />
                    <button class="btn-quantidade-carrinho" data-action="increase" data-slug="${item.slug}">+</button>
                </div>
            </div>
            <p class="preco-item">R$ ${subtotal.toFixed(2)}</p>
            <button class="btn-remover-item" data-slug="${item.slug}">🗑️ Remover</button>
        `;
        lista.appendChild(li);
    });

    totalDiv.innerHTML = `<h3>Total Geral: R$ ${totalGeral.toFixed(2)}</h3>`;
}

// Função para remover um item específico do carrinho
function removerItem(slugParaRemover) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    // Filtra o carrinho, removendo o item com o slug correspondente
    carrinho = carrinho.filter(item => item.slug !== slugParaRemover);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderizarCarrinho(); // Atualiza a interface
    atualizarContadorCarrinhoNaVitrine(); // Atualiza o contador na vitrine (se houver navegação de volta)
}

// Função para atualizar a quantidade de um item no carrinho
function atualizarQuantidadeItem(slug, novaQuantidade) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const itemIndex = carrinho.findIndex(item => item.slug === slug);

    if (itemIndex !== -1) {
        // Garante que a nova quantidade seja no mínimo 1
        if (novaQuantidade < 1) {
            novaQuantidade = 1;
        }
        carrinho[itemIndex].quantidade = novaQuantidade;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizarCarrinho(); // Renderiza o carrinho novamente
        atualizarContadorCarrinhoNaVitrine(); // Atualiza o contador
    }
}


// Adiciona event listeners para os botões de +/-, remover
document.addEventListener('click', function(event) {
    const target = event.target;

    // Lógica para botões de quantidade (+/-)
    if (target.classList.contains('btn-quantidade-carrinho')) {
        const action = target.dataset.action;
        const slug = target.dataset.slug;
        const qtdInput = document.querySelector(`.quantidade-carrinho[data-slug="${slug}"]`); // Seleciona o input específico

        if (qtdInput) {
            let quantidadeAtual = parseInt(qtdInput.value);
            if (action === 'increase') {
                quantidadeAtual++;
            } else if (action === 'decrease' && quantidadeAtual > 1) {
                quantidadeAtual--;
            }
            // Atualiza o input visualmente e a lógica no localStorage
            qtdInput.value = quantidadeAtual;
            atualizarQuantidadeItem(slug, quantidadeAtual);
        }
    }

    // Lógica para o botão de Remover Item
    if (target.classList.contains('btn-remover-item')) {
        const slug = target.dataset.slug;
        if (confirm(`Tem certeza que deseja remover este item do carrinho?`)) {
            removerItem(slug);
        }
    }
});

// Lógica para o input de quantidade no carrinho (digitando)
document.addEventListener('change', function(event) {
    const target = event.target;
    if (target.classList.contains('quantidade-carrinho')) {
        const slug = target.dataset.slug;
        let novaQuantidade = parseInt(target.value);
        atualizarQuantidadeItem(slug, novaQuantidade);
    }
});


// Função para limpar todo o carrinho
function limparCarrinho() {
    if (confirm("Tem certeza que deseja esvaziar o carrinho?")) {
        localStorage.removeItem("carrinho");
        renderizarCarrinho(); // Renderiza o carrinho vazio
        atualizarContadorCarrinhoNaVitrine(); // Reseta o contador
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    alert("Compra finalizada com sucesso! Obrigado por sua preferência. 🎮");
    localStorage.removeItem("carrinho");
    renderizarCarrinho(); // Opcional: esvaziar o carrinho na tela
    atualizarContadorCarrinhoNaVitrine(); // Reseta o contador
    location.href = "index.html"; // Redireciona para a vitrine
}

// --- Funções Auxiliares ---
// Funções globais que precisam ser acessíveis no HTML
window.limparCarrinho = limparCarrinho;
window.finalizarCompra = finalizarCompra;

// Chamada inicial para renderizar o carrinho quando a página carrega
document.addEventListener('DOMContentLoaded', renderizarCarrinho);

// --- Importante: Função para o contador da vitrine (para manter consistência) ---
// Essa função deve ser idêntica à que está no seu app.js
// Ela é necessária aqui caso o usuário navegue do carrinho de volta para a vitrine
// sem recarregar a página da vitrine completamente.
function atualizarContadorCarrinhoNaVitrine() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

    // Seleciona o contador no header (se existir na página atual)
    const spanContador = document.getElementById('contador-carrinho');
    if (spanContador) {
        if (totalItens > 0) {
            spanContador.textContent = totalItens;
            spanContador.style.display = 'flex';
        } else {
            spanContador.style.display = 'none';
        }
    }
}