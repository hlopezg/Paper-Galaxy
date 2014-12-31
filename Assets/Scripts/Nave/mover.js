#pragma strict
public var velocidad : float = 0;
private var mover_objeto: boolean;

function Start () {
	mover_objeto = true;
}

function Update () {
	if(mover_objeto)
		transform.Translate(velocidad,0,0);
}

function cambiar_mover(mover_funcion: boolean)
{
	mover_objeto = mover_funcion;
}