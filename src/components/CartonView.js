import React, { useState, useEffect } from 'react'
import Draggable, {DraggableCore} from 'react-draggable';
import { useThree } from "@react-three/fiber";

// react icons

import { MdRoofing, MdPhotoCamera, MdOutlineRefresh } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb'
import { AiFillFormatPainter, AiOutlineForm, AiOutlineClose } from 'react-icons/ai'
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'
import { TfiLayers } from 'react-icons/tfi'
import { BsHouseAdd } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

// react icons

import bgcCartonView from '../images/grass.jpg'

const CartonView = ({
  firstPositionWindow,
  handleDragStairs1Sides,
  handleDragStairs2Sides,
  handleDragHole,
  handleDragHoleSides,
handleDragGateSides,
setSwietlikScale,
handleDragEnd,
handleSwietlikLengthDrag,
handleStopTest1,
handleStopTestY1,
HandleDragOnOff,
HandleDragBlock,
HandleDragBlockOff,
handleStopTest,
handleStopTestY,
ScaleClassGateToChange,
GateToScale,
AccesoryVisibleOff,
AccesoriesLineVisible2D,
AccesoriesLineVisibleNmb,
AccesoryVisibleSetter,
handleDragback,
handleDrag1back,
handleDrag2back,
handleDrag3back,
handleDragleft,
handleDrag1left,
handleDrag2left,
handleDrag3left,
handleDragright,
handleDrag1right,
handleDrag2right,
handleDrag3right,
FilteredWindowData1BACK, 
FilteredWindowData1LEFT, 
FilteredWindowData1RIGHT, 
FilteredWindowData2BACK, 
FilteredWindowData2LEFT, 
FilteredWindowData2RIGHT, 
FilteredWindowData3BACK,
FilteredWindowData3LEFT,
FilteredWindowData3RIGHT, 
FilteredWindowData4RIGHT, 
FilteredWindowData4BACK, 
FilteredWindowData4LEFT, 
handleDragSwietlik,
setSwietlikiJednospadowy,
SwietlikiJednospadowy,
Roof1, 
Roof2,
Roof3, 
CartonHeightLineSetter,
CartonHeightFixerWindows,
RangeSetterLengthtHail,
isDraggable,
Stairs,
setStairs,
ViewCarton,
twoDView1,
twoDView2, 
twoDView3, 
twoDView4,  
twoDView5,  
ActualHailLenght,
ActualHeight,
ActualHailWidth,
elevationColor,
SelectedCartonRoof,
isSwietlik, 
SelectedView1,
swietlikScale,
setIsSwietlik,
FilteredDataLeft1,
handleDragDoor2Left,
DoorColor1,
DoorObrobkaColor1,  
Doors,
setDoors,
FilteredStairs1Array, 
handleDragStairs1,
FilteredStairs2Array, 
handleDragStairs2, 
Frames, 
FramesAdditional,  
FilteredWindowData1, 
handleDrag,  
FilteredWindowData2,
handleDrag1,  
FilteredWindowData3, 
handleDrag2, 
Windows, 
setWindows, 
FilteredWindowData4, 
handleDrag3,  
filteredData, 
handleDragDoor1, 
filteredData1, 
handleDragDoor2, 
FilteredGate, 
handleDragGate, 
GateColor1, 
Gates,    
setGates,      
FilteredDataBack, 
handleDragDoor1Back, 
FilteredDataBack1, 
handleDragDoor2Back,  
brobkiColor,
FilteredDataRight1, 
handleDragDoor1Right, 
FilteredDataRight, 
handleDragDoor2Right, 
FilteredHolesRight, 
handleDragHoleRight, 
Holes, 
setHoles, 
AttykaColor,  
FilteredDataLeft, 
handleDragDoor1Left,
}) => { 

  const [cartonViewRoof, setCartonViewRoof] = useState('polygon(0 35%, 100% 50%, 100% 100%, 0% 100%)')
  const [cartonViewRoof2, setCartonViewRoof2] = useState('polygon(0% 50%, 100% 35%, 100% 100%, 0% 100%)')

  const CheckerCartonRoof = () => { 
    if(Roof1 == true) {
      setCartonViewRoof('polygon(0 35%, 100% 50%, 100% 100%, 0% 100%)')
    } else if (Roof2 == true) {
      setCartonViewRoof('polygon(50% 40%, 100% 50%, 100% 100%, 0 100%, 0 50%)')
    } else {
      setCartonViewRoof('polygon(50% 50%, 100% 50%, 100% 100%, 0 100%, 0 50%)')
    } 
  }

  useEffect(() =>CheckerCartonRoof())

  return (
     <>
     
<Draggable  disabled={!isDraggable} >
<div className="carton_view" style={{ display: ViewCarton, 
background: twoDView2 == 'flex' ||  
twoDView3 == 'flex' ||  
twoDView4 == 'flex' || 
twoDView5 == 'flex' ? '#764e3b' : `url(${bgcCartonView})`,
width: `${ActualHailLenght + '3000px'}`,
height:`${ActualHeight * 100 + '3000px'}`          
}}>
<div className="mat_building" style={{ display: twoDView1, width: `${ActualHailLenght * 25 + 300}px`, height: `${ActualHailWidth * 25 + 200}px`}}>
<div className="hail_itself" style={{ borderColor: SelectedView1 == "inside" ? elevationColor : "transparent", background: SelectedView1 == "inside" ? 'white' : `url(${SelectedCartonRoof})`, backgroundSize: '50%' }}>
 
  {Roof2 == true || Roof3 == true ? <div className="skylight" style={{ display: isSwietlik == false || SelectedView1 == "inside" ? 'none' : 'flex',
width: 
swietlikScale == 0 ? '150px' : 
swietlikScale == 2 ? '200px' : 
swietlikScale == 4 ? '250px' :
swietlikScale == 8 ? '300px' : '150px',
left:  swietlikScale == 0 ? '35%' : 
swietlikScale == 2 ? '30%' : 
swietlikScale == 4 ? '25%' :
swietlikScale == 8 ? '20%' : '35%'
}}>

<div className='DraggableContainerVertical' style={{ 
  marginTop: '0.35em',
  marginLeft: '0px', 
  left: '102.5%',
  width: '95px'
  }} onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
  <Draggable axis='x'grid={[15, 15]} bounds="parent" onDrag={(dragElement, event) => {
    if (event.x == 15  && swietlikScale == 0) {
      setSwietlikScale(2)
    } else if (event.x == -15 && swietlikScale == 2) {
      setSwietlikScale(0)
    } else if (event.x == 15 && swietlikScale == 2) {
      setSwietlikScale(4)
    } else if (event.x == -15 && swietlikScale == 4) {
      setSwietlikScale(2)
    } else if (event.x == 15 && swietlikScale == 4) {
      setSwietlikScale(8)
    } else if (event.x == -15 && swietlikScale == 8) {
      setSwietlikScale(4)
    } 
  }} position={{x: 0, y: 0}}>
  <div className={`vertical-arrow `} style={{ cursor: 'grab' }} id="VerC"></div>
  </Draggable> 
  </div> 

<div className="DeleteItem" onClick={() => { setIsSwietlik(false) }}>
    <AiOutlineClose/> 
</div>
  </div> : null}

  {Roof1 == true ? SwietlikiJednospadowy.map((item, index) => <>
  <Draggable axis='x' bounds="parent" onDrag={handleDragSwietlik(index)}> 
    <div className='DragAreaSwietlik' style={{ width:  `160px` }}> 
    <div className="skylight1" style={{ display: Roof1 == false || SelectedView1 == "inside" ? 'none' : 'flex'}}>
    <div className="DeleteItem"   onClick={() => {
    let itemNoToFind = item.no;
    let updatedSwietlik = SwietlikiJednospadowy.filter(item => item.no !== itemNoToFind);
    setSwietlikiJednospadowy(updatedSwietlik);
    }}>
      <AiOutlineClose/>
    </div>
    </div> 
    </div> 
  </Draggable>

  </>) : null}

  <div className="width_setter">
    <span><input type="number" placeholder={ActualHailLenght * 100} value={ActualHailWidth * 100}></input></span>
  </div>

  <div className="length_setter" >
    <span><input type="number" placeholder={ActualHailLenght * 100} value={ActualHailLenght * 100}  min={500} onChange={(e) =>  {  }} ></input></span>

  {Frames.map(item =>  <div className="line_1">
      <span style={{ position: 'relative', marginTop: '0' }}><input type="number" placeholder={520} ></input></span>
      </div>
  )}

  {FramesAdditional.map(item =>  <div className="line_1">
      <span style={{ position: 'relative', marginTop: '0' }}><input type="number" placeholder={520} ></input></span>
      </div>
  )}

  </div>

</div>
</div>
<div id="front" className="Skies" style={{ display: twoDView2, height: `${ActualHeight * 100} + 100vh`, marginBottom: `${ActualHeight  * 10 + 10}em`}} >
  <div className="building" style={{ 
    background: elevationColor, 
    borderColor: brobkiColor, 
    width: `${ActualHailWidth * 50}px`, 
    height: `${ActualHeight * 100 }px`,
    clipPath: cartonViewRoof,
    }}>

  <div className="Roof" style={{ background: AttykaColor, width:  `${ActualHailWidth * 50}px`, display: 'none' }}></div>

  {FilteredStairs1Array.map((item, index) => {if(item.direction === 'front') return(<>
  <Draggable axis="x" onDrag={handleDragStairs1(index)}>
  <div className="stairs1_outside">
    <div className='door_stairs'  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}></div>
    <div className='stairs_itself1'>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    </div>
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {FilteredStairs2Array.map((item, index) => { if(item.direction === 'front') return(<>
  <Draggable axis="x" onDrag={handleDragStairs2(index)}>
  <div className="stairs2_outside">
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {FilteredWindowData1.map((item, index) => {if(item.direction === 'front') return(<>
    <div className='helperline-horizontal' style={{
    width:  `${ActualHailWidth * 50}px`,
    marginTop: `-${item.y - 40}px`,
    top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,
    display: AccesoriesLineVisible2D }}>
      <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

      <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>
          <div className='line_container'> 
            <div className='line_additional'></div>
            <div className='line_additional2'></div> 
          </div>
        </div>
    </div>
  
    <Draggable onDrag={handleDrag(index)} positionOffset={{ x: item.x_2d ? `${item.x_2d * 2.2}px` : `0px`, y: item.y_2d ? `${-item.y_2d * 2.2}px` : `0px` }}>
    <div className={`Window_type1_${item.windowHeight}`} id={item.no} onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 50}px` }}>

      <div className='helperline-vertical' style={{ display: AccesoriesLineVisible2D  }}>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>

          </div>
        <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>
        <div className={`line_container_${item.windowHeight}`}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
      </div>
      <div className="DeleteItem" onClick={() => {
      let itemNoToFind = item.no;
      let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
      setWindows(updatedWindows);
      }}>
        <AiOutlineClose/>
      </div>
    </div>
    </Draggable>

  </>)})}

  {FilteredWindowData2.map((item, index) => {if(item.direction === 'front') return(<>
  <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: AccesoriesLineVisible2D }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>
  <Draggable onDrag={handleDrag1(index)} positionOffset={{ x: item.x_2d ? `${item.x_2d * 1.8}px` : `0px`, y: item.y_2d ? `${-item.y_2d * 2}px` : `0px` }}>
  <div className={`Window_type2_${item.windowHeight}`}  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 50}px`}}>

    <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px` }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
    </div>

    <div className="DeleteItem" onClick={() => {
      //console.log(item)
    let itemNoToFind = item.no;
 
    let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
    
    setWindows(updatedWindows);
    }}>
      <AiOutlineClose/>
    </div>

    <hr></hr>

  </div>
  </Draggable>

  </>)})}

  {FilteredWindowData3.map((item, index) => {if(item.direction === 'front') return(<>

    <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
    </div>
  
  <Draggable onDrag={handleDrag2(index)} positionOffset={{ x: item.x_2d ? `${item.x_2d * 1.5}px` : `0px`, y: item.y_2d ? `${-item.y_2d * .5}px` : `0px` }}>
  <div className={`Window_type3_${item.windowHeight}`} onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows}px` }}>

      <div className='helperline-vertical' style={{ display: AccesoriesLineVisible2D  }}>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

        <div className={`line_container_${item.windowHeight}`}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
      </div>

    <div className="DeleteItem" onClick={() => {
       
    let itemNoToFind = item.no;
   
    let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
     
    setWindows(updatedWindows);
    }}>
      <AiOutlineClose/>
    </div>

    <hr></hr>
    <hr></hr>

  </div>
  </Draggable>

  </>)})}
  
  {FilteredWindowData4.map((item, index) => {if(item.direction === 'front') return(<>

    <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: AccesoriesLineVisible2D  }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
    </div>
  
  <Draggable onDrag={handleDrag3(index)} positionOffset={{ x: item.x_2d ? `${item.x_2d * 2.2}px` : `0px`, y: item.y_2d ? `${-item.y_2d * .5}px` : `0px` }}>
  <div className={`Window_type4_${item.windowHeight}`}  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 50}px` }}>

    <div className='helperline-vertical'  style={{ display: AccesoriesLineVisible2D  }}>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

        <div className={`line_container_${item.windowHeight}`}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
    </div>

    <div className="DeleteItem" onClick={() => {
     
    let itemNoToFind = item.no;
     
    let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
     
    setWindows(updatedWindows);
    }}>
      <AiOutlineClose/>
    </div>

    <hr></hr>
    <hr></hr>
    <hr></hr>
   

  </div>
  </Draggable>

  </>)})}

  {filteredData.map((item, index) => {if(item.direction === 'front') return(<>

    <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: AccesoriesLineVisible2D }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>
<div className='line_additional'></div>
<div className='line_additional2'></div>
</div>
        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
    </div>
  
  <Draggable  axis="x" onDrag={handleDragDoor1(index)} /*positionOffset={{ x: `${item.x * 2}px`, y: 0 }}*/>
  <div className="door1" 
  onClick={() => { console.log(item.x_2d)}}
  onMouseMove={AccesoryVisibleSetter} 
  onMouseLeave={AccesoryVisibleOff} 
  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}
  >

  <div className='helperline-vertical' style={{ display: AccesoriesLineVisible2D }}>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>

  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {filteredData1.map((item, index) => {if(item.direction === 'front') return(<>

  <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: AccesoriesLineVisible2D  }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>
<div className='line_additional'></div>
<div className='line_additional2'></div>
</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>
  
  <Draggable  axis="x" onDrag={handleDragDoor2(index)}>
  <div className="door2" 

  onMouseMove={AccesoryVisibleSetter} 
  onMouseLeave={AccesoryVisibleOff} 
  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}>

  <div className='helperline-vertical' 
   style={{ display: AccesoriesLineVisible2D  }}
   >
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>

  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  <hr style={{ background: DoorObrobkaColor1 }}></hr>
  </div>
  </Draggable>

  </>)})}

  {FilteredGate.map((item, index) => {if(item.direction === 'front') return(<>

  <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, bottom: '210px', height:    '0px', position: 'absolute' }}>
  <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

  <div className='line_container' style={{ display: AccesoriesLineVisible2D }}>

<div className='line_additional'></div>
<div className='line_additional2'></div>


  </div>

  <span style={{ display: AccesoriesLineVisible2D }}>113,5</span >

  <div className='line_container' style={{ display: AccesoriesLineVisible2D }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
  </div> 

  </div>  
  </div> 

  <Draggable disabled={HandleDragOnOff}  axis="x" onDrag={handleDragGate(index)}>
  <div className="gate"  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ borderColor: GateColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}>

  <div className='helperline-vertical'  style={{ display: AccesoriesLineVisible2D  }}>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>

  <div className='DraggableContainerHorizontal'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
  <Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY(index)} position={{ x: 0, y: item.scaleYDragModel }}>
  <div className='horizontal-arrow' ref={GateToScale}></div>
  </Draggable> 
  </div>

  <div className='DraggableContainerVertical'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
  <Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest(index)} position={{x: item.scaleXDragModel, y: 0, }}>
  <div className={`vertical-arrow ${ScaleClassGateToChange}`}></div>
  </Draggable> 
  </div>  
  
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedGates = Gates.filter(item => item.no !== itemNoToFind);
    setGates(updatedGates);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})} 

  {Holes.map((item, index) => {if(item.direction === 'front') return (<>
  
  <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, top: '210px', height: '2px', position: 'absolute' }}>
<div className='box-additional' style={{ marginRight: `${item.x * 20}px`, marginLeft: `-${item.x  * 20}px`  }}>

<div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

<span>113,5</span >

<div className='line_container'> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
</div> 

</div>  
</div> 

<Draggable disabled={HandleDragOnOff} axis="x" onDrag={handleDragHole(index)}>
<div className="hole" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}> 

<div className='helperline-vertical'>
      <div className='box-additional'>

        <div className='line_container'>

        <div className='line_additional'></div>
        <div className='line_additional2'></div>


        </div>
      <span>212</span>

      <div className='line_container' style={{ marginTop: '175px' }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
        </div>

      </div>
</div> 

<div className='DraggableContainerHorizontal' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
<Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY1(index)} position={{ x: 0, y: item.scaleYDragModel }}>
<div className='horizontal-arrow'></div>
</Draggable> 
</div>

<div className='DraggableContainerVertical' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
<Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest1(index)} position={{x: item.scaleXDragModel, y: 0, }}>
<div className={`vertical-arrow`}></div>
</Draggable> 
</div>


<div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedHoles = Holes.filter(item => item.no !== itemNoToFind);
  setHoles(updatedHoles);
  }}>
    <AiOutlineClose/>
</div>
</div>
</Draggable>

</>)})}
  
  </div>

</div>
<div id="back" className="Skies" style={{ display: twoDView3, height: `${ActualHeight * 100} + 100vh`, marginBottom: `${ActualHeight  * 10 + 10}em`}}>
<div className="backbuilding"style={{ 
  background: elevationColor, 
  borderColor: brobkiColor, 
  width: `${ActualHailWidth * 50}px`, 
  height: `${ActualHeight * 100 }px`,
  clipPath: (Roof1 ? cartonViewRoof2 : cartonViewRoof) }}>
 
 {/** windows */}

{FilteredWindowData1.map((item, index) => { if(item.direction === 'back') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D  }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDragback(index)} >
<div className={`Window_type1_${item.windowHeight}`} onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 50}px` }}>

  <div className='helperline-vertical' style={{ display: AccesoriesLineVisible2D  }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
      <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

      <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>
  <div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
  setWindows(updatedWindows);
  }}>
    <AiOutlineClose/>
  </div>
</div>
</Draggable>

</>)})}

