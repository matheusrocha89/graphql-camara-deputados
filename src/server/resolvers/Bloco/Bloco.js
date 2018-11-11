import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const blocos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/blocos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const bloco = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/blocos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  blocos,
  bloco,
};
