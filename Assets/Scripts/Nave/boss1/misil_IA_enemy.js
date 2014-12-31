var distance;
    private var target : Transform;    
    private var attackRange = Screen.width;
    public var moveSpeed = 30.0;
    var damping = 6.0;
    var DisparoChoque : Transform;
    var tiempo_autodestruccion : float = 6;
    var dano_misil : float = 15;
 
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
		   	var rotation = Quaternion.LookRotation(target.position - transform.position);
			transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
		 
		    transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
	    }
	}
	
	function OnCollisionEnter(enemigo : Collision){
		var clone : Transform;
		clone = Instantiate(DisparoChoque, transform.position, transform.rotation);

		if(enemigo.gameObject.tag.Equals("Player"))
		{
			var myController = enemigo.gameObject.GetComponent(Vida_player);
			myController.AddjustCurrentHealth(-dano_misil);
		}
		Destroy(gameObject);
	}