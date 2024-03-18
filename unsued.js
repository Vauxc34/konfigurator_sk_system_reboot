/*const DataReader = async (link) => {
  
const localState = []; 
  let newLink = link.split('/projekt=').join("")
  let NewDataHail = ActualDataHail.length > 1 ? ActualDataHail.split('projekt=').join("") : 'no-project'  

  console.log(NewDataHail)

  const docRef = doc(db, "configurations", NewDataHail);
  const docSnap = await getDoc(docRef);  
  
        if (ActualDataHail.length > 1 && docSnap.exists()) {
      console.log(docSnap);
      localState.push(docSnap.data());
      console.log(localState);
    } else {
      console.log("No such document!");
    } if (NewDataHail == newLink) {
  
      /* roof type */ 
  
      if (localState[0].Roof1 == true) {
        setActualSelectedRoof1(SelectedRoof[0].imgSelect)
        setActualSelectedRoof2(SelectedRoof[1].img)
        setActualSelectedRoof3(SelectedRoof[2].img)
    } else if (localState[0].Roof2 == true) {
        setActualSelectedRoof1(SelectedRoof[0].img)
        setActualSelectedRoof2(SelectedRoof[1].imgSelect)
        setActualSelectedRoof3(SelectedRoof[2].img)
    } else if (localState[0].Roof3 == true) {
      setActualSelectedRoof1(SelectedRoof[0].img)
      setActualSelectedRoof2(SelectedRoof[1].img)
      setActualSelectedRoof3(SelectedRoof[2].imgSelect)
    }
    
      setRoof1(localState[0].Roof1)
      setRoof2(localState[0].Roof2)
      setRoof3(localState[0].Roof3)
  
      /* roof type */
  
      /* measurement */
  
      setRangeSetterLengthtHail(localState[0].LengthS);
      setWidthSetterLengthtHail(localState[0].WidthS)
      setRangeSetterHeightHail(localState[0].HeightS)
      setFundamentNumber(localState[0].SubstructureS)
      setAngle1Range(localState[0].AngleRoof1S)
      setAngle2Range(localState[0].AngleRoof2S)
      setTextureOutside(localState[0].ElevationTextureS) 
      setFrames(localState[0].FramesSetted)     
      setOkapLeftActualValue(localState[0].OkapLeftSetted)
      setOkapRightActualValue(localState[0].OkapRightSetted)
      setActualOkapPrzodM(localState[0].OkapPrzodSetted)
      setActualOkapTylM(localState[0].OkapTylSetted)
      setIsAntresolaPrzod(localState[0].isAntresolaSettedPrzod)
      setIsAntresolaTyl(localState[0].isAntresolaSettedTyl)
  
      if (localState[0].LengthS == 10) { 
        setFrames([
          {no: 0, pos: 20,  x1lamele: 89.5, OffsetXX :0, OffSetXX1: 0,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},  
        ]) 
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0) 
        setLameleOffset(161.5)
      }  else if (localState[0].LengthS < 15) {
        setFrames([
          {no: 0, pos: 23, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2  },  
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        setLameleOffset(161.5)
         
      }  else if (
        localState[0].LengthS == 15 || 
        localState[0].LengthS == 16 || 
        localState[0].LengthS == 17 || 
        localState[0].LengthS == 18 || 
        localState[0].LengthS == 19) {
        setFrames([
          {no: 0, pos: 100, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2  },  
          {no: 0, pos: -60, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2  },   
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        setLameleOffset(161.5)
        
      }  else if (
        localState[0].LengthS == 20 || 
        localState[0].LengthS == 21 || 
        localState[0].LengthS == 22 || 
        localState[0].LengthS == 23 || 
        localState[0].LengthS == 24 || 
        localState[0].LengthS == 25 || 
        localState[0].LengthS == 26 || 
        localState[0].LengthS == 27 || 
        localState[0].LengthS == 28 || 
        localState[0].LengthS == 29) {
        setFrames([
          {no: 0, pos: -140, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},
          {no: 1, pos: 10, x1lamele: 10,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},  
          {no: 0, pos: 170, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},  
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0)
        setLameleOffset(281.5)
      }  else if (
        localState[0].LengthS == 30 ||
        localState[0].LengthS == 31 ||
        localState[0].LengthS == 32 ||
        localState[0].LengthS == 33 ||
        localState[0].LengthS == 34 ||
        localState[0].LengthS == 35 ||
        localState[0].LengthS == 36 ||
        localState[0].LengthS == 37 ||
        localState[0].LengthS == 38 ||
        localState[0].LengthS == 39  ) {
        setFrames([
          {no: 0, pos: -205, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},
          {no: 1, pos: 5, x1lamele: 10,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 2, pos: 235, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},  
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0)
        setLameleOffset(401.5)
      }  else if (
        localState[0].LengthS == 40 ||
        localState[0].LengthS == 41 ||
        localState[0].LengthS == 42 ||
        localState[0].LengthS == 43 ||
        localState[0].LengthS == 44 ||
        localState[0].LengthS == 45 ||
        localState[0].LengthS == 46 ||
        localState[0].LengthS == 47 ||
        localState[0].LengthS == 48 ||
        localState[0].LengthS == 49  ) {
        setFrames([
          {no: 0, pos: -345.5, OffsetXX :0, OffSetXX1: 0, frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},
          {no: 1, pos: -180.5, x1lamele: 10,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 2, pos: 10, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 3, pos: 220.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 4, pos: 385.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0)
        setLameleOffset(521.5)
      }  else if (
        localState[0].LengthS == 50 ||
        localState[0].LengthS == 51 ||
        localState[0].LengthS == 52 ||
        localState[0].LengthS == 53 ||
        localState[0].LengthS == 54 ||
        localState[0].LengthS == 55 ||
        localState[0].LengthS == 56 ||
        localState[0].LengthS == 57 ||
        localState[0].LengthS == 58 ||
        localState[0].LengthS == 59  ) {
        setFrames([
          {no: 0, pos: -432.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 1, pos: -240, x1lamele: 10,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 2, pos: 30, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 3, pos: 270.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 4, pos: 493.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0)
        setLameleOffset(641.5)
      } else if (
        localState[0].LengthS == 60 ||
        localState[0].LengthS == 61 ||
        localState[0].LengthS == 62 ||
        localState[0].LengthS == 63 ||
        localState[0].LengthS == 64 ||
        localState[0].LengthS == 65 ||
        localState[0].LengthS == 66 ||
        localState[0].LengthS == 67 ||
        localState[0].LengthS == 68 ||
        localState[0].LengthS == 69  ) {
        setFrames([
          {no: 0, pos: -591.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 1, pos: -310, x1lamele: 10,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 2, pos: -100, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 3, pos:  170, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 4, pos: 420, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 5, pos: 623.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0)
        setLameleOffset(761.5)
      } else if (
        localState[0].LengthS == 70 ||
        localState[0].LengthS == 71 ||
        localState[0].LengthS == 72 ||
        localState[0].LengthS == 73 ||
        localState[0].LengthS == 74 ||
        localState[0].LengthS == 75 ) {
        setFrames([
          {no: 0, pos: -720.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 1, pos: -510, x1lamele: 10,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 2, pos: -250, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 3, pos:  0, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 4, pos: 220, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2}, 
          {no: 5, pos: 500, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},
          {no: 6, pos: 738.5, x1lamele: 230,  frameRoofLast: 0, OffsetLeft: Frame1_1, OffsetRight: Frame1_2},
        ])
    
        setRozstaw(2)
        setMaxRozstaw(2)
        setMinRozstaw(1)
        setActualRozstaw(4)
        //setRozstawOffset(0)
        setRozstawFrameUp(0)
        setLameleOffset(881.5)
      }    
  
      /* roof 1 */
  
      if (localState[0].Roof1 == true && localState[0].ElevationTextureS == 'courugated_metal/Profiled-Sheet-Metal-Architextures.jpg' ) {
        setUVSsett(modifiedUV2)
        setUVSsett1(modifiedUV2)
        setUVSsett2(uvs)
        setUVSsett2Roof(uvs_roof_base_2)
        setTextureRepeating({ no: 1.8, no2: 4})
        setWallWithModifiedUV(false)
        setWallWithoutModifiedUV(true)
        setWallWithoutModifiedUV1(false)
      }  else if (localState[0].Roof1 == true && localState[0].ElevationTextureS == 
      "basic/plain_poziomo_basic__.jpg" ||  
      "basic/plain_poziomo_basic1.jpg" ||
      "basic/plain_poziomo_basic2.jpg" ||
      "basic/plain_poziomo_basic3.jpg") {
        setWallWithModifiedUV(true)
        setWallWithoutModifiedUV(false)
        setWallWithoutModifiedUV1(false)
      } 
  
      /* roof 1 */
      
      /* roof 2 */ 
        
    
      if (localState[0].Roof2 == true && localState[0].ElevationTextureS == 'courugated_metal/Profiled-Sheet-Metal-Architextures.jpg' ) {
        setUVSsett(modifiedUV2)
        setUVSsett1(modifiedUV2)
        setUVSsett2(uvs)
        setUVSsett2Roof(uvs_roof_base_2)
        setTextureRepeating({ no: 1.8, no2: 4})
        setWallWithModifiedUV(false)
        setWallWithoutModifiedUV(true)
        setWallWithoutModifiedUV1(false)
      }  else if (localState[0].Roof2 == true && localState[0].ElevationTextureS  == 
      "basic/plain_poziomo_basic__.jpg" ||  
      "basic/plain_poziomo_basic1.jpg" ||
      "basic/plain_poziomo_basic2.jpg" ||
      "basic/plain_poziomo_basic3.jpg") {
        setWallWithModifiedUV(false)
        setWallWithoutModifiedUV(true)
        setWallWithoutModifiedUV1(false)
      } 
  
      /* roof 2 */ 
  
      /* roof 3 */
  
      if (localState[0].Roof3 == true && localState[0].ElevationTextureS == 'courugated_metal/Profiled-Sheet-Metal-Architextures.jpg' ) {    
  
      setUVSsett(modifiedUV2)
      setUVSsett1(modifiedUV2)
      setUVSsett2(uvs)
      setUVSsett2Roof(uvs_roof_base_2)
      setTextureRepeating({ no: 1.8, no2: 4})
      setWallWithModifiedUV(false)
      setWallWithoutModifiedUV(true)
      setWallWithoutModifiedUV1(false)
   
      } else if (localState[0].Roof3 == true && localState[0].ElevationTextureS == 
          "basic/plain_poziomo_basic__.jpg" ||  
          "basic/plain_poziomo_basic1.jpg" ||
          "basic/plain_poziomo_basic2.jpg" ||
          "basic/plain_poziomo_basic3.jpg") {
            setWallWithModifiedUV(true)
            setWallWithoutModifiedUV(false)
            setWallWithoutModifiedUV1(true)
      }
        
    /* roof 3 */  
    
    setWallWithModifiedUV(localState[0].settedWithModifiedUV)
    setWallWithoutModifiedUV(localState[0].settedWithoutModifiedUV)
    setWallWithoutModifiedUV1(localState[0].settedWallWithoutModifiedUV1)
    setTextureOutsideBrightness(localState[0].BrightnessWallSetted)

    /* measurement */
  
    /* colors */ 
  
   setSelectedColorBrobka(localState[0].TreatmentColor);  
   setBrobkiColor(localState[0].TreatmentColor)
   setSelectedRoofColor(localState[0].RoofColor);  
   setRoofColor(localState[0].RoofColor)
   setSelectedColorElevation(localState[0].FascadeColor);  
   setElevationColor(localState[0].FascadeColor)
   setSelectedColorAttyka(localState[0].AtticaColor);  
   setAttykaColor(localState[0].AtticaColor)
   setSelectedConnectionColor(localState[0].JointColor);  
   setKolorLaczenia(localState[0].JointColor);   
   setSelectedWindowRama(localState[0].WindowFrameColor);  
   setWindowColorObroka1(localState[0].WindowFrameColor)
   setWindowColorRama1(localState[0].WindowColor)
   setSelectedWindowColor(localState[0].WindowColor);  
   setSelectedColorDoor(localState[0].DoorColor);  
   setDoorColor1(localState[0].DoorColor);  
   setSelectedColorDoorBrobka(localState[0].DoorFrameColor);  
   setDoorObrobkaColor1(localState[0].DoorFrameColor);  
   setSelectedColorGate(localState[0].GateColor);  
   setBramaColor(localState[0].GateColor)
   setBramaColorObrobka(localState[0].GateColorObrobka)   
   
  /* colors */  
   
  /* accesories */
  
   setWindows(localState[0].WindowsSelected)
   setDoors(localState[0].DoorsSelected)
   setGates(localState[0].GateSelected)
   setStairs(localState[0].StairsSelected)
   setHoles(localState[0].HoelsSelected)
  
  /* accesories */
      
  /* colors */  
  
  
    }  
};