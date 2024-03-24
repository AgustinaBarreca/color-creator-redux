import React from 'react';
import Color from './Color';
import { useColor } from './ColorProvider';

//colorList es nuestro statefull component
const ColorList = () => {
  const { colors, onRemove } = useColor();
  if (!colors.length) return <p> dont have colors! </p>;
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ColorList;

//por que esto funciona?

/* const Consumer = ({children}) => {
  const value = //algun valor
  retunr (
    <Consumer>
      {children(value)}
    </Consumer>
  )
} */
