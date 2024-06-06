#include <stdio.h>
#include <stdbool.h>

int main (void)
{
    bool b;
       printf("O tamanho de b(bool): %lu bytes e %lu em bits \n", sizeof(b), sizeof b * 8);

       b=false;
       printf("O valor de b: %i\n", b);
    return 0;

    
}