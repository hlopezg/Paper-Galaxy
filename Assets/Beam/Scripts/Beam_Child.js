#pragma strict

private var velocidad_laser : int = 180;

private var posicion_ancho_derecho_pantalla : float;
private var colisionando : boolean = false;
private var posicionColisionandoX : float;

private var distancia_colision : float;
private var distancia_beam_original : float;
private var scale_originalY : float;
private var objetocolision : Vector3;

function Start () {
	posicion_ancho_derecho_pantalla = (2 * Camera.main.orthographicSize * Camera.main.aspect/2);
}

function Update () {
	if((transform.position.x + transform.renderer.bounds.size.x) < Camera.main.transform.position.x+posicion_ancho_derecho_pantalla && colisionando == false)
	{
		transform.localScale.y = transform.localScale.y + (Time.deltaTime * velocidad_laser);	// agregado por mi
	}else if(colisionando == true)
	{
		/*var distance = Vector3.Distance(Vector3(transform.position.x,transform.position.y,transform.position.z), Vector3(posicionColisionandoX,transform.position.y,transform.position.z));
		Debug.DrawLine(Vector2(transform.position.x,transform.position.y),Vector2(posicionColisionandoX,transform.position.y),Color.red);
		transform.localScale.y = distancia_colision * scale_originalY / (distancia_beam_original) ;
		Debug.DrawLine(Vector2(transform.position.x,transform.position.y+10),Vector2(transform.position.x + distancia_colision,transform.position.y+10),Color.yellow);
		Debug.DrawLine(Vector2(transform.position.x,transform.position.y+5),Vector2(transform.position.x + distancia_beam_original,transform.position.y +5),Color.green);
		
		Debug.Log("transform.localScale.y " + transform.localScale.y);
		
		Debug.DrawLine(Vector2(transform.position.x,transform.position.y-5),Vector2(transform.position.x + transform.renderer.bounds.size.x,transform.position.y -5),Color.cyan);
		*/
	}
}