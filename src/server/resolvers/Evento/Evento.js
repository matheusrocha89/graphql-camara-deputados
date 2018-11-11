import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const eventos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const events = await clientAPI.get(`/eventos?${query}`);
    return events.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const evento = async (_, { id }) => {
  try {
    const event = await clientAPI.get(`/eventos/${id}`);
    return event.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoDeputados = async (_, { id }) => {
  try {
    const deputies = await clientAPI.get(`/eventos/${id}/deputados`);
    return deputies.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoOrgaos = async (_, { id }) => {
  try {
    const organs = await clientAPI.get(`/eventos/${id}/orgaos`);
    return organs.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoPautas = async (_, { id }) => {
  try {
    const ruling = await clientAPI.get(`/eventos/${id}/pauta`);
    return ruling.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoSituacoes = async () => {
  try {
    const situations = await clientAPI.get('/referencias/eventos/idSituacao');
    return situations.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const eventoTipos = async () => {
  try {
    const types = await clientAPI.get('/referencias/eventos/idTipoEvento');
    return types.dados;
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
