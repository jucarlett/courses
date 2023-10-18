string msgWelcome = "Welcome to Poker Indie\n";

void ExibirMsgDeWelcome()
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
        case 1: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        case 2: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        case 3: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        case 4: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        case -1: Console.WriteLine("Você escolheu a opção " + opcaoEscolhidaNumerica); break;
        default: Console.WriteLine("Opção Inválida"); break;
    }
}

ExibirMsgDeWelcome();
ExibirOpcoesDoMenu();


