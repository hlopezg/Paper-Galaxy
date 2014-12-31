@script RequireComponent(AudioSource)
var nTime : float = 4;
var DisparoChoque : Transform;
var audio_disparo : AudioClip;

function Start () {
	Destroy(this.gameObject, nTime);
	//audio.Play();
	//var instance : GameObject = Instantiate(Resources.Load("Futuristic Gun Sound 13"));
}

function Update()
{
	if(!gameObject.renderer.isVisible|| rigidbody2D.velocity.x < 1)
	{
		gameObject.SetActive(false);
		//Destroy(gameObject);
	}
}

function OnTriggerEnter2D(enemigo: Collider2D){
	if(enemigo.gameObject.tag.Equals("Enemigo") || enemigo.gameObject.tag.Equals("Asteroide"))
	{
		chocar();
		
		var myController = enemigo.gameObject.GetComponent(Vida_enemigo_sin_barra);
		myController.AddjustCurrentHealth(-10);
	}
	else if(enemigo.gameObject.tag.Equals("Enemigo_simple"))
	{
		chocar();
		
		var myController2 = enemigo.gameObject.GetComponent(Vida_enemigo_simple);
		myController2.AddjustCurrentHealth(-10);
	}
	else if(enemigo.gameObject.tag.Equals("grulla_mediana"))
	{
		chocar();
		
		enemigo.gameObject.GetComponent(Vida_enemigo_grulla).AddjustCurrentHealth(-10);
	}else if(enemigo.gameObject.tag.Equals("Boss"))
	{
		chocar();
		
		enemigo.gameObject.GetComponent(Vida_enemigo_boss).AddjustCurrentHealth(-10);
	}
}

function chocar()
{
	if(DisparoChoque != null)
	{
		var clone : Transform;
		clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
	}
	gameObject.SetActive(false);
}