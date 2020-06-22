import React from 'react';
import { RecoilRoot } from 'recoil';
import { TaskList } from './Task';

function App() {
  return (
    <RecoilRoot>
      <TaskList />
    </RecoilRoot>
  );
}

export default App;
