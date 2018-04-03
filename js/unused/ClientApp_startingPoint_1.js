/* const MyTitle = () => {
  // creating stateless component to render
  // returns react element
  // can be created many times over
  return React.createElement('div', null, React.createElement('h1', null, 'Check out this component!'));
};
 */

import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

// props are received as a PARAMETER
// Mytitle returns element ( element=div, props: {style}, key)
const MyTitle = props => ce('div', { style: { color: props.color } }, ce('h1', null, props.title));

const MyFirstComponent = () =>
  // static method on React => createElement takes 3 args: (html element type, props, key )
  ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, {
      color: 'rebeccapurple',
      title: 'House of Cards'
    }),
    ce(MyTitle, {
      color: 'peru',
      title: 'Orange is thew New Black'
    }),
    ce(MyTitle, {
      color: 'burlywood',
      title: 'Stranger Things'
    })
  );

render(React.createElement(MyFirstComponent), document.getElementById('app'));
