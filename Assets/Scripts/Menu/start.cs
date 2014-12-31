using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;
using UnityEngine.SocialPlatforms;

public class start : MonoBehaviour {
	
	public Texture start_texture;
	public Texture start_pressed_texture;
	// Use this for initialization
	void Start () {
		if(Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer || Application.platform == RuntimePlatform.WP8Player)
		{
			float x = guiTexture.pixelInset.x;
			float y = guiTexture.pixelInset.y;
			float height = guiTexture.pixelInset.height * 2;
			float width = guiTexture.pixelInset.width * 2;
			guiTexture.pixelInset = new Rect(x,y,width,height);
		}
	}

	void Update()
	{
		if (Input.GetKey(KeyCode.Escape))
		{
			Application.Quit();
		}
	}
	
	void OnMouseDown()
	{
		guiTexture.texture = start_pressed_texture;
	}
	
	void OnMouseUp()
	{
		guiTexture.texture = start_texture;
		try
		{
			/*if (!Social.localUser.authenticated) {
				Social.localUser.Authenticate(OnAuthCB);
			}else	*/
				Application.LoadLevel("how_to_play");
		}
		catch (System.Exception e)
		{
			Debug.LogException(e, this);
		}
	}

	void OnAuthCB(bool result)
	{
		Debug.Log("GPGUI: Got Login Response: " + result);
	}
}
