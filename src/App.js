import React, { useContext } from 'react';
import ColorList from './ColorList';
import './style.css';
import FormColorControlled from './FormColorControlled';

export default function App() {
  return (
    <>
      <ColorList />
      <FormColorControlled />
    </>
  );
}
