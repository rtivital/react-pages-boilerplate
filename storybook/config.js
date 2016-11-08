import { configure } from '@kadira/storybook';
import 'styles';

const requireContext = require.context('../src', true, /.story.jsx/);

function loadStories() {
  requireContext.keys().forEach((filename) => requireContext(filename));
}

configure(loadStories, module);
