#include <curses.h>

void main(){

    WINDOW* win = initscr();
    keypad(win, true);
    nodelay(win, true);
    endwin();

}