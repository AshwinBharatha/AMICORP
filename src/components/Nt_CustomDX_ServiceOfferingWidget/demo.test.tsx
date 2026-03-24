// import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';



const { BaseNtCustomDxServiceOfferingWidget } = composeStories(DemoStories);

test('renders NtCustomDxServiceOfferingWidget', async () => {
  render(<BaseNtCustomDxServiceOfferingWidget />);
  expect(await screen.findByText('Choose your JURISDICTION')).toBeVisible();
  expect(await screen.findByText('Major Countries')).toBeVisible();
  expect(await screen.findByText('All Countries')).toBeVisible();
  expect((await screen.findAllByText('Australia')).length).toBeGreaterThan(0);
  expect((await screen.findAllByText('Canada')).length).toBeGreaterThan(0);
  expect(await screen.findByText('Armenia')).toBeVisible();
});
