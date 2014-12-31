#pragma strict
public var Background2 : boolean = true;
public var nave : boolean = false;
function Start () {
	if(Background2)
		particleSystem.renderer.sortingLayerName = "Background2";
	else if(nave)
		particleSystem.renderer.sortingLayerName = "naves";
	particleSystem.renderer.sortingOrder=0;
	
}

function Update () {

}