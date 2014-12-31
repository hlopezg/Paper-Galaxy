#pragma strict

var degrees = 10;
var target : Transform;
private var posicion : Transform;

function Start()
{
	//transform.renderer.material.color = Color.blue;
	
}
 
function FixedUpdate() {
 	if(target != null)
    	transform.RotateAround (target.position, Vector3.back, 400 * Time.fixedDeltaTime);
}

/*function OnTriggerEnter2D (other : Collider2D) {
	if(other.tag.Equals("disparo_enemigo") || other.tag.Equals("misil_enemigo"))
	{
		//Destroy(other.gameObject);
		other.gameObject.SetActive(false);
	}
}*/