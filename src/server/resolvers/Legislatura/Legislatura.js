import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const legislaturas = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/legislaturas?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const legislatura = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/legislaturas/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const legislaturaMesa = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/legislaturas/${args.id}/mesa?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  legislaturas,
  legislatura,
  legislaturaMesa,
};
