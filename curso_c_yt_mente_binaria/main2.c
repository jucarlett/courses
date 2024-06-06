#include <stdio.h>

int main(void)
{
    char c;
    printf("O tamanho de c(char): %lu bytes e %lu em bits \n", sizeof (c), sizeof c*8);
    return 0;
}