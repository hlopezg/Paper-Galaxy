#pragma strict
	public static var score : int = 0;
function Start () {
	score = 0;
	/*if(Application.loadedLevelName.Equals("1"))
	{
		score = 0;
	}else if(Application.loadedLevelName.Equals("2"))
	{
		score = PlayerPrefs.GetInt("score_etapa_1",score);
	}
	else if(Application.loadedLevelName.Equals("3"))
	{
		score = PlayerPrefs.GetInt("score_etapa_2",score);
	}
	else if(Application.loadedLevelName.Equals("4"))
	{
		score = PlayerPrefs.GetInt("score_etapa_3",score);
	}*/
}

function Update () {
	guiText.text = score.ToString();
	if(int.Parse(guiText.text) < 10)
		guiText.text = "000000" + guiText.text;
	else if(int.Parse(guiText.text) < 100)
		guiText.text = "00000" + guiText.text;
	else if(int.Parse(guiText.text) < 1000)
		guiText.text = "0000" + guiText.text;
	else if(int.Parse(guiText.text) < 10000)
		guiText.text = "000" + guiText.text;
	else if(int.Parse(guiText.text) < 100000)
		guiText.text = "00" + guiText.text;
	else if(int.Parse(guiText.text) < 1000000)
		guiText.text = "0" + guiText.text;
}

function guardar_score(score : int)
{
	if(Application.loadedLevelName.Equals("level1-1"))
	{
		PlayerPrefs.SetInt("score_etapa_1",score);
		if(PlayerPrefs.GetInt("score_etapa_1",0) > PlayerPrefs.GetInt("max_score_etapa_1",0))
			PlayerPrefs.SetInt("max_score_etapa_1",PlayerPrefs.GetInt("score_etapa_1",0));
	}else if(Application.loadedLevelName.Equals("level1-2"))
	{
		PlayerPrefs.SetInt("score_etapa_2",score);
		if(PlayerPrefs.GetInt("score_etapa_2",0) > PlayerPrefs.GetInt("max_score_etapa_2",0))
			PlayerPrefs.SetInt("max_score_etapa_2",PlayerPrefs.GetInt("score_etapa_2",0));
	}
	else if(Application.loadedLevelName.Equals("level1-3"))
	{
		PlayerPrefs.SetInt("score_etapa_3",score);
		if(PlayerPrefs.GetInt("score_etapa_3",0) > PlayerPrefs.GetInt("max_score_etapa_3",0))
			PlayerPrefs.SetInt("max_score_etapa_3",PlayerPrefs.GetInt("score_etapa_3",0));
	}
}


function obtener_score(etapa : int)
{
	if(Application.loadedLevelName.Equals("1"))
	{
		PlayerPrefs.GetInt("score_etapa_1");
	}else if(Application.loadedLevelName.Equals("2"))
	{
		PlayerPrefs.GetInt("score_etapa_2");
	}
	else if(Application.loadedLevelName.Equals("3"))
	{
		PlayerPrefs.GetInt("score_etapa_3");
	}
	else if(Application.loadedLevelName.Equals("4"))
	{
		PlayerPrefs.GetInt("score_etapa_4");
	}
}
