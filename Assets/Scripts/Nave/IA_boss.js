var distance;
    var target : GameObject;    
    public var bullet : Rigidbody2D; 
    public var bullet_directo : Rigidbody2D; 
    var pistola: Transform;
    var pistola2: Transform;
    var pistola3: Transform;
    var pistola4: Transform;
    
    var attacktimer :float;  //me permite no poder atacar en cierto tiempo
	var coolDown : float;
	var tiempo_parar_disparo : float;
	var cantidad_de_disparos_seguidos : int = 3;
	var cantidad_de_disparos_realizados : int;
	private var contador_cantidad_de_disparos_seguidos = 0;
	var objecto_gameObject : GameObject; 
  	
 	private var tipo_disparo = 1;
 	
 	private var posicion_x;
    private var posicion_y;
    
    private var vivo = true;
    var velocidad_enemigo : float = -0.04f;
    
    private var velocidad_disparo : int = 20;
    
    var gameObject_animacion : GameObject; 
    private var animator : Animator;
    
    var timepo_de_inicio : float; 	//tiempo desde que aparece
    
    private var nave_player : GameObject;
    private var hills : GameObject[];
    
    function Start()
    {
    	if(target==null)
    		target = GameObject.FindGameObjectWithTag("Player");
    	attacktimer = 0;
		//coolDown = 0.3f;
		tiempo_parar_disparo = 1.3f;
		cantidad_de_disparos_realizados = 0;
		
	  animator = gameObject_animacion.GetComponent("Animator");
	  animator.SetInteger("animacion", 1);
	  timepo_de_inicio = Time.time;
	  
	  nave_player = GameObject.FindGameObjectWithTag("Player");
	  hills = GameObject.FindGameObjectsWithTag("fondo");
    }   
 
    function Update () 
    {
    	if(vivo == true && Time.time - timepo_de_inicio > 2)
    	{
    		//transform.Translate(velocidad_enemigo,0,0);
    		
    		nave_player.GetComponent(Nave).EstarConEnemigo();
			
			for (var go : GameObject in hills)  { 
				go.GetComponent(mover).cambiar_mover(false);
			}
    	}
    	if(target != null && gameObject.renderer.isVisible)
    	{  		
	    	if(Time.time > attacktimer && vivo == true )
	    	{
	    		if(tipo_disparo == 1)
	    		{
	    			animator.SetInteger("animacion", 1);
					var clone : Rigidbody2D= Instantiate(bullet,pistola.position,pistola.rotation);
					if(!bullet.name.Equals("misil"))
						clone.velocity = transform.TransformDirection(Vector3(-velocidad_disparo,0,0));	
				}
				else if(tipo_disparo == 2)
				{
					var clone3 : Rigidbody2D= Instantiate(bullet,pistola.position,pistola.rotation);
					clone3.velocity = transform.TransformDirection(Vector3(-velocidad_disparo,-5,0));
					
					var clone4 : Rigidbody2D= Instantiate(bullet,pistola2.position,pistola2.rotation);
					clone4.velocity = transform.TransformDirection(Vector3(-velocidad_disparo,-15,0));
					
					var clone5 : Rigidbody2D= Instantiate(bullet,pistola3.position,pistola3.rotation);
					clone5.velocity = transform.TransformDirection(Vector3(-velocidad_disparo,15,0));
					
					var clone6 : Rigidbody2D= Instantiate(bullet,pistola4.position,pistola4.rotation);
					clone6.velocity = transform.TransformDirection(Vector3(-velocidad_disparo,5,0));
				}
				else if(tipo_disparo == 3)
				{
					var clone7 : Rigidbody2D= Instantiate(bullet_directo,pistola.position,pistola.rotation);
					var grulla: grulla1 = clone7.GetComponent(grulla1);
					grulla.velocidad_enemigo = -0.15f;

					//var clone10 : Rigidbody2D= Instantiate(bullet_directo,pistola4.position,pistola4.rotation);
				}else if(tipo_disparo == 4)
				{
					animator.SetInteger("animacion", 2);
				}
				else if(tipo_disparo == 5)
				{
					animator.SetInteger("animacion", 3);
				}
				cantidad_de_disparos_realizados = cantidad_de_disparos_realizados + 1;
				contador_cantidad_de_disparos_seguidos++;
				
				if(contador_cantidad_de_disparos_seguidos == cantidad_de_disparos_seguidos)
				{
					contador_cantidad_de_disparos_seguidos = 0;
					if(tipo_disparo == 1)
						attacktimer = Time.time + coolDown + tiempo_parar_disparo;
					else if(tipo_disparo == 2)
						attacktimer = Time.time + coolDown + tiempo_parar_disparo ;
					else if(tipo_disparo == 3)
						attacktimer = Time.time + coolDown + tiempo_parar_disparo ;
				}else
				{
					if(tipo_disparo == 1)
						attacktimer = Time.time + coolDown;
					else if(tipo_disparo == 2)
						attacktimer = Time.time + coolDown;
					else if(tipo_disparo == 3)
						attacktimer = Time.time + coolDown ;
					else if(tipo_disparo == 4)
						attacktimer = Time.time + coolDown ;
				}
						
				if(cantidad_de_disparos_realizados == 1)
					tipo_disparo = 1;
				else if(cantidad_de_disparos_realizados == 2)
					tipo_disparo = 2;
				else if(cantidad_de_disparos_realizados == 3)
					tipo_disparo = 3;
				else if(cantidad_de_disparos_realizados == 4)
					tipo_disparo = 4;
				/*else if(cantidad_de_disparos_realizados == 5)
				{
					tipo_disparo = 0;
					cantidad_de_disparos_realizados = 0;
				}*/
			} 
			if(animator.GetCurrentAnimatorStateInfo(0).IsName("grulla02"))
			{
				tipo_disparo = 5;
				animator.SetInteger("animacion", 3);
			}
			if(animator.GetCurrentAnimatorStateInfo(0).IsName("grulla03"))
			{
				tipo_disparo = 0;
				animator.SetInteger("animacion", 1);
				cantidad_de_disparos_realizados = 0;
			}
	    }
	}
 	 
	function detener()
	{
		animator.SetInteger("animacion", 0);
		vivo = false;
	}