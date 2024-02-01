//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Cilinder from "./Cilinder";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <Cilinder />
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;