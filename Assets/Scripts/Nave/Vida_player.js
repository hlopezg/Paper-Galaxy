public var Barra_power_up : GameObject;
public var barra_energia : GameObject;

var maxHealth : int = 50;
var curHealth : int;
var muerto : boolean = false;

public var invencible : boolean = false;

var DisparoChoque : Transform;
var dano_disparo : int = 10;

var script_fuego : GameObject;

function Start () {
	curHealth = maxHealth;
	
}

function Update () {
	if(curHealth == 0 && muerto == false)
	{		
		muerto = true;
		matar();
	}
}

function OnTriggerEnter2D(otro: Collider2D){
	if(otro.tag.Equals("Enemigo")  || otro.tag.Equals("Boss"))
	{
		AddjustCurrentHealth(-20);
	}
	else if(otro.tag.Equals("Asteroide"))
	{
		matar();
	}
}

/*function OnTriggerEnter2D(enemigo: Collider2D){
	if(enemigo.gameObject.tag.Equals("disparo_enemigo"))
	{
		var clone : Transform;
//		clone = Instantiate(DisparoChoque, transform.position, transform.rotation);
		Destroy(enemigo);
	
		AddjustCurrentHealth(-dano_disparo);
	}
}*/

	public function AddjustCurrentHealth(adj : int)
	{
		if(!invencible)
		{
			barra_energia.GetComponent(script_barra_energia).ajustar_barra_energia(adj);
			if(adj < 0)
				Barra_power_up.GetComponent(script_barra_power_up).ajustar_barra_energia(adj*3);
				
			curHealth += adj;

			if(curHealth <0)
				curHealth = 0;
		
			if(curHealth > maxHealth)
				curHealth = maxHealth;
		
			if(maxHealth <1)
				maxHealth = 1;		
		}
		if(!invencible)
	 		golpeado_invencible();
	}
	
	function golpeado_invencible()
	{
		invencible = true;
		var i : int;
 		//script_fuego = GameObject.Find("fuergo_sprites_0");
		//script_fuego.GetComponent(golpeado_fuego).golpeado_invencible();
		for(i = 0; i<8;i++)
		{
			GetComponent(SpriteRenderer).color.a = 0.0;
			script_fuego.GetComponent(SpriteRenderer).color.a = 0.0;
			yield WaitForSeconds(.1);
			GetComponent(SpriteRenderer).color.a = 1.0;
			script_fuego.GetComponent(SpriteRenderer).color.a = 1.0;
			yield WaitForSeconds(.1);
		}
		invencible = false;
	}
		
	public function matar()
	{
		/*var fondos : GameObject[];
		fondos = GameObject.FindGameObjectsWithTag("fondo");
		for (var fondo : GameObject in fondos)  { 
			fondo.GetComponent(mover).cambiar_mover(false);
		}
		GameObject.FindGameObjectWithTag("nube").GetComponent(ScrollScript).muerto = true;*/
		
		GetComponent(SpriteRenderer).color.a = 0.0;
		script_fuego.GetComponent(SpriteRenderer).color.a = 0.0;
		gameObject.GetComponent(Nave).destruirNave();
				
		yield WaitForSeconds(2);
		Application.LoadLevel(Application.loadedLevelName);
		//Time.timeScale = 0;
	}
	
