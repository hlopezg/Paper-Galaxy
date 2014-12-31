#pragma strict

private var invencible : boolean = false;

 

function golpeado_invencible()
{
	invencible = true;
	var i : int;
	for(i = 0; i<8;i++)
	{
		GetComponent(SpriteRenderer).color.a = 0.0;
		yield WaitForSeconds(.1);
		GetComponent(SpriteRenderer).color.a = 1.0;
		yield WaitForSeconds(.1);
	}
	invencible = false;
}