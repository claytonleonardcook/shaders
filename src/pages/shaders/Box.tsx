import { Canvas } from "@react-three/fiber";

const vertexShader = `
`;

const fragmentShader = `
`;

const Shader = () => {
  return (
    <mesh>
      <boxGeometry />
      <ambientLight />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Shader;
