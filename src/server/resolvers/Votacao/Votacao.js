import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination, mountQueryString } from '../../utils/pagination';

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
    const query = mountQueryString(omit(args, ['id']));
    const { data } = await clientAPI.get(`/votacoes/${args.id}/votos?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  votacao,
  votacaoVotos,
};
