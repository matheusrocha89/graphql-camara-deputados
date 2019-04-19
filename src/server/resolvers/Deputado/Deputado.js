import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination, mountQueryString } from '../../utils/pagination';

const deputados = async (_, args) => {
  try {
    const query = mountQueryString(args);
    const { data } = await clientAPI.get(`/deputados?${query}`);
    const { pageInfo, current } = returnPagination(data.links);

    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputado = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/deputados/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoDespesas = async (_, args) => {
  try {
    const query = mountQueryString(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados/${args.id}/despesas?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoEventos = async (_, args) => {
  try {
    const query = mountQueryString(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados/${args.id}/eventos?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoOrgaos = async (_, args) => {
  try {
    const query = mountQueryString(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados/${args.id}/orgaos${query}`);
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
  deputados,
  deputado,
  deputadoDespesas,
  deputadoEventos,
  deputadoOrgaos,
};
