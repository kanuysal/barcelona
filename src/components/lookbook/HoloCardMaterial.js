import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { holocardVert, holocardFrag } from "./shaders";

const HoloCardMaterialImpl = shaderMaterial(
  {
    uTime: 0,
    uTexture: new THREE.Texture(),
    uOpacity: 1,
    uActive: 0,
  },
  holocardVert,
  holocardFrag
);

// Register the material so it can be used as <holoCardMaterial />
extend({ HoloCardMaterial: HoloCardMaterialImpl });

export default HoloCardMaterialImpl;
