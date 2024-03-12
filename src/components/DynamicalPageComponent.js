// translation //

import translation from '../translation.json'

// translation //

/* 

<button style={{ display: 'none' }} onClick={() => {

setOkapLeft(OkapLeft + .035)
setOkapLeftParam(OkapLeftParam + .0045)
setOkapLeftParam1(OkapLeftParam1 + .0045)
setRynnaPosXOkapRight(RynnaPosXOkapRight + 1.05)
setRynnaPosYOkapRight(RynnaPosYOkapRight - .135)

setInpuNmb(inputNmb + 1)

let fulloption = `
} else if(OkapLeftActualValue == ${inputNmb}) {

setOkapLeftActualNmb(${0. + .1 * inputNmb})
setOkapLeft(${OkapLeft})
setOkapLeftParam(${OkapLeftParam})
setOkapLeftParam1(${OkapLeftParam1})
setRynnaPosXOkapRight(${RynnaPosXOkapRight})
setRynnaPosYOkapRight(${RynnaPosYOkapRight})


}


`

let Doc = document.getElementById('docoption')
let NewText = document.createElement('p')
NewText.innerText = fulloption
Doc.appendChild(NewText)
console.log(fulloption)


}}>Kliknij żeby zwiększyć lewy okap</button>



<button style={{ display: 'none' }} onClick={() => {

setOkapRight(OkapRight + .01)
setOkapRightParam(OkapRightParam + .01)
setOkapRightParam1(OkapRightParam1 + .05)
setOkapAttykaParam(OkapAttykaParam + .05)
setOkapAttykaParam1Height(OkapAttykaParam1Height + .011)

setInpuNmb(inputNmb + 1)

let fulloption = `
} else if(OkapRightActualValue == ${inputNmb}) {

setOkapRightActualNmb(${0. + .1 * inputNmb})
setOkapRight(${OkapRight})
setOkapRightParam(${OkapRightParam})
setOkapRightParam1(${OkapRightParam1})
setOkapAttykaParam(${OkapAttykaParam})
setOkapAttykaParam1Height(${OkapAttykaParam1Height})

}


`
let Doc = document.getElementById('docoption')
let NewText = document.createElement('p')
NewText.innerText = fulloption
Doc.appendChild(NewText)
console.log(fulloption)


}}>Kliknij żeby zwiększyć prawy okap</button>


*/

const DynamicalPageComponent = ({ 
  step, 
  setStep,
  RoofSelectorUI,
  TypeBuildingSelector1,
  TypeBuildingSelector2,
  TypeBuildingSelector3,
  RangeSetterLengthtHail,
  setRangeSetterLengthtHail,
  RangeSetterLengthtHail,
  setRangeSetterLengthtHail,
  arrayFrameChanger,
  WidthSetterLengthtHail,
  setWidthSetterLengthtHail,
  RangeSetterHeightHail,
  setRangeSetterHeightHail,
  Angle1Range,
  setAngle1Range,
  Angle2Range,
  setAngle2Range,
  FundamentNumber,
  setFundamentNumber,
  ActualOkapPrzodM,
  ActualOkapTylM,
  OkapPrzodSpecialParam,
  setOkapPrzodSpecialParam,
  OkapTylSpecialParam,
  setOkapTylSpecialParam,
  OkapRightActualNmb,
  OkapRightActualValue,
  setOkapRightActualValue,
  OkapSetterPrzod,
  OkapSetterTyl,
  OkapLeftActualValue,
  setOkapLeftActualValue,
  roofTextureSelected,
  RoofTextureSetter,
  TextureRoofSetter,
  ElewacjaSetter,
  TextureOutsideSetter,
  TextureBrightnessSetter,
  textureOutsideSelected,
  RoofTextures,
  ElewacjaTextures,
  twoDView2,
  twoDView3,
  twoDView4,
  twoDView5,
  WindowSingle,
  AddWindow,
  WindowDouble,
  WindowTriple,
  WindowRow,
  DoorSingle_,
  DoorDouble_,
  AddDoor,
  GateOne,
  AddGate,
  Hole,
  AddHole,
  Stairs1,
  Stairs2,
  setOpen,
  setModalMessage,
  setIsAntresolaPrzod,
  setIsAntresolaTyl,
  
}) => {
    if(step == -1) {
setStep(0)
} else if(step == 7) {
setStep(6)

} else if(step == 0) {
return <div className="configuration_option">
<button ___text={translation[SettedLanguage].menu_1_2} datacustomattribute="👋" id='roof1' onClick={(e) => {RoofSelectorUI(e); TypeBuildingSelector1()}} className="block_roof" style={{ background: 'white', margin: '15px 0'}}>
<img  id='roof1' src={ActualSelectedRoof1}/></button>
<button ___text={translation[SettedLanguage].menu_1_3} datacustomattribute="👋" id='roof2' onClick={(e) => { RoofSelectorUI(e); TypeBuildingSelector2() }} className="block_roof"  style={{ background: 'white', margin: '15px 0'}}>
<img id='roof2'  src={ActualSelectedRoof2}/></button>
<button ___text={translation[SettedLanguage].menu_1_4} datacustomattribute="👋" id='roof3' onClick={(e) => { RoofSelectorUI(e); TypeBuildingSelector3() }} className="block_roof"  style={{ background: 'white', margin: '15px 0'}}>
<img id='roof3'  src={ActualSelectedRoof3}/></button>
</div>
} else if(step == 1 && Roof1 == true) {
return <>
     
   <div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_2}: <strong>
         
       <input type="number" min={10} value={RangeSetterLengthtHail} max={75}  onChange={(e) => {
     setRangeSetterLengthtHail(e.target.value); 
     arrayFrameChanger(e); 
     }} />

         m</strong></span>

       <input id='frontWallPos' type="range" min={10} value={RangeSetterLengthtHail} max={75}  onChange={(e) => {
     setRangeSetterLengthtHail(e.target.value); 
     arrayFrameChanger(e);
}} /></div>

<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_3}: <strong>
         
       <input type="number" min={10} value={WidthSetterLengthtHail} max={35}  onChange={(e) => {setWidthSetterLengthtHail(e.target.value);}} />

         m</strong></span>
       <input type="range" min={10} value={WidthSetterLengthtHail} max={35}  onChange={(e) => {setWidthSetterLengthtHail(e.target.value); }} /></div> 

<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_4}:<strong>
         <input type="number" value={RangeSetterHeightHail} min={3} max={10} onChange={(e) => {setRangeSetterHeightHail(e.target.value);}}></input>
         m</strong></span>
<input type="range" min={3} value={RangeSetterHeightHail} max={10}  onChange={(e) => { setRangeSetterHeightHail(e.target.value);  }} /></div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_5}:  
 <strong><input type="number" value={Angle1Range} min={5} max={15} onChange={(e) => {setAngle1Range(e.target.value)}}></input>°</strong>
 </span>
<input type="range" value={Angle1Range} min={5} max={15} onChange={(e) => {
 setAngle1Range(e.target.value)  }}/>
</div> 
     
