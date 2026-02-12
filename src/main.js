import { klein } from 'three/examples/jsm/Addons.js'
import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes, addStandardMeshes } from './addDefaultMeshes.js'
import { addLights } from './addLights.js'
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
const lights = {}

init()
function init() {
  // we do all of our setup here
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  camera.position.z = 5

  lights.default = addLights()
  scene.add(lights.default)
  // Here we populate our meshes container
  meshes.default = addDefaultMeshes()
  meshes.default.position.x = 1

  meshes.standard = addStandardMeshes()
  meshes.standard.position.x = -1

  // add meshes to the scene
  scene.add(meshes.default)
  scene.add(meshes.standard)
  console.log(meshes.default)

  resize()
  animate()
}
function resize() {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  meshes.default.rotation.x += 0.01
  meshes.default.rotation.y += 0.01
  meshes.standard.rotation.x += 0.01
  meshes.standard.rotation.y += 0.01
}