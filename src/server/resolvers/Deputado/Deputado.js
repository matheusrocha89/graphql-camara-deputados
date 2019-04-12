import querystring from 'query-string';
import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';
import { returnPagination } from '../../utils/pagination';

const deputados = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados?${query}`);
    const pagination = returnPagination(data.links);

    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
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
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados/${args.id}/despesas?${query}`);
    const pagination = returnPagination(data.links);
    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoEventos = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados/${args.id}/eventos?${query}`);
    const pagination = returnPagination(data.links);
    return {
      pageInfo: pagination,
      edges: data.dados.map(item => ({ node: item })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoOrgaos = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/deputados/${args.id}/orgaos${query}`);
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
  deputados,
  deputado,
  deputadoDespesas,
  deputadoEventos,
  deputadoOrgaos,
};
