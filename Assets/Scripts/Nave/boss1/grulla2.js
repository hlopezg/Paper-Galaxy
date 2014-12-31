#pragma strict

var distance;
private var target : Transform;    
private var attackRange = Screen.width;
public var moveSpeed : float = 0.1f;
var damping = 6.0;
var DisparoChoque : Transform;
var tiempo_autodestruccion : float = 6;
var dano : float = 15;

function Start()
{   	
	var go : GameObject = GameObject.FindGameObjectWithTag("Player");

	target = go.transform;
	
	Destroy(this.gameObject, tiempo_autodestruccion);
	
	yield WaitForSeconds(tiempo_autodestruccion);
	var clone : Transform;
	clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
}   

function Update () 
{
    if(transform != null && target != null)
    {
		if(target == null)
		{			
			transform.Translate(Vector2.right * moveSpeed *Time.deltaTime);
		}
		else
		{
		    var rotation2 = Quaternion.LookRotation(target.transform.position - transform.position);
			//transform.rotation = Quaternion.Slerp(transform.transform.rotation, rotation2, Time.deltaTime * damping);
			transform.rotation = Quaternion.AngleAxis(30f,transform.up) * rotation2;
			transform.rotation.y = 0;
			transform.rotation.x = 0;
		 
		    //transform.Translate(Vector2.right * moveSpeed *Time.deltaTime);
		    transform.Translate(moveSpeed,0,0);
	    }
		
    }
}

function OnTriggerEnter2D(otro: Collider2D){
	if(otro.tag.Equals("Player"))
	{
		var myController = otro.gameObject.GetComponent(Vida_player);
		myController.AddjustCurrentHealth(-dano);
		gameObject.SetActive(false);
	}
}