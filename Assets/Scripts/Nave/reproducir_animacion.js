#pragma strict
var animar : Transform;
var tiene_animacion : boolean = true;
private var animacion_started : boolean;
private var animator: Animator;

function Start () {
	animacion_started = false;
	animator = GetComponent("Animator");
}

function Update () {
	if(animar.gameObject.renderer.isVisible)
    {
    	if(animacion_started == false && tiene_animacion == true)
    	{
    		animator.SetBool("iniciar",true);
    	 	animacion_started = true;
			//animar.parent.animation.Play();	
    	}
    }
}

