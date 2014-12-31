using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;
using UnityEngine.SocialPlatforms;

public class records : MonoBehaviour {
	private string highScoreLeaderBoardID = "CgkI0K-WvLkZEAIQAg";
	private string play10TImes = "CgkI0K-WvLkZEAIQAQ";

	public Texture records_texture;
	public Texture records_pressed_texture;

	void Start () {
		if(Application.platform == RuntimePlatform.Android || Application.platform == RuntimePlatform.IPhonePlayer || Application.platform == RuntimePlatform.WP8Player)
		{
			float x = guiTexture.pixelInset.x;
			float y = guiTexture.pixelInset.y;
			float height = guiTexture.pixelInset.height * 2;
			float width = guiTexture.pixelInset.width * 2;
			guiTexture.pixelInset = new Rect(x,y,width,height);
		}
		/*try{
			Social.Active = new UnityEngine.SocialPlatforms.GPGSocial();
		}
		catch (System.Exception e)
		{
			Debug.LogException(e, this);
		}*/
	}
	
	void OnMouseDown()
	{
		guiTexture.texture = records_pressed_texture;
	}
	
	void OnMouseUp()
	{
		guiTexture.texture = records_texture;
		try{
			if (!Social.localUser.authenticated) {
				Social.localUser.Authenticate(OnAuthCB);
			}else
				Social.ShowLeaderboardUI();
			}
		catch (System.Exception e)
		{
			Debug.LogException(e, this);
		}
	}

	void OnAuthCB(bool result)
	{
		try{
			Debug.Log("GPGUI: Got Login Response: " + result);
			Social.LoadAchievements(OnLoadAC);
			Social.LoadAchievementDescriptions(OnLoadACDesc);
		}
		catch (System.Exception e)
		{
			Debug.LogException(e, this);
		}
	}
	
	public void OnLoadAC(IAchievement[] achievements)
	{
		Debug.Log("GPGUI: Loaded Achievements: " + achievements.Length);
	}
	
	public void OnLoadACDesc(IAchievementDescription[] acDesc)
	{
		Debug.Log("GPGUI: Loaded Achievement Description: " + acDesc.Length);
	}
}
