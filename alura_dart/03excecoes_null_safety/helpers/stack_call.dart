void stackStart() {
  print('Started Main');
  functionOne();
  print('Finished Main');
}

void functionOne() {
  print('Started Function One');
  try {
  functionTwo();
    //ordem do empilhamento de excecoes importa
    //catch (e) sozinho com o runtimetype dá o tipo pra nós
    //e exception s stacktrace
    //finally é o else (nada der certo vem ele) e roda msm quebrando code antes
    //rethrow manda ele continuar msm quebrando... o famoso confia em mim ;)
  } catch (e, s) {
    print(e.runtimeType);
    print(s.toString());
    rethrow;
  } finally {
    print('Finally');
  }
  
  print('Finished Function One');
}

void functionTwo() {
  print('Started Function Two');
  for (int i = 1; i <= 5; i++) {
    print(i);
    //erro proposital
    double amount = double.parse('not a number');
  }
  print('Finished Function Two');
}