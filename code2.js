gdjs.Level2Code = {};
gdjs.Level2Code.GDPlayerObjects1_1final = [];

gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDPlayerObjects3= [];
gdjs.Level2Code.GDBossObjects1= [];
gdjs.Level2Code.GDBossObjects2= [];
gdjs.Level2Code.GDBossObjects3= [];
gdjs.Level2Code.GDTiledGrassPlatformObjects1= [];
gdjs.Level2Code.GDTiledGrassPlatformObjects2= [];
gdjs.Level2Code.GDTiledGrassPlatformObjects3= [];
gdjs.Level2Code.GDGoLeftObjects1= [];
gdjs.Level2Code.GDGoLeftObjects2= [];
gdjs.Level2Code.GDGoLeftObjects3= [];
gdjs.Level2Code.GDGoRightObjects1= [];
gdjs.Level2Code.GDGoRightObjects2= [];
gdjs.Level2Code.GDGoRightObjects3= [];
gdjs.Level2Code.GDPlayerHitBoxObjects1= [];
gdjs.Level2Code.GDPlayerHitBoxObjects2= [];
gdjs.Level2Code.GDPlayerHitBoxObjects3= [];
gdjs.Level2Code.GDWitchObjects1= [];
gdjs.Level2Code.GDWitchObjects2= [];
gdjs.Level2Code.GDWitchObjects3= [];
gdjs.Level2Code.GDDialogueContainerObjects1= [];
gdjs.Level2Code.GDDialogueContainerObjects2= [];
gdjs.Level2Code.GDDialogueContainerObjects3= [];
gdjs.Level2Code.GDSignText2Objects1= [];
gdjs.Level2Code.GDSignText2Objects2= [];
gdjs.Level2Code.GDSignText2Objects3= [];
gdjs.Level2Code.GDSignTextObjects1= [];
gdjs.Level2Code.GDSignTextObjects2= [];
gdjs.Level2Code.GDSignTextObjects3= [];
gdjs.Level2Code.GDcarrotObjects1= [];
gdjs.Level2Code.GDcarrotObjects2= [];
gdjs.Level2Code.GDcarrotObjects3= [];
gdjs.Level2Code.GDTimeObjects1= [];
gdjs.Level2Code.GDTimeObjects2= [];
gdjs.Level2Code.GDTimeObjects3= [];
gdjs.Level2Code.GDsign2Objects1= [];
gdjs.Level2Code.GDsign2Objects2= [];
gdjs.Level2Code.GDsign2Objects3= [];
gdjs.Level2Code.GDwindowsObjects1= [];
gdjs.Level2Code.GDwindowsObjects2= [];
gdjs.Level2Code.GDwindowsObjects3= [];
gdjs.Level2Code.GDNewObjectObjects1= [];
gdjs.Level2Code.GDNewObjectObjects2= [];
gdjs.Level2Code.GDNewObjectObjects3= [];
gdjs.Level2Code.GDtableObjects1= [];
gdjs.Level2Code.GDtableObjects2= [];
gdjs.Level2Code.GDtableObjects3= [];
gdjs.Level2Code.GDDoorObjects1= [];
gdjs.Level2Code.GDDoorObjects2= [];
gdjs.Level2Code.GDDoorObjects3= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};
gdjs.Level2Code.condition3IsTrue_1 = {val:false};


gdjs.Level2Code.eventsList0xc46088c = function(runtimeScene) {

{

gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level2Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level2Code.GDPlayerHitBoxObjects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerHitBoxObjects2[k] = gdjs.Level2Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerHitBoxObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getAnimation() == 3) ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getAnimation() == 4) ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level2Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level2Code.GDPlayerHitBoxObjects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerHitBoxObjects2[k] = gdjs.Level2Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerHitBoxObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getAnimation() == 3) ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getAnimation() == 4) ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.Level2Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level2Code.GDPlayerHitBoxObjects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerHitBoxObjects2[k] = gdjs.Level2Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerHitBoxObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition2IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(206104300);
}
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(3);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Socapex - Swordsmall_3.wav", false, 100, 1);
}}

}


{

gdjs.Level2Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level2Code.GDPlayerHitBoxObjects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerHitBoxObjects2[k] = gdjs.Level2Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerHitBoxObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition2IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(206105244);
}
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(3);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Socapex - Swordsmall_3.wav", false, 100, 1);
}}

}


{

gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].isCurrentAnimationName("Attack") ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].hasAnimationEnded() ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.Level2Code.GDPlayerHitBoxObjects2.createFrom(gdjs.Level2Code.GDPlayerHitBoxObjects1);


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerHitBoxObjects2[k] = gdjs.Level2Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerHitBoxObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition2IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(205985516);
}
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(4);
}
}}

}


{



}


{

gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].isCurrentAnimationName("Death") ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].hasAnimationEnded() ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "GameOver");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "GameOver");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}}

}


}; //End of gdjs.Level2Code.eventsList0xc46088c
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level2Code.GDDoorObjects1});gdjs.Level2Code.eventsList0x5b69a8 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerHitBoxObjects1[i].hide();
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}{}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogue");
}{}{gdjs.evtTools.sound.playSound(runtimeScene, "Home.wav", false, 50, 1);
}{runtimeScene.getGame().getVariables().get("table").setNumber(0);
}}

}


{


{
}

}


{


{
gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].setPosition((( gdjs.Level2Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerHitBoxObjects1[0].getPointX("")),(( gdjs.Level2Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level2Code.GDPlayerHitBoxObjects1[0].getPointY("")));
}
}}

}


{

gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerHitBoxObjects1[k] = gdjs.Level2Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList0xc46088c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].returnVariable(gdjs.Level2Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


{
}

}


