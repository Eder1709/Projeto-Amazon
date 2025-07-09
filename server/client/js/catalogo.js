const produtos = [
  {
    nome: "Teclado Mecânico RGB Redragon Kumara",
    imagem: "imagens/teclado-redragon-kumara.jpg",
    preco: 249.90,
    slug: "teclado-redragon-kumara",
    descricao: "Teclado mecânico compacto e robusto, ideal para gamers que buscam performance e durabilidade. Possui iluminação RGB personalizável e switches mecânicos de alta qualidade."
  },
  {
    nome: "Mouse Gamer Logitech G502 HERO",
    imagem: "imagens/mouse-logitech-g502-hero.jpg",
    preco: 299.00,
    slug: "mouse-logitech-g502",
    descricao: "Mouse gamer de alta precisão com sensor HERO de última geração. Possui 11 botões programáveis, pesos ajustáveis e iluminação LIGHTSYNC RGB, perfeito para qualquer estilo de jogo."
  },
  {
    nome: "Headset HyperX Cloud Stinger",
    imagem: "imagens/headset-hyperx-cloud-stinger.jpg",
    preco: 349.90,
    slug: "headset-hyperx",
    descricao: "Headset gamer leve e confortável, projetado para longas sessões de jogo. Oferece áudio imersivo, microfone com cancelamento de ruído e compatibilidade multiplataforma."
  },
  {
    nome: "Cadeira Gamer ThunderX3",
    imagem: "imagens/cadeira-gamer-thunderx3.jpg",
    preco: 1199.00,
    slug: "cadeira-thunderx3",
    descricao: "Cadeira gamer ergonômica com design esportivo e suporte lombar e de pescoço ajustáveis. Ideal para garantir conforto e boa postura durante horas de jogo."
  },
  {
    nome: "Monitor Gamer Samsung 24'' 144Hz",
    imagem: "imagens/monitor-samsung-144hz.jpg",
    preco: 999.90,
    slug: "monitor-samsung-144hz",
    descricao: "Monitor gamer de 24 polegadas com taxa de atualização de 144Hz e tempo de resposta de 1ms, proporcionando uma experiência de jogo fluida e sem borrões. Perfeito para jogos competitivos."
  },
  {
    nome: "Placa de Vídeo RTX 4060 8GB",
    imagem: "imagens/placa-video-rtx4060.jpg",
    preco: 1999.00,
    slug: "placa-video-rtx4060",
    descricao: "Placa de vídeo NVIDIA GeForce RTX 4060 com 8GB GDDR6, ideal para jogar os títulos mais recentes em alta resolução e com ray tracing. Excelente performance para sua máquina gamer."
  },
  {
    nome: "Gabinete Gamer com LED RGB",
    imagem: "imagens/gabinete-gamer-rgb.jpg",
    preco: 399.90,
    slug: "gabinete-gamer-rgb",
    descricao: "Gabinete gamer moderno com painel lateral em vidro temperado e ventoinhas com iluminação RGB. Ótima ventilação e espaço para componentes de alto desempenho."
  },
  {
    nome: "Mousepad Gamer Extra Grande",
    imagem: "imagens/mousepad-gamer.jpg",
    preco: 89.90,
    slug: "mousepad-gamer",
    descricao: "Mousepad gamer com superfície otimizada para precisão e velocidade. Tamanho extra grande para liberdade de movimento e base de borracha antiderrapante."
  },
  {
    nome: "Controle Xbox Series X",
    imagem: "imagens/controle-xbox.jpg",
    preco: 449.00,
    slug: "controle-xbox",
    descricao: "Controle sem fio oficial do Xbox Series X|S, compatível com PC. Design ergonômico, botões texturizados e gatilhos responsivos para uma experiência de jogo imersiva."
  },
  {
    nome: "Webcam Full HD Logitech C920",
    imagem: "imagens/webcam-logitech-c920.jpg",
    preco: 499.00,
    slug: "webcam-logitech",
    descricao: "Webcam Full HD 1080p da Logitech, ideal para streaming, videochamadas e gravação de conteúdo. Áudio estéreo claro e foco automático preciso."
  },
  {
    nome: "Microfone Gamer Fifine K669B",
    imagem: "imagens/microfone-fifine-k669b.jpg",
    preco: 279.90,
    slug: "microfone-fifine",
    descricao: "Microfone gamer USB com excelente qualidade de áudio para streaming, podcasts e comunicação em jogos. Plug and play, fácil de usar."
  },
  {
    nome: "SSD NVMe 1TB Kingston",
    imagem: "imagens/ssd-kingston-1tb.jpg",
    preco: 499.90,
    slug: "ssd-kingston",
    descricao: "SSD NVMe de 1TB da Kingston, com velocidades de leitura e gravação ultrarrápidas para carregamento instantâneo de jogos e aplicativos. Otimize seu sistema."
  },
  {
    nome: "Memória RAM DDR4 16GB 3200MHz",
    imagem: "imagens/memoria-ram-16gb-3200mhz.jpg",
    preco: 299.90,
    slug: "memoria-ram-16gb",
    descricao: "Kit de memória RAM DDR4 de 16GB (2x8GB) com frequência de 3200MHz. Essencial para multitarefas e jogos exigentes, garantindo fluidez e desempenho."
  },
  {
    nome: "Fonte 650W 80 Plus Bronze",
    imagem: "imagens/fonte-650w-80-plus-bronze.jpg",
    preco: 349.90,
    slug: "fonte-650w",
    descricao: "Fonte de alimentação de 650W com certificação 80 Plus Bronze. Oferece eficiência energética e proteção para os componentes do seu PC gamer."
  },
  {
    nome: "Cooler para CPU com RGB",
    imagem: "imagens/cooler-cpu-rgb.jpg",
    preco: 149.90,
    slug: "cooler-rgb",
    descricao: "Cooler para CPU com ventoinha RGB e alta capacidade de dissipação de calor. Mantenha seu processador em temperaturas ideais com estilo."
  },
  {
    nome: "Kit Gamer (Teclado + Mouse + Headset)",
    imagem: "imagens/kit-gamer.jpg",
    preco: 499.90,
    slug: "kit-gamer",
    descricao: "Kit completo para iniciar sua jornada gamer: teclado, mouse e headset com iluminação RGB. Perfeito para quem busca custo-benefício e funcionalidade."
  },
  {
    nome: "Suporte RGB para Headset",
    imagem: "imagens/suporte-headset-rgb.jpg",
    preco: 129.90,
    slug: "suporte-headset",
    descricao: "Suporte para headset com iluminação RGB personalizável. Mantenha seu setup organizado e adicione um toque de estilo com este acessório prático."
  },
  {
    nome: "Iluminação LED para Setup",
    imagem: "imagens/iluminacao-led-setup.jpg",
    preco: 89.90,
    slug: "led-setup",
    descricao: "Fita de iluminação LED RGB flexível para personalizar seu setup gamer. Fácil instalação e diversos modos de cor para criar o ambiente perfeito."
  },
  {
    nome: "Notebook Gamer Ryzen 7 + RTX 3050",
    imagem: "imagens/notebook-gamer-ryzen7-rtx3050.jpg",
    preco: 4999.00,
    slug: "notebook-gamer",
    descricao: "Notebook gamer potente com processador AMD Ryzen 7 e placa de vídeo NVIDIA GeForce RTX 3050. Ideal para jogar e trabalhar em qualquer lugar, com alta performance."
  },
  {
    nome: "PC Gamer Completo Ryzen 5 + RX 6600",
    imagem: "imagens/pc-gamer-ryzen5-rx6600.jpg",
    preco: 5999.00,
    slug: "pc-gamer-rx6600",
    descricao: "PC gamer completo com processador AMD Ryzen 5 e placa de vídeo AMD Radeon RX 6600. Um setup pronto para os jogos mais exigentes e para multitarefas."
  }
];

window.produtos = produtos;


// Torna a lista de produtos globalmente acessível
window.produtos = produtos;

// Renderização dos produtos na vitrine
// Somente executa se o elemento 'catalogo' existir na página
document.addEventListener('DOMContentLoaded', () => { // Adicionado DOMContentLoaded para garantir que o DOM esteja pronto
    const catalogo = document.getElementById("catalogo");
    if (catalogo) { // Adiciona esta verificação
        produtos.forEach(produto => {
            const item = document.createElement("div");
            item.className = "produto";
            item.innerHTML = `
                <a href="produto-detalhe.html?slug=${produto.slug}" class="link-produto-detalhe">
                    <img src="${produto.imagem}" alt="${produto.nome}" />
                    <h3>${produto.nome}</h3>
                </a>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                <div class="quantidade-controle">
                    <button class="btn-quantidade" data-action="decrease" data-slug="${produto.slug}">-</button>
                    <input type="number" min="1" value="1" class="quantidade" id="qtd-${produto.slug}" />
                    <button class="btn-quantidade" data-action="increase" data-slug="${produto.slug}">+</button>
                </div>
                <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho('${produto.slug}')">Adicionar ao Carrinho</button>
            `;
            catalogo.appendChild(item);
        });
    }
});


