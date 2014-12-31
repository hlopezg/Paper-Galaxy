//	Copyright 2013 Unluck Software	
//	www.chemicalbliss.com	 

#pragma strict
private var counter:float = 2;
private var scaleBuffer:Vector3;
private var beam:Transform;

var startDelay:float;
var pauseDelay:float = 2;
var beamDuration:float = 3; //Negative = beam always on
var animationSpeed:float = 2;
var xMultiplier:float = 0;
var yMultiplier:float = 1;
var particles:ParticleSystem[];	//Place particle systems to show / hide
private var playAudio:boolean;

public var duracion : int = 5;
private var tiempo : float = 0;
private var velocidad_laser : int = 6;

function Start () {
	counter -= startDelay;
	toggleParticles(false);
	beam = transform.FindChild("Beam");
	scaleBuffer = beam.localScale;
}

function matOffset() {
	beam.renderer.sharedMaterial.mainTextureOffset.x = (beam.renderer.material.mainTextureOffset.x+(animationSpeed*Time.deltaTime*xMultiplier))%1;//Offsets texture for simple flowing animation
	beam.renderer.sharedMaterial.mainTextureOffset.y = (beam.renderer.material.mainTextureOffset.y+(animationSpeed*Time.deltaTime*yMultiplier))%1;//%1 fixates offset between 0 and 1, never above
}

function Update () {
	tiempo = tiempo + Time.deltaTime;
	if(tiempo > duracion)
		gameObject.SetActive(false);
	
	if(counter > 2)
		matOffset();
	if(beamDuration < 0)
		counter = 2.35;
	else
		counter += Time.deltaTime;
	
	if((beam.position.x + beam.renderer.bounds.size.x) < Camera.main.transform.position.x+(2 * Camera.main.orthographicSize * Camera.main.aspect/2)-0.5)
	{
		//beam.localScale.y = beam.localScale.y + (Time.deltaTime * velocidad_laser);	// agregado por mi
	}
	
	//Debug.Log((beam.position.x + beam.renderer.bounds.size.x)  + " " + (Camera.main.transform.position.x+(2 * Camera.main.orthographicSize * Camera.main.aspect/2)-0.5));
	
	if(counter < 2 && counter > 1.9){
		beam.localScale.x =beam.localScale.z = scaleBuffer.x*.3;
		beam.gameObject.SetActive(true);
		toggleParticles(true);
		if(audio)
		audio.Play();
		
	}else if(counter < 2.1){
		beam.gameObject.SetActive(false);
		toggleParticles(false);
		
	}else if(counter < 2.2){
		beam.localScale.x =beam.localScale.z = scaleBuffer.x*.7;
		beam.gameObject.SetActive(true);
		toggleParticles(true);
		
	}else if(counter < 2.3){
		beam.gameObject.SetActive(false);
		toggleParticles(false);
	}else if(counter < 2.4){
		beam.localScale.x = beam.localScale.z = scaleBuffer.x;
		beam.gameObject.SetActive(true);
		toggleParticles(true);
		
	}else if(counter > 2.4 + beamDuration){
		beam.gameObject.SetActive(false);
		toggleParticles(false);
		if(audio)
		audio.Stop();
		counter = 0 -pauseDelay +2;
	}
	
}

function toggleParticles(emit:boolean){
	for(var i:int;i<particles.Length;i++){
		if(particles[i])
		particles[i].enableEmission = emit;
	}
}

public function cambiarTiempo(tiempo_laser : float)
{
	duracion = tiempo_laser * 2;
}