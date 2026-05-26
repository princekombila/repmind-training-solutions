'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Electron({ radius, speed, tilt, phase, color = '#003f7f' }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    if (ref.current) {
      ref.current.position.set(Math.cos(t) * radius, 0, Math.sin(t) * radius);
    }
  });

  return (
    <group rotation={tilt}>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.006, 16, 128]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Electron sphere */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.0}
          toneMapped={false}
        />
        {/* Glow halo */}
        <mesh scale={2.2}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      </mesh>
    </group>
  );
}

function Nucleus() {
  const ref = useRef();

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.getElapsedTime() * 0.3;
      ref.current.rotation.x = s.clock.getElapsedTime() * 0.15;
    }
  });

  const protons = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const phi   = Math.acos(-1 + (2 * i) / 14);
      const theta = Math.sqrt(14 * Math.PI) * phi;
      return {
        position: new THREE.Vector3(
          0.32 * Math.cos(theta) * Math.sin(phi),
          0.32 * Math.sin(theta) * Math.sin(phi),
          0.32 * Math.cos(phi)
        ),
        color: i % 2 === 0 ? '#003f7f' : '#c8a951',
      };
    });
  }, []);

  return (
    <group ref={ref}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#003f7f"
          emissive="#003f7f"
          emissiveIntensity={0.25}
          roughness={0.35}
          metalness={0.55}
        />
      </mesh>
      {/* Outer halo */}
      <mesh scale={1.55}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#003f7f" transparent opacity={0.06} />
      </mesh>
      {/* Protons / neutrons */}
      {protons.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.35}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Atom() {
  const group = useRef();

  useFrame((s) => {
    if (group.current) {
      group.current.rotation.y = s.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <group ref={group}>
      <Nucleus />
      <Electron radius={1.6} speed={1.6}  tilt={[0, 0, 0]}                              phase={0}   color="#003f7f" />
      <Electron radius={2.1} speed={1.1}  tilt={[Math.PI / 3, Math.PI / 4, 0]}          phase={1.7} color="#c8a951" />
      <Electron radius={2.5} speed={0.85} tilt={[-Math.PI / 4, Math.PI / 3, Math.PI / 6]} phase={3.4} color="#003f7f" />
    </group>
  );
}
