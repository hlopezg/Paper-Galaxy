#pragma strict

//public var menu : GUITexture;
public var texture_normal : Texture;
public var texture_pressed : Texture;
public var bloqued_texture_normal : Texture;
public var numero : GUIText;
public var etapa : int = 1;

function Start () {
	if(PlayerPrefs.GetInt("LoadLevel") >= etapa)
	{
		guiTexture.transform.position.x = numero.gameObject.transform.position.x;
		guiTexture.transform.position.y = numero.gameObject.transform.position.y;
	}else{
		numero.enabled = false;
		guiTexture.texture = bloqued_texture_normal;
	}
}

function OnMouseDown()
{
	
	if(PlayerPrefs.GetInt("LoadLevel") >= etapa)
		guiTexture.texture = texture_pressed;
}

function OnMouseUp()
{
	Debug.Log("etapa " + etapa + " Loadlevel " + PlayerPrefs.GetInt("LoadLevel"));
	if(PlayerPrefs.GetInt("LoadLevel") >= etapa)
	{
		guiTexture.texture = texture_normal;	
		Application.LoadLevel("como_jugar");
		PlayerPrefs.SetInt("LevelElejido",etapa);
	}
	//Application.LoadLevel(Application.loadedLevel);
	
}