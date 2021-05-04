import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { List } from '../List';

it('renders tappable items', () => {
  const push = jest.fn();
  const out = render(<List navigation={{ push }} />);

  fireEvent.press(out.getByText('Text'));
  expect(push).toBeCalledWith('TextDemo');

  fireEvent.press(out.getByText('Form'));
  expect(push).toBeCalledWith('FormDemo');

  fireEvent.press(out.getByText('Button'));
  expect(push).toBeCalledWith('ButtonDemo');
});
