import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContextProvider from './ContextProvider'
import App from './App';
import * as serviceWorker from './serviceWorker';

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    }
  }
}

ReactDOM.render(<ContextProvider context={context}><App/></ContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
