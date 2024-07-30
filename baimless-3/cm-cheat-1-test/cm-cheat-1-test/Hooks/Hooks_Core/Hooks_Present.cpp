#include "Hooks_Present.h"


void KieroHooks::Init()
{
	bool should_load = false;
	do
	{
		if (kiero::init(kiero::RenderType::D3D11) == kiero::Status::Success)
		{
			//menu
			should_load = true;
		}
		else
		{
			should_load = false;
		}
	} while (should_load == false);

}

void KieroHooks::Shutdown()
{
}
