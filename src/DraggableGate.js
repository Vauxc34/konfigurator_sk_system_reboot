import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture';
import { useThree } from "@react-three/fiber";
import MeasureBetweenPoints from './MeasureBetweenPoints';
import { Vector3 } from 'three';

const DraggableWindow = React.memo((props) =>  {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    let sub;
    if(props.direction === 'back' || props.direction === 'front'){
        sub = props.elementPositionToSub;
    }else if(props.direction === 'left' || props.direction === 'right' ){
        sub = props.elementPositionToSubSides;
    }
    const [position, setPosition] = useState((props.direction === 'back' || props.direction === 'front' ? [props.newposition.x, props.newposition.y, props.ModelPos] : [props.ModelPos, props.newposition.y, props.newposition.z]));
    const [rotation, setRotation] = useState([props.newrotation.x, props.newrotation.y, props.newrotation.z]);
    const [scale, setScale] = useState([46, 46, 114]);
    const [show, setShow] = useState(false);
    const typeArray = ['none', 'half', 'full'];
    const [typeIdx, setTypeIdx] = useState(typeArray.indexOf(props.glassType));
    const [draggable, setDraggable] = useState(true);
    const [LeftCorner, setLeftCorner] = useState(-188.2)
    const [RightCorner, setRightCorner] = useState(194.1)
    const [deletedColor, setDeletedColor] = useState(false);
    const [activeDraggable, setActiveDraggable] = useState();
    const [scaleX, setScaleX] = useState([25, 28.5, 32, 35.5, 39, 42.5, 46, 49.5, 53, 56.5, 60, 63.5, 67, 70.5, 74, 77.5]);
    const [scaleY, setScaleY] = useState([25, 28.5, 32, 35.5, 39, 42.5, 46, 49.5, 53, 56.5, 60]);
    const [idxX, setIdxX] = useState(6);
    const [idxY, setIdxY] = useState(6);

    console.log(props)

           if (props.direction === 'front') {
        props.gate.children[6].position.z = -2.6195
        props.gate_half_glass.children[6].position.z = -2.6195
        props.third_object.children[6].position.z = -2.6195
        props.gate.children[6].scale.y = .5
        props.gate_half_glass.children[6].scale.y = .5
        props.third_object.children[6].scale.y = .5
    } else if (props.direction === 'back') {
        props.gate.children[6].position.z = -2.625
        props.gate_half_glass.children[6].position.z = -2.625
        props.third_object.children[6].position.z = -2.625
        props.gate.children[6].scale.y = .5
        props.gate_half_glass.children[6].scale.y = .5
        props.third_object.children[6].scale.y = .5
    } else if (props.direction === 'left') {
        props.gate.children[6].position.z = -2.622
        props.gate_half_glass.children[6].position.z = -2.622
        props.third_object.children[6].position.z = -2.622
        props.gate.children[6].scale.y = .5
        props.gate_half_glass.children[6].scale.y = .5
        props.third_object.children[6].scale.y = .5
    } else if (props.direction === 'right') {
        props.gate.children[6].position.z = -2.6245
        props.gate_half_glass.children[6].position.z = -2.6245
        props.third_object.children[6].position.z = -2.6245
        props.gate.children[6].scale.y = .5
        props.gate_half_glass.children[6].scale.y = .5
        props.third_object.children[6].scale.y = .5
    }


    const changeType = () => {
        if(typeIdx === 2){
            setTypeIdx(0);
        }else{
            setTypeIdx(typeIdx + 1)
        }
    }
    const bind = useDrag(
        ({ active, offset: [x, y] }) => {
            setActiveDraggable(active);
            if(draggable){
                if(props.direction === 'front'){
                    if(props.frontSideBool){
                        const [, y, z] = position;
                        setPosition([x / aspect, props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos - sub - 9.5]);
                        props.setCameraMovement(!active);
                    }
                }else if (props.direction === 'back'){
                    if(props.backSideBool){
                        const [, , z] = position;
                        setPosition([-x / aspect, props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos + sub + 9.5]);
                        props.setCameraMovement(!active);
                    }
                }else if (props.direction === 'left'){
                    if(props.leftSideBool){
                        const [z, , ] = position;
                        setPosition([props.ModelPos + (sub - 6) + 9.5, props.newposition.y + (props.ConstructionPosY - 2), x / aspect]);
                        props.setCameraMovement(!active);
                    }
                }else if (props.direction === 'right'){
                    if(props.rightSideBool){
                        const [z, , ] = position;
                        setPosition([props.ModelPos - (sub - 6) - 9.5, props.newposition.y + (props.ConstructionPosY - 2), -x / aspect]);
                        props.setCameraMovement(!active);
                    }
                }
            }
        },
        { pointerEvents: true }
    );

    useEffect(() => {
        if(props.direction === 'front' || props.direction === 'back'){
            if(props.WidthSetterLengthtHail == 10){
                setLeftCorner(-121.8)
                setRightCorner(128.5)
            }else if(props.WidthSetterLengthtHail == 11){
                setLeftCorner(-137.1)
                setRightCorner(143.3)
            }else if(props.WidthSetterLengthtHail == 12){
                setLeftCorner(-148.6)
                setRightCorner(154.4)
            }else if(props.WidthSetterLengthtHail == 13){
                setLeftCorner(-157.3)
                setRightCorner(164.38)
            }else if(props.WidthSetterLengthtHail == 14){
                setLeftCorner(-172.6)
                setRightCorner(179.24)
            }else if(props.WidthSetterLengthtHail == 15){
                setLeftCorner(-188.2)
                setRightCorner(194.1)
            }else if(props.WidthSetterLengthtHail == 16){
                setLeftCorner(-202.4)
                setRightCorner(208.9)
            }else if(props.WidthSetterLengthtHail == 17){
                setLeftCorner(-218.2)
                setRightCorner(223.82)
            }else if(props.WidthSetterLengthtHail == 18){
                setLeftCorner(-233)
                setRightCorner(238.68)
            }else if(props.WidthSetterLengthtHail == 19){
                setLeftCorner(-248)
                setRightCorner(254.06)
            }else if(props.WidthSetterLengthtHail == 20){
                setLeftCorner(-262.4)
                setRightCorner(269.01)
            }else if(props.WidthSetterLengthtHail == 21){
                setLeftCorner(-278.1)
                setRightCorner(283.95)
            }else if(props.WidthSetterLengthtHail == 22){
                setLeftCorner(-280.7)
                setRightCorner(286.75)
            }else if(props.WidthSetterLengthtHail == 23){
                setLeftCorner(-298.2)
                setRightCorner(305.44)
            }else if(props.WidthSetterLengthtHail == 24){
                setLeftCorner(-310.9)
                setRightCorner(316.65)
            }else if(props.WidthSetterLengthtHail == 25){
                setLeftCorner(-328.1)
                setRightCorner(334.46)
            }else if(props.WidthSetterLengthtHail == 26){
                setLeftCorner(-334.5)
                setRightCorner(340.99)
            }else if(props.WidthSetterLengthtHail == 27){
                setLeftCorner(-341.2)
                setRightCorner(346.44)
            }else if(props.WidthSetterLengthtHail == 28){
                setLeftCorner(-346.5)
                setRightCorner(351.88)
            }else if(props.WidthSetterLengthtHail == 29){
                setLeftCorner(-352.78)
                setRightCorner(358.71)
            }else if(props.WidthSetterLengthtHail == 30){
                setLeftCorner(-367.6)
                setRightCorner(374.1)
            }else if(props.WidthSetterLengthtHail == 31){
                setLeftCorner(-382.3)
                setRightCorner(389.51)
            }else if(props.WidthSetterLengthtHail == 32){
                setLeftCorner(-391.1)
                setRightCorner(398.31)
            }else if(props.WidthSetterLengthtHail == 33){
                setLeftCorner(-397.4)
                setRightCorner(403.81)
            }else if(props.WidthSetterLengthtHail == 34){
                setLeftCorner(-412.8)
                setRightCorner(419.22)
            }else if(props.WidthSetterLengthtHail == 35){
                setLeftCorner(-428.0)
                setRightCorner(433.77)
            }
        }else if(props.direction === 'left' || props.direction === 'right'){
            if(props.RangeSetterLengthtHail == 10){
                setLeftCorner(-190.84)
                setRightCorner(66.49)
            }else if(props.RangeSetterLengthtHail == 11){
                setLeftCorner(-202.53)
                setRightCorner(77.54)
            }else if(props.RangeSetterLengthtHail == 12){
                setLeftCorner(-214.62)
                setRightCorner(90.44)
            }else if(props.RangeSetterLengthtHail == 13){
                setLeftCorner(-227.54)
                setRightCorner(102.12)
            }else if(props.RangeSetterLengthtHail == 14){
                setLeftCorner(-239.88)
                setRightCorner(114.60)
            }else if(props.RangeSetterLengthtHail == 15){
                setLeftCorner(-251.65)
                setRightCorner(126.81)
            }else if(props.RangeSetterLengthtHail == 16){
                setLeftCorner(-263.37)
                setRightCorner(139.64)
            }else if(props.RangeSetterLengthtHail == 17){
                setLeftCorner(-276.38)
                setRightCorner(150.29)
            }else if(props.RangeSetterLengthtHail == 18){
                setLeftCorner(-288.07)
                setRightCorner(162.65)
            }else if(props.RangeSetterLengthtHail == 19){
                setLeftCorner(-299.54)
                setRightCorner(173.84)
            }else if(props.RangeSetterLengthtHail == 20){
                setLeftCorner(-312.27)
                setRightCorner(185.79)
            }else if(props.RangeSetterLengthtHail == 21){
                setLeftCorner(-323.40)
                setRightCorner(199.59)
            }else if(props.RangeSetterLengthtHail == 22){
                setLeftCorner(-335.09)
                setRightCorner(211.5)
            }else if(props.RangeSetterLengthtHail == 23){
                setLeftCorner(-347.49)
                setRightCorner(223.15)
            }else if(props.RangeSetterLengthtHail == 24){
                setLeftCorner(-360.57)
                setRightCorner(235.14)
            }else if(props.RangeSetterLengthtHail == 25){
                setLeftCorner(-372.24)
                setRightCorner(246.46)
            }else if(props.RangeSetterLengthtHail == 26){
                setLeftCorner(-383.09)
                setRightCorner(258.58)
            }else if(props.RangeSetterLengthtHail == 27){
                setLeftCorner(-396.69)
                setRightCorner(270.04)
            }else if(props.RangeSetterLengthtHail == 28){
                setLeftCorner(-408.52)
                setRightCorner(284.01)
            }else if(props.RangeSetterLengthtHail == 29){
                setLeftCorner(-420.67)
                setRightCorner(295.4)
            }else if(props.RangeSetterLengthtHail == 30){
                setLeftCorner(-433.03)
                setRightCorner(307.09)
            }else if(props.RangeSetterLengthtHail == 31){
                setLeftCorner(-444.55)
                setRightCorner(318.80)
            }else if(props.RangeSetterLengthtHail == 32){
                setLeftCorner(-456.95)
                setRightCorner(331.55)
            }else if(props.RangeSetterLengthtHail == 33){
                setLeftCorner(-467.92)
                setRightCorner(343.26)
            }else if(props.RangeSetterLengthtHail == 34){
                setLeftCorner(-480.50)
                setRightCorner(355.16)
            }else if(props.RangeSetterLengthtHail == 35){
                setLeftCorner(-491.43)
                setRightCorner(365.69)
            }else if(props.RangeSetterLengthtHail == 36){
                setLeftCorner(-503.63)
                setRightCorner(378.41)
            }else if(props.RangeSetterLengthtHail == 37){
                setLeftCorner(-517.13)
                setRightCorner(391.55)
            }else if(props.RangeLengthtHail == 38){
                setLeftCorner(-528.89)
                setRightCorner(402.68)
            }else if(props.RangeSetterLengthtHail == 39){
                setLeftCorner(-539.55)
                setRightCorner(414.74)
            }else if(props.RangeSetterLengthtHail == 40){
                setLeftCorner(-551.65)
                setRightCorner(426.77)
            }else if(props.RangeSetterLengthtHail == 41){
                setLeftCorner(-563.86)
                setRightCorner(437.64)
            }else if(props.RangeSetterLengthtHail == 42){
                setLeftCorner(-576.75)
                setRightCorner(450.45)
            }else if(props.RangeSetterLengthtHail == 43){
                setLeftCorner(-587.91)
                setRightCorner(463.29)
            }else if(props.RangeSetterLengthtHail == 44){
                setLeftCorner(-600.19)
                setRightCorner(474.63)
            }else if(props.RangeSetterLengthtHail == 45){
                setLeftCorner(-612.29)
                setRightCorner(487.42)
            }else if(props.RangeSetterLengthtHail == 46){
                setLeftCorner(-624.40)
                setRightCorner(498.78)
            }else if(props.RangeSetterLengthtHail == 47){
                setLeftCorner(-634.89)
                setRightCorner(510.15)
            }else if(props.RangeSetterLengthtHail == 48){
                setLeftCorner(-647.27)
                setRightCorner(524.22)
            }else if(props.RangeSetterLengthtHail == 49){
                setLeftCorner(-660.53)
                setRightCorner(535.87)
            }else if(props.RangeSetterLengthtHail == 50){
                setLeftCorner(-672.73)
                setRightCorner(547.52)
            }else if(props.RangeSetterLengthtHail == 51){
                setLeftCorner(-683.98)
                setRightCorner(559.08)
            }else if(props.RangeSetterLengthtHail == 52){
                setLeftCorner(-695.22)
                setRightCorner(572.02)
            }else if(props.RangeSetterLengthtHail == 53){
                setLeftCorner(-708.34)
                setRightCorner(584.06)
            }else if(props.RangeSetterLengthtHail == 54){
                setLeftCorner(-719.58)
                setRightCorner(596.10)
            }else if(props.RangeSetterLengthtHail == 55){
                setLeftCorner(-732.70)
                setRightCorner(608.15)
            }else if(props.RangeSetterLengthtHail == 56){
                setLeftCorner(-743.86)
                setRightCorner(620.58)
            }else if(props.RangeSetterLengthtHail == 57){
                setLeftCorner(-755.13)
                setRightCorner(632.66)
            }else if(props.RangeSetterLengthtHail == 58){
                setLeftCorner(-768.28)
                setRightCorner(644.74)
            }else if(props.RangeSetterLengthtHail == 59){
                setLeftCorner(-781.43)
                setRightCorner(656.88)
            }else if(props.RangeSetterLengthtHail == 60){
                setLeftCorner(-794.60)
                setRightCorner(667.49)
            }else if(props.RangeSetterLengthtHail == 61){
                setLeftCorner(-804.75)
                setRightCorner(679.63)
            }else if(props.RangeSetterLengthtHail == 62){
                setLeftCorner(-816.49)
                setRightCorner(691.76)
            }else if(props.RangeSetterLengthtHail == 63){
                setLeftCorner(-828.81)
                setRightCorner(704.86)
            }else if(props.RangeSetterLengthtHail == 64){
                setLeftCorner(-840.68)
                setRightCorner(717.04)
            }else if(props.RangeSetterLengthtHail == 65){
                setLeftCorner(-852.55)
                setRightCorner(729.22)
            }else if(props.RangeSetterLengthtHail == 66){
                setLeftCorner(-864.42)
                setRightCorner(739.88)
            }else if(props.RangeSetterLengthtHail == 67){
                setLeftCorner(-876.29)
                setRightCorner(751.97)
            }else if(props.RangeSetterLengthtHail == 68){
                setLeftCorner(-889.03)
                setRightCorner(764.50)
            }else if(props.RangeSetterLengthtHail == 69){
                setLeftCorner(-900.58)
                setRightCorner(775.24)
            }else if(props.RangeSetterLengthtHail == 70){
                setLeftCorner(-914.10)
                setRightCorner(788.56)
            }else if(props.RangeSetterLengthtHail == 71){
                setLeftCorner(-925.70)
                setRightCorner(799.36)
            }else if(props.RangeSetterLengthtHail == 72){
                setLeftCorner(-937.30)
                setRightCorner(811.96)
            }else if(props.RangeSetterLengthtHail == 73){
                setLeftCorner(-948.89)
                setRightCorner(824.84)
            }else if(props.RangeSetterLengthtHail == 74){
                setLeftCorner(-961.72)
                setRightCorner(834.75)
            }else if(props.RangeSetterLengthtHail == 75){
                setLeftCorner(-973.16)
                setRightCorner(848.59)
            }
        }
    }, [props.WidthSetterLengthtHail, props.RangeSetterLengthtHail])
    
    useEffect(() => {
        if(props.direction === 'front'){
            setPosition([position[0], props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos - sub - 9.5]);
        }else if(props.direction === 'back'){
            setPosition([position[0], props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos + sub + 9.5]);
        }else if(props.direction === 'left'){
            setPosition([props.ModelPos + (sub - 6) + 9.5, props.newposition.y + (props.ConstructionPosY - 2), position[2]]);
        }else if(props.direction === 'right'){
            setPosition([props.ModelPos - (sub - 6) - 9.5,props.newposition.y + (props.ConstructionPosY - 2), position[2]]);
        }
    }, [props.ModelPos, props.ConstructionPosY]);

    
    const changeYScale = (e) => {
         // Store the initial position of the mouse\
        setDraggable(false)
        let sclY = [25, 28.5, 32, 35.5, 39, 42.5, 46, 49.5, 53, 56.5, 60];
        let previousY = e.clientY + 100;
        let indexY = sclY.indexOf(props.scaleY);
        const threshold = 10;
        const onPointerMove = (e) => {
            const deltaY = e.clientY - previousY;

             if(deltaY > threshold){
                indexY = Math.max(0, indexY - 1); // Zmniejsz index, ale nie mniej niż 0
                previousY = e.clientY; // Aktualizuj previousY
                setIdxY(indexY)
            } else if(deltaY < -threshold){
                indexY = Math.min(10, indexY + 1); // Zwiększ index, ale nie więcej niż 3
                previousY = e.clientY; // Aktualizuj previousY
                setIdxY(indexY)
            }
            setScale([scale[0], sclY[indexY], scale[2]]);
        }

        const onPointerUp = () => {
          document.removeEventListener('pointermove', onPointerMove);
          document.removeEventListener('pointerup', onPointerUp);
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
        // // Store the initial position of the mouse\
        // setDraggable(false)
        // const initialY = e.clientY;
        // const onPointerMove = (e) => {
        //     const deltaY = e.clientY - initialY;
        //     setScale([scale[0], scale[1] - deltaY, scale[2]])
        //     setPosition(position)
        // };

        // const onPointerUp = () => {
        //   document.removeEventListener('pointermove', onPointerMove);
        //   document.removeEventListener('pointerup', onPointerUp);
        // };

        // document.addEventListener('pointermove', onPointerMove);
        // document.addEventListener('pointerup', onPointerUp);
    }

    const changeXScale = (e) => {
         // Store the initial position of the mouse\
         setDraggable(false)
         let sclX = [25, 28.5, 32, 35.5, 39, 42.5, 46, 49.5, 53, 56.5, 60, 63.5, 67, 70.5, 74, 77.5];
         let previousX = -e.clientX + 150;
         let indexX = sclX.indexOf(props.scaleX);
         const threshold = 10;
         const onPointerMove = (e) => {
             const deltaX = -e.clientX - previousX;
 
             if(deltaX > threshold){
                 indexX = Math.max(0, indexX - 1); // Zmniejsz index, ale nie mniej niż 0
                 previousX = -e.clientX; // Aktualizuj previousY
                 setIdxX(indexX)
             }else if(deltaX < -threshold){
                 indexX = Math.min(14, indexX + 1); // Zwiększ index, ale nie więcej niż 3
                 previousX = -e.clientX; // Aktualizuj previousY
                 setIdxX(indexX)
             }
             setScale([sclX[indexX], scale[1], scale[2]]);
         }
 
         const onPointerUp = () => {
           document.removeEventListener('pointermove', onPointerMove);
           document.removeEventListener('pointerup', onPointerUp);
         };
 
         document.addEventListener('pointermove', onPointerMove);
         document.addEventListener('pointerup', onPointerUp);
        // // Store the initial position of the mouse\
        // setDraggable(false)
        // const initialX = e.clientX;
        // const onPointerMove = (e) => {
        //     const deltaX = e.clientX - initialX;
        //     setScale([scale[0] + deltaX, scale[1], scale[2]])
        //     if(props.direction === 'front' || props.direction === 'back'){
        //         setPosition(position)
        //     }else if(props.direction === 'left'){
        //         setPosition([position[0] - 3.5, position[1], position[2]])
        //     }else if(props.direction === 'right'){
        //         setPosition([position[0] + 3.5, position[1], position[2]])
        //     }
        // };

        // const onPointerUp = () => {
        //   document.removeEventListener('pointermove', onPointerMove);
        //   document.removeEventListener('pointerup', onPointerUp);
        // };

        // document.addEventListener('pointermove', onPointerMove);
        // document.addEventListener('pointerup', onPointerUp);
    }

    useEffect(() => {
        const idx = props.BramaColorObrobka.indexOf('#') + 1;
        const idx2 = props.BramaColor.indexOf('#') + 1;
        const writeColor = props.BramaColorObrobka.slice(idx, props.BramaColorObrobka.length);
        const writeColor2 = props.BramaColor.slice(idx2, props.BramaColor.length);
        if(props.direction === 'front'){
            if(LeftCorner > position[0] || RightCorner < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(0xea8064)                
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(0xea8064)        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(0xea8064)        
                }
                if(!activeDraggable){
                    props.handleDeleteGate(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    console.log(props.gate)
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))     
                }else if(typeArray[typeIdx] === 'half'){
                    console.log(props.gate_half_glass)
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))        
                }else if(typeArray[typeIdx] === 'full'){
                    console.log(props.third_object)
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))                    
                }
            }
        }else if(props.direction === 'back'){
            if(LeftCorner - 30 > position[0] || RightCorner - 105 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(0xea8064)                
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(0xea8064)        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(0xea8064)              
                }
                if(!activeDraggable){
                    props.handleDeleteGate(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))     
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))                      
                }
            }
        }else if(props.direction === 'left'){
            if(LeftCorner + 105 > position[2] || RightCorner + 35 < position[2] || props.HeightHall < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(0xea8064)                
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(0xea8064)        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(0xea8064)                  
                }
                if(!activeDraggable){
                    props.handleDeleteGate(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))     
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))                      
                }
            }
        }else if(props.direction === 'right'){
            if(LeftCorner + 45 > position[2] || RightCorner - 30 < position[2] || props.HeightHall + 10 < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(0xea8064)                
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(0xea8064)        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(0xea8064)                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(0xea8064)           
                }
                if(!activeDraggable){
                    props.handleDeleteGate(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.gate.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))     
                }else if(typeArray[typeIdx] === 'half'){
                    props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.gate_half_glass.children=[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))        
                }else if(typeArray[typeIdx] === 'full'){
                    props.third_object.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
                    props.third_object.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))                     
                }
            }
        }
    }, [props.HeightHall, LeftCorner, RightCorner, position, props.gate, props.BramaColorObrobka])

     //change window colors
     useEffect(() => {
        const idx = props.BramaColorObrobka.indexOf('#') + 1;
        const idx2 = props.BramaColor.indexOf('#') + 1;
        const writeColor = props.BramaColorObrobka.slice(idx, props.BramaColorObrobka.length);
        const writeColor2 = props.BramaColor.slice(idx2, props.BramaColor.length);
        if(typeArray[typeIdx] === 'none'){
            console.log(props.gate.children)
            props.gate.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`));             
            props.gate.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`));
        }else if(typeArray[typeIdx] === 'half'){
            props.gate_half_glass.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`));              
            props.gate_half_glass.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`));
        }else if(typeArray[typeIdx] === 'full'){
            props.third_object.children[6].children[0].children[0].children[0].material.color.set(parseInt(`0x${writeColor2}`))                 
            props.third_object.children[6].children[0].children[0].children[1].material.color.set(parseInt(`0x${writeColor}`))                     
        }
    }, [props.BramaColorObrobka, props.BramaColor])

    const modelRef = useRef();
    const [box, setBox] = useState();
    useEffect(() => {
        if (modelRef.current) {
            const model = modelRef.current;
            const box = new THREE.Box3().setFromObject(model);
            console.log(model.position.x + box.min.x)
            setBox(box);
        }
    }, []);

    useEffect(() => {
        if(props.direction === 'front'){
            setPosition([props.newposition.x + props.x, props.newposition.y, props.ModelPos - sub - 9.5]);
        }else if(props.direction === 'back'){
            setPosition([props.newposition.x - 67 - props.x, props.newposition.y, props.ModelPos + sub + 9.5]);
        }else if(props.direction === 'left'){
            setPosition([props.ModelPos  + (sub - 6) + 9.5, props.newposition.y, props.newposition.z + props.x]);
        }else if(props.direction === 'right'){
            setPosition([props.ModelPos - (sub - 6) - 9.5, props.newposition.y, props.newposition.z - 67 - props.x]);
        }
    }, [props.x])

    useEffect(() => {
        if(typeArray[typeIdx] === 'none'){
            if(props.direction === 'left'){
                props.gate.children[6].children[0].children[0].children[0].scale.set(1, 1, 1);
                props.gate.children[6].children[0].children[0].children[0].position.set(1, 1, 3);
                props.gate.children[6].children[0].children[0].children[1].scale.set(1, 1, 3);
            }else{
                props.gate.children[6].children[0].children[0].children[0].scale.set(1, 1, 1);
                props.gate.children[6].children[0].children[0].children[0].position.set(1, 1, 3);
                props.gate.children[6].children[0].children[0].children[1].scale.set(1, 1, 3);
            }
        }else if(typeArray[typeIdx] === 'half'){
            if(props.direction === 'left'){
                props.gate_half_glass.children[6].children[0].children[0].children[0].scale.set(1, 1, 1);
                props.gate_half_glass.children[6].children[0].children[0].children[0].position.set(0, 0, 3);
                props.gate_half_glass.children[6].children[0].children[0].children[1].scale.set(1, 1, 3); 
            }else{
                props.gate_half_glass.children[6].children[0].children[0].children[0].scale.set(1, 1, 1);
                props.gate_half_glass.children[6].children[0].children[0].children[0].position.set(0, 0, 3);
                props.gate_half_glass.children[6].children[0].children[0].children[1].scale.set(1, 1, 3); 
            }
        }else if(typeArray[typeIdx] === 'full'){
            if(props.direction === 'left'){
                props.third_object.children[6].children[0].children[0].children[0].scale.set(1, 1, 1);
                props.third_object.children[6].children[0].children[0].children[0].position.set(0, 0, 3);
                props.third_object.children[6].children[0].children[0].children[1].scale.set(1, 1, 3); 
            }else{
                props.third_object.children[6].children[0].children[0].children[0].scale.set(1, 1, 1);
                props.third_object.children[6].children[0].children[0].children[0].position.set(0, 0, 3);
                props.third_object.children[6].children[0].children[0].children[1].scale.set(1, 1, 3); 
            }
        }
    }, [typeIdx])

    return (
        <>            
        {(show ? <MeasureBetweenPoints idxX={idxX} idxY={idxY} scaleX={scaleX} scaleY={scaleY} RangeSetterLengthtHail={props.RangeSetterLengthtHail} ModelPos={props.ModelPos} direction={props.direction} type={props.type} size={props.size} obj={props.obj} windowHeight={props.windowHeight} WidthSetterLengthtHail={props.WidthSetterLengthtHail} box={box} position={position} pointA={new Vector3(LeftCorner, 0, 0)} pointB={new Vector3(RightCorner + 30, 5, 5)}/> : '')}
        <mesh
            onPointerEnter={(e) => { 
                const canvas = document.querySelector('canvas'); 
                if(e.object.parent.type === 'Group'){
                    canvas.style.cursor = 'pointer';
                }else{
                    canvas.style.cursor = 'grab';
                }
            }}
            onPointerLeave={() => { const canvas = document.querySelector('canvas'); canvas.style.cursor = null }}
            onClick={() => setShow(true)}
            onPointerMissed={() => setShow(false)}
            position={position}
            rotation={rotation}
            {...bind()}
        >
            <primitive ref={modelRef} object={(typeArray[typeIdx] == "half" ? props.gate_half_glass : (typeArray[typeIdx] == "full" ? props.third_object : props.gate))} scale={scale}>
            <group>
            {(show ? <group renderOrder={1} name={'Group'} position={(props.direction === 'front' || props.direction === 'back' ? [0.8, 2.02, -5.3] : [0.8, 2.02, -5.3])} rotation={[0, Math.PI, 0.8]} onClick={() => props.handleDeleteGate(props.index)}>
                    <mesh>
                        <circleBufferGeometry args={[0.15, 32]} /> {/* Ustaw odpowiednią średnicę i ilość segmentów */}
                        <meshBasicMaterial colorManagement={true} linear={false} color="red" />
                    </mesh>
                    <mesh>
                        <boxBufferGeometry args={[0.03, 0.2, 0.01]} />
                        <meshBasicMaterial colorManagement={true} linear={false}color="white" />
                    </mesh>
                    <mesh>
                        <boxBufferGeometry args={[0.2, 0.03, 0.01]} />
                        <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                    </mesh>
                </group> : '')}

            {(show ? <group position={(props.direction === 'front' || props.direction === 'back' ? [-2.55, -0.98, -5.3] : [-2.55, -0.98, -5.3])} rotation={[Math.PI, 0, 0]} onClick={() => changeType()}>
                <mesh position={[3.02, -3, 0]}>
                    <circleBufferGeometry rotation={(props.direction === 'front' || props.direction === 'back' ? [0, -Math.PI / 2, 0] : [0, 0, 0])} args={[0.15, 32]}/> {/* Ustaw odpowiednią średnicę i ilość segmentów */}
                    <meshBasicMaterial colorManagement={true} linear={false} color="#6FA8DC" />
                </mesh>
                <mesh position={[3.01, -2.97, 0]} rotation={[0, 0, -Math.PI / 4]}> {/* Dodaj strzałkę jako mesh */}
                    <boxBufferGeometry args={[0.03, 0.13, 0.01]} />
                    <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                </mesh>
                <mesh position={[3.01, -3.04, 0]} rotation={[0, 0, Math.PI / 4]}> {/* Dodaj strzałkę jako mesh */}
                    <boxBufferGeometry args={[0.03, 0.13, 0.01]} />
                    <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                </mesh>
            </group> : '')}

            {(show ? 
                <mesh 
                    onPointerDown={(e) => {changeYScale(e)}}
                    onPointerLeave={() => {setDraggable(true); props.setCameraMovement(!props.cameraMovement);}}
                    scale={[0.6, 0.3, 0.5]} rotation={(props.direction === 'front' || props.direction === 'back' ? [Math.PI, 0, Math.PI] : (props.direction === 'left' ? [Math.PI, 0, Math.PI] : [Math.PI, 0, Math.PI]))} position={[2, 2.3, -5.3]}
                >
                    <shapeGeometry/>
                    <meshBasicMaterial colorManagement={true} linear={false} color="rgba(0, 0, 0, 0.2)"/>
                </mesh> 
            : '')}

            {(show ? 
                <mesh onPointerDown={(e) => {changeXScale(e)}} onPointerLeave={() => {setDraggable(true); props.setCameraMovement(!props.cameraMovement);}} scale={[0.6, 0.3, 0.5]} rotation={(props.direction === 'front' || props.direction === 'back' ? [Math.PI, 0, Math.PI / 2] : (props.direction === 'left' ? [Math.PI, 0, Math.PI / 2] : [Math.PI, 0, Math.PI / 2]))} position={(props.direction === 'front' || props.direction === 'back' ? [0.5, 1, -5.3] : [0.5, 1, -5.3])}>
                    <shapeGeometry/>
                    <meshBasicMaterial colorManagement={true} linear={false} color="rgba(0, 0, 0, 0.2)"/>
                </mesh> 
            : '')}

            <mesh position={[2.035, 0.85, props.direction === 'front' ? -5.235 : props.direction === 'back' ? -5.255 : props.direction === 'right' ?  -5.24 :  -5.235 ]} rotation={[0, 0, 0]}>
                <boxBufferGeometry attach="geometry" args={[2.35, 2.1, .065]} />
                <meshBasicMaterial colorManagement={true} linear={false} color={deletedColor ? '#ea8064' : ''} side={THREE.DoubleSide} transparent={true} opacity={0}/>
            </mesh>

            {typeArray[typeIdx] == "half" ? 

            <>
            
            <group position={[0, 0.105, 0]}>


            <mesh renderOrder={0} position={[2.85, 0.915, -5.27]} >
            <boxBufferGeometry args={[0.78, 0.285, .006]} />
            <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
            </mesh>  

            <mesh renderOrder={0} position={[2.04, 0.915, -5.27]} >
            <boxBufferGeometry args={[0.75, 0.285, .006]} />
            <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
            </mesh>   

            <mesh renderOrder={0} position={[1.25, 0.915, -5.27]} >
            <boxBufferGeometry args={[0.78, 0.285, .006]} />
            <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
            </mesh>   

            </group>

            <group position={[0, 0.13, 0]}>


            <mesh renderOrder={0} position={[2.85, 0.555, -5.27]} >
            <boxBufferGeometry args={[0.78, 0.285, .01]} />
            <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
            </mesh>  

            <mesh renderOrder={0} position={[2.04, 0.555, -5.27]} >
            <boxBufferGeometry args={[0.75, 0.285, .01]} />
            <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
            </mesh>   

            <mesh renderOrder={0} position={[1.25, 0.555, -5.27]} >
            <boxBufferGeometry args={[0.78, 0.285, .01]} />
            <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
            </mesh>   

            </group>   

            </>

            : null}

            {typeArray[typeIdx] == "full" ? 

            <>
            
                <group position={[0, 0.047, 0]}>
                    <mesh position={[2.85, 1.645, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>  

                    <mesh position={[2.04, 1.645, -5.27]} >
                        <boxBufferGeometry args={[0.74, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                    <mesh position={[1.25, 1.645, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                </group>

                <group position={[0, 0.078, 0]}>


                    <mesh position={[2.85, 1.280, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>  

                    <mesh position={[2.04, 1.280, -5.27]} >
                        <boxBufferGeometry args={[0.74, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                    <mesh position={[1.25, 1.280, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                </group>   

                <group position={[0, 0.105, 0]}>


                    <mesh position={[2.85, 0.915, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>  

                    <mesh position={[2.04, 0.915, -5.27]} >
                        <boxBufferGeometry args={[0.74, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                    <mesh position={[1.25, 0.915, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                </group> 

                <group position={[0, 0.13, 0]}>


                    <mesh position={[2.85, 0.555, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .01]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>  

                    <mesh  position={[2.04, 0.555, -5.27]} >
                        <boxBufferGeometry args={[0.74, 0.285, .006]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                    <mesh  position={[1.25, 0.555, -5.27]} >
                        <boxBufferGeometry args={[0.78, 0.285, .01]} />
                        <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} opacity={.125} transparent={true} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                    </mesh>   

                </group> 
                </>

                : null} 
                </group>
            </primitive>
        </mesh>
        </>
    )
})

export default DraggableWindow;