{FilteredWindowData2.map((item, index) => { console.log(item);if(item.direction === 'back') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D  }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag1back(index)}>
<div className={`Window_type2_${item.windowHeight}`} onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 50}px`}}>

<div className='helperline-vertical' style={{ display: AccesoriesLineVisible2D  }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span>146</span>

    <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<div className="DeleteItem" onClick={() => {

let itemNoToFind = item.no;

let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);

setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>

</div>
</Draggable>

</>)})}

{FilteredWindowData3.map((item, index) => { if(item.direction === 'back') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D  }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag2back(index)}>
<div className={`Window_type3_${item.windowHeight}`} onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows }px` }}>

  <div className='helperline-vertical' style={{ display: AccesoriesLineVisible2D  }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>

<div className="DeleteItem" onClick={() => {
   
let itemNoToFind = item.no;

let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
 
setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>
<hr></hr>

</div>
</Draggable>

</>)})}

{FilteredWindowData4.map((item, index) => { if(item.direction === 'back') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D  }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag3back(index)} style={{ top: `${ActualHeight * CartonHeightFixerWindows }px` }}>
<div className={`Window_type4_${item.windowHeight}`} onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 50}px` }}>

<div className='helperline-vertical'>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<div className="DeleteItem" onClick={() => {
 
let itemNoToFind = item.no;
 
let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
 
setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>
<hr></hr>
<hr></hr>


</div>
</Draggable>

</>)})}


    {/** windows */}


    {/** doors */}

  {filteredData.map((item, index) => { if(item.direction === 'back') return(<>

  <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 
  
  <Draggable axis="x" onDrag={handleDragDoor1Back(index)}>
  <div className="door1"  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff}  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}>
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {filteredData1.map((item, index) => { if(item.direction === 'back') return(<>
  
  <div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`,  display: AccesoriesLineVisible2D }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>  

  <Draggable  axis="x" onDrag={handleDragDoor2Back(index)}>
  <div className="door2" onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff}  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}>
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  <hr style={{ background: DoorObrobkaColor1 }}></hr>
  </div>
  </Draggable>

  </>)})}

    {/** doors */}

    {FilteredGate.map((item, index) => {if(item.direction === 'back') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, bottom: '210px', height:    '0px', position: 'absolute' }}>
<div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

<div className='line_container' style={{ display: AccesoriesLineVisible2D }}>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

<span style={{ display: AccesoriesLineVisible2D }}>113,5</span >

<div className='line_container' style={{ display: AccesoriesLineVisible2D }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
</div> 

</div>  
</div> 

<Draggable disabled={HandleDragOnOff}  axis="x" onDrag={handleDragGate(index)}>
<div className="gate"  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ borderColor: GateColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}>

<div className='helperline-vertical'  style={{ display: AccesoriesLineVisible2D  }}>
      <div className='box-additional'>

        <div className='line_container'>

        <div className='line_additional'></div>
        <div className='line_additional2'></div>


        </div>
      <span>212</span>

      <div className='line_container' style={{ marginTop: '175px' }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
        </div>

      </div>
</div>

<div className='DraggableContainerHorizontal'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
<Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY(index)} position={{ x: 0, y: item.scaleYDragModel }}>
<div className='horizontal-arrow' ref={GateToScale}></div>
</Draggable> 
</div>

<div className='DraggableContainerVertical'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
<Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest(index)} position={{x: item.scaleXDragModel, y: 0, }}>
<div className={`vertical-arrow ${ScaleClassGateToChange}`}></div>
</Draggable> 
</div>  