<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_6}: <strong><input type="number" value={FundamentNumber} min={0} step={.2} max={1} onChange={(e) => {setAngle1Range(e.target.value)}}></input> m</strong></span>
<input type="range" value={FundamentNumber} onChange={(e) => { setFundamentNumber(e.target.value)}} min={0} step={.2} max={1}/>
</div> 

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_7}: <strong>{ActualOkapPrzodM}m</strong></span>
<input type="range" min={0} step={1} max={10}  value={OkapPrzodSpecialParam} onChange={(e) => {setOkapPrzodSpecialParam(e.target.value); OkapSetterPrzod(e); }} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_8}: <strong>{ActualOkapTylM}m</strong></span>
<input type="range" min={0} step={1} max={10} value={OkapTylSpecialParam}  onChange={(e) => {setOkapTylSpecialParam(e.target.value); OkapSetterTyl(e);  }} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_9}: <strong>{OkapRightActualNmb == 0 ? 0 : OkapRightActualNmb.toFixed(1)}m</strong></span>
<input type="range" min={0} step={1} max={40}  value={OkapRightActualValue}  onChange={(e) => {setOkapRightActualValue(e.target.value)}} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_10}: <strong>{OkapLeftActualNmb == 0 ? 0 : OkapLeftActualNmb.toFixed(1)}m</strong></span>
<input type="range" min={0} step={1} max={40}  value={OkapLeftActualValue}  onChange={(e) => {setOkapLeftActualValue(e.target.value)}} />
</div>

</>
} else if(step == 1 && Roof2 == true) {
return <>
     
<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_2}: <strong>
         
       <input type="number" min={10} value={RangeSetterLengthtHail} max={75}  onChange={(e) => {
     setRangeSetterLengthtHail(e.target.value); 
     arrayFrameChanger(e);
     }} />

         m</strong></span>

       <input type="range" min={10} value={RangeSetterLengthtHail} max={75}  onChange={(e) => {
     setRangeSetterLengthtHail(e.target.value); 
     arrayFrameChanger(e);
}} /></div>

<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_3}: <strong>
         
       <input type="number" min={10} value={WidthSetterLengthtHail} max={35}  onChange={(e) => {
     setWidthSetterLengthtHail(e.target.value);
     }} />

         m</strong></span>
       <input type="range" min={10} value={WidthSetterLengthtHail} max={35}  onChange={(e) => {
     setWidthSetterLengthtHail(e.target.value);
}} /></div> 

<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_4}:<strong>
         <input type="number" value={RangeSetterHeightHail} min={3} max={10} onChange={(e) => {setRangeSetterHeightHail(e.target.value);}}></input>
         m</strong></span>
 <input type="range" min={3} value={RangeSetterHeightHail} max={10}  onChange={(e) => { setRangeSetterHeightHail(e.target.value);  }} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_5}:  
 <strong><input type="number" value={Angle2Range} min={5} max={15} onChange={(e) => {setAngle2Range(e.target.value)}}></input>°</strong>
 </span>
<input type="range" value={Angle2Range} min={5} max={15} onChange={(e) => {
 setAngle2Range(e.target.value)  }}/>
</div>
     
<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_6}: <strong><input type="number" value={FundamentNumber} min={0} step={.2} max={1} onChange={(e) => {setAngle1Range(e.target.value)}}></input> m</strong></span>
<input type="range" value={FundamentNumber} onChange={(e) => { setFundamentNumber(e.target.value)}} min={0} step={.2} max={1}/>
</div> 

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_7}: <strong>{ActualOkapPrzodM}m</strong></span>
<input type="range" min={0} step={1} max={10}  value={OkapPrzodSpecialParam} onChange={(e) => {setOkapPrzodSpecialParam(e.target.value); OkapSetterPrzod(e); }} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_8}: <strong>{ActualOkapTylM}m</strong></span>
<input type="range" min={0} step={1} max={10} value={OkapTylSpecialParam}  onChange={(e) => {setOkapTylSpecialParam(e.target.value); OkapSetterTyl(e);  }} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_9}: <strong>{OkapRightActualNmb == 0 ? 0 : OkapRightActualNmb.toFixed(1)}m</strong></span>
<input type="range" min={0} step={1} max={40}  value={OkapRightActualValue}  onChange={(e) => {setOkapRightActualValue(e.target.value)}} />
</div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_10}: <strong>{OkapLeftActualNmb == 0 ? 0 : OkapLeftActualNmb.toFixed(1)}m</strong></span>
<input type="range" min={0} step={1} max={40}  value={OkapLeftActualValue}  onChange={(e) => {setOkapLeftActualValue(e.target.value)}} />
</div>

</>
} else if(step == 1 && Roof3 == true) {
return <>
     
<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_2}: <strong>
         
       <input type="number" min={10} value={RangeSetterLengthtHail} max={75}  onChange={(e) => {
     setRangeSetterLengthtHail(e.target.value); 
     arrayFrameChanger(e);
     }} />

         m</strong></span>

       <input type="range" min={10} value={RangeSetterLengthtHail} max={75}  onChange={(e) => {
     setRangeSetterLengthtHail(e.target.value); 
     arrayFrameChanger(e);
}} /></div>

<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_3}: <strong>
         
       <input type="number" min={10} value={WidthSetterLengthtHail} max={35}  onChange={(e) => {
     setWidthSetterLengthtHail(e.target.value);
     }} />

         m</strong></span>
       <input type="range" min={10} value={WidthSetterLengthtHail} max={35}  onChange={(e) => {
     setWidthSetterLengthtHail(e.target.value);
}} /></div> 

<div className="configuration_option">
       <span>{translation[SettedLanguage].menu_2_4}:<strong>
         <input type="number" value={RangeSetterHeightHail} min={3} max={10} onChange={(e) => {setRangeSetterHeightHail(e.target.value);}}></input>
         m</strong></span>
<input type="range" min={3} value={RangeSetterHeightHail} max={10}  onChange={(e) => { setRangeSetterHeightHail(e.target.value);  }} /></div>

<div className="configuration_option">
<span>{translation[SettedLanguage].menu_2_6}: <strong><input type="number" value={FundamentNumber} min={0} step={.2} max={1} onChange={(e) => {setAngle1Range(e.target.value)}}></input> m</strong></span>
<input type="range" value={FundamentNumber} onChange={(e) => { setFundamentNumber(e.target.value)}} min={0} step={.2} max={1}/>
</div> 

</>

} else if(step == 2) {
return <> 
<div className="configuration_option">
 <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_2_213}:</InputLabel>
   <Select labelId="demo-simple-select-label" id="demo-simple-select" value={roofTextureSelected} defaultValue={'courugated_metal/Profiled-Sheet-Metal-Architextures.jpg'} onChange={(e) => {RoofTextureSetter(e); TextureRoofSetter(e)}}>
   {RoofTextures.map(item =>  <MenuItem  value={item.texture}> {item.name}<div className="SelectedCol" style={{ background: `url${item.texture}` }}></div></MenuItem>)}        
   </Select>
 </FormControl>
</div> 
<div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_2_22}:</InputLabel>
   <Select labelId="demo-simple-select-label" id="demo-simple-select" value={textureOutsideSelected} onChange={(e) => {ElewacjaSetter(e); TextureOutsideSetter(e); TextureBrightnessSetter(e)}}>
   {ElewacjaTextures.map(item =>  <MenuItem  value={item.texture} name={item.name} > {item.name}<div className="SelectedCol" style={{ background: `url${item.texture}`}} ></div></MenuItem>)}        
   </Select>
 </FormControl> 
