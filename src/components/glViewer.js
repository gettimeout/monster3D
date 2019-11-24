import OrbitControls from 'orbit-controls-es6';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default class glViewer {
  constructor(domElem) {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.y = 300;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    domElem.appendChild(this.renderer.domElement);

    this.controls = this._enableCameraOrbit(this.camera, domElem);
  }

  _enableCameraOrbit = (camera, domElem) => {
    let controls = new OrbitControls(camera, domElem);
    controls.enabled = true;
    controls.maxDistance = 50;
    controls.minDistance = 3;
    return controls;
  }

  createScene = () => {
    this._loadModel();
    this.controls.update();
  }

  _loadModel = () => {
    var loader = new GLTFLoader();
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/Monster/glTF/Monster.gltf',
      (gltf) => {
        console.log(gltf);

        this.renderer.setClearColor(0xffffff);
        let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        this.scene.add(light);
        this.scene.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.log('An error happened', error);
      }
    );
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}