import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const deputados = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const deputies = await clientAPI.get(`/deputados?${query}`);
    return deputies.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputado = async (_, { id }) => {
  try {
    const deputy = await clientAPI.get(`/deputados/${id}`);
    return deputy.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoDespesas = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const costs = await clientAPI.get(`/deputados/${args.id}/despesas?${query}`);
    return costs.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoEventos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const events = await clientAPI.get(`/deputados/${args.id}/eventos?${query}`);
    return events.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const deputadoOrgaos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const organs = await clientAPI.get(`/deputados/${args.id}/orgaos${query}`);
    return organs.dados;
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
