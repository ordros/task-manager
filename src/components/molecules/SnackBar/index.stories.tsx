import * as React from 'react';
import styled from 'styled-components';
import Snackbar from '.';

export default {
  title: 'SnackBar',
};

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

export const snackbar = () => (
  <Snackbar
    open={false}
    onClose={() => null}
    position={{ vertical: 'bottom', horizontal: 'left' }}
    animation="left-to-right"
    // autoHideDuration={1000}
  >
    <Alert onClick={() => null}>
      Test
    </Alert>
  </Snackbar>
);
snackbar.story = {
  name: 'SnackBar',
};
