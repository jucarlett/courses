var agora = new Date();
var diaSem = agora.getDay(); // js le assim : 0 domingo ate 6 sabado

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break; //break é obrigatorio para nao executar os outros cases
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("[ERRO] Dia inválido!");
    break;
}
