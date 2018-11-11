import { pickBy, identity } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const removeEmptyProperties = obj => pickBy(obj, identity);
