import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Orb() {
  const orb = useRef();
  const core = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    const { x, y } = state.pointer;

    if (orb.current) {
      orb.current.rotation.x +=
        (y * 0.45 - orb.current.rotation.x) * Math.min(1, delta * 3);

      orb.current.rotation.y +=
        (x * 0.65 - orb.current.rotation.y) * Math.min(1, delta * 3);
    }

    if (core.current) {
      core.current.rotation.y += delta * 0.2;
    }

    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.15;
      ring1.current.rotation.z += delta * 0.12;
    }

    if (ring2.current) {
      ring2.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={orb}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#292929"
          metalness={1}
          roughness={0.17}
          clearcoat={1}
        />
      </mesh>

      <mesh ref={core} scale={0.76}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#ff4f01"
          emissive="#ff3500"
          emissiveIntensity={1.8}
          metalness={0.35}
          roughness={0.3}
        />
      </mesh>

      <mesh ref={ring1} rotation={[1, 0.3, 0.2]}>
        <torusGeometry args={[1.38, 0.018, 12, 120]} />
        <meshStandardMaterial
          color="#ff4f01"
          emissive="#ff4f01"
          emissiveIntensity={2}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={ring2} rotation={[0.5, 0.8, 1]}>
        <torusGeometry args={[1.58, 0.012, 12, 120]} />
        <meshStandardMaterial color="#dddddd" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function LivingOrb() {
  return (
    <div className="living-orb">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[-3, 4, 5]} intensity={3} />
        <pointLight position={[2, 1, 2]} intensity={30} color="#ff4f01" />
        <Orb />
      </Canvas>
    </div>
  );
}
