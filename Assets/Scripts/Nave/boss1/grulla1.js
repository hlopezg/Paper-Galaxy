#pragma strict

var distance;
private var target : Transform;    
private var attackRange = Screen.width;
public var velocidad_enemigo : float = -0.04f;
var damping = 6.0;
var DisparoChoque : Transform;
var tiempo_autodestruccion : float = 6;
var dano_misil : float = 15;
var grulla_chica : GameObject;
var pistola_grulla_chica1 : Transform;
var pistola_grulla_chica2 : Transform;

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
			transform.Translate(Vector2.right * velocidad_enemigo *Time.deltaTime);
		}
		else
		{
		    var rotation2 = Quaternion.LookRotation(target.transform.position - transform.position);
			//transform.rotation = Quaternion.Slerp(transform.transform.rotation, rotation2, Time.deltaTime * damping);
			transform.rotation = Quaternion.AngleAxis(30f,transform.up) * rotation2;
			transform.rotation.y = 0;
			transform.rotation.x = 0;
		 
		    transform.Translate(velocidad_enemigo,0,0);
	    }
    }
}

function OnTriggerEnter2D(otro: Collider2D){
	//var clone : Transform;
	//clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
	
	if(otro.tag.Equals("Player"))
	{
		var myController = otro.gameObject.GetComponent(Vida_player);
		myController.AddjustCurrentHealth(-dano_misil);
		gameObject.SetActive(false);
	}
	/*if(otro.tag.Equals("Disparo"))
	{
		Instantiate(grulla_chica,pistola_grulla_chica1.position,pistola_grulla_chica1.rotation);
		Instantiate(grulla_chica,pistola_grulla_chica2.position,pistola_grulla_chica2.rotation);
		//Destroy(gameObject);
	}*/
}