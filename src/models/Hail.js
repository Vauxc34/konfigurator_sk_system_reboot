import React, { useState, useRef, useEffect } from 'react'
import * as THREE from "three";
import { Canvas, useThree, useLoader,  useFrame } from "@react-three/fiber";
 
const Hail = React.memo(({
    RangeSetterLengthtHail,
    setAllConnctionPositions,
    InsideColor,
    setHailDimensions,
    camera,
    upSideBool,
    frontSideBool,
    upSideMat,
    frontSideMat,
    backSideMat,
    leftSideMat,
    rigthSideMat,
    backSideBool,
    leftSideBool,
    rightSideBool,
    RozstawOffset,
    RozstawLameleOffsetMultipler,
    RozstawLameleOffsetMultipler1,
    RozstawKlinOffsetMultipler,
    RozstawKlinOffsetMultipler1,
    Frame1Pos,
    Frame2Pos,
    Frame3Pos,
    Frame4Pos,
    Frame5Pos,
    Frame6Pos,
    Frame7Pos,
    FrameHalfPos,
    Frame1Visible, 
    Frame2Visible, 
    Frame3Visible, 
    Frame4Visible, 
    Frame5Visible, 
    Frame6Visible, 
    Frame7Visible, 
    FrameHalfVisible,
    LameleAngleFix1_2,
    LameleAngleFix1_3,
    LameleAngleFix1_4,
    LameleAngleFix1_5,
    LameleAngleFix1_6,
    LameleAngleFix1_7,
    LameleAngleFix1_8,
    LameleAngleFix1_9,
    LameleAngleWidth1_1,
    LameleAngleWidth1_2,
    LameleAngleWidth1_3,
    LameleAngleWidth1_4,
    LameleAngleWidth1_5,
    LameleAngleWidth1_6,
    LameleAngleWidth1_7,
    LameleAngleWidth1_8,
    LameleAngleFix2_14,
    LameleAngleFix2_13,
    LameleAngleFix2_12,
    LameleAngleFix2_1,
    LameleAngleFix2_2,
    LameleAngleFix2_3,
    Angle2Range,
    LameleAngleFix2,
    LameleWidthFix2,
    OkapLeftHider,
    OkapRightHider,
    OkapAttykaParam33Width,
    OkapAttykaParam33WidthUp,
    OkapRoofParam33WidthUpRight,
    OkapAttykaParam22Width,
    OkapAttykaParam22WidthUp,
    OkapRoofParam22WidthUpRight,
    OkapAttykaParam2Width,
    OkapAttykaParam3WidthUp,
    OkapRoofParam3WidthUpRight,
    textureOutsideBrightness,
    lamele_1_side_newest,
    lamele_2_side_new,
    lamele_1_side_new,
    lamele_2_side,
    KolorLaczenia,
    LameleFrontBackAdditionalOffset,
    LameleFrontBackAdditionalOffset1,
    UVRoof2Setter1,
    UVRoof2Setter,
    FrameAdditionalDepth,
    FrameAdditionalDepth1,
    heightWallsOne,
    UVWallHeightRoof1,
    UVUkrytyParam,
    UVSimpleWallFixer,
    UVSimpleWall,
    ModelPosFront1,
    ModelPosBack,
    WallWithoutModifiedUV1,
    UVFixerHeightFronBack,
    UVHeightRightWallparam,
    UVHeightRightWall,
    UVFixerHeight,
    UVLeftWallParam__1,
    UVLeftWallParam__2,
    UVLeftRightWallParam,
    UVLeftRightWallParam2,
    UVHeightParam,
    UVHeightBackParam,
    roof2ZdobienieAngle,
    WidthSetterLengthtHail,
    UkrytyDachParam,
    FundamentNumber,
    FundamentScale,
    ConstructionPosY,
    FundamentParamY, 
    RozstawFrameUp,
    UkrytyDach,
    Roof3PosY,
    roof_type_3,
    roof_type_3param,
    OkapRynnaParam2AngleY,
    OkapAttykaParam2Angle,
    RynnaPosYOkapRight,
    RynnaPosXOkapRight,
    OkapRoofParam2WidthUpRight,
    OkapAttykaParam2WidthUp,
    OkapAttykaParam1Width,
    OkapAttykaParam1Angle,
    OkapAttykaParam1Height,
    OkapAttykaParam,
    OkapLeftParam,
    OkapLeftParam1,
    HolesMaterialTransparentLeft,
    HolesMaterialTransparentRight,
    HolesMaterialTransparentFront,
    HolesMaterialTransparentBack, 
    HolesPosFront,
    HolesPosLeft,
    HolesPosBack,
    HolesPosRight,
    ModelPosRight,
    ModelPosRight1,
    FilteredHolesRight,
    Holes,
    hole,
    WallWithModifiedUV,
    WallWithoutModifiedUV,
    UVChangeAngleFixer,
    gate1,
    UVSsett2,
    TextureRepeating,
    modifiedUV1,
    modifiedUV2,
    modifiedUV3,
    UVChangeHeight1,
    UVChangeHeight,
    UVChange,
    DepthWallAdditional,
    NewPosition,
    FramesAdditional,
    frameRoofLast,
    roof_type_2_frameParam,
    roof_type_2_frame,
    TextureFrameType,
    Platwie1Param2,
    Platwie1Param3,
    Platwie1Param,
    Platwie1,
    roof_type1_frame,
    roof_type_1Frameparam,
    Frames,
    UVSsett2Roof,
    UVSsett,
    UVSsett1,
    OkapRightParam,
    OkapRightParam1,
    OkapPrzodParam,
    RoofType2Przod,
    OkapPrzod,
    OkapTyl,
    OkapLeft,
    OkapRight,
    attykaWidth2,
    attykaWidth,
    attykaWidth1,
    AttykaColor, 
    cokolScaleZ,
    Roof1PosY,
    RoofColor,
    rynnaScale,
    Roof1,
    Roof2,
    Roof3, 
    trademarkDistance,
    trademarkDistance1,
    trademarkHeight,
    trademarkHeight1,
    roofTexture,
    roof_type_1,
    roof_type_2,
    rynnaPosX,
    rynnaPosX1,
    rynnaPosY,
    rynnaPosY1,
    Roof2PosY,
    brobkiColor,
    roof_type_1param,
    roof_type1_param2,
    roof_type1_param3,
    roof_type_1param_width,
    roof_type_2param,
    roof_type_2_brick,
    widthWallsParams,
    widthWalls22,
    widthWalls22depth,
    widthWalls22depth_,
    widthWalls22depth__,
    widthWalls33,
    widthWalls33depth,
    widthPiston33depth_,
    JednospadowyDach,
    textureOutside,
    elevationColor,
    heightWalls,
    pacholek1_1,
    pacholek2_1,
    pacholek1_2,
    pacholek2_2,
    pacholek2_3,
    pacholek1_3,
    pacholek3_3,
    widthWallFloor,
    FrontWallparam,
    widthWallFloor2,
    widthWallFloor3,
    FrontWall,
    widthWalls, 
    widthWalls2,
    FrontWall1,
    FrontWall1param}) => {
        const texture = useLoader(THREE.TextureLoader, textureOutside);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(widthWalls, widthWalls); 
        /* */
    
        const textureWall = useLoader(THREE.TextureLoader, textureOutside);
        textureWall.wrapS = THREE.RepeatWrapping;
        textureWall.wrapT = THREE.RepeatWrapping;
        textureWall.repeat.set(TextureRepeating.no, TextureRepeating.no2);
    
        /* */
    
        const textureFloor = useLoader(THREE.TextureLoader, "mat_sk_system.png");
        textureFloor.wrapS = THREE.RepeatWrapping;
        textureFloor.wrapT = THREE.RepeatWrapping;
        textureFloor.repeat.set(14,  14);

        const textureRynna = useLoader(THREE.TextureLoader, "metalB/Metal046B_2K_Color.jpg");
        textureFloor.wrapS = THREE.RepeatWrapping;
        textureFloor.wrapT = THREE.RepeatWrapping;
        textureFloor.repeat.set(46, 46);
    
        /* */
    
        const roofTexture_ = useLoader(THREE.TextureLoader, roofTexture);
        roofTexture_.wrapS = THREE.RepeatWrapping;
        roofTexture_.wrapT = THREE.RepeatWrapping;
        roofTexture_.repeat.set(2.5, 6); 

        /* */
    
        const textureTrademark = useLoader(THREE.TextureLoader, "trademark_logo.png");
        textureFloor.wrapS = THREE.RepeatWrapping;
        textureFloor.wrapT = THREE.RepeatWrapping;
        textureFloor.repeat.set(3.38, 1.51);     
        
        let KlinTexture = useLoader(THREE.TextureLoader, "frame_roof/Textures/frame__.jpg")  

        /* */
    
        const positions = new Float32Array([
            // Front face
            widthWalls33depth + DepthWallAdditional, -1, widthWalls,  widthWalls33, -1, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + DepthWallAdditional, heightWalls - UkrytyDachParam, widthWalls,
    
            // Back face
            widthWalls33depth + DepthWallAdditional, -1, widthWalls22depth__ - widthWallsParams,widthWalls33depth + DepthWallAdditional, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, -1.0, widthWalls22depth__- widthWallsParams,
        
            // Top face
            widthWalls33depth + DepthWallAdditional, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33depth + DepthWallAdditional, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls,widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,
        
            // Bottom face
            widthWalls33depth + DepthWallAdditional, -1.0 , -1 - widthWallsParams, widthWalls33, -1.0, -1.0 - widthWallsParams, widthWalls33, -1.0, widthWalls, widthWalls33depth + DepthWallAdditional, -1.0, widthWalls,
        
            // Right face
            widthWalls33, -1.0 , widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, -1.0, widthWalls,
        
            // Left face
            widthWalls33depth + DepthWallAdditional, -1.0, widthWalls22depth__ - widthWallsParams, widthWalls33depth + DepthWallAdditional, -1.0, widthWalls, widthWalls33depth + DepthWallAdditional, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + DepthWallAdditional, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,
        ])
    
        const positions1 = new Float32Array([
          // Front face
          widthWalls22depth_ + DepthWallAdditional , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + DepthWallAdditional, heightWalls +  UkrytyDach , widthPiston33depth_ ,
    
      // Back face
      widthWalls22depth_ + DepthWallAdditional  , -1.0   , widthWalls2, widthWalls22depth_ + DepthWallAdditional , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
    
      // Top face
      widthWalls22depth_ + DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + DepthWallAdditional, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
    
      // Bottom face
      -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
    
      // Right face
      widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
    
      // Left face
      widthWalls22depth + DepthWallAdditional, -1.0 , widthWalls2, widthWalls22depth + DepthWallAdditional, -1.0 , widthPiston33depth_  ,widthWalls22depth + DepthWallAdditional, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + DepthWallAdditional, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
        ]) 

        const positions_wall_sec = new Float32Array([
            // Front face
            
            FrontWall1, -1 , widthWalls,  FrontWall1param + -DepthWallAdditional, -1 , widthWalls, FrontWall1param + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,
    
        // Back face
        FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param + -DepthWallAdditional, -1 , -1.0,
    
        // Top face
        FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
    
        // Bottom face
        FrontWall1, -1, -1, FrontWall1param + -DepthWallAdditional, -1, -1.0 , FrontWall1param + -DepthWallAdditional, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,
    
        // Right face
        FrontWall1param + -DepthWallAdditional, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param + -DepthWallAdditional, -1, widthWalls,
    
        // Left face
        FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
        ])

        const positions2 = new Float32Array([
            // Front face
        FrontWall, -1.00, widthPiston33depth_,  FrontWallparam + -DepthWallAdditional, -1.0, widthPiston33depth_, FrontWallparam + -DepthWallAdditional, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
    
        // Back face
        FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam + -DepthWallAdditional, -1.0, widthWalls2,
    
        // Top face
        FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam + -DepthWallAdditional, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
    
        // Bottom face
        -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
    
        // Right face
        FrontWallparam + -DepthWallAdditional, -1.0, widthWalls2, FrontWallparam + -DepthWallAdditional, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam + -DepthWallAdditional , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam + -DepthWallAdditional, -1.0, widthPiston33depth_,
    
        // Left face
        FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
        ])
     
        /* pozycje dla pachołków*/

        /* ostatni prawy */
        const positions_piston = new Float32Array([
            // Front face
            
            pacholek1_3, -1,  widthPiston33depth_,pacholek3_3, -1.0, widthPiston33depth_ ,pacholek3_3, heightWalls +  UkrytyDach ,widthPiston33depth_, pacholek1_3, heightWalls +  UkrytyDach,widthPiston33depth_,
    
        // Back face
        pacholek1_3, -1.0,  pacholek2_3,pacholek1_3, heightWalls +  UkrytyDach,  pacholek2_3,pacholek3_3, heightWalls +  UkrytyDach, pacholek2_3,pacholek3_3, -1.0, pacholek2_3,
    
        // Top face
        pacholek1_3, heightWalls +  UkrytyDach, pacholek2_3 ,pacholek1_3, heightWalls +  UkrytyDach, widthPiston33depth_, pacholek3_3, heightWalls +  UkrytyDach, widthPiston33depth_, pacholek3_3, heightWalls +  UkrytyDach, pacholek2_3,
    
        // Bottom face
        pacholek1_3, -1, pacholek2_3,pacholek3_3, -1, pacholek2_3 ,pacholek3_3, -1, widthPiston33depth_, pacholek1_3, -1, widthPiston33depth_,
    
        // Right face
        pacholek3_3, -1.0, pacholek2_3,pacholek3_3, heightWalls +  UkrytyDach, pacholek2_3,pacholek3_3, heightWalls +  UkrytyDach, widthPiston33depth_,pacholek3_3, -1.0, widthPiston33depth_,
    
        // Left face
        pacholek1_3, -1, pacholek2_3,pacholek1_3, -1.0, widthPiston33depth_  , pacholek1_3, heightWalls +  UkrytyDach, widthPiston33depth_ , pacholek1_3, heightWalls +  UkrytyDach, pacholek2_3,
        ])

        /* pierwszy prawy */
        const positions_piston1 = new Float32Array([
            pacholek1_2, -1, widthPiston33depth_,  pacholek1_1, -1, widthPiston33depth_  , pacholek1_1, heightWalls +  UkrytyDach,  widthPiston33depth_  , pacholek1_2, heightWalls +  UkrytyDach,  widthPiston33depth_ ,
    
            // Back face
            pacholek1_2, -1.0,   pacholek2_3, pacholek1_2, heightWalls +  UkrytyDach,    pacholek2_3, pacholek1_1, heightWalls +  UkrytyDach,   pacholek2_3, pacholek1_1, -1.0,  pacholek2_3,
        
            // Top face
            pacholek1_2, heightWalls +  UkrytyDach, pacholek2_3, pacholek1_2, heightWalls +  UkrytyDach, widthPiston33depth_, pacholek1_1, heightWalls +  UkrytyDach, widthPiston33depth_,pacholek1_1, heightWalls +  UkrytyDach, pacholek2_3,
        
            // Bottom face
            pacholek1_2, -1.0, pacholek2_3, pacholek1_1, -1.0, pacholek2_3, pacholek1_1, -1.0, widthPiston33depth_, pacholek1_2, -1, widthPiston33depth_,
        
            // Right face
            pacholek1_1, -1.0, pacholek2_3, pacholek1_1, heightWalls +  UkrytyDach, pacholek2_3, pacholek1_1, heightWalls +  UkrytyDach, widthPiston33depth_, pacholek1_1, -1.0, widthPiston33depth_,
        
            // Left face
            pacholek1_2, -1.0, pacholek2_3, pacholek1_2, -1.0, widthPiston33depth_, pacholek1_2, heightWalls +  UkrytyDach, widthPiston33depth_, pacholek1_2, heightWalls +  UkrytyDach,pacholek2_3,
        ])
    
        /* pierwszy prawy */
        const positions_piston2 = new Float32Array([
            pacholek1_2, -1.0, pacholek2_1,  pacholek1_1, -1.0, pacholek2_1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, pacholek1_2, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1,
            
            // Back face
            pacholek1_2, -1.0, pacholek2_2, pacholek1_2, heightWalls +  UkrytyDach + JednospadowyDach,  pacholek2_2, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2, pacholek1_1, -1.0,  pacholek2_2,
        
            // Top face
            pacholek1_2, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2, pacholek1_2, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1,pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2,
        
            // Bottom face
            pacholek1_2, -1., pacholek2_2, pacholek1_1, -1.0, pacholek2_2, pacholek1_1, -1.00, pacholek2_1, pacholek1_2, -1.0, pacholek2_1,
        
            // Right face
            pacholek1_1, -1.0, pacholek2_2, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, pacholek1_1, -1.0, pacholek2_1,
        
            // Left face
            pacholek1_2, -1.0, pacholek2_2, pacholek1_2, -1.0, pacholek2_1, pacholek1_2, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, pacholek1_2, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2,
        ])
    
        /* ostatni prawy */
        const positions_piston3 = new Float32Array([ 
            pacholek1_3, -1, pacholek2_1, widthWalls22depth_ - 1.495 +   5.52, -1, pacholek2_1,  widthWalls22depth_ - 1.495 + 5.52, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, pacholek1_3, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1,
            
            // Back face
            pacholek1_3, -1.0, pacholek2_2,pacholek1_3, heightWalls +  UkrytyDach + JednospadowyDach,  pacholek2_2, widthWalls22depth_ - 1.495 +  5.52, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2, widthWalls22depth_ - 1.495 +  5.52, -1.0, pacholek2_2,
            
        
            // Top face
            pacholek1_3, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2,pacholek1_3, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, widthWalls22depth_ - 1.495 +  5.52, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, widthWalls22depth_ - 1.495 + 5.52, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2,
        
            // Bottom face
            widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2, widthWalls22depth_ - 1.59 +  5.52, -1, pacholek2_2, widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1,
        
            // Right face
            widthWalls22depth_ - 1.495 + 5.52, -1.0, pacholek2_2, widthWalls22depth_ - 1.495 +  5.52, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2, widthWalls22depth_ - 1.495 + 5.52, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, widthWalls22depth_ - 1.495 + 5.52, -1.0, pacholek2_1,
        
            // Left face
            pacholek1_3, -1.0, pacholek2_2, pacholek1_3, -1.0, pacholek2_1, pacholek1_3, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_1, pacholek1_3, heightWalls +  UkrytyDach + JednospadowyDach, pacholek2_2,
        ])
        
        /* pozycje */
        // console.log(widthPiston33depth_)
        // console.log(pacholek2_1)
        // console.log(positions_piston2)
        // console.log(positions_piston3)

      
           /* pozycje dla pachołków*/
    
         const positions_floor = new Float32Array([
            
           // Front face
           -1.15, widthWallFloor2, widthWallFloor ,  -.925, widthWallFloor2, widthWallFloor , -.925, widthPiston33depth_  , widthWallFloor , -1.15, widthPiston33depth_  , widthWallFloor ,
    
        // Back face
        -1.15 , widthWallFloor2, widthWalls22depth__ - widthWallsParams, -1.15, widthPiston33depth_ , widthWalls22depth__ - widthWallsParams, -0.925, widthPiston33depth_  , widthWalls22depth__ - widthWallsParams, -0.925, widthWallFloor2, widthWalls22depth__- widthWallsParams,
    
        // Top face
        -1.15, widthPiston33depth_  , widthWalls22depth__ - widthWallsParams, -1.15, widthPiston33depth_ , widthWallFloor , -0.925, widthPiston33depth_ , widthWallFloor ,-0.925, widthPiston33depth_ , widthWalls22depth__ - widthWallsParams,
    
        // Bottom face
        -1.15, widthWallFloor2, widthWalls22depth__ - widthWallsParams, -0.925, widthWallFloor2, widthWalls22depth__ - widthWallsParams, -0.925, widthWallFloor2 , widthWallFloor, -1.15, widthWallFloor2, widthWallFloor ,
    
        // Right face
        -0.925, widthWallFloor2, widthWalls22depth__ - widthWallsParams, -0.925, widthPiston33depth_  , widthWalls22depth__ - widthWallsParams , -0.925, widthPiston33depth_ , widthWallFloor, -.925, widthWallFloor2, widthWallFloor ,
    
        // Left face
        -1.15, widthWallFloor2, widthWalls22depth__ - widthWallsParams, -1.15, widthWallFloor2, widthWallFloor, -1.15, widthPiston33depth_ , widthWallFloor, -1.15, widthPiston33depth_ , widthWalls22depth__ - widthWallsParams,
         ])
    
         const positions_mat = new Float32Array([
           // Front face
           -1.15 , widthWallFloor2 - 7.5, widthWallFloor + 8,  -0.925, widthWallFloor2 - 7.5, widthWallFloor  + 8, -0.925, 3.4 + widthWallFloor3, widthWallFloor  + 8, -1.15 , 3.4 + widthWallFloor3, widthWallFloor  + 8,
    
        // Back face
        -1.15 , widthWallFloor2  - 7.5, widthWalls22depth__  -  7.5, -1.15  , 3.4   + widthWallFloor3 , widthWalls22depth__ -  7.5, -0.925 , 3.4 + widthWallFloor3,  widthWalls22depth__ -  7.5, -0.925, widthWallFloor2   - 7.5, widthWalls22depth__ -  7.5,
    
        // Top face
        -1.15, 3.4 + widthWallFloor3, widthWalls22depth__ -  7.5, -1.15 , 3.4 + widthWallFloor3, widthWallFloor + 8, -0.925, 3.4 + widthWallFloor3, widthWallFloor  + 8,-0.925, 3.4 + widthWallFloor3,  widthWalls22depth__ -  7.5,
    
        // Bottom face
        -1.15, widthWallFloor2 - 7.5, widthWalls22depth__   -  7.5, -0.925, widthWallFloor2 - 7.5, widthWalls22depth__ -  7.5, -0.925, widthWallFloor2 -  7.5, widthWallFloor  + 8, -1.15, widthWallFloor2 -  7.5, widthWallFloor  + 8,
    
        // Right face
        -.925, widthWallFloor2  -  7.5, widthWalls22depth__ -  7.5 , -.925, 3.4 + widthWallFloor3, widthWalls22depth__ - 7.5, -0.925, 3.4 + widthWallFloor3, widthWallFloor + 8, -.925, widthWallFloor2 -  7.5, widthWallFloor  + 8,
    
        // Left face
        -1.15, widthWallFloor2 -  7.5, widthWalls22depth__ -  7.5, -1.15, widthWallFloor2 -  7.5, widthWallFloor + 8, -1.15, 3.4 + widthWallFloor3, widthWallFloor + 8, -1.15, 3.4 +  widthWallFloor3, widthWalls22depth__ - 7.5,
         ])
    
         /* roof 1 base */
 

        const positions_roof_1 = new Float32Array([


            //OkapAttykaParam2Width,
            //OkapAttykaParam3WidthUp,
            //OkapRoofParam3WidthUpRight,

            
            // Front face
            roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight   , widthWallFloor2 - OkapRight - OkapRightParam1, widthWallFloor - -.2 + OkapPrzod,  roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1  , widthWallFloor - -.2 + OkapPrzod, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft , widthWallFloor - -.2 + OkapPrzod, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp,widthPiston33depth_ + OkapLeft, widthWallFloor - -.2 + OkapPrzod,
     
         // Back face
         roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight   , widthWallFloor2 - OkapRight - OkapRightParam1 , roof_type_1param_width  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_+ OkapLeft , roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_+ OkapLeft , roof_type_1param_width  - .3 + OkapTyl, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1  , roof_type_1param_width  - .3 + OkapTyl,
     
         // Top face
         roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_+ OkapLeft  , roof_type_1param_width  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_+ OkapLeft   , widthWallFloor - -.2 + OkapPrzod, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_+ OkapLeft , widthWallFloor - -.2 + OkapPrzod,roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_+ OkapLeft  , roof_type_1param_width  - .3 + OkapTyl,
     
         // Bottom face
         roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight   , widthWallFloor2 - OkapRight - OkapRightParam1, roof_type_1param_width  - .3 + OkapTyl, roof_type_1param  - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width , widthWallFloor2 - OkapRight - OkapRightParam1  , roof_type_1param_width  - .3 + OkapTyl, roof_type_1param  - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 , widthWallFloor - -.2 + OkapPrzod, roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight   , widthWallFloor2 - OkapRight - OkapRightParam1 , widthWallFloor - -.2 + OkapPrzod,
     
         // Right face
         roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1, roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_+ OkapLeft , roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, widthWallFloor - -.2 + OkapPrzod, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1  , widthWallFloor - -.2 + OkapPrzod,
     
         // Left face
         roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight   , widthWallFloor2 - OkapRight - OkapRightParam1 , roof_type_1param_width  - .3 + OkapTyl, roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight      , widthWallFloor2 - OkapRight - OkapRightParam1  , widthWallFloor - -.2 + OkapPrzod, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_+ OkapLeft , widthWallFloor - -.2 + OkapPrzod, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,
         ])

         const positions_roof_1_attyka_right = new Float32Array([
            
            // Front face
            -2.35   ,  widthWalls33  +  OkapLeft +  1.9, widthWallFloor - -.2 + OkapPrzod,  -2.35   ,  widthWalls33  +  OkapLeft +  1.9  , widthWallFloor - -.2 + OkapPrzod, -2.35 + OkapLeftParam1 - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_  + OkapLeft  , widthWallFloor - -.2 + OkapPrzod, -2.45 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp,widthPiston33depth_  + OkapLeft, widthWallFloor - -.2 + OkapPrzod,
     
         // Back face
         -2.35   ,  widthWalls33  +  OkapLeft +  1.9, roof_type_1param_width  - .3 + OkapTyl, -2.45 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft  , roof_type_1param_width  - .3 + OkapTyl, -2.35 + OkapLeftParam1 - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft  , roof_type_1param_width  - .3 + OkapTyl, -2.35    ,  widthWalls33  +  OkapLeft +  1.9  , roof_type_1param_width  - .3 + OkapTyl,
     
         // Top face
         -2.45 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft  , roof_type_1param_width  - .3 + OkapTyl, -2.45 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft  , widthWallFloor - -.2 + OkapPrzod, -2.35 + OkapLeftParam1 - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft  , widthWallFloor - -.2 + OkapPrzod,-2.35 + OkapLeftParam1 - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft  , roof_type_1param_width  - .3 + OkapTyl,
     
         // Bottom face
         -2.35   ,  widthWalls33  +  OkapLeft +  1.9, roof_type_1param_width  - .3 + OkapTyl, -2.35 ,  widthWalls33  +  OkapLeft +  1.9  , roof_type_1param_width  - .3 + OkapTyl, -2.35  ,  widthWalls33  +  OkapLeft +  1.9  , widthWallFloor - -.2 + OkapPrzod, -2.35     ,  widthWalls33  +  OkapLeft +  1.9 , widthWallFloor - -.2 + OkapPrzod,
     
         // Right face
         -2.35   ,  widthWalls33  +  OkapLeft +  1.9, roof_type_1param_width  - .3 + OkapTyl, -2.35 + OkapLeftParam1 - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_  + OkapLeft  , roof_type_1param_width  - .3 + OkapTyl, -2.35 + OkapLeftParam1 - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft ,  widthWallFloor - -.2 + OkapPrzod, -2.35  ,  widthWalls33 +  OkapLeft +  1.9 , widthWallFloor - -.2 + OkapPrzod,
     
         // Left face
         -2.35   ,  widthWalls33  +  OkapLeft +  1.9, roof_type_1param_width  - .3 + OkapTyl, -2.35      ,  widthWalls33  +  OkapLeft +  1.9  , widthWallFloor - -.2 + OkapPrzod, -2.35, widthPiston33depth_ + OkapLeft  , widthWallFloor - -.2 + OkapPrzod, -2.35, widthPiston33depth_  + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,
         ])

         const attyka_roof1_pos = new Float32Array([ 
              // Front face
              roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, OkapPrzodParam + OkapPrzod,  roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, OkapPrzodParam + OkapPrzod, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width   , widthPiston33depth_ + OkapLeft, OkapPrzodParam + OkapPrzod, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp,widthPiston33depth_ + OkapLeft, OkapPrzodParam + OkapPrzod,
     
              // Back face
              roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1 ,attykaWidth - -.2 + OkapPrzod, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft,attykaWidth - -.2 + OkapPrzod, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width  , widthPiston33depth_ + OkapLeft,attykaWidth - -.2 + OkapPrzod, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,attykaWidth - -.2 + OkapPrzod,
          
              // Top face
              roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft,attykaWidth - -.2 + OkapPrzod, roof_type1_param3+ OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft, OkapPrzodParam + OkapPrzod, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width  , widthPiston33depth_ + OkapLeft, OkapPrzodParam + OkapPrzod,roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width  , widthPiston33depth_ + OkapLeft,attykaWidth - -.2 + OkapPrzod,
          
              // Bottom face
              roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,attykaWidth - -.2 + OkapPrzod, roof_type_1param +  OkapAttykaParam1Angle - OkapRight + OkapAttykaParam1Width + OkapRoofParam2WidthUpRight, widthWallFloor2 - OkapRight - OkapRightParam1 ,attykaWidth - -.2 + OkapPrzod, roof_type_1param + - OkapAttykaParam1Angle - OkapRight + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, OkapPrzodParam + OkapPrzod, roof_type_1 -  OkapRightParam , widthWallFloor2 - OkapRight - OkapRightParam1, OkapPrzodParam + OkapPrzod,
          
              // Right face
              roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,attykaWidth - -.2 + OkapPrzod, roof_type_1param +  OkapAttykaParam1Angle - OkapRight + OkapAttykaParam1Width + OkapRoofParam2WidthUpRight, widthWallFloor2 - OkapRight - OkapRightParam1 ,attykaWidth - -.2 + OkapPrzod, roof_type_1param + - OkapAttykaParam1Angle - OkapRight + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, OkapPrzodParam + OkapPrzod, roof_type_1 -  OkapRightParam , widthWallFloor2 - OkapRight - OkapRightParam1, OkapPrzodParam + OkapPrzod,
          
              // Left face
              roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1 ,attykaWidth - -.2 + OkapPrzod, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft,attykaWidth - -.2 + OkapPrzod, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width  , widthPiston33depth_ + OkapLeft,attykaWidth - -.2 + OkapPrzod, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,attykaWidth - -.2 + OkapPrzod,
         ])

         const attyka_roof1_pos1 = new Float32Array([
            // Front face
            roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl,  roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp,widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl,
   
            // Back face
            roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type_1param + - OkapAttykaParam1Angle - OkapRight + - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl,
        
            // Top face
            roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl,roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl,
        
            // Bottom face
            roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl, roof_type_1param + OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl, roof_type_1param + OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl, roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl,
        
            // Right face
            roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl,  roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp,widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl,
        
            // Left face
            roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, roof_type_1param_width  - .3 + OkapTyl, roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp, widthPiston33depth_ + OkapLeft, roof_type_1param_width  - .3 + OkapTyl,
         ])

         const attyka_roof1_pos2 = new Float32Array([
        // Front face
        roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl,  roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp ,widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl,
     
        // Back face
        roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle  - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl,
    
        // Top face
        roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle  - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle  - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl,roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl,
    
        // Bottom face
        roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight    , widthWallFloor2 - OkapAttykaParam - OkapRight  , roof_type_1param_width  - .3033 + OkapTyl, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width, widthWallFloor2 - OkapAttykaParam - OkapRight , roof_type_1param_width  - .3033 + OkapTyl, roof_type_1param + - OkapAttykaParam1Angle - OkapRight - OkapAttykaParam1Width , widthWallFloor2 - OkapAttykaParam - OkapRight  , attykaWidth - -.2132 + OkapPrzod, roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight     , widthWallFloor2 - OkapAttykaParam - OkapRight , attykaWidth - -.2132 + OkapPrzod,
    
        // Right face
        roof_type_1param +  OkapAttykaParam1Angle - OkapRight + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft,roof_type_1param_width  - .3 + OkapTyl, roof_type1_param2 + OkapLeftParam1 - OkapAttykaParam2Angle + OkapAttykaParam2Width, widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type_1param + OkapAttykaParam1Angle - OkapRight + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl,
    
        // Left face
        roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, roof_type_1param_width  - .3 + OkapTyl, roof_type_1  -  OkapRightParam - OkapAttykaParam1Angle - OkapRoofParam2WidthUpRight  - OkapAttykaParam1Width + OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft, attykaWidth1  - .3 + OkapTyl, roof_type1_param3 + OkapLeftParam - OkapAttykaParam2Angle - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft, roof_type_1param_width  - .3 + OkapTyl,
         ])
    
         /* roof 1 base */

        /* roof 2 base */

         const positions_roof_2_1 = new Float32Array([
            
            // Front face
            -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor  - -.2 + OkapPrzod ,  -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor - -.2 + OkapPrzod  , roof_type_2, -2.175, widthWallFloor - -.2 + OkapPrzod  , roof_type_2param, -2.175, widthWallFloor  - -.2 + OkapPrzod ,
     
         // Back face
         -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2 , -2.175, roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5   , roof_type_1param_width - .3 + OkapTyl,
     
         // Top face
         roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2param, -2.175, widthWallFloor - -.2 + OkapPrzod  ,  roof_type_2, -2.175, widthWallFloor - -.25 + OkapPrzod , roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl,
     
         // Bottom face
         -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor  - -.2 + OkapPrzod , -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5   , widthWallFloor - -.2 + OkapPrzod  ,
     
         // Right face
         -1.35  - OkapAttykaParam33Width,widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , roof_type_1param_width - .3 + OkapTyl,  roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl,  roof_type_2,-2.175, widthWallFloor - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5   , widthWallFloor - -.2 + OkapPrzod  ,
     
         // Left face
         -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor - -.2 + OkapPrzod  , roof_type_2param,-2.175, widthWallFloor - -.2 + OkapPrzod  , roof_type_2param,-2.175, roof_type_1param_width - .3 + OkapTyl,
         ])
         
         const positions_roof_2_2 = new Float32Array([

            //OkapAttykaParam2Width,
            //OkapAttykaParam3WidthUp,
            //OkapRoofParam3WidthUpRight,
            
            // Front face
            roof_type_2param, -2.175, widthWallFloor  - -.2 + OkapPrzod,  roof_type_2, -2.175, widthWallFloor  - -.2 + OkapPrzod,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod,
      
         // Back face
         roof_type_2param, -2.175, roof_type_1param_width  - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl, -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl, roof_type_2, -2.175, roof_type_1param_width  - .3 + OkapTyl,
      
         // Top face
         -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft, widthWallFloor  - -.2 + OkapPrzod, -1.35  - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft, roof_type_1param_width  - .3 + OkapTyl,
      
         // Bottom face
         roof_type_2param, -2.175, roof_type_1param_width  - .3 + OkapTyl, roof_type_2, -2.175, roof_type_1param_width  - .3 + OkapTyl, roof_type_2, -2.175, widthWallFloor  - -.2 + OkapPrzod, roof_type_2param, -2.175, widthWallFloor  - -.2 + OkapPrzod,
      
         // Right face
         roof_type_2, -2.175, roof_type_1param_width  - .3 + OkapTyl,  -1.35 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, roof_type_2, -2.175, widthWallFloor  - -.2 + OkapPrzod,
      
         // Left face
         roof_type_2param, -2.175, roof_type_1param_width  - .3 + OkapTyl, roof_type_2param, -2.175, widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,
         ])

         const positions_roof_2_2_right = new Float32Array([
            
            // Front face
            -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ - .01 + OkapLeft, widthWallFloor  - -.2 + OkapPrzod,  -1.35 - OkapAttykaParam22Width, widthPiston33depth_ - .01 + OkapLeft, widthWallFloor  - -.2 + OkapPrzod,  -1.35 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod,
      
         // Back face
         -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ - .01 + OkapLeft, roof_type_1param_width  - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl, -1.35 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl, -1.35 - OkapAttykaParam22Width, widthPiston33depth_ - .01 + OkapLeft, roof_type_1param_width  - .3 + OkapTyl,
      
         // Top face
         -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod,  -1.35 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, -1.35 - OkapAttykaParam22Width , widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,
      
         // Bottom face
         -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ - .01 + OkapLeft, roof_type_1param_width  - .3 + OkapTyl, -1.35 - OkapAttykaParam22Width, widthPiston33depth_ - .01 + OkapLeft, roof_type_1param_width  - .3 + OkapTyl, -1.35 - OkapAttykaParam22Width, widthPiston33depth_ - .01 + OkapLeft, widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ - .01 + OkapLeft, widthWallFloor  - -.2 + OkapPrzod,
      
         // Right face
         -1.35 - OkapAttykaParam22Width, widthPiston33depth_ - .01 + OkapLeft, roof_type_1param_width  - .3 + OkapTyl,  -1.35 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,  -1.35 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, -1.35 - OkapAttykaParam22Width, widthPiston33depth_ - .01 + OkapLeft, widthWallFloor  - -.2 + OkapPrzod,
      
         // Left face
         -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ - .01 + OkapLeft, roof_type_1param_width  - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ - .01 + OkapLeft, widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , widthWallFloor  - -.2 + OkapPrzod, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width  - .3 + OkapTyl,
         ])


         const positions_roof_2_1_left = new Float32Array([
            
            // Front face
            -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor  - -.2 + OkapPrzod ,  -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, widthWallFloor - -.2 + OkapPrzod  , -1.45 - OkapAttykaParam33WidthUp, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, widthWallFloor  - -.2 + OkapPrzod ,
     
         // Back face
         -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.45 - OkapAttykaParam33WidthUp  , widthWalls2 - .15 , roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5   , roof_type_1param_width - .3 + OkapTyl,
     
         // Top face
         -1.45 - OkapAttykaParam33WidthUp, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.45 - OkapAttykaParam33WidthUp, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, widthWallFloor - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, widthWallFloor - -.2 + OkapPrzod , -1.35  - OkapAttykaParam33Width, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl,
     
         // Bottom face
         -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor  - -.2 + OkapPrzod , -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5   , widthWallFloor - -.2 + OkapPrzod  ,
     
         // Right face
         -1.35  - OkapAttykaParam33Width,widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , roof_type_1param_width - .3 + OkapTyl,  -1.35  - OkapAttykaParam33Width, widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl,  -1.35  - OkapAttykaParam33Width ,widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, widthWallFloor - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5   , widthWallFloor - -.2 + OkapPrzod  ,
     
         // Left face
         -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , roof_type_1param_width - .3 + OkapTyl, -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , widthWallFloor - -.2 + OkapPrzod  , -1.45 - OkapAttykaParam33WidthUp,widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, widthWallFloor - -.2 + OkapPrzod  , -1.45 - OkapAttykaParam33WidthUp,widthWalls2 - .15 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl,
         ])


         const positions_roof_2_side_2 = new Float32Array([
            // Front face
            0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      
        // Back face
        0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      
        // Top face
        0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      
        // Bottom face
        0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      
        // Right face
        widthWalls22depth  , 1.2,  widthWalls2 - .175   , widthWalls22depth , roof_type_2_brick, -2, widthWalls22depth , 1.2, widthPiston33depth_ , widthWalls22depth , 1.2, 1.0,
      
        // Left face
          widthWalls22depth   , 1.2 ,  widthWalls2 - .175     ,   widthWalls22depth  , 1.2 , 1.0 , widthWalls22depth  , 1.2 , widthPiston33depth_ ,   widthWalls22depth  , roof_type_2_brick, -2,
      
        /* */ 
      
         ])
      
         const positions_roof_2_side_1 = new Float32Array([
          // Front face
          1.5, 1.2 , 1 ,  -4, 1.2 , 1.0, -4, 1.2 , 1, 1.5, 1.2 , 1,
      // Back face
      0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      // Top face
      0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      // Bottom face
      0 , 0 , 0 , 0, 0 ,0,0,0 , 0, 0  , 0 , 0,
      
      // Right face
      FrontWallparam  , 1.2, widthWalls2 - .175  , FrontWallparam  , roof_type_2_brick, -2.05, FrontWallparam  , 1.2, widthPiston33depth_ , FrontWallparam , 1.2, widthPiston33depth_ ,
      
      // Left face
      FrontWall , 1.2 , widthWalls2 - .175   , FrontWallparam  , 1.2 , widthPiston33depth_ , FrontWall, 1.2 ,widthPiston33depth_ , FrontWall, roof_type_2_brick, -2.05,
      
      /* */ 
      
         ])
      

        /* roof 2 base */

        /* roof 2 attyka */

        const positions_roof_2_1_attyka = new Float32Array([
            
            // Front face
            -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, attykaWidth1 - .3 + OkapTyl  ,  -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, attykaWidth1 - .3 + OkapTyl  , roof_type_2, -2.175, attykaWidth1 - .3 + OkapTyl  , roof_type_2param, -2.175, attykaWidth1 - .3 + OkapTyl  ,
     
         // Back face
         -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl, roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , roof_type_1param_width - .3 + OkapTyl,
     
         // Top face
         roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2param, -2.175, attykaWidth1 - .3 + OkapTyl  ,  roof_type_2, -2.175, attykaWidth1 - .3 + OkapTyl , roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl,
     
         // Bottom face
         -1.475, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , attykaWidth1 - .3 + OkapTyl  , -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , attykaWidth1 - .3 + OkapTyl  ,
     
         // Right face
         -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl,  roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl,  roof_type_2,-2.175, attykaWidth1 - .3 + OkapTyl  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , attykaWidth1 - .3 + OkapTyl  ,
     
         // Left face
         -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, roof_type_1param_width - .3 + OkapTyl, -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, attykaWidth1 - .3 + OkapTyl  , roof_type_2param,-2.175, attykaWidth1 - .3 + OkapTyl  , roof_type_2param,-2.175, roof_type_1param_width - .3 + OkapTyl,
        ])

        const positions_roof_2_2_attyka = new Float32Array([
          // Front face
          roof_type_2param, -2.175, attykaWidth1 - .3 + OkapTyl,  roof_type_2, -2.175, attykaWidth1 - .3 + OkapTyl,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft , attykaWidth1 - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , attykaWidth1 - .3 + OkapTyl,
    
          // Back face
          roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width - .3 + OkapTyl, -1.35  - OkapAttykaParam22Width , widthPiston33depth_ + OkapLeft , roof_type_1param_width - .3 + OkapTyl, roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl,
       
          // Top face
          -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , attykaWidth1 - .3 + OkapTyl,  -1.35  - OkapAttykaParam22Width , widthPiston33depth_ + OkapLeft , attykaWidth1 - .3 + OkapTyl, -1.35  - OkapAttykaParam22Width , widthPiston33depth_ + OkapLeft , roof_type_1param_width - .3 + OkapTyl,
       
          // Bottom face
          roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2, -2.175, attykaWidth1 - .3 + OkapTyl, roof_type_2param, -2.175, attykaWidth1 - .3 + OkapTyl,
       
          // Right face
          roof_type_2, -2.175, roof_type_1param_width - .3 + OkapTyl,  -1.35  - OkapAttykaParam22Width , widthPiston33depth_ + OkapLeft , roof_type_1param_width - .3 + OkapTyl,  -1.35  - OkapAttykaParam22Width , widthPiston33depth_ + OkapLeft , attykaWidth1 - .3 + OkapTyl, roof_type_2, -2.175, attykaWidth1 - .3 + OkapTyl,
       
          // Left face
          roof_type_2param, -2.175, roof_type_1param_width - .3 + OkapTyl, roof_type_2param, -2.175, attykaWidth1 - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , attykaWidth1 - .3 + OkapTyl, -1.45  - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft , roof_type_1param_width - .3 + OkapTyl,
        ])

        const positions_roof_21_attyka = new Float32Array([
            
            // Front face
            -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, OkapPrzodParam + OkapPrzod  ,  -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, OkapPrzodParam + OkapPrzod  , roof_type_2, -2.175, OkapPrzodParam + OkapPrzod  , roof_type_2param, -2.175, OkapPrzodParam + OkapPrzod  ,
     
         // Back face
         -1.45  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5,attykaWidth  - -.2 + OkapPrzod, roof_type_2param, -2.175,attykaWidth  - -.2 + OkapPrzod  , roof_type_2, -2.175,attykaWidth  - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  ,attykaWidth  - -.2 + OkapPrzod  ,
     
         // Top face
         roof_type_2param, -2.175,attykaWidth  - -.2 + OkapPrzod  , roof_type_2param, -2.175, OkapPrzodParam + OkapPrzod  ,  roof_type_2, -2.175, OkapPrzodParam  + OkapPrzod , roof_type_2, -2.175,attykaWidth  - -.2 + OkapPrzod  ,
     
         // Bottom face
         -1.475, widthWallFloor2 - OkapRight - OkapRightParam * 6.5,attykaWidth  - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5,attykaWidth  - -.2 + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 , OkapPrzodParam  + OkapPrzod  , -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , OkapPrzodParam  + OkapPrzod ,
     
         // Right face
         -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5,attykaWidth  - -.2 + OkapPrzod  ,  roof_type_2, -2.175,attykaWidth  - -.2 + OkapPrzod  ,  roof_type_2,-2.175, OkapPrzodParam + OkapPrzod  , -1.35  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  , OkapPrzodParam + OkapPrzod  ,
     
         // Left face
         -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5,attykaWidth  - -.2 + OkapPrzod  , -1.45 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5, OkapPrzodParam + OkapPrzod  , roof_type_2param,-2.175, OkapPrzodParam + OkapPrzod  , roof_type_2param,-2.175,attykaWidth  - -.2 + OkapPrzod  ,
        ])

        const positions_roof_22_attyka = new Float32Array([
              // Front face
          roof_type_2param, -2.175, OkapPrzodParam + OkapPrzod ,  roof_type_2, -2.175, OkapPrzodParam + OkapPrzod ,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft  , OkapPrzodParam + OkapPrzod , -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft  , OkapPrzodParam + OkapPrzod ,
    
          // Back face
          roof_type_2param, -2.175,attykaWidth - -.2 + OkapPrzod, -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft  ,attykaWidth - -.2 + OkapPrzod, -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft  ,attykaWidth - -.2 + OkapPrzod, roof_type_2, -2.175,attykaWidth - -.2 + OkapPrzod,
       
          // Top face
          -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft  ,attykaWidth - -.2 + OkapPrzod, -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft  , OkapPrzodParam + OkapPrzod ,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft  , OkapPrzodParam + OkapPrzod , -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft  ,attykaWidth - -.2 + OkapPrzod,
       
          // Bottom face
          roof_type_2param, -2.175,attykaWidth - -.2 + OkapPrzod, roof_type_2, -2.175,attykaWidth - -.2 + OkapPrzod, roof_type_2, -2.175, OkapPrzodParam + OkapPrzod , roof_type_2param, -2.175, OkapPrzodParam + OkapPrzod ,
       
          // Right face
          roof_type_2, -2.175,attykaWidth - -.2 + OkapPrzod,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft  ,attykaWidth - -.2 + OkapPrzod,  -1.35  - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft  , OkapPrzodParam + OkapPrzod , roof_type_2, -2.175, OkapPrzodParam + OkapPrzod ,
       
          // Left face
          roof_type_2param, -2.175,attykaWidth - -.2 + OkapPrzod, roof_type_2param, -2.175, OkapPrzodParam + OkapPrzod , -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft  , OkapPrzodParam + OkapPrzod , -1.45 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft  ,attykaWidth - -.2 + OkapPrzod,
        ])

        /* roof 2 attyka */ 

        /* rama roof2 positions */ 
            
          const normals = new Float32Array([
            0, 1, 0, 
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,
          ]);
    
          const normals1 = new Float32Array([
            0, 1, 0, 
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
          ]);
          
          const colors = new Float32Array([
            // Front face
            1, 1, 1,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
          
            // Back face
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
          
            // Top face
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
          
            // Bottom face
            1, 1, 0,
            1, 1, 0,
            1, 1, 0,
            1, 1, 0,
          
            // Right face
            0, 1, 1,
            0, 1, 1,
            0, 1, 1,
            0, 1, 1,
          
            // Left face
            1, 0, 1,
            1, 0, 1,
            1, 0, 1,
            1, 0, 1,
          ]); 
    
          const uvs1 = new Float32Array([
            
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
            // wall back?
            
            -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,
    
            // wall front?
    
            -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
          
        
            
           
          ]);
    
          const uvs_mat = new Float32Array([
            
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
            // wall back?
            
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
            // wall front?
    
            -1.0, -1.0, -1.0,  -4.5, -.001, 2, 2.95, 2, 2.95, -3.3, -.001, -3.3,
    
            // wall back?
    
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
          
        
            
           
          ]);
    
          const uvs_roof = new Float32Array([
            
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, 5454.5, 0, 5454.5,  0, 1.0, -.0001, 1.0, .5,
    
            // wall front?
    
            -2, -.5, -2,  -.35, -.5, -.5, 3, -.5, 3, -1, -.5, -1,
    
            // wall back?
    
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
          
        
            
           
          ]);
    
          const uvs_roof_base = new Float32Array([
            
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, 5454.5, 0, 5454.5,  0, 3, -.5, -.5, -.5,
    
            // wall front?
    
            -4, .5, -1.3,  -.35, -2, -.5, 6, -3.5, 1, -1, -.5, -.5,
    
            // wall back?
    
            0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
          
        
            
           
          ]); 
         
          const indices = new Uint16Array([
            0, 1, 2,
            0, 2, 3, // front
            4, 5, 6,
            4, 6, 7, // back
            8, 9, 10,
            8, 10, 11, // top
            12, 13, 14,
            12, 14, 15, // bottom
            16, 17, 18,
            16, 18, 19, // right
            20, 21, 22,
            20, 22, 23, // left
          ]); 


        /* first roof postions */

         const positions_roof_1_frame = new Float32Array([
            
            // Front face
            roof_type1_frame + .09 - OkapAttykaParam1Height - OkapAttykaParam1Angle  + OkapAttykaParam2WidthUp , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 7.65,  roof_type_1Frameparam - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 7.65, roof_type1_param2 - .09 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width + .005  , widthPiston33depth_ + OkapLeft + OkapRightHider   , 7.65, roof_type1_param3 - .015 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp ,widthPiston33depth_ + OkapLeft + OkapRightHider   , 7.65,
     
         // Back face
         roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle  + OkapAttykaParam2WidthUp, widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 2.37, roof_type1_param3 - .015 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp  , widthPiston33depth_ + OkapLeft  + OkapRightHider  , 2.37, roof_type1_param2 - .09 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width + .005  , widthPiston33depth_ + OkapLeft + OkapRightHider  , 2.37, roof_type_1Frameparam - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 2.37,
     
         // Top face
         roof_type1_param3 - .015 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp  , widthPiston33depth_ + OkapLeft + OkapRightHider   , 2.37, roof_type1_param3 - .015 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp  , widthPiston33depth_ + OkapLeft + OkapRightHider , 7.65, roof_type1_param2 - .09 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width + .005  , widthPiston33depth_ + OkapLeft + OkapRightHider   , 7.65,roof_type1_param2 - .09 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width + .005  , widthPiston33depth_ + OkapLeft  + OkapRightHider  , 2.37,
     
         // Bottom face
         roof_type1_frame + .09 - OkapAttykaParam1Height  -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 2.37, roof_type_1Frameparam - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 2.37, roof_type_1Frameparam - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 7.65, roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider , 7.65,
     
         // Right face
         roof_type_1Frameparam - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 2.37, roof_type1_param2 - .09 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005   , widthPiston33depth_ + OkapLeft + OkapRightHider , 2.37, roof_type1_param2 - .09 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width + .005  , widthPiston33depth_ + OkapLeft + OkapRightHider   , 7.65, roof_type_1Frameparam - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 7.65,
     
         // Left face
         roof_type1_frame + .09 - OkapAttykaParam1Height  -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 2.37, roof_type1_frame + .09 - OkapAttykaParam1Height  -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 7.65, roof_type1_param3 - .015 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp  , widthPiston33depth_ + OkapLeft + OkapRightHider   , 7.65, roof_type1_param3 - .015 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft  + OkapRightHider  , 2.37,
         ])

         const positions_roof_1_part_frame = new Float32Array([
            
            // Front face
            roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 5.25,  roof_type_1Frameparam + .175 - OkapAttykaParam1Height -  OkapAttykaParam1Angle  - OkapAttykaParam1Width , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 5.25, roof_type1_param2 + .085 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005 , widthPiston33depth_ + OkapLeft + OkapRightHider , 5.25, roof_type1_param3 - .02 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp ,widthPiston33depth_ + OkapLeft + OkapRightHider  , 5.25,
     
         // Back face
         roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 4.3, roof_type1_param3 - .02 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft + OkapRightHider , 4.3, roof_type1_param2 + .085 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005 , widthPiston33depth_ + OkapLeft + OkapRightHider , 4.3, roof_type_1Frameparam + .175 - OkapAttykaParam1Height -  OkapAttykaParam1Angle  - OkapAttykaParam1Width , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 4.3,
     
         // Top face
         roof_type1_param3 - .02 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft + OkapRightHider , 4.3, roof_type1_param3 - .02 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft + OkapRightHider , 5.25, roof_type1_param2 + .085 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005 , widthPiston33depth_ + OkapLeft + OkapRightHider , 5.25,roof_type1_param2 + .085 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005 , widthPiston33depth_ + OkapLeft + OkapRightHider , 4.3,
     
         // Bottom face
         roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 4.3, roof_type_1Frameparam + .175 - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 4.3, roof_type_1Frameparam + .175 - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 5.25, roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 5.25,
     
         // Right face
        roof_type_1Frameparam + .175 - OkapAttykaParam1Height -  OkapAttykaParam1Angle - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 4.3, roof_type1_param2 + .085 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005 , widthPiston33depth_ + OkapLeft  + OkapRightHider, 4.3, roof_type1_param2 + .085 + OkapLeftParam1 - OkapAttykaParam2Angle + FrameAdditionalDepth1  + OkapAttykaParam2Width  + .005 , widthPiston33depth_ + OkapLeft + OkapRightHider , 5.25, roof_type_1Frameparam + .175 - OkapAttykaParam1Height  -  OkapAttykaParam1Angle - OkapAttykaParam1Width, widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 5.25,
     
         // Left face
         roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle +  OkapAttykaParam2WidthUp  , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 4.3, roof_type1_frame + .09 - OkapAttykaParam1Height -  OkapAttykaParam1Angle + OkapAttykaParam2WidthUp   , widthWallFloor2 - OkapRight - OkapRightParam1 + OkapLeftHider, 5.25, roof_type1_param3 - .02 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft + OkapRightHider , 5.25, roof_type1_param3 - .02 + OkapLeftParam - OkapAttykaParam2Angle + FrameAdditionalDepth - OkapAttykaParam3WidthUp , widthPiston33depth_ + OkapLeft  + OkapRightHider, 4.3,
         ])

        /* first roof postions */

        /* second roof positions */

         const positions_roof_2_1_frame = new Float32Array([
            
            // Front face
            -1.28 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam  * 6.5 + OkapLeftHider * 1.2, 3 ,  -1.275 - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, 3  , roof_type_2 + .00015, -2.175, 3  , roof_type_2param + .095, -2.175, 3 ,
     
         // Back face
         -1.28 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -3.52, roof_type_2param + .095, -2.175, -3.52, roof_type_2 + .00015, -2.175, -3.52, -1.275  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  + OkapLeftHider * 1.2 , -3.52,
     
         // Top face
         roof_type_2param + .095, -2.175, -3.52, roof_type_2param + .095, -2.175, 3  ,  roof_type_2 + .00015, -2.175, 3 , roof_type_2 + .00015, -2.175, -3.52,
     
         // Bottom face
         -1.28 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -3.52, -1.275 - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -3.52, -1.275  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, 3 , -1.28 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  + OkapLeftHider * 1.2 , 3  ,
     
         // Right face
         -1.275 - OkapAttykaParam33Width,widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2  , -3.52,  roof_type_2 + .00015, -2.175, -3.52,  roof_type_2 + .00015,-2.175, 3  , -1.275  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2  , 3  ,
     
         // Left face
         -1.28 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2 , -3.52, -1.28 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, 3  , roof_type_2param + .095 ,-2.175, 3  , roof_type_2param + .095,-2.175, -3.52,
         ])
         
         const positions_roof_2_2_frame = new Float32Array([
            
            // Front face
            roof_type_2param + .095, -2.175, 3,  roof_type_2, -2.175, 3,  -1.275 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft + OkapRightHider , 3, -1.275 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, 3,
      
         // Back face
         roof_type_2param + .095, -2.175, -3.52, -1.28 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider, -3.52, -1.275 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, -3.52, roof_type_2, -2.175, -3.52,
      
         // Top face
         -1.28 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider , -3.52, -1.28 - OkapAttykaParam22WidthUp, widthPiston33depth_ + OkapLeft + OkapRightHider, 3,  -1.275 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, 3, -1.275 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, -3.52,
      
         // Bottom face
         roof_type_2param + .095, -2.175, -3.52, roof_type_2, -2.175, -3.52, roof_type_2, -2.175, 3, roof_type_2param + .095, -2.175, 3,
      
         // Right face
         roof_type_2, -2.175, -3.52,  -1.275 - OkapAttykaParam22Width, widthPiston33depth_ + OkapLeft + OkapRightHider , -3.52,  -1.275 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, 3, roof_type_2, -2.175, 3,
      
         // Left face
         roof_type_2param + .095, -2.175, -3.52, roof_type_2param + .095, -2.175, 3, -1.28 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft  + OkapRightHider, 3, -1.28 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider, -3.52,
         ])

         const positions_roof_2_1_frame_part = new Float32Array([
            
            // Front face
            -1.21  - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  + OkapLeftHider * 1.2,         .5 ,  -.945 - OkapAttykaParam33Width   , widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2,        .5  , roof_type_2_frameParam, -2.175,        .5  , roof_type_2_frame , -2.175,         .5 ,
     
         // Back face
         -1.21 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -.35, roof_type_2_frame , -2.175, -.35, roof_type_2_frameParam, -2.175, -.35, -.945  - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2   , -.35,
     
         // Top face
         roof_type_2_frame , -2.175, -.35, roof_type_2_frame , -2.175,        .5  ,  roof_type_2_frameParam, -2.175,         .5 , roof_type_2_frameParam, -2.175, -.35,
     
         // Bottom face
         -1.21 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -.35, -.945  - OkapAttykaParam33Width  , widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -.35, -.945 - OkapAttykaParam33Width, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2  ,         .5 , -1.21 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5  + OkapLeftHider * 1.2 ,        .5  ,
     
         // Right face
         -.945  - OkapAttykaParam33Width,widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -.35,  roof_type_2_frameParam, -2.175, -.35,  roof_type_2_frameParam,-2.175,        .5  , -.945  - OkapAttykaParam33Width  , widthWallFloor2 - OkapRight - OkapRightParam * 6.5  + OkapLeftHider * 1.2  ,        .5  ,
     
         // Left face
         -1.21 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2, -.35, -1.21 - OkapAttykaParam33WidthUp, widthWallFloor2 - OkapRight - OkapRightParam * 6.5 + OkapLeftHider * 1.2,        .5  , roof_type_2_frame ,-2.175,        .5  , roof_type_2_frame ,-2.175, -.35,
         ])
         
         const positions_roof_2_2_frame_part = new Float32Array([
            
            // Front face
            roof_type_2_frame  , -2.175, .5,  roof_type_2_frameParam , -2.175, .5,  -.945 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider , .5, -1.21 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider , .5,
      
         // Back face
         roof_type_2_frame   , -2.175, -.35, -1.21 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider, -.35, -.945 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider , -.35, roof_type_2_frameParam, -2.175, -.35,
      
         // Top face
         -1.21 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider , -.35, -1.21 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft  + OkapRightHider, .5,  -.945 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, .5, -.945 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, -.35,
      
         // Bottom face
         roof_type_2_frame  , -2.175, -.35, roof_type_2_frameParam, -2.175, -.35, roof_type_2_frameParam, -2.175, .5, roof_type_2_frame  , -2.175, .5,
      
         // Right face
         roof_type_2_frameParam, -2.175, -.35,  -.945 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, -.35,  -.945 - OkapAttykaParam22Width, widthPiston33depth_  + OkapLeft + OkapRightHider, .5, roof_type_2_frameParam, -2.175, .5,
      
         // Left face
         roof_type_2_frame   , -2.175, -.35, roof_type_2_frame     , -2.175, .5, -1.21 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider , .5, -1.21 - OkapAttykaParam22WidthUp, widthPiston33depth_  + OkapLeft + OkapRightHider  , -.35,
         ])

        /* second roof positions */  

        /* roof 3 attyka */

         const attyka_roof3_pos = new Float32Array([ 
             // Front face
             roof_type_3 , widthWallFloor2 , OkapPrzodParam ,  roof_type_3param + .025, widthWallFloor2 , OkapPrzodParam , roof_type_3param + .025 , widthPiston33depth_, OkapPrzodParam , roof_type_3,widthPiston33depth_, OkapPrzodParam ,
     
             // Back face
             roof_type_3 , widthWallFloor2 ,attykaWidth  - .125 - -.2 , roof_type_3, widthPiston33depth_,attykaWidth  - .125 - -.2 , roof_type_3param + .025 , widthPiston33depth_,attykaWidth  - .125 - -.2 , roof_type_3param + .025, widthWallFloor2 ,attykaWidth  - .125 - -.2 ,
         
             // Top face
             roof_type_3, widthPiston33depth_,attykaWidth  - .125 - -.2 , roof_type_3, widthPiston33depth_, OkapPrzodParam , roof_type_3param + .025 , widthPiston33depth_, OkapPrzodParam ,roof_type_3param + .025 , widthPiston33depth_,attykaWidth  - .125 - -.2 ,
         
             // Bottom face
             roof_type_3 , widthWallFloor2 ,attykaWidth  - .125 - -.2 , roof_type_3param + .025, widthWallFloor2 ,attykaWidth  - .125 - -.2 , roof_type_3param + .025, widthWallFloor2 , OkapPrzodParam , roof_type_3 , widthWallFloor2 , OkapPrzodParam ,
         
             // Right face
             roof_type_3param + .025, widthWallFloor2 ,attykaWidth  - .125 - -.2 , roof_type_3param + .025 , widthPiston33depth_,attykaWidth  - .125 - -.2 , roof_type_3param + .025 , widthPiston33depth_, OkapPrzodParam , roof_type_3param + .025, widthWallFloor2 , OkapPrzodParam ,
         
             // Left face
             roof_type_3 , widthWallFloor2 , attykaWidth  - .125 - -.2 , roof_type_3 , widthWallFloor2 , OkapPrzodParam , roof_type_3, widthPiston33depth_, OkapPrzodParam , roof_type_3, widthPiston33depth_, attykaWidth  - .125 - -.2 ,
         ])

         const attyka_roof3_pos1 = new Float32Array([
            // Front face
            roof_type_3 , widthWallFloor2 , attykaWidth1 + .1 - .3 + OkapTyl,  roof_type_3param + .025, widthWallFloor2  , attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3param + .025 , widthPiston33depth_, attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3,widthPiston33depth_, attykaWidth1 + .1 - .3 + OkapTyl,
   
            // Back face
            roof_type_3 , widthWallFloor2 ,roof_type_1param_width  - .3 + OkapTyl, roof_type_3 , widthPiston33depth_,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthPiston33depth_,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthWallFloor2,roof_type_1param_width  - .3 + OkapTyl,
        
            // Top face
            roof_type_3, widthPiston33depth_,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthPiston33depth_, attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3param + .025, widthPiston33depth_, attykaWidth1 + .1 - .3 + OkapTyl,roof_type_3param + .025, widthPiston33depth_,roof_type_1param_width  - .3 + OkapTyl,
        
            // Bottom face
            roof_type_3 , widthWallFloor2  ,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthWallFloor2  ,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthWallFloor2, attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3 , widthWallFloor2, attykaWidth1 + .1 - .3 + OkapTyl,
        
            // Right face
            roof_type_3param + .025, widthWallFloor2  ,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthPiston33depth_,roof_type_1param_width  - .3 + OkapTyl, roof_type_3param + .025, widthPiston33depth_, attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3param + .025, widthWallFloor2, attykaWidth1 + .1 - .3 + OkapTyl,
        
            // Left face
            roof_type_3 , widthWallFloor2  , roof_type_1param_width  - .3 + OkapTyl, roof_type_3 , widthWallFloor2  , attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3 , widthPiston33depth_, attykaWidth1 + .1 - .3 + OkapTyl, roof_type_3 , widthPiston33depth_, roof_type_1param_width  - .3 + OkapTyl,
         ])

         const attyka_roof3_pos2 = new Float32Array([
   // Front face
   roof_type_3   , widthWallFloor2, attykaWidth ,  roof_type_3param + .025, widthWallFloor2, attykaWidth , roof_type_3param + .025, attykaWidth2 + .11, attykaWidth , roof_type_3  ,attykaWidth2 + .11, attykaWidth ,
     
   // Back face
   roof_type_3   , widthWallFloor2, roof_type_1param_width, roof_type_3, attykaWidth2 + .11, roof_type_1param_width, roof_type_3param + .025, attykaWidth2 + .11, roof_type_1param_width, roof_type_3param + .025, widthWallFloor2, roof_type_1param_width,

   // Top face
   roof_type_3 , attykaWidth2 + .11, roof_type_1param_width, roof_type_3, attykaWidth2 + .11, attykaWidth ,  roof_type_3param + .025, attykaWidth2 + .11, attykaWidth , roof_type_3param + .025, attykaWidth2 + .11, roof_type_1param_width,

   // Bottom face
   roof_type_3   , widthWallFloor2, roof_type_1param_width, roof_type_3param + .025, widthWallFloor2, roof_type_1param_width, roof_type_3param + .025, widthWallFloor2, attykaWidth , roof_type_3   , widthWallFloor2, attykaWidth ,

   // Right face
   roof_type_3param + .025, widthWallFloor2, roof_type_1param_width, roof_type_3param + .025, attykaWidth2 + .11, roof_type_1param_width, roof_type_3param + .025, attykaWidth2 + .11, attykaWidth , roof_type_3param + .025, widthWallFloor2, attykaWidth ,

   // Left face
   roof_type_3   , widthWallFloor2, roof_type_1param_width, roof_type_3   , widthWallFloor2, attykaWidth , roof_type_3 , attykaWidth2 + .11, attykaWidth , roof_type_3  , attykaWidth2 + .11, roof_type_1param_width,
         ])

        /* roof 3 attyka - sufit */  

        const hailRef = useRef();

        useEffect(() => {
            if(hailRef.current){
                setHailDimensions(new THREE.Box3().setFromObject(hailRef.current));
            }
        }, [])
        
        const Comp = () =>
        
        <group position={[0, 7, 0]}> 

            <mesh receivedShadow castShadow scale={[100, 30, 30]} position={[30.2, -114.5, -70.6]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_mat }
                    count={positions_mat.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
               
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_mat}  
                    itemSize={2}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} side={THREE.DoubleSide} reflectivity={.2}  metalness={1.1} map={textureFloor}/>
            </mesh> 

            <mesh receivedShadow castShadow scale={[40 + FundamentScale, 30, 30]} position={[30.2, -40.5 + ConstructionPosY + FundamentParamY, -70.6]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}  
            
            receiveShadow={true}
            shadowSide={THREE.FrontSide}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_floor }
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshBasicMaterial color='#bababa' />
            </mesh> 

            <group position={[0, ConstructionPosY, 0]}>
    
            {/* pachołki */}    
            {/* tył prawy */}    
            <mesh receivedShadow  castShadow scale={30} position={[30.2, 33.4, -10]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_piston}
                    // count={positions_piston.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} side={THREE.DoubleSide} color={brobkiColor} />
            </mesh> 
            {/* tył lewy */}
            <mesh receivedShadow castShadow  scale={30} position={[30.2, 33.4, -10]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_piston3}
                    count={positions_piston2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} side={THREE.DoubleSide}  color={brobkiColor} />
            </mesh>

            {/* przód prawy */}
            <mesh receivedShadow castShadow scale={30} position={[30.2, 32.8, -94.8]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_piston1}
                    count={positions_piston1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} side={THREE.DoubleSide} color={brobkiColor} />
            </mesh>

            {/* przód lewy */}
             <mesh receivedShadow castShadow  scale={30} position={[30.2, 33.2, -94.8]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_piston2}
                    count={positions_piston2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} side={THREE.DoubleSide} color={brobkiColor} />
            </mesh>
    
             {/* trademark */} 
    
            <mesh  scale={[.1, 22, 35.5]} position={[-31.5, trademarkHeight - .9,trademarkDistance]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
               <boxBufferGeometry/>
               <meshBasicMaterial color={'white'}/>
               <meshStandardMaterial map={textureTrademark}/>
            </mesh>
    
            <mesh  scale={[.1, 22, 35.5]} position={[-31.5, trademarkHeight - .9,trademarkDistance1]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
               <boxBufferGeometry/>
               <meshBasicMaterial color={'white'}/>
               <meshStandardMaterial  map={textureTrademark}/>
            </mesh> 
    
              {/* trademark */}
    
            {/* rynna 
            
            rynnaPosY1 + 1.25 + OkapRynnaParam2AngleY

            + RynnaPosXOkapRight

             RynnaPosYOkapRight
                
            */}
            <mesh  receivedShadow castShadow visible={Roof3 == true ? false : true} scale={[.5, rynnaScale, .5]} position={[rynnaPosX  ,  rynnaPosY + 1.25 + OkapRynnaParam2AngleY , -26.5]}  rotation={[-Math.PI / 2, 1.8, 6.283]}>
               <cylinderBufferGeometry attach="geometry" args={[5, 5, 40, 64, 25, false, 6, 3.14]}/>
               <meshStandardMaterial map={textureRynna} color={AttykaColor} side={THREE.DoubleSide} emissive={AttykaColor} emissiveIntensity={0.5}/>
            </mesh> 

            <mesh  receivedShadow castShadow visible={Roof3 == true ? false : Roof2}  scale={[.5, rynnaScale, .5]} position={[rynnaPosX1,     rynnaPosY1 + 1.25 + OkapRynnaParam2AngleY, -26.5]}  rotation={[-Math.PI / 2, 1.8, 6.283]}>
               <cylinderBufferGeometry attach="geometry" args={[5, 5, 40, 64, 25, false, 6, 3.14]}/>
               <meshStandardMaterial side={THREE.DoubleSide} map={textureRynna} color={AttykaColor} emissive={AttykaColor} emissiveIntensity={0.5} />
            </mesh> 

            {/* rynna */}

            {/* walls */}
    
             {/* LEFT AND RIGHT WALLS */}
            <group ref={hailRef}>
            <group>

            <mesh renderOrder={1} visible={WallWithModifiedUV} receiveShadow castShadow scale={30} position={[87.8, 33.25, -67]}>     

<bufferGeometry>
<bufferAttribute
needsUpdate={true}
attach='attributes-position'
array={positions}
count={positions.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach='attributes-uv'
array={new Float32Array([
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,

    // wall back?

    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,     UVWallHeightRoof1 - UVSimpleWallFixer, 0,  UVSimpleWall,

     // wall front?

     0,  UVSimpleWall, 0,       UVWallHeightRoof1 -  UVSimpleWallFixer, 0,   UVWallHeightRoof1 - UVSimpleWallFixer,  0,    UVWallHeightRoof1  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,

    // wall back?

     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-normal'
array={normals}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={elevationColor} metalness={textureOutsideBrightness} map={texture} alphaTest={0.5} transparent={true}/>

{FilteredHolesRight.map((item) => (       
<mesh renderOrder={0} position={[HolesPosRight, 0, item.x + 1.365]}>
<boxBufferGeometry args={[.235, item.ScaleModelY, item.scaleModelX]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  item.OffsetFrameAdditional]} scale={[ item.InteriorHoleX, item.InteriorHoleY, 7.5]}></primitive> 
</mesh>
))}

            </mesh>
            
            <mesh renderOrder={1} visible={WallWithModifiedUV} receiveShadow castShadow scale={[30, 30, 30]} position={[84.7, 33.25, -67]}>     

<bufferGeometry>
<bufferAttribute

needsUpdate={true}
attach='attributes-position'
array={new Float32Array([
// Front face
widthWalls33depth + .1, -1, widthWalls,  widthWalls33, -1, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls,

// Back face
widthWalls33depth + .1, -1, widthWalls22depth__ - widthWallsParams,widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, -1.0, widthWalls22depth__- widthWallsParams,

// Top face
widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls,widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,

// Bottom face
widthWalls33depth + .1, -1.0 , -1 - widthWallsParams, widthWalls33, -1.0, -1.0 - widthWallsParams, widthWalls33, -1.0, widthWalls, widthWalls33depth + .1, -1.0, widthWalls,

// Right face
widthWalls33, -1.0 , widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, -1.0, widthWalls,

// Left face
widthWalls33depth + .1, -1.0, widthWalls22depth__ - widthWallsParams, widthWalls33depth + .1, -1.0, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,
])}
count={positions.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach='attributes-uv'
array={new Float32Array([
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,

    // wall back?

    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,     UVWallHeightRoof1 - UVSimpleWallFixer, 0,  UVSimpleWall,

     // wall front?

     0,  UVSimpleWall, 0, UVWallHeightRoof1 -  UVSimpleWallFixer, 0,   UVWallHeightRoof1 - UVSimpleWallFixer,  0,    UVWallHeightRoof1  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,

    // wall back?

     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-normal'
array={normals}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={InsideColor} map={texture} metalness={2.35} alphaTest={0.5} ref={rigthSideMat} transparent={rightSideBool} />

{FilteredHolesRight.map((item) => (       
    <mesh renderOrder={0} position={[HolesPosRight, 0, item.x + 1.365]}>
<boxBufferGeometry args={[.235, item.ScaleModelY, item.scaleModelX]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  item.OffsetFrameAdditional]} scale={[ item.InteriorHoleX, item.InteriorHoleY, 7.5]}></primitive> 
</mesh> 
))}</mesh>

<mesh renderOrder={1} visible={WallWithoutModifiedUV} receiveShadow castShadow  scale={30} position={[87.8, 33.25, -67]}>     

<bufferGeometry>
<bufferAttribute

needsUpdate={true}
attach='attributes-position'
array={positions}
count={positions.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach='attributes-uv'
array={UVSsett2}  
itemSize={2}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-normal'
array={normals}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  color={elevationColor} metalness={textureOutsideBrightness}  map={texture}  alphaTest={0.5}   transparent={true} />

{FilteredHolesRight.map((item) => (       
    <mesh renderOrder={0} position={[HolesPosRight, 0, item.x + 1.365]}>
<boxBufferGeometry args={[.235, item.ScaleModelY, item.scaleModelX]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  item.OffsetFrameAdditional]} scale={[ item.InteriorHoleX, item.InteriorHoleY, 7.5]}></primitive>
</mesh>
))}

            </mesh>
            
            <mesh renderOrder={1} visible={WallWithoutModifiedUV} receiveShadow castShadow  scale={[30, 30, 30]}  position={[84.7, 33.25, -67]}>     

<bufferGeometry>
<bufferAttribute

needsUpdate={true}
attach='attributes-position'
array={new Float32Array([
// Front face
widthWalls33depth + .1, -1, widthWalls,  widthWalls33, -1, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls,

// Back face
widthWalls33depth + .1, -1, widthWalls22depth__ - widthWallsParams,widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, -1.0, widthWalls22depth__- widthWallsParams,

// Top face
widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls,widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,

// Bottom face
widthWalls33depth + .1, -1.0 , -1 - widthWallsParams, widthWalls33, -1.0, -1.0 - widthWallsParams, widthWalls33, -1.0, widthWalls, widthWalls33depth + .1, -1.0, widthWalls,

// Right face
widthWalls33, -1.0 , widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, -1.0, widthWalls,

// Left face
widthWalls33depth + .1, -1.0, widthWalls22depth__ - widthWallsParams, widthWalls33depth + .1, -1.0, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,
])}
count={positions.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach='attributes-uv'
array={UVSsett2}  
itemSize={2}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-normal'
array={normals}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={InsideColor}  map={texture} metalness={2.35}   alphaTest={0.5}   transparent />

{FilteredHolesRight.map((item) => (       
    <mesh renderOrder={0} position={[HolesPosRight, 0, item.x + 1.365]}>
<boxBufferGeometry args={[.235, item.ScaleModelY, item.scaleModelX]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  item.OffsetFrameAdditional]} scale={[ item.InteriorHoleX, item.InteriorHoleY, 7.5]}></primitive> 
</mesh>
))}

            </mesh>

            <mesh renderOrder={1} visible={WallWithoutModifiedUV1} receiveShadow castShadow  scale={30} position={[87.8, 33.25, -67]}>     

<bufferGeometry>
<bufferAttribute

needsUpdate={true}
attach='attributes-position'
array={positions}
count={positions.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach='attributes-uv'
array={new Float32Array([
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,

    // wall back?

    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,  UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall - UVUkrytyParam,

     // wall front?

     0,  UVSimpleWall - UVUkrytyParam, 0,  UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall - UVUkrytyParam, 0,  UVSimpleWall - UVUkrytyParam,

    // wall back?

     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-normal'
array={normals}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  color={elevationColor} metalness={textureOutsideBrightness}  map={texture}  alphaTest={0.5}   transparent={true} />

{FilteredHolesRight.map((item) => (       
    <mesh renderOrder={0} position={[HolesPosRight, 0, item.x + 1.365]}>
<boxBufferGeometry args={[.235, item.ScaleModelY, item.scaleModelX]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  item.OffsetFrameAdditional]} scale={[ item.InteriorHoleX, item.InteriorHoleY, 7.5]}></primitive> 
</mesh>
))}

            </mesh>
            
            <mesh renderOrder={1} visible={WallWithoutModifiedUV1} receiveShadow castShadow  scale={[30, 30, 30]}  position={[84.7, 33.25, -67]}>     

<bufferGeometry>
<bufferAttribute

needsUpdate={true}
attach='attributes-position'
array={new Float32Array([
// Front face
widthWalls33depth + .1, -1, widthWalls,  widthWalls33, -1, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls,

// Back face
widthWalls33depth + .1, -1, widthWalls22depth__ - widthWallsParams,widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, -1.0, widthWalls22depth__- widthWallsParams,

// Top face
widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, heightWalls - UkrytyDachParam, widthWalls,widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,

// Bottom face
widthWalls33depth + .1, -1.0 , -1 - widthWallsParams, widthWalls33, -1.0, -1.0 - widthWallsParams, widthWalls33, -1.0, widthWalls, widthWalls33depth + .1, -1.0, widthWalls,

// Right face
widthWalls33, -1.0 , widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams, widthWalls33, heightWalls - UkrytyDachParam, widthWalls, widthWalls33, -1.0, widthWalls,

// Left face
widthWalls33depth + .1, -1.0, widthWalls22depth__ - widthWallsParams, widthWalls33depth + .1, -1.0, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls, widthWalls33depth + .1, heightWalls - UkrytyDachParam, widthWalls22depth__ - widthWallsParams,
])}
count={positions.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
attach='attributes-uv'
array={new Float32Array([
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,

    // wall back?

    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,

     // wall front?

     0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,

    // wall back?

     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute

needsUpdate={true}
attach='attributes-normal'
array={normals}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute

needsUpdate={true}
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={InsideColor}  map={texture} metalness={2.35}   alphaTest={0.5} ref={rigthSideMat}   transparent={rightSideBool} />

{FilteredHolesRight.map((item) => (       
<mesh renderOrder={0} position={[HolesPosRight, 0, item.x + 1.365]}>
<boxBufferGeometry args={[.235, item.ScaleModelY, item.scaleModelX]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  item.OffsetFrameAdditional]} scale={[ item.InteriorHoleX, item.InteriorHoleY, 7.5]}></primitive> 
</mesh>
))}

            </mesh>

            </group>
            {/* LEFT WALL */}
            <group> 

            <mesh renderOrder={1} visible={WallWithModifiedUV} receiveShadow castShadow scale={30} position={[89.8, 33.25, -67]}> 

                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions_wall_sec}
                    count={positions_wall_sec.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={new Float32Array([
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                    
                        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,  UVLeftRightWallParam  + UVHeightParam - UVFixerHeight , 0, UVChange - UVLeftRightWallParam -  UVLeftRightWallParam2 + UVChangeAngleFixer + UVLeftWallParam__2,
                    
                         // wall front?
                    
                         0, UVLeftWallParam__1 , 0,  UVLeftRightWallParam   + UVHeightParam - UVFixerHeight  , 0, UVLeftRightWallParam  +  UVHeightParam - UVFixerHeight,  0,  UVLeftRightWallParam  +  UVHeightParam  - UVFixerHeight, 0, UVLeftWallParam__1, 0, UVChange - UVLeftRightWallParam - UVLeftRightWallParam2 + UVChangeAngleFixer + UVLeftWallParam__2,
                    
                        // wall back?
                    
                         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                    ])}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={elevationColor} metalness={textureOutsideBrightness}  map={texture}  alphaTest={0.5} transparent={true}/>
                 
            <mesh visible={false} renderOrder={0} rotation={[0, -Math.PI/1, 0]} position={[-7.2, 0, 0]}>
            <boxBufferGeometry args={[.235, 3, 2.7]}  />
            <meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
            <primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  -2.25]} scale={[1.1, 1.8, 7.5]}></primitive> 
            </mesh>
      

            </mesh>  

            <mesh renderOrder={1} visible={WallWithModifiedUV} receiveShadow castShadow scale={30}  position={[93.1, 33.25, -67]}> 

                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
            // Front face
            
            FrontWall1, -1 , widthWalls,  FrontWall1param - .1, -1 , widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,
    
        // Back face
        FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param - .1, -1 , -1.0,
    
        // Top face
        FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
    
        // Bottom face
        FrontWall1, -1, -1, FrontWall1param - .1, -1, -1.0 , FrontWall1param - .1, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,
    
        // Right face
        FrontWall1param - .1, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, -1, widthWalls,
    
        // Left face
        FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
        ])}
                    count={new Float32Array([
            // Front face
            
            FrontWall1, -1 , widthWalls,  FrontWall1param - .1, -1 , widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,
    
        // Back face
        FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param - .1, -1 , -1.0,
    
        // Top face
        FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
    
        // Bottom face
        FrontWall1, -1, -1, FrontWall1param - .1, -1, -1.0 , FrontWall1param - .1, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,
    
        // Right face
        FrontWall1param - .1, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, -1, widthWalls,
    
        // Left face
        FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
        ]).length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={new Float32Array([
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                    
                        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,  UVLeftRightWallParam  + UVHeightParam - .0595 , 0, UVChange - UVLeftRightWallParam -  UVLeftRightWallParam2 + UVChangeAngleFixer + UVLeftWallParam__2  ,
                    
                         // wall front?
                    
                         0, UVLeftWallParam__1 , 0,  UVLeftRightWallParam   + UVHeightParam - .0595  , 0, UVLeftRightWallParam  +  UVHeightParam - .0595,  0,  UVLeftRightWallParam  +  UVHeightParam  - .0595, 0, UVLeftWallParam__1 , 0, UVChange - UVLeftRightWallParam - UVLeftRightWallParam2 + UVChangeAngleFixer + UVLeftWallParam__2  ,
                    
                        // wall back?
                    
                         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                    ])}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={InsideColor} metalness={2.35}   map={texture}  alphaTest={0.5} ref={leftSideMat} transparent={leftSideBool} />
                 
            <mesh visible={false} renderOrder={0} rotation={[0, -Math.PI/1, 0]} position={[-7.2, 0, 0]}>
            <boxBufferGeometry args={[.235, 3, 2.7]}  />
            <meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
            <primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  -2.25]} scale={[1.1, 1.8, 7.5]}></primitive> 
            </mesh>
      

            </mesh>   

            <mesh renderOrder={1} visible={WallWithoutModifiedUV} receiveShadow castShadow scale={30}  position={[89.8, 33.25, -67]}> 

<bufferGeometry>
<bufferAttribute
needsUpdate={true}
    attach='attributes-position'
    array={positions_wall_sec}
    count={positions_wall_sec.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-color'
    array={colors}
    count={colors.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-uv'
    array={UVSsett2}  
    itemSize={2}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-normal'
    array={normals}
    count={normals.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach="index"
    array={indices}
    count={indices.length}
    itemSize={1}
/>
<bufferAttribute
    attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={elevationColor} metalness={textureOutsideBrightness}  map={texture}  alphaTest={0.5}  transparent={true}  />
 
<mesh visible={false} renderOrder={0} rotation={[0, -Math.PI/1, 0]} position={[-7.2, 0, 0]}>
<boxBufferGeometry args={[.235, 3, 2.7]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  -2.25]} scale={[1.1, 1.8, 7.5]}></primitive> 
</mesh>


            </mesh>  

            <mesh renderOrder={1} visible={WallWithoutModifiedUV} receiveShadow castShadow scale={30}  position={[93.1, 33.25, -67]}> 

<bufferGeometry>
<bufferAttribute
needsUpdate={true}
    attach='attributes-position'
    array={new Float32Array([
// Front face

FrontWall1, -1 , widthWalls,  FrontWall1param - .1, -1 , widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,

// Back face
FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param - .1, -1 , -1.0,

// Top face
FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,

// Bottom face
FrontWall1, -1, -1, FrontWall1param - .1, -1, -1.0 , FrontWall1param - .1, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,

// Right face
FrontWall1param - .1, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, -1, widthWalls,

// Left face
FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
])}
    count={new Float32Array([
// Front face

FrontWall1, -1 , widthWalls,  FrontWall1param - .1, -1 , widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,

// Back face
FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param - .1, -1 , -1.0,

// Top face
FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,

// Bottom face
FrontWall1, -1, -1, FrontWall1param - .1, -1, -1.0 , FrontWall1param - .1, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,

// Right face
FrontWall1param - .1, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, -1, widthWalls,

// Left face
FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
]).length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-color'
    array={colors}
    count={colors.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-uv'
    array={UVSsett2}  
    itemSize={2}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-normal'
    array={normals}
    count={normals.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach="index"
    array={indices}
    count={indices.length}
    itemSize={1}
/>
<bufferAttribute
    attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={InsideColor} metalness={2.35} map={texture} alphaTest={0.5} transparent={true}  />
 
<mesh visible={false} renderOrder={0} rotation={[0, -Math.PI/1, 0]} position={[-7.2, 0, 0]}>
<boxBufferGeometry args={[.235, 3, 2.7]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  -2.25]} scale={[1.1, 1.8, 7.5]}></primitive> 
</mesh>


            </mesh>   

            <mesh renderOrder={1} visible={WallWithoutModifiedUV1} receiveShadow castShadow scale={30}  position={[89.8, 33.25, -67]}> 

<bufferGeometry>
<bufferAttribute
needsUpdate={true}
    attach='attributes-position'
    array={positions_wall_sec}
    count={positions_wall_sec.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-color'
    array={colors}
    count={colors.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-uv'
    array={new Float32Array([
        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
        // wall back?
    
        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,
    
         // wall front?
    
         0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,
    
        // wall back?
    
         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
    ])}  
    itemSize={2}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-normal'
    array={normals}
    count={normals.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach="index"
    array={indices}
    count={indices.length}
    itemSize={1}
/>
<bufferAttribute
    attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={elevationColor} metalness={textureOutsideBrightness}  map={texture}  alphaTest={0.5}   transparent={true}  />
 
<mesh visible={false} renderOrder={0} rotation={[0, -Math.PI/1, 0]} position={[-7.2, 0, 0]}>
<boxBufferGeometry args={[.235, 3, 2.7]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  -2.25]} scale={[1.1, 1.8, 7.5]}></primitive> 
</mesh>


            </mesh>   

            <mesh renderOrder={1} visible={WallWithoutModifiedUV1} receiveShadow castShadow scale={30}  position={[93.1, 33.25, -67]}> 

<bufferGeometry>
<bufferAttribute
needsUpdate={true}
    attach='attributes-position'
    array={new Float32Array([
// Front face

FrontWall1, -1 , widthWalls,  FrontWall1param - .1, -1 , widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,

// Back face
FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param - .1, -1 , -1.0,

// Top face
FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,

// Bottom face
FrontWall1, -1, -1, FrontWall1param - .1, -1, -1.0 , FrontWall1param - .1, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,

// Right face
FrontWall1param - .1, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, -1, widthWalls,

// Left face
FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
])}
    count={new Float32Array([
// Front face

FrontWall1, -1 , widthWalls,  FrontWall1param - .1, -1 , widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach , widthWalls,

// Back face
FrontWall1, -1 , -1 , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0  , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, -1.0,  FrontWall1param - .1, -1 , -1.0,

// Top face
FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls,FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,

// Bottom face
FrontWall1, -1, -1, FrontWall1param - .1, -1, -1.0 , FrontWall1param - .1, -1.0, widthWalls, FrontWall1, -1.0, widthWalls,

// Right face
FrontWall1param - .1, -1, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams , FrontWall1param - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1param - .1, -1, widthWalls,

// Left face
FrontWall1, -1 , widthWalls22depth__ - widthWallsParams , FrontWall1, -1 , widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls, FrontWall1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls22depth__ - widthWallsParams ,
]).length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-color'
    array={colors}
    count={colors.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-uv'
    array={new Float32Array([
        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
    
        // wall back?
    
        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,
    
         // wall front?
    
         0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,
    
        // wall back?
    
         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
    ])}  
    itemSize={2}
/>
<bufferAttribute
needsUpdate={true}
    attach='attributes-normal'
    array={normals}
    count={normals.length / 3}
    itemSize={3}
/>
<bufferAttribute
needsUpdate={true}
    attach="index"
    array={indices}
    count={indices.length}
    itemSize={1}
/>
<bufferAttribute
    attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={InsideColor} metalness={2.35}   map={texture}  alphaTest={0.5} ref={leftSideMat} transparent={leftSideBool} />
 
<mesh visible={false} renderOrder={0} rotation={[0, -Math.PI/1, 0]} position={[-7.2, 0, 0]}>
<boxBufferGeometry args={[.235, 3, 2.7]}  />
<meshBasicMaterial color={0xffffff} side={THREE.DoubleSide} opacity={0} transparent={true} />
<primitive renderOrder={0} object={hole.scene.clone()} rotation={[0, -Math.PI/2, 0]} position={[  -39.115,    -2,  -2.25]} scale={[1.1, 1.8, 7.5]}></primitive> 
</mesh>


            </mesh>   

            </group>

             {/* LEFT AND RIGHT WALLS */}
    
            {/* FRONT WALL SMALLER */} 

            <group>

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithModifiedUV} scale={30} position={[27, 32.9, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions2}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                 <bufferAttribute
                  needsUpdate={true}
                  attach='attributes-uv'
                   array={new Float32Array([
                       0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                       0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,

                       // wall back?

                       -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0, UVFixerHeightFronBack  + UVHeightParam , 0, UVChange +  UVChangeHeight - UVChangeAngleFixer  - .087,

                        // wall front?

                        0, -.6, 0,  UVFixerHeightFronBack  + UVHeightParam , 0, UVFixerHeightFronBack +  UVHeightParam ,  0,  UVFixerHeightFronBack +  UVHeightParam , 0, -.6, 0, UVChange + -.087 - UVChangeHeight1 - UVChangeAngleFixer,

                       // wall back?

                        -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                   ])}  
                  itemSize={2}/>                 
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={textureOutsideBrightness}  color={elevationColor} alphaTest={0.5} transparent={true}/>
           
            </mesh> 

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithModifiedUV} scale={30} position={[27, 32.9, -131.15]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
                        // Front face
                    FrontWall, -1.00, widthPiston33depth_,  FrontWallparam - .1, -1.0, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
                
                    // Back face
                    FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, -1.0, widthWalls2,
                
                    // Top face
                    FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                
                    // Bottom face
                    -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                
                    // Right face
                    FrontWallparam - .1, -1.0, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1 , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, -1.0, widthPiston33depth_,
                
                    // Left face
                    FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                    ])}
                    count={new Float32Array([
                        // Front face
                    FrontWall, -1.00, widthPiston33depth_,  FrontWallparam - .1, -1.0, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
                
                    // Back face
                    FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, -1.0, widthWalls2,
                
                    // Top face
                    FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                
                    // Bottom face
                    -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                
                    // Right face
                    FrontWallparam - .1, -1.0, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1 , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, -1.0, widthPiston33depth_,
                
                    // Left face
                    FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                    ]).length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                 <bufferAttribute
                  needsUpdate={true}
                  attach='attributes-uv'
                   array={new Float32Array([
                    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,

                    // wall back?

                    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0, -0.5005  + UVHeightParam, 0, UVChange +  UVChangeHeight - UVChangeAngleFixer  - .087,

                     // wall front?

                     0, -.6, 0,  -0.5005  + UVHeightParam, 0, -0.5005 +  UVHeightParam,  0,  -0.5005 +  UVHeightParam, 0, -.6, 0, UVChange + -.087 - UVChangeHeight1 - UVChangeAngleFixer,

                    // wall back?

                     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                ])}  
                  itemSize={2}/>                 
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={2.35}  color={InsideColor} alphaTest={0.5} ref={frontSideMat} transparent={frontSideBool}  />
            </mesh>  

            <mesh renderOrder={1}  receiveShadow castShadow  visible={WallWithoutModifiedUV}  scale={30} position={[27, 32.9, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions2}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                 <bufferAttribute
                  needsUpdate={true}
                  attach='attributes-uv'
                   array={UVSsett2}  
                  itemSize={2}/>                 
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={textureOutsideBrightness}  color={elevationColor}  alphaTest={0.5} transparent={true}/>
           
            </mesh>

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithoutModifiedUV} scale={30} position={[27, 32.9, -131.15]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
                        // Front face
                    FrontWall, -1.00, widthPiston33depth_,  FrontWallparam - .1, -1.0, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
                
                    // Back face
                    FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, -1.0, widthWalls2,
                
                    // Top face
                    FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                
                    // Bottom face
                    -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                
                    // Right face
                    FrontWallparam - .1, -1.0, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1 , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, -1.0, widthPiston33depth_,
                
                    // Left face
                    FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                    ])}
                    count={new Float32Array([
                        // Front face
                    FrontWall, -1.00, widthPiston33depth_,  FrontWallparam - .1, -1.0, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
                
                    // Back face
                    FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, -1.0, widthWalls2,
                
                    // Top face
                    FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                
                    // Bottom face
                    -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                
                    // Right face
                    FrontWallparam - .1, -1.0, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1 , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, -1.0, widthPiston33depth_,
                
                    // Left face
                    FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                    ]).length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                 <bufferAttribute
                  needsUpdate={true}
                  attach='attributes-uv'
                   array={UVSsett2}  
                  itemSize={2}/>                 
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={2.35} color={InsideColor} alphaTest={0.5} transparent={true} />
            </mesh> 

            <mesh renderOrder={1}  receiveShadow castShadow  visible={WallWithoutModifiedUV1}  scale={30} position={[27, 32.9, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions2}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                 <bufferAttribute
                  needsUpdate={true}
                  attach='attributes-uv'
                   array={new Float32Array([
                    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                
                    // wall back?
                
                    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,
                
                     // wall front?
                
                     0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,
                
                    // wall back?
                
                     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                ])}  
                  itemSize={2}/>                 
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={textureOutsideBrightness}  color={elevationColor} alphaTest={0.5} transparent={true} />
           
            </mesh>

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithoutModifiedUV1} scale={30} position={[27, 32.9, -131.15]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
                        // Front face
                    FrontWall, -1.00, widthPiston33depth_,  FrontWallparam - .1, -1.0, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
                
                    // Back face
                    FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, -1.0, widthWalls2,
                
                    // Top face
                    FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                
                    // Bottom face
                    -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                
                    // Right face
                    FrontWallparam - .1, -1.0, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1 , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, -1.0, widthPiston33depth_,
                
                    // Left face
                    FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                    ])}
                    count={new Float32Array([
                        // Front face
                    FrontWall, -1.00, widthPiston33depth_,  FrontWallparam - .1, -1.0, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_,
                
                    // Back face
                    FrontWall, -1.0, widthWalls2, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1, -1.0, widthWalls2,
                
                    // Top face
                    FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, heightWalls +  UkrytyDach , widthPiston33depth_,FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                
                    // Bottom face
                    -5.0, -1.0, -1.0, -4.925, -1.0, -3.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                
                    // Right face
                    FrontWallparam - .1, -1.0, widthWalls2, FrontWallparam - .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, FrontWallparam - .1 , heightWalls +  UkrytyDach, widthPiston33depth_, FrontWallparam - .1, -1.0, widthPiston33depth_,
                
                    // Left face
                    FrontWall, -1.0, widthWalls2, FrontWall, -1.0, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach, widthPiston33depth_, FrontWall, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2,
                    ]).length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                 <bufferAttribute
                  needsUpdate={true}
                  attach='attributes-uv'
                   array={new Float32Array([
                    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                
                    // wall back?
                
                    -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,
                
                     // wall front?
                
                     0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,
                
                    // wall back?
                
                     -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                ])}  
                  itemSize={2}/>                 
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={2.35} color={InsideColor} alphaTest={0.5} ref={frontSideMat} transparent={frontSideBool} />
           
            </mesh> 

            </group>            

              {/* FRONT WALL SMALLER */}

            {/* BACK WALL SMALLER */}

            <group>

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithModifiedUV} scale={30} position={[27, 33.185, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions1}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={new Float32Array([
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
 
                        // wall back?
 
                        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0, -0.5005  + UVHeightParam, 0, UVChange +  UVChangeHeight - UVChangeAngleFixer  - .087,
 
                         // wall front?
 
                         0, -.6, 0,  -0.5005  + UVHeightParam, 0, -0.5005 +  UVHeightParam,  0,  -0.5005 +  UVHeightParam, 0, -.6, 0, UVChange + -.087 - UVChangeHeight1 - UVChangeAngleFixer,
 
                        // wall back?
 
                         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                    ])}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={textureOutsideBrightness}  color={elevationColor} alphaTest={0.5} transparent={true}/>
            </mesh> 

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithModifiedUV} scale={30} position={[27, 33.185, -124.85]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
                        // Front face
                        widthWalls22depth_ + .1 , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,
                  
                    // Back face
                    widthWalls22depth_ + .1  , -1.0   , widthWalls2, widthWalls22depth_ + .1 , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
                  
                    // Top face
                    widthWalls22depth_ + .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
                  
                    // Bottom face
                    -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                  
                    // Right face
                    widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
                  
                    // Left face
                    widthWalls22depth + .1, -1.0 , widthWalls2, widthWalls22depth + .1, -1.0 , widthPiston33depth_  ,widthWalls22depth + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + .1, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
                      ]) }
                    count={new Float32Array([
                        // Front face
                        widthWalls22depth_ + .1 , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,
                  
                    // Back face
                    widthWalls22depth_ + .1  , -1.0   , widthWalls2, widthWalls22depth_ + .1 , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
                  
                    // Top face
                    widthWalls22depth_ + .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
                  
                    // Bottom face
                    -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                  
                    // Right face
                    widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
                  
                    // Left face
                    widthWalls22depth + .1, -1.0 , widthWalls2, widthWalls22depth + .1, -1.0 , widthPiston33depth_  ,widthWalls22depth + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + .1, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
                      ]) .length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={new Float32Array([
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
 
                        // wall back?
 
                        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0, -0.5005  + UVHeightParam, 0, UVChange +  UVChangeHeight - UVChangeAngleFixer  - .087,
 
                         // wall front?
 
                         0, -.6, 0,  -0.5005  + UVHeightParam, 0, -0.5005 +  UVHeightParam,  0,  -0.5005 +  UVHeightParam, 0, -.6, 0, UVChange + -.087 - UVChangeHeight1 - UVChangeAngleFixer,
 
                        // wall back?
 
                         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                    ])}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} map={textureWall} metalness={2.35} color={InsideColor} alphaTest={0.5} ref={backSideMat} transparent={backSideBool} />
            </mesh>

            <mesh renderOrder={1}  receiveShadow castShadow  visible={WallWithoutModifiedUV}  scale={30} position={[27, 33.185, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions1}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={UVSsett2}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={textureOutsideBrightness}  color={elevationColor} alphaTest={0.5} transparent={true}/>
            </mesh>  

            <mesh renderOrder={1} receiveShadow castShadow visible={WallWithoutModifiedUV} scale={30} position={[27, 33.185, -124.85]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
                        // Front face
                        widthWalls22depth_ + .1 , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,
                  
                    // Back face
                    widthWalls22depth_ + .1  , -1.0   , widthWalls2, widthWalls22depth_ + .1 , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
                  
                    // Top face
                    widthWalls22depth_ + .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
                  
                    // Bottom face
                    -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                  
                    // Right face
                    widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
                  
                    // Left face
                    widthWalls22depth + .1, -1.0 , widthWalls2, widthWalls22depth + .1, -1.0 , widthPiston33depth_  ,widthWalls22depth + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + .1, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
                      ]) }
                    count={new Float32Array([
                        // Front face
                        widthWalls22depth_ + .1 , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,
                  
                    // Back face
                    widthWalls22depth_ + .1  , -1.0   , widthWalls2, widthWalls22depth_ + .1 , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
                  
                    // Top face
                    widthWalls22depth_ + .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
                  
                    // Bottom face
                    -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                  
                    // Right face
                    widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
                  
                    // Left face
                    widthWalls22depth + .1, -1.0 , widthWalls2, widthWalls22depth + .1, -1.0 , widthPiston33depth_  ,widthWalls22depth + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + .1, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
                      ]) .length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={UVSsett2}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={2.35}  color={InsideColor} alphaTest={0.5} transparent={true}/>
            </mesh> 

            <mesh renderOrder={1}  receiveShadow castShadow  visible={WallWithoutModifiedUV1}  scale={30} position={[27, 33.185, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={positions1}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={new Float32Array([
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                    
                        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,
                    
                         // wall front?
                    
                         0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,
                    
                        // wall back?
                    
                         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                    ])}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={textureOutsideBrightness}  color={elevationColor} alphaTest={0.5} transparent={true}/>
            </mesh>  

            <mesh renderOrder={1}  receiveShadow castShadow visible={WallWithoutModifiedUV1} scale={30} position={[27, 33.185, -124.85]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-position'
                    array={new Float32Array([
                        // Front face
                        widthWalls22depth_ + .1 , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,
                  
                    // Back face
                    widthWalls22depth_ + .1  , -1.0   , widthWalls2, widthWalls22depth_ + .1 , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
                  
                    // Top face
                    widthWalls22depth_ + .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
                  
                    // Bottom face
                    -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                  
                    // Right face
                    widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
                  
                    // Left face
                    widthWalls22depth + .1, -1.0 , widthWalls2, widthWalls22depth + .1, -1.0 , widthPiston33depth_  ,widthWalls22depth + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + .1, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
                      ]) }
                    count={new Float32Array([
                        // Front face
                        widthWalls22depth_ + .1 , -1.0 , widthPiston33depth_  ,  widthWalls22, -1.0 , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ , widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,
                  
                    // Back face
                    widthWalls22depth_ + .1  , -1.0   , widthWalls2, widthWalls22depth_ + .1 , heightWalls +  UkrytyDach + JednospadowyDach,  widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, -1.0, widthWalls2,
                  
                    // Top face
                    widthWalls22depth_ + .1, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22depth_ + .1, heightWalls +  UkrytyDach , widthPiston33depth_ , widthWalls22, heightWalls +  UkrytyDach  , widthPiston33depth_ ,widthWalls22 , heightWalls +  UkrytyDach+ JednospadowyDach, widthWalls2,
                  
                    // Bottom face
                    -1.0, -1.0, -1.0, -0.925, -1.0, -1.0, -0.925, -1.0, 1.0, -1.0, -1.0, 1.0,
                  
                    // Right face
                    widthWalls22, -1.0, widthWalls2, widthWalls22, heightWalls +  UkrytyDach + JednospadowyDach, widthWalls2, widthWalls22, heightWalls +  UkrytyDach, widthPiston33depth_ , widthWalls22, -1.0, widthPiston33depth_ ,
                  
                    // Left face
                    widthWalls22depth + .1, -1.0 , widthWalls2, widthWalls22depth + .1, -1.0 , widthPiston33depth_  ,widthWalls22depth + .1, heightWalls +  UkrytyDach , widthPiston33depth_ ,widthWalls22depth + .1, heightWalls +  UkrytyDach  + JednospadowyDach, widthWalls2,
                      ]) .length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-uv'
                    array={new Float32Array([
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                    
                        -1.0, -1.0, 1.0,  -1, -3.0, 1.0, 0, 1.0, 0,    + UVHeightParam - UVSimpleWallFixer, 0,  UVSimpleWall,
                    
                         // wall front?
                    
                         0,  UVSimpleWall, 0,     + UVHeightParam -  UVSimpleWallFixer, 0,  UVHeightParam - UVSimpleWallFixer,  0,   UVHeightParam  - UVSimpleWallFixer, 0,  UVSimpleWall, 0,  UVSimpleWall,
                    
                        // wall back?
                    
                         -5.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
                    ])}  
                    itemSize={2}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach='attributes-normal'
                    array={normals}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                needsUpdate={true}
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0}  map={textureWall} metalness={2.35}  color={InsideColor} alphaTest={0.5} ref={backSideMat}  transparent={backSideBool}/>
            </mesh> 

            </group>
            </group>
            {/* BACK WALL SMALLER */}

            {/* FRAMES FRONT AND BACK*/ } 

            <group>

            <mesh receivedShadow scale={[30, 28.9, 30]} visible={true} position={[113.5 - LameleFrontBackAdditionalOffset, 35, -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                               new Float32Array([ 
                            pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_1 - .015,  pacholek1_3 + .037, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_1 - .015,
                           
                           // Back face
                            pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2  ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2  , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                          
                           // Top face
                            pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_2 + .115  , pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2  , pacholek2_2 + .115  ,
                          
                           // Bottom face
                           widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                          
                           // Right face
                           widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                          
                           // Left face
                            pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 , pacholek2_1 - .015,  pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2  , pacholek2_2 + .115  ,
                          ]) : new Float32Array([ 
                            pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_1 - .015,  pacholek1_3 + .037, 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_1 - .015,
                           
                           // Back face
                            pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                           
                          
                           // Top face
                            pacholek1_3 + .037 , 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_2 + .115  ,
                          
                           // Bottom face
                           widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                          
                           // Right face
                           widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                           heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                           heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                          
                           // Left face
                            pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 ,
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                            heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1, pacholek2_2 + .115  ,
                          ]) 

                    }
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow scale={[30, 29, 30]} visible={true} position={[235 + LameleFrontBackAdditionalOffset1, 35, -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                           new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_1 - .015,  pacholek1_3 + .037, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04  ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04  , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_2 + .115  , pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04  , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04 , pacholek2_1 - .015,  pacholek1_3 + .037 , heightWalls + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04  , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2  , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2  , pacholek2_2 + .115  ,
                      ]) }
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={true} position={[113.5 - LameleFrontBackAdditionalOffset, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_1 -.02, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04,  pacholek2_2 + .1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_2 + .1, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_1 -.02, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_1 -.02,pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach- roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_2 + .1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach  - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_1 -.02, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach  - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .04, pacholek2_2 + .1,
                          ])
                    
                    :

                    new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_2 + LameleAngleWidth1_1 - .05, pacholek2_2 + .1,
                      ])

                    }
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={true} position={[235 + LameleFrontBackAdditionalOffset1, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .08 , pacholek2_1 -.02, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .08, pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08 ,  pacholek2_2 + .1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08 , pacholek2_2 + .1, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .08 , pacholek2_1 -.02, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .08, pacholek2_1 -.02,pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08, pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach- roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08 , pacholek2_2 + .1, pacholek1_1, heightWalls +  UkrytyDach + JednospadowyDach  - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08 , pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2param - 1.795 + LameleWidthFix2 + LameleAngleFix2 - .08 , pacholek2_1 -.02, pacholek1_2 - .03, heightWalls +  UkrytyDach + JednospadowyDach  - roof_type_2 - 1.695 + LameleWidthFix2 + LameleAngleFix2 - .08, pacholek2_2 + .1,
                          ])
                    
                    :

                    new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_3 + LameleAngleWidth1_2 - .05, pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh>  

            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25 
                || WidthSetterLengthtHail == 24 
                || WidthSetterLengthtHail == 23 
                || WidthSetterLengthtHail == 22 
                || WidthSetterLengthtHail == 21 
                || WidthSetterLengthtHail == 20
                || WidthSetterLengthtHail == 19
                ? true : false} position={[13.5 - LameleFrontBackAdditionalOffset, 35, -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                        new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                         , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                         , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                          ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                          , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                         , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                         heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                          , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                        , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                        , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                         , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                          , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5  , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5  , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 , pacholek2_2 + .115  ,
                      ])}
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh>
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25 
                || WidthSetterLengthtHail == 24 
                || WidthSetterLengthtHail == 23 
                || WidthSetterLengthtHail == 22 
                || WidthSetterLengthtHail == 21 
                || WidthSetterLengthtHail == 20
                || WidthSetterLengthtHail == 19 
                ? true : false} position={[325 + LameleFrontBackAdditionalOffset1, 35, -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                        new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                         , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                         , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                          ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                          , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                         , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                         heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05 
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                          , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                        , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                        , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                         , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + .05
                          , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_4, pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + LameleAngleFix1_4, pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_4,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_4 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_4, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_4, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_4, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleFix1_4, pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleFix1_4, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleFix1_4, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_4, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleFix1_4 , pacholek2_2 + .115  ,
                      ])}
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25 
                || WidthSetterLengthtHail == 24 
                || WidthSetterLengthtHail == 23 
                || WidthSetterLengthtHail == 22 
                || WidthSetterLengthtHail == 21 
                || WidthSetterLengthtHail == 20
                || WidthSetterLengthtHail == 19 
                ? true : false} position={[13.5- LameleFrontBackAdditionalOffset, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                             heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                            pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                            pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, 
                             
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                            pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, 
                            pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, 
                            pacholek2_1 -.02,pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, 
                            pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_2 + .1,
                          ])
                    :

                    new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleFix1_5 - .05, pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25 
                || WidthSetterLengthtHail == 24 
                || WidthSetterLengthtHail == 23 
                || WidthSetterLengthtHail == 22 
                || WidthSetterLengthtHail == 21 
                || WidthSetterLengthtHail == 20
                || WidthSetterLengthtHail == 19 
                ? true : false} position={[325 + LameleFrontBackAdditionalOffset1, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                             heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                            pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                            pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, 
                             
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                            pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, 
                            pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, 
                            pacholek2_1 -.02,pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, 
                            pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.895 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12, pacholek2_2 + .1,
                          ])
                    :

                    new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_4 - .05 ,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleFix1_4 - .05 , pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh>  

            <mesh receivedShadow scale={[30, 28.9, 30]} visible={
                WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25   ? true : false} position={[-88.5 - LameleFrontBackAdditionalOffset, 35, -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                        new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                         , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                         , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                          ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                          , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                         , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                         heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                          , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                        , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                        , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                         , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                          , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8, pacholek2_2 + .115  ,
                      ])}
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={
                WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25   ? true : false} position={[425 + LameleFrontBackAdditionalOffset1, 35, -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                        new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                         , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                         , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                          ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                          , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                         , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                         heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05 
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                          , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                        , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                        , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                         , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13 + .05
                          , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_5, pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + LameleAngleWidth1_5, pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_5 ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_5  , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_5 , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_5 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_5 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_5 , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleWidth1_5 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleWidth1_5 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_5 , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_5  , pacholek2_2 + .115  ,
                      ])}
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={
                WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25   ? true : false} position={[-88.5- LameleFrontBackAdditionalOffset, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                             heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                            pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                            pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, 
                             
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                            pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, 
                            pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, 
                            pacholek2_1 -.02,pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, 
                            pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_2 + .1,
                          ])
                    :

                    new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_8 - .05, pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={
                WidthSetterLengthtHail == 35 
                || WidthSetterLengthtHail == 34 
                || WidthSetterLengthtHail == 33 
                || WidthSetterLengthtHail == 32 
                || WidthSetterLengthtHail == 31 
                || WidthSetterLengthtHail == 30 
                || WidthSetterLengthtHail == 29 
                || WidthSetterLengthtHail == 28 
                || WidthSetterLengthtHail == 27 
                || WidthSetterLengthtHail == 26 
                || WidthSetterLengthtHail == 25  ? true : false} position={[425 + LameleFrontBackAdditionalOffset1, 35,  -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                             heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                            pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                            pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, 
                             
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                            pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, 
                            pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, 
                            pacholek2_1 -.02,pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, 
                            pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_13, pacholek2_2 + .1,
                          ])
                    :

                    new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_5 - .05,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_5 - .05, pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh>  
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 ? true : false} position={[-188.5 - LameleFrontBackAdditionalOffset, 35,  -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                        new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                         , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                         , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                          ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                          , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                         , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                         heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                          , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                        , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                        , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                         , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                          , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6  , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6 , pacholek2_2 + .115  ,
                      ])}
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 ? true : false} position={[525 + LameleFrontBackAdditionalOffset1, 35,  -10.6]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_2_side_new : Roof2 == true ? 
                        new Float32Array([ 
                        pacholek1_3 + .037, -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                         , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                         , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                          ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                          , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , 
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                         , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                         heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 
                         , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                          , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                        , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                        , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037, -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                         , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14
                          , pacholek2_2 + .115  ,
                      ]) : new Float32Array([ 
                        pacholek1_3 + .037 , -1, pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1, pacholek2_1 - .015,  widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_1 - .015,  pacholek1_3 + .037, 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_1 - .015,
                       
                       // Back face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_7 ,  pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  ,
                       
                      
                       // Top face
                        pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_2 + .115  , pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_2 + .115  ,
                      
                       // Bottom face
                       widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_2 + .115  , widthWalls22depth_ - 1.59 + 5.52, -1, pacholek2_1 - .015,widthWalls22depth_ - 1.365 + 5.39, -1, pacholek2_1 - .015,
                      
                       // Right face
                       widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleWidth1_7 , pacholek2_2 + .115  , widthWalls22depth_ - 1.469 + 5.52, 
                       heightWalls + LameleAngleWidth1_7 , pacholek2_1 - .015, widthWalls22depth_ - 1.469 + 5.52, -1.0, pacholek2_1 - .015,
                      
                       // Left face
                        pacholek1_3 + .037 , -1.0, pacholek2_2 + .115  ,  pacholek1_3 + .037 , -1.0, pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_1 - .015,  pacholek1_3 + .037 , 
                        heightWalls + LameleAngleWidth1_7 , pacholek2_2 + .115  ,
                      ])}
                    count={lamele_2_side_new.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 ? true : false} position={[-188.5- LameleFrontBackAdditionalOffset, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14 - 4,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                             heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                            pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                            pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, 
                             
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                            pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, 
                            pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, 
                            pacholek2_1 -.02,pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, 
                            pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_2 + .1,
                          ])
                    :

                        new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + JednospadowyDach + LameleAngleWidth1_6, pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh> 
            <mesh receivedShadow scale={[30, 28.9, 30]} visible={WidthSetterLengthtHail == 35 ? true : false} position={[525 + LameleFrontBackAdditionalOffset1, 35, -94.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={Roof3 == true ? lamele_1_side_newest : Roof2 == true ?

                        new Float32Array([
                            pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                             heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                            pacholek2_1 -.02,
                            
                            // Back face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                            pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                          
                            // Top face
                            pacholek1_2 - .03, 
                             
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                            pacholek2_2 + .1, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, 
                            pacholek2_1 -.02, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, 
                            pacholek2_1 -.02,pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, 
                            pacholek2_2 + .1,
                          
                            // Bottom face
                            pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                          
                            // Right face
                            pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_2 + .1, pacholek1_1, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                          
                            // Left face
                            pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14,
                             pacholek2_1 -.02, pacholek1_2 - .03, 
                            heightWalls +  UkrytyDach + JednospadowyDach - roof_type_2 - 1.915 + LameleWidthFix2 + .3 + LameleAngleFix2 + LameleAngleFix2_1 + LameleAngleFix2_12 + LameleAngleFix2_14, pacholek2_2 + .1,
                          ])
                    :

                        new Float32Array([
                        pacholek1_2 - .03, -1.0, pacholek2_1 -.02,  pacholek1_1, -1.0, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_1 -.02,
                        
                        // Back face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_7 - .05,  pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_2 + .1, pacholek1_1, -1.0,  pacholek2_2 + .1,
                      
                        // Top face
                        pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_2 + .1, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_1 -.02, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_1 -.02,pacholek1_1, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_2 + .1,
                      
                        // Bottom face
                        pacholek1_2 - .03, -1., pacholek2_2 + .1, pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, -1.00, pacholek2_1 -.02, pacholek1_2 - .03, -1.0, pacholek2_1 -.02,
                      
                        // Right face
                        pacholek1_1, -1.0, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_2 + .1, pacholek1_1, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_1 -.02, pacholek1_1, -1.0, pacholek2_1 -.02,
                      
                        // Left face
                        pacholek1_2 - .03, -1.0, pacholek2_2 + .1, pacholek1_2 - .03, -1.0, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_1 -.02, pacholek1_2 - .03, 
                        heightWalls + LameleAngleWidth1_7 - .05, pacholek2_2 + .1,
                      ])}
                    count={lamele_1_side_newest.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={uvs1}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  envMap={false} envMapIntensity={0} color={KolorLaczenia} />
            </mesh>  

            </group>         

            {/* FRAMES FRONT AND BACK */ }
    
            {/* walls */} 

            <group visible={Roof1}>

            <group visible={Frame1Visible} position={[0 ,0, Frame1Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}/>
            </mesh>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}/>
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}/>
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame2Visible} position={[0 ,0, Frame2Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}   />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    alphaTest={0.5} transparent={true} />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}   />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}   />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame3Visible} position={[0 ,0, Frame3Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}   />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}   />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame4Visible} position={[0 ,0, Frame4Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}   />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}   />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"} alphaTest={0.5} transparent={true}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame5Visible} position={[0 ,0, Frame5Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    alphaTest={0.5} transparent={true} />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}   />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}  alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame6Visible} position={[0 ,0, Frame6Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true} />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}   alphaTest={0.5} transparent={true}  />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame7Visible} position={[0 ,0, Frame7Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={FrameHalfVisible} position={[0 ,0, FrameHalfPos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>  

            <group position={[0, 0,   ModelPosFront1 + 58.05]}> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={uvs_roof}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1.1}  reflectivity={.2} color={'#bababa'}   />
            </mesh>  
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={uvs_roof}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1.1}  reflectivity={.2} color={'#bababa'}  />
            </mesh>  
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={uvs_roof}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1.1}  reflectivity={.2} color={'#bababa'}  />
            </mesh>  
            </group> 

            <group position={[0, 0,   ModelPosBack + 72.65]}> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={uvs_roof}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1.1}  reflectivity={.2} color={'#bababa'}   />
            </mesh>  
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={uvs_roof}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1.1}  reflectivity={.2} color={'#bababa'}  />
            </mesh>  
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={uvs_roof}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1.1}  reflectivity={.2} color={'#bababa'}  />
            </mesh>  
            </group> 

            </group>

            <group visible={Roof2}>

            <group visible={Frame1Visible} position={[0 ,0, Frame1Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1} map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={Frame2Visible} position={[0 ,0, Frame2Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={Frame3Visible} position={[0 ,0, Frame3Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={Frame4Visible} position={[0 ,0, Frame4Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={Frame5Visible} position={[0 ,0, Frame5Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={Frame6Visible} position={[0 ,0, Frame6Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={Frame7Visible} position={[0 ,0, Frame7Pos - 20]}>

            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

            
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05  - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - RozstawOffset * RozstawKlinOffsetMultipler1 + 1.25]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh v castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>

            </group>
            <group visible={FrameHalfVisible} position={[0 ,0, FrameHalfPos - 20]}>
            <group receivedShadow castShadow  position={[0, Roof2PosY + 5, 92]}> 

           

            {/* ** */}

            <group position={[0, 0, 0 - RozstawFrameUp - 1.5]}>

            <mesh position={[-34.765, roof2ZdobienieAngle - 1, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[2, 10.75, 6.75]}/>
            <meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
           
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 5, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, .15, 6.75]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

            <mesh position={[-35, roof2ZdobienieAngle - 4, -163.55  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}>
            <boxBufferGeometry args={[20.5, 2.15, .5]}/>
            <meshStandardMaterial attach={'material'} map={KlinTexture} metalness={-2} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>
            
            </mesh>

<mesh   scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}   position={[30.2, 45, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 45, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
      
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
    -5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

    // wall back?
    
    -1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

    // wall front?

    -.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

    // wall back?

    -2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}   position={[30.2, 35, -70.8 - 92.5 - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}  map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow   scale={[30, 29.9, 1]} position={[30.2, 35, -70.8 - 92.5  - RozstawOffset * RozstawKlinOffsetMultipler + 2]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            
            
            </group>

            </group>
            </group>
            <group receivedShadow castShadow position={[0, Roof2PosY + 5, ModelPosFront1 + 63.75]}> 

            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-4.5} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-4.5} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-4.5} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            </group>
            <group receivedShadow castShadow position={[0, Roof2PosY + 5,  ModelPosBack + 78.45]}> 

           
            <group position={[0 , 0, -.45]}>

<mesh position={[-34.765, roof2ZdobienieAngle - 1, -71.05]}>
<boxBufferGeometry args={[2, 10.75, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-1.5} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 5, -71.05]}>
<boxBufferGeometry args={[20.5, .15, 6.75]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-1.5} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>

<mesh position={[-35, roof2ZdobienieAngle - 4, -71.05]}>
<boxBufferGeometry args={[20.5, 2.15, .5]}/>
<meshStandardMaterial  attach={'material'} map={KlinTexture} metalness={-1.5} roughness={2} color={"white"} envMapIntensity={0}></meshStandardMaterial>

</mesh>


<mesh scale={[30, 29.9, 1]}  position={[30.2, 43, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 43, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide}  metalness={.1}    map={KlinTexture} />
</mesh> 

{/* srodkowy part */}

<mesh scale={[30, 29.9, 1]}  position={[30.2, 45, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame_part }
count={ positions_roof_2_1_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture}/>
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 45, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame_part }
count={ positions_roof_2_2_frame_part.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([

-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,
-5.0, -1.0, 1.0,  -1, -6.0, 4.0, 2, 4.0, 2.0, -2.0, 6.0, -1.5,

// wall back?

-1.0, -1.0, 1.0,  -1, -1.0, 1.0, -1, 1.0, 1.0, -1.0, 1.0, -.5,

// wall front?

-.5, -.5, -.5,  -1, -2, -1,  -.5, -1.5, -.5, -1, -2, -.5,

// wall back?

-2.0, -2.0, -2.0,  -2, -2.0, 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0,
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1}     map={KlinTexture} />
</mesh> 

{/* dolny part */}


<mesh scale={[30, 29.9, 1]}  position={[30.2, 35, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_1_frame }
count={ positions_roof_2_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial  shadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh>

<mesh castShadow receiveShadow scale={[30, 29.9, 1]} position={[30.2, 35, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_2_2_frame }
count={ positions_roof_2_2_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={uvs_roof}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial sshadowSide={THREE.DoubleSide} metalness={.1}    map={KlinTexture} />
</mesh> 

            </group>  

            </group>
            </group>

            <group visible={Roof3} position={[0 ,-24.5, 0]}>

            <group visible={Frame1Visible} position={[0 ,0, Frame1Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame2Visible} position={[0 ,0, Frame2Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame3Visible} position={[0 ,0, Frame3Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame4Visible} position={[0 ,0, Frame4Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame5Visible} position={[0 ,0, Frame5Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame6Visible} position={[0 ,0, Frame6Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={Frame7Visible} position={[0 ,0, Frame7Pos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group>
            <group position={[0, 0, 87.5 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler1 ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>

            <group visible={FrameHalfVisible} position={[0 ,0, FrameHalfPos - 20]}>
            <group position={[0, 0, -4.875 - RozstawFrameUp - RozstawOffset * RozstawKlinOffsetMultipler ]}>
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
     <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={positions_roof_1_part_frame }
        count={positions_roof_1_part_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
            -2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 
            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
    <bufferGeometry>
    <bufferAttribute
        attach='attributes-position'
        array={ positions_roof_1_frame }
        count={ positions_roof_1_frame.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-color'
        array={colors}
        count={colors.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach='attributes-normal'
        array={normals1}
        count={normals.length / 3}
        itemSize={3}
    />
    <bufferAttribute
        attach="index"
        array={indices}
        count={indices.length}
        itemSize={1}
    />
    <bufferAttribute
        attach='attributes-uv'
        array={new Float32Array([
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
            -.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall back?
            
            -.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
    
            // wall front?
    
            -2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,
    
            // wall back?
    
            -2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
          ])}  
        itemSize={2}
    />
    <bufferAttribute
        attach={'uv'}
    />
    </bufferGeometry>
    <meshStandardMaterial metalness={1} color={"#bababa"}     />
  
            </mesh> 
            </group> 
            </group>  

            <group position={[0, 0,  ModelPosFront1 + 58.05 ]}>

            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_1_frame }
count={ positions_roof_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall front?

-2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial metalness={1} color={"#bababa"}    />
            </mesh> 

            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={positions_roof_1_part_frame }
count={positions_roof_1_part_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall front?

-2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial metalness={1} color={"#bababa"}     />
            </mesh> 

            <mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_1_frame }
count={ positions_roof_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
-.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
-.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall back?

-.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall front?

-2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial metalness={1} color={"#bababa"}     />

            </mesh> 

            </group>

            <group position={[0, 0,  ModelPosBack + 72.65 ]}>

<mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 4.95, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_1_frame }
count={ positions_roof_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall front?

-2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial metalness={1} color={"#bababa"}    />
</mesh> 

<mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 5.2, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={positions_roof_1_part_frame }
count={positions_roof_1_part_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  4.4, -.5,.4,
-2, -.5, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall front?

-2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial metalness={1} color={"#bababa"}     />
</mesh> 

<mesh receivedShadow castShadow  visible={true} scale={[30, 29.9, 1]} position={[30.2, Roof1PosY - 10.5, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
<bufferGeometry>
<bufferAttribute
attach='attributes-position'
array={ positions_roof_1_frame }
count={ positions_roof_1_frame.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-color'
array={colors}
count={colors.length / 3}
itemSize={3}
/>
<bufferAttribute
attach='attributes-normal'
array={normals1}
count={normals.length / 3}
itemSize={3}
/>
<bufferAttribute
attach="index"
array={indices}
count={indices.length}
itemSize={1}
/>
<bufferAttribute
attach='attributes-uv'
array={new Float32Array([
-.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,
-.5, -31.0, 1.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall back?

-.5, -3.0, 4.0,  -1, -1.0, 4.0, -1, 1.0, 1.0, -1.5, 1.0, -2.4,

// wall front?

-2, -2.4, -1,  -1.5, -.5, -.45, 3,  -.45, 3,  .4, -.5,.4,

// wall back?

-2.0, -2.0, -2.0,  -3, -3 , 2.0, -2, 2.0, 2.0, -2.0, 2.0, 2.0, 
])}  
itemSize={2}
/>
<bufferAttribute
attach={'uv'}
/>
</bufferGeometry>
<meshStandardMaterial metalness={1} color={"#bababa"}     />

</mesh> 

            </group>

            </group> 
            
            {/* attyka 1 */ }

             <mesh receivedShadow castShadow visible={Roof1} scale={[30, 30, 30]} position={[30.1, Roof1PosY, -70.7]} rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ attyka_roof1_pos }
                    count={ attyka_roof1_pos.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} metalness={1.1}/>
            </mesh> 

            <mesh receivedShadow castShadow visible={Roof1} scale={[30, 30, 30]} position={[30.2, Roof1PosY, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ attyka_roof1_pos2 }
                    count={ attyka_roof1_pos2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} metalness={-.65} />
            </mesh>

            <mesh receivedShadow castShadow visible={Roof1} scale={[30, 30, 30]} position={[30.1, Roof1PosY , -70.9]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ attyka_roof1_pos1 }
                    count={ attyka_roof1_pos1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} reflectivity={.2} metalness={1.1}/>
            </mesh>

            <mesh receivedShadow castShadow visible={Roof1} scale={[30, 30, 30.005]} position={[30.25, Roof1PosY - 1.375, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_1_attyka_right }
                    count={ positions_roof_1_attyka_right.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} reflectivity={.2} metalness={1.1}/>
            </mesh>  

            {/* attyka 1 */ }
    
             {/*dach */}

            <group visible={Roof1}>

            <mesh renderOrder={1} receivedShadow castShadow scale={30} position={[30.2, Roof1PosY, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_1 }
                    count={ positions_roof_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial metalness={.1} reflectivity={.8} color={RoofColor} map={roofTexture_} alphaTest={0.4} ref={upSideMat} transparent={upSideBool} />
            </mesh>  
            <mesh renderOrder={1} receivedShadow castShadow scale={30} position={[30.2, Roof1PosY - 1, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_1 }
                    count={ positions_roof_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial metalness={.1} reflectivity={.8} map={roofTexture_} alphaTest={0.4}  ref={upSideMat} transparent={upSideBool} />
            </mesh>  

            </group> 

            <group receivedShadow castShadow visible={Roof2}  position={[0, Roof2PosY, 0]}>
            <mesh renderOrder={1} scale={[30, 30, 29.94]} castShadow receiveShadow position={[30.2, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_1 }
                    count={ positions_roof_2_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial metalness={0.1} reflectivity={.8} shadowSide={THREE.DoubleSide} color={RoofColor} map={roofTexture_} alphaTest={0.4}  ref={upSideMat} transparent={upSideBool}/>
            </mesh>
            <mesh renderOrder={1} scale={[30, 30, 29.4]} castShadow receiveShadow position={[30.2, 55 - 1, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_1 }
                    count={ positions_roof_2_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial metalness={0.1} reflectivity={.8} shadowSide={THREE.DoubleSide} map={roofTexture_} alphaTest={0.4}  ref={upSideMat} transparent={upSideBool}  />
            </mesh>
    
            <mesh renderOrder={1} scale={[29.9, 30, 29.94]} castShadow receiveShadow position={[30, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_2}
                    count={ positions_roof_2_2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1} reflectivity={.8} color={RoofColor} map={roofTexture_} alphaTest={0.4}  ref={upSideMat}  transparent={upSideBool} />
            </mesh>
            <mesh renderOrder={1} scale={[29.9, 30, 29.94]} castShadow receiveShadow position={[30, 55 - 1, -70.8]} rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_2 }
                    count={ positions_roof_2_2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1} reflectivity={.8} map={roofTexture_} alphaTest={0.4}  ref={upSideMat} transparent={upSideBool} />
            </mesh>
            {/* attyka 2 */ }

            <mesh  scale={30}  position={[30.2, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_1_attyka }
                    count={ positions_roof_2_1_attyka.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} reflectivity={.2} metalness={1.1}/>
            </mesh>
          
            <mesh scale={30}  position={[30.2, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_2_attyka }
                    count={ positions_roof_2_2_attyka.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} reflectivity={.2} metalness={1.1}/>
            </mesh>

            <mesh scale={30}  position={[30.2, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_21_attyka }
                    count={ positions_roof_21_attyka.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} reflectivity={.2}  metalness={1.1} />
            </mesh>           

            <mesh castShadow receiveShadow scale={30} position={[30.2, 55, -70.8]}rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_22_attyka }
                    count={ positions_roof_22_attyka.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} reflectivity={.2}  metalness={1.1} />
            </mesh>          

            <mesh scale={30}  castShadow receiveShadow position={[30, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_1_left }
                    count={ positions_roof_2_1_left.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial metalness={.1} reflectivity={.8} shadowSide={THREE.DoubleSide} color={AttykaColor}/>
            </mesh>
    
            <mesh scale={30} castShadow receiveShadow position={[30.2, 55, -70.8]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_2_2_right }
                    count={ positions_roof_2_2_right.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1} reflectivity={.8} color={AttykaColor} />
            </mesh> 

            <group>
                
            <mesh scale={30} position={[27, 61.5, -128.2]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_roof_2_side_1}
                    count={positions_roof_2_side_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={textureOutside == "courugated_metal/Profiled-Sheet-Metal-Architextures.jpg"  ?   uvs_roof_base : new Float32Array([
            
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                        
                        0,  0,  .0,  0, 0, 0, 0,  0, 0, UVRoof2Setter, 0,  UVRoof2Setter1,
                    
                        // wall front?
                    
                        0, UVRoof2Setter, 0,  0, 0,UVRoof2Setter, 0, 0, 0,UVRoof2Setter, 0, UVRoof2Setter1,
                    
                        // wall back?
                    
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                      
                    
                        
                       
                      ])}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={elevationColor} metalness={textureOutsideBrightness}  map={texture}  alphaTest={0.5} transparent={true}/>
            </mesh>

            <mesh scale={30} position={[27, 61.5, -128.3]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_roof_2_side_1}
                    count={positions_roof_2_side_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={textureOutside == "courugated_metal/Profiled-Sheet-Metal-Architextures.jpg"  ?   uvs_roof_base : new Float32Array([
            
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                        
                        0,  0,  .0,  0, 0, 0, 0,  0, 0, UVRoof2Setter, 0,  UVRoof2Setter1,
                    
                        // wall front?
                    
                        0, UVRoof2Setter, 0,  0, 0,UVRoof2Setter, 0, 0, 0,UVRoof2Setter, 0, UVRoof2Setter1,
                    
                        // wall back?
                    
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                      
                    
                        
                       
                      ])}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial map={textureWall} color={InsideColor} envMap={null} envMapIntensity={0} metalness={2.35} alphaTest={0.5} transparent={true}/>
            </mesh>
    
            <mesh   scale={30} position={[27, 61.5, -130.65]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_roof_2_side_2}
                    count={positions_roof_2_side_2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={textureOutside == "courugated_metal/Profiled-Sheet-Metal-Architextures.jpg"  ?   uvs_roof_base : new Float32Array([
            
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                        
                        0,  0,  .0,  0, 0, 0, 0,  0, 0, UVRoof2Setter, 0,  UVRoof2Setter1,
                    
                        // wall front?
                    
                        0, UVRoof2Setter, 0,  0, 0,UVRoof2Setter, 0, 0, 0,UVRoof2Setter, 0, UVRoof2Setter1,
                    
                        // wall back?
                    
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                      
                    
                        
                       
                      ])}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  shadowSide={THREE.DoubleSide} envMap={null} envMapIntensity={0} color={elevationColor} metalness={textureOutsideBrightness} map={texture} alphaTest={0.5} transparent={false}/>
            </mesh>  

            <mesh  scale={30} position={[27, 61.5, -128]}  rotation={[-Math.PI / 2, 1.57, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={positions_roof_2_side_2}
                    count={positions_roof_2_side_2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    array={textureOutside == "courugated_metal/Profiled-Sheet-Metal-Architextures.jpg"  ?   uvs_roof_base : new Float32Array([
            
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    
                        // wall back?
                        
                        0,  0,  .0,  0, 0, 0, 0,  0, 0, UVRoof2Setter, 0,  UVRoof2Setter1,
                    
                        // wall front?
                    
                        0, UVRoof2Setter, 0,  0, 0,UVRoof2Setter, 0, 0, 0,UVRoof2Setter, 0, UVRoof2Setter1,
                    
                        // wall back?
                    
                        0.0, -0.0, 0.0,  0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0,
                      
                    
                        
                       
                      ])}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial  map={textureWall} color={InsideColor} envMap={null} envMapIntensity={0} metalness={2.35} alphaTest={0.5} transparent={true}/>
            </mesh>   

            </group>


 
            {/* attyka 2 */ }
            {/* hail 3 */ }
            </group>

            <group receivedShadow castShadow visible={Roof3} position={[0, Roof1PosY - 13, 0]}>   
                      {/* sufit */}
            <mesh renderOrder={1} receivedShadow castShadow scale={[30, 29.9, 29.85]} position={[30.5, -5, -70.3]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_1 }
                    count={ positions_roof_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial metalness={.1} reflectivity={.8} color={RoofColor} map={roofTexture_} alphaTest={0.4}  ref={upSideMat} transparent={upSideBool}/>
            </mesh> 

            <mesh renderOrder={1} receivedShadow castShadow scale={[30, 29.9, 29.85]} position={[30.5, -5 - 1, -70.3]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_1 }
                    count={ positions_roof_1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} metalness={.1} reflectivity={.8} map={roofTexture_} alphaTest={0.4}  ref={upSideMat} transparent={upSideBool}/>
            </mesh> 

            </group>

             {/* attyka 3 */ }

             <group>
             <mesh renderOrder={1} visible={Roof3} scale={[30, 30, 30]} position={[30.1, Roof1PosY - 29.15, -76.85]}  rotation={[-Math.PI / 1, Math.PI, Math.PI/2]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ attyka_roof3_pos }
                    count={ attyka_roof3_pos.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} envMap={false} alphaTest={.5}/>
            </mesh> 

            <mesh renderOrder={1}   visible={Roof3} scale={[30, 30, 30]} position={[30.1, Roof1PosY  - 29.15, -70.8]}  rotation={[-Math.PI / 1, Math.PI, Math.PI/2]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ attyka_roof3_pos2 }
                    count={ attyka_roof3_pos2.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} envMap={false}  />
            </mesh>

            <mesh  renderOrder={1} visible={Roof3} scale={[30, 30, 30]} position={[30.1, Roof1PosY - 29.15, -70.8]}  rotation={[-Math.PI / 1, Math.PI, Math.PI/2]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ attyka_roof3_pos1 }
                    count={ attyka_roof3_pos1.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} color={AttykaColor} envMap={false}   alphaTest={.5} />
            </mesh>

            <mesh renderOrder={1} visible={Roof3} scale={[30, 29.9, 29.85]} position={[30.6,  Roof1PosY - 19.35, -70.3]}  rotation={[-Math.PI / 1, 3.1415, 7.8525]}>
                <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    array={ positions_roof_1_attyka_right }
                    count={ positions_roof_1_attyka_right.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-color'
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-normal'
                    array={normals1}
                    count={normals.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={indices}
                    count={indices.length}
                    itemSize={1}
                />
                 <bufferAttribute
                    attach='attributes-uv'
                    array={uvs_roof}  
                    itemSize={2}
                />
                <bufferAttribute
                    attach={'uv'}
                />
                </bufferGeometry>
                <meshStandardMaterial shadowSide={THREE.DoubleSide} envMap={false} alphaTest={.5} color={AttykaColor} />
            </mesh> 


             </group> 

            {/* attyka 3 */ }


            </group>

           
    
        </group>

  return (

    <>
        <Comp/>
    </>


  )
})

export default Hail