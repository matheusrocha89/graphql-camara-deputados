import clientAPI from '../../clients/deputados-api';
import { returnPagination, mountQueryString } from '../../utils/pagination';

const eventos = async (_, args) => {
  try {
    const query = mountQueryString(args);
    const { data } = await clientAPI.get(`/eventos?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
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
