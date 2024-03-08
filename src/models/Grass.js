import * as THREE from "three"
import React, { useRef, useMemo } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { BufferAttribute } from "three/src/core/BufferAttribute";
import { useThree } from "@react-three/fiber";
import SimplexNoise from "simplex-noise"
import bladeDiffuse from "../images/resources/blade_diffuse.jpg"
import bladeAlpha from "../images/resources/blade_alpha.jpg"
import GrassMaterial from "./GrassMaterial" 

const simplex = new SimplexNoise(Math.random)

function Grass({ options = { bW: 0.12, bH: 1, joints: 2 }, width =1500, instances = 1500000, ...props }) {
  const { bW, bH, joints } = options
  const materialRef = useRef()
  const [texture, alphaMap] = useLoader(THREE.TextureLoader, [bladeDiffuse, bladeAlpha])
  const attributeData = useMemo(() => getAttributeData(instances, width), [instances, width]) 

const baseGeom = useMemo(() => {
  const geom = new THREE.PlaneBufferGeometry(bW, bH, 1, joints).translate(0, bH / 2, 0);
  const positions = geom.attributes.position.array;
  const uvs = geom.attributes.uv.array;
  const indices = geom.index.array;

  const updatedPositions = [];
  const updatedUvs = [];
  const updatedIndices = [];

  // Kopiuj pozycje, UV i indeksy, pomijając środkowy wierzchołek
  for (let i = 0; i < positions.length; i += 3) {
    if (i !== positions.length / 2 - 3) {
      updatedPositions.push(positions[i], positions[i + 1], positions[i + 2]);
    }
  }

  for (let i = 0; i < uvs.length; i += 2) {
    if (i !== uvs.length / 2 - 2) {
      updatedUvs.push(uvs[i], uvs[i + 1]);
    }
  }

  // Aktualizuj indeksy, uwzględniając usunięty wierzchołek
  for (let i = 0; i < indices.length; i += 3) {
    const i1 = indices[i];
    const i2 = indices[i + 1];
    const i3 = indices[i + 2];

    if (i1 !== positions.length / 7 - 1 && i2 !== positions.length / 6 - 1 && i3 !== positions.length / 6 - 1) {
      updatedIndices.push(i1, i2, i3);
    }
  }

  // Aktualizuj atrybuty geometrii
  geom.setAttribute("position", new BufferAttribute(new Float32Array(updatedPositions), 3));
  geom.setAttribute("uv", new BufferAttribute(new Float32Array(updatedUvs), 2));
  geom.setIndex(updatedIndices);

  return geom;
}, [options]); 

const holeGeom = useMemo(() => {
    const holeSize = 60; // Rozmiar dziury
    const holeGeom = new THREE.BoxBufferGeometry(holeSize, holeSize, 0.1);
    holeGeom.translate(0, bH / 2, 0); // Przesunięcie dziury na odpowiednią wysokość
    return holeGeom;
  }, [bW, bH]);
  
  const { gl } = useThree(); 
  gl.toneMappingExposure = 1;
  gl.outputEncoding = 3001; 
  const holeMaterial = new THREE.MeshStandardMaterial({ alphaTest: 0.5, transparent: true });
 
   
  useFrame((state) => (materialRef.current.uniforms.time.value = state.clock.elapsedTime / 4)) 
   const cubeGeom = new THREE.BoxBufferGeometry(1800, 15, 2200); 
   const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0 }); 
 
  return (  
    <group renderOrder={1} {...props}>


        
<mesh renderOrder={0} geometry={cubeGeom} material={cubeMaterial}   position={[-40, 5, -30]}></mesh>

      <mesh  renderOrder={1}  scale={5} position={[ 0, 0,  0]}>
        <instancedBufferGeometry index={baseGeom.index} attributes-position={baseGeom.attributes.position} attributes-uv={baseGeom.attributes.uv}>
          <instancedBufferAttribute attach="attributes-offset" args={[new Float32Array(attributeData.offsets), 3]} />
          <instancedBufferAttribute attach="attributes-orientation" args={[new Float32Array(attributeData.orientations), 4]} />
          <instancedBufferAttribute attach="attributes-stretch" args={[new Float32Array(attributeData.stretches), 1]} />
          <instancedBufferAttribute attach="attributes-halfRootAngleSin" args={[new Float32Array(attributeData.halfRootAngleSin), 1]} />
          <instancedBufferAttribute attach="attributes-halfRootAngleCos" args={[new Float32Array(attributeData.halfRootAngleCos), 1]} />
        </instancedBufferGeometry>
        <grassMaterial   ref={materialRef} map={texture} transparent={true} alphaMap={alphaMap}   toneMapped={false} />
      </mesh> 

    </group>
  )
}

