#pragma strict
var texture1 : Texture2D;
var texture2 : Texture2D;
var camara : Camera;

private var animacion = false;

private var anim : Animator;

function Start()
{
	if(camara != null)
		anim = camara.GetComponent("Animator");

	if(PlayerPrefs.GetInt("LoadLevel",0) == 0)
		PlayerPrefs.SetInt("LoadLevel",1);
		
	if(Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer || Application.platform == RuntimePlatform.WP8Player)
	{
		gameObject.transform.guiTexture.pixelInset.height = gameObject.transform.guiTexture.pixelInset.height * 2;
		gameObject.transform.guiTexture.pixelInset.width = gameObject.transform.guiTexture.pixelInset.width * 2;
	}
}


function OnMouseDown()
{
	if(gameObject.name.Equals("boton_play"))
	{
		//PlayerPrefs.SetInt("LoadLevel",1);
		Application.LoadLevel("level1-1");
	}
	if(gameObject.name.Equals("boton_creditos") && animacion == false)
	{
		anim.SetInteger("creditos", 1);
		//camara.animation.Play("creditos_in");
		animacion = true;
	}else if(gameObject.name.Equals("boton_creditos") && animacion == true)
	{
		//camara.animation.Play("creditos_out");
		anim.SetInteger("creditos", 2);
		animacion = false;
	}
	if(gameObject.name.Equals("boton_salir"))
	{
		Application.Quit();
	}
	if(gameObject.name.Equals("Volver al juego"))
	{
		Application.LoadLevel("inicio");
	}
}

function OnGUI()
{
	//if(animacion == true)
	//	GUI.Label (Rect (10, 10, 100, 20), "Hector Lopez");
}

function OnMouseEnter()
{
		guiTexture.texture = texture2;
}

function OnMouseExit()
{
		guiTexture.texture = texture1;
}