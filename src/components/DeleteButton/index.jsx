import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  :hover {
    background: #ff0f0f;
    div {
      color: white;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Mark = styled.div`
  font-size: 20px;
`;

const DeleteButton = ({ ...remainProps }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <Circle {...remainProps}>
    <Mark>🗑</Mark>
  </Circle>
);

export default DeleteButton;
