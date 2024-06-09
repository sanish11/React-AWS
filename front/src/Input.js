import { useState } from 'react';
import './App.css';
import { InputWrap, TextLabel, TextInput, Field, IconBtn } from './style';

function Input({ isToggle, handleSetIsToggle, type, name, required, label, leftIconBtn, rightIconBtn, toggleIconBtn }) {
  const [value, setValue] = useState({
    type: "text",
    name: "Label",
    letters: ""
  });

  function handleToggleSearch() {
    handleSetIsToggle(isToggle => !isToggle);
  }
  return (
    <InputWrap>
      {<IconBtn
        data-testid="left-icon-btn"
        role="button"
        aria-pressed="false"
        onClick={handleToggleSearch}
      >{isToggle ? toggleIconBtn : leftIconBtn}</IconBtn>}
      <Field>
        {isToggle ?
          <>
            <TextInput
              type={type}
              id={name}
              name={name}
              placeholder=" "
              autoComplete="off"
              value={value.letters}
              onChange={e => setValue({ type, name, letters: e.target.value })}
              required={required} />
            <TextLabel htmlFor={name}>{label}</TextLabel>
          </> :
          <>
            <TextInput
              type={type}
              id={name}
              name={name}
              placeholder=" "
              autoComplete="off"
              value={value.letters}
              onChange={e => setValue({ type, name, letters: e.target.value })}
              required={required} />
            <TextLabel htmlFor={name}>{label}</TextLabel>
          </>
        }
      </Field>
      {<IconBtn
        data-testid="right-icon-btn"
        role="button"
        aria-pressed="false"
      >{rightIconBtn}</IconBtn>}
    </InputWrap>
  );
}

export default Input;
