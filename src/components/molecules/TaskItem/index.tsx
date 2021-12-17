import * as React from 'react';
import styled, { css } from 'styled-components';
import componentZIndexes from '~/constants/styleConstants';

export type SnackBarVerticalPosition = 'top' | 'bottom';
export type SnackBarHorizontalPosition = 'left' | 'middle' | 'right';
export type SnackBarAnimationDirection = 'right-to-left' | 'left-to-right' | 'bottom-to-top' | 'top-to-bottom';

type Props = {
  title: string,
  content: string,
};

const Root = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 8px;
  background: #c2f0ff;
`;

const Title = styled.div`
  padding: 32px;
  font-size: 24px;
`;

const TaskItem: React.FC<Props> = ({
  title,
}) => (
  <Root>
    <Title>{title}</Title>
    <textarea />
  </Root>
);

export default TaskItem;
