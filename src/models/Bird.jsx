import React from 'react'
import birdScene from '../assets /3d/bird.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {
    const { scene , animations } = useGLTF(birdScene);
  return (
   <mesh position={[-5,10,1]} scale= {[0.9,0.9,0.9]}>
        <primitive object={scene}/>
   </mesh>
  )
}

export default Bird