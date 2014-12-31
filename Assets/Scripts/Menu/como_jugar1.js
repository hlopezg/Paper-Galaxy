#pragma strict

var como_jugar : GUIText;
var texto1 : GUIText;
var texto2 : GUIText;

function Start () {
	try
	{
	    guiTexture.pixelInset.x = -Screen.width/2;
		guiTexture.pixelInset.y = -Screen.height/2;
		guiTexture.pixelInset.width = Screen.width;
		guiTexture.pixelInset.height = Screen.height;
		
		if(gameObject.name.Equals("como_jugar1"))
		{
			texto2.gameObject.SetActive(false);
			if(SystemLanguage.Spanish)
			{	como_jugar.text = "Como jugar";
				texto1.text = "Deslice el dedo para mover las tuberias";
				texto2.text = "Presione sobre el enemigo";
			}
			if(Application.platform == RuntimePlatform.Android)
			{
				como_jugar.fontSize = como_jugar.fontSize * 2;
				texto1.fontSize = texto1.fontSize * 2;
				texto2.fontSize = texto2.fontSize * 2;
			}
		}
	}
	catch (e)
	{
		Debug.LogException(e, this);
	}
}

function Update () {

}

function OnMouseUp()
{	
	if(gameObject.name.Equals("como_jugar1"))
	{
		texto1.gameObject.SetActive(false);
		gameObject.SetActive(false);
		texto2.gameObject.SetActive(true);
	}
	if(gameObject.name.Equals("como_jugar2"))
	{
		Application.LoadLevel("escena1");
	}
}