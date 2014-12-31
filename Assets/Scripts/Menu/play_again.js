#pragma strict

var continuar_texture : Texture;
var continuar_pressed_texture : Texture;

private var ratio : int;

public var texto_score : GUIText;
public var texto_max_score : GUIText;

public var score : GUIText;
public var max_score : GUIText;

var fondo_menu : GUITexture;



function Start()
{
	//fondo_menu.pixelInset.width =0.6*Screen.width;
  //  fondo_menu.pixelInset.height=0.3*Screen.width;
//    Debug.Log("Screen.width " + Screen.width + " Screen.height " + Screen.height);
    
    fondo_menu.pixelInset.x = -2*Screen.width/6;
	fondo_menu.pixelInset.y = -2*Screen.height/7;
	fondo_menu.pixelInset.width = 2*Screen.width/3;
	fondo_menu.pixelInset.height = Screen.height/2;
	
	if(Screen.width > 600)
	{
		texto_score.transform.guiText.fontSize = 35;
		texto_max_score.transform.guiText.fontSize = 35;
		score.transform.guiText.fontSize = 35;
		max_score.transform.guiText.fontSize = 35;
		
		gameObject.guiTexture.pixelInset.x = gameObject.guiTexture.pixelInset.x - gameObject.guiTexture.pixelInset.width/2;
	 	gameObject.guiTexture.pixelInset.width = gameObject.guiTexture.pixelInset.width * 2;
 		
 		gameObject.guiTexture.pixelInset.y = gameObject.guiTexture.pixelInset.y - gameObject.guiTexture.pixelInset.height/2;
	 	gameObject.guiTexture.pixelInset.height = gameObject.guiTexture.pixelInset.height * 2;
	}
	
	 if (Application.platform == RuntimePlatform.Android 
	 || Application.platform == RuntimePlatform.IPhonePlayer
	 || Application.platform == RuntimePlatform.WP8Player)
	 {
	 	
 	}
}

function OnMouseDown()
{
	guiTexture.texture = continuar_pressed_texture;
}

function OnMouseUp()
{
	guiTexture.texture = continuar_texture;
	
	var pausa : GameObject;

	Application.LoadLevel("escena1");
}