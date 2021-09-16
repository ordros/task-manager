import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import DeleteButton from '~/components/DeleteButton';
import TSTestComponent from '~/components/TSTestComponent';
import Snackbar from '~/components/molecules/SnackBar';

const Alert = styled.div`
  width: 240px;
  height: 40px;
  background: #f44336;
  border-radius: 4px;
  box-shadow: 4px 4px 4px gray;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC<any> = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <DeleteButton onClick={() => setOpen(true)} />
      <TSTestComponent />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="test"
        position={{ vertical: 'bottom', horizontal: 'left' }}
        animation="left-to-right"
        // autoHideDuration={1000}
      >
        <Alert onClick={() => setOpen(false)}>
          Test
        </Alert>
      </Snackbar>
    </DndProvider>
  );
};

export default App;
