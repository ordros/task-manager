import * as React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DeleteButton from '~/components/DeleteButton';
import TSTestComponent from '~/components/TSTestComponent';

const App: React.FC<any> = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DeleteButton />
      <TSTestComponent />
    </DndProvider>
  );
};

export default App;