</div>  
</>
} else if(step == 3) {
const cameraDirection = new THREE.Vector3(0, 0, -1);
cameraDirection.applyQuaternion(camera.quaternion);
let direction, newposition, newrotation;
if(cameraDirection.z > 0.9){
 direction = 'back';
 newrotation = {x: 0, y: Math.PI, z: 0};
 if(_.inRange(RangeSetterLengthtHail, 0, 20)){
   newposition = {x: 0, y: 15, z: FrontWall - 45};
 }else if(_.inRange(RangeSetterLengthtHail, 20, 29)){
   newposition = {x: 0, y: 15, z: FrontWall - 45};
 }else if(_.inRange(RangeSetterLengthtHail, 30, 41)){
   newposition = {x: 0, y: 15, z: FrontWall - 40};
 }else if(_.inRange(RangeSetterLengthtHail, 41, 53)){
   newposition = {x: 0, y: 15, z: FrontWall - 35};
 }else if(_.inRange(RangeSetterLengthtHail, 53, 66)){
   newposition = {x: 0, y: 15, z: FrontWall - 35};
 }else if(_.inRange(RangeSetterLengthtHail, 66, 76)){
   newposition = {x: 0, y: 15, z: FrontWall - 35};
 }
}else if(cameraDirection.z < -0.9){
 direction = 'front';
 newrotation = {x: 0, y: 0, z: 0};
 if(_.inRange(RangeSetterLengthtHail, 0, 20)){
   newposition = {x: 0, y: 15, z: FrontWall + 15};
 }else if(_.inRange(RangeSetterLengthtHail, 20, 29)){
   newposition = {x: 0, y: 15, z: FrontWall + 17};
 }else if(_.inRange(RangeSetterLengthtHail, 30, 41)){
   newposition = {x: 0, y: 15, z: FrontWall + 22};
 }else if(_.inRange(RangeSetterLengthtHail, 41, 53)){
   newposition = {x: 0, y: 15, z: FrontWall + 25};
 }else if(_.inRange(RangeSetterLengthtHail, 53, 66)){
   newposition = {x: 0, y: 15, z: FrontWall + 32};
 }else if(_.inRange(RangeSetterLengthtHail, 66, 76)){
   newposition = {x: 0, y: 15, z: FrontWall + 35};
 }
}else if(cameraDirection.x > 0.9){
 direction = 'left';
 newrotation = {x: 0, y: Math.PI / 2, z: 0};
 if(WidthSetterLengthtHail == 10){
   newposition = {x: -543, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 11){
   newposition = {x: -560, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 12){
   newposition = {x: -570, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 13){
   newposition = {x: -580, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 14){
   newposition = {x: -595, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 15){
   newposition = {x: -610, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 16){
   newposition = {x: -625, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 17){
   newposition = {x: -640, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 18){
   newposition = {x: -655, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 19){
   newposition = {x: -670, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 20){
   newposition = {x: -685, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 21){
   newposition = {x: -700, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 22){
   newposition = {x: -705, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 23){
   newposition = {x: -720, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 24){
   newposition = {x: -735, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 25){
   newposition = {x: -750, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 26){
   newposition = {x: -755, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 27){
   newposition = {x: -765, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 28){
   newposition = {x: -770, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 29){
   newposition = {x: -780, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 30){
   newposition = {x: -790, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 31){
   newposition = {x: -805, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 32){
   newposition = {x: -815, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 33){
   newposition = {x: -820, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 34){
   newposition = {x: -835, y: 15, z: 0};
 }else if(WidthSetterLengthtHail == 35){
   newposition = {x: -850, y: 15, z:0};
 }
}else if(cameraDirection.x < -0.9){
 direction = 'right';
 newposition = {x: FrontWall1 + 555, y: 15, z: FrontWall / 2};
 newrotation = {x: 0, y: -Math.PI / 2, z: 0};
 if(WidthSetterLengthtHail == 10){
   newposition = {x: 488, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 11){
   newposition = {x: 505, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 12){
   newposition = {x: 515, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 13){
   newposition = {x: 525, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 14){
   newposition = {x: 540, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 15){
   newposition = {x: 555, y: 15, z: 0}; //610
 }else if(WidthSetterLengthtHail == 16){
   newposition = {x: 570, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 17){
   newposition = {x: 585, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 18){
   newposition = {x: 600, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 19){
   newposition = {x: 615, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 20){
   newposition = {x: 630, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 21){
   newposition = {x: 645, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 22){
   newposition = {x: 650, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 23){
   newposition = {x: 675, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 24){
   newposition = {x: 690, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 25){
   newposition = {x: 705, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 26){
   newposition = {x: 710, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 27){
   newposition = {x: 720, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 28){
   newposition = {x: 725, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 29){
   newposition = {x: 730, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 30){
   newposition = {x: 740, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 31){
   newposition = {x: 755, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 32){
   newposition = {x: 765, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 33){
   newposition = {x: 770, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 34){
   newposition = {x: 785, y: 15, z: 0}; 
 }else if(WidthSetterLengthtHail == 35){
   newposition = {x: 800, y: 15, z:0}; 
 }
}

// if(newposition === undefined){
//   return;
// }

return <>

<div style={{ display: twoDView2 == 'flex' || twoDView3 == 'flex' || twoDView4 == 'flex' || twoDView5 == 'flex' ? 'flex' : 'flex' , flexDirection: 'column', height: '300vh' }}>
<div className="configuration_option">
 {/*<h2>{translation[SettedLanguage].menu_3_2}</h2>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>
  
  
   </div>
   <div className="label_down">
     <span>{MenuConfigurationAccesory.desc == "113,5 x 146 cm" ? translation[SettedLanguage].menu_3_2_1 : MenuConfigurationAccesory.desc}</span></div>
     <Draggable ref={draggableRef} onStop={() => {
       Windows.push(MenuConfigurationAccesory)
       setWindows([...Windows])
       if (draggableRef.current) {
       draggableRef.current.setState({ x: 0, y: 0 });
       }

     }}>
       <div size_={"1_window_5"} orient={"front"} className="element_moved"></div>
     </Draggable>
     <ul class="dropdown">
       <li size_={"1_window_5"} orient={"front"}
         onClick={() => {
           setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: direction, newposition: newposition, newrotation: newrotation, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:10,  obj: "1_window", size: "1_window_5", orient: 'front', desc: "113,5 x 63,5 cm" })
         }}>
         <a size_={"1_window_5"} orient={"front"}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"} orient={"front"}
        onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: direction, newposition: newposition, newrotation: newrotation, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:15,  obj: "1_window", size: "1_window_4", orient: 'front', desc: "113,5 x 126 cm" })
       }}>
         <a size_={"1_window_4"} orient={"front"}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"} orient={"front"} 
       onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: direction, newposition: newposition, newrotation: newrotation, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:20,  obj: "1_window", size: "1_window_3", orient: 'front', desc: "113,5 x 146 cm" })
       }}>
         <a size_={"1_window_3"} orient={"front"}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"} orient={"front"}
        onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: direction, newposition: newposition, newrotation: newrotation, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:30,  obj: "1_window", size: "1_window_2", orient: 'front', desc: "113,5 x 215 cm" })
       }}>
         <a size_={"1_window_2"} orient={"front"}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"} orient={"front"} 
       onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: direction, newposition: newposition, newrotation: newrotation, no: Math.random() * 500, x:0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:35,  obj: "1_window", size: "1_window_1", orient: 'front', desc: "113,5 x 235 cm" })
       }}>
         <a size_={"1_window_1"} orient={"front"}>113,5 x 235 cm</a></li>
     </ul>
 </div> */}

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_1}</span></div>
     <ul class="dropdown"  onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"1_window_5"} orient={"front"}><a size_={"1_window_5"} orient={"front"}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"} orient={"front"}><a size_={"1_window_4"} orient={"front"}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"} orient={"front"}><a size_={"1_window_3"} orient={"front"}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"} orient={"front"}><a size_={"1_window_2"} orient={"front"}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"} orient={"front"}><a size_={"1_window_1"} orient={"front"}>113,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"2_window"} src={WindowDouble}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_2}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"2_window_1"} orient={"front"}><a size_={"2_window_1"} orient={"front"}>213,5 x 63,5 cm</a></li>
       <li size_={"2_window_2"} orient={"front"}><a size_={"2_window_2"} orient={"front"}>213,5 x 126 cm</a></li>
       <li size_={"2_window_3"} orient={"front"}><a size_={"2_window_3"} orient={"front"}>213,5 x 146 cm</a></li>
       <li size_={"2_window_4"} orient={"front"}><a size_={"2_window_4"} orient={"front"}>213,5 x 215 cm</a></li>
       <li size_={"2_window_5"} orient={"front"}><a size_={"2_window_5"} orient={"front"}>213,5 x 235 cm</a></li>
       <li size_={"2_window_6"} orient={"front"}><a size_={"2_window_6"} orient={"front"}>288,5 x 215 cm</a></li>
       <li size_={"2_window_7"} orient={"front"}><a size_={"2_window_7"} orient={"front"}>288,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"3_window"} src={WindowTriple}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_3}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"3_window_1"} orient={"front"}><a size_={"3_window_1"} orient={"front"}>310,5 x 63,5 cm</a></li>
       <li size_={"3_window_2"} orient={"front"}><a size_={"3_window_2"} orient={"front"}>310,5 x 126 cm</a></li>
       <li size_={"3_window_3"} orient={"front"}><a size_={"3_window_3"} orient={"front"}>310,5 x 146 cm</a></li>
       <li size_={"3_window_4"} orient={"front"}><a size_={"3_window_4"} orient={"front"}>310,5 x 215 cm</a></li>
       <li size_={"3_window_5"} orient={"front"}><a size_={"3_window_5"} orient={"front"}>310,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs"  >
   <div className="container_acs_img">
   <img type={"4_window"}  src={WindowRow}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_4}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"4_window_1"} orient={"front"}><a size_={"4_window_1"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 126 cm</a></li>
       <li size_={"4_window_2"} orient={"front"}><a size_={"4_window_2"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 146 cm</a></li>
       <li size_={"4_window_3"} orient={"front"}><a size_={"4_window_3"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 215 cm</a></li>
       <li size_={"4_window_4"} orient={"front"}><a size_={"4_window_4"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 235 cm</a></li>
     </ul>
 </div>
 
</div> 

<div className="configuration_option">



<h2>{translation[SettedLanguage].menu_3_3}</h2>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"singleDoor"}  src={DoorSingle_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_3_1}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoor(e.target)}}>
   <li type={"door_glass1"} orient={"front"}><a type={"door_glass1"} orient={"front"}>{translation[SettedLanguage].menu_3_3_4}</a></li>
   <li type={"door_half_glass1"} orient={"front"}><a type={"door_half_glass1"} orient={"front"}>{translation[SettedLanguage].menu_3_3_3}</a></li>
   <li type={"door_full1"} orient={"front"}><a type={"door_full1"} orient={"front"}>{translation[SettedLanguage].menu_3_3_2}</a></li>    
   </ul>
</div>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"DoubleDoor"} src={DoorDouble_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_4}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoor(e.target)}}>
   <li type={"door_glass2"} orient={"front"}><a type={"door_glass2"} orient={"front"}>{translation[SettedLanguage].menu_3_4_3}</a></li>
   <li type={"door_half_glass2"} orient={"front"}><a type={"door_half_glass2"} orient={"front"}>{translation[SettedLanguage].menu_3_4_2}</a></li>
   <li type={"door_full2"} orient={"front"}><a type={"door_full2"} orient={"front"}>{translation[SettedLanguage].menu_3_4_1}</a></li>    
   </ul>
</div>
</div> 

<div   className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_5}</h2>

<div className="option_block_acs">
<div className="container_acs_img">
<img type={"gate_normal"} src={GateOne}></img>
</div>
<div className="label_down">
 <span>{translation[SettedLanguage].menu_3_5_1}</span></div>
 <ul class="dropdown" onClick={(e) => {AddGate(e.target)}} >
   <li type={"gate_glass"} orient={"front"}><a type={"gate_glass"} orient={"front"}>{translation[SettedLanguage].menu_3_5_4}</a></li>
   <li type={"gate_half_glass"} orient={"front"}><a type={"gate_half_glass"} orient={"front"}>{translation[SettedLanguage].menu_3_5_3}</a></li>
   <li type={"gate_full"} orient={"front"}><a type={"gate_full"} orient={"front"}>{translation[SettedLanguage].menu_3_5_2}</a></li>    
   </ul>
</div>  

<div className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_10}</h2>


<div className="option_block_acs" >
<div className="container_acs_img">
<img src={Hole}></img>
</div>
<div className="label_down" onClick={(e) => {AddHole(e.target)}}>
<span>{translation[SettedLanguage].missing_menu_6}</span></div>
</div>   
</div>    
 
</div>  

<div className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_6}</h2>

<div className="option_block_acs">
<div className="container_acs_img">
<img type={"stairs1"} src={Stairs1}></img>
</div>
<div className="label_down">
<span>{translation[SettedLanguage].menu_3_6_1}</span></div>
<ul class="dropdown" onClick={(e) => {; 

if(RangeSetterHeightHail <= 5) {
 setOpen(true)
 setModalMessage('Minimalna wysokość hali niezbędna do dodania schodów przemysłowych wynosi 6 metrów.')
} else {
 AddStairs1Typed(e.target)
}


}}>
<li type={"inside"}><a type={"inside"}>{translation[SettedLanguage].menu_3_6_3}</a></li>
<li type={"outside"}><a type={"outside"}>{translation[SettedLanguage].menu_3_6_2}</a></li>

</ul>
</div>     

</div>

<div className="configuration_option" >

<div className="option_block_acs"  onClick={AddStairs2} >
<div className="container_acs_img">
<img type={"stairs2"} src={Stairs2}></img>
</div>
<div className="label_down">
<span>{translation[SettedLanguage].menu_3_7_1}</span></div>
<ul class="dropdown" onClick={(e) => {

if(RangeSetterHeightHail <= 5) {
 setOpen(true)
 setModalMessage('Minimalna wysokość hali niezbędna do dodania schodów zabiegowych wynosi 6 metrów.')
}else {
 AddStairs2Typed(e.target); 
}

}}>
<li type={"inside"}><a type={"inside"}>{translation[SettedLanguage].menu_3_6_3}</a></li>
<li type={"outside"}><a type={"outside"}>{translation[SettedLanguage].menu_3_6_2}</a></li>

</ul>
</div>     

</div> 

<div className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_7_2}</h2>

<div className="option_block_acs" onClick={() => {


}}>
<div className="container_acs_img">
<img type={"antresola"} src={Antresola}></img>
</div>
<div className="label_down">
<span>{translation[SettedLanguage].menu_3_7_2}</span></div>
<ul class="dropdown">
       <li onClick={() => {setIsAntresolaPrzod(false); setIsAntresolaTyl(true)  

       // setFrames([
       //   {no: 0, pos: -345.5, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0},
       //   {no: 1, pos: -180.5, x1lamele: 10,  frameRoofLast: 0}, 
       //   {no: 2, pos: 10, x1lamele: 230,  frameRoofLast: 0}, 
       //   {no: 3, pos: 220.5, x1lamele: 230,  frameRoofLast: 0}, 
       //   {no: 4, pos: 385.5, x1lamele: 230,  frameRoofLast: 0}, 
       // ])
     
       // setRozstaw(2)
       // setMaxRozstaw(2)
       // setMinRozstaw(1)
       // setActualRozstaw(4) 
       // setRozstawFrameUp(0)
       // setLameleOffset(521.5)
     
       setRangeSetterLengthtHail(RangeSetterLengthtHail)
       setWidthSetterLengthtHail(WidthSetterLengthtHail)
       setRangeSetterHeightHail(RangeSetterHeightHail)   

       }}><a>{translation[SettedLanguage].menu_3_7_4}</a></li>
       <li onClick={() => {setIsAntresolaPrzod(true); setIsAntresolaTyl(false) 
       
       // setFrames([
       //   {no: 0, pos: -345.5, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0},
       //   {no: 1, pos: -180.5, x1lamele: 10,  frameRoofLast: 0}, 
       //   {no: 2, pos: 10, x1lamele: 230,  frameRoofLast: 0}, 
       //   {no: 3, pos: 220.5, x1lamele: 230,  frameRoofLast: 0}, 
       //   {no: 4, pos: 385.5, x1lamele: 230,  frameRoofLast: 0}, 
       // ])
     
       // setRozstaw(2)
       // setMaxRozstaw(2)
       // setMinRozstaw(1)
       // setActualRozstaw(4) 
       // setRozstawFrameUp(0)
       // setLameleOffset(521.5)

       setRangeSetterLengthtHail(RangeSetterLengthtHail)
       setWidthSetterLengthtHail(WidthSetterLengthtHail)
       setRangeSetterHeightHail(RangeSetterHeightHail)
       
       
       
       
       
       
       }}><a>{translation[SettedLanguage].menu_3_7_3}</a></li>
       <li onClick={() => {setIsAntresolaPrzod(false); setIsAntresolaTyl(false)}}><a>{translation[SettedLanguage].menu_3_7_5}</a></li>
</ul>
</div>     

</div> 

<div className="configuration_option">

<h2>{translation[SettedLanguage].menu_3_8_1}</h2>

<div className="option_block_acs">
<div className="container_acs_img">
<img type={"skylight"} src={Skylight}></img>
</div>
<div className="label_down">
<span onClick={() => { setSwietlikScale(swietlicScaleRange)}}>{translation[SettedLanguage].menu_3_8_2}</span></div>
<ul class="dropdown">
 <li onClick={() => {setIsSwietlik(false)}}><a>Usuń świetlik</a></li>
 <li onClick={() => {setSwietlikWidth(0);setIsSwietlik(true)}}><a>{translation[SettedLanguage].missing_menu_1}: 1,5m</a></li>
 <li onClick={() => {setSwietlikWidth(3);setIsSwietlik(true)}}><a>{translation[SettedLanguage].missing_menu_1}: 2,0m</a></li>
 <li onClick={() => {setSwietlikWidth(6);setIsSwietlik(true)}}><a>{translation[SettedLanguage].missing_menu_1}: 2,5m</a></li>
 <li onClick={() => {setSwietlikWidth(9);setIsSwietlik(true)}}><a>{translation[SettedLanguage].missing_menu_1}: 3,0m</a></li>
</ul>
</div>  
</div> 

<div className="configuration_option">

<div className="option_block_acs"  onClick={AddSwietlikJednspadowy}>
<div className="container_acs_img">
<img type={"skylight1"} src={Skylight1}></img>
</div>
<div className="label_down">
<span>{translation[SettedLanguage].menu_3_9_3}</span></div>
</div>  
</div> 

<div className="configuration_option">
 <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_3_9_4}</InputLabel>
   <Select labelId="demo-simple-select-label" id="demo-simple-select" defaultValue={'inside'} 
   onChange={(e) => { 
     if(e.target.value == "roof") {
       setSelectedView1("roof");
     } else if (e.target.value == "inside") {
       setSelectedView1("inside");
     }
    }} >
   <MenuItem value={"roof"} >{translation[SettedLanguage].menu_3_9_6}</MenuItem>       
   <MenuItem value={"inside"} >{translation[SettedLanguage].menu_3_9_5}</MenuItem>       
   </Select>
 </FormControl>
</div> 

<div className="configuration_option">
<button className="noactive-step-btn" style={{ margin: '.25em 0' }} onClick={() => {

setAdditionalViewCartonSetter(AdditionalViewCartonSetter + 1)


if(SetterViewCarton == 2 && AdditionalViewCartonSetter % 2) {
setViewCarton('flex')   
setTwoDView1('flex')
setTwoDView2('none')
setTwoDView3('none')
setTwoDView4('none')
setTwoDView5('none')
} else {
setViewCarton('none')    
setTwoDView1('none')
setTwoDView2('none')
setTwoDView3('none')
setTwoDView4('none')
setTwoDView5('none')
}



 }}>{twoDView1 && ViewCarton == 'flex' ? translation[SettedLanguage].missing_menu_3_1 : translation[SettedLanguage].missing_menu_3 } </button>

 <button className="noactive-step-btn" style={{ margin: '.25em 0' }} onClick={toggleDraggable}>
   {isDraggable ? translation[SettedLanguage].missing_menu_5 : translation[SettedLanguage].missing_menu_4}
 </button>

</div>

</div>

<div style={{ display: twoDView2, flexDirection: 'column', height: '170vh' }}>
<div className="configuration_option">
 <h2>{translation[SettedLanguage].menu_3_2}</h2>



 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>
  
  
   </div>
   <div className="label_down">
     <span>{MenuConfigurationAccesory.desc == "113,5 x 146 cm" ? translation[SettedLanguage].menu_3_2_1 : MenuConfigurationAccesory.desc}</span></div>
     <Draggable ref={draggableRef} onStop={() => {

     Windows.push(MenuConfigurationAccesory)
     setWindows([...Windows]) 
     if (draggableRef.current) {
     draggableRef.current.setState({ x: 0, y: 0 });
     }

     }}>
       <div size_={"1_window_5"} orient={"front"} className="element_moved"></div>
     </Draggable>
     <ul class="dropdown">
       <li size_={"1_window_5"} orient={"front"}
         onClick={() => {
           setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: 'front', newposition: {x: 0, y: 0, z: 5}, newrotation: {x: 0, y: 0, z: 0}, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:10,  obj: "1_window", size: "1_window_5", orient: 'front', desc: "113,5 x 63,5 cm" })
         }}>
         <a size_={"1_window_5"} orient={"front"}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"} orient={"front"}
        onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: 'front', newposition: {x: 0, y: 0, z: 5}, newrotation: {x: 0, y: 0, z: 0}, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:15,  obj: "1_window", size: "1_window_4", orient: 'front', desc: "113,5 x 126 cm" })
       }}>
         <a size_={"1_window_4"} orient={"front"}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"} orient={"front"} 
       onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: 'front', newposition: {x: 0, y: 0, z: 5}, newrotation: {x: 0, y: 0, z: 0}, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:20,  obj: "1_window", size: "1_window_3", orient: 'front', desc: "113,5 x 146 cm" })
       }}>
         <a size_={"1_window_3"} orient={"front"}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"} orient={"front"}
        onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: 'front', newposition: {x: 0, y: 0, z: 5}, newrotation: {x: 0, y: 0, z: 0}, no: Math.random() * 500, x: 0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:30,  obj: "1_window", size: "1_window_2", orient: 'front', desc: "113,5 x 215 cm" })
       }}>
         <a size_={"1_window_2"} orient={"front"}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"} orient={"front"} 
       onClick={() => {
         setMenuConfigurationAccesory({ object: window_1_front_.clone(), direction: 'front', newposition: {x: 0, y: 0, z: 5}, newrotation: {x: 0, y: 0, z: 0}, no: Math.random() * 500, x:0, y:0, z: DoorPosXX, rotate: DoorRotZ, scaleX:25, scaleY:35,  obj: "1_window", size: "1_window_1", orient: 'front', desc: "113,5 x 235 cm" })
       }}>
         <a size_={"1_window_1"} orient={"front"}>113,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs" style={{ display: 'none' }}>
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_1}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"1_window_5"}  orient={"front"}><a size_={"1_window_5"} orient={"front"}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"}  orient={"front"}><a size_={"1_window_4"} orient={"front"}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"}  orient={"front"}><a size_={"1_window_3"} orient={"front"}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"}  orient={"front"}><a size_={"1_window_2"} orient={"front"}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"}  orient={"front"}><a size_={"1_window_1"} orient={"front"}>113,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"2_window"} src={WindowDouble}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_2}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"2_window_1"} orient={"front"}><a size_={"2_window_1"}  orient={"front"}>213,5 x 63,5 cm</a></li>
       <li size_={"2_window_2"} orient={"front"}><a size_={"2_window_2"}  orient={"front"}>213,5 x 126 cm</a></li>
       <li size_={"2_window_3"} orient={"front"}><a size_={"2_window_3"}  orient={"front"}>213,5 x 146 cm</a></li>
       <li size_={"2_window_4"} orient={"front"}><a size_={"2_window_4"}  orient={"front"}>213,5 x 215 cm</a></li>
       <li size_={"2_window_5"} orient={"front"}><a size_={"2_window_5"}  orient={"front"}>213,5 x 235 cm</a></li>
       <li size_={"2_window_6"} orient={"front"}><a size_={"2_window_6"}  orient={"front"}>288,5 x 215 cm</a></li>
       <li size_={"2_window_7"} orient={"front"}><a size_={"2_window_7"}  orient={"front"}>288,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"3_window"} src={WindowTriple}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_3}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"3_window_1"} orient={"front"}><a size_={"3_window_1"}  orient={"front"}>310,5 x 63,5 cm</a></li>
       <li size_={"3_window_2"} orient={"front"}><a size_={"3_window_2"}  orient={"front"}>310,5 x 126 cm</a></li>
       <li size_={"3_window_3"} orient={"front"}><a size_={"3_window_3"}  orient={"front"}>310,5 x 146 cm</a></li>
       <li size_={"3_window_4"} orient={"front"}><a size_={"3_window_4"}  orient={"front"}>310,5 x 215 cm</a></li>
       <li size_={"3_window_5"} orient={"front"}><a size_={"3_window_5"}  orient={"front"}>310,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"4_window"} src={WindowRow}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_4}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"4_window_1"} orient={"front"}><a size_={"4_window_1"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 126 cm</a></li>
       <li size_={"4_window_2"} orient={"front"}><a size_={"4_window_2"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 146 cm</a></li>
       <li size_={"4_window_3"} orient={"front"}><a size_={"4_window_3"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 215 cm</a></li>
       <li size_={"4_window_4"} orient={"front"}><a size_={"4_window_4"} orient={"front"}>{translation[SettedLanguage].missing_menu_2}: 235 cm</a></li>
     </ul>
 </div>
 
</div>

{/*

<div className="configuration_option">

<h2>{translation[SettedLanguage].menu_3_3}</h2>

<div className="option_block_acs"    >
 <div className="container_acs_img">
 <img type={"singleDoor"}  src={DoorSingle_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_3_1}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoor(e.target)}}>
   <li type={"door_glass1"} orient={"front"}><a type={"door_glass1"} orient={"front"}>{translation[SettedLanguage].menu_3_3_4}</a></li>
   <li type={"door_half_glass1"} orient={"front"}><a type={"door_half_glass1"} orient={"front"}>{translation[SettedLanguage].menu_3_3_3}</a></li>
   <li type={"door_full1"} orient={"front"}><a type={"door_full1"} orient={"front"}>{translation[SettedLanguage].menu_3_3_2}</a></li>    
   </ul>
</div>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"DoubleDoor"} src={DoorDouble_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_4}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoor(e.target)}}>
   <li type={"door_glass2"} orient={"front"}><a type={"door_glass2"} orient={"front"}>{translation[SettedLanguage].menu_3_4_3}</a></li>
   <li type={"door_half_glass2"} orient={"front"}><a type={"door_half_glass2"} orient={"front"}>{translation[SettedLanguage].menu_3_4_2}</a></li>
   <li type={"door_full2"} orient={"front"}><a type={"door_full2"} orient={"front"}>{translation[SettedLanguage].menu_3_4_1}</a></li>    
   </ul>
</div>
</div>

<div   className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_5}</h2>

<div className="option_block_acs">
<div className="container_acs_img">
<img type={"gate_normal"} src={GateOne}></img>
</div>
<div className="label_down">
 <span>{translation[SettedLanguage].menu_3_5_1}</span></div>
 <ul class="dropdown" onClick={(e) => {AddGate(e.target)}} >
   <li type={"gate_glass"} orient={"front"}><a type={"gate_glass"} orient={"front"}>{translation[SettedLanguage].menu_3_5_4}</a></li>
   <li type={"gate_half_glass"} orient={"front"}><a type={"gate_half_glass"} orient={"front"}>{translation[SettedLanguage].menu_3_5_3}</a></li>
   <li type={"gate_full"} orient={"front"}><a type={"gate_full"} orient={"front"}>{translation[SettedLanguage].menu_3_5_2}</a></li>    
   </ul>
</div>     
 
</div> */}

<div className="configuration_option">

 <button className="noactive-step-btn" style={{ margin: '.25em 0' }} onClick={toggleDraggable}>
   {isDraggable ?  translation[SettedLanguage].missing_menu_5 : translation[SettedLanguage].missing_menu_4}
 </button>

</div>

</div>

<div style={{ display: twoDView3, flexDirection: 'column', height: '170vh' }}> 

{/* <div className="configuration_option">
 <h2>{translation[SettedLanguage].menu_3_2}</h2>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_1}</span></div>
     <ul class="dropdown"  onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"1_window_5"} orient={'back'}><a size_={"1_window_5"} orient={'back'}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"} orient={'back'}><a size_={"1_window_4"} orient={'back'}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"} orient={'back'}><a size_={"1_window_3"} orient={'back'}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"} orient={'back'}><a size_={"1_window_2"} orient={'back'}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"} orient={'back'}><a size_={"1_window_1"} orient={'back'}>113,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"2_window"} src={WindowDouble}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_2}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"2_window_1"} orient={'back'}><a size_={"2_window_1"} orient={'back'}>213,5 x 63,5 cm</a></li>
       <li size_={"2_window_2"} orient={'back'}><a size_={"2_window_2"} orient={'back'}>213,5 x 126 cm</a></li>
       <li size_={"2_window_3"} orient={'back'}><a size_={"2_window_3"} orient={'back'}>213,5 x 146 cm</a></li>
       <li size_={"2_window_4"} orient={'back'}><a size_={"2_window_4"} orient={'back'}>213,5 x 215 cm</a></li>
       <li size_={"2_window_5"} orient={'back'}><a size_={"2_window_5"} orient={'back'}>213,5 x 235 cm</a></li>
       <li size_={"2_window_6"} orient={'back'}><a size_={"2_window_6"} orient={'back'}>288,5 x 215 cm</a></li>
       <li size_={"2_window_7"} orient={'back'}><a size_={"2_window_7"} orient={'back'}>288,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"3_window"} src={WindowTriple}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_3}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"3_window_1"} orient={'back'}><a size_={"3_window_1"} orient={'back'}>310,5 x 63,5 cm</a></li>
       <li size_={"3_window_2"} orient={'back'}><a size_={"3_window_2"} orient={'back'}>310,5 x 126 cm</a></li>
       <li size_={"3_window_3"} orient={'back'}><a size_={"3_window_3"} orient={'back'}>310,5 x 146 cm</a></li>
       <li size_={"3_window_4"} orient={'back'}><a size_={"3_window_4"} orient={'back'}>310,5 x 215 cm</a></li>
       <li size_={"3_window_5"} orient={'back'}><a size_={"3_window_5"} orient={'back'}>310,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs"  >
   <div className="container_acs_img">
   <img type={"4_window"}  src={WindowRow}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_4}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"4_window_1"} orient={'back'}><a size_={"4_window_1"} orient={'back'}>{translation[SettedLanguage].missing_menu_2}: 126 cm</a></li>
       <li size_={"4_window_2"} orient={'back'}><a size_={"4_window_2"} orient={'back'}>{translation[SettedLanguage].missing_menu_2}: 146 cm</a></li>
       <li size_={"4_window_3"} orient={'back'}><a size_={"4_window_3"} orient={'back'}>{translation[SettedLanguage].missing_menu_2}: 215 cm</a></li>
       <li size_={"4_window_4"} orient={'back'}><a size_={"4_window_4"} orient={'back'}>{translation[SettedLanguage].missing_menu_2}: 235 cm</a></li>
     </ul>
 </div>
 
</div>  


*/}

{/*

<div className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_3}</h2>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"singleDoor"}  src={DoorSingle_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_3_1}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoorBack(e.target)}}>
   <li type={"door_glass1"} orient={"back"}><a type={"door_glass1"} orient={"back"}>{translation[SettedLanguage].menu_3_3_4}</a></li>
   <li type={"door_half_glass1"} orient={"back"}><a type={"door_half_glass1"} orient={"back"}>{translation[SettedLanguage].menu_3_3_3}</a></li>
   <li type={"door_full1"} orient={"back"}><a type={"door_full1"} orient={"back"}>{translation[SettedLanguage].menu_3_3_2}</a></li>    
   </ul>
</div>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"DoubleDoor"} src={DoorDouble_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_4}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoorBack(e.target)}}>
   <li type={"door_glass2"} orient={"back"}><a type={"door_glass2"} orient={"back"}>{translation[SettedLanguage].menu_3_4_3}</a></li>
   <li type={"door_half_glass2"} orient={"back"}><a type={"door_half_glass2"} orient={"back"}>{translation[SettedLanguage].menu_3_4_2}</a></li>
   <li type={"door_full2"} orient={"back"}><a type={"door_full2"} orient={"back"}>{translation[SettedLanguage].menu_3_4_1}</a></li>    
   </ul>
</div>

</div> */}

<div className="configuration_option">
 <button className="noactive-step-btn" style={{ margin: '.25em 0' }} onClick={toggleDraggable}>{isDraggable ? 'Wyłącz przeciąganie' : 'Włącz przeciąganie'}</button>
</div>

</div> 

<div style={{ display: twoDView4, flexDirection: 'column', height: '170vh' }}>

{<div className="configuration_option">
 <h2>{translation[SettedLanguage].menu_3_2}</h2>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_1}</span></div>
     <ul class="dropdown"  onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"1_window_5"} orient={"right"}><a size_={"1_window_5"} orient={'right'}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"} orient={"right"}><a size_={"1_window_4"} orient={'right'}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"} orient={"right"}><a size_={"1_window_3"} orient={'right'}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"} orient={"right"}><a size_={"1_window_2"} orient={'right'}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"} orient={"right"}><a size_={"1_window_1"} orient={'right'}>113,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"2_window"} src={WindowDouble}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_2}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"2_window_1"} orient={"right"}><a size_={"2_window_1"} orient={'right'}>213,5 x 63,5 cm</a></li>
       <li size_={"2_window_2"} orient={"right"}><a size_={"2_window_2"} orient={'right'}>213,5 x 126 cm</a></li>
       <li size_={"2_window_3"} orient={"right"}><a size_={"2_window_3"} orient={'right'}>213,5 x 146 cm</a></li>
       <li size_={"2_window_4"} orient={"right"}><a size_={"2_window_4"} orient={'right'}>213,5 x 215 cm</a></li>
       <li size_={"2_window_5"} orient={"right"}><a size_={"2_window_5"} orient={'right'}>213,5 x 235 cm</a></li>
       <li size_={"2_window_6"} orient={"right"}><a size_={"2_window_6"} orient={'right'}>288,5 x 215 cm</a></li>
       <li size_={"2_window_7"} orient={"right"}><a size_={"2_window_7"} orient={'right'}>288,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs" style={{ display: 'none' }}>
   <div className="container_acs_img">
   <img type={"3_window"} src={WindowTriple}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_3}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"3_window_1"} orient={"right"}><a size_={"3_window_1"} orient={'right'}>310,5 x 63,5 cm</a></li>
       <li size_={"3_window_2"} orient={"right"}><a size_={"3_window_2"} orient={'right'}>310,5 x 126 cm</a></li>
       <li size_={"3_window_3"} orient={"right"}><a size_={"3_window_3"} orient={'right'}>310,5 x 146 cm</a></li>
       <li size_={"3_window_4"} orient={"right"}><a size_={"3_window_4"} orient={'right'}>310,5 x 215 cm</a></li>
       <li size_={"3_window_5"} orient={"right"}><a size_={"3_window_5"} orient={'right'}>310,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs"   style={{ display: 'none' }}>
   <div className="container_acs_img">
   <img type={"4_window"}  src={WindowRow}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_4}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"4_window_1"} orient={"right"}><a size_={"4_window_1"} orient={'right'}>{translation[SettedLanguage].missing_menu_2}: 126 cm</a></li>
       <li size_={"4_window_2"} orient={"right"}><a size_={"4_window_2"} orient={'right'}>{translation[SettedLanguage].missing_menu_2}: 146 cm</a></li>
       <li size_={"4_window_3"} orient={"right"}><a size_={"4_window_3"} orient={'right'}>{translation[SettedLanguage].missing_menu_2}: 215 cm</a></li>
       <li size_={"4_window_4"} orient={"right"}><a size_={"4_window_4"} orient={'right'}>{translation[SettedLanguage].missing_menu_2}: 235 cm</a></li>
     </ul>
 </div>
 
</div> }

{/*<div className="configuration_option">

<h2>{translation[SettedLanguage].menu_3_3}</h2>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"singleDoor"}  src={DoorSingle_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_3_1}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoorRight(e.target)}}>
   <li type={"door_glass1"} orient={"right"}><a type={"door_glass1"} orient={"right"}>{translation[SettedLanguage].menu_3_3_4}</a></li>
   <li type={"door_half_glass1"} orient={"right"}><a type={"door_half_glass1"} orient={"right"}>{translation[SettedLanguage].menu_3_3_3}</a></li>
   <li type={"door_full1"} orient={"right"}><a type={"door_full1"} orient={"right"}>{translation[SettedLanguage].menu_3_3_2}</a></li> 
   </ul>
</div>

<div className="option_block_acs">
 <div className="container_acs_img">
 <img type={"DoubleDoor"} src={DoorDouble_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_4}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoorRight(e.target)}}>
   <li type={"door_glass2"} orient={"right"}><a type={"door_glass2"} orient={"right"}>{translation[SettedLanguage].menu_3_4_3}</a></li>
   <li type={"door_half_glass2"} orient={"right"}><a type={"door_half_glass2"} orient={"right"}>{translation[SettedLanguage].menu_3_4_2}</a></li>
   <li type={"door_full2"} orient={"right"}><a type={"door_full2"} orient={"right"}>{translation[SettedLanguage].menu_3_4_1}</a></li>    
   </ul>
</div>
</div> 
</div>

<div style={{ display: twoDView5, flexDirection: 'column', height: '170vh' }}>
<div className="configuration_option">
 <h2>{translation[SettedLanguage].menu_3_2}</h2>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"1_window"}  src={WindowSingle}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_1}</span></div>
     <ul class="dropdown"  onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"1_window_5"} orient={"left"}><a size_={"1_window_5"} orient={'left'}>113,5 x 63,5 cm</a></li>
       <li size_={"1_window_4"} orient={"left"}><a size_={"1_window_4"} orient={'left'}>113,5 x 126 cm</a></li>
       <li size_={"1_window_3"} orient={"left"}><a size_={"1_window_3"} orient={'left'}>113,5 x 146 cm</a></li>
       <li size_={"1_window_2"} orient={"left"}><a size_={"1_window_2"} orient={'left'}>113,5 x 215 cm</a></li>
       <li size_={"1_window_1"} orient={"left"}><a size_={"1_window_1"} orient={'left'}>113,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"2_window"} src={WindowDouble}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_2}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"2_window_1"} orient={"left"}><a size_={"2_window_1"} orient={'left'}>213,5 x 63,5 cm</a></li>
       <li size_={"2_window_2"} orient={"left"}><a size_={"2_window_2"} orient={'left'}>213,5 x 126 cm</a></li>
       <li size_={"2_window_3"} orient={"left"}><a size_={"2_window_3"} orient={'left'}>213,5 x 146 cm</a></li>
       <li size_={"2_window_4"} orient={"left"}><a size_={"2_window_4"} orient={'left'}>213,5 x 215 cm</a></li>
       <li size_={"2_window_5"} orient={"left"}><a size_={"2_window_5"} orient={'left'}>213,5 x 235 cm</a></li>
       <li size_={"2_window_6"} orient={"left"}><a size_={"2_window_6"} orient={'left'}>288,5 x 215 cm</a></li>
       <li size_={"2_window_7"} orient={"left"}><a size_={"2_window_7"} orient={'left'}>288,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs">
   <div className="container_acs_img">
   <img type={"3_window"} src={WindowTriple}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_3}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"3_window_1"} orient={"left"}><a size_={"3_window_1"} orient={'left'}>310,5 x 63,5 cm</a></li>
       <li size_={"3_window_2"} orient={"left"}><a size_={"3_window_2"} orient={'left'}>310,5 x 126 cm</a></li>
       <li size_={"3_window_3"} orient={"left"}><a size_={"3_window_3"} orient={'left'}>310,5 x 146 cm</a></li>
       <li size_={"3_window_4"} orient={"left"}><a size_={"3_window_4"} orient={'left'}>310,5 x 215 cm</a></li>
       <li size_={"3_window_5"} orient={"left"}><a size_={"3_window_5"} orient={'left'}>310,5 x 235 cm</a></li>
     </ul>
 </div>

 <div className="option_block_acs"  >
   <div className="container_acs_img">
   <img type={"4_window"}  src={WindowRow}></img>

   </div>
   <div className="label_down">
     <span>{translation[SettedLanguage].menu_3_2_4}</span></div>
     <ul class="dropdown" onClick={(e) => {AddWindow(e.target)}}>
       <li size_={"4_window_1"} orient={"left"}><a size_={"4_window_1"} orient={'left'}>{translation[SettedLanguage].missing_menu_2}: 126 cm</a></li>
       <li size_={"4_window_2"} orient={"left"}><a size_={"4_window_2"} orient={'left'}>{translation[SettedLanguage].missing_menu_2}: 146 cm</a></li>
       <li size_={"4_window_3"} orient={"left"}><a size_={"4_window_3"} orient={'left'}>{translation[SettedLanguage].missing_menu_2}: 215 cm</a></li>
       <li size_={"4_window_4"} orient={"left"}><a size_={"4_window_4"} orient={'left'}>{translation[SettedLanguage].missing_menu_2}: 235 cm</a></li>
     </ul>
 </div>
 
</div>   

<div className="configuration_option">
<h2>{translation[SettedLanguage].menu_3_3}</h2>
<div className="option_block_acs" >
 <div className="container_acs_img">
 <img type={"singleDoor"}  src={DoorSingle_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_3_1}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoorLeft(e.target)}}>
   <li type={"door_glass1"} orient={"left"}><a type={"door_glass1"} orient={"left"}>{translation[SettedLanguage].menu_3_3_4}</a></li>
   <li type={"door_half_glass1"} orient={"left"}><a type={"door_half_glass1"} orient={"left"}>{translation[SettedLanguage].menu_3_3_3}</a></li>
   <li type={"door_full1"} orient={"left"}><a type={"door_full1"} orient={"left"}>{translation[SettedLanguage].menu_3_3_2}</a></li>    
   </ul>
</div>

<div className="option_block_acs" >
 <div className="container_acs_img">
 <img type={"DoubleDoor"} src={DoorDouble_}></img>

 </div>
 <div className="label_down">
   <span>{translation[SettedLanguage].menu_3_4}</span></div>
   <ul class="dropdown"  onClick={(e) => {AddDoorLeft(e.target)}}>
   <li type={"door_glass2"} orient={"left"}><a type={"door_glass2"} orient={"left"}>{translation[SettedLanguage].menu_3_4_3}</a></li>
   <li type={"door_half_glass2"} orient={"left"}><a type={"door_half_glass2"} orient={"left"}>{translation[SettedLanguage].menu_3_4_2}</a></li>
   <li type={"door_full2"} orient={"left"}><a type={"door_full2"} orient={"left"}>{translation[SettedLanguage].menu_3_4_1}</a></li>    
   </ul>
</div>
</div>  */}

