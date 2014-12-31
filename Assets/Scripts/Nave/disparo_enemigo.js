var nTime : float = 2;
var DisparoChoque : Transform;
var dano_disparo : int = 10;
//var audio_disparo : AudioClip;
function Start () {
	Destroy(this.gameObject, nTime);
	if(audio!=null)
		audio.Play();
	//transform.TransformDirection(Vector3(-100,0,0));
}

/*function OnCollisionEnter2D(enemigo : Collision2D){
	var clone : Transform;
	clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
	Destroy(gameObject);
	if(enemigo.gameObject.tag.Equals("Player"))
	{
		var myController = enemigo.gameObject.GetComponent (Vida_player);
		myController.AddjustCurrentHealth(-dano_disparo);
		Debug.Log("Daño " + dano_disparo);
	}
}*/

function OnTriggerEnter2D(enemigo: Collider2D){
	if(enemigo.gameObject.tag.Equals("Player"))
	{
		var myController = enemigo.gameObject.GetComponent (Vida_player);
		if(myController != null && !myController.invencible)
		{
			var clone : Transform;
			clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
			Destroy(gameObject);
		
			myController.AddjustCurrentHealth(-dano_disparo);
	//		Debug.Log("Daño " + dano_disparo);
		}
	}else if(enemigo.gameObject.tag.Equals("Beam") || enemigo.tag.Equals("escudo"))
	{
		var clone2 : Transform;
		clone2 = Instantiate(DisparoChoque, transform.position, transform.rotation);
		//gameObject.SetActive(false);
	}
}