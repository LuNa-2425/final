  //------------------------------------------------------EX 4 OPERAÇÕES

  // lê um dado de entrada
 function mostre1(){ 
  var num = prompt("Número: "); //prompt irá ler o dado inserido
  var dobro = num * 2;
  alert("Dobro é: " + dobro);
}

    function mostre2(){
  // lê um dado de entrada
  var num = Number(prompt("Número: "));
  // calcula o dobro
  var dobro = num + num;
  // exibe a resposta
  alert("Dobro é: " + dobro);
  }

  // lê os números
 function comece(){
  var num1 = Number(prompt("1º Número: "));
  var num2 = Number(prompt("2º Número: "));
  // calcula a soma
  var soma = num1 + num2;
  // exibe o resultado
 
  alert("Soma é: " + soma);
 }

  // lê o valor do jantar
function jantar(){
  var jantar = Number(prompt("Valor do Jantar R$: "));
  // calcula os dados
  var garcom = jantar * 0.10;
  var total = jantar + garcom;
  // apresenta as respostas
  alert("Taxa Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " + total.toFixed(2));
  }


  // lê os dados de entrada
   function dias(){
  var dias = Number(prompt("Nº Dias: "));
  var horas = Number(prompt("Nº Horas: "));
  // calcula a duração
  var total = (dias * 24) + horas; //transforma dias em horas
  // exibe o total
    alert("Total de Horas: " + total);
  }

  //ANTERIOR POSTERIOR
  // lê um número
 function sucess(){ 
  var num = Number(prompt("Número: "));
  // calcula vizinhos
  var anterior = num - 1;
  var posterior = num + 1;
  // exibe a resposta
  alert("Antecessor:" + anterior + "\n Sucessor: " + posterior);
  }


//média de clientes
  // lê os dados de entrada
  function clientes(){
  var conta = Number(prompt("Valor da Conta R$: "));
  var num = Number(prompt("Número de Clientes: "));
  // calcula o valor individual por cliente
  var individual = conta / num;
  // exibe a resposta (com 2 casas decimais no valor)
    alert("Valor por Cliente R$: " + individual.toFixed(2));
  }


  // lê o preço do produto
   function produto(){
  var preco = Number(prompt("Preço R$: "));
  // calcula valores à vista e das parcelas
  var avista = preco - (preco * 0.10);          // ou: var avista = preco * 0.90;
  var parcelado = preco / 3;
  // exibe as respostas
  alert("À Vista R$: " + avista.toFixed(2) + "\nOu 3x de R$: " + parcelado.toFixed(2));
  }


//---------------------------------------------------------------------------
  // lê as notas do aluno
function midia(){
  var nota1 = Number(prompt("1ª Nota: "));
  var nota2 = Number(prompt("2ª Nota: "));
  // calcula a média das notas (não esqueça do parênteses)
  var media = (nota1 + nota2) / 2;
  // exibe a média das notas 
  alert("Média: " + media.toFixed(1)); 
  }