<div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedGates = Gates.filter(item => item.no !== itemNoToFind);
  setGates(updatedGates);
  }}>
    <AiOutlineClose/>
</div>
</div>
</Draggable>

</>)})}

{FilteredStairs2Array.map((item, index) => {if(item.direction === 'back') return(<>
  {console.log(item.direction)}
  <Draggable axis="x" onDrag={handleDragStairs2(index)}>
  <div className="stairs2_outside">
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

{Holes.map((item, index) => {if(item.direction === 'back') return (<>
  
    <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, top: '210px', height: '2px', position: 'absolute' }}>
  <div className='box-additional' style={{ marginRight: `${item.x * 20}px`, marginLeft: `-${item.x  * 20}px`  }}>

  <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


  </div>

  <span>113,5</span >

  <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
  </div> 

  </div>  
  </div> 

  <Draggable disabled={HandleDragOnOff} axis="x" onDrag={handleDragHole(index)}>
  <div className="hole" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}> 

  <div className='helperline-vertical'>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 

  <div className='DraggableContainerHorizontal' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
  <Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY1(index)} position={{ x: 0, y: item.scaleYDragModel }}>
  <div className='horizontal-arrow'></div>
  </Draggable> 
  </div>

  <div className='DraggableContainerVertical' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
  <Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest1(index)} position={{x: item.scaleXDragModel, y: 0, }}>
  <div className={`vertical-arrow`}></div>
  </Draggable> 
  </div>


  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedHoles = Holes.filter(item => item.no !== itemNoToFind);
    setHoles(updatedHoles);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  <div className="Roof" style={{ background: AttykaColor, width: `${100}px`,display: 'none'  }}></div> 

</div>
</div>
<div id="right" className="Skies" style={{ display: twoDView4 , height: `${ActualHeight * 100} + 100vh`, marginBottom: `${ActualHeight  * 10 + 10}em`}}>

  <div className="building _side_" style={{ background: elevationColor, borderColor: brobkiColor, width: `${ActualHailLenght * 100}px`, height: `${ActualHeight * 100 - 50}px` }}>

 {/** windows */}

 {FilteredStairs1Array.map((item, index) => {if(item.direction === 'back') return(<>
  <Draggable axis="x" onDrag={handleDragStairs1(index)}>
  <div className="stairs1_outside">
    <div className='door_stairs'  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}></div>
    <div className='stairs_itself1'>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    </div>
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

{FilteredWindowData1.map((item, index) => {if(item.direction === 'right') return (<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDragleft(index)}>
<div className={`Window_type1_${item.windowHeight}`} onClick={() => { console.log(item) }} style={{ top: `${ActualHeight * CartonHeightFixerWindows - 200}px` }}>

  <div className='helperline-vertical' style={{ display: 'none' }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>
  <div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
  setWindows(updatedWindows);
  }}>
    <AiOutlineClose/>
  </div>
</div>
</Draggable>

</>)})}

{FilteredWindowData2.map((item, index) => {if(item.direction === 'right') return (<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag1left(index)}>
<div className={`Window_type2_${item.windowHeight}`} style={{ top: `${(ActualHeight / 2) + 100}px` }}> 

<div className='helperline-vertical' style={{ display: 'none' }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span>146</span>

    <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>

<div className="DeleteItem" onClick={() => {
  //console.log(item)
let itemNoToFind = item.no;

let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);

setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>

</div>
</Draggable>

</>)})}

{FilteredWindowData3.map((item, index) => {if(item.direction === 'right') return (<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag2left(index)}>
<div className={`Window_type3_${item.windowHeight}`}>

  <div className='helperline-vertical' style={{ display: 'none' }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>

<div className="DeleteItem" onClick={() => {
   
let itemNoToFind = item.no;

let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
 
setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>
<hr></hr>

</div>
</Draggable>

</>)})}

{FilteredWindowData4.map((item, index) => {if(item.direction === 'right') return (<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag3left(index)}>
<div className={`Window_type4_${item.windowHeight}`} style={{ top: `${(ActualHeight /2) + 100}px` }}>

<div className='helperline-vertical' style={{ display: 'none' }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<div className="DeleteItem" onClick={() => {
 
let itemNoToFind = item.no;
 
let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
 
setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>
<hr></hr>
<hr></hr>


</div>
</Draggable>

</>)})}

 {/** windows */}

    
  {filteredData.map((item, index) => {if(item.direction === 'right') return (<>

  <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter - 170 + CartonHeightFixerWindows / 10 }px` }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 

  <Draggable  axis="x" onDrag={handleDragDoor1Right(index)}>
  <div className="door1" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}> 

  <div className='helperline-vertical'>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div>   

  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  <hr style={{ background: DoorObrobkaColor1 }}></hr>
  </div>
  </Draggable>

  </>)})}

  {filteredData1.map((item, index) => {if(item.direction === 'right') return (<>

  <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter - 170 + CartonHeightFixerWindows / 10 }px` }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 
  
  <Draggable axis="x" onDrag={handleDragDoor2Right(index)}>
  <div className="door2" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}>

  <div className='helperline-vertical'>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {Holes.map((item, index) => {if(item.direction === 'right') return (<>
  
    <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, top: '210px', height: '2px', position: 'absolute' }}>
  <div className='box-additional' style={{ marginRight: `${item.x * 20}px`, marginLeft: `-${item.x  * 20}px`  }}>

  <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


  </div>

  <span>113,5</span >

  <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
  </div> 

  </div>  
  </div> 

  <Draggable disabled={HandleDragOnOff} axis="x" onDrag={handleDragHoleSides(index)}>
  <div className="hole" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}> 

  <div className='helperline-vertical'>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 

  <div className='DraggableContainerHorizontal' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
  <Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY1(index)} position={{ x: 0, y: item.scaleYDragModel }}>
  <div className='horizontal-arrow'></div>
  </Draggable> 
  </div>

  <div className='DraggableContainerVertical' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
  <Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest1(index)} position={{x: item.scaleXDragModel, y: 0, }}>
  <div className={`vertical-arrow`}></div>
  </Draggable> 
  </div>


  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedHoles = Holes.filter(item => item.no !== itemNoToFind);
    setHoles(updatedHoles);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {FilteredStairs1Array.map((item, index) => {if(item.direction === 'right') return(<>
  <Draggable axis="x" onDrag={handleDragStairs1Sides(index)}>
  <div className="stairs1_outside">
    <div className='door_stairs'  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}></div>
    <div className='stairs_itself1'>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    </div>
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {FilteredStairs2Array.map((item, index) => {if(item.direction === 'right') return(<>
  <Draggable axis="x" onDrag={handleDragStairs2Sides(index)}>
  <div className="stairs2_outside">
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {FilteredGate.map((item, index) => {if(item.direction === 'right') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, bottom: '210px', height:    '0px', position: 'absolute' }}>
<div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

<div className='line_container' style={{ display: AccesoriesLineVisible2D }}>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

<span style={{ display: AccesoriesLineVisible2D }}>113,5</span >

<div className='line_container' style={{ display: AccesoriesLineVisible2D }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
</div> 

</div>  
</div> 

<Draggable disabled={HandleDragOnOff}  axis="x" onDrag={handleDragGateSides(index)}>
<div className="gate"  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ borderColor: GateColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}>

<div className='helperline-vertical'  style={{ display: AccesoriesLineVisible2D  }}>
      <div className='box-additional'>

        <div className='line_container'>

        <div className='line_additional'></div>
        <div className='line_additional2'></div>


        </div>
      <span>212</span>

      <div className='line_container'> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
        </div>

      </div>
</div>

<div className='DraggableContainerHorizontal'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
<Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY(index)} position={{ x: 0, y: item.scaleYDragModel }}>
<div className='horizontal-arrow' ref={GateToScale}></div>
</Draggable> 
</div>

<div className='DraggableContainerVertical'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
<Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest(index)} position={{x: item.scaleXDragModel, y: 0, }}>
<div className={`vertical-arrow ${ScaleClassGateToChange}`}></div>
</Draggable> 
</div>  

<div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedGates = Gates.filter(item => item.no !== itemNoToFind);
  setGates(updatedGates);
  }}>
    <AiOutlineClose/>
</div>
</div>
</Draggable>

</>)})} 

  <div className="Roof _side_right" style={{ background: AttykaColor, width: `${ActualHailLenght * 100}px` }}></div>  

  </div>

</div>
<div id="left" className="Skies" style={{ display: twoDView5, height: `${ActualHeight * 100} + 100vh`, marginBottom: `${ActualHeight  * 10 + 10}em`}}>

  <div className="building _side_" style={{ background: elevationColor, borderColor: brobkiColor, height: `${ActualHeight * 100}px`, width: `${ActualHailLenght * 100}px` }}>

  <div className="Roof _side_right" style={{ background: AttykaColor, width: `${ActualHailLenght * 100}px` }}></div> 

 {/** windows */}

 {FilteredWindowData1.map((item, index) => {if(item.direction === 'left') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDragright(index)}>
<div className={`Window_type1_${item.windowHeight}`} onClick={() => { console.log(item) }} style={{ top: `${(ActualHeight / 2) + 100}px` }}>

  <div className='helperline-vertical' style={{ display: 'none' }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>
  <div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
  setWindows(updatedWindows);
  }}>
    <AiOutlineClose/>
  </div>
</div>
</Draggable>

</>)})}

{FilteredWindowData2.map((item, index) => {if(item.direction === 'left') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag1right(index)}>
<div className={`Window_type2_${item.windowHeight}`} style={{ top: `${(ActualHeight / 2) + 100}px` }}> 

<div className='helperline-vertical' style={{ display: 'none' }}>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div> 

<div className="DeleteItem" onClick={() => {
  //console.log(item)
let itemNoToFind = item.no;

let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);

setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>

</div>
</Draggable>

</>)})}

{FilteredWindowData3.map((item, index) => {if(item.direction === 'left') return(<>

<div  className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag2right(index)}>
<div className={`Window_type3_${item.windowHeight}`}>

  <div className='helperline-vertical'>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
  </div>

<div className="DeleteItem" onClick={() => {
   
let itemNoToFind = item.no;

let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
 
setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>
<hr></hr>

</div>
</Draggable>

</>)})}

{FilteredWindowData4.map((item, index) =>{if(item.direction === 'left') return( <>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter + CartonHeightFixerWindows }px`, display: 'none' }}>
    <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

    <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

    <span>113,5</span>

      <div className='line_container'> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<Draggable onDrag={handleDrag3right(index)}>
<div className={`Window_type4_${item.windowHeight}`} style={{ top: `${(ActualHeight /2) + 100}px` }}>

<div className='helperline-vertical'>
    <div className='box-additional'>

      <div className='line_container'>

      <div className='line_additional'></div>
      <div className='line_additional2'></div>


      </div>
    <span id={`height_${item.windowHeight}`}>{item.windowHeight}</span>

    <div className={`line_container_${item.windowHeight}`}> 
      <div className='line_additional'></div>
      <div className='line_additional2'></div> 
      </div>

    </div>
</div>

<div className="DeleteItem" onClick={() => {
 
let itemNoToFind = item.no;
 
let updatedWindows = Windows.filter(item => item.no !== itemNoToFind);
 
setWindows(updatedWindows);
}}>
  <AiOutlineClose/>
</div>

<hr></hr>
<hr></hr>
<hr></hr>


</div>
</Draggable>

</>)})}

 {/** windows */}  

  {filteredData.map((item, index) => {if(item.direction === 'left') return(<>

  <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter - 170 + CartonHeightFixerWindows / 10 }px`, display: 'none' }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 
  
  <Draggable  axis="x" onDrag={handleDragDoor1Left(index)}>
  <div className="door1" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}>

  <div className='helperline-vertical'>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 

  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {filteredData1.map((item, index) => {if(item.direction === 'left') return(<>
  
  <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, marginTop: `-${item.y - 40}px`, top: `${CartonHeightLineSetter - 170 + CartonHeightFixerWindows / 10 }px`, display: 'none' }}>
        <div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

        <div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

        <span>113,5</span>

          <div className='line_container'> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 

  <Draggable  axis="x" onDrag={handleDragDoor2Left(index)}>
  <div className="door2" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}>

  <div className='helperline-vertical'>
        <div className='box-additional'>

          <div className='line_container'>

          <div className='line_additional'></div>
          <div className='line_additional2'></div>


          </div>
        <span>212</span>

        <div className='line_container' style={{ marginTop: '175px' }}> 
          <div className='line_additional'></div>
          <div className='line_additional2'></div> 
          </div>

        </div>
  </div> 

  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedDoors = Doors.filter(item => item.no !== itemNoToFind);
    setDoors(updatedDoors);
    }}>
      <AiOutlineClose/>
  </div>
  <hr style={{ background: DoorObrobkaColor1 }}></hr>
  </div>
  </Draggable>

  </>)})}

  {FilteredGate.map((item, index) => {if(item.direction === 'left') return(<>

<div className='helperline-horizontal' style={{ width:  `${ActualHailWidth * 50}px`, bottom: '210px', height:    '0px', position: 'absolute' }}>
<div className='box-additional' style={{ marginLeft: `${item.x * 5}px`, marginRight: `-${item.x  / 3}px`  }}>

<div className='line_container' style={{ display: AccesoriesLineVisible2D }}>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

<span style={{ display: AccesoriesLineVisible2D }}>113,5</span >

<div className='line_container' style={{ display: AccesoriesLineVisible2D }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
</div> 

</div>  
</div> 

<Draggable disabled={HandleDragOnOff}  axis="x" onDrag={handleDragGateSides(index)}>
<div className="gate"  onMouseMove={AccesoryVisibleSetter} onMouseLeave={AccesoryVisibleOff} style={{ borderColor: GateColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}>

<div className='helperline-vertical'  style={{ display: AccesoriesLineVisible2D  }}>
      <div className='box-additional'>

        <div className='line_container'>

        <div className='line_additional'></div>
        <div className='line_additional2'></div>


        </div>
      <span>212</span>

      <div className='line_container' style={{ marginTop: '175px' }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
        </div>

      </div>
</div>

<div className='DraggableContainerHorizontal' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
<Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY(index)} position={{ x: 0, y: item.scaleYDragModel }}>
<div className='horizontal-arrow' ref={GateToScale}></div>
</Draggable> 
</div>

<div className='DraggableContainerVertical'  onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
<Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest(index)} position={{x: item.scaleXDragModel, y: 0, }}>
<div className={`vertical-arrow ${ScaleClassGateToChange}`}></div>
</Draggable> 
</div>  

<div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedGates = Gates.filter(item => item.no !== itemNoToFind);
  setGates(updatedGates);
  }}>
    <AiOutlineClose/>
</div>
</div>
</Draggable>

</>)})} 

{Holes.map((item, index) => {if(item.direction === 'left') return (<>
  
  <div className='helperline-horizontal' style={{ width:  `${ActualHailLenght * 100}px`, top: '210px', height: '2px', position: 'absolute' }}>
<div className='box-additional' style={{ marginRight: `${item.x * 20}px`, marginLeft: `-${item.x  * 20}px`  }}>

<div className='line_container'>

<div className='line_additional'></div>
<div className='line_additional2'></div>


</div>

<span>113,5</span >

<div className='line_container'> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
</div> 

</div>  
</div> 

<Draggable disabled={HandleDragOnOff} axis="x" onDrag={handleDragHoleSides(index)}>
<div className="hole" style={{ background:DoorColor1, borderColor: DoorObrobkaColor1, width: `${155 + item.sc}px`, height: `${135 + item.scY}px`}}> 

<div className='helperline-vertical'>
      <div className='box-additional'>

        <div className='line_container'>

        <div className='line_additional'></div>
        <div className='line_additional2'></div>


        </div>
      <span>212</span>

      <div className='line_container' style={{ marginTop: '175px' }}> 
        <div className='line_additional'></div>
        <div className='line_additional2'></div> 
        </div>

      </div>
</div> 

<div className='DraggableContainerHorizontal' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}>
<Draggable axis='y' grid={[15, 15]} bounds="parent" onDrag={handleStopTestY1(index)} position={{ x: 0, y: item.scaleYDragModel }}>
<div className='horizontal-arrow'></div>
</Draggable> 
</div>

<div className='DraggableContainerVertical' onMouseMove={HandleDragBlock} onMouseLeave={HandleDragBlockOff}> 
<Draggable axis='x' grid={[15, 15]} bounds="parent" onStop={handleStopTest1(index)} position={{x: item.scaleXDragModel, y: 0, }}>
<div className={`vertical-arrow`}></div>
</Draggable> 
</div>


<div className="DeleteItem" onClick={() => {
  let itemNoToFind = item.no;
  let updatedHoles = Holes.filter(item => item.no !== itemNoToFind);
  setHoles(updatedHoles);
  }}>
    <AiOutlineClose/>
</div>
</div>
</Draggable>

</>)})}

{FilteredStairs1Array.map((item, index) => {if(item.direction === 'left') return(<>
  <Draggable axis="x" onDrag={handleDragStairs1Sides(index)}>
  <div className="stairs1_outside">
    <div className='door_stairs'  style={{ background:DoorColor1, borderColor: DoorObrobkaColor1}}></div>
    <div className='stairs_itself1'>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
    </div>
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}

  {FilteredStairs2Array.map((item, index) => {if(item.direction === 'left') return(<>
  <Draggable axis="x" onDrag={handleDragStairs2Sides(index)}>
  <div className="stairs2_outside">
  <div className="DeleteItem" onClick={() => {
    let itemNoToFind = item.no;
    let updatedStairs = Stairs.filter(item => item.no !== itemNoToFind);
    setStairs(updatedStairs);
    }}>
      <AiOutlineClose/>
  </div>
  </div>
  </Draggable>

  </>)})}
 
 <div className="cokol" style={{ width: `${ActualHailLenght * 100}px` }} ></div></div>
</div>
</div>
</Draggable>
     </>
  )
}

export default CartonView