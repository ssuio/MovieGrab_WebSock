import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import { uuidV4 } from 'uuid';

 
import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {
  render(<App />, document.querySelector('#render-target'));
});