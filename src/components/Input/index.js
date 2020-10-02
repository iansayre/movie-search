import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: inset 0 0 4px #556877;
  font-size: 1.4rem;
  padding: 0.5rem 2rem;

  line-height: 2.8rem;
  margin-bottom: 1rem;

  @media (min-width: 786px) {
    place-self: center stretch;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;

  @media (min-width: 786px) {
    place-self: center;
  }
`;

const Input = props => (
  <Fragment>
    {props.label && (
      <Label htmlFor={`${props.label}Input`}>{`${props.label}`}</Label>
    )}
    <StyledInput
      type={props.type}
      name={props.label ? `${props.label}Input` : null}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </Fragment>
);

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
