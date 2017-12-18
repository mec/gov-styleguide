import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import iconPointer from '../images/icon-pointer.png';
import { darken, readableColor } from 'polished';

const Button = styled.button`
  font-family: "HelveticaNeue", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  background-color: ${props => props.theme.background};
  color: ${props => readableColor(props.theme.background)};
  position: relative;
  padding: 0.526315em 0.789473em 0.263157em;
  border: none;
  border-radius: 0;
  outline: 1px solid transparent;
  outline-offset: -1px;
 
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 0 ${props => darken(0.15, props.theme.background)};
  background-image: url(${iconPointer});
  background-repeat: no-repeat;
  background-position: 100% 50%;
  padding: 8px 42px 5Px 17px;

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
    background-color: ${props => darken(0.05, props.theme.background)};
  }
  &:active {
    top: 2px;
    box-shadow: 0 0 0 ${props => darken(0.15, props.theme.background)};
  }
  &:active:before {
    top: -10%;
    height: 120%;
  }
  &:disabled,
  &.disabled,
  &[disabled="disabled"],
  &[disabled] {
    background-color: ${props => props.theme.background};
    opacity: 0.5;
    cursor: default;
  }
  &:focus {
  outline: 3px solid ${props => props.theme.focusColor};
  }
} 
`;

const StartButton = ({ text, clicked, theme }) => (
  <Button onClick={clicked} theme={theme}>
    {text}
  </Button>
);

StartButton.propTypes = {
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

StartButton.defaultProps = {
  text: 'Start',
  disabled: false,
  theme: {
    background: '#00823b',
    textColor: '#000000',
    focusColor: '#ffbf47'
  }
};

export default StartButton;
