<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { gsap } from "gsap";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { M } from "motion-v";

const canvasRef = ref<HTMLCanvasElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let cube: THREE.Mesh;

// 动画循环的 raf id，用于销毁时清理
let animationId: number;

function init() {
  if (!canvasRef.value) return; // 防御性编程

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // 透明
  renderer.setClearColor(0x000000, 0);

  // ------------------- 几何体 -------------------
  const loader = new GLTFLoader();
  loader.load(
    "/model/christmas_ball.glb",
    (gltf) => {
      cube = gltf.scene;

      // 可选：调整模型大小、位置
      cube.scale.set(0.01, 0.01, 0.01);
      cube.position.set(4, 0, 0);

      scene.add(cube);

      console.log("模型加载成功！", cube);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% 已加载");
    },
    (error) => {
      console.error("模型加载失败:", error);
    },
  );

  // 加一点环境光 + 点光（让边缘更亮）
  scene.add(new THREE.AmbientLight(0xffffff, 1.2));
  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);

  animate();
}

function animate() {
  animationId = requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

onMounted(() => {
  init();

  // 监听滚动事件
  window.addEventListener("scroll", () => {
    // 计算滚动进度
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollY / maxScroll;

    cube.position.set(4 + progress, 0, 0);
    cube.rotation.y = -progress * Math.PI * 1;
    cube.scale.set(
      0.01 + progress * 0.001,
      0.01 + progress * 0.001,
      0.01 + progress * 0.001,
    );

    // 接近页的脚时候淡出
    // if (progress > 0.8) {
    //   gsap.to(cube.material, {
    //     opacity: 0,
    //     duration: 0.5,
    //   });
    // }
    // if (progress < 0.8) {
    //   gsap.to(cube.material, {
    //     opacity: 1,
    //     duration: 0.5,
    //   });
    // }
  });

  // 监听窗口大小变化
  window.addEventListener("resize", () => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onResize); // 如果加了
  renderer?.dispose(); // 释放资源（推荐）
});
</script>

<template>
  <canvas ref="canvasRef" class="pointer-events-none" />
</template>
