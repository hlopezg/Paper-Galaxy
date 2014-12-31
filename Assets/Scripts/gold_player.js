#pragma strict

public var oro_player : int;
//public var guitext_oro : GUIText;

function Start () {
	oro_player = PlayerPrefs.GetInt("oro_player",0);
}

function Update () {

}

function GuardarOro(oro : int)
{
	oro_player = oro_player + oro;
	PlayerPrefs.SetInt("oro_player",oro_player);
	//guitext_oro.text = oro_player.ToString();
}