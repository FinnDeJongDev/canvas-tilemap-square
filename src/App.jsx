import { useEffect, useRef } from "react"

const mapSettings = {
  width: 1400,
  height: 700,
  tile: {
    width: 50,
    height: 50,
  },
  rows: 28,
  columns: 14,
}

function App() {

  useEffect(() => {
    drawGrid(canvasRef)
  }, [])


  const canvasRef = useRef()
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <canvas
        width={mapSettings.width}
        height={mapSettings.height}
        ref={canvasRef}
      />
    </div>
  )
}

function drawGrid(ref) {
  const ctx = ref.current.getContext('2d');
  for (let a = 0; a < mapSettings.columns; a++) {
    for (let b = 0; b < mapSettings.rows; b++) {
      console.log(a, b)
      ctx.strokeStyle = "black";
      ctx.strokeRect(mapSettings.tile.width * b, mapSettings.tile.height * a, mapSettings.tile.width, mapSettings.tile.height)
    }
  }
}

export default App
