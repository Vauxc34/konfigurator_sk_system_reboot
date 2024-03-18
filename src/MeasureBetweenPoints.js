import React, { useMemo, useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { Line, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const MeasureBetweenPoints = React.memo(({ idxX, idxY, scaleX, scaleY, ModelPos, direction, modelRef, dltaX, type, size, obj, windowHeight, RangeSetterLengthtHail, WidthSetterLengthtHail, box, position, pointA, pointB }) => {
    // Oblicz odległość
    const currentDltaX = dltaX;
    const distance = pointA.distanceTo(pointB);
    const [linePosition, setLinePosition] = useState();
    const [secondLinePosition, setSecondLinePosition] = useState();
    const [linePST, setLinePST] = useState();
    const [deletedColor, setDeletedColor] = useState(false);
    const [sub, setSub] = useState();
    const [add, setAdd] = useState();
    const [textSub, setTextSub] = useState();
    const [gateDistance, setGateDistance] = useState();
    const [pstHorizontalLine, setPstHorizontalLine] = useState();
    // Oblicz połowę drogi dla etykiety
    const windowHeight_4 = ['126', '146', '215', '235'];
    const [idx, setIdx] = useState(windowHeight_4.indexOf(windowHeight));

    const [boxse, setBoxse] = useState();
    useEffect(() => {
        if(modelRef !== undefined){
            if (modelRef.current) {
                const model = modelRef.current;
                const box = new THREE.Box3().setFromObject(model);
                setBoxse(box);
            }
        }
    }, [modelRef, scaleX]);

    useEffect(() => {
        const scale = [10, 20, 25, 30];
        const newIdx = scale.indexOf(scaleY);
        setIdx(newIdx);
    }, [scaleY])

    // Pamiętaj linie i tekst, aby uniknąć niepotrzebnych re-renderów
    const linePoints = useMemo(() => [pointA.toArray(), pointB.toArray()], [pointA, pointB]);
    const labelText = useMemo(() => ((direction === 'left' || direction === 'right' ? RangeSetterLengthtHail * 100 : WidthSetterLengthtHail * 100)), [WidthSetterLengthtHail, RangeSetterLengthtHail])
    const [firstLabelText, setFirstLabelText] = useState((labelText / 2).toString());
    const [secondLabelText, setSecondLabelText] = useState((labelText / 2).toString());
    const [firstXPosition, setFirstXPosition] = useState();
    const [secondXPosition, setSecondXPosition] = useState();
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const oneMeter = (direction === 'left' || direction === 'right' ? (RangeSetterLengthtHail * 100) : (WidthSetterLengthtHail * 100)) / distance;

    useEffect(() => {
        if(obj === '1_window'){
            setWidth(113);
            if(direction === 'front'){
                setFirstLabelText(Math.round((((position[0] - 3) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 31) * oneMeter))).toString());
                setFirstXPosition(position[0] - 3);
                setSecondXPosition(position[0] + 31);
                setAdd(15)
                setLinePST(10)
                setTextSub(25)
            }else if(direction === 'back'){
                setFirstLabelText(Math.round((((-position[0] - 67) * oneMeter) + (labelText / 2) - 59)).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 34) * oneMeter) + 59)).toString());
                setFirstXPosition(-position[0] - 67);
                setSecondXPosition(-position[0] - 34);
                setAdd(-50)
                setLinePST(80)
                setTextSub(95)
            }else if(direction === 'left'){
                setFirstLabelText(Math.round((((-position[2] - 130) * oneMeter) + (labelText / 2)) + 192).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 98) * oneMeter)) - 192).toString());
                setFirstXPosition(position[2] - 130);
                setSecondXPosition(position[2] - 98);
                setAdd(-115)
                setLinePST(140)
                setTextSub(155)
            }else if(direction === 'right'){
                setFirstLabelText(Math.round((((-position[2] - 200) * oneMeter) + (labelText / 2)) + 944.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 230) * oneMeter)) - 944.5).toString());
                setFirstXPosition(position[2] - 200);
                setSecondXPosition(position[2] - 230);
                setAdd(215)
                setLinePST(-190)
                setTextSub(-175)
            }
            if(windowHeight === '235'){
                setPstHorizontalLine(0)
                setLinePosition(-13);
                setSecondLinePosition(-75);
                setSub(0);
            }else if(windowHeight === '215'){
                setPstHorizontalLine(-10)
                setLinePosition(-22)
                setSecondLinePosition(-75);
                setSub(5)
            }else if(windowHeight === '146'){
                setPstHorizontalLine(-25)
                setLinePosition(-38)
                setSecondLinePosition(-75);
                setSub(12)
            }else if(windowHeight === '126'){
                setPstHorizontalLine(-35)
                setLinePosition(-48)
                setSecondLinePosition(-75);
                setSub(18)
            }else if(windowHeight === '63'){
                setPstHorizontalLine(-45)
                setLinePosition(-58)
                setSecondLinePosition(-75);
                setSub(22)
            }
        }else if(obj === '2_window'){
            if(windowHeight === '235'){
                if(size === '2_window_5'){
                    setPstHorizontalLine(-20)
                    setSecondLinePosition(-80)
                    setLinePosition(-34)
                    setSub(10)
                }else{
                    setPstHorizontalLine(-10)
                    setSecondLinePosition(-80)
                    setLinePosition(-28)
                    setSub(10)
                }
            }else if(windowHeight === '215'){
                setPstHorizontalLine(-15)
                setSecondLinePosition(-80)
                setLinePosition(-32)
                setSub(12.5)
            }else if(windowHeight === '146'){
                setPstHorizontalLine(-20)
                setSecondLinePosition(-80)
                setLinePosition(-36)
                setSub(12)
            }else if(windowHeight === '126'){
                setPstHorizontalLine(-25)
                setSecondLinePosition(-80)
                setLinePosition(-42)
                setSub(18)
            }else if(windowHeight === '63'){
                setPstHorizontalLine(-35)
                setSecondLinePosition(-80)
                setLinePosition(-52)
                setSub(22)
            }
            if(size === '2_window_7' || size === '2_window_6'){
                if(direction === 'front'){
                    setWidth(288);
                    setAdd(20)
                    setFirstXPosition(position[0] - 6);
                    setSecondXPosition(position[0] + 44);
                    setFirstLabelText(Math.round((((position[0] - 6) * oneMeter) + (labelText / 2))).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 44) * oneMeter))).toString());
                    setLinePST(10)
                    setTextSub(25)
                }else if(direction === 'back'){
                    setWidth(288);
                    setFirstLabelText(Math.round((((-position[0] - 70) * oneMeter) + (labelText / 2) - 59)).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 22) * oneMeter) + 59)).toString());
                    setFirstXPosition(-position[0] - 70);
                    setSecondXPosition(-position[0] - 22);
                    setAdd(-45)
                    setLinePST(80)
                    setTextSub(95)
                }else if(direction === 'left'){
                    setWidth(288);
                    setFirstLabelText(Math.round((((-position[2] - 145) * oneMeter) + (labelText / 2)) + 217.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[2]  - 94) * oneMeter)) - 217.5).toString());
                    setFirstXPosition(position[2] - 145);
                    setSecondXPosition(position[2] - 94);
                    setAdd(-120)
                    setLinePST(155)
                    setTextSub(170)
                }else if(direction === 'right'){
                    setWidth(288);
                    setFirstLabelText(Math.round((((-position[2] - 185) * oneMeter) + (labelText / 2)) + 944.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 235) * oneMeter)) - 944.5).toString());
                    setFirstXPosition(position[2] - 185);
                    setSecondXPosition(position[2] - 235);
                    setAdd(210)
                    setLinePST(-170)
                    setTextSub(-155)
                }
            }else{
                if(direction === 'front'){
                    setWidth(213);
                    setAdd(15)
                    setFirstXPosition(position[0] - 6);
                    setSecondXPosition(position[0] + 34);
                    setFirstLabelText(Math.round((((position[0] - 6) * oneMeter) + (labelText / 2))).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 34) * oneMeter))).toString());
                    setLinePST(10)
                    setTextSub(25)
                }else if(direction === 'back'){
                    setWidth(213);
                    setFirstLabelText(Math.round((((-position[0] - 70) * oneMeter) + (labelText / 2) - 59)).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 32) * oneMeter) + 59)).toString());
                    setFirstXPosition(-position[0] - 70);
                    setSecondXPosition(-position[0] - 32);
                    setAdd(-50)
                    setLinePST(80)
                    setTextSub(95)
                }else if(direction === 'left'){
                    setWidth(213);
                    setFirstLabelText(Math.round((((-position[2] - 132) * oneMeter) + (labelText / 2)) + 180).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 94) * oneMeter)) - 180).toString());
                    setFirstXPosition(position[2] - 132);
                    setSecondXPosition(position[2] - 94);
                    setAdd(-112)
                    setLinePST(145)
                    setTextSub(160)
                }else if(direction === 'right'){
                    setWidth(213);
                    setFirstLabelText(Math.round((((-position[2] - 195) * oneMeter) + (labelText / 2)) + 944.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 235) * oneMeter)) - 944.5).toString());
                    setFirstXPosition(position[2] - 195);
                    setSecondXPosition(position[2] - 235);
                    setAdd(215)
                    setLinePST(-185)
                    setTextSub(-170)
                }
            }
        }else if(obj === '3_window'){
            setTextSub(25)
            setLinePST(25)
            if(direction === 'front'){
                setWidth(310);
                setAdd(14)
                setFirstXPosition(position[0] - 16);
                setSecondXPosition(position[0] + 48);
                setFirstLabelText(Math.round((((position[0] - 16) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 48) * oneMeter))).toString());
                setLinePST(10)
                setTextSub(25)
            }else if(direction === 'back'){
                setWidth(310);
                setFirstXPosition(-position[0] - 80);
                setSecondXPosition(-position[0] - 16);
                setFirstLabelText(Math.round((((-position[0] - 80) * oneMeter) + (labelText / 2)) - 49).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  - 16) * oneMeter)) + 49).toString());
                setAdd(-50)
                setLinePST(85)
                setTextSub(100)
            }else if(direction === 'left'){
                setWidth(213);
                setFirstLabelText(Math.round((((-position[2] - 148) * oneMeter) + (labelText / 2)) + 180).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 84) * oneMeter)) - 180).toString());
                setFirstXPosition(position[2] - 148);
                setSecondXPosition(position[2] - 84);
                setAdd(-115)
                setLinePST(155)
                setTextSub(170)
            }else if(direction === 'right'){
                setWidth(288);
                setFirstLabelText(Math.round((((-position[2] - 180) * oneMeter) + (labelText / 2)) + 944.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 245) * oneMeter)) - 944.5).toString());
                setFirstXPosition(position[2] - 180);
                setSecondXPosition(position[2] - 245);
                setAdd(210)
                setLinePST(-170)
                setTextSub(-155)
            }
            if(windowHeight === '235'){
                setPstHorizontalLine(-30)
                setLinePosition(-45);
                setSecondLinePosition(-90);
                setSub(22.5);
            }else if(windowHeight === '215'){
                setPstHorizontalLine(-30)
                setLinePosition(-45)
                setSecondLinePosition(-85);
                setSub(20)
            }else if(windowHeight === '146'){
                setPstHorizontalLine(-30)
                setLinePosition(-45)
                setSecondLinePosition(-85);
                setSub(20)
            }else if(windowHeight === '126'){
                setPstHorizontalLine(-30)
                setLinePosition(-45)
                setSecondLinePosition(-78);
                setSub(18)
            }else if(windowHeight === '63'){
                setPstHorizontalLine(-30)
                setLinePosition(-43)
                setSecondLinePosition(-68);
                setSub(12)
            }
        }else if(obj === '4_window'){
            setAdd(14 + (dltaX !== undefined ? dltaX * 2 : 0))
            if(direction === 'front'){
                setWidth(380);
                setAdd(14)
                setFirstXPosition(position[0] - 35);
                setSecondXPosition((boxse !== undefined ? boxse.max.x + 40 : position[0] + 65 + (dltaX !== undefined ? dltaX * 4 : 0)));
                setFirstLabelText(Math.round((((position[0] - 35) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 65 + (dltaX !== undefined ? dltaX * 4 : 0)) * oneMeter))).toString());
                setTextSub(60)
                setLinePST(45)
            }else if(direction === 'back'){
                setWidth(380);
                setFirstXPosition(-position[0] - 100);
                setSecondXPosition(-position[0] - 0 + (dltaX !== undefined ? -dltaX * 4 : 0));
                setFirstLabelText(Math.round((((-position[0] - 100) * oneMeter) + (labelText / 2)) - 54).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 0 + (dltaX !== undefined ? dltaX * 4 : 0)) * oneMeter)) + 54).toString());
                setAdd(-55)
                setLinePST(110)
                setTextSub(120)
            }else if(direction === 'left'){
                setWidth(380);
                setFirstLabelText(Math.round((((-position[2] - 165) * oneMeter) + (labelText / 2)) + 180).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 64) * oneMeter)) - 180).toString());
                setFirstXPosition(position[2] - 165);
                setSecondXPosition(position[2] - 64);
                setAdd(-115)
                setLinePST(175)
                setTextSub(190)
            }else if(direction === 'right'){
                setWidth(288);
                setFirstLabelText(Math.round((((-position[2] - 165) * oneMeter) + (labelText / 2)) + 944.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 265) * oneMeter)) - 944.5).toString());
                setFirstXPosition(position[2] - 165);
                setSecondXPosition(position[2] - 265);
                setAdd(215)
                setLinePST(-155)
                setTextSub(-140)
            }
            if(windowHeight_4[idx] === '235'){
                setPstHorizontalLine(0)
                setLinePosition(-23);
                setSecondLinePosition(-72);
                setSub(5);
            }else if(windowHeight_4[idx] === '215'){
                setPstHorizontalLine(-5)
                setLinePosition(-30)
                setSecondLinePosition(-72);
                setSub(10)
            }else if(windowHeight_4[idx] === '146'){
                setPstHorizontalLine(-10)
                setLinePosition(-37)
                setSecondLinePosition(-72);
                setSub(10)
            }else if(windowHeight_4[idx] === '126'){
                setPstHorizontalLine(-30)
                setLinePosition(-56)
                setSecondLinePosition(-72);
                setSub(20)
            }
        }else if(type === 'door'){
            if(direction === 'front'){
                setTextSub(25)
                setPstHorizontalLine(-40)
                setLinePST(10)
                setWidth(80);
                setFirstXPosition(position[0] - 2);
                setSecondXPosition(position[0] + 30);
                setFirstLabelText(Math.round((((position[0] - 2) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 30) * oneMeter))).toString());
                setAdd(14)
                setLinePosition(-55);
                setSecondLinePosition(-122);
                setSub(0);
            }else if(direction === 'back'){
                setFirstLabelText(Math.round((((-position[0] - 67) * oneMeter) + (labelText / 2) - 59)).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 34) * oneMeter) + 59)).toString());
                setFirstXPosition(-position[0] - 67);
                setSecondXPosition(-position[0] - 34);
                setAdd(-50)
                setLinePST(80)
                setTextSub(95)
                setPstHorizontalLine(-40)
                setWidth(80);
                setLinePosition(-55);
                setSecondLinePosition(-122);
                setSub(0);
            }else if(direction === 'left'){
                setFirstLabelText(Math.round((((-position[2] - 200) * oneMeter) + (labelText / 2)) + 750).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 170) * oneMeter)) - 750).toString());
                setFirstXPosition(position[2] - 200);
                setSecondXPosition(position[2] - 170);
                setPstHorizontalLine(-40)
                setWidth(80);
                setAdd(-185)
                setLinePST(210)
                setTextSub(225)
                setLinePosition(-58);
                setSub(5);
                setSecondLinePosition(-122);
            }else if(direction === 'right'){
                setPstHorizontalLine(-40)
                setFirstLabelText(Math.round((((-position[2] - 130) * oneMeter) + (labelText / 2)) + 266.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 160) * oneMeter)) - 266.5).toString());
                setFirstXPosition(position[2] - 130);
                setSecondXPosition(position[2] - 160);
                setWidth(80);
                setAdd(145)
                setLinePosition(-58);
                setLinePST(-120)
                setTextSub(-105)
                setSecondLinePosition(-122);
                setSub(5);
            }
        }else if(type === 'double_door'){
            if(direction === 'front'){
                setTextSub(35)
                setPstHorizontalLine(-40)
                setLinePST(20)
                setWidth(160);
                setFirstXPosition(position[0] - 10);
                setSecondXPosition(position[0] + 40);
                setFirstLabelText(Math.round((((position[0] - 10) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 40) * oneMeter))).toString());
                setAdd(14)
                setLinePosition(-55);
                setSecondLinePosition(-122);
                setSub(5);
            }else if(direction === 'back'){
                setTextSub(95)
                setPstHorizontalLine(-40)
                setLinePST(80)
                setWidth(160);
                setFirstXPosition(-position[0] - 75);
                setSecondXPosition(-position[0] - 22);
                setFirstLabelText(Math.round((((-position[0] - 75) * oneMeter) + (labelText / 2)) - 68.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 22) * oneMeter)) + 68.5).toString());
                setAdd(-50)
                setLinePosition(-55);
                setSecondLinePosition(-122);
                setSub(5);
            }else if(direction === 'left'){
                setFirstLabelText(Math.round((((-position[2] - 210) * oneMeter) + (labelText / 2)) + 737).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 160) * oneMeter)) - 737).toString());
                setFirstXPosition(position[2] - 210);
                setSecondXPosition(position[2] - 160);
                setPstHorizontalLine(-40)
                setWidth(80);
                setAdd(-185)
                setLinePST(220)
                setTextSub(235)
                setLinePosition(-58);
                setSub(5);
                setSecondLinePosition(-122);
            }else if(direction === 'right'){
                setPstHorizontalLine(-40)
                setFirstLabelText(Math.round((((-position[2] - 120) * oneMeter) + (labelText / 2)) + 284).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 170) * oneMeter)) - 284).toString());
                setFirstXPosition(position[2] - 120);
                setSecondXPosition(position[2] - 170);
                setWidth(160);
                setAdd(145)
                setLinePosition(-58);
                setLinePST(-110)
                setTextSub(-95)
                setSecondLinePosition(-122);
                setSub(5);
            }
        }else if(type === 'gate'){
            if(direction === 'front'){
                if(scaleY[idxY] == 25){
                    setPstHorizontalLine(-45)
                    setLinePosition(-68);
                    setSub(52);
                    setHeight(250);
                }else if(scaleY[idxY] == 28.5){
                    setPstHorizontalLine(-37.5)
                    setLinePosition(-62);
                    setSub(48);
                    setHeight(275);
                }else if(scaleY[idxY] == 32){
                    setPstHorizontalLine(-30)
                    setLinePosition(-56);
                    setSub(44);
                    setHeight(300);                
                }else if(scaleY[idxY] == 35.5){
                    setPstHorizontalLine(-22.5)
                    setLinePosition(-48);
                    setSub(40);
                    setHeight(325);                
                }else if(scaleY[idxY] == 39){
                    setPstHorizontalLine(-15)
                    setLinePosition(-42);
                    setSub(35);
                    setHeight(350);
                }else if(scaleY[idxY] == 42.5){
                    setPstHorizontalLine(-7.5)
                    setLinePosition(-37.5);
                    setSub(32.5);
                    setHeight(375);
                }else if(scaleY[idxY] == 46){
                    setPstHorizontalLine(0)
                    setLinePosition(-30);
                    setSub(32.5);
                    setHeight(400);
                }else if(scaleY[idxY] == 49.5){
                    setPstHorizontalLine(7.5)
                    setLinePosition(-22.5);
                    setSub(28);
                    setHeight(425);
                }else if(scaleY[idxY] == 53){
                    setPstHorizontalLine(15)
                    setLinePosition(-15);
                    setSub(25);
                    setHeight(450);
                }else if(scaleY[idxY] == 56.5){
                    setPstHorizontalLine(22.5)
                    setLinePosition(-7.5);
                    setSub(17.5);
                    setHeight(475);
                }else if(scaleY[idxY] == 60){
                    setPstHorizontalLine(30)
                    setLinePosition(0);
                    setSub(10);
                    setHeight(500);
                }

                if(scaleX[idxX] == 25){
                    setGateDistance(80)
                    setAdd(50)
                    setTextSub(10)
                    setLinePST(-5)
                    setWidth(250);
                    setFirstXPosition(position[0] + 18);
                    setSecondXPosition(position[0] + 80);
                    setFirstLabelText(Math.round((((position[0] + 18) * oneMeter) + (labelText / 2)) - 68.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 80) * oneMeter)) + 68.5).toString());
                }else if(scaleX[idxX] == 28.5){
                    setGateDistance(70)
                    setAdd(42.5)
                    setTextSub(20)
                    setLinePST(5)
                    setFirstXPosition(position[0] + 5);
                    setSecondXPosition(position[0] + 78);
                    setFirstLabelText(Math.round((((position[0] + 5) * oneMeter) + (labelText / 2)) - 67.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 78) * oneMeter)) + 67.5).toString());
                    setWidth(275);
                }else if(scaleX[idxX] == 32){
                    setGateDistance(60)
                    setAdd(35)
                    setTextSub(30)
                    setLinePST(15)
                    setFirstXPosition(position[0] - 5);
                    setSecondXPosition(position[0] + 76);
                    setFirstLabelText(Math.round((((position[0] - 5) * oneMeter) + (labelText / 2)) - 71.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 76) * oneMeter)) + 71.5).toString());
                    setWidth(300);
                }else if(scaleX[idxX] == 35.5){
                    setGateDistance(50)
                    setAdd(27.5)
                    setTextSub(40)
                    setLinePST(25)
                    setFirstXPosition(position[0] - 17);
                    setSecondXPosition(position[0] + 73);
                    setFirstLabelText(Math.round((((position[0] - 17) * oneMeter) + (labelText / 2)) - 75.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 73) * oneMeter)) + 75.5).toString());
                    setWidth(325);                
                }else if(scaleX[idxX] == 39){
                    setGateDistance(30)
                    setAdd(21)
                    setTextSub(50)
                    setLinePST(35)
                    setFirstXPosition(position[0] - 27);
                    setSecondXPosition(position[0] + 68);
                    setFirstLabelText(Math.round((((position[0] - 27) * oneMeter) + (labelText / 2)) - 66).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 68) * oneMeter)) + 66).toString());
                    setWidth(350);
                }else if(scaleX[idxX] == 42.5){
                    setGateDistance(10)
                    setAdd(14)
                    setTextSub(60)
                    setLinePST(45)
                    setFirstXPosition(position[0] - 40);
                    setSecondXPosition(position[0] + 66);
                    setFirstLabelText(Math.round((((position[0] - 40) * oneMeter) + (labelText / 2)) - 69.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 66) * oneMeter)) + 69.5).toString());
                    setWidth(375);
                }else if(scaleX[idxX] == 46){
                    setGateDistance(10)
                    setAdd(5)
                    setTextSub(75)
                    setLinePST(60)
                    setFirstXPosition(position[0] - 51);
                    setSecondXPosition(position[0] + 62);
                    setFirstLabelText(Math.round((((position[0] - 51) * oneMeter) + (labelText / 2)) - 57.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 62) * oneMeter)) + 57.5).toString());
                    setWidth(400);
                }else if(scaleX[idxX] == 49.5){
                    setGateDistance(0)
                    setAdd(0)
                    setTextSub(85)
                    setLinePST(70)
                    setFirstXPosition(position[0] - 62);
                    setSecondXPosition(position[0] + 60);
                    setFirstLabelText(Math.round((((position[0] - 62) * oneMeter) + (labelText / 2)) - 67).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 60) * oneMeter)) + 67).toString());
                    setWidth(425);
                }else if(scaleX[idxX] == 53){
                    setGateDistance(0)
                    setAdd(-8)
                    setTextSub(95)
                    setLinePST(80)
                    setFirstXPosition(position[0] - 74);
                    setSecondXPosition(position[0] + 58);
                    setFirstLabelText(Math.round((((position[0] - 74) * oneMeter) + (labelText / 2)) - 73).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 58) * oneMeter)) + 73).toString());
                    setWidth(450);
                }else if(scaleX[idxX] == 56.5){
                    setGateDistance(-40)
                    setAdd(-15)
                    setTextSub(110)
                    setLinePST(95)
                    setFirstXPosition(position[0] - 85);
                    setSecondXPosition(position[0] + 55);
                    setFirstLabelText(Math.round((((position[0] - 85) * oneMeter) + (labelText / 2)) - 70).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 55) * oneMeter)) + 70).toString());
                    setWidth(475);
                }else if(scaleX[idxX] == 60){
                    setGateDistance(-40)
                    setAdd(-22)
                    setTextSub(120)
                    setLinePST(105)
                    setFirstXPosition(position[0] - 96);
                    setSecondXPosition(position[0] + 52);
                    setFirstLabelText(Math.round((((position[0] - 96) * oneMeter) + (labelText / 2)) - 72).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 52) * oneMeter)) + 72).toString());
                    setWidth(500);
                }else if(scaleX[idxX] == 63.5){
                    setGateDistance(-80)
                    setAdd(-29)
                    setTextSub(135)
                    setLinePST(115)
                    setFirstXPosition(position[0] - 108);
                    setSecondXPosition(position[0] + 48);
                    setFirstLabelText(Math.round((((position[0] - 108) * oneMeter) + (labelText / 2)) - 65).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 48) * oneMeter)) + 65).toString());
                    setWidth(525);
                }else if(scaleX[idxX] == 67){
                    setGateDistance(-80)
                    setAdd(-29)
                    setTextSub(145)
                    setLinePST(130)
                    setFirstXPosition(position[0] - 118);
                    setSecondXPosition(position[0] + 46);
                    setFirstLabelText(Math.round((((position[0] - 118) * oneMeter) + (labelText / 2)) - 44.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 46) * oneMeter)) + 44.5).toString());
                    setWidth(550);
                }else if(scaleX[idxX] == 70.5){
                    setGateDistance(-100)
                    setAdd(-42)
                    setTextSub(155)
                    setLinePST(140)
                    setFirstXPosition(position[0] - 130);
                    setSecondXPosition(position[0] + 42);
                    setFirstLabelText(Math.round((((position[0] - 130) * oneMeter) + (labelText / 2)) - 67).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 42) * oneMeter)) + 67).toString());
                    setWidth(575);
                }else if(scaleX[idxX] == 74){
                    setGateDistance(-100)
                    setAdd(-48)
                    setTextSub(165)
                    setLinePST(150)
                    setFirstXPosition(position[0] - 142);
                    setSecondXPosition(position[0] + 40);
                    setFirstLabelText(Math.round((((position[0] - 142) * oneMeter) + (labelText / 2)) - 68).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 40) * oneMeter)) + 68).toString());
                    setWidth(600);
                }
                setSecondLinePosition(-122);
            }else if(direction === 'back'){
                if(scaleY[idxY] == 25){
                    setPstHorizontalLine(-45)
                    setLinePosition(-68);
                    setSub(52);
                    setHeight(250);
                }else if(scaleY[idxY] == 28.5){
                    setPstHorizontalLine(-37.5)
                    setLinePosition(-62);
                    setSub(48);
                    setHeight(275);
                }else if(scaleY[idxY] == 32){
                    setPstHorizontalLine(-30)
                    setLinePosition(-56);
                    setSub(44);
                    setHeight(300);                
                }else if(scaleY[idxY] == 35.5){
                    setPstHorizontalLine(-22.5)
                    setLinePosition(-48);
                    setSub(40);
                    setHeight(325);                
                }else if(scaleY[idxY] == 39){
                    setPstHorizontalLine(-15)
                    setLinePosition(-42);
                    setSub(35);
                    setHeight(350);
                }else if(scaleY[idxY] == 42.5){
                    setPstHorizontalLine(-7.5)
                    setLinePosition(-37.5);
                    setSub(32.5);
                    setHeight(375);
                }else if(scaleY[idxY] == 46){
                    setPstHorizontalLine(0)
                    setLinePosition(-30);
                    setSub(32.5);
                    setHeight(400);
                }else if(scaleY[idxY] == 49.5){
                    setPstHorizontalLine(7.5)
                    setLinePosition(-22.5);
                    setSub(28);
                    setHeight(425);
                }else if(scaleY[idxY] == 53){
                    setPstHorizontalLine(15)
                    setLinePosition(-15);
                    setSub(25);
                    setHeight(450);
                }else if(scaleY[idxY] == 56.5){
                    setPstHorizontalLine(22.5)
                    setLinePosition(-7.5);
                    setSub(17.5);
                    setHeight(475);
                }else if(scaleY[idxY] == 60){
                    setPstHorizontalLine(30)
                    setLinePosition(0);
                    setSub(10);
                    setHeight(500);
                }
                if(scaleX[idxX] == 25){
                    setGateDistance(60)
                    setAdd(50 - 65)
                    setTextSub(10 + 65)
                    setLinePST(-5 + 65)
                    setWidth(250);
                    setFirstXPosition(-position[0] + 18 - 65);
                    setSecondXPosition(-position[0] + 80 - 65);
                    setFirstLabelText(Math.round((((-position[0] + 18 - 65) * oneMeter) + (labelText / 2)) - 203.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2 - 65) - (-position[0]  + 80) * oneMeter)) + 203.5).toString());
                }else if(scaleX[idxX] == 28.5){
                    setGateDistance(50)
                    setAdd(42.5 - 65)
                    setTextSub(20 + 65)
                    setLinePST(5 + 65)
                    setFirstXPosition(-position[0] + 5 - 65);
                    setSecondXPosition(-position[0] + 78 - 65);
                    setFirstLabelText(Math.round((((-position[0] + 5 - 65) * oneMeter) + (labelText / 2)) - 55).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 78 - 65) * oneMeter)) + 55).toString());
                    setWidth(275);
                }else if(scaleX[idxX] == 32){
                    setGateDistance(37)
                    setAdd(35 - 65)
                    setTextSub(30 + 65)
                    setLinePST(15 + 65)
                    setFirstXPosition(-position[0] - 5 - 65);
                    setSecondXPosition(-position[0] + 76 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 5 - 65) * oneMeter) + (labelText / 2)) - 56).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 76 - 65) * oneMeter)) + 56).toString());
                    setWidth(300);
                }else if(scaleX[idxX] == 35.5){
                    setGateDistance(23)
                    setAdd(27.5 - 65)
                    setTextSub(40 + 65)
                    setLinePST(25 + 65)
                    setFirstXPosition(-position[0] - 17 - 65);
                    setSecondXPosition(-position[0] + 73 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 17 - 65) * oneMeter) + (labelText / 2)) - 60.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 73 - 65) * oneMeter)) + 60.5).toString());
                    setWidth(325);                
                }else if(scaleX[idxX] == 39){
                    setGateDistance(0)
                    setAdd(21 - 65)
                    setTextSub(50 + 65)
                    setLinePST(35 + 65)
                    setFirstXPosition(-position[0] - 27 - 65);
                    setSecondXPosition(-position[0] + 50 - 50);
                    setFirstLabelText(Math.round((((-position[0] - 27 - 65) * oneMeter) + (labelText / 2)) - 88).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 68 - 50) * oneMeter)) + 88).toString());
                    setWidth(350);
                }else if(scaleX[idxX] == 42.5){
                    setAdd(14 - 65)
                    setTextSub(60 + 65)
                    setLinePST(45 + 65)
                    setFirstXPosition(-position[0] - 40 - 65);
                    setSecondXPosition(-position[0] + 66 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 40 - 65) * oneMeter) + (labelText / 2)) - 60).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 66 - 65) * oneMeter)) + 60).toString());
                    setWidth(375);
                }else if(scaleX[idxX] == 46){
                    setGateDistance(-20)
                    setAdd(5 - 65)
                    setTextSub(75 + 65)
                    setLinePST(60 + 65)
                    setFirstXPosition(-position[0] - 51 - 65);
                    setSecondXPosition(-position[0] + 62 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 51 - 65) * oneMeter) + (labelText / 2)) - 55.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 62 - 65) * oneMeter)) + 55.5).toString());
                    setWidth(400);
                }else if(scaleX[idxX] == 49.5){
                    setGateDistance(-40)
                    setAdd(0 - 65)
                    setTextSub(85 + 65)
                    setLinePST(70 + 65)
                    setFirstXPosition(-position[0] - 62 - 65);
                    setSecondXPosition(-position[0] + 60 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 62 - 65) * oneMeter) + (labelText / 2)) - 59).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 60 - 65) * oneMeter)) + 59).toString());
                    setWidth(425);
                }else if(scaleX[idxX] == 53){
                    setGateDistance(-60)
                    setAdd(-8 - 65)
                    setTextSub(95 + 65)
                    setLinePST(80 + 65)
                    setFirstXPosition(-position[0] - 74 - 65);
                    setSecondXPosition(-position[0] + 58 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 74 - 65) * oneMeter) + (labelText / 2)) - 61).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 58 - 65) * oneMeter)) + 61).toString());
                    setWidth(450);
                }else if(scaleX[idxX] == 56.5){
                    setGateDistance(-65)
                    setAdd(-15 - 65)
                    setTextSub(110 + 65)
                    setLinePST(95 + 65)
                    setFirstXPosition(-position[0] - 85 - 65);
                    setSecondXPosition(-position[0] + 55 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 85 - 65) * oneMeter) + (labelText / 2)) - 58.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 55 - 65) * oneMeter)) + 58.5).toString());
                    setWidth(475);
                }else if(scaleX[idxX] == 60){
                    setGateDistance(-70)
                    setAdd(-22 - 65)
                    setTextSub(120 + 65)
                    setLinePST(105 + 65)
                    setFirstXPosition(-position[0] - 96 - 65);
                    setSecondXPosition(-position[0] + 52 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 96 - 65) * oneMeter) + (labelText / 2)) - 60).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 52 - 65) * oneMeter)) + 60).toString());
                    setWidth(500);
                }else if(scaleX[idxX] == 63.5){
                    setGateDistance(-90)
                    setAdd(-29 - 65)
                    setTextSub(135 + 65)
                    setLinePST(115 + 65)
                    setFirstXPosition(-position[0] - 108 - 65);
                    setSecondXPosition(-position[0] + 48 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 108 - 65) * oneMeter) + (labelText / 2)) - 58).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 48 - 65) * oneMeter)) + 58).toString());
                    setWidth(525);
                }else if(scaleX[idxX] == 67){
                    setGateDistance(-110)
                    setAdd(-29 - 65)
                    setTextSub(145 + 65)
                    setLinePST(130 + 65)
                    setFirstXPosition(-position[0] - 118 - 65);
                    setSecondXPosition(-position[0] + 46 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 118 - 65) * oneMeter) + (labelText / 2)) - 59).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 46 - 65) * oneMeter)) + 59).toString());
                    setWidth(550);
                }else if(scaleX[idxX] == 70.5){
                    setGateDistance(-125)
                    setAdd(-42 - 65)
                    setTextSub(155 + 65)
                    setLinePST(140 + 65)
                    setFirstXPosition(-position[0] - 130 - 65);
                    setSecondXPosition(-position[0] + 42 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 130 - 65) * oneMeter) + (labelText / 2)) - 57).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 42 - 65) * oneMeter)) + 57).toString());
                    setWidth(575);
                }else if(scaleX[idxX] == 74){
                    setGateDistance(-135)
                    setAdd(-48 - 65)
                    setTextSub(165 + 65)
                    setLinePST(150 + 65)
                    setFirstXPosition(-position[0] - 142 - 65);
                    setSecondXPosition(-position[0] + 40 - 65);
                    setFirstLabelText(Math.round((((-position[0] - 142 - 65) * oneMeter) + (labelText / 2)) - 59).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (-position[0]  + 40 - 65) * oneMeter)) + 59).toString());
                    setWidth(600);
                }
                setSecondLinePosition(-122);
                // setTextSub(125)
                // setPstHorizontalLine(-10)
                // setLinePST(110)
                // setWidth(400);
                // setFirstXPosition(-position[0] - 98);
                // setSecondXPosition(-position[0] + 2);
                // setFirstLabelText(Math.round((((-position[0] - 98) * oneMeter) + (labelText / 2)) - 68.5).toString());
                // setSecondLabelText(Math.round((((labelText / 2) - (-position[0] + 2) * oneMeter)) + 68.5).toString());
                // setAdd(-50)
                // setLinePosition(-45);
                // setSecondLinePosition(-122);
                // setSub(35);
            }else if(direction === 'left'){
                if(scaleY[idxY] == 25){
                    setPstHorizontalLine(-45)
                    setLinePosition(-68);
                    setSub(52);
                    setHeight(250);
                }else if(scaleY[idxY] == 28.5){
                    setPstHorizontalLine(-37.5)
                    setLinePosition(-62);
                    setSub(48);
                    setHeight(275);
                }else if(scaleY[idxY] == 32){
                    setPstHorizontalLine(-30)
                    setLinePosition(-56);
                    setSub(44);
                    setHeight(300);                
                }else if(scaleY[idxY] == 35.5){
                    setPstHorizontalLine(-22.5)
                    setLinePosition(-48);
                    setSub(40);
                    setHeight(325);                
                }else if(scaleY[idxY] == 39){
                    setPstHorizontalLine(-15)
                    setLinePosition(-42);
                    setSub(35);
                    setHeight(350);
                }else if(scaleY[idxY] == 42.5){
                    setPstHorizontalLine(-7.5)
                    setLinePosition(-37.5);
                    setSub(32.5);
                    setHeight(375);
                }else if(scaleY[idxY] == 46){
                    setPstHorizontalLine(0)
                    setLinePosition(-30);
                    setSub(32.5);
                    setHeight(400);
                }else if(scaleY[idxY] == 49.5){
                    setPstHorizontalLine(7.5)
                    setLinePosition(-22.5);
                    setSub(28);
                    setHeight(425);
                }else if(scaleY[idxY] == 53){
                    setPstHorizontalLine(15)
                    setLinePosition(-15);
                    setSub(25);
                    setHeight(450);
                }else if(scaleY[idxY] == 56.5){
                    setPstHorizontalLine(22.5)
                    setLinePosition(-7.5);
                    setSub(17.5);
                    setHeight(475);
                }else if(scaleY[idxY] == 60){
                    setPstHorizontalLine(30)
                    setLinePosition(0);
                    setSub(10);
                    setHeight(500);
                }

                if(scaleX[idxX] == 25){
                    setGateDistance(720)
                    setAdd(50 - 200)
                    setTextSub(10 + 200)
                    setLinePST(-5 + 200)
                    setWidth(250);
                    setFirstXPosition(position[2] + 18 - 200);
                    setSecondXPosition(position[2] + 80 - 200);
                    setFirstLabelText(Math.round((((position[2] + 18 - 200) * oneMeter) + (labelText / 2)) + 723.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 80 - 200) * oneMeter)) - 723.5).toString());
                }else if(scaleX[idxX] == 28.5){
                    setGateDistance(735)
                    setAdd(42.5 - 200)
                    setTextSub(20 + 200)
                    setLinePST(5 + 200)
                    setFirstXPosition(position[2] + 5 - 200);
                    setSecondXPosition(position[2] + 78 - 200);
                    setFirstLabelText(Math.round((((position[2] + 5 - 200) * oneMeter) + (labelText / 2)) + 721).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 78 - 200) * oneMeter)) - 721).toString());
                    setWidth(275);
                }else if(scaleX[idxX] == 32){
                    setGateDistance(750)
                    setAdd(35 - 200)
                    setTextSub(30 + 200)
                    setLinePST(15 + 200)
                    setFirstXPosition(position[2] - 5 - 200);
                    setSecondXPosition(position[2] + 76 - 200);
                    setFirstLabelText(Math.round((((position[2] - 5 - 200) * oneMeter) + (labelText / 2)) + 712.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 76 - 200) * oneMeter)) - 712.5).toString());
                    setWidth(300);
                }else if(scaleX[idxX] == 35.5){
                    setGateDistance(760)
                    setAdd(27.5 - 200)
                    setTextSub(40 + 200)
                    setLinePST(25 + 200)
                    setFirstXPosition(position[2] - 17 - 200);
                    setSecondXPosition(position[2] + 73 - 200);
                    setFirstLabelText(Math.round((((position[2] - 17 - 200) * oneMeter) + (labelText / 2)) + 719.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 73 - 200) * oneMeter)) - 719.5).toString());
                    setWidth(325);                
                }else if(scaleX[idxX] == 39){
                    setGateDistance(775)
                    setAdd(21 - 200)
                    setTextSub(50 + 200)
                    setLinePST(35 + 200)
                    setFirstXPosition(position[2] - 27 - 200);
                    setSecondXPosition(position[2] + 68 - 200);
                    setFirstLabelText(Math.round((((position[2] - 27 - 200) * oneMeter) + (labelText / 2)) + 726).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 68 - 200) * oneMeter)) - 726).toString());
                    setWidth(350);
                }else if(scaleX[idxX] == 42.5){
                    setGateDistance(790)
                    setAdd(14 - 200)
                    setTextSub(60 + 200)
                    setLinePST(45 + 200)
                    setFirstXPosition(position[2] - 40 - 200);
                    setSecondXPosition(position[2] + 66 - 200);
                    setFirstLabelText(Math.round((((position[2] - 40 - 200) * oneMeter) + (labelText / 2)) + 719.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 66 - 200) * oneMeter)) - 719.5).toString());
                    setWidth(375);
                }else if(scaleX[idxX] == 46){
                    setGateDistance(810)
                    setAdd(5 - 200)
                    setTextSub(75 + 200)
                    setLinePST(60 + 200)
                    setFirstXPosition(position[2] - 51 - 200);
                    setSecondXPosition(position[2] + 62 - 200);
                    setFirstLabelText(Math.round((((position[2] - 51 - 200) * oneMeter) + (labelText / 2)) + 722).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 62 - 200) * oneMeter)) - 722).toString());
                    setWidth(400);
                }else if(scaleX[idxX] == 49.5){
                    setGateDistance(820)
                    setAdd(0 - 200)
                    setTextSub(85 + 200)
                    setLinePST(70 + 200)
                    setFirstXPosition(position[2] - 62 - 200);
                    setSecondXPosition(position[2] + 60 - 200);
                    setFirstLabelText(Math.round((((position[2] - 62 - 200) * oneMeter) + (labelText / 2)) + 711.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 60 - 200) * oneMeter)) - 711.5).toString());
                    setWidth(425);
                }else if(scaleX[idxX] == 53){
                    setGateDistance(835)
                    setAdd(-8 - 200)
                    setTextSub(95 + 200)
                    setLinePST(80 + 200)
                    setFirstXPosition(position[2] - 74 - 200);
                    setSecondXPosition(position[2] + 58 - 200);
                    setFirstLabelText(Math.round((((position[2] - 74 - 200) * oneMeter) + (labelText / 2)) + 716).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 58 - 200) * oneMeter)) - 716).toString());
                    setWidth(450);
                }else if(scaleX[idxX] == 56.5){
                    setGateDistance(845)
                    setAdd(-15 - 200)
                    setTextSub(110 + 200)
                    setLinePST(95 + 200)
                    setFirstXPosition(position[2] - 85 - 200);
                    setSecondXPosition(position[2] + 55 - 200);
                    setFirstLabelText(Math.round((((position[2] - 85 - 200) * oneMeter) + (labelText / 2)) + 720.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 55 - 200) * oneMeter)) - 720.5).toString());
                    setWidth(475);
                }else if(scaleX[idxX] == 60){
                    setGateDistance(865)
                    setAdd(-22 - 200)
                    setTextSub(120 + 200)
                    setLinePST(105 + 200)
                    setFirstXPosition(position[2] - 96 - 200);
                    setSecondXPosition(position[2] + 52 - 200);
                    setFirstLabelText(Math.round((((position[2] - 96 - 200) * oneMeter) + (labelText / 2)) + 712).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 52 - 200) * oneMeter)) - 712).toString());
                    setWidth(500);
                }else if(scaleX[idxX] == 63.5){
                    setGateDistance(880)
                    setAdd(-29 - 200)
                    setTextSub(135 + 200)
                    setLinePST(115 + 200)
                    setFirstXPosition(position[2] - 108 - 200);
                    setSecondXPosition(position[2] + 48 - 200);
                    setFirstLabelText(Math.round((((position[2] - 108 - 200) * oneMeter) + (labelText / 2)) + 718).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 48 - 200) * oneMeter)) - 718).toString());
                    setWidth(525);
                }else if(scaleX[idxX] == 67){
                    setGateDistance(890)
                    setAdd(-29 - 200)
                    setTextSub(145 + 200)
                    setLinePST(130 + 200)
                    setFirstXPosition(position[2] - 118 - 200);
                    setSecondXPosition(position[2] + 46 - 200);
                    setFirstLabelText(Math.round((((position[2] - 118 - 200) * oneMeter) + (labelText / 2)) + 711.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 46 - 200) * oneMeter)) - 711.5).toString());
                    setWidth(550);
                }else if(scaleX[idxX] == 70.5){
                    setGateDistance(910)
                    setAdd(-42 - 200)
                    setTextSub(155 + 200)
                    setLinePST(140 + 200)
                    setFirstXPosition(position[2] - 130 - 200);
                    setSecondXPosition(position[2] + 42 - 200);
                    setFirstLabelText(Math.round((((position[2] - 130 - 200) * oneMeter) + (labelText / 2)) + 712).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 42 - 200) * oneMeter)) - 712).toString());
                    setWidth(575);
                }else if(scaleX[idxX] == 74){
                    setGateDistance(920)
                    setAdd(-48 - 200)
                    setTextSub(165 + 200)
                    setLinePST(150 + 200)
                    setFirstXPosition(position[2] - 142 - 200);
                    setSecondXPosition(position[2] + 40 - 200);
                    setFirstLabelText(Math.round((((position[2] - 142 - 200) * oneMeter) + (labelText / 2)) + 715.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 40 - 200) * oneMeter)) - 715.5).toString());
                    setWidth(600);
                }
                setSecondLinePosition(-122);
            }else if(direction === 'right'){
                if(scaleY[idxY] == 25){
                    setPstHorizontalLine(-45)
                    setLinePosition(-68);
                    setSub(52);
                    setHeight(250);
                }else if(scaleY[idxY] == 28.5){
                    setPstHorizontalLine(-37.5)
                    setLinePosition(-62);
                    setSub(48);
                    setHeight(275);
                }else if(scaleY[idxY] == 32){
                    setPstHorizontalLine(-30)
                    setLinePosition(-56);
                    setSub(44);
                    setHeight(300);                
                }else if(scaleY[idxY] == 35.5){
                    setPstHorizontalLine(-22.5)
                    setLinePosition(-48);
                    setSub(40);
                    setHeight(325);                
                }else if(scaleY[idxY] == 39){
                    setPstHorizontalLine(-15)
                    setLinePosition(-42);
                    setSub(35);
                    setHeight(350);
                }else if(scaleY[idxY] == 42.5){
                    setPstHorizontalLine(-7.5)
                    setLinePosition(-37.5);
                    setSub(32.5);
                    setHeight(375);
                }else if(scaleY[idxY] == 46){
                    setPstHorizontalLine(0)
                    setLinePosition(-30);
                    setSub(32.5);
                    setHeight(400);
                }else if(scaleY[idxY] == 49.5){
                    setPstHorizontalLine(7.5)
                    setLinePosition(-22.5);
                    setSub(28);
                    setHeight(425);
                }else if(scaleY[idxY] == 53){
                    setPstHorizontalLine(15)
                    setLinePosition(-15);
                    setSub(25);
                    setHeight(450);
                }else if(scaleY[idxY] == 56.5){
                    setPstHorizontalLine(22.5)
                    setLinePosition(-7.5);
                    setSub(17.5);
                    setHeight(475);
                }else if(scaleY[idxY] == 60){
                    setPstHorizontalLine(30)
                    setLinePosition(0);
                    setSub(10);
                    setHeight(500);
                }

                if(scaleX[idxX] == 25){
                    setGateDistance(300)
                    setAdd(50 + 128)
                    setTextSub(10 - 128)
                    setLinePST(-5 - 128)
                    setWidth(250);
                    setFirstXPosition(position[2] + 18 - 225);
                    setSecondXPosition(position[2] + 80 - 225);
                    setFirstLabelText(Math.round((((position[2] + 18 - 225) * oneMeter) + (labelText / 2)) + 828).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 80 - 225) * oneMeter)) - 828).toString());
                }else if(scaleX[idxX] == 28.5){
                    setGateDistance(290)
                    setAdd(42.5 + 128)
                    setTextSub(20 - 128)
                    setLinePST(5 - 128)
                    setFirstXPosition(position[2] + 5 - 210);
                    setSecondXPosition(position[2] + 78 - 210);
                    setFirstLabelText(Math.round((((position[2] + 5 - 210) * oneMeter) + (labelText / 2)) + 833).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 78 - 210) * oneMeter)) - 833).toString());
                    setWidth(275);
                }else if(scaleX[idxX] == 32){
                    setGateDistance(280)
                    setAdd(35 + 128)
                    setTextSub(30 - 128)
                    setLinePST(15 - 128)
                    setFirstXPosition(position[2] - 5 - 198);
                    setSecondXPosition(position[2] + 76 - 198);
                    setFirstLabelText(Math.round((((position[2] - 5 - 198) * oneMeter) + (labelText / 2)) + 833).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 76 - 198) * oneMeter)) - 833).toString());
                    setWidth(300);
                }else if(scaleX[idxX] == 35.5){
                    setGateDistance(270)
                    setAdd(27.5 + 128)
                    setTextSub(40 - 128)
                    setLinePST(25 - 128)
                    setFirstXPosition(position[2] - 17 - 184);
                    setSecondXPosition(position[2] + 73 - 184);
                    setFirstLabelText(Math.round((((position[2] - 17 - 184) * oneMeter) + (labelText / 2)) + 846).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 73 - 184) * oneMeter)) - 846).toString());
                    setWidth(325);                
                }else if(scaleX[idxX] == 39){
                    setGateDistance(250)
                    setAdd(21 + 128)
                    setTextSub(50 - 128)
                    setLinePST(35 - 128)
                    setFirstXPosition(position[2] - 27 - 170);
                    setSecondXPosition(position[2] + 68 - 170);
                    setFirstLabelText(Math.round((((position[2] - 27 - 170) * oneMeter) + (labelText / 2)) + 836).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 68 - 170) * oneMeter)) - 836).toString());
                    setWidth(350);
                }else if(scaleX[idxX] == 42.5){
                    setGateDistance(220)
                    setAdd(14 + 128)
                    setTextSub(60 - 128)
                    setLinePST(45 - 128)
                    setFirstXPosition(position[2] - 40 - 155);
                    setSecondXPosition(position[2] + 66 - 155);
                    setFirstLabelText(Math.round((((position[2] - 40 - 155) * oneMeter) + (labelText / 2)) + 844).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 66 - 155) * oneMeter)) - 844).toString());
                    setWidth(375);
                }else if(scaleX[idxX] == 46){
                    setGateDistance(210)
                    setAdd(5 + 128)
                    setTextSub(75 - 128)
                    setLinePST(60 - 128)
                    setFirstXPosition(position[2] - 51 - 140);
                    setSecondXPosition(position[2] + 62 - 140);
                    setFirstLabelText(Math.round((((position[2] - 51 - 140) * oneMeter) + (labelText / 2)) + 831).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 62 - 140) * oneMeter)) - 831).toString());
                    setWidth(400);
                }else if(scaleX[idxX] == 49.5){
                    setGateDistance(200)
                    setAdd(0 + 128)
                    setTextSub(85 - 128)
                    setLinePST(70 - 128)
                    setFirstXPosition(position[2] - 62 - 125);
                    setSecondXPosition(position[2] + 60 - 125);
                    setFirstLabelText(Math.round((((position[2] - 62 - 125) * oneMeter) + (labelText / 2)) + 825).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 60 - 125) * oneMeter)) - 825).toString());
                    setWidth(425);
                }else if(scaleX[idxX] == 53){
                    setGateDistance(190)
                    setAdd(-8 + 128)
                    setTextSub(95 - 128)
                    setLinePST(80 - 128)
                    setFirstXPosition(position[2] - 74 - 110);
                    setSecondXPosition(position[2] + 58 - 110);
                    setFirstLabelText(Math.round((((position[2] - 74 - 110) * oneMeter) + (labelText / 2)) + 821).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 58 - 110) * oneMeter)) - 821).toString());
                    setWidth(450);
                }else if(scaleX[idxX] == 56.5){
                    setGateDistance(170)
                    setAdd(-15 + 128)
                    setTextSub(110 - 128)
                    setLinePST(95 - 128)
                    setFirstXPosition(position[2] - 85 - 95);
                    setSecondXPosition(position[2] + 55 - 95);
                    setFirstLabelText(Math.round((((position[2] - 85 - 95) * oneMeter) + (labelText / 2)) + 820.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 55 - 95) * oneMeter)) - 820.5).toString());
                    setWidth(475);
                }else if(scaleX[idxX] == 60){
                    setGateDistance(155)
                    setAdd(-22 + 128)
                    setTextSub(120 - 128)
                    setLinePST(105 - 128)
                    setFirstXPosition(position[2] - 96 - 85);
                    setSecondXPosition(position[2] + 52 - 85);
                    setFirstLabelText(Math.round((((position[2] - 96 - 85) * oneMeter) + (labelText / 2)) + 835).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 52 - 85) * oneMeter)) - 835).toString());
                    setWidth(500);
                }else if(scaleX[idxX] == 63.5){
                    setGateDistance(145)
                    setAdd(-29 + 128)
                    setTextSub(135 - 128)
                    setLinePST(115 - 128)
                    setFirstXPosition(position[2] - 108 - 70);
                    setSecondXPosition(position[2] + 48 - 70);
                    setFirstLabelText(Math.round((((position[2] - 108 - 70) * oneMeter) + (labelText / 2)) + 835).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 48 - 70) * oneMeter)) - 835).toString());
                    setWidth(525);
                }else if(scaleX[idxX] == 67){
                    setGateDistance(125)
                    setAdd(-29 + 128)
                    setTextSub(145 - 128)
                    setLinePST(130 - 128)
                    setFirstXPosition(position[2] - 118 - 55);
                    setSecondXPosition(position[2] + 46 - 55);
                    setFirstLabelText(Math.round((((position[2] - 118 - 55) * oneMeter) + (labelText / 2)) + 827.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 46 - 55) * oneMeter)) - 827.5).toString());
                    setWidth(550);
                }else if(scaleX[idxX] == 70.5){
                    setGateDistance(115)
                    setAdd(-42 + 128)
                    setTextSub(155 - 128)
                    setLinePST(140 - 128)
                    setFirstXPosition(position[2] - 130 - 40);
                    setSecondXPosition(position[2] + 42 - 40);
                    setFirstLabelText(Math.round((((position[2] - 130 - 40) * oneMeter) + (labelText / 2)) + 823).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 42 - 40) * oneMeter)) - 823).toString());
                    setWidth(575);
                }else if(scaleX[idxX] == 74){
                    setGateDistance(95)
                    setAdd(-48 + 128)
                    setTextSub(165 - 128)
                    setLinePST(150 - 128)
                    setFirstXPosition(position[2] - 142 - 25);
                    setSecondXPosition(position[2] + 40 - 25);
                    setFirstLabelText(Math.round((((position[2] - 142 - 25) * oneMeter) + (labelText / 2)) + 826.5).toString());
                    setSecondLabelText(Math.round((((labelText / 2) - (position[2]  + 40 - 25) * oneMeter)) - 826.5).toString());
                    setWidth(600);
                }
                setSecondLinePosition(-122);
            }
        }else if(type === 'hole'){
            if(direction === 'front'){
                setTextSub(105)
                setPstHorizontalLine(-10)
                setLinePST(90)
                setWidth(300);
                setFirstXPosition(position[0] - 85);
                setSecondXPosition(position[0] + 20);
                setFirstLabelText(Math.round((((position[0] - 85) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 20) * oneMeter))).toString());
                setAdd(-30)
                setLinePosition(-40);
                setSecondLinePosition(-122);
                setSub(35);
            }else if(direction === 'back'){
                setTextSub(170)
                setPstHorizontalLine(-10)
                setLinePST(160)
                setWidth(300);
                setFirstXPosition(-position[0] - 147);
                setSecondXPosition(-position[0] - 47);
                setFirstLabelText(Math.round((((-position[0] - 147) * oneMeter) + (labelText / 2)) - 68.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 47) * oneMeter)) + 68.5).toString());
                setAdd(-98)
                setLinePosition(-40);
                setSecondLinePosition(-122);
                setSub(35);
            }else if(direction === 'left'){
                setFirstLabelText(Math.round((((-position[2] - 280) * oneMeter) + (labelText / 2)) + 1115).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 180) * oneMeter)) - 1115).toString());
                setFirstXPosition(position[2] - 280);
                setSecondXPosition(position[2] - 180);
                setPstHorizontalLine(-10)
                setWidth(300);
                setAdd(-230)
                setLinePST(290)
                setTextSub(305)
                setLinePosition(-38);
                setSub(35);
                setSecondLinePosition(-122);
            }else if(direction === 'right'){
                setPstHorizontalLine(-10)
                setFirstLabelText(Math.round((((-position[2] - 45) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 145) * oneMeter))).toString());
                setFirstXPosition(position[2] - 45);
                setSecondXPosition(position[2] - 145);
                setWidth(300);
                setAdd(95)
                setLinePosition(-38);
                setLinePST(-35)
                setTextSub(-20)
                setSecondLinePosition(-122);
                setSub(35);
            }
        }else if(type === 'stairs1'){
            if(direction === 'front'){
                setTextSub(20)
                setPstHorizontalLine(50)
                setLinePST(0)
                setWidth(80);
                setFirstXPosition(position[0] + 13);
                setSecondXPosition(position[0] + 47);
                setFirstLabelText(Math.round((((position[0] + 13) * oneMeter) + (labelText / 2))).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 47) * oneMeter))).toString());
                setAdd(30)
                setLinePosition(30);
                setSecondLinePosition(-35);
                setSub(-45);
            }else if(direction === 'back'){
                setTextSub(75)
                setPstHorizontalLine(50)
                setLinePST(60)
                setWidth(80);
                setFirstXPosition(-position[0] - 50);
                setSecondXPosition(-position[0] - 16);
                setFirstLabelText(Math.round((((-position[0] - 50) * oneMeter) + (labelText / 2)) - 61.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] - 16) * oneMeter)) + 61.5).toString());
                setAdd(-32)
                setLinePosition(30);
                setSecondLinePosition(-35);
                setSub(-45);
            }else if(direction === 'left'){
                setTextSub(215)
                setPstHorizontalLine(50)
                setLinePST(200)
                setWidth(80);
                setFirstXPosition(position[2] - 185);
                setSecondXPosition(position[2] - 155);
                setFirstLabelText(Math.round((((-position[2] - 185) * oneMeter) + (labelText / 2)) + 604.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 155) * oneMeter)) - 604.5).toString());
                setAdd(-170)
                setLinePosition(30);
                setSecondLinePosition(-35);
                setSub(-45);
            }else if(direction === 'right'){
                setPstHorizontalLine(50)
                setFirstLabelText(Math.round((((-position[2] - 145) * oneMeter) + (labelText / 2)) + 445).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 180) * oneMeter)) - 445).toString());
                setFirstXPosition(position[2] - 145);
                setSecondXPosition(position[2] - 180);
                setWidth(80);
                setAdd(162)
                setLinePosition(30);
                setLinePST(-125)
                setTextSub(-110)
                setSecondLinePosition(-35);
                setSub(-45);
            }
        }else if(type === 'stairs2'){
            if(direction === 'front'){
                setTextSub(20)
                setPstHorizontalLine(50)
                setLinePST(0)
                setWidth(480);
                setFirstXPosition(position[0] + 22);
                setSecondXPosition(position[0] + 160);
                setFirstLabelText(Math.round((((position[0] + 22) * oneMeter) + (labelText / 2)) - 65.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (position[0]  + 160) * oneMeter)) + 65.5).toString());
                setAdd(90)
                setLinePosition(42);
                setSecondLinePosition(-25);
                setSub(-50);
            }else if(direction === 'back'){
                setTextSub(75)
                setPstHorizontalLine(50)
                setLinePST(55)
                setWidth(480);
                setFirstXPosition(-position[0] - 42);
                setSecondXPosition(-position[0] + 90);
                setFirstLabelText(Math.round((((-position[0] - 42) * oneMeter) + (labelText / 2)) - 61.5).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[0] + 90) * oneMeter)) + 61.5).toString());
                setAdd(-32)
                setLinePosition(43);
                setSecondLinePosition(-22);
                setSub(-45);
            }else if(direction === 'left'){
                setTextSub(205)
                setPstHorizontalLine(60)
                setLinePST(190)
                setWidth(480);
                setFirstXPosition(position[2] - 175);
                setSecondXPosition(position[2] - 40);
                setFirstLabelText(Math.round((((-position[2] - 175) * oneMeter) + (labelText / 2)) + 114).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 40) * oneMeter)) - 114).toString());
                setAdd(-110)
                setLinePosition(40);
                setSecondLinePosition(-25);
                setSub(-45);
            }else if(direction === 'right'){
                setPstHorizontalLine(60)
                setFirstLabelText(Math.round((((-position[2] - 150) * oneMeter) + (labelText / 2)) + 884).toString());
                setSecondLabelText(Math.round((((labelText / 2) - (-position[2] - 285) * oneMeter)) - 884).toString());
                setFirstXPosition(position[2] - 150);
                setSecondXPosition(position[2] - 285);
                setWidth(480);
                setAdd(220)
                setLinePosition(40);
                setLinePST(-140)
                setTextSub(-125)
                setSecondLinePosition(-25);
                setSub(-45);
            }
        }
    }, [RangeSetterLengthtHail, WidthSetterLengthtHail, pointA, pointB, position, windowHeight_4, idx, boxse, scaleX, scaleY, idxX, idxY])

    return (
        <group position={[(direction === 'back' ? -15 : (direction === 'left' ? (type === 'stairs1' ? ModelPos + 150 : (type === 'stairs2' ? ModelPos + 70 : ModelPos - 5)) : (direction === 'right' ? (type === 'hole' ? ModelPos - 136 : (type === 'stairs1' ? ModelPos - 150 : (type === 'stairs2' ? ModelPos - 68 : ModelPos + 5))) : -50))), position[1] + 120, (direction === 'back' ? (type === 'stairs1' ? ModelPos + 150 : (type === 'stairs2' ? ModelPos + 70 : (type === 'hole' ? ModelPos - 72 : ModelPos - 5))) : (direction === 'left' ? 150 : (type === 'stairs1' ? ModelPos - 152 : (type === 'stairs2' ? ModelPos - 68 : (direction === 'right' ? (type === 'hole' ? 175 : (type === 'double_door' ? ModelPos - 110 : ModelPos)) : (type === 'hole' ? ModelPos - 68 : ModelPos))))))]} rotation={[0, (direction === 'back' ? Math.PI + 0.01 : (direction === 'left' ? -Math.PI / 2 + 0.01 : (direction === 'right' ? Math.PI / 2 + 0.01 : 0.01))), -0.007]}>
            <group position={[0, pstHorizontalLine, 0]}>
            <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'left' ? pointA.x - 135 : (direction === 'right' ? pointA.x + 250 : pointA.x - 6)), (direction === 'left' ? -3.2 : (direction === 'right' ? -2 : -1.8)), 2] }>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <Line points={[[(direction === 'left' ? pointA.x - 136 : (direction === 'right' ? pointA.x + 250 : pointA.x - 6)), pointA.y, pointA.z + 3], [(direction === 'back' || direction === 'right' ? -firstXPosition : (direction === 'front' || direction === 'left' ? firstXPosition : 0)), 0, 3]]} color="black" lineWidth={1} rotation={[0, -0.01, 0.01]} />
            {/* first X */}
            <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'right' ? -firstXPosition : firstXPosition), (direction === 'left' ? -2 : (direction === 'right' ? 1 : 0)), 2]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <Line points={[[(direction === 'right' ? -firstXPosition : firstXPosition), 0, 3], [(direction === 'right' ? -secondXPosition : secondXPosition), 0, 3]]} color="black" lineWidth={1} rotation={[0, -0.01, 0.01]} />
             <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'right' ? -secondXPosition : secondXPosition), (direction === 'left' ? -2 : (direction === 'right' ? 1 : 0)), 2]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <Line points={[[(direction === 'left' ? (type === 'door' || type === 'double_door' || type === 'gate'? position[2] - 170 : (type === 'hole' ? position[2] - 180 : (type ==='stairs1' || type === 'stairs2' ? position[2] - 155 : position[2] - 98))) : (direction === 'right' ? (type === 'door' || type === 'double_door' || type === 'gate' ? -position[2] + 160 : (type === 'hole' ? -position[2] + 145 : -position[2] + 180)) : position[0] + (type === 'hole' ? 20 : 33))), 0, 3], [(direction === 'left' ? pointB.x - 123 : (direction === 'right' ? pointB.x + 255 : pointB.x + 4)), pointB.y - 5, pointB.z - 2]]} color="black" lineWidth={1} rotation={[0, -0.01, 0.01]}/>
            <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'left' ? pointB.x - 123 : (direction === 'right' ? pointB.x + 255 : pointB.x + 6)), (direction === 'left' ? -0.5 : 1.6), 4]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <Text position={[((direction === 'back' ? (type === 'hole' ? -position[0] - 80 : (type === 'gate' ? -position[0] + gateDistance : -position[0])) : (direction === 'left' ? (type === 'door' || type === 'double_door' || type === 'hole' ? position[2] + 50 : (type === 'stairs1' ? position[2] + 100 :  position[2] + 200)) : (type === 'stairs2' ? position[0] + 50 : (direction === 'right' ? (type === 'door' || type === 'double_door' || type === 'gate' ? -position[2] + 230 : (type === 'hole' ? -position[2] + 190 : -position[2] + 280)) : position[0] + gateDistance)))) / (WidthSetterLengthtHail >= 25 ? 1.2 : (direction === 'back' ? 1.2 : 1.5))) - 95, 18, 4]} fontSize={10} color="white" anchorX="center" anchorY="top">
                {firstLabelText}
            </Text>
            <Text position={[(direction === 'back' ? -position[0] + add : (direction === 'left' ? position[2] + add : (direction === 'right' ? -position[2] + add : position[0] + add))), 18, 4]} fontSize={10} color="white" anchorX="center" anchorY="top">
                {width}
            </Text>
            <Text position={[((direction === 'back' ? (type === 'hole' ? -position[0] - 90 : (type === 'stairs1' ? -position[0] - 80 : -position[0] - 120)) : (direction === 'left' ? (type === 'gate' ? position[2] - gateDistance : position[2] - 650) : (type === 'stairs2' ? position[0] + 100 : (direction === 'right' ? (type === 'door' || type === 'double_door'  || type === 'hole' ? -position[2] + 230 : (type === 'gate' ? -position[2] + gateDistance : -position[2] + 290)) : position[0])))) / (WidthSetterLengthtHail >= 25 ? 1.2 : (direction === 'back' ? 1.2 : 1.5))) + (type === 'hole' ? 70 : 120), 18, 4]} fontSize={10} color="white" anchorX="center" anchorY="top">
                {(type === 'hole' ? (parseInt(secondLabelText) + Math.round(13 * oneMeter)).toString() : secondLabelText)}
            </Text>
            </group>
            <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, linePosition, 3]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <Line points={[[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, secondLinePosition, 3], [(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, linePosition, 3]]} color="black" lineWidth={0.5} rotation={[0, 0, 0]}/>
            <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, secondLinePosition, 3]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <Line points={[[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, secondLinePosition, 3], [(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, -position[1] - 112, 3]]} color="black" lineWidth={0.5} rotation={[0, 0, 0]}/>
            <group rotation={[0, 0, Math.PI / 4]} position={[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - linePST, -position[1] - 112, 3]}>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[1, 8, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
                <mesh rotation={[0, 0, 0]}>
                    <boxBufferGeometry args={[8, 1, 0.3]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </group>
            <mesh position={[113.5, 0, 0]}>
                <sphereBufferGeometry args={[0.1, 16, 16]} /> {/* Rozmiar i szczegółowość punktu */}
                <meshBasicMaterial color="red" /> {/* Kolor punktu */}
            </mesh>
            <Text position={[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - textSub, (type === 'door' || type === 'double_door' ? -80 : ((secondLinePosition + (-position[1] - 112) + 15)) / 2), 4]} fontSize={10} color="white" anchorX="center" anchorY="top">
               {(type === 'door' || type === "double_door" ? 212 : (type === 'gate' || type === 'hole' ? '' : (type === 'stairs1' ? 420 : Math.round((secondLinePosition - (-position[1] - 112) * oneMeter)).toString())))}
            </Text>
            <Text position={[(direction === 'back' ? -position[0] : (direction === 'left' ? position[2] : (direction === 'right' ? -position[2] : position[0]))) - textSub, -38 - sub, 4]} fontSize={10} color="white" anchorX="center" anchorY="top">
                {(obj === '4_window' ? windowHeight_4[idx] : (type === 'gate' ? height : (type === 'hole' ? 300 : (type === 'stairs1' || type === 'stairs2' ? 212 : windowHeight))))}
            </Text>
        </group>
    );
})

export default MeasureBetweenPoints;