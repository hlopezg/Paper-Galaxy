#pragma strict

var spawnTime : float= 5f;		// The amount of time between each spawn.
var spawnDelay : float= 3f;		// The amount of time before spawning starts.
var enemies : GameObject;		// Array of enemy prefabs.
var asignar_animacion : int = 1;
var max_repeat : int = 4;
var velocidad_enemigo : float = 0;
private var count : int = 0;

private var visible : boolean = false;


function Start () {
	renderer.material.color.a = 0;
}

function Update()
{
	if(visible == false && renderer.isVisible == true)
	{
		InvokeRepeating("Spawn", spawnDelay, spawnTime);
		visible = true;
	}

	if(count >= max_repeat)
		CancelInvoke("Spawn");
}

function Spawn () {
	//var enemyIndex : int  = Random.Range(0, enemies.Length);
	var nave : GameObject = Instantiate(enemies, transform.position, transform.rotation);
 
	if(velocidad_enemigo!=0)
	{
		if(nave.tag.Equals("grulla_mediana"))
		{
			var grulla: grulla1 = nave.GetComponent(grulla1);
			grulla.velocidad_enemigo = velocidad_enemigo;
			}
		else
		{
			nave.transform.GetChild(0).GetComponentInChildren(IA_enemy).velocidad_enemigo = velocidad_enemigo;

		}
	}
	if(!nave.name.Equals("boss grulla(Clone)") && !nave.tag.Equals("grulla_mediana"))
		nave.GetComponentInChildren(animacion_nave_enemiga).cambiarAnimacion(asignar_animacion);
	//nave.transform.GetChild(0).GetChild(0).rigidbody2D.velocity.x = nave.rigidbody2D.velocity.x + 2;
	count++;
}