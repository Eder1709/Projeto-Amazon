document.addEventListener('DOMContentLoaded', function() {
    const detalhesProdutoContainer = document.getElementById('detalhes-produto');

    // Função para obter o valor de um parâmetro da URL (ex: slug=teclado)
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const produtoSlug = getUrlParameter('slug');

    // Verifica se a lista de produtos já foi carregada (do catalogo.js)
    // window.produtos deve estar disponível se catalogo.js for carregado primeiro
    const produtos = window.produtos || []; 
    const produto = produtos.find(p => p.slug === produtoSlug);

    if (produto) {
        // Encontrou o produto, vamos exibir seus detalhes
        detalhesProdutoContainer.innerHTML = `
            <div class="produto-detalhe-conteudo">
                <div class="produto-detalhe-imagem">
                    <img src="${produto.imagem}" alt="${produto.nome}" />
                </div>
                <div class="produto-detalhe-info">
                    <h2>${produto.nome}</h2>
                    <p class="detalhe-preco">R$ ${produto.preco.toFixed(2)}</p>
                    <p class="detalhe-descricao">
                        Este é um item essencial para a sua setup gamer. Com alta performance e design arrojado,
                        garante a melhor experiência em seus jogos favoritos. Construído com materiais de alta
                        qualidade para durabilidade e conforto.
                        </p>
                    
                    <div class="quantidade-controle-detalhe">
                        <button class="btn-quantidade" data-action="decrease" data-slug="${produto.slug}">-</button>
                        <input type="number" min="1" value="1" class="quantidade" id="qtd-${produto.slug}" />
                        <button class="btn-quantidade" data-action="increase" data-slug="${produto.slug}">+</button>
                    </div>
                    <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho('${produto.slug}')">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
    } else {
        detalhesProdutoContainer.innerHTML = `
            <div class="produto-detalhe-nao-encontrado">
                <h2>Produto não encontrado.</h2>
                <p>O produto que você está procurando não existe ou foi removido.</p>
                <a href="index.html" class="btn-carrinho">Voltar para a Vitrine</a>
            </div>
        `;
    } 

    // --- Lógica para os botões de quantidade (+ e -) na página de detalhes (copiado/adaptado do app.js) ---
    // Isso é necessário porque o evento é adicionado ao documento, mas o input e botões são gerados dinamicamente.
   
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-quantidade')) {
            const button = event.target;
            const action = button.dataset.action;
            const slug = button.dataset.slug;

            // Certifica-se de que o input de quantidade pertence a esta página de detalhes
            const qtdInput = document.getElementById(`qtd-${slug}`);
            if (qtdInput) {
                let quantidadeAtual = parseInt(qtdInput.value);

                if (action === 'increase') {
                    quantidadeAtual++;
                } else if (action === 'decrease') {
                    if (quantidadeAtual > 1) {
                        quantidadeAtual--;
                    }
                }
                qtdInput.value = quantidadeAtual;
            }
        }
    });

    // Chamada para atualizar o contador do carrinho no header desta página
    // (A função atualizarContadorCarrinho está no app.js, que é importado)
    if (typeof atualizarContadorCarrinho === 'function') {
        atualizarContadorCarrinho();
    }
});