#pragma strict

private var oro : int = 20;
public var texto_oro: GameObject;

function Start () {
	
}

function setOro (_oro) {
	oro = _oro;
}

function OnTriggerEnter2D(other: Collider2D)
{
	if(other.gameObject.tag.Equals("Player"))
	{	
		//Score.score = Score.score + 20;
		var script : gold_player = other.gameObject.GetComponent(gold_player);
		script.GuardarOro(oro);
		gameObject.SetActive(false);
		
		var gameObject_texto_oro : GameObject = Instantiate(texto_oro,transform.position,texto_oro.transform.rotation);
		
		var text_mesh : Transform = gameObject_texto_oro.transform.GetChild(0);
		text_mesh.GetComponent(TextMesh).text = "+" + oro.ToString();
		//text_mesh.text = oro.ToString();
	}
}
