
//var dar_power_up : boolean = true;
//var dar_escudo : boolean = false;

//private var numero : int;
private var curHealth : int;
var maxHealth : int= 40;
	
//var power_up : Rigidbody2D;
//var escudo : Rigidbody2D;
//var gold : Rigidbody2D;

var explosion : Transform;
	
private var dano_laser : int = 20;
private var tiempo_dano_laser : float = 0.2;
private var count_tiempo_dano_laser : float = 0;

var grulla_chica : GameObject;
var pistola1 : Transform;
var pistola2 : Transform;

private var poder_desruir_al_salir : boolean = false;

function Start () {
	curHealth = maxHealth;
}

function Update () {
	if(gameObject.renderer.isVisible)
		poder_desruir_al_salir = true;
	else if(!gameObject.renderer.isVisible && poder_desruir_al_salir == true)
		gameObject.SetActive(false);
}

function OnTriggerEnter2D(otro: Collider2D){
	if(otro.tag.Equals("Beam"))
	{
		count_tiempo_dano_laser = count_tiempo_dano_laser + Time.deltaTime;
		if(count_tiempo_dano_laser > tiempo_dano_laser)
		{
			count_tiempo_dano_laser = 0;
			AddjustCurrentHealth(-dano_laser);
		}
	}
}

function OnTriggerExit2D(otro: Collider2D){
	if(otro.tag.Equals("Beam"))
	{
		count_tiempo_dano_laser = 0;
	}
}

public function AddjustCurrentHealth(adj : int)
{	
	curHealth += adj;
		
	if(curHealth <0)
		curHealth = 0;
	
	if(curHealth > maxHealth)
		curHealth = maxHealth;

	if(maxHealth <1)
		maxHealth = 1;
		
	if(curHealth == 0 )
	{
		/*Score.score = Score.score + maxHealth;
		numero = Nave.enemyCount;
		Nave.enemyCount = Nave.enemyCount -1;
		if(dar_escudo)
		{
			Instantiate(escudo,transform.position,transform.rotation);
		}
		else if(numero <5)
		{
			if(numero == 1)
			{
				if(dar_power_up == true)
				{
					if(power_up != null)
						Instantiate(power_up,transform.position,transform.rotation);
				}
			}
			else {
				if(gold != null)
					Instantiate(gold,transform.position,transform.rotation);
			}
		} */
	
		Instantiate(explosion,transform.position, transform.rotation);
		if(gameObject.tag.Equals("grulla_mediana"))
		{
			Instantiate(grulla_chica,pistola1.position,pistola1.rotation);
			Instantiate(grulla_chica,pistola2.position,pistola2.rotation);
		}
		gameObject.SetActive(false);
	}
} 