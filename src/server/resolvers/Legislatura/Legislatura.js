import querystring from 'query-string';
import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination } from '../../utils/pagination';

const legislaturas = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/legislaturas?${query}`);
    const pagination = returnPagination(data.links);
    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
    };
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
    const query = querystring.stringify(omit(args, ['id']));
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
