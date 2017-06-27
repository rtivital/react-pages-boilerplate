import React from 'react';

const decoratorWrapperStyles = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
};

const decoratorContainerStyles = {
  alignSelf: 'center',
};

/**
 * CenteringDecorator - creates perfectly aligned stories
 *
 * @param {Object} wrapperStyles styles object that will be spread to wrapper
 * @param {Object} containerStyles styles object that will be spread to container
 * @param {String} color background-color of wrapper
 *
 * @example
 * storiesOf('Story', module)
 *   .addDecorator(
 *     CenteringDecorator({
 *       color: 'red',
 *       wrapperStyles: { color: 'blue' },
 *       containerStyles: { color: 'red' }
*       })
*     )
 *   .add('State', () => <Component />)
 */
export default function CenteringDecorator({ color = 'transparent', wrapperStyles = {}, containerStyles = {} } = {}) {
  return function WrappedStory(story) {
    return (
      <div style={{ ...decoratorWrapperStyles, backgroundColor: color, ...wrapperStyles }}>
        <div style={{ ...decoratorContainerStyles, ...containerStyles }}>{story()}</div>
      </div>
    );
  };
}
