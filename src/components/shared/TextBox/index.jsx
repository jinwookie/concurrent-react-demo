import React from 'react';
import classnames from 'classnames';
import './styles.scss';

const TextBox = ({ className, ...rest }) => (
  <input className={classnames(['text', className])} {...rest} />
);

export default TextBox;
