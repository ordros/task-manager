import * as React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DeleteButton from '~/components/DeleteButton';
import TSTestComponent from '~/components/TSTestComponent';
import Snackbar from './components/molecules/SnackBar';

const App: React.FC<any> = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <DeleteButton onClick={() => setOpen(true)}/>
      <TSTestComponent />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="test"
        position={{vertical: 'bottom', horizontal: 'left'}}
        animation="bottom-to-top"
        autoHideDuration={1000}
      />
    </DndProvider>
  );
};

export default App;