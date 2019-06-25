import React, { Component } from "react";
import * as THREE from "three";
import image from "../assets/Images/cryptoimage2.jpg";

class Logo extends Component {
  componentDidMount() {
    const color = new THREE.Color("transparent");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const texture = new THREE.TextureLoader().load(image);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2.3, window.innerHeight / 2.3);
    this.mount.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.background = color;
    scene.add(cube);
    camera.position.z = 4.5;
    const animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <div style={{ marginLeft: "30%" }} ref={ref => (this.mount = ref)} />
    );
  }
}

export default Logo;
