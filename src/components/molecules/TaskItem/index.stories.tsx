import * as React from 'react';
import TaskItem from '.';

export default {
  title: 'TaskItem',
};

export const taskItem = () => <TaskItem title="タイトル" content="" />;

taskItem.story = {
  name: 'TaskItem',
};
