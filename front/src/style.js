import styled from 'styled-components';

export const TextLabel = styled.label`
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  transition: all 0.2s;
  touch-action: manipulation; 
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  &:first-of-type, &:last-of-type {
    font-size: 1.2rem;
    padding: 1rem;
    color: black;
    background: white;
    border: 1px solid black;
    position: relative; 
  } 
  &:first-of-type {
    border-right: none;
  }
  &:last-of-type {
    border-left: none;
  }
  &:first-of-type:hover, &:last-of-type:hover {
    color: white;
    background: black;
}`

export const IconBtn = styled.button`
  &:first-of-type, &:last-of-type {
    font-size: 1.2rem;
    padding: 1rem;
    color: black;
    background: white;
    border: 1px solid black;
    position: relative; 
  } 
  &:first-of-type {
    border-right: none;
  }
  &:last-of-type {
    border-left: none;
  }
  &:first-of-type:hover, &:last-of-type:hover {
    color: white;
    background: black;
  
}`

export const TextInput = styled.input`
  position: relative;
  cursor: text;
  font-size: 1rem;
  border: 1px solid black;
  padding: 1rem 0 0 1rem;
  margin: 0;
  width: 100%;
  z-index: 0;
  background: ;
  color: black;
  transition: all 0.1s;
  touch-action: manipulation;
  border-radius: 0;
&:focus {
  outline: 0;
  background: none;
}
&:placeholder-shown + label {
  cursor: text;
  margin-left: .75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translate(0, 1rem) scale(1);
  position: absolute;
}
&:not(:placeholder-shown) + label,
&:focus + label{
  transform: translate(0, -2px) scale(0.85);
  cursor: pointer;
  z-index: 3;
  position: absolute;
  margin-left: .2rem;
  color: black;
}
&::-webkit-search-cancel-button{
  display: none;
}
`;

export const Field = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
`;
