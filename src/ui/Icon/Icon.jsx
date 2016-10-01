import React, { PropTypes } from 'react';
import * as GLYPHS from './glyphs';

const Icon = ({ glyph }) => (
  <svg
    className="icon"
    dangerouslySetInnerHTML={{ __html: `<use xlink:href="${GLYPHS[glyph]}"></use>` }}
  />
);

Icon.propTypes = {
  glyph: PropTypes.oneOf(Object.keys(GLYPHS)).isRequired,
};

export default Icon;
