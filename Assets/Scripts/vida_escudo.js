#pragma strict
var maxHealth : int = 30;
var curHealth : int;
var nave : GameObject;

function Start () {
	curHealth = maxHealth;
}

function Update () {
	if(curHealth == 0)
	{
		gameObject.SetActive(false);
		nave.GetComponent(Nave).disminuirEscudo();
	}
}

function OnTriggerEnter2D(otro: Collider2D) {
//	Debug.Log(otro.tag);
	if(otro.tag.Equals("disparo_enemigo"))
	{
		AddjustCurrentHealth(-10);
		otro.gameObject.SetActive(false);
		
	}
}

function reestablecer()
{
	curHealth = maxHealth;
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
}