import * as React from 'react';
import styled, { css } from 'styled-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

type Props = {};

const Item = styled.div`
  font-size: 24px;
  opacity: ${({ isDragging }) => (isDragging ? '0.2' : '1')};
`;

const Area = styled.div`
  width: 480px;
  height: 480px;
  border: 1px solid grey;
  background: ${({ isOver }) => (isOver ? '#f0f3f5' : 'transparent')};
`;

const DroppedItem = styled.div`
  font-size: 24px;
  position: absolute;
  ${({ position }) => (position ? css`
    display: block;
    top: ${position.y}px;
    left: ${position.x}px;
  ` : css`display: none;`)}
`;

const DraggableItem = () => {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState({});
  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: { index: '1' },
    collect: (m) => ({
      isDragging: m.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (e, m) => {
      console.log(e, m.getClientOffset());
      setPosition(m.getClientOffset());
    },
    hover: (e, m) => {
      setPosition(m.getClientOffset());
    },
    collect: (m) => ({
      isOver: m.isOver(),
    }),
  });


  return (
    <>
      <Item ref={drag} isDragging={isDragging}>♘</Item>
      <Area ref={drop} isOver={isOver} />
      <DroppedItem position={position}>♘</DroppedItem>
    </>
  );
};

// const DroppableArea = () => {
//   return (
//   );
// };

const DnDTestComponent: React.FC<Props> = () => (
  <DndProvider backend={HTML5Backend}>
    <>Test</>
    <DraggableItem />
  </DndProvider>
);

export default DnDTestComponent;
