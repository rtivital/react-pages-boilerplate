import { Children, createElement } from 'react';
import { Router } from 'react-router';

export default class HotRouter extends Router {
  componentWillReceiveProps(nextProps) {
    const components = [];
    function grabComponents(element) {
      if (element.props && element.props.component) {
        components.push(element.props.component);
      }

      if (element.props && element.props.children) {
        Children.forEach(element.props.children, grabComponents);
      }
    }

    grabComponents(nextProps.routes || nextProps.children);
    components.forEach(createElement); // force patching
  }
}
