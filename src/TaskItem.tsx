import React from 'react';
import { useRecoilState } from 'recoil';
import { Task, taskState } from './Atoms/Task';

interface TaskItemProps {
  task: Task;
  index: number;
}

const removeTasksAtIndex = (tasks: Task[], index: number) => {
  return [...tasks.slice(0, index), ...tasks.slice(index + 1)]
}

const replaceTasksAtIndex = (tasks: Task[], index: number, newTask: Task) => {
  return [...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)]
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, index }) => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const onChange = () => {
      const newTasks = replaceTasksAtIndex(tasks, index, {
          ...task,
          completed: !task.completed
      });
      setTasks(newTasks);
  }

  const onClick = () => {
      const newTasks = removeTasksAtIndex(tasks, index);
      setTasks(newTasks);
  }

  return (
      <li key={index}>
          <input
              type="checkbox"
              checked={task.completed}
              onChange={onChange}
          />
          {task.title}
          <button onClick={onClick}>削除</button>
      </li>
  )
}
