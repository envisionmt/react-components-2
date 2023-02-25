import React from 'react';
import { render } from 'react-dom';
import { setUpNotifications } from 'reapop';

import { EnvisionClient } from '@Envision/utils';

import App from './App';

EnvisionClient.setApiUrl('http://localhost:3004');
EnvisionClient.setClientId('fdea8d89jufd89kufd');

setUpNotifications({
  defaultProps: {
    position: 'bottom-left',
    dismissible: true,
    dismissAfter: 5000,
  },
});

render(<App />, document.getElementById('app'));
