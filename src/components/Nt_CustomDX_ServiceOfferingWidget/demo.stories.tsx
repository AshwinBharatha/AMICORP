
/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import NtCustomDxServiceOfferingWidget from './index';


import configProps from './mock';

const meta: Meta<typeof NtCustomDxServiceOfferingWidget> = {
  title: 'NtCustomDxServiceOfferingWidget',
  component: NtCustomDxServiceOfferingWidget,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NtCustomDxServiceOfferingWidget>;

export const BaseNtCustomDxServiceOfferingWidget: Story = (args: any) => {
  const props = {
    ...configProps,
    getPConnect: () => {
      return {
        getValue: (value: any) => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: (value: any) => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
      <>
        <NtCustomDxServiceOfferingWidget {...props} {...args} />
      </>
    );
};

BaseNtCustomDxServiceOfferingWidget.args = {
  header: configProps.header,
  datasource: configProps.datasource
};
