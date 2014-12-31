#pragma strict
private var energia : float = 250;
public var restar_energia : float = 5;
private var factor_energia : float;
public var offset_X : float = 0;
public var offset_Y : float = 0;

private var tiempo : float = 0;
public var energia_agotada :boolean = false;
private var energia_original : float;

public var mn : GameObject;

private var restar_por_frame : float;

private var alto : float;
private var ancho : float;

private var margin : int = 2;

function Start()
{
	alto = 15;
	factor_energia = (Screen.width/3)/energia;
	ancho = (energia * factor_energia)  - margin * 2;
		
	energia_original = energia;
			
	energia = 0;
}

function OnGUI () {
	//GUI.Box (Rect (offset_X,guiTexture.texture.height + offset_Y, energia *factor_energia,guiTexture.texture.height), Color.red);	
	
	if(energia > 0 )
	{
		var newInset2 : Rect = new Rect( offset_X - margin,
										alto * 2 + offset_Y - margin, 
										ancho + margin * 2, 
										alto + margin * 2); 
		DrawQuad(newInset2,Color.black);
		
		var newInset : Rect = new Rect( offset_X,
										alto * 2 + offset_Y, 
										energia *factor_energia - margin * 2, 
										alto);  
		DrawQuad(newInset,Color.blue);
	}
}
function DrawQuad(position : Rect, color  :Color) {
	var texture : Texture2D = new Texture2D(1, 1);
	texture.SetPixel(0,0,color);
	texture.Apply();
	GUI.skin.box.normal.background = texture;
	GUI.Box(position, GUIContent.none);
}

function Update () {
	if(Time.time > tiempo + 0.3 && energia > 0)
	{
		energia = energia - restar_energia;
		tiempo = Time.time;
	}else if(energia <= 0 && energia_agotada == false)
	{
		if(mn != null)
			mn.GetComponent(Nave).disminuir_power_up();
		//energia_agotada = true;
	}
}

public function ajustar_barra_energia(dano : int)
{
	energia = energia + dano;
	
	if(energia <= 0 && energia_agotada == false)
	{
		energia = 0;
		if(mn != null)
			mn.GetComponent(Nave).disminuir_power_up();
	}
	guiTexture.pixelInset.width = energia;
}

public function reestablecer_barra_power_up()
{
	energia_agotada = false;
	
	//factor_energia = 240/energia_original;
	energia = energia_original;
}

