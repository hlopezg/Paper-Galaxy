#pragma strict

var pausa_texture : Texture;
var pausa_pressed_texture : Texture;

var texto_pausa : GUIText;

private var pausa :boolean = false;

var scriptName : GameObject;

public var nave : GameObject;

private var hills : GameObject[];

function Start () {
	texto_pausa.gameObject.SetActive(false);
	#if UNITY_ANDROID
	scriptName.GetComponent(admob).EnableAds();
	scriptName.GetComponent(admob).HideAds();
	#endif
	hills = GameObject.FindGameObjectsWithTag("fondo");
}

function OnMouseDown()
{
	guiTexture.texture = pausa_pressed_texture;
}

function OnMouseUp()
{
	guiTexture.texture = pausa_texture;

	if(pausa == true)
	{
		pausa = false;
		Time.timeScale = 1.0F;
		texto_pausa.gameObject.SetActive(false);
		nave.GetComponent(Nave).mover_nave(true);
		#if UNITY_ANDROID
		scriptName.GetComponent(admob).HideAds();
		#endif
		for (var go : GameObject in hills)  { 
			go.GetComponent(mover).cambiar_mover(true);
		}
		//mover.cambiar_mover(true);
	}else{
		pausa = true;
		Time.timeScale = 0.0F;
		texto_pausa.gameObject.SetActive(true);
		nave.GetComponent(Nave).mover_nave(false);
		#if UNITY_ANDROID
		scriptName.GetComponent(admob).ShowAds();
		#endif
		for (var go : GameObject in hills)  { 
			go.GetComponent(mover).cambiar_mover(false);
		}
		//mover.cambiar_mover(false);
	}
}