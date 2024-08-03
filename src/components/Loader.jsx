import { Html } from "@react-three/drei"

const loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          loading...
        </div>
      </div>
    </Html>
  )
}

export default loader