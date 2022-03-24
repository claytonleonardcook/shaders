import { Canvas } from "@react-three/fiber";
import shaders from "./shaders/shaders";

const Home = () => {
  return (
    <div className="Home">
      {shaders.map(({ title, page }, index: number) => {
        return (
          <span
            className="bg-dark text-light flex sm:flex-row flex-col sm:h-32 p-5 rounded-xl sm:w-3/4 my-5 sm:mx-auto mx-5"
            key={`preview-${index}`}
          >
            <h2 className="flex-grow">{title}</h2>
            <span className="aspect-square">
              <Canvas>{page}</Canvas>
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Home;
