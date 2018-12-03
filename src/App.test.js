import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from './components/search/Search';
import GifLists from './components/GifLists';
import GiphyCard from './components/GiphyCard';
import { configure, shallow, mount } from 'enzyme';
import axios from 'axios'
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { expect } from 'chai';
import { sinon } from 'sinon';
/* 
mock = meaning fake data so we dont do an api call to make the test run therefore the test run quicker
*/

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//App Component

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
    it('has a `rating` method which change the state depending of what rating is clicked on', () => {
      const ratingMock = jest.fn()
      const component = mount(<App handleClick={ratingMock} />)

      beforeAll(() => {
        const resolved = new Promise((r) => r({ data: Array.from([{ 0: { description: 'desc' } }]) }));
        sinon.stub(axios, 'get').returns(resolved);
        component.find('input').node.value = 'test';
        component.find('button').simulate('click', { preventDefault: jest.fn() });
      });

      expect(ratingMock.mock.calls).to.be.an('array')
    })
    it('changes the state when `handleInputChange` is called', () => {
      const component = mount(
        <App />
      );
      component.instance().handleInputChange({ 0: { description: 'desc' } });
      expect(Object.keys(component.state('gifs'))).to.be.an('array');
    });
  })
})


