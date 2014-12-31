#pragma strict

var charging_prefab : GameObject; //our prefab
//var charging : GameObject; //variable within a variable
var grenade : GameObject; //our prefab
var throwPower : float = 20; //power variable determines how fast this object will be "shot out"
public var nave : Transform; 

private var tiempo : float;
private var max_tiempo : float = 5;

var pistola : Transform;

var bomba_texture : Texture;
var bomba_pressed_texture : Texture;

function Start () {
	charging_prefab.SetActive(false);
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
	//Debug.Log(tiempo);
	if(Input.GetButtonDown ("Fire3"))
	{
		presionar();
	}
	if(Input.GetButtonUp ("Fire3"))
	{
		soltar();
	}
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
	charging_prefab.SetActive(true);
    //charging = Instantiate(charging_prefab, pistola.position, grenade.transform.rotation);
    //charging.transform.parent = pistola;

	guiTexture.texture = bomba_pressed_texture;
	tiempo = 0;
}

function soltar()
{
	guiTexture.texture = bomba_texture;
	charging_prefab.SetActive(false);
	dispararLaser();
}

function dispararLaser()
{
    if(tiempo > 1.0)
    {
	    var clone : GameObject; //variable within a variable
	    clone = Instantiate(grenade, pistola.position, grenade.transform.rotation);
	    clone.transform.parent = pistola;
    
	    if(tiempo > max_tiempo)
	    	clone.GetComponent(Beam).cambiarTiempo(max_tiempo);
	    else
	    	clone.GetComponent(Beam).cambiarTiempo(tiempo);
	    	
    }
}

function dispararLaser(tiempo_laser : float)
{
	var clone : GameObject; //variable within a variable
    clone = Instantiate(grenade, pistola.position, grenade.transform.rotation);
    clone.transform.parent = pistola;

    if(tiempo_laser > 1.0)
    {
	    if(tiempo_laser > max_tiempo)
	    	clone.GetComponent(Beam).cambiarTiempo(max_tiempo);
	    else
	    	clone.GetComponent(Beam).cambiarTiempo(tiempo_laser);
    }
}