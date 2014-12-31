#pragma strict

private var anim : Animator;
var animacion : int = 0;
var children : GameObject;
private var activar_animacion = true;

function Start () {
	anim = GetComponent("Animator");
 }

function Update()
{
	if(activar_animacion == true && children!= null && children.renderer.isVisible == true && animacion != 0)
	{
		anim.SetInteger("animacion", animacion);
		activar_animacion = false;
	}
	if(children == null  ||  (activar_animacion == false && children.renderer.isVisible == false))
		gameObject.SetActive(false);
}

function cambiarAnimacion(anim : int)
{
	animacion = anim;
 }