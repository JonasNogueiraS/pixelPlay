# PixelPlay — Simulador de Compras

- **Projeto:** Desafio 1 - Minha Loja: Simulador de Compras
- **Aluno:** Jonas Davi Nogueira Sena
- **Trilha:** Desenvolvimento mobile

## A loja

PixelPlay é uma loja de jogos retrô e acessórios de arcade. A página
mostra o catálogo e, ao clicar em **Simular compra**, o JavaScript pergunta a
quantidade de cada produto, calcula o valor de cada item e exibe o total.
Compras acima de R$ 200,00 recebem 10% de desconto.

## Produtos e preços

| Produto | Descrição | Preço |
| --- | --- | --- |
| Bomberman 3 | Arcade de bombas para jogar com os amigos | R$ 89,90 |
| Aladdin | Plataforma e aventura nas areias de Agrabah | R$ 119,90 |
| Donkey Kong | Clássico dos fliperamas, com barris e escadas | R$ 49,90 |
| Controle USB | Controle com encaixe confortável e gatilhos macios | R$ 149,90 |

## Tecnologias

- HTML5 para a estrutura da página
- CSS3 para o layout (Grid nos produtos) e as cores
- JavaScript puro, usando `prompt()`, `Number()` e `alert()`

## Estrutura dos arquivos

```
desafio1/
├── index.html      # estrutura e conteúdo da loja
├── style.css       # estilos da página
├── script.js       # simulação da compra
├── assets/         # imagens dos produtos
└── README.md
```

## Como executar

1. Baixe ou clone a pasta do projeto.
2. Abra o arquivo `index.html` no navegador.
3. Clique no botão **Simular compra** e informe as quantidades.


> Tire um print da página aberta no navegador, salve como `assets/captura.png`
> e apague esta observação.

## Testes realizados

| Teste | Resultado esperado | Resultado obtido |
| --- | --- | --- |
| Comprar 1 Donkey Kong (R$ 49,90) | Total de R$ 49,90, sem desconto | OK |
| Comprar 1 Bomberman 3 e 1 Aladdin (R$ 209,80) | Desconto de R$ 20,98 e total de R$ 188,82 | OK |
| Comprar 2 unidades do Controle USB | Mostra 2 x R$ 149,90 = R$ 299,80 e aplica o desconto | OK |
| Digitar 0 em todos os produtos | Mensagem "Nenhum produto foi selecionado." | OK |
| Digitar uma letra na quantidade | Mensagem pedindo para digitar apenas números | OK |

## Dificuldade encontrada e aprendizado

A maior dificuldade foi lidar com o retorno do `prompt()`: tudo que ele devolve é
texto, então somar as quantidades sem converter resultava em valores grudados
(por exemplo, "1" + "2" virava "12" em vez de 3). Aprendi a usar `Number()` para
transformar a resposta em número antes de calcular e a usar `isNaN()` para
avisar o usuário quando a resposta não é um número válido. Também aprendi a usar
`toFixed(2)` para mostrar os valores com duas casas decimais.
