#pragma strict
public var speed : float = 0;
public var muerto : boolean = false;

function Update () {
	if(muerto == false)
		renderer.material.mainTextureOffset = Vector2 (Time.time * speed, 0f);
	else
		renderer.material.mainTextureOffset = Vector2 (Time.time * speed/3, 0f);
}