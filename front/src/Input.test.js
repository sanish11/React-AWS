import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { RiAddLine } from 'react-icons/ri';
import { BsPencil, BsSearch } from 'react-icons/bs';

test('renders a text input with a label "Name"', () => {
  
  const { getByLabelText, debug } = render(<Input
    type="text"
    name="tasks"
    label="Add Task"
    leftIconBtn={<BsPencil />}
    rightIconBtn={<RiAddLine />}
    toggleIconBtn={<BsSearch />}
    required
  />);
  const input = getByLabelText(/add task/i || /search tasks/i);
  const leftIconBtn = screen.getByTestId('left-icon-btn');
  const rightIconBtn = screen.getByTestId('right-icon-btn');
  console.log(input)
  // fireEvent(
  //   leftIconBtn,
  //   new MouseEvent('click', {
  //     bubbles: true,
  //     cancelable: true,
  //   })
  // );
  expect(leftIconBtn).toHaveAttribute('role', 'button');
  expect(rightIconBtn).toHaveAttribute('role', 'button');
  expect(input).toHaveAttribute('type', 'text');
  expect(input).toHaveAttribute('name', 'tasks');
  expect(input).toHaveAttribute('required');
  debug(input);
});