#pragma strict
//@script RequireComponent(Collider)

public var velocidad = 0.6f;
var explosion : Transform;
var attacktimer :float;
var mover : boolean;


function Start () {
  	mover = false;
}

//public var speed = 5; 

function FixedUpdate () {
	if(gameObject.renderer.isVisible)
	{
		if(!mover)
		{
			attacktimer = Time.time + 1.5f; 
			mover = true;
		}
	}
	if(mover && Time.time > attacktimer)
		gameObject.transform.position.x = gameObject.transform.position.x + velocidad;
}


function destruirNave(){
	var explotar = Instantiate(explosion,transform.position, transform.rotation);
	Destroy(gameObject);
}
