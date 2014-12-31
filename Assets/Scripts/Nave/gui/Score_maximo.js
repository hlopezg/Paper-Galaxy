#pragma strict
var puntaje_maximo : GUIText;
var score_etapa1 : GUIText;
var score_etapa2 : GUIText;
var score_etapa3 : GUIText;
var score_etapa4 : GUIText;

function Start () {
	if(Application.systemLanguage.ToString().Equals("Spanish"))
	{
		score_etapa1.text = "Etapa 1: " + PlayerPrefs.GetInt("max_score_etapa_1",0);
		score_etapa2.text = "Etapa 2: " + PlayerPrefs.GetInt("max_score_etapa_2",0);
		score_etapa3.text = "Etapa 3: " + PlayerPrefs.GetInt("max_score_etapa_3",0);
		score_etapa4.text = "Etapa 4: " + PlayerPrefs.GetInt("max_score_etapa_4",0);
	}else 
	{
		score_etapa1.text = "Stage 1: " + PlayerPrefs.GetInt("max_score_etapa_1",0);
		score_etapa2.text = "Stage 2: " + PlayerPrefs.GetInt("max_score_etapa_2",0);
		score_etapa3.text = "Stage 3: " + PlayerPrefs.GetInt("max_score_etapa_3",0);
		score_etapa4.text = "Stage 4: " + PlayerPrefs.GetInt("max_score_etapa_4",0);
	}
	
	if(Application.systemLanguage.ToString().Equals("English"))
		puntaje_maximo.text = "Maximum scores";
	
	if(Screen.width >1200)
	{
		puntaje_maximo.fontSize = 25;
		score_etapa1.fontSize = 25;
		score_etapa2.fontSize = 25;
		score_etapa3.fontSize = 25;
		score_etapa4.fontSize = 25;
	}
	
	/*if(Application.loadedLevelName.Equals("1"))
	{
		score_max = PlayerPrefs.GetInt("score_etapa_1",0);
	}else if(Application.loadedLevelName.Equals("2"))
	{
		score_max = PlayerPrefs.GetInt("score_etapa_2",0);
	}
	else if(Application.loadedLevelName.Equals("3"))
	{
		score_max = PlayerPrefs.GetInt("score_etapa_3",0);
	}
	else if(Application.loadedLevelName.Equals("4"))
	{
		score_max = PlayerPrefs.GetInt("score_etapa_4",0);
	}*/
	
}

function Update () {

}
	
	