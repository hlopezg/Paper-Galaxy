
private var poder_desruir_al_salir : boolean = false;
 
var destruir : boolean = false;

private var tiempo_actual_para_destruir : float = 0;
var tiempo_extra_para_destruir : float = 0;

private var numero : int;
private var curHealth : int;
var maxHealth : int= 100;
	
var explosion : Transform;
	
var pre_explosion : ParticleSystem;

private var dano_laser : int = 20;
private var tiempo_dano_laser : float = 0.2;
private var count_tiempo_dano_laser : float = 0;

function Start () {
	curHealth = maxHealth;
	if(pre_explosion !=null)		//para el boos
	{
		pre_explosion.Stop();
		pre_explosion.Clear();
	}
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
		destruir= true;
		
	    tiempo_actual_para_destruir = Time.time ;
	    pre_explosion.Play();
	   
	    var boss : GameObject;
	    boss = GameObject.FindGameObjectWithTag("Boss");
	    boss.GetComponent(IA_boss).detener();
	}
} 

function Load_creditos()
{
	Application.LoadLevel("pronto_nuevas_etapas");	
}