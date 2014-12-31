
private var poder_desruir_al_salir : boolean = false;
var dar_power_up : boolean = true;
var dar_escudo : boolean = false;
var destruir : boolean = false;

private var tiempo_actual_para_destruir : float = 0;
var tiempo_extra_para_destruir : float = 0;

private var numero : int;
private var curHealth : int;
var maxHealth : int= 100;
	
var power_up : Rigidbody2D;
var escudo : Rigidbody2D;
//var gold : Rigidbody2D;
var gold_gameObject : GameObject;

var explosion : Transform;
	
var pre_explosion : ParticleSystem;

private var dano_laser : int = 20;
private var tiempo_dano_laser : float = 0.2;
private var count_tiempo_dano_laser : float = 0;

var explosion_audio1 : AudioClip;

function Start () {
	curHealth = maxHealth;
	if(pre_explosion !=null)		//para el boos
	{
		pre_explosion.Stop();
		pre_explosion.Clear();
	}
//	audio.Stop();
}

function Update () {
	if(gameObject.renderer.isVisible)
		poder_desruir_al_salir = true;
	else if(!gameObject.renderer.isVisible && poder_desruir_al_salir == true)
		gameObject.SetActive(false);
		// Destroy(gameObject);
		
	if(destruir == true && (Time.time > tiempo_actual_para_destruir + tiempo_extra_para_destruir))
	{
		//var explotar = Instantiate(explosion,transform.position, transform.rotation);
		Instantiate(explosion,transform.position, transform.rotation);
		Invoke("Load_creditos",tiempo_extra_para_destruir);
		gameObject.SetActive(false);
		//gameObject.SetActive(false);
	}
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
		
	if(curHealth == 0 && destruir == false)
	{
		Score.score = Score.score + maxHealth;
		//Debug.Log(Vida_player.score);
		numero = Nave.enemyCount;
		Nave.enemyCount = Nave.enemyCount -1;
		
		if(numero <5)
		{
			if(numero == 1)
			{
				var rango : int =  Random.Range(1,3);
				Debug.Log(rango);
				if(rango == 1)
				{
					if(dar_power_up == true && power_up != null)
						Instantiate(power_up,transform.position,transform.rotation);
				}else
				{
					if(dar_escudo && escudo != null)
						Instantiate(escudo,transform.position,transform.rotation);
				}
			}
			else {
				if(gold_gameObject != null)
				{
					var gold_instantiate : GameObject = Instantiate(gold_gameObject,transform.position,transform.rotation);
					gold_instantiate.GetComponent(gold).setOro(maxHealth/2);
				}
			}
		} 
		if(explosion_audio1!=null)
		{
			AudioSource.PlayClipAtPoint(explosion_audio1, transform.position);
		}
		
		Instantiate(explosion,transform.position, transform.rotation);
		gameObject.SetActive(false);
		//Destroy(gameObject);
	}
} 

function Load_creditos()
{
	Application.LoadLevel("pronto_nuevas_etapas");	
}