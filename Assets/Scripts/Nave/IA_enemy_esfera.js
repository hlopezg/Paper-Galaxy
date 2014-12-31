	var distance;
    public var bullet : Rigidbody2D; 
    var pistola: Transform;
    var pistola2: Transform;
    var pistola3: Transform;
    var pistola4: Transform;
    var pistola5: Transform;
    var pistola6: Transform;
    var pistola7: Transform;
    var pistola8: Transform;
    
    public var target : GameObject;  
    var objecto_gameObject : GameObject;   
    
    var attacktimer :float = 0;  //me permite no poder atacar en cierto tiempo
	var coolDown : float = 0.3f;
	var tiempo_parar_disparo : float = 1.3f;
	var cantidad_de_disparos_seguidos : int = 3;
	private var cantidad_de_disparos_realizados : int;
	var velocidad_disparo :int = 50;
 	var aparecio: boolean = false;
 	
    function Start()
    {
		cantidad_de_disparos_realizados = 0;
		target = GameObject.FindGameObjectWithTag("Player");
    }   
 
    function FixedUpdate () 
    {
    	//Debug.Log(objecto_gameObject.renderer.isVisible);
	    if(target != null && objecto_gameObject != null)
	    {
	    	if(objecto_gameObject.renderer.isVisible)
		    {
		    	if(!aparecio)
		    		aparecio = true;
		    	
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
			}
	    }
    	
	    if(aparecio && objecto_gameObject!= null && !objecto_gameObject.renderer.isVisible)
	    {
	    	Destroy(objecto_gameObject);
	    }
	}
 	 
	function attack ()
	{
	
		var clone : Rigidbody2D;
		if(bullet.name.Equals("esfera_disparo"))
		{
			clone = Instantiate(bullet,pistola.position,Quaternion.Euler(0, 0, 180));
			clone.velocity = pistola.TransformDirection(Vector3(-velocidad_disparo,0,0));
		}
		
		if(pistola2 != null)
		{
			var clone2 : Rigidbody2D= Instantiate(bullet,pistola2.position,pistola2.rotation);
			clone2.velocity = pistola2.TransformDirection(Vector3(-velocidad_disparo,velocidad_disparo,0));
		}
				
		if(pistola3 != null)
		{
			var clone3 : Rigidbody2D= Instantiate(bullet,pistola3.position,pistola3.rotation);
			clone3.velocity = pistola3.TransformDirection(Vector3(-velocidad_disparo,-velocidad_disparo,0));
		}
		
		if(pistola4 != null)
		{
			var clone4 : Rigidbody2D= Instantiate(bullet,pistola4.position,pistola4.rotation);
			clone4.velocity = pistola4.TransformDirection(Vector3(0,-velocidad_disparo,0));
		}
		
		if(pistola5 != null)
		{
			var clone5 : Rigidbody2D= Instantiate(bullet,pistola5.position,pistola5.rotation);
			if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
				clone5.velocity = pistola5.TransformDirection(Vector3(velocidad_disparo,-velocidad_disparo,0));
		}
	
		if(pistola6 != null)
		{
			var clone6 : Rigidbody2D= Instantiate(bullet,pistola6.position,pistola6.rotation);
			clone6.velocity = pistola6.TransformDirection(Vector3(velocidad_disparo,0,0));
		}
		
		if(pistola7 != null)
		{
			var clone7 : Rigidbody2D= Instantiate(bullet,pistola7.position,pistola7.rotation);
				clone7.velocity = pistola7.TransformDirection(Vector3(velocidad_disparo,velocidad_disparo,0));
		}
		
		if(pistola8 != null)
		{
			var clone8 : Rigidbody2D= Instantiate(bullet,pistola8.position,pistola8.rotation);
			//if(!bullet.name.Equals("misil_enemigo") && !bullet.name.Equals("disparo_enemigo_directo"))
			clone8.velocity = pistola8.TransformDirection(Vector3(0,velocidad_disparo,0));
		}
	}