{



}


{

gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getX() < 10 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerHitBoxObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Level2Code.GDPlayerObjects1.length = 0;


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.GDPlayerObjects1_1final.length = 0;gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getX() < 10 ) {
        gdjs.Level2Code.condition0IsTrue_1.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDPlayerObjects1_1final.indexOf(gdjs.Level2Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level2Code.GDPlayerObjects1_1final.push(gdjs.Level2Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.Level2Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getX() > 750 ) {
        gdjs.Level2Code.condition1IsTrue_1.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDPlayerObjects1_1final.indexOf(gdjs.Level2Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level2Code.GDPlayerObjects1_1final.push(gdjs.Level2Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.Level2Code.GDPlayerObjects1.createFrom(gdjs.Level2Code.GDPlayerObjects1_1final);
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerHitBoxObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{

gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getX() < 10 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerHitBoxObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


{

gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getX() > 750 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDPlayerHitBoxObjects1.createFrom(runtimeScene.getObjects("PlayerHitBox"));
{for(var i = 0, len = gdjs.Level2Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerHitBoxObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


{

gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level2Code.GDWitchObjects1.createFrom(runtimeScene.getObjects("Witch"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getX() > 350 ) {
        gdjs.Level2Code.condition0IsTrue_1.val = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDWitchObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDWitchObjects1[i].getVariableNumber(gdjs.Level2Code.GDWitchObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Level2Code.condition1IsTrue_1.val = true;
        gdjs.Level2Code.GDWitchObjects1[k] = gdjs.Level2Code.GDWitchObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDWitchObjects1.length = k;}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDWitchObjects1 */
{gdjs.evtTools.camera.showLayer(runtimeScene, "Dialogue");
}{for(var i = 0, len = gdjs.Level2Code.GDWitchObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDWitchObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level2Code.GDWitchObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDWitchObjects1[i].returnVariable(gdjs.Level2Code.GDWitchObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.Level2Code.GDWitchObjects1.createFrom(runtimeScene.getObjects("Witch"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogue");
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDWitchObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDWitchObjects1[i].getVariableNumber(gdjs.Level2Code.GDWitchObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Level2Code.condition2IsTrue_0.val = true;
        gdjs.Level2Code.GDWitchObjects1[k] = gdjs.Level2Code.GDWitchObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDWitchObjects1.length = k;}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Dialogue");
}}

}


{

gdjs.Level2Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.Level2Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogue"));
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
}}

}


}; //End of gdjs.Level2Code.eventsList0x5b69a8


gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDBossObjects1.length = 0;
gdjs.Level2Code.GDBossObjects2.length = 0;
gdjs.Level2Code.GDBossObjects3.length = 0;
gdjs.Level2Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.Level2Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.Level2Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.Level2Code.GDGoLeftObjects1.length = 0;
gdjs.Level2Code.GDGoLeftObjects2.length = 0;
gdjs.Level2Code.GDGoLeftObjects3.length = 0;
gdjs.Level2Code.GDGoRightObjects1.length = 0;
gdjs.Level2Code.GDGoRightObjects2.length = 0;
gdjs.Level2Code.GDGoRightObjects3.length = 0;
gdjs.Level2Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.Level2Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.Level2Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.Level2Code.GDWitchObjects1.length = 0;
gdjs.Level2Code.GDWitchObjects2.length = 0;
gdjs.Level2Code.GDWitchObjects3.length = 0;
gdjs.Level2Code.GDDialogueContainerObjects1.length = 0;
gdjs.Level2Code.GDDialogueContainerObjects2.length = 0;
gdjs.Level2Code.GDDialogueContainerObjects3.length = 0;
gdjs.Level2Code.GDSignText2Objects1.length = 0;
gdjs.Level2Code.GDSignText2Objects2.length = 0;
gdjs.Level2Code.GDSignText2Objects3.length = 0;
gdjs.Level2Code.GDSignTextObjects1.length = 0;
gdjs.Level2Code.GDSignTextObjects2.length = 0;
gdjs.Level2Code.GDSignTextObjects3.length = 0;
gdjs.Level2Code.GDcarrotObjects1.length = 0;
gdjs.Level2Code.GDcarrotObjects2.length = 0;
gdjs.Level2Code.GDcarrotObjects3.length = 0;
gdjs.Level2Code.GDTimeObjects1.length = 0;
gdjs.Level2Code.GDTimeObjects2.length = 0;
gdjs.Level2Code.GDTimeObjects3.length = 0;
gdjs.Level2Code.GDsign2Objects1.length = 0;
gdjs.Level2Code.GDsign2Objects2.length = 0;
gdjs.Level2Code.GDsign2Objects3.length = 0;
gdjs.Level2Code.GDwindowsObjects1.length = 0;
gdjs.Level2Code.GDwindowsObjects2.length = 0;
gdjs.Level2Code.GDwindowsObjects3.length = 0;
gdjs.Level2Code.GDNewObjectObjects1.length = 0;
gdjs.Level2Code.GDNewObjectObjects2.length = 0;
gdjs.Level2Code.GDNewObjectObjects3.length = 0;
gdjs.Level2Code.GDtableObjects1.length = 0;
gdjs.Level2Code.GDtableObjects2.length = 0;
gdjs.Level2Code.GDtableObjects3.length = 0;
gdjs.Level2Code.GDDoorObjects1.length = 0;
gdjs.Level2Code.GDDoorObjects2.length = 0;
gdjs.Level2Code.GDDoorObjects3.length = 0;

gdjs.Level2Code.eventsList0x5b69a8(runtimeScene);
return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
