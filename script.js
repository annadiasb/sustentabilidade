// Função para expandir/encolher o planeta
function togglePlaneta() {
    const planeta = document.getElementById('planeta');
    const instrucao = document.getElementById('instrucao');
    
    planeta.classList.toggle('expandido');
    
    // Remove o texto de instrução quando clica
    if (planeta.classList.contains('expandido')) {
        instrucao.style.display = 'none';
    } else {
        instrucao.style.display = 'block';
    }
}

// Função para mostrar a porcentagem de sustentabilidade do país
function verStatus(nome, porcentagem) {
    // Impede que o clique no país feche o planeta
    event.stopPropagation();
    alert(`O país ${nome} tem um índice de sustentabilidade de ${porcentagem}!`);
}

// Função para mudar a cor de fundo e mostrar curiosidade
function mudarCor(cor, curiosidade) {
    document.body.style.backgroundColor = cor;
    const textoCuriosidade = document.getElementById('curiosidade-texto');
    textoCuriosidade.innerText = curiosidade;
    textoCuriosidade.style.fontWeight = 'bold';
}