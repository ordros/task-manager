import * as React from 'react';
import styled from 'styled-components';
import Snackbar, { SnackBarVerticalPosition, SnackBarHorizontalPosition, SnackBarAnimationDirection } from '.';

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

const Label = styled.p`
  font-size: 24px;
`;

export const snackbar = () => {
  const [open, setOpen] = React.useState(false);
  const [verticalPosition, setVerticalPosition] = React.useState<SnackBarVerticalPosition>('bottom');
  const [horizontalPosition, setHorizontalPosition] = React.useState<SnackBarHorizontalPosition>('left');
  const [animation, setAnimation] = React.useState<SnackBarAnimationDirection>('left-to-right');
  const [autoHideDuration, setAutoHideDuration] = React.useState<number>(1000);
  return (
    <>
      <div>
        <Label>position vertical</Label>
        {
          ['top', 'bottom'].map((vertical: SnackBarVerticalPosition) => (
            <span>
              <input type="radio" name="vertical" checked={verticalPosition === vertical} onClick={() => setVerticalPosition(vertical)} />
              {vertical}
            </span>
          ))
        }
      </div>
      <div>
        <Label>position horizontal</Label>
        {
          ['left', 'middle', 'right'].map((horizontal: SnackBarHorizontalPosition) => (
            <span>
              <input type="radio" name="horizontal" checked={horizontalPosition === horizontal} onClick={() => setHorizontalPosition(horizontal)} />
              {horizontal}
            </span>
          ))
        }
      </div>
      <div>
        <Label>animation direction</Label>
        {
          ['right-to-left', 'left-to-right', 'bottom-to-top', 'top-to-bottom'].map((animationDirection: SnackBarAnimationDirection) => (
            <span>
              <input type="radio" name="animations" checked={animation === animationDirection} onClick={() => setAnimation(animationDirection)} />
              {animationDirection}
            </span>
          ))
        }
      </div>
      <div>
        <Label>autoHideDuration</Label>
        <input type="number" min="10" max="10000" value={autoHideDuration} onChange={(e) => setAutoHideDuration(parseInt(e.target.value, 10))} />
      </div>
      <button type="button" onClick={() => setOpen(true)}>Click here</button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        position={{ vertical: verticalPosition, horizontal: horizontalPosition }}
        animation={animation}
        autoHideDuration={autoHideDuration}
      >
        <Alert onClick={() => setOpen(false)}>
          Click to close
        </Alert>
      </Snackbar>
    </>
  );
};
snackbar.story = {
  name: 'SnackBar',
};