function getAttributeData(instances, width) {
  const offsets = []
  const orientations = []
  const stretches = []
  const halfRootAngleSin = []
  const halfRootAngleCos = []

  let quaternion_0 = new THREE.Vector4()
  let quaternion_1 = new THREE.Vector4()

  //The min and max angle for the growth direction (in radians)
  const min = -0.25
  const max = 0.25

  //For each instance of the grass blade
  for (let i = 0; i < instances; i++) {
    //Offset of the roots
    const offsetX = Math.random() * width - width / 2
    const offsetZ = Math.random() * width - width / 2
    const offsetY = getYPosition(offsetX, offsetZ)
    offsets.push(offsetX, offsetY, offsetZ)

    //Define random growth directions
    //Rotate around Y
    let angle = Math.PI - Math.random() * (2 * Math.PI)
    halfRootAngleSin.push(Math.sin(0.5 * angle))
    halfRootAngleCos.push(Math.cos(0.5 * angle))

    let RotationAxis = new THREE.Vector3(0, 1, 0)
    let x = RotationAxis.x * Math.sin(angle / 2.0)
    let y = RotationAxis.y * Math.sin(angle / 2.0)
    let z = RotationAxis.z * Math.sin(angle / 2.0)
    let w = Math.cos(angle / 2.0)
    quaternion_0.set(x, y, z, w).normalize()

    //Rotate around X
    angle = Math.random() * (max - min) + min
    RotationAxis = new THREE.Vector3(1, 0, 0)
    x = RotationAxis.x * Math.sin(angle / 2.0)
    y = RotationAxis.y * Math.sin(angle / 2.0)
    z = RotationAxis.z * Math.sin(angle / 2.0)
    w = Math.cos(angle / 2.0)
    quaternion_1.set(x, y, z, w).normalize()

    //Combine rotations to a single quaternion
    quaternion_0 = multiplyQuaternions(quaternion_0, quaternion_1)

    //Rotate around Z
    angle = Math.random() * (max - min) + min
    RotationAxis = new THREE.Vector3(0, 0, 1)
    x = RotationAxis.x * Math.sin(angle / 2.0)
    y = RotationAxis.y * Math.sin(angle / 2.0)
    z = RotationAxis.z * Math.sin(angle / 2.0)
    w = Math.cos(angle / 2.0)
    quaternion_1.set(x, y, z, w).normalize()

    //Combine rotations to a single quaternion
    quaternion_0 = multiplyQuaternions(quaternion_0, quaternion_1)

    orientations.push(quaternion_0.x, quaternion_0.y, quaternion_0.z, quaternion_0.w)

    //Define variety in height
    if (i < instances / 3) {
      stretches.push(Math.random() * 1.8)
    } else {
      stretches.push(Math.random())
    }
  }

  return {
    offsets,
    orientations,
    stretches,
    halfRootAngleCos,
    halfRootAngleSin,
  }
}

function multiplyQuaternions(q1, q2) {
  const x = q1.x * q2.w + q1.y * q2.z - q1.z * q2.y + q1.w * q2.x
  const y = -q1.x * q2.z + q1.y * q2.w + q1.z * q2.x + q1.w * q2.y
  const z = q1.x * q2.y - q1.y * q2.x + q1.z * q2.w + q1.w * q2.z
  const w = -q1.x * q2.x - q1.y * q2.y - q1.z * q2.z + q1.w * q2.w
  return new THREE.Vector4(x, y, z, w)
}

function getYPosition(x, z) {
  var y = 0 * simplex.noise2D(x / 0, z / 0)
  y += 0 * simplex.noise2D(x / 0, z / 0)
  y += 0 * simplex.noise2D(x / 0, z / 0)
  return y
}

export default Grass