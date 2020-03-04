import React from 'react';
import classnames from 'classnames';
import './styles.scss';

const Button = ({
  htmlType,
  type,
  children,
  ...rest
}) => (
  <button type={htmlType} className={classnames(['button', type && `button--${type}`])} {...rest}>{children}</button>
);

export default Button;
