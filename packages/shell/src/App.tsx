import React from 'react';

import LazyComponent from './components/LazyComponent';

function App() {
  const Widget1 = React.lazy(() => import("app1/Component1"));
  const Widget2 = React.lazy(() => import("app1/Component2"));
  const Widget3 = React.lazy(() => import("app2/Component3"));
  const Widget4 = React.lazy(() => import("app3/Component4"));
 

  return (
 
        <div>
          <h1>Shell</h1>
            <LazyComponent>
              <Widget1></Widget1>
            </LazyComponent>
            <LazyComponent>
             <Widget2></Widget2>
            </LazyComponent>
            <LazyComponent>
              <Widget3></Widget3>
            </LazyComponent>
            <LazyComponent>
              <Widget4></Widget4>
            </LazyComponent>
        </div>
  );
}

export default App;
