import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import App from './App';


describe("counter testing",  () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  })
  test("Render the title of counter", () => {
    console.log(wrapper.debug());
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test("render a button with tesxt of 'increment'", () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe('0')
  });
  test("render the click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });
  test("render the click event of decrement button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
