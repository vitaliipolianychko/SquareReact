import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './App';

Enzyme.configure({ adapter: new Adapter() });
describe('Table', () => {
  const wrapper = mount(<Table initialWidth={5} initialHeight={5} />);
  wrapper.setState({
    isHoverButton: true,
    isHoverTable: true,
  });

  it('initialWidth is 5', () => {
    expect(wrapper.find('tr')).toHaveLength(5);
  });
  it('initialHeight is 5', () => {
    expect(
      wrapper
        .find('tr')
        .first()
        .find('td')
    ).toHaveLength(5);
  });

  it('button click add row', () => {
    const trNew = wrapper.find('tr');
    wrapper.find('.row-add').simulate('click');
    expect(wrapper.find('tr')).toHaveLength(trNew.length + 1);
  });
  it('button click add coll', () => {
    const tdNew = wrapper
      .find('tr')
      .first()
      .find('td');
    wrapper.find('.coll-add').simulate('click');
    expect(
      wrapper
        .find('tr')
        .first()
        .find('td')
    ).toHaveLength(tdNew.length + 1);
  });
  it('button click delete row', () => {
    const trNew = wrapper.find('tr');
    wrapper.find('.row-delete').simulate('click');
    expect(wrapper.find('tr')).toHaveLength(trNew.length - 1);
  });
  it('button click delete column', () => {
    const tdNew = wrapper
      .find('tr')
      .first()
      .find('td');
    wrapper.find('.coll-delete').simulate('click');
    expect(
      wrapper
        .find('tr')
        .first()
        .find('td')
    ).toHaveLength(tdNew.length - 1);
  });
  it('button click current row', () => {
    wrapper.setState({
      currentRow: 2,
    });
    wrapper.find('.row-delete').simulate('click');
    expect(wrapper.state().currentRow).toBe(2);
  });
  it('button click current coll', () => {
    wrapper.setState({
      currentCol: 3,
    });
    wrapper.find('.coll-delete').simulate('click');
    expect(wrapper.state().currentCol).toBe(3);
  });
});
