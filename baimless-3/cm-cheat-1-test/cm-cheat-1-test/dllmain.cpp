// dllmain.cpp : Defines the entry point for the DLL application.

#include <Windows.h>
#include <cstdio>
#include <iostream>
#include "Hooks/Minhook/MinHook.h"

void start()
{
	MH_Initialize();
	Beep(750, 300);
	AllocConsole();
	FILE* f;
	freopen_s(&f, "CONOUT$", "w", stdout);
	std::cout << "Cheat Injected Test!" << std::endl;
}

void Dllthread()
{
	start();
}

BOOL APIENTRY DllMain(HMODULE hModule,
	DWORD  ul_reason_for_call,
	LPVOID lpReserved
)
{
	switch (ul_reason_for_call)
	{
	case DLL_PROCESS_ATTACH:
		CloseHandle(CreateThread(0, 0, (LPTHREAD_START_ROUTINE)Dllthread, hModule, 0, 0));
		break;
	}
	return TRUE;
}

