import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );
camera.position.z = 5;
scene.add( camera );
/*Mesh =>{shape & material}*/
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.y=4;
light.position.z=4;
scene.add(light); 
const renderer = new THREE.WebGLRenderer();
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );
function animate() {
    cube.rotation.y += 0.05;
    cube.rotation.x += 0.05;
    cube.rotation.z += 0.05;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );