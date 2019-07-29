import React from 'react';
import {shallow, mount} from 'enzyme';
import {App} from './App';
import toJson from 'enzyme-to-json';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('render Button', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle App`s theme', () => {
    wrapper.setState({isLight: true});
    expect(wrapper.find('.App').hasClass('App--light')).toEqual(true);
    expect(wrapper.find('.App').hasClass('App--dark')).toEqual(false);
    wrapper.find('.App__mode-button').simulate('click');
    wrapper.update();
    expect(wrapper.state('isLight')).toEqual(false);
    expect(wrapper.find('.App').hasClass('App--light')).toEqual(false);
    expect(wrapper.find('.App').hasClass('App--dark')).toEqual(true);
  });

});
