// Interface PixelMatrixProps to validate component incoming prop types
interface PixelMatrixProps {
  matrix: number[][],
  pixelEnum: any
}

// Stateless react functional component to render matrix with pixelEnum
const PixelMatrix: React.SFC<PixelMatrixProps> = ({ matrix, pixelEnum }) => (
  <pre>{matrix.map(row => row.map(i => pixelEnum[i]).join(``)).join(`\n`)}</pre>
)

export default PixelMatrix;