<template>
  <div ref="container" class="three-container" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const container = ref(null);
let renderer = null;
let scene = null;
let camera = null;
let controls = null;
let animationFrameId = null;

onMounted(() => {
  if (!container.value) return;

  // ================== 初始化 ==================
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a1f);

  camera = new THREE.PerspectiveCamera(
    60,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 1.5, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  // 控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = true;

  // 灯光（很重要，否则模型可能很暗）
  scene.add(new THREE.AmbientLight(0xffffff, 1.5));
  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);

  // ================== 加载模型 ==================
  const loader = new GLTFLoader();
  const modelUrl = "/model/christmas_ball.glb"; // ← 修改成你自己的模型路径

  loader.load(
    modelUrl,
    (gltf) => {
      const model = gltf.scene;

      // 可选调整
      model.scale.set(0.01, 0.01, 0.01); // 放大倍数，根据模型大小调整
      model.position.y = -0.5; // 稍微下移居中
      // model.rotation.y = Math.PI / 4 // 初始旋转（可选）

      scene.add(model);
      console.log("模型加载成功", model);
    },
    (xhr) => {
      console.log(`加载进度: ${((xhr.loaded / xhr.total) * 100).toFixed(1)}%`);
    },
    (error) => {
      console.error("模型加载失败:", error);
    },
  );

  // ================== 动画循环 ==================
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  if (controls) controls.dispose();
  if (renderer) {
    renderer.dispose();
    renderer.forceContextLoss();
  }
  scene = null;
  camera = null;
  renderer = null;
  controls = null;
});

// 窗口 resize 处理
const onResize = () => {
  if (!container.value || !camera || !renderer) return;

  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

window.addEventListener("resize", onResize);
onUnmounted(() => window.removeEventListener("resize", onResize));
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh; /* 或你想要的高度，例如 600px */
  overflow: hidden;
  background: #000;
}
</style>