<div className="configuration_option">

<button className="noactive-step-btn" style={{ margin: '.25em 0' }} onClick={toggleDraggable}>
{isDraggable ? translation[SettedLanguage].missing_menu_5 : translation[SettedLanguage].missing_menu_4}
</button>

</div>  
</div>

</>
} else if(step == 4) {
return <>

     <div className="configuration_option">
   <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_2}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorBrobka} id="demo-simple-select" onChange={(e) => {BrobkaColorChanger(e)}}>
   {BrobkaColors.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_3}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedRoofColor} id="demo-simple-select" onChange={(e) => {RoofChangerColor(e)}}>
   {RoofColors.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_4}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorElevation} id="demo-simple-select" onChange={(e) => elevationChanger(e)}>
   {ElevationColours.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_5}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorAttyka} id="demo-simple-select" onChange={(e) =>  AttykaColorSetter(e)}>
   {RoofColorsAttyka.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl> 
     </div>

   <div className="configuration_option">
     <FormControl fullWidth>
     <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_6}</InputLabel>
       <Select labelId="demo-simple-select-label" value={selectedConnectionColor} id="demo-simple-select" onChange={(e) => ConnectionColorChanger(e)}>
         {ConnectionColors.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
       </Select>
     </FormControl> 
   </div> 

      <div className="configuration_option"> 
      <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_7}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedWindowRama} id="demo-simple-select" onChange={(e) =>  WindowRamaColorChanger(e)}>
   {RamyOkienneColor.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl> 
      </div> 

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_8}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedWindowColor} id="demo-simple-select" onChange={(e) =>  WindowColorObrobkaChanger(e)}>
   {ObrobkaBlacharskaOknaColor.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_9}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorDoor} id="demo-simple-select" onChange={(e) =>   DoorColorChanger(e)}>
   {DoorColor.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>
     
     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_10}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorDoorBrobka} id="demo-simple-select" onChange={(e) =>  DoorColorObrobkaChanger(e)}>
   {DoorObrobkaColor.map(item =>  <MenuItem  value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>        

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_11}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorGate} id="demo-simple-select" onChange={(e) => ColorBramaSetter2(e)}>
   {GateColor.map(item => <MenuItem value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div>    

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{translation[SettedLanguage].menu_4_12}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorGateObrobka} id="demo-simple-select" onChange={(e) => ColorBramaObrobkaSetter(e)}>
   {GateObrobkaColor.map(item => <MenuItem value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div> 

     <div className="configuration_option">
     <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">{'Kolor obrobki otworu sciennego'}</InputLabel>
   <Select labelId="demo-simple-select-label" value={selectedColorOtworObrobka} id="demo-simple-select" onChange={(e) => ColorOtworObrobkaSetter(e)}>
   {OtworObrobkaColor.map(item => <MenuItem value={item.color}><span>{item.name}</span><div style={{ background: item.color }} className="SelectedCol"></div></MenuItem>)}
   </Select>
   </FormControl>
     </div> 
     

</>
} else if(step == 5) {}   
}   
