import React, { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { taskState } from './Atoms/Task';
import { TaskItem } from './TaskItem';

const TaskInput = () => {
  console.log('TaskInput');
  const [title, setTitle] = useState('');
  const setTasks = useSetRecoilState(taskState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const onClick = () => {
    setTasks(t => {
      return [...t, { title, completed: false }];
    })
    setTitle('');
  }

  return (
    <div>
      <label>
        task
        <input type="text" value={title} onChange={onChange} />
      </label>
      <button onClick={onClick}>submit</button>
    </div>
  )
}

export const TaskList = () => {
  const tasks = useRecoilValue(taskState);
  return (
    <>
      <TaskInput />
      <ul>
        {tasks.map((t, index) => (
            <TaskItem task={t} index={index} key={index} />
          )
        )}
      </ul>
    </>
  )
}
