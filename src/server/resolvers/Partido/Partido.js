import querystring from 'query-string';
import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination } from '../../utils/pagination';

const partidos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/partidos?${query}`);
    const pagination = returnPagination(data.links);
    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const partido = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/partidos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const partidoMembros = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/partidos/${args.id}/membros?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  partidos,
  partido,
  partidoMembros,
};
