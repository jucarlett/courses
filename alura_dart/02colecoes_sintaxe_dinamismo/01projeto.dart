import 'transporte.dart';
import 'viagem.dart';

void main() {
  Viagem viagemMaio = Viagem(locomocao: Transporte.aviao);
  print(viagemMaio.consultarTotalLocaisVisitados);
  viagemMaio.visitar('São Paulo');
  print(viagemMaio.consultarTotalLocaisVisitados);
  viagemMaio.alterarLocaisVisitados = 10;
  print(viagemMaio.consultarTotalLocaisVisitados);
}
