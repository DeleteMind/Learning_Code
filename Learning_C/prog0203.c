#include <stdio.h>

int main(void) {

    int n1, n2;
    printf("Select two Numbers:\n");
    scanf("%d%d", &n1, &n2);
    printf("The sum of the two numbers numbers are: %d + %d = %d\n", n1, n2, n1+n2);
    return 0;
}