import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination, mountQueryString } from '../../utils/pagination';

const orgaos = async (_, args) => {
  try {
    const query = mountQueryString(args);
    const { data } = await clientAPI.get(`/orgaos?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgao = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/orgaos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoEventos = async (_, args) => {
  try {
    const query = mountQueryString(omit(args, ['id']));
    const { data } = await clientAPI.get(`/orgaos/${args.id}/eventos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoMembros = async (_, args) => {
  try {
    const query = mountQueryString(omit(args, ['id']));
    const { data } = await clientAPI.get(`/orgaos/${args.id}/membros?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoSituacoes = async () => {
  try {
    const { data } = await clientAPI.get('/referencias/orgaos/idSituacao');
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  orgaos,
  orgao,
  orgaoEventos,
  orgaoMembros,
  orgaoSituacoes,
};
