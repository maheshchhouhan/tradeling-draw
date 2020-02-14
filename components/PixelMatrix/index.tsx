import React from 'react';

interface PixelMatrixProps {
  matrix: number[][],
  pixelEnum: any
}

const PixelMatrix: React.FC<PixelMatrixProps> = ({matrix}) => (
  <pre>{matrix.map(row => row.map(i => " -|"[i]).join(``)).join(`\n`)}</pre>
)

export default PixelMatrix;