#pragma strict
public var energia : float = 70;
private var factor_energia : float;
public var offset_X : float = 0;
public var offset_Y : float = 0;

private var alto : float;
private var ancho : float;

private var margin : int = 2;

function Start () {
	factor_energia = ((Screen.width/3)/energia);
	alto = 15;
	ancho = energia * factor_energia  - margin * 2;
}

public function ajustar_barra_energia(dano : int)
{
	energia = energia + dano;
}

function OnGUI () {
	//GUI.Box (Rect (offset_X,guiTexture.texture.height + offset_Y, energia *factor_energia,guiTexture.texture.height), Color.red);	
	var newInset2 : Rect = new Rect( offset_X - margin,
									alto + offset_Y - margin, 
									ancho + margin * 2, 
									alto + margin * 2);  
	DrawQuad(newInset2,Color.black);
	
	var newInset : Rect = new Rect( offset_X,
									alto + offset_Y, 
									energia *factor_energia  - margin * 2, 
									alto);  
	if(energia > 0)
		DrawQuad(newInset,Color.red);
}
function DrawQuad(position : Rect, color  :Color) {
	var texture : Texture2D = new Texture2D(1, 1);
	texture.SetPixel(0,0,color);
	texture.Apply();
	GUI.skin.box.normal.background = texture;
	GUI.Box(position, GUIContent.none);
}