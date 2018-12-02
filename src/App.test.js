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

describe('REACT', () => {
  describe('APP Component', () => {
    let app;
    it('create component', () => {
      app = shallow(<App />)
    })
    //State

    it('has a `gifs` field on state', () => {
      expect(app.state().gifs).to.exist;
    })
    it('has a `gifs` field initialize to be an an array', () => {
      expect(app.state().gifs).to.be.an('array');
    })
    it('has a `allGifs` field on state', () => {
      expect(app.state().allGifs).to.exist;
    })
    it('has a `allGifs` field initialize to be an an array', () => {
      expect(app.state().allGifs).to.be.an('array');
    })
    it('has a `filterDataByRating` field on state', () => {
      expect(app.state().filterDataByRating).to.exist;
    })
    it('has a `filterDataByRating` field containing differents rating', () => {
      expect(app.state().filterDataByRating).to.includes('pg-13');
    })

    //methods 

    it('has a method called `rating` which filter all the gifs and set it as the gifs on state', () => {
      const rate = 'g'
      const e = app.simulate('click', { preventDefault() { } })
      console.log(app.instance().rating)
      expect(app.instance().rating).to.be.a('function');
      // app.instance().rating(rate);
      // expect(app.state().gifs.rating).to.be.deep.equal(e, rate);
    })
  })
})


