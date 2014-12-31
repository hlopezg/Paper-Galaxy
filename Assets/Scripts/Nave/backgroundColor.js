#pragma strict

var color1 : Color = Color.red;
	var color2 : Color = Color.blue;
	var duration = 3.0;
	public var cambiar_colores :boolean;
	
	function Start()
	{
		camera.clearFlags = CameraClearFlags.SolidColor;
	}
	
	function Update () {
	if(cambiar_colores)
	{
		var t : float = Mathf.PingPong (Time.time, duration) / duration;
		camera.backgroundColor = Color.Lerp (color1, color2, t);
		}else
			camera.backgroundColor = color1;
	}