import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './components/search/Search';
import GifLists from './components/GifLists';
import GiphyCard from './components/GiphyCard'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
/* 
mock = meaning fake data so we dont do an api call to make the test run run quicker
*/
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



