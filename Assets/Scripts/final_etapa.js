#pragma strict

private var Player : GameObject;
private var camara : Transform;
var cargando : GameObject;

function Start () {
	transform.renderer.material.color.a = 0;
	Player = GameObject.Find("nave_sprites");
	cargando.SetActive(false);
}

function Update()
{

}

function OnTriggerEnter2D(other: Collider2D)
{
	/*if(other.tag.Equals("Player"))
    {
		//cargarEtapa();
    }*/
}

function cargarEtapa()
{	
	//cargando.SetActive(true);
	//cargando.transform.position.z = 10;

	var etapa : int;
	var mundo: String;
	if(Application.loadedLevelName.Equals("level1-1"))
	{
		etapa = 2;
		mundo = "level1-";
	}
	else if(Application.loadedLevelName.Equals("level1-2"))
	{
		etapa = 3;
		mundo = "level1-";	
	}
	else if(Application.loadedLevelName.Equals("level1-3"))
	{
		etapa = 4;
		mundo = "level1-";
	}

	guardar_score();

	PlayerPrefs.SetInt("LastLevel",etapa);
	
	if(etapa < 3)
	{
		Application.LoadLevel(mundo+etapa);
		Debug.Log(mundo+etapa);
	}
	else
		Application.LoadLevel("pronto_nuevas_etapas");
}



function guardar_score()
{
	if(Application.loadedLevelName.Equals("level1-1"))
	{
		PlayerPrefs.SetInt("score_etapa_1",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_1",0) > PlayerPrefs.GetInt("max_score_etapa_1",0))
			PlayerPrefs.SetInt("max_score_etapa_1",PlayerPrefs.GetInt("score_etapa_1",0));
	}else if(Application.loadedLevelName.Equals("level1-2"))
	{
		PlayerPrefs.SetInt("score_etapa_2",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_2",0) > PlayerPrefs.GetInt("max_score_etapa_2",0))
			PlayerPrefs.SetInt("max_score_etapa_2",PlayerPrefs.GetInt("score_etapa_2",0));
	}
	else if(Application.loadedLevelName.Equals("level1-3"))
	{
		PlayerPrefs.SetInt("score_etapa_3",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_3",0) > PlayerPrefs.GetInt("max_score_etapa_3",0))
			PlayerPrefs.SetInt("max_score_etapa_3",PlayerPrefs.GetInt("score_etapa_3",0));
	}
	else if(Application.loadedLevelName.Equals("level1-4"))
	{
		PlayerPrefs.SetInt("score_etapa_4",Score.score);
		if(PlayerPrefs.GetInt("score_etapa_4",0) > PlayerPrefs.GetInt("max_score_etapa_4",0))
			PlayerPrefs.SetInt("max_score_etapa_4",PlayerPrefs.GetInt("score_etapa_4",0));
	}
}
