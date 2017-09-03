import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Demo from './Demo'

storiesOf('Demo', module)
  .add('withInfo', withInfo('Heading here')(() => (<Demo name='David' />)))
  .addWithInfo('addWithInfo', 'Heading here', () => (<Demo name='David' />))
