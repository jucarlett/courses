section .data
    message: db "Hello, World!", 0xa 0xd  ;0xa is newline, 0xd is carriage return- basically a new line

section .text
    global _start
    _start:
        mov eax, 4 ;syscall number for sys_write
        mov ebx, 1 ;file descriptor for stdout
        mov ecx, message ;message to write
        mov edx, 13 ;length of message
        int 0x80 ;call kernel

        mov eax, 1 ;syscall number for sys_exit
        int 0x80 ;call kernel



