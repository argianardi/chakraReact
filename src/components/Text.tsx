import React from 'react';

interface TextPropsType {
  text: string;
}

const Text = ({ text }: TextPropsType) => {
  return <h1 style={{ color: 'yellow' }}>{text}</h1>;
};

export default Text;
