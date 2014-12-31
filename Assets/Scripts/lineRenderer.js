#pragma strict
private var lineRenderer : LineRenderer;

private var posicion_ancho_derecho_pantalla : float;
private var colisionando : boolean = false;
private var distancia_colision : float;
private var distancia_beam_original : float;
private var scale_originalY : float;
private var objetocolision : Vector3;

private var sumarPosicion : float = 0;

function Start () {
	lineRenderer = GetComponent(LineRenderer);
	Debug.Log(transform.parent.name);
	sumarPosicion = transform.parent.position.x;
	posicion_ancho_derecho_pantalla = (2 * Camera.main.orthographicSize * Camera.main.aspect/2)-0.5;
	
}

function Update () {
	sumarPosicion = sumarPosicion + Time.deltaTime  *50;
	if((transform.position.x + transform.renderer.bounds.size.x) < Camera.main.transform.position.x+posicion_ancho_derecho_pantalla && colisionando == false)
	{
		//transform.localScale.y = transform.localScale.y + (Time.deltaTime * sumarPosicion);	// agregado por mi
		lineRenderer.SetPosition(0, Vector3(transform.parent.position.x,transform.parent.position.y,transform.parent.position.z));
		lineRenderer.SetPosition(1, Vector3(sumarPosicion,transform.parent.position.y,transform.parent.position.z));
	}else if(colisionando == true)
	{
		lineRenderer.SetPosition(1, objetocolision);
	}
	
}
/*
function Update(){
	var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    lineRenderer.useWorldSpace = false;
    lineRenderer.SetVertexCount(2);
    var hit : RaycastHit;
    Physics.Raycast(transform.parent.position,transform.parent.forward,hit);
    if(hit.collider){
    	lineRenderer.SetPosition(1,Vector3(hit.distance,transform.parent.position.y,transform.parent.position.z));
    }
    else{
        lineRenderer.SetPosition(1,Vector3(5000,transform.parent.position.y,transform.parent.position.z));
    }
}
*/
function OnTriggerEnter2D(otro: Collider2D){
	Debug.Log(otro.tag);
	if(otro.tag.Equals("Enemigo"))
	{
		
		colisionando = true;
		distancia_colision = otro.transform.position.x - transform.position.x;
		scale_originalY = transform.localScale.y;
		distancia_beam_original = transform.position.x + transform.renderer.bounds.size.x;
		objetocolision = otro.transform.position;
		
		Debug.Log("distancia_colision " + distancia_colision);
		Debug.Log("scale_originalY " + scale_originalY);
		Debug.Log("distancia_beam_original " + distancia_beam_original);
	}
}