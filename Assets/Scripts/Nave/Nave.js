#pragma strict

static var enemyCount : int = 7;
private var startEnemyCount: int = 7;

public var velocidad : float= 0.0f;
var explosion : Transform;
var mover_player = true;
public var bullet : Rigidbody2D; 
public var misil : Rigidbody2D;

var pistola: Transform;
var pistola2: Transform;
var pistola3: Transform;
var pistola4: Transform;
var pistola_misil: Transform;
var muerto = false;

public var mainCamara : GameObject;
private var height : int;
private var width : int;
private var margen : float = 0.5;

private var attacktimer :float; 
private var attacktimer_misil :float;
var coolDown : float = 1.0f;
var coolDown_misil : float = 2f;

public var escudo : GameObject; 
public var escudo2 : GameObject; 
public var escudo3 : GameObject; 

public var power_disparo : int = 0;
public var nivel_escudo : int = 0;

private var mn : GameObject;
public var gameObject_Barra_power_up : GameObject;

public var guiTexture_botonPausa : GUITexture;	// para que al presionar sobre la pausa la nave no se mueva
public var guiTexture_botonBeamLaser : GUITexture;
public var guiTexture_botonBomba : GUITexture;
//public var guiTexture_botonTiempo : GUITexture;

var tiempo_laser : float = 0;

private var animator: Animator;
private var terminar_nivel_State : boolean = false;
private var script :final_etapa;

public var audio_disparo : AudioClip;

function Start () {
	animator = gameObject.transform.parent.GetComponent("Animator");
	escudo.gameObject.SetActive(false);
	escudo2.gameObject.SetActive(false);
	escudo3.gameObject.SetActive(false);

	height = 2 * Camera.main.orthographicSize;
  	width = height * Camera.main.aspect;
  	
  	attacktimer = 0;
  	attacktimer_misil = 0;
  	Time.timeScale = 1;
}

function FixedUpdate  () {
	if(mover_player)
	{
		transform.Translate((Input.GetAxis("Horizontal")) * 0.5 + velocidad,Input.GetAxis("Vertical")* 0.5,0);	
		mainCamara.transform.position.x = mainCamara.transform.position.x + velocidad;	
	}
}

function Update () {
	 if(Input.GetKeyDown(KeyCode.Escape))
	 {
	 	Application.LoadLevel("inicio");
	 }
	if(mover_player)
	{
		if(enemyCount == 0)
			enemyCount = startEnemyCount;
		if(Input.GetButton ("Fire1") && Input.touchCount == 0)	//con teclado o conrol
		{		
			if(Time.time > attacktimer)
			{
				disparar();
			}
		}
		//if(Input.touchCount > 0 && !botonPausa.Contains((Input.GetTouch(0).position)))		//touch
		if(Input.touchCount > 0 
			&& !guiTexture_botonPausa.HitTest(Input.GetTouch(0).position)
			&& !guiTexture_botonBeamLaser.HitTest(Input.GetTouch(0).position)
			&& !guiTexture_botonBomba.HitTest(Input.GetTouch(0).position)
			)		//touch
		{
			var touchPos3D:Vector3 = Camera.main.ScreenToWorldPoint(Vector3(Input.GetTouch(0).position.x,Input.GetTouch(0).position.y,0));
                        
			var worldPos = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
			//worldPos.z = 0;
			worldPos.z = Camera.main.nearClipPlane;
			worldPos.x = worldPos.x + 8;
            transform.position = Vector2.MoveTowards(transform.position, worldPos, 1.5);
            
			for (var touch : Touch in Input.touches)
			{
				if(guiTexture_botonBomba.HitTest(touch.position))
				{
					if(touch.phase == TouchPhase.Began)
			       	{
			       		guiTexture_botonBomba.GetComponent(bomba).presionar();
			       	}else if(touch.phase == TouchPhase.Ended){
			       		guiTexture_botonBomba.GetComponent(bomba).soltar();
			       	}
				}else if(guiTexture_botonBeamLaser.HitTest(touch.position))
				{
					if(touch.phase == TouchPhase.Began)
			       	{
				        tiempo_laser = 0;
				        guiTexture_botonBeamLaser.GetComponent(button_laser).presionar();
			       	}else if(touch.phase == TouchPhase.Stationary){
			       		tiempo_laser = tiempo_laser + Time.deltaTime;
			       	}
			       	else if(touch.phase == TouchPhase.Ended){
			       		//Debug.Log("TouchPhase.Ended");
			       		guiTexture_botonBeamLaser.GetComponent(button_laser).dispararLaser(tiempo_laser);
			       		guiTexture_botonBeamLaser.GetComponent(button_laser).soltar();
			       	}
				}else
				{
					if(Time.time > attacktimer)
					{
						disparar();
					}
				}
			}
		}
		
		if(transform.position.y > (height/2)-margen)
		{
			transform.position.y = (height/2)-margen;
		}
		if(transform.position.y <(-height/2)+margen)
		{
			transform.position.y = (-height/2)+margen;
		}
		
		if(transform.position.x < mainCamara.transform.position.x-(width/2)+margen)
		{
			transform.position.x = mainCamara.transform.position.x-(width/2)+margen;
		}
		if(transform.position.x > mainCamara.transform.position.x+(width/2)-margen)
		{
			transform.position.x = mainCamara.transform.position.x+(width/2)-margen;
		}
	}	
	
	if (animator != null && animator.GetCurrentAnimatorStateInfo(0).IsName("terminar_nivel"))
	{
	 	terminar_nivel_State = true;
	 	mover_nave(false);
  	}
  	else if (terminar_nivel_State)
  	{
  		
       	terminar_nivel_State = false;
		script.cargarEtapa();
	}
}

