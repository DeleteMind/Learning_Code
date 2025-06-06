#include <stdio.h>

int main() {
    int num;

    printf("Choose a Number:\n");
    scanf("%d", &num);   /*Store the input value in the variable "num"*/
    printf("The chosen number was %d.\n", num);
    return 0;
}