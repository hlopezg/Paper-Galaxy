var radius : float = 25.0;    //provides a radius at which the explosive will effect rigidbodies
var power : float = 10.0;    //provides explosive power
var explosiveLift : float = 1.0; //determines how the explosion reacts. A higher value means rigidbodies will fly upward
var explosiveDelay : float = 2.0; //adds a delay in seconds to our explosive object
var explosionPrefab : Transform;
var explosionSound : AudioClip;
 
function Start()
{
 
}
 
function Update () { 
	Fire();
}
 
function Fire () {
  	yield WaitForSeconds(explosiveDelay);
  	explosion();
}

function OnTriggerEnter2D(col : Collider2D) {
	if(col.tag.Equals("Enemigo"))
		explosion();
}

function explosion()
{
var grenadeOrigin : Vector2 = transform.position;
  	var colliders : Collider2D[] = Physics2D.OverlapCircleAll (grenadeOrigin, radius); //any collider within the radius of our object will feel the explosion
  	var e : Transform = Instantiate(explosionPrefab,transform.position,transform.rotation);
  	Destroy(e.gameObject, 2);//destroys our particle system after 2 seconds
 	
	for(var hit : Collider2D in colliders){  //for loop that says if we hit any colliders, then do the following below
		if(hit.tag.Equals("Enemigo"))
		{
			hit.gameObject.GetComponent(Vida_enemigo_sin_barra).AddjustCurrentHealth(-100);
			AudioSource.PlayClipAtPoint(explosionSound, transform.position, 1);
		}
	}
	gameObject.SetActive(false);
}