function mover_nave(pausa : boolean)
{
	mover_player = pausa;
		
	var fondos : GameObject[];
	fondos = GameObject.FindGameObjectsWithTag("fondo");
	for (var fondo : GameObject in fondos)  { 
		fondo.GetComponent(mover).cambiar_mover(mover_player);
	}
	GameObject.FindGameObjectWithTag("nube").GetComponent(ScrollScript).muerto = !mover_player;
}

function disparar()
{
	if(power_disparo >= 0)
	{
		var clone1 : Rigidbody2D = Instantiate(bullet,pistola.position,pistola.rotation);
		clone1.velocity = transform.TransformDirection(Vector3(100,0));
	}
	if(power_disparo >= 1)
	{
		var clone2 : Rigidbody2D= Instantiate(bullet,pistola2.position,pistola2.rotation);
		clone2.velocity = transform.TransformDirection(Vector3(100,0));
	}
	if(power_disparo >= 2)
	{
		var clone4_1 : Rigidbody2D= Instantiate(bullet,pistola3.position,pistola3.rotation);
		clone4_1.velocity = transform.TransformDirection(Vector3(100,100));
		
		var clone4_2 : Rigidbody2D= Instantiate(bullet,pistola4.position,pistola4.rotation);
		clone4_2.velocity = transform.TransformDirection(Vector3(100,-100));
	}
	audio.Play();
	attacktimer = Time.time + coolDown;
}

function EstarConEnemigo(){
	velocidad = 0;
}

function OnTriggerEnter2D(otro: Collider2D){
	if(otro.tag.Equals("Power_up"))
	{
		power_up();
		otro.gameObject.SetActive(false);
	}else if(otro.tag.Equals("Power_up_escudo"))
	{
		otro.gameObject.SetActive(false);
		activar_escudo(true);
	}else if(otro.tag.Equals("fin_etapa"))
	{
		animacion(1);
		script = otro.gameObject.GetComponent(final_etapa);
		//yield WaitForSeconds (5);
		//script.cargarEtapa();
	}
}

/*function OnCollisionEnter2D(otro : Collision2D)
{
	Debug.Log(otro.collider.tag);
	if(otro.collider.tag.Equals("Enemigo"))
	{
		gameObject.GetComponent(Vida_player).AddjustCurrentHealth(-20);
		otro.gameObject.GetComponent(Vida_enemigo_sin_barra).AddjustCurrentHealth(-20);
	}
}*/

function activar_escudo(activar : boolean){
	if(nivel_escudo <3)
	{
		if(activar)
		{
			nivel_escudo++;
			if(nivel_escudo == 1)
			{
				escudo.SetActive(true);
				escudo2.SetActive(false);
				escudo3.SetActive(false);
				escudo.GetComponent(vida_escudo).reestablecer();
			}
			else if(nivel_escudo == 2)
			{
				escudo.SetActive(true);
				escudo2.SetActive(true);
				escudo3.SetActive(false);
				escudo2.GetComponent(vida_escudo).reestablecer();
				escudo.transform.localPosition.x = 0;
				escudo.transform.localPosition.y = -2.8;
				escudo2.transform.localPosition.x = 0;
				escudo2.transform.localPosition.y = 2.8;
				/*escudo.transform.position.x = 0;
				escudo.transform.position.y = -2.8;
				escudo2.transform.position.x = 0;
				escudo2.transform.position.y = 2.8;*/
			}
			else if(nivel_escudo == 3)
			{
				escudo.SetActive(true);
				escudo2.SetActive(true);
				escudo3.SetActive(true);
				escudo3.GetComponent(vida_escudo).reestablecer();
				escudo.transform.localPosition.x = 0;
				escudo.transform.localPosition.y = -2.8;
				escudo2.transform.localPosition.x = 2.4;
				escudo2.transform.localPosition.y = 1.16;
				escudo3.transform.localPosition.x = -2.4;
				escudo3.transform.localPosition.y = 1.16;
			}
		}else
		{
			nivel_escudo--;
			if(nivel_escudo == 0)
				escudo.SetActive(false);
			else if(nivel_escudo == 1)
				escudo2.SetActive(false);
			else if(nivel_escudo == 2)
				escudo3.SetActive(false);
		}
	}
}

function destruirNave(){
	var explotar = Instantiate(explosion,transform.position, transform.rotation);
	velocidad = 0;
	gameObject.transform.position.y = -1000;
	mover_nave(false);
	//Destroy(gameObject);
	//gameObject.SetActive(false);
	//var myController = mainCamara.GetComponent("script_camara");
//	myController.Gameover();
}


function power_up()
{
	if(power_disparo<3)
	{
		power_disparo++;
	} 
	gameObject_Barra_power_up.GetComponent(script_barra_power_up).reestablecer_barra_power_up();
}

function disminuir_power_up()
{	
	if(power_disparo>0)
	{
		power_disparo--;
		Debug.Log("disminuir_power_up " + power_disparo);
		reestablecer_power_up();
	}
}

function reestablecer_power_up()
{
	if(power_disparo > 0)
	{
		//var mn : GameObject;
	 	//mn = GameObject.Find("Barra_power_up");
	 	if( gameObject_Barra_power_up!=null)
			gameObject_Barra_power_up.GetComponent(script_barra_power_up).reestablecer_barra_power_up();
	}
}

function disminuirEscudo()
{
	nivel_escudo--;
}

function animacion(animacion : int)
{
	if(animacion == 1)
	{
		animator.SetTrigger("fin_etapa");
	}
}