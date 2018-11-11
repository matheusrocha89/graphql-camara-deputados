import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const eventos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/eventos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const evento = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/eventos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoDeputados = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/eventos/${id}/deputados`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoOrgaos = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/eventos/${id}/orgaos`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoPautas = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/eventos/${id}/pauta`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoSituacoes = async () => {
  try {
    const { data } = await clientAPI.get('/referencias/eventos/idSituacao');
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoTipos = async () => {
  try {
    const { data } = await clientAPI.get('/referencias/eventos/idTipoEvento');
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  eventos,
  evento,
  eventoDeputados,
  eventoOrgaos,
  eventoPautas,
  eventoSituacoes,
  eventoTipos,
};
