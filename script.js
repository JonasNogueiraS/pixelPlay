// Preços iguais aos que aparecem na página
const precoBomberman = 89.90;
const precoAladdin = 119.90;
const precoDonkey = 49.90;
const precoControle = 149.90;

function simularCompra() {
    // 1. Perguntar as quantidades e converter em número
    const qtdBomberman = Number(prompt("Quantas unidades de Bomberman 3 (R$ 89,90)? Digite 0 para não comprar."));
    const qtdAladdin = Number(prompt("Quantas unidades de Aladdin (R$ 119,90)? Digite 0 para não comprar."));
    const qtdDonkey = Number(prompt("Quantas unidades de Donkey Kong (R$ 49,90)? Digite 0 para não comprar."));
    const qtdControle = Number(prompt("Quantas unidades de Controle USB (R$ 149,90)? Digite 0 para não comprar."));

    // 2. Checar se as respostas são números válidos
    if (isNaN(qtdBomberman) || isNaN(qtdAladdin) || isNaN(qtdDonkey) || isNaN(qtdControle)) {
        alert("Digite apenas números nas quantidades.");
        return;
    }

    // 3. Calcular o valor de cada produto
    const valorBomberman = precoBomberman * qtdBomberman;
    const valorAladdin = precoAladdin * qtdAladdin;
    const valorDonkey = precoDonkey * qtdDonkey;
    const valorControle = precoControle * qtdControle;

    // 4. Somar tudo
    const subtotal = valorBomberman + valorAladdin + valorDonkey + valorControle;

    // 5. Se o usuário não escolheu nada, avisar e parar
    if (subtotal === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    // 6. Verificar o direito ao desconto de 10%
    let desconto = 0;
    if (subtotal > 200) {
        desconto = subtotal * 0.1;
    }

    const total = subtotal - desconto;

    // 7. Montar e mostrar o resumo
    let resumo = "RESUMO DA COMPRA\n\n";
    resumo += "Bomberman 3: " + qtdBomberman + " x R$ 89,90 = R$ " + valorBomberman.toFixed(2) + "\n";
    resumo += "Aladdin: " + qtdAladdin + " x R$ 119,90 = R$ " + valorAladdin.toFixed(2) + "\n";
    resumo += "Donkey Kong: " + qtdDonkey + " x R$ 49,90 = R$ " + valorDonkey.toFixed(2) + "\n";
    resumo += "Controle USB: " + qtdControle + " x R$ 149,90 = R$ " + valorControle.toFixed(2) + "\n";
    resumo += "\nSubtotal: R$ " + subtotal.toFixed(2) + "\n";

    if (desconto > 0) {
        resumo += "Desconto de 10%: - R$ " + desconto.toFixed(2) + "\n";
    } else {
        resumo += "Sem desconto (compras acima de R$ 200,00 ganham 10%)\n";
    }

    resumo += "\nTOTAL DA COMPRA: R$ " + total.toFixed(2);

    alert(resumo);
}
