	var distance;
    public var target : GameObject;  
    var objecto_gameObject : GameObject;   
    public var bullet : Rigidbody2D; 
    var pistola: Transform;
    var pistola2: Transform;
    var pistola3: Transform;
    var pistola4: Transform;
    var pistola_doble: Transform;
    var pistola_triple: Transform;
    
    var attacktimer :float = 0;  //me permite no poder atacar en cierto tiempo
	var coolDown : float = 0.3f;
	var tiempo_parar_disparo : float = 1.3f;
	var cantidad_de_disparos_seguidos : int = 3;
	private var cantidad_de_disparos_realizados : int;
	
	var velocidad_disparo :int = 50;
 	var aparecio: boolean = false;
 	
 	var dano_enemigo : int = 10;
 	
 	public var velocidad_enemigo : float = -0.04f;
 	
    function Start()
    {
    	if(target == null)
    		target  = GameObject.FindGameObjectWithTag("Player");
		cantidad_de_disparos_realizados = 0;
    }   
 
    function FixedUpdate () 
    {
    //Debug.Log(objecto_gameObject.renderer.isVisible);
    	if(target != null && objecto_gameObject != null && objecto_gameObject.renderer.isVisible)
    	{  		
    		transform.Translate(velocidad_enemigo,0,0);
    		
	    	if(!aparecio)
	    	{
	    		aparecio = true;
	    		attacktimer = Time.time + attacktimer;
	    	}
	    	if(Time.time > attacktimer)
	    	{
				attack ();	
				
				cantidad_de_disparos_realizados = cantidad_de_disparos_realizados + 1;
				if(cantidad_de_disparos_realizados == cantidad_de_disparos_seguidos)
				{
					cantidad_de_disparos_realizados = 0;
					attacktimer = Time.time + coolDown + tiempo_parar_disparo;
				}else
					attacktimer = Time.time + coolDown;
			}
			//transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
	    }
	    if(aparecio && objecto_gameObject!= null && !objecto_gameObject.renderer.isVisible)
	    	objecto_gameObject.SetActive(false);
	}
 	 
	function attack ()
	{
		var clone : Rigidbody2D;
		if(bullet.name.Equals("disparo_enemigo"))
		{
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, 0, 180));
			clone.velocity = pistola.TransformDirection(Vector3(-velocidad_disparo,0,0));
		} else if(bullet.name.Equals("disparo_enemigo_directo"))
		{
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, 0, 180));
		}else
		{
			if(attacktimer == 0)
				tiempo_parar_disparo = tiempo_parar_disparo*2;
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, -90, 0));		//si es misil tengo que rotar en-90 para que valla en buena direccion
		}
		clone.gameObject.GetComponent (disparo_enemigo).dano_disparo = dano_enemigo;

		if(pistola2 != null)
		{
			var clone2 : Rigidbody2D= Instantiate(bullet,pistola2.position,pistola2.rotation);
			clone2.gameObject.GetComponent (disparo_enemigo).dano_disparo = dano_enemigo;
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone2.velocity = pistola2.TransformDirection(Vector3(-velocidad_disparo,velocidad_disparo,0));
		}
				
		if(pistola3 != null)
		{
			var clone3 : Rigidbody2D= Instantiate(bullet,pistola3.position,pistola3.rotation);
			clone3.gameObject.GetComponent (disparo_enemigo).dano_disparo = dano_enemigo;
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone3.velocity = pistola3.TransformDirection(Vector3(-velocidad_disparo,-velocidad_disparo,0));
		}
		
		if(pistola4 != null)
		{
			var clone4 : Rigidbody2D= Instantiate(bullet,pistola4.position,pistola4.rotation);
			clone4.gameObject.GetComponent (disparo_enemigo).dano_disparo = dano_enemigo;
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone4.velocity = pistola4.TransformDirection(Vector3(0,-velocidad_disparo,0));
		}
		
		if(pistola_doble != null)
		{
			var clonedoble : Rigidbody2D= Instantiate(bullet,pistola_doble.position,pistola_doble.rotation);
			clonedoble.gameObject.GetComponent (disparo_enemigo).dano_disparo = dano_enemigo;
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clonedoble.velocity = pistola_doble.TransformDirection(Vector3(-velocidad_disparo,0,0));
		}
		if(pistola_triple != null)
		{
			var clonetriple : Rigidbody2D= Instantiate(bullet,pistola_triple.position,pistola_triple.rotation);
			clonetriple.gameObject.GetComponent (disparo_enemigo).dano_disparo = dano_enemigo;
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clonetriple.velocity = pistola_triple.TransformDirection(Vector3(-velocidad_disparo,0,0));
		}
		//var enemigo : GameObject = GameObject.FindGameObjectWithTag("Enemigo"); 
		/*
	
		try
		{
			//Physics.IgnoreCollision(enemigo.collider, transform.FindChild("Nave").collider);
		}catch(e)
		{
			Debug.Log("Error: " + e);
		}
		
		try
		{
			//Physics.IgnoreCollision(enemigo.collider, transform.collider);
		}catch(e)
		{
			Debug.Log("Error: " + e);
		}*/
	}