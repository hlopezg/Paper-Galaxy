#pragma strict
public var velocidad : float = 0;

function Update () {
	if(gameObject.renderer.isVisible == true)
		transform.Translate(velocidad,0,0);
}