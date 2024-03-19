import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture';
import { useThree } from "@react-three/fiber";
import MeasureBetweenPoints from './MeasureBetweenPoints';
import { Box3, Vector3 } from 'three';

const DraggableWindow = React.memo((props) =>  {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    let sub;

    console.log(props)


   // let transparentArgs, transparentPosition, glassRotation

    if (props.direction === 'back') {
        props.door.children[0].position.y = -5.85
        props.door.children[0].scale.y = .65
        //console.log(props.door.children[0])
    } else if (props.direction === 'front') {
        props.door.children[0].position.y = -7.5
        props.door.children[0].scale.y = .65
        //console.log(props.door.children[0])
    } else if (props.direction === 'left') {
        props.door.children[0].children[0].position.y = 12
        props.door.children[0].children[0].scale.z = .55
    } else if (props.direction === 'right') {
        props.door.children[0].children[0].position.y = 4.5
        props.door.children[0].children[0].scale.z = .55
    }


    
    if(props.direction === 'back' || props.direction === 'front'){
        sub = props.elementPositionToSub;
    }else if(props.direction === 'left' || props.direction === 'right' ){
        sub = props.elementPositionToSubSides;
    }
    const [position, setPosition] = useState((props.direction === 'back' || props.direction === 'front' ? [props.newposition.x, props.newposition.y, props.ModelPos] : [props.ModelPos, props.newposition.y, props.newposition.z]));
    const [rotation, setRotation] = useState([props.newrotation.x, props.newrotation.y, props.newrotation.z]);
    const [scale, setScale] = useState(props.scaleX !== undefined ? [props.scaleX, props.scaleY, 150] : props.scale);
    const [show, setShow] = useState(false);
    const typeArray = ['none', 'half', 'full'];
    const [typeIdx, setTypeIdx] = useState(typeArray.indexOf(props.glassType));
    const [LeftCorner, setLeftCorner] = useState(-188.2)
    const [RightCorner, setRightCorner] = useState(194.1)
    const [deletedColor, setDeletedColor] = useState(false);
    const [activeDraggable, setActiveDraggable] = useState();

    useEffect(() => {
        const doorBoundingBox = new Box3().setFromObject(props.door);
        let isDoorOnPole;
        props.meshPositionArray.forEach((element) => {
            isDoorOnPole = doorBoundingBox.intersectsBox(element);
        })

        // props.meshPositionArray.forEach((mesh) => {
        //     console.log(mesh)
        //     isOnTarget = mesh.geometry.boundingSphere.containsPoint(props.door.position);
        // })
    }, [props.door, props.meshPositionArray, position])

    const changeType = () => {
        if(typeIdx === 2){
            setTypeIdx(0);
        }else{
            setTypeIdx(typeIdx + 1)
        }

        console.log(typeIdx)
    }

    const bind = useDrag(
        ({event, active, offset: [x, y] }) => {
            setActiveDraggable(active)
            if(props.direction === 'front'){
                if(props.frontSideBool){
                    const [, y, z] = position;

                           if (props.type == 'door' && props.glassType == 'none') {

                            /*const newItems = [
                            ...props.Doors,
                            ];

                              newItems[0] = {
                                ...newItems[0],
                                x: position[0],
                              };
                              props.setDoors(newItems);   
                              
                              console.log(newItems)*/

                    } else if (props.type == 'door' && props.glassType == "half") {

                         
                            /*const newItems = [
                            ...props.Doors,
                            ];

                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                              };
                              props.setDoors(newItems);   
                              
                              console.log(newItems)*/

                              
                              //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                    
                            

                    } else if (props.type == 'door' && props.glassType == "full") {

                         
                            const newItems = [
                            ...props.Doors,
                            ];

                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                              };
                              props.setDoors(newItems);   
                              
                              console.log(newItems)

                              
                              //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                    
                            

                    }    

                    setPosition([x / aspect, props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos - sub - 2]);
                    props.setCameraMovement(!active);
                }
            }else if (props.direction === 'back'){
                if(props.backSideBool){

                           if (props.obj == 'singleDoor' && props.GlassType == "none") {

                        const newItems = [
                            ...props.filteredData1,
                            ...props.filteredData1,
                            ...props.FilteredDataBack,
                            ...props.FilteredDataBack1,
                            ...props.FilteredDataRight,
                            ...props.FilteredDataRight1,
                            ...props.FilteredDataLeft,
                            ...props.FilteredDataLeft1
                            ];

                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                              };
                              props.setDoors(newItems);        

                    } else if (props.obj == 'singleDoor' && props.GlassType == "half") {

                         
                        const newItems = [
                            ...props.filteredData1,
                            ...props.filteredData1,
                            ...props.FilteredDataBack,
                            ...props.FilteredDataBack1,
                            ...props.FilteredDataRight,
                            ...props.FilteredDataRight1,
                            ...props.FilteredDataLeft,
                            ...props.FilteredDataLeft1
                            ];



                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                              };

                              props.setDoors(newItems);    

                              
                              //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                    
                            

                    } else if (props.obj == 'singleDoor' && props.GlassType == "full") {

                         
                        const newItems = [
                            ...props.filteredData1,
                            ...props.filteredData1,
                            ...props.FilteredDataBack,
                            ...props.FilteredDataBack1,
                            ...props.FilteredDataRight,
                            ...props.FilteredDataRight1,
                            ...props.FilteredDataLeft,
                            ...props.FilteredDataLeft1
                            ];


                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                              };
                              
                              props.setDoors(newItems);    

                              
                              //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                    
                            

                    }    

                    const [, , z] = position;
                    setPosition([-x / aspect, props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos + sub + 1.5]);
                    props.setCameraMovement(!active);
                }
            }else if (props.direction === 'left'){
                if(props.leftSideBool){


                    if (props.obj == '1_window') {


                        const newItems = [
                            ...props.FilteredWindowData1LEFT,
                            ...props.FilteredWindowData2,
                            ...props.FilteredWindowData3,
                            ...props.FilteredWindowData4, 
                            ...props.FilteredWindowData1,
                            ...props.FilteredWindowData2BACK,
                            ...props.FilteredWindowData3BACK,
                            ...props.FilteredWindowData4BACK,
                            ...props.FilteredWindowData1,
                            ...props.FilteredWindowData2LEFT,
                            ...props.FilteredWindowData3LEFT,
                            ...props.FilteredWindowData4LEFT,
                            ...props.FilteredWindowData1RIGHT,
                            ...props.FilteredWindowData2RIGHT,
                            ...props.FilteredWindowData3RIGHT,
                            ...props.FilteredWindowData4RIGHT,
                            ];


                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                                y_2d: position[1] * 1.5,
                              };
                              props.setWindows(newItems);

                        //props.setWindows(...FilteredWindowData1[0], { x_2d: position[0], y_2d: position[1] * 1.5 });


                         

                    } else if (props.obj == '2_window') {

                         
                        const newItems = [
                            ...props.FilteredWindowData2LEFT,
                            ...props.FilteredWindowData1,
                            ...props.FilteredWindowData3,
                            ...props.FilteredWindowData4, 
                            ...props.FilteredWindowData1BACK,
                            ...props.FilteredWindowData2BACK,
                            ...props.FilteredWindowData3BACK,
                            ...props.FilteredWindowData4BACK,
                            ...props.FilteredWindowData1LEFT,
                            ...props.FilteredWindowData2,
                            ...props.FilteredWindowData3LEFT,
                            ...props.FilteredWindowData4LEFT,
                            ...props.FilteredWindowData1RIGHT,
                            ...props.FilteredWindowData2RIGHT,
                            ...props.FilteredWindowData3RIGHT,
                            ...props.FilteredWindowData4RIGHT,
                            ];


                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                                y_2d: position[1] * 1.5,
                              };
                              props.setWindows(newItems);

                              
                              //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                    
                            

                    } else if (props.obj == '3_window') {

                         
                        const newItems = [
                            ...props.FilteredWindowData3LEFT,
                            ...props.FilteredWindowData1,
                            ...props.FilteredWindowData3,
                            ...props.FilteredWindowData4, 
                            ...props.FilteredWindowData1BACK,
                            ...props.FilteredWindowData2BACK,
                            ...props.FilteredWindowData3BACK,
                            ...props.FilteredWindowData4BACK,
                            ...props.FilteredWindowData1LEFT,
                            ...props.FilteredWindowData2LEFT,
                            ...props.FilteredWindowData3,
                            ...props.FilteredWindowData4LEFT,
                            ...props.FilteredWindowData1RIGHT,
                            ...props.FilteredWindowData2RIGHT,
                            ...props.FilteredWindowData3RIGHT,
                            ...props.FilteredWindowData4RIGHT,
                            ];


                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                                y_2d: position[1] * 1.5,
                              };
                              props.setWindows(newItems);

                    } else if (props.obj == '4_window') {

                        const newItems = [
                            ...props.FilteredWindowData4LEFT,
                            ...props.FilteredWindowData1,
                            ...props.FilteredWindowData2,
                            ...props.FilteredWindowData3, 
                            ...props.FilteredWindowData1BACK,
                            ...props.FilteredWindowData2BACK,
                            ...props.FilteredWindowData3BACK,
                            ...props.FilteredWindowData4,
                            ...props.FilteredWindowData1LEFT,
                            ...props.FilteredWindowData2LEFT,
                            ...props.FilteredWindowData3LEFT,
                            ...props.FilteredWindowData4,
                            ...props.FilteredWindowData1RIGHT,
                            ...props.FilteredWindowData2RIGHT,
                            ...props.FilteredWindowData3RIGHT,
                            ...props.FilteredWindowData4RIGHT,
                            ];

                            newItems[0] = {
                                ...newItems[0],
                                x_2d: position[0],
                                y_2d: position[1] * 1.5,
                              };
                              props.setWindows(newItems);

                    }  


                    const [z, , ] = position;
                    setPosition([props.ModelPos + (sub - 6) + 2, props.newposition.y + (props.ConstructionPosY - 2), x / aspect]);
                    props.setCameraMovement(!active);
                }
            }else if (props.direction === 'right'){

                if (props.obj == 'singleDoor' && props.GlassType == "none") {

                    const newItems = [
                        ...props.filteredData1,
                        ...props.filteredData1,
                        ...props.FilteredDataBack,
                        ...props.FilteredDataBack1,
                        ...props.FilteredDataRight,
                        ...props.FilteredDataRight1,
                        ...props.FilteredDataLeft,
                        ...props.FilteredDataLeft1
                        ];

                        newItems[0] = {
                            ...newItems[0],
                            x_2d: position[0],
                          };
                          props.setDoors(newItems);     

                } else if (props.obj == 'singleDoor' && props.GlassType == "half") {

                     
                    const newItems = [
                        ...props.filteredData1,
                        ...props.filteredData1,
                        ...props.FilteredDataBack,
                        ...props.FilteredDataBack1,
                        ...props.FilteredDataRight,
                        ...props.FilteredDataRight1,
                        ...props.FilteredDataLeft,
                        ...props.FilteredDataLeft1
                        ];



                        newItems[0] = {
                            ...newItems[0],
                            x_2d: position[0],
                          };
                          props.setDoors(newItems);    

                          
                          //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                
                        

                } else if (props.obj == 'singleDoor' && props.GlassType == "full") {

                     
                    const newItems = [
                        ...props.filteredData1,
                        ...props.filteredData1,
                        ...props.FilteredDataBack,
                        ...props.FilteredDataBack1,
                        ...props.FilteredDataRight,
                        ...props.FilteredDataRight1,
                        ...props.FilteredDataLeft,
                        ...props.FilteredDataLeft1
                        ];


                        newItems[0] = {
                            ...newItems[0],
                            x_2d: position[0],
                          };
                          props.setDoors(newItems);    

                          
                          //props.setWindows(...FilteredWindowData2, { x_2d: position[0], y_2d: position[1] * 1.5 });

                
                        

                } 


                if(props.rightSideBool){
                    const [z, , ] = position;
                    setPosition([props.ModelPos - (sub - 6) - 1.5, props.newposition.y + (props.ConstructionPosY - 2), -x / aspect]);
                    props.setCameraMovement(!active);
                }
            }
        },
        { pointerEvents: true }
    );

    function SetNew2DPos() {
        const [, y, z] = position;

        const newItems = [
            ...props.Doors,
            ];

            newItems[0] = {
                ...newItems[0],
                x_2d: position[0],
              };
              props.setDoors(newItems);   
              
              console.log(newItems)
    }

    useEffect(() => {
        if(props.direction === 'front'){
            setPosition([position[0], props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos - sub - 2]);
        }else if(props.direction === 'back'){
            setPosition([position[0], props.newposition.y + (props.ConstructionPosY - 2), props.ModelPos + sub + 1.5]);
        }else if(props.direction === 'left'){
            setPosition([props.ModelPos + (sub - 6) + 2, props.newposition.y + (props.ConstructionPosY - 2), position[2]]);
        }else if(props.direction === 'right'){
            setPosition([props.ModelPos - (sub - 6) - 1.5, props.newposition.y + (props.ConstructionPosY - 2), position[2]]);
        }
    }, [props.ModelPos, props.ConstructionPosY]);

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
    }, [props.WidthSetterLengthtHail, props.RangeSetterLengthtHail])

    const modelRef = useRef();
    const [box, setBox] = useState();
    useEffect(() => {
        if (modelRef.current) {
            const model = modelRef.current;
            const box = new THREE.Box3().setFromObject(model);
            setBox(box);
        }
    }, []);

    useEffect(() => {
        const idx = props.DoorColor1.indexOf('#') + 1;
        const doorColor = props.DoorColor1.slice(idx, props.DoorColor1.length);
        if(props.direction === 'front'){
            if(LeftCorner > position[0] || RightCorner < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(0xea8064);
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }
                if(!activeDraggable){
                    props.handleDeleteDoor(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(parseInt(`0x${doorColor}`));
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));               
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }
            }
        }else if(props.direction === 'back'){
            if(LeftCorner - 75 > position[0] || RightCorner - 70 < position[0] || props.HeightHall < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(0xea8064);
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }
                if(!activeDraggable){
                    props.handleDeleteDoor(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(parseInt(`0x${doorColor}`));
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));               
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }
            }
        }else if(props.direction === 'left'){
            if(LeftCorner + 70 > position[2] || RightCorner + 70 < position[2] || props.HeightHall < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(0xea8064);
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }
                if(!activeDraggable){
                    props.handleDeleteDoor(props.index);
                }
            }else if(props.meshPositionArray.some(meshPosition => { 
                let positionZ = position[2];
                if(positionZ > 0) {
                    // Zmniejsz wartość o 15
                    positionZ = positionZ - 60;
                }
                return Math.abs(position[2] - meshPosition) <= 15;
            })){
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(0xea8064);
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(parseInt(`0x${doorColor}`));
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));               
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }
            }
        }else if(props.direction === 'right'){
            if(LeftCorner > position[2] || RightCorner < position[2] || props.HeightHall + 10 < position[1] || -32.5 > position[1]){
                console.log('element deleted')
                setDeletedColor(true)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(0xea8064);
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(0xea8064);
                }
                if(!activeDraggable){
                    props.handleDeleteDoor(props.index);
                }
            }else{
                console.log('element ok')
                setDeletedColor(false)
                if(typeArray[typeIdx] === 'none'){
                    props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(parseInt(`0x${doorColor}`));
                    props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }else if(typeArray[typeIdx] === 'half'){
                    props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));               
                }else if(typeArray[typeIdx] === 'full'){
                    props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
                }
            }
        }
    }, [props.HeightHall, LeftCorner, RightCorner, position, props.door, typeArray[typeIdx], props.DoorColor1, props.meshPositionArray])

    //change window colors
    useEffect(() => {
        const idx = props.DoorColor1.indexOf('#') + 1;
        const doorColor = props.DoorColor1.slice(idx, props.DoorColor1.length);
        const idx2 = props.DoorObrobkaColor1.indexOf('#') + 1;
        const obrobkaDrzwi = props.DoorObrobkaColor1.slice(idx2, props.DoorObrobkaColor1.length);
        if(typeArray[typeIdx] === 'none'){
            props.door.children[0].children[0].children[0].children[0].children[0].material.color.set(parseInt(`0x${obrobkaDrzwi}`));
            props.door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
            props.door.children[0].children[0].children[0].children[0].children[2].children[1].material.color.set(parseInt(`0x${doorColor}`));
        }else if(typeArray[typeIdx] === 'half'){
            props.glass_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));   
            props.glass_door.children[0].children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`))
            props.glass_door.children[0].children[0].children[0].children[0].children[2].material.color.set(parseInt(`0x${obrobkaDrzwi}`));   
        }else if(typeArray[typeIdx] === 'full'){
            props.glass_full_door.children[0].children[0].children[0].children[0].children[1].material.color.set(parseInt(`0x${doorColor}`));
            props.glass_full_door.children[0].children[0].children[0].children[0].children[2].material.color.set(parseInt(`0x${obrobkaDrzwi}`));
        }

    }, [props.DoorColor1, props.DoorObrobkaColor1])
    
    useEffect(() => {
        if(props.direction === 'front'){
            setPosition([props.newposition.x + props.x, props.newposition.y, props.ModelPos - sub - 2]);
        }else if(props.direction === 'back'){
            setPosition([props.newposition.x - 67 - props.x, props.newposition.y, props.ModelPos + sub + 1.5]);
        }else if(props.direction === 'left'){
            setPosition([props.ModelPos  + (sub - 6) + 2, props.newposition.y, props.newposition.z + props.x]);
        }else if(props.direction === 'right'){
            setPosition([props.ModelPos - (sub - 6) - 1.5, props.newposition.y, props.newposition.z - 67 + props.x]);
        }
    }, [props.x, props.y])
 
    useEffect(() => {
        if(typeArray[typeIdx] === 'none'){
            if(props.direction === 'left'){
                props.door.children[0].children[0].children[0].children[0].children[1].scale.set(1, 5, 1);
                props.door.children[0].children[0].children[0].children[0].children[2].children[1].scale.set(1, 18, 1);
            }else{
                props.door.children[0].children[0].children[0].children[0].children[1].scale.set(1, 3, 1);
                props.door.children[0].children[0].children[0].children[0].children[2].children[1].scale.set(1, 10, 1);
            }
        }else if(typeArray[typeIdx] === 'half'){
            if(props.direction === 'left'){
                props.glass_door.children[0].children[0].children[0].children[0].children[1].scale.set(1, 5, 1);   
                props.glass_door.children[0].children[0].children[0].children[0].children[0].children[1].scale.set(1, 16, 1)
            }else{
                props.glass_door.children[0].children[0].children[0].children[0].children[1].scale.set(1, 3, 1);   
                props.glass_door.children[0].children[0].children[0].children[0].children[0].children[1].scale.set(1, 12, 1)
            }
        }else if(typeArray[typeIdx] === 'full'){
            if(props.direction === 'left'){
                props.glass_full_door.children[0].children[0].children[0].children[0].children[1].scale.set(1, 5, 1);   
                props.glass_full_door.children[0].children[0].children[0].children[0].children[0].children[1].scale.set(1, 16, 1)
            }else{
                props.glass_full_door.children[0].children[0].children[0].children[0].children[1].scale.set(1, 3, 1);
                props.glass_full_door.children[0].children[0].children[0].children[0].children[0].children[1].scale.set(1, 13, 1)
            }
        }
    }, [typeIdx])

    return (
        <>
            {(show ? <MeasureBetweenPoints RangeSetterLengthtHail={props.RangeSetterLengthtHail} ModelPos={props.ModelPos} direction={props.direction} type={props.type} size={props.size} obj={props.obj} windowHeight={props.windowHeight} WidthSetterLengthtHail={props.WidthSetterLengthtHail} box={box} position={position} pointA={new Vector3(LeftCorner, 0, 0)} pointB={new Vector3(RightCorner + 30, 5, 5)}/> : '')}        
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
            onPointerOut={SetNew2DPos}
            {...bind()}
        >
            <primitive ref={modelRef} object={(typeArray[typeIdx] == "half" ? props.glass_door : (typeArray[typeIdx] == "full" ? props.glass_full_door : props.door))} scale={[scale[0], scale[1], scale[2]]} >
            <group>
                {(show ? <group position={(props.direction === 'front' || props.direction === 'back' ? [45, 200, 35] : [45, 200, 55])} rotation={[0, 0, 0.8]} onClick={() => props.handleDeleteDoor(props.index)}>
                    <mesh>
                        <circleBufferGeometry rotation={(props.direction === 'front' || props.direction === 'back' ? [0, -Math.PI / 2, 0] : [0, 0, 0])} args={[15, 32]}/> {/* Ustaw odpowiednią średnicę i ilość segmentów */}
                        <meshBasicMaterial colorManagement={true} linear={false} color="red" />
                    </mesh>
                     <mesh >
                        <boxBufferGeometry args={[4, 18, 0.3]} />
                        <meshBasicMaterial colorManagement={true} linear={false}color="white" />
                    </mesh>
                    <mesh>
                        <boxBufferGeometry args={[18, 4, 0.3]} />
                        <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                    </mesh>
                </group> : '')}

                {(show ?<group position={(props.direction === 'front' || props.direction === 'back' ? [75, 200, 35] : [75, 200, 55])} rotation={[0, 0, 0.8]} onClick={() => changeType()}>
                    <mesh position={[3, -3, 0]}>
                        <circleBufferGeometry rotation={(props.direction === 'front' || props.direction === 'back' ? [0, -Math.PI / 2, 0] : [0, 0, 0])} args={[15, 32]}/> {/* Ustaw odpowiednią średnicę i ilość segmentów */}
                        <meshBasicMaterial colorManagement={true} linear={false} color="#6FA8DC" />
                    </mesh>
                    <mesh position={[5, 0, 0]} rotation={[0, 0, Math.PI / 2]}> {/* Dodaj strzałkę jako mesh */}
                        <boxBufferGeometry args={[14, 4, 0.3]} />
                        <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                    </mesh>
                    <mesh position={[0, -5, 0]}> {/* Dodaj strzałkę jako mesh */}
                        <boxBufferGeometry args={[14, 4, 0.3]} />
                        <meshBasicMaterial colorManagement={true} linear={false} color="white" />
                    </mesh>
                </group>
                : '')}

                {/* transparent element */}
                <mesh position={[0, props.direction === 'front' ? 96.5 : props.direction === 'back' ? 101 : 102.5, -4.95]}  >
                    <boxBufferGeometry side={THREE.DoubleSide} attach="geometry" args={[93.5, 205, 35]} />
                    <meshPhysicalMaterial colorManagement={true} linear={false} side={THREE.DoubleSide} color={deletedColor ? '#ea8064' : "#ffffff"} transparent={true} opacity={0} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                </mesh>

                {typeArray[typeIdx] == "half" ? <mesh visible={true} position={[-0.5, 153, -10]} >
                    <boxBufferGeometry args={[66.2, 70.5, (props.direction === 'left' ? 60 : 50)]}/>
                    <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} transparent={true} opacity={0.125} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                </mesh> : null}

                {typeArray[typeIdx] == "full" ? <mesh visible={true} position={[-0.5, 99, -10]}>
                <boxBufferGeometry args={[66.5, 179, (props.direction === 'left' ? 60 : 50)]}/>
                <meshPhysicalMaterial colorManagement={true} linear={false} color={'#ffffff'} side={THREE.DoubleSide} transparent={true} opacity={0.125} roughness={0} metalness={0.5} transmission={1} ior={2.33}/>
                </mesh> : null }
            </group>
            </primitive>
        </mesh>
        </>
    )
})

export default DraggableWindow;