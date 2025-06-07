#include <stdio.h>
 
int main() {
    printf("The Size in Bytes of a int = %zu.\n", sizeof(int)); /* %zu	Unsigned size type*/
    printf("The Size in Bytes of a char = %zu.\n", sizeof(char));
    printf("The Size in Bytes of a float = %zu.\n", sizeof(float));
    printf("The Size in Bytes of a double = %zu\n", sizeof(double));
    return 0;
}
