import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination, mountQueryString } from '../../utils/pagination';

const legislaturas = async (_, args) => {
  try {
    const query = mountQueryString(args);
    const { data } = await clientAPI.get(`/legislaturas?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
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
    const query = mountQueryString(omit(args, ['id']));
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
