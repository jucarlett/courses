import 'transporte.dart';

class Viagem {
  static String codigoTrabalho = '1234';
  double dinheiro = 0;
  Transporte locomocao;
  Set<String> registrosVisitados = <String>{};
  //tipo da chave, tipo do valor - aceita dynamic no valor
  Map<String, dynamic> registrarPrecos = {};
  int _totalLocaisVisitados = 100;

  Viagem({required this.locomocao});

//ai da acesso ao viagemHoje pelo printCodigo ao codigoTrabalho, senao ficará só no Viagem
  printCodigo() {
    print(codigoTrabalho);
  }

  void escolherMeioTransporte(Transporte locomocao) {
    switch (locomocao) {
      case Transporte.carro:
        print("Carro");
        break;
      case Transporte.bike:
        print("Bike");
        break;
      default:
        print("Andar");
        break;
    }
  }

  void visitar(String localVisita) {
    registrosVisitados.add(localVisita);
    _totalLocaisVisitados++;
  }

  void registrarPrecoVisita(String localVisita, dynamic preco) {
    registrarPrecos[localVisita] = preco;
  }

  int get consultarTotalLocaisVisitados {
    return _totalLocaisVisitados;
  }

  void set alterarLocaisVisitados(int novaQnt) {
    if (novaQnt < 10) {
      _totalLocaisVisitados = novaQnt;
    } else {
      print('Não pode é possível visitar tanto lugar assim em tão pouco tempo');
    }
  }
}
