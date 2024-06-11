import React from 'react';
import { RiAddLine } from 'react-icons/ri';
import { BsPencil, BsSearch } from 'react-icons/bs';
import Input from './Input';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Input',
  component: Input,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

export const FirstStory = Template.bind({});
let isToggle = false;
function handleSetIsToggle(val) { isToggle = !isToggle;};
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  name: "tasks",
  label: "Add Task",
  toggleIconBtn: <BsSearch />,
  leftIconBtn: <BsPencil />,
  rightIconBtn: <RiAddLine />,
  isToggle,
  handleSetIsToggle
};