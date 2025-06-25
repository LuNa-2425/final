// declara a função mostrarOla
function mostrarOla() {
    // obtém o conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    // exibe no parágrafo (com id=) "resposta": "Olá " e o nome informado
    document.getElementById("resposta").innerHTML = "Olá " + nome;
}

// cria uma referência ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
// registra para o botão mostrar um "ouvinte" para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);

//------------------------------------------------------- EX6 LOCADORA
function converterDuracao() {
  // cria referência aos elementos da página
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta")
 
  // obtém conteúdos dos campos de entrada
  var titulo = inTitulo.value;
  var duracao = Number(inDuracao.value);
 
  // arredonda para baixo o resultado da divisão
  var horas = Math.floor(duracao / 60);
  // obtém o resto da divisão entre os números
  var minutos = duracao % 60;
  // altera o conteúdo dos parágrafos de resposta
  outTitulo.textContent = titulo;
  outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}
// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);

//---------------------------------------------------------------EX7 VEICULOS
function mostrarPromocao() {
  // cria referência aos elementos manipulados pelo programa
  var inVeiculo = document.getElementById("inVeiculo");
  var inPreco = document.getElementById("inPreco");
  var outVeiculo = document.getElementById("outVeiculo");
  var outEntrada = document.getElementById("outEntrada");
  var outParcela = document.getElementById("outParcela");
 
  // obtém conteúdo dos campos de entrada
  var veiculo = inVeiculo.value;
  var preco = Number(inPreco.value);
 
  // calcula valor da entrada e das parcelas
  var entrada = preco * 0.50;
  var parcela = (preco * 0.50) / 12;
 
  // altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = "Promoção: " + veiculo;
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
  outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
// cria uma referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
// registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);

//-------------------------------------------------------- EX8 RESTAURANTE
function calcularPreco() {
  // cria referência aos elementos da página
  var inQuilo = document.getElementById("inQuilo");
  var inConsumo = document.getElementById("inConsumo");
  var outValor = document.getElementById("outValor")
 
  // obtém conteúdo dos campos de entrada
  var quilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);
 
  // calcula valor a ser pago
  var valor = (quilo / 1000) * consumo;
  // altera o conteúdo da linha de resposta
  outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
// cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);

//-----------------------------------------------------------EX 9 FARMÁCIA
function mostrarPromocaos() {
  // cria referência aos elementos da página
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outMedicamento = document.getElementById("outMedicamento");
  var outPromocao = document.getElementById("outPromocao");
 
  // obtém conteúdo dos campos de entrada
  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);
 
  // calcula valor da promoção (arredonda para baixo)
  var promocao = Math.floor(preco * 2);
 
  // exibe a resposta
  outMedicamento.textContent = "Promoção de " + medicamento;
  outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}
// cria referência ao botão e associa function mostrarPromocao à ocorrência do evento click neste botão
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocaos);

//------------------------------------------------------ EX10 LAN HOUSE
function calcularLanHouse() {
  // cria referência aos elementos da página
  var inValor = document.getElementById("inValor");
  var inTempo = document.getElementById("inTempo");
  var outPagar = document.getElementById("outPagar");
 
  // obtém conteúdo (e converte em número)
  var valor = Number(inValor.value);
  var tempo = Number(inTempo.value);
 
  // calcula valor a pagar (arredonda para cima)
  var pagar = Math.ceil(tempo / 15) * valor;
 
  // exibe o valor a pagar (com 2 decimais)
  outPagar.textContent = "Valor a Pagar R$: " + pagar.toFixed(2);
}
// captura botão e associa evento ao click neste botão ao evento calcularLanHouse
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularLanHouse);