var C101_KinbakuClub_RopeGroup_CurrentStage = 0;
var C101_KinbakuClub_RopeGroup_Random = 0;
var C101_KinbakuClub_RopeGroup_LeftTwin = "";
var C101_KinbakuClub_RopeGroup_LeftTwinStatus = "StartTied"; 
var C101_KinbakuClub_RopeGroup_RightTwin = "";
var C101_KinbakuClub_RopeGroup_RightTwinStatus = "StartTied";
var C101_KinbakuClub_RopeGroup_LucyOnRight = false;
var C101_KinbakuClub_RopeGroup_TwinsRevealed = false;
var C101_KinbakuClub_RopeGroup_IntroDone = false;
var C101_KinbakuClub_RopeGroup_PlayerOnlyGagged = false;
var C101_KinbakuClub_RopeGroup_Kidnapper = false;
var C101_KinbakuClub_RopeGroup_TwoTiedTwins = false;
var C101_KinbakuClub_RopeGroup_RemainingTwin = false;
var C101_KinbakuClub_RopeGroup_LucyTied = false;
var C101_KinbakuClub_RopeGroup_LucyFree = false;
var C101_KinbakuClub_RopeGroup_PersistantKidnapper = false;
var C101_KinbakuClub_RopeGroup_Amelia210NotDone = true;				// Prevent repeating conversation loops
var C101_KinbakuClub_RopeGroup_Amelia220NotDone = true;
var C101_KinbakuClub_RopeGroup_Amelia230NotDone = true;
var C101_KinbakuClub_RopeGroup_Amelia250NotDone = true;
var C101_KinbakuClub_RopeGroup_HasLooseArmbinder = false;
var C101_KinbakuClub_RopeGroup_Charlotte310NotDone = true;			// Prevent repeating conversation loops
var C101_KinbakuClub_RopeGroup_Charlotte320NotDone = true;
var C101_KinbakuClub_RopeGroup_Charlotte330NotDone = true;
var C101_KinbakuClub_RopeGroup_Charlotte340NotDone = true;
var C101_KinbakuClub_RopeGroup_Charlotte350NotDone = true;
var C101_KinbakuClub_RopeGroup_Charlotte360NotDone = true;
var C101_KinbakuClub_RopeGroup_LeftTwinToldNaughty = false;
var C101_KinbakuClub_RopeGroup_RightTwinToldNaughty = false;
var C101_KinbakuClub_RopeGroup_LeftTwinToldTighter = false;
var C101_KinbakuClub_RopeGroup_RightTwinToldTighter = false;
var C101_KinbakuClub_RopeGroup_JoinSisterDone = false;
var C101_KinbakuClub_RopeGroup_LucyTieMeDone = false;
var C101_KinbakuClub_RopeGroup_KeptTickling = false;
var C101_KinbakuClub_RopeGroup_StruggledForLucy = false;
var C101_KinbakuClub_RopeGroup_ATwinStillTied = false;
var C101_KinbakuClub_RopeGroup_StruggleCount = 0;					// Count of how of actions before twin whispers in players ear.
var C101_KinbakuClub_RopeGroup_ComplimentDone = false;
var C101_KinbakuClub_RopeGroup_NipplesExposed = false;				// true after Heather exposes your nipples.
var C101_KinbakuClub_RopeGroup_NippleClamped = false;				// true after Heather has fitted the nipples.
var C101_KinbakuClub_RopeGroup_MercyDone = false;
var C101_KinbakuClub_RopeGroup_HeatherTugging = false;				// true when Heather pulls on the nipple clamps chain.
var C101_KinbakuClub_RopeGroup_Guessing = false;					// true after trying safeword during nipple torture.
var C101_KinbakuClub_RopeGroup_SensetiveCount = 0;					
var C101_KinbakuClub_RopeGroup_MasochistCount = 0;
var C101_KinbakuClub_RopeGroup_DefiantCount = 0;
var C101_KinbakuClub_RopeGroup_Masochist = false;
var C101_KinbakuClub_RopeGroup_BreakDown = false;
var C101_KinbakuClub_RopeGroup_Expression = "";						// players expression during nipple torture.
var C101_KinbakuClub_RopeGroup_CannotBluff = false;					// true after failing to bluff Heather.
var C101_KinbakuClub_RopeGroup_WaitCount = 0;						// count for how long player is waiting for Heather to return.
var C101_KinbakuClub_RopeGroup_Clentched = false;
var C101_KinbakuClub_RopeGroup_BegDone = false;
var C101_KinbakuClub_RopeGroup_PlugMood = "";						// Player reaction to being plugged
var C101_KinbakuClub_RopeGroup_PlugCommentAvailable = false;		// Player can comment about the butt plug size

//Stage layout
//0		- Intro -
//50	- Intro in bondage -
//100	- Select Actor -
//110	- Second kidnapping -
//200	- Talking to Amelia -
//300	- Talking to Charlotte -
//400	- Talking to bound twins -
//500	- Amelia with|Player in bondage -
//600	- Talking to Lucy -
//700	- Twin after release -
//800	- Heather after release -
//900	- Taking on Amelia with Heather -


// Calculates the scene parameters
function C101_KinbakuClub_RopeGroup_CalcParams() {
	C101_KinbakuClub_RopeGroup_PlayerOnlyGagged = Common_PlayerGagged && !Common_PlayerRestrained;
	C101_KinbakuClub_RopeGroup_Kidnapper = C101_KinbakuClub_Slaves_ReadyForSlaves;
	C101_KinbakuClub_RopeGroup_TwoTiedTwins = C101_KinbakuClub_RopeGroup_LeftTwinStatus == "StartTied" && C101_KinbakuClub_RopeGroup_RightTwinStatus == "StartTied";
	C101_KinbakuClub_RopeGroup_RemainingTwin = !C101_KinbakuClub_RopeGroup_TwoTiedTwins && !C101_KinbakuClub_RopeGroup_LucyFree && !C101_KinbakuClub_RopeGroup_TwinsRevealed;
	C101_KinbakuClub_RopeGroup_LucyTied = !C101_KinbakuClub_RopeGroup_TwoTiedTwins && !C101_KinbakuClub_RopeGroup_LucyFree && C101_KinbakuClub_RopeGroup_TwinsRevealed;
	C101_KinbakuClub_RopeGroup_ATwinStillTied = C101_KinbakuClub_RopeGroup_LeftTwinStatus == "StartTied" || C101_KinbakuClub_RopeGroup_RightTwinStatus == "StartTied";
	if (PlayerGetSkillLevel("Masochist") >= 1) C101_KinbakuClub_RopeGroup_Masochist = true;
	C101_KinbakuClub_RopeGroup_HasLooseArmbinder = PlayerHasInventory("Armbinder");
}


// Chapter 101 - RopeGroup Load
function C101_KinbakuClub_RopeGroup_Load() {

	// Load correct stage
	// After intro player has a choice each time she goes to the group, until a twin is released
	if (C101_KinbakuClub_RopeGroup_CurrentStage > 100 && C101_KinbakuClub_RopeGroup_CurrentStage < 700) {
		C101_KinbakuClub_RopeGroup_CurrentStage = 100;
	}
	
	// Player is pre bound/gagged or not
	if (Common_PlayerGagged || Common_PlayerRestrained) {
		C101_KinbakuClub_RopeGroup_CurrentStage = 50;
	}
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 50 && !Common_PlayerGagged && !Common_PlayerRestrained) {
		if (C101_KinbakuClub_RopeGroup_IntroDone) C101_KinbakuClub_RopeGroup_CurrentStage = 100;
		else C101_KinbakuClub_RopeGroup_CurrentStage = 10;
	}

	// After Jenna frees you.
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 848 || C101_KinbakuClub_RopeGroup_CurrentStage == 849) C101_KinbakuClub_RopeGroup_CurrentStage = 100;

	// After Heather lets you go.
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 858) C101_KinbakuClub_RopeGroup_CurrentStage = 900;
	
	// Load the scene parameters
	// Load relevent actor
	C101_KinbakuClub_RopeGroup_NoActor()
	if (C101_KinbakuClub_RopeGroup_CurrentStage < 100) C101_KinbakuClub_RopeGroup_LoadAmelia()
	if (C101_KinbakuClub_RopeGroup_CurrentStage >= 700) {
		if (C101_KinbakuClub_RopeGroup_LeftTwinStatus == "Released") ActorLoad(C101_KinbakuClub_RopeGroup_LeftTwin, "ClubRoom1");
		else ActorLoad(C101_KinbakuClub_RopeGroup_RightTwin, "ClubRoom1");
	}
	LoadInteractions();
	C101_KinbakuClub_RopeGroup_CalcParams();
	

	// Determine which twin is Lucy
	if (C101_KinbakuClub_RopeGroup_RightTwin == "") {
		C101_KinbakuClub_RopeGroup_Random = Math.floor(Math.random() * 2);
		if (C101_KinbakuClub_RopeGroup_Random == 0)	{
			C101_KinbakuClub_RopeGroup_LeftTwin = "Lucy";
			C101_KinbakuClub_RopeGroup_RightTwin = "Heather";
		}
		else {
			C101_KinbakuClub_RopeGroup_LeftTwin = "Heather";
			C101_KinbakuClub_RopeGroup_RightTwin = "Lucy";
		}
	}
}

// Chapter 101 - RopeGroup Run
function C101_KinbakuClub_RopeGroup_Run() {
	BuildInteraction(C101_KinbakuClub_RopeGroup_CurrentStage);
	
	// changing images
	// Group view
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 100) {
		DrawImage(CurrentChapter + "/" + CurrentScreen + "/RopeGroupAmelia.png", 600, 20);
		DrawImage(CurrentChapter + "/" + CurrentScreen + "/RopeGroupCharlotte.jpg", 818, 0);
		if (C101_KinbakuClub_RopeGroup_LeftTwinStatus == "StartTied") DrawImage(CurrentChapter + "/" + CurrentScreen + "/RopeGroupTwinLeftStart.png", 985, 98);
		if (C101_KinbakuClub_RopeGroup_LeftTwinStatus == "Released" || C101_KinbakuClub_RopeGroup_RightTwinStatus == "Released") DrawImage(CurrentChapter + "/" + CurrentScreen + "/RopeGroupTwinFree.png", 1005, 0);
		if (C101_KinbakuClub_RopeGroup_RightTwinStatus == "StartTied")  DrawImage(CurrentChapter + "/" + CurrentScreen + "/RopeGroupTwinRightStart.png", 847, 110);
	}

	// Twins image after releasing one of them
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 430) {
		if (C101_KinbakuClub_RopeGroup_LeftTwin == "Lucy") DrawImage(CurrentChapter + "/" + CurrentScreen + "/LeftTwin.jpg", 600, 0);
		else DrawImage(CurrentChapter + "/" + CurrentScreen + "/RightTwin.jpg", 600, 0);
	}
	if ((C101_KinbakuClub_RopeGroup_CurrentStage >= 600 && C101_KinbakuClub_RopeGroup_CurrentStage <= 631) || (C101_KinbakuClub_RopeGroup_CurrentStage >= 700 && C101_KinbakuClub_RopeGroup_CurrentStage <= 710) || C101_KinbakuClub_RopeGroup_CurrentStage == 900) {
		if (C101_KinbakuClub_RopeGroup_LeftTwinStatus == "StartTied") DrawImage(CurrentChapter + "/" + CurrentScreen + "/TwinLeftStillTied.png", 600, 167);
		if (C101_KinbakuClub_RopeGroup_CurrentStage <= 700) DrawImage(CurrentChapter + "/" + CurrentScreen + "/TwinJustReleased.png", 750, 5);
		if (C101_KinbakuClub_RopeGroup_CurrentStage >= 710) DrawImage(CurrentChapter + "/" + CurrentScreen + "/TwinReleased.png", 750, 5);
		if (C101_KinbakuClub_RopeGroup_RightTwinStatus == "StartTied") DrawImage(CurrentChapter + "/" + CurrentScreen + "/TwinRightStillTied.png", 930, 230);
	}

	// Images during Tsuri Kinbaku (Suspension)
	// Suspended1
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 633) {
		if (PlayerHasLockedInventory("BallGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended1BallGag.jpg", 878, 94);
		if (PlayerHasLockedInventory("ClothGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended1ClothGag.jpg", 878, 94);
	}
	// Suspended2
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 634) {
		if (PlayerHasLockedInventory("BallGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended2BallGag.jpg", 904, 105);
		if (PlayerHasLockedInventory("ClothGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended2ClothGag.jpg", 904, 105);
	}
	// Suspended3
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 635) {
		if (PlayerHasLockedInventory("BallGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended3BallGag.jpg", 890, 105);
		if (PlayerHasLockedInventory("ClothGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended3ClothGag.jpg", 890, 105);
	}
	// Suspended4
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 636) {
		if (PlayerHasLockedInventory("BallGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended4BallGag.jpg", 863, 125);
		if (PlayerHasLockedInventory("ClothGag"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended4ClothGag.jpg", 863, 125);
		if (PlayerHasLockedInventory("ChastityBelt"))  DrawImage(CurrentChapter + "/" + CurrentScreen + "/Suspended4ChastityBelt.jpg", 880, 290);
	}
	
	// Images when Hether uses nipple clamps
	if ((C101_KinbakuClub_RopeGroup_CurrentStage >= 800 && C101_KinbakuClub_RopeGroup_CurrentStage <= 841) || C101_KinbakuClub_RopeGroup_CurrentStage == 850) {
		if (C101_KinbakuClub_RopeGroup_NipplesExposed) DrawImage(CurrentChapter + "/" + CurrentScreen + "/WithHeatherExposed.jpg", 600, 0);
		if (C101_KinbakuClub_RopeGroup_NippleClamped) DrawImage(CurrentChapter + "/" + CurrentScreen + "/WithHeatherNippleClamped.jpg", 600, 0);
		if (C101_KinbakuClub_RopeGroup_HeatherTugging) DrawImage(CurrentChapter + "/" + CurrentScreen + "/WithHeatherNippleTug.jpg", 600, 0);
		if (!C101_KinbakuClub_RopeGroup_Expression == "") DrawImage(CurrentChapter + "/" + CurrentScreen + "/" + C101_KinbakuClub_RopeGroup_Expression + ".jpg", 1040, 280);
		if (C101_KinbakuClub_RopeGroup_CurrentStage == 830) DrawImage(CurrentChapter + "/" + CurrentScreen + "/HeatherGone.jpg", 600, 392);
		if (C101_KinbakuClub_RopeGroup_CurrentStage == 841) DrawImage(CurrentChapter + "/" + CurrentScreen + "/JennaIntervene.jpg", 600, 0);
	}

	// Images during plug play
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 854 && C101_KinbakuClub_RopeGroup_Clentched) DrawImage(CurrentChapter + "/" + CurrentScreen + "/PluggingClentch.jpg", 617, 354);
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 855) {
		DrawImage(CurrentChapter + "/" + CurrentScreen + "/Plugged.jpg", 900, 110);
		DrawImage(CurrentChapter + "/" + CurrentScreen + "/Plugged" + C101_KinbakuClub_RopeGroup_PlugMood + ".jpg", 617, 354);
	}
}

// Chapter 101 - RopeGroup Click
function C101_KinbakuClub_RopeGroup_Click() {

	// Regular and inventory interactions
	ClickInteraction(C101_KinbakuClub_RopeGroup_CurrentStage);
	var ClickInv = GetClickedInventory();
	
	C101_KinbakuClub_RopeGroup_CalcParams();

}




// Chapter 101 - RopeGroup - Introduction done
function C101_KinbakuClub_RopeGroup_Introduced() {
	C101_KinbakuClub_RopeGroup_IntroDone = true;
}

// Chapter 101 - RopeGroup - set actor to Amelia
function C101_KinbakuClub_RopeGroup_LoadAmelia() {
	ActorLoad("Amelia", "ClubRoom1");
}

// Chapter 101 - RopeGroup - set actor to Charlotte
function C101_KinbakuClub_RopeGroup_LoadCharlotte() {
	ActorLoad("Charlotte", "ClubRoom1");
}

// Chapter 101 - RopeGroup - set actor to Heather
function C101_KinbakuClub_RopeGroup_LoadHeather() {
	ActorLoad("Heather", "ClubRoom1");
}

// Chapter 101 - RopeGroup - set actor to Lucy
function C101_KinbakuClub_RopeGroup_LoadLucy() {
	ActorLoad("Lucy", "ClubRoom1");
}

// Chapter 101 - RopeGroup - set actor to Jenna
function C101_KinbakuClub_RopeGroup_LoadJenna() {
	ActorLoad("Jenna", "ClubRoom1");
	LeaveIcon = "";
}

// Chapter 101 - RopeGroup - set no actor
function C101_KinbakuClub_RopeGroup_NoActor() {
	ActorLoad("", "ClubRoom1");
	LeaveIcon = "";
}

// Chapter 101 - RopeGroup - set no actor
function C101_KinbakuClub_RopeGroup_ActorLeftAndCanLeave() {
	ActorLoad("", "ClubRoom1");
} 

// Chapter 101 - RopeGroup - Load unknown twin on the right
function C101_KinbakuClub_RopeGroup_LoadRightTwin() {
	ActorLoad(C101_KinbakuClub_RopeGroup_RightTwin, "ClubRoom1");
	if (!C101_KinbakuClub_RopeGroup_TwinsRevealed) ActorSpecificConcealment(C101_KinbakuClub_RopeGroup_RightTwin, true);
}

// Chapter 101 - RopeGroup - Load unknown twin on the left
function C101_KinbakuClub_RopeGroup_LoadLeftTwin() {
	ActorLoad(C101_KinbakuClub_RopeGroup_LeftTwin, "ClubRoom1");
	if (!C101_KinbakuClub_RopeGroup_TwinsRevealed) ActorSpecificConcealment(C101_KinbakuClub_RopeGroup_LeftTwin, true);
}

// Chapter 101 - RopeGroup - Load unknown remaining twin
function C101_KinbakuClub_RopeGroup_LoadRemainingTwin() {
	if (C101_KinbakuClub_RopeGroup_LeftTwinStatus != "StartTied") {
		C101_KinbakuClub_RopeGroup_CurrentStage = 450;
		C101_KinbakuClub_RopeGroup_LoadRightTwin();
	}
	else C101_KinbakuClub_RopeGroup_LoadLeftTwin();
}

// Chapter 101 - RopeGroup - Reveal the twins
function C101_KinbakuClub_RopeGroup_RevealTwins() {
	C101_KinbakuClub_RopeGroup_TwinsRevealed = true;
	ActorSpecificConcealment("Heather", false);
	ActorSpecificConcealment("Lucy", false);
}

// Chapter 101 - RopeGroup - Player can leave again.
function C101_KinbakuClub_RopeGroup_CanLeave() {
	LeaveIcon = "Leave";
}

// Chapter 101 - RopeGroup - Player can leave again.
function C101_KinbakuClub_RopeGroup_NoLeave() {
	LeaveIcon = "";
}

// Chapter 101 - RopeGroup - Player threatens amelia to try stopping her.
function C101_KinbakuClub_RopeGroup_TryStopMe() {
	if (ActorGetValue(ActorSubmission) <= 0) {
		C101_KinbakuClub_RopeGroup_CurrentStage = 125;
		OverridenIntroText = GetText("StoppingYou");
	} else LeaveIcon = "Leave";
}

// Chapter 101 - RopeGroup - Player is locked in manacles by Amelia
function C101_KinbakuClub_RopeGroup_PlayerLockedAway() {
	C101_KinbakuClub_Slaves_CurrentStage = 116;
	SetScene(CurrentChapter, "Slaves");
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Amelia210Done() {
	C101_KinbakuClub_RopeGroup_Amelia210NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Amelia220Done() {
	C101_KinbakuClub_RopeGroup_Amelia220NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Amelia230Done() {
	C101_KinbakuClub_RopeGroup_Amelia230NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Amelia250Done() {
	C101_KinbakuClub_RopeGroup_Amelia250NotDone = false;
}

// Chapter 101 - RopeGroup - Amelia helps strap the player into an armbinder
function C101_KinbakuClub_RopeGroup_PlayerArmbinded() {
	PlayerRemoveInventory("Armbinder", 1)
	PlayerLockInventory("Armbinder");
	CurrentTime = CurrentTime + 60000;
}

// Chapter 101 - RopeGroup - Amelia ties up the player in underwear
function C101_KinbakuClub_RopeGroup_AmeliaTies() {
	PlayerClothes("Underwear");
	PlayerLockInventory("Rope");
	CurrentTime = CurrentTime + 120000;
}

// Chapter 101 - RopeGroup - Amelia ties up the player in unfiorm
function C101_KinbakuClub_RopeGroup_AmeliaTiesDom() {
	PlayerLockInventory("Rope");
	CurrentTime = CurrentTime + 60000;
}

// Chapter 101 - RopeGroup - Amelia can force tie a submissive player
function C101_KinbakuClub_RopeGroup_NotTieMe() {
	if (ActorGetValue(ActorSubmission) <= -3) {
		OverridenIntroText = GetText("ForceTied");
		C101_KinbakuClub_RopeGroup_AmeliaTies();
		ActorChangeAttitude(0, -1);
		C101_KinbakuClub_RopeGroup_CurrentStage = 500;
	}
}

// Chapter 101 - RopeGroup - Player tells Amelia to tie charlotte instead
function C101_KinbakuClub_RopeGroup_TieCharlotte() {
	if (ActorSpecificGetValue("Charlotte", ActorSubmission) >= 4) OverridenIntroText = GetText("YouTry");
}








// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Charlotte310Done() {
	C101_KinbakuClub_RopeGroup_Charlotte310NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Charlotte320Done() {
	C101_KinbakuClub_RopeGroup_Charlotte320NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Charlotte330Done() {
	C101_KinbakuClub_RopeGroup_Charlotte330NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Charlotte340Done() {
	C101_KinbakuClub_RopeGroup_Charlotte340NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Charlotte350Done() {
	C101_KinbakuClub_RopeGroup_Charlotte350NotDone = false;
}

// Chapter 101 - RopeGroup - Prevent rerunning conversation loops
function C101_KinbakuClub_RopeGroup_Charlotte360Done() {
	C101_KinbakuClub_RopeGroup_Charlotte360NotDone = false;
}

// Chapter 101 - RopeGroup - Grabs the selected twin
function C101_KinbakuClub_RopeGroup_Kidnap() {
	if (C101_KinbakuClub_RopeGroup_LeftTwinStatus == "Kidnapped" || C101_KinbakuClub_RopeGroup_RightTwinStatus == "Kidnapped") {
		C101_KinbakuClub_RopeGroup_LoadAmelia();
		LeaveIcon = "";
		if (C101_KinbakuClub_RopeGroup_PersistantKidnapper) {
			C101_KinbakuClub_RopeGroup_CurrentStage = 120;
			OverridenIntroText = GetText("StopKidnapper");
		} else {
			C101_KinbakuClub_RopeGroup_CurrentStage = 110;
			OverridenIntroText = GetText("WarnKidnapper");
			C101_KinbakuClub_RopeGroup_PersistantKidnapper = true;
		}
	} else {
		if (C101_KinbakuClub_RopeGroup_CurrentStage == 600) {
			if (C101_KinbakuClub_RopeGroup_LeftTwin == "Heather") C101_KinbakuClub_RopeGroup_LeftTwinStatus = "Kidnapped";
			else C101_KinbakuClub_RopeGroup_RightTwinStatus = "Kidnapped";
		} else {
			if (C101_KinbakuClub_RopeGroup_CurrentStage == 450)	C101_KinbakuClub_RopeGroup_RightTwinStatus = "Kidnapped";
			else C101_KinbakuClub_RopeGroup_LeftTwinStatus = "Kidnapped";
		}
		SetScene(CurrentChapter, "SlaveTwin");
	}
}

// Chapter 101 - RopeGroup - Release the twin on the right
function C101_KinbakuClub_RopeGroup_ReleaseTwin() {
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 400) C101_KinbakuClub_RopeGroup_LeftTwinStatus = "Released";
	else C101_KinbakuClub_RopeGroup_RightTwinStatus = "Released";
	if (ActorGetValue(ActorName) == "Lucy") C101_KinbakuClub_RopeGroup_LucyFree = true;
	C101_KinbakuClub_RopeGroup_CurrentStage = 700;
}

// Chapter 101 - RopeGroup - Release the twin on the right
function C101_KinbakuClub_RopeGroup_ReleaseLucy() {
	C101_KinbakuClub_RopeGroup_LucyFree = true;
	if (C101_KinbakuClub_RopeGroup_LeftTwin == "Lucy") C101_KinbakuClub_RopeGroup_LeftTwinStatus = "Released";
	else C101_KinbakuClub_RopeGroup_RightTwinStatus = "Released";
}

// Chapter 101 - RopeGroup - Trick to tell twins appart
function C101_KinbakuClub_RopeGroup_WouldYourSister() {
	if (ActorGetValue(ActorName) == "Lucy") OverridenIntroText = GetText("WouldYourSisterNod");
	if (ActorGetValue(ActorName) == "Heather") OverridenIntroText = GetText("WouldYourSisterShake");
}

// Chapter 101 - RopeGroup - Player tells bound twin she is naught and should be punished
function C101_KinbakuClub_RopeGroup_NaughtyLeft() {
	if (!C101_KinbakuClub_RopeGroup_LeftTwinToldNaughty) ActorSpecificChangeAttitude(C101_KinbakuClub_RopeGroup_LeftTwin, -1, 1);
	C101_KinbakuClub_RopeGroup_LeftTwinToldNaughty = true;
}

// Chapter 101 - RopeGroup - Player tells bound twin she is naught and should be punished
function C101_KinbakuClub_RopeGroup_NaughtyRight() {
	if (!C101_KinbakuClub_RopeGroup_RightTwinToldNaughty) ActorSpecificChangeAttitude(C101_KinbakuClub_RopeGroup_RightTwin, -1, 1);
	C101_KinbakuClub_RopeGroup_RightTwinToldNaughty = true;
}

// Chapter 101 - RopeGroup - Player tells bound twin her ropes should be made even tighter
function C101_KinbakuClub_RopeGroup_TighterLeft() {
	if (!C101_KinbakuClub_RopeGroup_LeftTwinToldTighter) ActorSpecificChangeAttitude(C101_KinbakuClub_RopeGroup_LeftTwin, 0, 1);
	C101_KinbakuClub_RopeGroup_LeftTwinToldTighter = true;
}

// Chapter 101 - RopeGroup - Player tells bound twin her ropes should be made even tighter
function C101_KinbakuClub_RopeGroup_TighterRight() {
	if (!C101_KinbakuClub_RopeGroup_RightTwinToldTighter) ActorSpecificChangeAttitude(C101_KinbakuClub_RopeGroup_RightTwin, 0, 1);
	C101_KinbakuClub_RopeGroup_RightTwinToldTighter = true;
}

// Chapter 101 - RopeGroup - Attitude change when asking Lucy to tie player
function C101_KinbakuClub_RopeGroup_LucyTieMe() {
	if (!C101_KinbakuClub_RopeGroup_LucyTieMeDone) ActorChangeAttitude( 1, -1);
	C101_KinbakuClub_RopeGroup_LucyTieMeDone = true;
}

// Chapter 101 - RopeGroup - Player threatens Lucy with joing heather
function C101_KinbakuClub_RopeGroup_JoinSister() {
	if (!C101_KinbakuClub_RopeGroup_JoinSisterDone) ActorChangeAttitude( -1, -1);
	C101_KinbakuClub_RopeGroup_JoinSisterDone = true;
}

// Chapter 101 - RopeGroup - Player continues tickling the twin once she is crying.
function C101_KinbakuClub_RopeGroup_CharlotteDislike() {
	if (!C101_KinbakuClub_RopeGroup_KeptTickling) {
		ActorSpecificChangeAttitude("Charlotte", -1, 0);
		ActorSpecificChangeAttitude(C101_KinbakuClub_RopeGroup_RightTwin, -1, 1);
	}
	C101_KinbakuClub_RopeGroup_KeptTickling = true;
}

// Chapter 101 - RopeGroup - Player gets tied up
function C101_KinbakuClub_RopeGroup_PlayerTied() {
	if (!PlayerHasLockedInventory("Rope")) {
		PlayerLockInventory("Rope");
		C101_KinbakuClub_RopeGroup_NoLeave();
	}
	CurrentTime = CurrentTime + 60000;
}

// Chapter 101 - RopeGroup - Player struggles in front of lucy after being tied up by her.
function C101_KinbakuClub_RopeGroup_StruggleForLucy() {
	if (!C101_KinbakuClub_RopeGroup_StruggledForLucy) ActorChangeAttitude( 1, -1)
	C101_KinbakuClub_RopeGroup_StruggledForLucy = true;
}

// Chapter 101 - RopeGroup - Player is cloth gagged
function C101_KinbakuClub_RopeGroup_PlayerClothGag() {
	if (PlayerHasInventory("ClothGag")) PlayerRemoveInventory("ClothGag", 1)
	PlayerLockInventory("ClothGag");
}

// Chapter 101 - RopeGroup - Lucy will help untie the player if they are dominant.
function C101_KinbakuClub_RopeGroup_WillLucyUntie() {
	if (ActorGetValue(ActorSubmission) >= 1) {
		OverridenIntroText = GetText("LucyUnties");
		C101_KinbakuClub_RopeGroup_CurrentStage = 600;
		C101_KinbakuClub_RopeGroup_PlayerFreed();
	}
}

// Chapter 101 - RopeGroup - player can persuade Lucy not to tie her is liked or dominant enough
function C101_KinbakuClub_RopeGroup_WillLucyTie() {
	if (ActorGetValue(ActorLove) >= 3 || ActorGetValue(ActorSubmission) >= 2) {
		OverridenIntroText = GetText("LucyNotTieYou");
		C101_KinbakuClub_RopeGroup_CurrentStage = 600;
	} else C101_KinbakuClub_RopeGroup_PlayerTied();
}

// Chapter 101 - RopeGroup - Player is ball gagged
function C101_KinbakuClub_RopeGroup_PlayerBallGagged() {
	PlayerRemoveInventory("BallGag", 1);
	PlayerLockInventory("BallGag");
	CurrentTime = CurrentTime + 60000;
}

// Chapter 101 - RopeGroup - Player struggles bound and gagged, twin will then whisper in her ear.
function C101_KinbakuClub_RopeGroup_HelplessTime() {
	if (C101_KinbakuClub_RopeGroup_StruggleCount > 2) {
		if (ActorGetValue(ActorName) == "Heather") {
			OverridenIntroText = GetText("RevealHeather");
			C101_KinbakuClub_RopeGroup_CurrentStage = 800;
		}
		else {
			OverridenIntroText = GetText("RevealLucy");
			C101_KinbakuClub_RopeGroup_CurrentStage = 750;
		}
		C101_KinbakuClub_RopeGroup_RevealTwins();
	}
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 740) C101_KinbakuClub_RopeGroup_StruggleCount++;
}

// Chapter 101 - RopeGroup - Knot reponsise when chaste
function C101_KinbakuClub_RopeGroup_HelplessKnot() {
	if (Common_PlayerChaste) OverridenIntroText = GetText("ChasteKnot");
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 830) C101_KinbakuClub_RopeGroup_WaitingForMistress();
	else C101_KinbakuClub_RopeGroup_HelplessTime();
}

// Chapter 101 - RopeGroup - Struggle response when chaste
function C101_KinbakuClub_RopeGroup_HelplessStruggle() {
	if (Common_PlayerChaste) OverridenIntroText = GetText("ChasteStruggle");
	if (C101_KinbakuClub_RopeGroup_CurrentStage == 830) C101_KinbakuClub_RopeGroup_WaitingForMistress();
	else C101_KinbakuClub_RopeGroup_HelplessTime();
}

// Chapter 101 - RopeGroup - Struggle response when chaste
function C101_KinbakuClub_RopeGroup_HelplessTug() {
	if (Common_PlayerChaste) OverridenIntroText = GetText("ChasteTug");
	C101_KinbakuClub_RopeGroup_HelplessTime();
}

// Chapter 101 - RopeGroup - Player thanks twin for hogtie
function C101_KinbakuClub_RopeGroup_HelplessThankYou() {
	if (!C101_KinbakuClub_RopeGroup_ComplimentDone) ActorChangeAttitude(1, 0)
	C101_KinbakuClub_RopeGroup_ComplimentDone = true;
	C101_KinbakuClub_RopeGroup_HelplessTime();
}

// Chapter 101 - RopeGroup - Player is released from bondage, but cannot leave
function C101_KinbakuClub_RopeGroup_PlayerReleased() {
	PlayerReleaseBondage()
}

// Chapter 101 - RopeGroup - Player is freed from bondage and is able to leave
function C101_KinbakuClub_RopeGroup_PlayerFreed() {
	PlayerReleaseBondage()
	LeaveIcon = "Leave";
}

// Chapter 101 - RopeGroup - Heather exposes players breasts
function C101_KinbakuClub_RopeGroup_Exposed() {
	C101_KinbakuClub_RopeGroup_NipplesExposed = true;
}

// Chapter 101 - RopeGroup - Heather fits nipple clamps
function C101_KinbakuClub_RopeGroup_Clamped() {
	C101_KinbakuClub_RopeGroup_NippleClamped = true;
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_Mercy() {
	if (!C101_KinbakuClub_RopeGroup_MercyDone) ActorChangeAttitude( 0, -1)
	C101_KinbakuClub_RopeGroup_MercyDone = true;
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_Sensetive() {
	C101_KinbakuClub_RopeGroup_SensetiveCount++
	C101_KinbakuClub_RopeGroup_HeatherTugging = false;
	if (C101_KinbakuClub_RopeGroup_SensetiveCount >= 2) {
		OverridenIntroText = GetText("Sensetive2");
		C101_KinbakuClub_RopeGroup_BreakDown = true;
	}
	if (C101_KinbakuClub_RopeGroup_SensetiveCount >= 3) OverridenIntroText = GetText("Sensetive3");
	if (C101_KinbakuClub_RopeGroup_SensetiveCount >= 4)	{
		OverridenIntroText = GetText("Sensetive4");
		C101_KinbakuClub_RopeGroup_CurrentStage = 821;
	}
	if (C101_KinbakuClub_RopeGroup_SensetiveCount >= C101_KinbakuClub_RopeGroup_MasochistCount && C101_KinbakuClub_RopeGroup_SensetiveCount >= C101_KinbakuClub_RopeGroup_DefiantCount) C101_KinbakuClub_RopeGroup_Expression = "ExpressionSensetive";
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_Masochism() {
	C101_KinbakuClub_RopeGroup_HeatherTugging = true;
	C101_KinbakuClub_RopeGroup_MasochistCount++
	if (C101_KinbakuClub_RopeGroup_MasochistCount >= 2) OverridenIntroText = GetText("Masochist2");
	if (C101_KinbakuClub_RopeGroup_MasochistCount >= 3) OverridenIntroText = GetText("Masochist3");
	if (C101_KinbakuClub_RopeGroup_MasochistCount >= 4) {
		OverridenIntroText = GetText("Masochist4");
		PlayerAddSkill("Masochist", 1)
		C101_KinbakuClub_RopeGroup_HeatherTugging = false;
		C101_KinbakuClub_RopeGroup_CurrentStage = 822;
	}
	if (C101_KinbakuClub_RopeGroup_MasochistCount >= C101_KinbakuClub_RopeGroup_SensetiveCount && C101_KinbakuClub_RopeGroup_MasochistCount >= C101_KinbakuClub_RopeGroup_DefiantCount) C101_KinbakuClub_RopeGroup_Expression = "ExpressionMasochist";
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_Defiant() {
	C101_KinbakuClub_RopeGroup_DefiantCount++
	C101_KinbakuClub_RopeGroup_HeatherTugging = true;
	if (C101_KinbakuClub_RopeGroup_DefiantCount >= 2) OverridenIntroText = GetText("Defiant2");
	if (C101_KinbakuClub_RopeGroup_DefiantCount >= 3) OverridenIntroText = GetText("Defiant3");
	if (C101_KinbakuClub_RopeGroup_DefiantCount >= 4) {
		OverridenIntroText = GetText("Defiant4");
		C101_KinbakuClub_RopeGroup_HeatherTugging = false;
		C101_KinbakuClub_RopeGroup_CurrentStage = 823;
	}
	if (C101_KinbakuClub_RopeGroup_DefiantCount >= C101_KinbakuClub_RopeGroup_SensetiveCount && C101_KinbakuClub_RopeGroup_DefiantCount >= C101_KinbakuClub_RopeGroup_MasochistCount) C101_KinbakuClub_RopeGroup_Expression = "ExpressionDefiant";
}

// Chapter 101 - RopeGroup - Player tries safe words
function C101_KinbakuClub_RopeGroup_SafeWord() {
	C101_KinbakuClub_RopeGroup_Guessing = true;
	C101_KinbakuClub_RopeGroup_HeatherTugging = false;
}

// Chapter 101 - RopeGroup - Heather pulls on the chain
function C101_KinbakuClub_RopeGroup_Tug() {
	C101_KinbakuClub_RopeGroup_HeatherTugging = true;
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_Crying() {
	C101_KinbakuClub_RopeGroup_Expression = "ExpressionCrying";
}

// Chapter 101 - RopeGroup - Sensitive player fails to bluff Heather
function C101_KinbakuClub_RopeGroup_NoBluffing() {
	C101_KinbakuClub_RopeGroup_CannotBluff = true;
}

// Chapter 101 - RopeGroup - Heather will become an unowned masochists mistress.
function C101_KinbakuClub_RopeGroup_NoMistress() {
	if (Common_PlayerOwner == "") {
		ActorChangeAttitude(1, 0);
		OverridenIntroText = GetText("NewMistress");
		C101_KinbakuClub_RopeGroup_CurrentStage = 830;
		if (PlayerHasLockedInventory("Collar")) {
			OverridenIntroText = GetText("ReadyForNewMistress");
			C101_KinbakuClub_RopeGroup_CurrentStage = 832;
		}
	}
}

// Chapter 101 - RopeGroup - When player is asked and refuses to submit
function C101_KinbakuClub_RopeGroup_CarryOn() {
	if (C101_KinbakuClub_RopeGroup_NipplesExposed) OverridenIntroText = GetText("AlreadyRolled");
	C101_KinbakuClub_RopeGroup_Exposed();
}

// Chapter 101 - RopeGroup - Waiting for heather to return
function C101_KinbakuClub_RopeGroup_WaitingForMistress() {
	C101_KinbakuClub_RopeGroup_WaitCount++
	CurrentTime = CurrentTime + 30000;
	if (C101_KinbakuClub_RopeGroup_WaitCount > 3) C101_KinbakuClub_RopeGroup_CurrentStage = 831;
}

// Chapter 101 - RopeGroup - Heather collars the player as her slave
function C101_KinbakuClub_RopeGroup_PlayerCollared() {
	Common_PlayerOwner = CurrentActor;
	Common_ActorIsOwner = true;
	PlayerLockInventory("Collar");
	CurrentTime = CurrentTime + 50000;
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_Waiting() {
	CurrentTime = CurrentTime + 300000;
}

// Chapter 101 - RopeGroup - Heather is taken away.
function C101_KinbakuClub_RopeGroup_HeatherTaken() {
	if (C101_KinbakuClub_RopeGroup_LeftTwin == "Heather") C101_KinbakuClub_RopeGroup_LeftTwinStatus = "Disciplined";
	if (C101_KinbakuClub_RopeGroup_RightTwin == "Heather") C101_KinbakuClub_RopeGroup_RightTwinStatus = "Disciplined";
}

// Chapter 101 - RopeGroup - Change text if player had nipple clamps
function C101_KinbakuClub_RopeGroup_HadClamps() {
	if (C101_KinbakuClub_RopeGroup_NippleClamped) {
		OverridenIntroText = GetText("RemoveClamps");
		C101_KinbakuClub_RopeGroup_NippleClamped = false;
	}
}

// Chapter 101 - RopeGroup - Player is chaste and cannot be plugged
function C101_KinbakuClub_RopeGroup_ChastityPlug() {
	if (Common_PlayerChaste) {
		OverridenIntroText = GetText("CannotPlug");
		C101_KinbakuClub_RopeGroup_CurrentStage = 856;
	}
}

// Chapter 101 - RopeGroup - Heather will inist on plugging her slave
function C101_KinbakuClub_RopeGroup_NoDisobedience() {
	if (Common_ActorIsOwner) {
		OverridenIntroText = GetText("AcceptGifts");
		C101_KinbakuClub_RopeGroup_CurrentStage = 854;
	} else C101_KinbakuClub_RopeGroup_PlayerReleased();
}

// Chapter 101 - RopeGroup - Player resists the plug
function C101_KinbakuClub_RopeGroup_Resist() {
	C101_KinbakuClub_RopeGroup_Clentched = true;
}

// Chapter 101 - RopeGroup - Player begs not to be plugged
function C101_KinbakuClub_RopeGroup_Beg() {
	if (!C101_KinbakuClub_RopeGroup_BegDone) {
		ActorChangeAttitude( 0, -1);
		C101_KinbakuClub_RopeGroup_BegDone = true;
	}
	C101_KinbakuClub_RopeGroup_Resist();
}

// Chapter 101 - RopeGroup - Player is happy to be plugged
function C101_KinbakuClub_RopeGroup_PluggedHappily() {
	C101_KinbakuClub_RopeGroup_PlugMood = "Happily";
	PlayerLockInventory("ButtPlug");
	C101_KinbakuClub_RopeGroup_PlugCommentAvailable = true;
}

// Chapter 101 - RopeGroup - Player is paniced by plug
function C101_KinbakuClub_RopeGroup_PluggedPanic() {
	C101_KinbakuClub_RopeGroup_PlugMood = "Panic";
	PlayerLockInventory("ButtPlug");
}

// Chapter 101 - RopeGroup - Player quietly accepts the plug
function C101_KinbakuClub_RopeGroup_PluggedAccept() {
	C101_KinbakuClub_RopeGroup_PlugMood = "Accept";
	PlayerLockInventory("ButtPlug");
}

// Chapter 101 - RopeGroup - Player comments on plug size
function C101_KinbakuClub_RopeGroup_PlugSize() {
	C101_KinbakuClub_RopeGroup_PlugCommentAvailable = false;
}

// Chapter 101 - RopeGroup - 
function C101_KinbakuClub_RopeGroup_template() {
}