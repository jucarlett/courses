#include <stdio.h>

int main(void)
{
    char c;

    printf("O tamanho de c(char): %lu bytes e %lu em bits \n", sizeof(c), sizeof c * 8);
    c = 10;
    c = 0xa; //igual 10 em hexadecimal
    c = '\n'; //igual 10 em decimal
    printf("O valor de c: %i\n", c);

    return 0;
}