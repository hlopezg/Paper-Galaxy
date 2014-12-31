#pragma strict
public var tipo : int = 0;
public var offset_X : float = 0;
public var offset_Y : float = 0;
public var menu : GUITexture;
public var icono_no_seleccionado : Texture;
public var icono_seleccionado : Texture;
public var mostrar_bullet : boolean= false;
public var mostrar_escudo : boolean= false;
public var mostrar_misil : boolean= false;

function Start () {
	var x : float = 0;
	var y : float = 0;
	var width : float = 0;
	var menu_width : float = 0;
	var height : float = 0;
		
	transform.position = Vector3.zero;
	transform.localScale = Vector3.zero;
	
	width = guiTexture.texture.width;
	height = guiTexture.texture.height;
	
	var espacio_total_iconos : int;
	if(tipo == 0)	//menu_power_up
	{
		if(Screen.width/3 > 140)
			width = 140;
		else
			width = Screen.width/3;
		x = (Screen.width/2) - (width/2);
		y = (Screen.height - guiTexture.texture.height) + offset_Y;
		height = height -15;
		transform.position.z = -1;
	}
	else if(tipo == 1)	//escudo
	{
		x = (Screen.width/2) - (guiTexture.texture.width/2);
		y = (Screen.height - guiTexture.texture.height) - (parseFloat(menu.texture.height-guiTexture.texture.height)/2);
	}else if(tipo == 2)	//bullet
	{
		//espacio_total_iconos = Screen.width/(3*3);
		
		if(Screen.width/3 > 140)
			espacio_total_iconos = 140/3;
		else
			espacio_total_iconos = Screen.width/(3*3);

//		Debug.Log(espacio_total_iconos);
		x = (Screen.width/2) - (guiTexture.texture.width/2)- (espacio_total_iconos) ;
		y = (Screen.height - guiTexture.texture.height) - (parseFloat(menu.texture.height-guiTexture.texture.height)/2);
	}
	else if(tipo == 3)	//misil
	{
		//espacio_total_iconos = Screen.width/(3*3);
			if(Screen.width/3 > 140)
			espacio_total_iconos = 140/3;
		else
			espacio_total_iconos = Screen.width/(3*3);
		x = (Screen.width/2) - (guiTexture.texture.width/2) + espacio_total_iconos;
		y = (Screen.height - guiTexture.texture.height) - (parseFloat(menu.texture.height-guiTexture.texture.height)/2);
	}
	
	var newInset : Rect = new Rect(x, y, width, height);  
	//Rect (x, y, width, height) from the bottom left corner.
 	guiTexture.pixelInset = newInset;
}

function Update () {
	//guiTexture.pixelInset.width = energia *factor_energia;
	if(tipo == 2 && mostrar_bullet)
	{
		guiTexture.texture = icono_seleccionado;
	}
	else if(tipo == 2&& mostrar_bullet == false)
			guiTexture.texture = icono_no_seleccionado;
			
	if(tipo == 1 && mostrar_escudo)
	{
		guiTexture.texture = icono_seleccionado;
	}
	else if(tipo == 1 && mostrar_escudo == false)
		guiTexture.texture = icono_no_seleccionado;
			
	if(tipo == 3 && mostrar_misil)
	{
		guiTexture.texture = icono_seleccionado;
	}
	else if(tipo == 3 && mostrar_misil == false)
		guiTexture.texture = icono_no_seleccionado;
}

public function ajustar_barra_energia(dano : int)
{
	//energia = energia + dano;
}
