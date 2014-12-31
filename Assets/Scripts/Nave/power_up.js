

function Start () {

}

function Update () {

}

   function OnTriggerEnter(hit:Collider){
   Debug.Log(hit.collider.tag.Equals("Player"));
        if(hit.collider.tag.Equals("Player")){
             Destroy (gameObject);
        }
}