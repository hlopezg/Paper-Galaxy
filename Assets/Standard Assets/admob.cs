using UnityEngine;
using System.Collections;

public class admob : MonoBehaviour {
	
	Rect rect = new Rect();
	void OnGUI()
	{
		rect.x = 20;
		rect.y = 40;
		
		rect.width = Screen.width * 0.3f;
		rect.height = Screen.height * 0.1f;
		// Make the Enable Button
		/*if (GUI.Button(rect, "Enable"))   {
    AdvertisementHandler.EnableAds();
}

rect.y = rect.y + rect.height;
if (GUI.Button(rect, "Disable")) {           
    AdvertisementHandler.DisableAds();
}

rect.y = rect.y + rect.height;
// Make the Hide Button
if (GUI.Button(rect, "Hide"))   {
    AdvertisementHandler.HideAds();
}

rect.y = rect.y + rect.height;
// Make the Show button.
if (GUI.Button(rect, "Show"))   {
    AdvertisementHandler.ShowAds();
}*/
		
	}
	
	public void EnableAds()
	{
		admob_Handler.EnableAds();
	}
	
	public void DisableAds()
	{
		admob_Handler.DisableAds();
	}	

	public void HideAds()
	{
		admob_Handler.HideAds();
	}
	
	public void ShowAds()
	{
		admob_Handler.ShowAds();
	}




	
	
	/// <summary>
	/// Admob publisher App Id
	/// </summary>
	[SerializeField]
	private string m_publisherId = "a14e2fb60918999";
	public string PublisherId
	{
		get { return m_publisherId; }
		set { m_publisherId = value; }
	}
	
	/// <summary>
	/// Advertisement Size
	/// </summary>
	[SerializeField]
	private admob_Handler.AdvSize m_advSize = admob_Handler.AdvSize.SMART_BANNER;
	public admob_Handler.AdvSize AdvSize
	{
		get { return m_advSize; }
		set { m_advSize = value; }
	}
	
	/// <summary>
	/// Advertisement Orientation
	/// </summary>
	[SerializeField]
	private admob_Handler.AdvOrientation m_orientation = admob_Handler.AdvOrientation.HORIZONTAL;
	public admob_Handler.AdvOrientation Orientation
	{
		get { return m_orientation; }
		set { m_orientation = value; }
	}
	
	/// <summary>
	/// Advertisement First Position
	/// </summary>
	[SerializeField]
	private admob_Handler.Position m_positionOne = admob_Handler.Position.BOTTOM;
	public admob_Handler.Position PositionOne
	{
		get { return m_positionOne; }
		set { m_positionOne = value; }
	}
	
	
	/// <summary>
	/// Advertisement Second Position
	/// </summary>
	[SerializeField]
	private admob_Handler.Position m_positionTwo = admob_Handler.Position.CENTER_HORIZONTAL;
	public admob_Handler.Position PositionTwo
	{
		get { return m_positionTwo; }
		set { m_positionTwo = value; }
	}
	
	/// <summary>
	/// Set True, if testing game/app
	/// </summary>
	[SerializeField]
	private bool m_isTesting = false;
	public bool IsTesting
	{
		get { return m_isTesting; }
		set { m_isTesting = value; }
	}
	
	/// <summary>
	/// Test Device Id, if you know
	/// </summary>
	[SerializeField]
	//private string m_testDeviceId = "4965DFB7E2F16194A15150C45A6927A9";
	private string m_testDeviceId = "";
	public string TestDeviceId
	{
		get { return m_testDeviceId; }
		set { m_testDeviceId = value; }
	}
	
	/// <summary>
	/// Animation Type when loading new Advertisement
	/// </summary>
	[SerializeField]
	private admob_Handler.AnimationInType m_animationInType = admob_Handler.AnimationInType.SLIDE_IN_LEFT;
	public admob_Handler.AnimationInType AnimationInType
	{
		get { return m_animationInType; }
		set { m_animationInType = value; }
	}
	
	/// <summary>
	/// Animation Type when unloading current/old Advertisement
	/// </summary>
	[SerializeField]
	private admob_Handler.AnimationOutType m_animationOutType = admob_Handler.AnimationOutType.FADE_OUT;
	public admob_Handler.AnimationOutType AnimationOutType
	{
		get { return m_animationOutType; }
		set { m_animationOutType = value; }
	}
	
	/// <summary>
	/// Level of debug logs
	/// </summary>
	[SerializeField]
	private admob_Handler.LevelOfDebug m_levelOfDebug = admob_Handler.LevelOfDebug.LOW;
	public admob_Handler.LevelOfDebug LevelOfDebug
	{
		get { return m_levelOfDebug; }
		set { m_levelOfDebug = value; }
	}
	
	
	// Use this for initialization
	void Start () {
		//Initializing Plugin with values
		admob_Handler.Instantiate(m_publisherId, m_advSize, m_orientation, m_positionOne, m_positionTwo, m_isTesting, m_testDeviceId, m_animationInType, m_animationOutType, m_levelOfDebug);
		
		//Shoot request to enable advertisements
		admob_Handler.EnableAds();
	}
	
}
