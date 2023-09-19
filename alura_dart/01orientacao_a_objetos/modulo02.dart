void main() {
  Fruta melancia = Fruta('Melancia', 1500.0, 'Verde', 'Doce', 40);
  melancia.estaMadura();

  Legume legume1 = Legume("Macaxeira", 1200, "Marrom", true);
  Fruta fruta1 = Fruta("Banana", 75, "Amarela", 'Doce', 12);
  Nozes noz1 = Nozes("Amendoim", 3.5, "Marrom", "Salgado", 130, 17);
  Citricas citrica1 = Citricas("Laranja", 200, "Laranja", "Doce", 20, 7);

  legume1.printAlimento();
  legume1.cozinhar();

  fruta1.printAlimento();
  fruta1.fazerSuco();

  noz1.printAlimento();

  citrica1.printAlimento();
  citrica1.existeRefri(true);

  fruta1.separarIngredientes();
  noz1.prepararMassa();
}

class Alimento {
  String nome;
  double peso;
  String cor;

  Alimento(this.nome, this.peso, this.cor);

  void printAlimento() {
    print("Este $nome pesa $peso gramas e é $cor.");
  }
}

class Fruta extends Alimento implements Bolo {
  String sabor;
  int diasDesdeColheita;
  static const int diasParaMadura = 30;

  Fruta(
    String nome,
    double peso,
    String cor,
    this.sabor,
    this.diasDesdeColheita,
  ) : super(nome, peso, cor);

  void estaMadura() {
    bool isMadura = diasDesdeColheita >= diasParaMadura;
    print('A sua $nome foi colhida a $diasDesdeColheita dias e precisa de '
        ' $diasParaMadura dias para poder comer! '
        'Ela está Madura? $isMadura');
  }

  void fazerSuco() {
    print("Você fez um ótimo suco de $nome");
  }

  @override
  void assar() {
    print('Assar o bolo');
  }

  @override
  void prepararMassa() {
    print('Pegar a fruta com  farinha e ovos');
  }

  @override
  void separarIngredientes() {
    print('Pegar a fruta $nome');
  }
}

class Legume extends Alimento implements Bolo {
  bool isPrecisaCozinhar;

  Legume(String nome, double peso, String cor, this.isPrecisaCozinhar)
      : super(nome, peso, cor);

  void cozinhar() {
    isPrecisaCozinhar
        ? print("Pronto, o $nome está cozinhado!")
        : print("Nem precisou cozinhar");
  }

  @override
  void assar() {}
  @override
  void prepararMassa() {}
  @override
  void separarIngredientes() {}
}

class Citricas extends Fruta {
  double nivelAzedo;

  Citricas(
    String nome,
    double peso,
    String cor,
    String sabor,
    int diasDesdeColheita,
    this.nivelAzedo,
  ) : super(nome, peso, cor, sabor, diasDesdeColheita);

  void existeRefri(bool existe) {
    existe
        ? print("Existe refri de $nome")
        : print("Não existe refri de $nome");
  }
}

class Nozes extends Fruta {
  double porcentagemOleoNatural;

  Nozes(
    String nome,
    double peso,
    String cor,
    String sabor,
    int diasDesdeColheita,
    this.porcentagemOleoNatural,
  ) : super(nome, peso, cor, sabor, diasDesdeColheita);
  //escreve em cima da funcao antiga (polimorfismo)
  @override
  void prepararMassa() {
    print('Tirar a casca das nozes');
    super.prepararMassa();
  }
}

abstract class Bolo {
  void separarIngredientes();
  void prepararMassa();
  void assar();
}
