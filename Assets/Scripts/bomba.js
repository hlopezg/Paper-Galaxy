#pragma strict

var grenade : Rigidbody2D; //our prefab
var throwPower : float = 20; //power variable determines how fast this object will be "shot out"
public var nave : Transform; 
 
var bomba_texture : Texture;
var bomba_pressed_texture : Texture;

private var colDown : float = 1;
private var tiempo : float = 1;
var cantidad_bombas : int = 3;

function Start () {
	if(Application.platform ==  RuntimePlatform.Android || Application.platform ==  RuntimePlatform.WP8Player || Application.platform ==  RuntimePlatform.IPhonePlayer || Application.platform ==  RuntimePlatform.BlackBerryPlayer)
	{
		guiTexture.pixelInset.width = guiTexture.pixelInset.width * 2;
		guiTexture.pixelInset.height = guiTexture.pixelInset.height * 2;
	}else{
		guiTexture.pixelInset.x = 5000;
		//guiTexture.gameObject.SetActive(false);
	}
}

function Update () {		
   tiempo = tiempo + Time.deltaTime;
   	if(Input.GetButtonDown ("Fire2"))
	{
		presionar();
	}
	if(Input.GetButtonUp ("Fire2"))
	{
		soltar();
	}
}

function disparar()
{
	if(cantidad_bombas > 0)
	{
	   	var clone2 : Rigidbody2D; //variable within a variable
		clone2 = Instantiate(grenade, nave.position, nave.rotation);
		clone2.velocity = nave.TransformDirection(Vector2.right * throwPower);
		cantidad_bombas--;
	}
   /*	var clone2 : Rigidbody2D; //variable within a variable
		clone2 = Instantiate(grenade, nave.position, nave.rotation);
		clone2.velocity = nave.TransformDirection(Vector2.right * throwPower);*/
}
function OnMouseDown()
{
	presionar();
}

function OnMouseUp()
{
	soltar();
}

function presionar()
{
	if(tiempo > colDown)
	{
		guiTexture.texture = bomba_pressed_texture;
		tiempo = 0;
		disparar();
	}
}

function soltar()
{
	guiTexture.texture = bomba_texture;
}