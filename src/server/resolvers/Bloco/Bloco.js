import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const blocos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const blocks = await clientAPI.get(`/blocos?${query}`);
    return blocks.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const bloco = async (_, { id }) => {
  try {
    const block = await clientAPI.get(`/blocos/${id}`);
    return block.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  blocos,
  bloco,
};
