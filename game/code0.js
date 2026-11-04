gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDfloorObjects1= [];
gdjs.Untitled_32sceneCode.GDfloorObjects2= [];
gdjs.Untitled_32sceneCode.GDGunObjects1= [];
gdjs.Untitled_32sceneCode.GDGunObjects2= [];
gdjs.Untitled_32sceneCode.GDEnmyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnmyObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDcenterObjects1= [];
gdjs.Untitled_32sceneCode.GDcenterObjects2= [];
gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1= [];
gdjs.Untitled_32sceneCode.GDspon_9595pointObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects = Hashtable.newFrom({"Enmy": gdjs.Untitled_32sceneCode.GDEnmyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGunObjects1Objects = Hashtable.newFrom({"Gun": gdjs.Untitled_32sceneCode.GDGunObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects = Hashtable.newFrom({"Enmy": gdjs.Untitled_32sceneCode.GDEnmyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects = Hashtable.newFrom({"Enmy": gdjs.Untitled_32sceneCode.GDEnmyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects = Hashtable.newFrom({"Enmy": gdjs.Untitled_32sceneCode.GDEnmyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects = Hashtable.newFrom({"Enmy": gdjs.Untitled_32sceneCode.GDEnmyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcenterObjects1Objects = Hashtable.newFrom({"center": gdjs.Untitled_32sceneCode.GDcenterObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.Untitled_32sceneCode.GDfloorObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDfloorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDfloorObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() + ("Run"));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, 500, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idie");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getX() == gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getX() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDEnmyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].getBehavior("Animation").setAnimationName("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnmyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnmyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnmyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnmyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnmyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnmyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnmyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].getBehavior("Animation").setAnimationName("walking");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].resetTimer("Enamysporn");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnmyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGunObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnmyObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDGunObjects1 */
{}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enamyspon");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enamyspon") < 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("spon_point"), gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1);
gdjs.Untitled_32sceneCode.GDEnmyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects, (( gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enamyspon");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnmyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnmyObjects1[i].addForceTowardObject((gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[0] : null), 10, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enmy"), gdjs.Untitled_32sceneCode.GDEnmyObjects1);
gdjs.copyArray(runtimeScene.getObjects("center"), gdjs.Untitled_32sceneCode.GDcenterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnmyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcenterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnmyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnmyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspon_9595pointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnmyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnmyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspon_9595pointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspon_9595pointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
