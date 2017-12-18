import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken, readableColor } from 'polished';

const Input = styled.input`
  font-family: 'HelveticaNeue', 'Helvetica Neue', 'Arial', 'Helvetica', sans-serif;
  background-color: ${props => props.theme.background};
  color: ${props => readableColor(props.theme.background)};
  position: relative;
  padding: 0.526315em 0.789473em 0.263157em;
  border: none;
  border-radius: 0;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-size: 1em;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 0 ${props => darken(0.1, props.theme.background)};
  &:before {
    content: '';
    height: 110%;
    width: 100%;
    display: block;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:focus {
    background-color: ${props => props.theme.background};
  }
  &:active {
    top: 2px;
    box-shadow: 0 0 0 ${props => props.theme.background};
  }
  &:active:before {
    top: -10%;
    height: 120%;
  }
  &:disabled,
  &.disabled,
  &[disabled='disabled'],
  &[disabled] {
    background-color: ${'#00823b'};
    opacity: 0.5;
    cursor: default;
    &:active {
      top: 0;
      box-shadow: 0 2px 0 ${props => props.theme.background};
    }
  }
  &:focus {
    outline: 3px solid ${props => props.theme.focusColor};
  }
`;
/**
 * The mighty button.
 */
const Button = ({ text, clicked, primary, disabled, theme }) => (
  <Input type="submit" value={text} onClick={clicked} disabled={disabled} theme={theme}/>
);

Button.propTypes = {
  /** The button label. */
  text: PropTypes.string,
  /** Is the button disabled. */
  disabled: PropTypes.bool,
  /** The function called when the button is clicked. */
  clicked: PropTypes.func,
  /** 
   * The styled component default theme. 
   * 
   * @ignore
   */
  theme: PropTypes.object
};

Button.defaultProps = {
  text: 'Submit',
  disabled: false,
  theme: {
    background: '#00823b',
    textColor: '#000000',
    focusColor: '#ffbf47'
  }
};
/** @component */
export default Button;
