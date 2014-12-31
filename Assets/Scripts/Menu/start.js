#pragma strict

var start_texture : Texture;
var start_pressed_texture : Texture;

function Start()
{
	//start_texture.width = start_texture.width ; 2
	//guiTexture.texture.height;
	if(Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer || Application.platform == RuntimePlatform.WP8Player)
	{
		guiTexture.pixelInset.height = guiTexture.pixelInset.height * 2;
		guiTexture.pixelInset.width = guiTexture.pixelInset.width * 2;
	}
}

function OnMouseDown()
{
	guiTexture.texture = start_pressed_texture;
}

function OnMouseUp()
{
	guiTexture.texture = start_texture;

	Application.LoadLevel("how_to_play");

}
