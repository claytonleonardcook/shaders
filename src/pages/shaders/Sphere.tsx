import { Canvas } from "@react-three/fiber";

const vertexShader = `
`;

const fragmentShader = `
`;

const Shader = () => {
  return (
    <mesh>
      <sphereGeometry />
      <ambientLight />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default Shader;
