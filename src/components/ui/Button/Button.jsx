import { createElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Button.styles.less';

export default function Button({ component = 'button', theme = 'white', className, ...others }) {
  const buttonClassName = cx(classes.button, classes[theme], className);
  const props = { ...others, className: buttonClassName };
  return createElement(component, props);
}

Button.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  theme: PropTypes.oneOf(['blue', 'white']),
  className: PropTypes.string,
};
