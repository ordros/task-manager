import * as React from 'react';
import styled, { css } from 'styled-components';
import componentZIndexes from '~/constants/styleConstants';

type Props = {
  children: any,
  message?: string,
  open: boolean,
  onClose: () => any,
  position?: {
    vertical?: 'top' | 'bottom',
    horizontal?: 'left' | 'middle' | 'right',
  },
  animation?: 'right-to-left' | 'left-to-right' | 'bottom-to-top' | 'top-to-bottom',
  autoHideDuration?: number,
};

const ContentWrapper = styled.div`
  position: fixed;
  z-index: ${componentZIndexes.snackbar};
  transition: all 0.5s;

  ${({
    horizontal, vertical, open, animation,
  }) => {
    let styles = '';
    switch (horizontal) {
      case 'left':
        styles += css`
          left: 32px;
          right: auto;
        `;
        break;
      case 'right':
        styles += css`
          left: auto;
          right: 32px;
        `;
        break;
      default:
      case 'middle':
        styles += css`
          left: 50%;
          right: auto;
          // 自分自身の幅半分ずらす
          transform: translateX(-50%);
        `;
    }
    switch (vertical) {
      case 'top':
        styles += css`
          top: 32px;
        `;
        break;
      default:
      case 'bottom':
        styles += css`
          bottom: 32px;
        `;
    }
    // TODO: パターン整理
    if (!open) {
      switch (animation) {
        case 'right-to-left':
          styles += css`
            right: -100%;
            left: 100%;
          `;
          break;
        case 'left-to-right':
          styles += css`
            right: 50%;
            left: -50%;
          `;
          break;
        case 'top-to-bottom':
          styles += css`
            top: -100%;
            bottom: 100%;
          `;
          break;
        default:
        case 'bottom-to-top':
          styles += css`
            // top: 100%;
            bottom: -100%;
          `;
      }
    }
    return styles;
  }}
`;

const DefaultContent = styled.div`
  width: 320px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px gray;
  border-radius: 4px;
`;

const Snackbar: React.FC<Props> = ({
  children,
  message,
  position,
  animation = 'bottom-to-top',
  open: parentOpenState,
  onClose,
  autoHideDuration,
}) => {
  const [open, setOpen] = React.useState(parentOpenState);

  React.useEffect(() => {
    setOpen(parentOpenState);
    if (!parentOpenState) {
      onClose();
    }
    if (autoHideDuration && parentOpenState) {
      setTimeout(() => {
        setOpen(false);
        onClose();
      }, autoHideDuration);
    }
  }, [parentOpenState]);

  let element;
  if (!children) {
    element = (
      <DefaultContent>
        {message}
      </DefaultContent>
    );
  } else {
    element = children;
  }

  return (
    <ContentWrapper
      vertical={position?.vertical}
      horizontal={position?.horizontal}
      animation={animation}
      open={open}
    >
      {element}
    </ContentWrapper>
  );
};

export default Snackbar;
