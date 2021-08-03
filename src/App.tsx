import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CssBaseline } from '@material-ui/core';
import Editor from './components/Editor';

const App = (props: { container: HTMLElement }): React.ReactElement => {
  const { container } = props;
  return (
    <>
      <CssBaseline />
      <Editor
        container={container}
        initialData={[]}
        blockTypes={[]}
      />
    </>
  );
};

export default App;
