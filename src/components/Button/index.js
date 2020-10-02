import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  --primary: #ff1940;
  --secondary: #fff;
  background-color: ${props =>
    props.theme === 'primary' ? 'var( --primary)' : 'var(--secondary)'};
  color: ${props =>
    props.theme === 'primary' ? 'var(--secondary)' : 'var(--primary)'};
  border: 1px solid
    ${props =>
      props.theme === 'primary' ? 'var( --primary)' : 'var(--secondary)'};
  border-radius: 12px;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  transition: background-color 250ms;
  margin-bottom: 1rem;

  :hover {
    filter: grayscale(20%) contrast(95%);
  }
`;

const Button = props => {
  const { onClick, theme } = props;
  return (
    <StyledButton onClick={onClick} theme={theme}>
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
