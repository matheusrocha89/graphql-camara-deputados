import querystring from 'query-string';
import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination } from '../../utils/pagination';

const votacao = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/votacoes/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const votacaoVotos = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/votacoes/${args.id}/votos?${query}`);
    const pagination = returnPagination(data.links);
    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  votacao,
  votacaoVotos,
};
