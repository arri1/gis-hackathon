import React from 'react';
const __html = require('./gistDist/index.html');
const template = { __html: __html };
function App() {
  return (
    <div>
      <div dangerouslySetInnerHTML={template} />
    </div>
  );
}

export default App;
