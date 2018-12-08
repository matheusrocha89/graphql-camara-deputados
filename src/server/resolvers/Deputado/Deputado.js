import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const deputados = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/deputados?${query}`);
    return data.dados;
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
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/deputados/${args.id}/despesas?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoEventos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/deputados/${args.id}/eventos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoOrgaos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/deputados/${args.id}/orgaos${query}`);
    return data.dados;
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
