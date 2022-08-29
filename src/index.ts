#!/usr/bin/env node
import * as resources from './resources';
import * as services from './resources/services';

import * as interfaces from './shared/interfaces';
import * as types from './shared/types';
import * as data from './infra/data';

export * from './resources';
export * from './resources/services';

export * from './shared';
export * from './shared/interfaces';
export * from './shared/types';

export * from './infra';
export * from './infra/data';

export const emoji = {
  ...services,
  ...resources,
  ...interfaces,
  ...types,
  ...data,
};
export default emoji;
