string msgWelcome = "Welcome to Poker Indie\n";
//List<string> listaBandas = new List<string> { "U2", "Beatles", "Calypso" };
Dictionary<string, List<int>> bandasRegistradas = new Dictionary<string, List<int>>();
bandasRegistradas.Add("U2", new List<int> { 10,8,6 });
bandasRegistradas.Add("Beatles", new List<int>());

void ExibirLogo()
{
    Console.WriteLine(@"
██████╗░░█████╗░██╗░░██╗███████╗██████╗░  ██╗███╗░░██╗██████╗░██╗███████╗
██╔══██╗██╔══██╗██║░██╔╝██╔════╝██╔══██╗  ██║████╗░██║██╔══██╗██║██╔════╝
██████╔╝██║░░██║█████═╝░█████╗░░██████╔╝  ██║██╔██╗██║██║░░██║██║█████╗░░
██╔═══╝░██║░░██║██╔═██╗░██╔══╝░░██╔══██╗  ██║██║╚████║██║░░██║██║██╔══╝░░
██║░░░░░╚█████╔╝██║░╚██╗███████╗██║░░██║  ██║██║░╚███║██████╔╝██║███████╗
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝  ╚═╝╚═╝░░╚══╝╚═════╝░╚═╝╚══════╝
     ");
}


void ExibirOpcoesDoMenu()
{
    ExibirLogo();
    Console.WriteLine("1 - Registra Banda");
    Console.WriteLine("2 - Mostra Todas Bandas");
    Console.WriteLine("3 - Avaliar uma Banda");
    Console.WriteLine("4 - Exibir a média de uma Banda\n");
    Console.WriteLine("Digite -1 para Sair");

    Console.WriteLine("\nDigite a opção desejada: ");
    string opcaoEscolhida = Console.ReadLine()!;
    int opcaoEscolhidaNumerica = int.Parse(opcaoEscolhida);

    switch (opcaoEscolhidaNumerica)
    {
        case 1: RegistrarBanda(); break;
        case 2: MostrarBandasRegistradas(); break;
        case 3: AvaliarUmaBanda(); break;
        case 4: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        case -1: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        default: Console.WriteLine("Opção Inválida"); break;
    }
}

void RegistrarBanda()
{
    Console.Clear();
    ExibirTituloDaOpcao ("Registrar Banda");
    Console.Write("Digite o nome da banda: ");
    string nomeBanda = Console.ReadLine()!;
    bandasRegistradas.Add(nomeBanda, new List<int>());
    Console.WriteLine($" A banda registrada {nomeBanda} foi registrada com sucesso");
    Thread.Sleep(2000);
    Console.Clear();
    ExibirOpcoesDoMenu();
}

void MostrarBandasRegistradas()
{
    Console.Clear();
    ExibirTituloDaOpcao ("Bandas Registradas");
    foreach (var banda in bandasRegistradas.Keys)
    {
        Console.WriteLine($"Banda: {banda}");
    }
    Console.WriteLine("\nPressione qualquer tecla para voltar ao menu principal");
    Console.ReadKey();
    Console.Clear();
    ExibirOpcoesDoMenu();
}

void ExibirTituloDaOpcao(string titulo)
{
    int quantidadeDeLetras = titulo.Length;
    string asteriscos = string.Empty.PadLeft(quantidadeDeLetras, '*');
    Console.WriteLine(asteriscos);
    Console.WriteLine(titulo);
    Console.WriteLine(asteriscos+ "\n");
}

void AvaliarUmaBanda()
{
    Console.Clear();
    ExibirTituloDaOpcao ("Avaliar uma Banda");
    Console.Write("Digite o nome da banda: ");
    string nomeBanda = Console.ReadLine()!;
    if (bandasRegistradas.ContainsKey(nomeBanda))
    {
        Console.Write("Digite a nota da banda: ");
        int notaBanda = int.Parse(Console.ReadLine()!);
        bandasRegistradas[nomeBanda].Add(notaBanda);
        Console.WriteLine($"A banda {nomeBanda} foi avaliada com sucesso");
    }
    else
    {
        Console.WriteLine($"A banda {nomeBanda} não foi encontrada");
    }
    Thread.Sleep(2000);
    Console.Clear();
    ExibirOpcoesDoMenu();
}


ExibirLogo();
ExibirOpcoesDoMenu();


