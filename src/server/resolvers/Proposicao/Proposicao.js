import querystring from 'query-string';
import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination } from '../../utils/pagination';

const proposicoes = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/proposicoes?${query}`);
    const pagination = returnPagination(data.links);
    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicao = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/proposicoes/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoAutores = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/proposicoes/${args.id}/autores?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoTramitacoes = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/proposicoes/${args.id}/tramitacoes?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoVotacoes = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/proposicoes/${id}/votacoes`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoSituacoes = async () => {
  try {
    const { data } = await clientAPI.get('/referencias/proposicoes/idSituacao');
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  proposicoes,
  proposicao,
  proposicaoAutores,
  proposicaoTramitacoes,
  proposicaoVotacoes,
  proposicaoSituacoes,
};
