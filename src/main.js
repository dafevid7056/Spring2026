import { klein } from 'three/examples/jsm/Addons.js'
import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes } from './addDefaultMeshes.js'
import { add } from 'three/tsl'

const scene = new THREE.Scene()
// (FOV, aspect ratio, near clipping plane, far clipping plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  antialias: true
})

// Definition of the shape
const mesh = addDefaultMeshes()

const meshes = {}

init()
function init() {
  // we do all of our setup here
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  camera.position.z = 5
  // Here we populate our meshes container
  meshes.default = addDefaultMeshes()
  meshes.default.position.x = 1

  meshes.default2 = addDefaultMeshes()
  meshes.default2.position.x = -1

  meshes.default3 = addDefaultMeshes()
  meshes.default3.position.y = 2
  // ad meshes to the scene
  scene.add(meshes.default)
  scene.add(meshes.default2)
  scene.add(meshes.default3)
  console.log(meshes.default)

  animate()
}

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  meshes.default.rotation.x += 0.01
  meshes.default.rotation.y += 0.01
  meshes.default3.rotation.x += -0.01
  meshes.default3.rotation.y += -0.01
  meshes.default2.rotation.x += -0.01
  meshes.default2.rotation.y += 0.01
}