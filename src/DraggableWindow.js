import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useDrag } from 'react-use-gesture';
import { useThree } from "@react-three/fiber";
import { Line, Text } from '@react-three/drei';
import MeasureBetweenPoints from './MeasureBetweenPoints';
import Draggable, {DraggableCore} from 'react-draggable';
import { Vector3 } from 'three';
const _ = require("lodash");  

function DraggableWindow(props) {

    console.log(props.obj)

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    let sub;
    if(props.direction === 'back' || props.direction === 'front'){
        sub = props.elementPositionToSub;
    }else if(props.direction === 'left' || props.direction === 'right' ){
        sub = props.elementPositionToSubSides;
    }
    let glassRotation;
    
    const [position, setPosition] = useState((props.direction === 'back' || props.direction === 'front' ? [props.newposition.x, props.newposition.y, props.ModelPos] : [props.ModelPos, props.newposition.y, props.newposition.z]));
    const [rotation, setRotation] = useState([props.newrotation.x, props.newrotation.y, props.newrotation.z]);
    const [scale, setScale] = useState((props.obj === '3_window' ? [props.scaleX, 155, props.scaleY] : (props.scaleX !== undefined ? [props.scaleX, props.scaleY, (props.obj === '1_window' ? 155 : (props.obj === '1_window_inside' ? 55 : (props.obj === '2_window' ? 65 : (props.obj === '4_window' ? 185 : 25))))] : props.scale)));
    const [show, setShow] = useState(false);
    const [draggable, setDraggable] = useState(true);
    const [deletedColor, setDeletedColor] = useState(false);
    const [activeDraggable, setActiveDraggable] = useState();
    const [LeftCorner, setLeftCorner] = useState(-188.2)
    const [RightCorner, setRightCorner] = useState(194.1)
    const [distance, setDistance] = useState();
    const [linePoints, setLinePoints] = useState();
    const [labelText, setLabelText] = useState();
    const [dltaX, setDltaX] = useState();

    const x = props.x;
    const y = props.y;
    
    useEffect(() => {
        if(props.direction === 'front'){
            setPosition([position[0], position[1], props.ModelPos - sub - subsub]);
        }else if(props.direction === 'back'){
            setPosition([position[0], position[1], props.ModelPos + sub + subsub]);
        }else if(props.direction === 'left'){
            if(props.obj === '4_window'){
                setPosition([props.ModelPos - (sub + 3.5) - subsub, position[1] + props.y, position[2] + props.x]);
            }else{
                setPosition([props.ModelPos - sub - subsub, position[1] + props.y, position[2] + props.x]);
            }
        }else if(props.direction === 'right'){
            if(props.obj === '4_window'){
                setPosition([props.ModelPos + (sub + 3.5) + subsub, position[1] + props.y, position[2] + props.x]);
            }else{
                setPosition([props.ModelPos + sub + subsub, position[1] + props.y, position[2] + props.x]);
            }
        }
    }, [props.ModelPos]);

    let circlePosition, circleRotation, xRotation, transparentPosition, transparentArgs, subsub;
    if(props.direction === 'front' || props.direction === 'back'){
        if(props.obj === '1_window'){
            circlePosition = [0, 1.7, -0.09];
            circleRotation = [0, 3.2, 0];
            xRotation = [0, 0, 0];
            subsub = 7.5;
            if(props.direction === 'front'){
                transparentArgs = [1.2, 1.65, 0.0405];
                transparentPosition = [0.6, 0.9, -0.025];
                glassRotation = [0, 0, 0];
            }else if(props.direction === 'back'){
                transparentArgs = [1.2, 1.65, 0.039];
                transparentPosition = [0.6, 0.9, -0.05];
                glassRotation = [0, 0, 0];
            }
        }else if(props.obj === '2_window'){
            circlePosition = [1.9, 2.2, 0.07];
            circleRotation = [0, 0, 0];
            xRotation = [0, 0, 0];
            if(props.direction === 'front'){
                transparentArgs = [1.8, 2.1, 0.15];
                subsub = 2.5;
                transparentPosition = [1, 1.1, -0.025];
                glassRotation = [0, 0, 0];
            }else if(props.direction === 'back'){
                transparentArgs = [1.8, 2.1, 0.1];
                transparentPosition = [1, 1.1, -0.05];
                glassRotation = [0, 0, 0];
                subsub = 0;
            }
        }else if(props.obj === '3_window'){
            circlePosition = [2.21, -0.02, -0.05];
            circleRotation = [0, -Math.PI / 2, 0];
            xRotation = [0, -Math.PI / 2, Math.PI / 4];
            transparentArgs = [2.1, 0.76, 0.04];
            if(props.direction === 'front'){
                subsub = -1.5;
                transparentPosition = [1.13, 0.04, -0.48];
                glassRotation = [Math.PI / 2, 0, 0];
            }else if(props.direction === 'back'){
                subsub = -1.5;
                transparentPosition = [1.13, 0.0385, -0.48];
                glassRotation = [-Math.PI / 2, 0, 0];
            }
        }else if(props.obj === '4_window'){
            circlePosition = [3.95, 1.65, 0.02];
            circleRotation = [0, 0, 0];
            xRotation = [0, 0, 0];
            if(props.direction === 'front'){
                subsub = 0;
                glassRotation = [0, 0, 0];
                transparentPosition = [2.3, 0.8, -0.02];
            }else if(props.direction === 'back'){
                subsub = 0;
                glassRotation = [0, 0, 0];
                transparentPosition = [2.3, 0.8, -0.02];
            }
            transparentArgs = [3.2, 1.6, 0.04];
        }
    }else{
        if(props.obj === '1_window'){
            circlePosition = [1.2, 1.7, 0.02];
            circleRotation = [0, 0, 0];
            xRotation = [0, 0, 0];
            transparentArgs = [1.2, 1.65, 0.04];
            subsub = 2.5;
            if(props.direction === 'left'){
                transparentPosition = [0.6, 0.9, -0.05];
                glassRotation = [0, 0, 0];
            }else if(props.direction === 'right'){
                transparentPosition = [0.6, 0.9, -0.05];
                glassRotation = [0, 0, 0];
            }

        else if(props.obj === '1_window_inside'){
            circlePosition = [1.2, 1.7, 0.02];
            circleRotation = [0, 0, 0];
            xRotation = [0, 0, 0];
            transparentArgs = [1.2, 1.65, 0.04];
            subsub = 2.5;
            if(props.direction === 'left'){
                transparentPosition = [0.6, 0.9, -0.05];
                glassRotation = [0, 0, 0];
            }else if(props.direction === 'right'){
                transparentPosition = [0.6, 0.9, -0.05];
                glassRotation = [0, 0, 0];
            }
        }
        }else if(props.obj === '2_window'){
            circlePosition = [0, 2.2, -0.14];
            circleRotation = [0, Math.PI, 0];
            xRotation = [0, 0, 0];
            if(props.direction === 'left'){
                subsub = -7.5;
                transparentArgs = [1.8, 2.1, 0.105];
                transparentPosition = [1, 1.1, -0.05];
                glassRotation = [0, 0, 0];
            }else if(props.direction === 'right'){
                subsub = -5.5;
                transparentArgs = [1.8, 2.1, 0.105];
                transparentPosition = [1, 1.1, -0.05];
                glassRotation = [0, 0, 0];
            }
        }else if(props.obj === '3_window'){
            circlePosition = [0.05, 0.09, -0.05];
            circleRotation = [0, Math.PI / 2, 0];
            xRotation = [0, -Math.PI / 2, Math.PI / 4];
            transparentArgs = [2.1, 0.76, 0.04];
            if(props.direction === 'left'){
                subsub = -10.5;
                glassRotation = [-Math.PI / 2, 0, 0];
                transparentPosition = [1.13, 0.0385, -0.48];
            }else if(props.direction === 'right'){
                subsub = -9.5;
                glassRotation = [-Math.PI / 2, 0, 0];
                transparentPosition = [1.13, 0.0385, -0.48];
            }
        }else if(props.obj === '4_window'){
            circlePosition = [0.65, 1.65, -0.09];
            circleRotation = [0, Math.PI, 0];
            xRotation = [0, 0, 0];
            transparentArgs = [3.2, 1.6, 0.04];
            if(props.direction === 'left'){
                transparentArgs = [3.2, 1.6, 0.032];
                subsub = -10.5;
                glassRotation = [0, 0, Math.PI];
                transparentPosition = [2.3, 0.8, -0.0215];
            }else if(props.direction === 'right'){
                subsub = -9.5;
                glassRotation = [0, Math.PI, 0];
                transparentArgs = [3.2, 1.6, 0.03];
                transparentPosition = [2.3, 0.8, -0.02];
            }
        }
    }

    const bind = useDrag(
        ({ active, offset: [x, y] }) => {
            setActiveDraggable(active)
            if(draggable){
                if(props.direction === 'front'){
                    if(props.frontSideBool){
                        const [, , z] = position;
                        setPosition([x / aspect, -y / aspect, props.ModelPos - sub - subsub]);
                        props.setCameraMovement(!active);
                    }
                }else if(props.direction === 'back'){
                    if(props.backSideBool){
                        const [, , z] = position;
                        setPosition([-x / aspect, -y / aspect, props.ModelPos + sub + subsub]);
                        props.setCameraMovement(!active);
                    }
                }else if(props.direction === 'left'){
                    if(props.leftSideBool){
                        const [z, , ] = position;
                        if(props.obj === '4_window'){
                            setPosition([props.ModelPos - (sub + 3.5) - subsub, -y / aspect, x / aspect]);
                        }else{
                            setPosition([props.ModelPos - sub - subsub, -y / aspect, x / aspect]);
                        }
                        props.setCameraMovement(!active);
                    }
                }else if(props.direction === 'right'){
                    if(props.rightSideBool){
                        const [z, , ] = position;
                        if(props.obj === '4_window'){
                            setPosition([props.ModelPos + (sub + 3.5) + subsub, -y / aspect, -x / aspect]);
                        }else{
                            setPosition([props.ModelPos + sub + subsub, -y / aspect, -x / aspect]);
                        }
                        props.setCameraMovement(!active);
                    }
                }
            }
        },
        { pointerEvents: true }
    );

    useEffect(() => {
        if(props.direction === 'front'){
            setPosition([props.newposition.x + props.x, props.newposition.y + props.y, props.ModelPos - sub - subsub]);
        }else if(props.direction === 'back'){
            setPosition([props.newposition.x - 67 - props.x, props.newposition.y + props.y, props.ModelPos + sub  + subsub]);
        }else if(props.direction === 'left'){
            if(props.obj === '4_window'){
                setPosition([props.ModelPos - (sub + 3.5) - subsub, props.newposition.y + props.y, props.newposition.z - 67 + props.x]);
            }else{
                setPosition([props.ModelPos - sub - subsub, props.newposition.y + props.y, props.newposition.z - 67 + props.x]);
            }
        }else if(props.direction === 'right'){
            if(props.obj === '4_window'){
                setPosition([props.ModelPos + (sub + 3.5) + subsub, props.newposition.y + props.y, props.newposition.z + props.x]);
            }else{
                setPosition([props.ModelPos + sub + subsub, props.newposition.y + props.y, props.newposition.z + props.x]);
            }
        }
    }, [props.x, props.y])

    const changeYScale = (e) => {
        // Store the initial position of the mouse\
        setDraggable(false)
        const scl = [10, 20, 25, 30];
        let previousY = e.clientY + 100;
        let index = scl.indexOf(props.scaleY);
        const threshold = 10;
        const onPointerMove = (e) => {
            const deltaY = e.clientY - previousY;

            if(deltaY > threshold){
                index = Math.max(0, index - 1); // Zmniejsz index, ale nie mniej niż 0
                previousY = e.clientY; // Aktualizuj previousY
            }else if(deltaY < -threshold){
                index = Math.min(3, index + 1); // Zwiększ index, ale nie więcej niż 3
                previousY = e.clientY; // Aktualizuj previousY
            }
            setScale([scale[0], scl[index], 25]);
            setPosition(position)
        }

        const onPointerUp = () => {
          document.removeEventListener('pointermove', onPointerMove);
          document.removeEventListener('pointerup', onPointerUp);
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
    }


    const changeXScale = (e) => {
        // Store the initial position of the mouse\
        setDraggable(false)
        const initialX = e.clientX;
        const onPointerMove = (e) => {
            const deltaX = e.clientX - initialX;
            setDltaX(deltaX);
            setScale([scale[0] + deltaX, scale[1], scale[2]])
            if(props.direction === 'front' || props.direction === 'back'){
                setPosition(position)
            }else if(props.direction === 'left'){
                setPosition([position[0] - 3.5, position[1], position[2]])
            }else if(props.direction === 'right'){
                setPosition([position[0] + 3.5, position[1], position[2]])
            }
        };

        const onPointerUp = () => {
          document.removeEventListener('pointermove', onPointerMove);
          document.removeEventListener('pointerup', onPointerUp);
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
    }
    
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
                }else if(props.RangeSetterLengthtHail == 38){
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
        }, [props.WidthSetterLengthtHail, props.RangeSetterLengthtHail, position])
    

    useEffect(() => {
        if(props.direction === 'front'){
            if(props.obj === '1_window'){
                if(LeftCorner > position[0] || RightCorner < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            
            
            
            }else if(props.obj === '2_window'){
                if(LeftCorner + 8 > position[0] || RightCorner - 12 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            }else if(props.obj === '3_window'){
                if(LeftCorner + 14 > position[0] || RightCorner - 20 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            }else if(props.obj === '4_window'){
                if(LeftCorner + 34 > position[0] || RightCorner - 34 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            }

            else if(props.obj === '1_window_inside'){
                if(LeftCorner > position[0] || RightCorner < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            }

        }else if(props.direction === 'back'){
            if(props.obj === '1_window'){
                if(LeftCorner - 70 > position[0] || RightCorner - 70 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '2_window'){
                if(LeftCorner - 58 > position[0] || RightCorner - 78 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '3_window'){
                if(LeftCorner - 54 > position[0] || RightCorner - 85 < position[0] || props.HeightHall + 30 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '4_window'){
                if(LeftCorner - 38 > position[0] || RightCorner - 105 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }
        }else if(props.direction === 'left'){
            if(props.obj === '1_window'){
                if(LeftCorner > position[2] || RightCorner < position[2] || props.HeightHall + 15 < position[1] || -32.5 > position[1]){
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            }else if(props.obj === '2_window'){
                if(LeftCorner + 15 > position[2] || RightCorner - 10 < position[2] || props.HeightHall + 15 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '3_window'){
                if(LeftCorner + 20 > position[2] || RightCorner - 20 < position[2] || props.HeightHall + 45 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '4_window'){
                if(LeftCorner + 35 > position[2] || RightCorner - 35 < position[2] || props.HeightHall + 25 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }
        }else if(props.direction === 'right'){
            if(props.obj === '1_window'){
                if(LeftCorner + 75 > position[2] || RightCorner + 70 < position[2] || props.HeightHall + 15 < position[1] || -32.5 > position[1]){
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    setDeletedColor(false)
                }
            }else if(props.obj === '2_window'){
                if(LeftCorner + 75 > position[2] || RightCorner + 55 < position[2] || props.HeightHall + 15 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '3_window'){
                if(LeftCorner + 90 > position[2] || RightCorner + 50 < position[2] || props.HeightHall + 35 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }else if(props.obj === '4_window'){
                if(LeftCorner + 110 > position[2] || RightCorner + 35 < position[2] || props.HeightHall + 10 < position[1] || -32.5 > position[1]){
                    console.log('element deleted')
                    setDeletedColor(true)
                    if(!activeDraggable){
                        props.handleDeleteWindow(props.index)
                    }
                }else{
                    console.log('element ok')
                    setDeletedColor(false)
                }
            }
        }
    }, [props.HeightHall ,LeftCorner, RightCorner, position])
    
    const modelRef = useRef();
    const [box, setBox] = useState();
    useEffect(() => {
        if (modelRef.current) {
            const model = modelRef.current;
            const box = new THREE.Box3().setFromObject(model);
            setBox(box);
        }
    }, []);

    //change window colors
    useEffect(() => {
        const idx = props.WindowColorRama1.indexOf('#') + 1;
        const writeColor = props.WindowColorRama1.slice(idx, props.WindowColorRama1.length);
        const idx2 = props.WindowColorObroka1.indexOf('#') + 1;
        const writeColor2 = props.WindowColorObroka1.slice(idx2, props.WindowColorObroka1.length);
        if(props.obj === '1_window'){
            props.window.children[0].children[1].children[0].material.color.set(parseInt(`0x${writeColor}`))
        } else if(props.obj === '2_window'){
            props.window.children[0].children[1].children[0].material.color.set(parseInt(`0x${writeColor}`))
            props.window.children[0].children[1].children[1].material.color.set(parseInt(`0x${writeColor}`))
        }else if(props.obj === '3_window'){
            props.window.children[0].children[1].children[0].material.color.set(parseInt(`0x${writeColor}`))
        }else if(props.obj === '4_window'){
            props.window.children[0].children[1].children[0].material.color.set(parseInt(`0x${writeColor}`))
        }
    }, [props.WindowColorRama1, props.WindowColorObroka1]) 

    return (
        <>
        
            {(show ? <MeasureBetweenPoints RangeSetterLengthtHail={props.RangeSetterLengthtHail} ModelPos={props.ModelPos} direction={props.direction} modelRef={modelRef} dltaX={dltaX} scaleX={scale[0]} scaleY={scale[1]} size={props.size} obj={props.obj} windowHeight={props.windowHeight} WidthSetterLengthtHail={props.WidthSetterLengthtHail} box={box} position={position} pointA={new Vector3(LeftCorner, 0, 0)} pointB={new Vector3(RightCorner + 30, 5, 5)}/> : '')}
            <mesh
                onPointerEnter={(e) => { 
                    const canvas = document.querySelector('canvas'); 
                    if(e.object.parent.type === 'Group'){
                        canvas.style.cursor = 'pointer';
                    }else{
                        canvas.style.cursor = 'grab';
                    }
                }}
                onPointerLeave={() => { const canvas = document.querySelector('canvas'); canvas.style.cursor = null; }}
                onClick={() => setShow(true)}
                onPointerMissed={() => setShow(false)}
                renderOrder={0}
                position={position}
                rotation={rotation}
                {...bind()}
            >
                <primitive ref={modelRef} object={props.window} scale={scale}>
                {(show ? <group position={circlePosition} rotation={(props.obj === '3_window' ? [0, 0, 1.6] : [0, 0, 0.8])} onClick={() => props.handleDeleteWindow(props.index)}>
                    <mesh rotation={circleRotation}>
                        <circleBufferGeometry args={(props.obj === '3_window' ? [0.10, 32] : [0.15, 32])} /> {/* Ustaw odpowiednią średnicę i ilość segmentów */}
                        <meshBasicMaterial colorManagement={true} linear={false} color="red" />
                    </mesh>
                    <mesh rotation={xRotation}>
                        <boxBufferGeometry args={(props.obj === '3_window' ? [0.02, 0.12, 0.01] : [0.03, 0.18, 0.01])} />
                        <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                    </mesh>
                    <mesh rotation={xRotation}>
                        <boxBufferGeometry args={(props.obj === '3_window' ? [0.12, 0.02, 0.01] : [0.18, 0.03, 0.01])} />
                        <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                    </mesh>
                </group> : '')}
                {/* transparent element */}
                <mesh position={transparentPosition} rotation={glassRotation}>
                    <boxBufferGeometry side={THREE.DoubleSide} attach="geometry" args={transparentArgs} />
                    <meshPhysicalMaterial colorManagement={true} linear={false} side={THREE.DoubleSide} color={deletedColor ? '#ea8064' : "#ffffff"} transparent={true} opacity={0.125} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                </mesh>
                {(show && props.obj === '4_window' ? 
                    <mesh 
                        onPointerDown={(e) => {changeYScale(e)}}
                        onPointerLeave={() => {setDraggable(true); props.setCameraMovement(!props.cameraMovement);}}
                        scale={[0.6, 0.3, 0.5]} rotation={(props.direction === 'front' || props.direction === 'back' ? [0, 0, 0] : (props.direction === 'left' ? [Math.PI, 0, Math.PI] : [Math.PI, 0, Math.PI]))} position={(props.direction === 'front' || props.direction === 'back' ? [2.26, 1.9, 0] : [2.26, 1.9, -0.05])}
                    >
                        <shapeGeometry/>
                        <meshBasicMaterial colorManagement={true} linear={false} color="rgba(0, 0, 0, 0.2)"/>
                    </mesh> 
                : '')}
                {(show && props.obj === '4_window' ? 
                    <mesh renderOrder={1} onPointerDown={(e) => {changeXScale(e)}} onPointerLeave={() => {setDraggable(true); props.setCameraMovement(!props.cameraMovement);}} scale={[0.6, 0.3, 0.5]} rotation={(props.direction === 'front' || props.direction === 'back' ? [0, 0, -Math.PI / 2] : (props.direction === 'left' ? [Math.PI, 0, Math.PI / 2] : [Math.PI, 0, Math.PI / 2]))} position={(props.direction === 'front' || props.direction === 'back' ? [4.195, 0.9, 0] : [0.4, 0.9, -0.05])}>
                        <shapeGeometry/>
                        <meshBasicMaterial colorManagement={true} linear={false} color="rgba(0, 0, 0, 0.2)"/>
                    </mesh> 
                : '')}
                </primitive>
            </mesh>
        </>
    )
}

export default DraggableWindow;