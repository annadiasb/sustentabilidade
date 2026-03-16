// Função para o Planeta crescer e aparecer os países
function expandirTerra() {
    const terra = document.getElementById('img-terra');
    const painelPaises = document.getElementById('paises');
    
    // Toggle (liga/desliga) a classe que aumenta o tamanho
    terra.classList.toggle('terra-grande');
    
    // Mostra ou esconde os botões dos países
    if (painelPaises.classList.contains('escondido')) {
        painelPaises.classList.remove('escondido');
    }
}

// Função para mostrar a porcentagem de cada país
function mostrarSustentabilidade(nome, porcentagem) {
    const display = document.getElementById('info-pais');
    display.innerHTML = `O <strong>${nome}</strong> tem um índice de sustentabilidade de <strong>${porcentagem}</strong>.`;
    display.style.color = "#2d5a27"; // Verde escuro
}

// Função para o menu mudar a cor de fundo e mostrar curiosidade
function mudarCor(cor, curiosidade) {
    // Muda a cor do fundo do site todo
    document.body.style.backgroundColor = cor;
    
    // Mostra a curiosidade em um alerta (você pode mudar para um texto na página)
    alert(curiosidade);
}