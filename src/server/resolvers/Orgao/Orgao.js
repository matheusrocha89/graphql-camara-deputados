import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const orgaos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const organs = await clientAPI.get(`/orgaos?${query}`);
    return organs.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgao = async (_, { id }) => {
  try {
    const organ = await clientAPI.get(`/orgaos/${id}`);
    return organ.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoEventos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const events = await clientAPI.get(`/orgaos/${args.id}/eventos?${query}`);
    return events.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoMembros = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const members = await clientAPI.get(`/orgaos/${args.id}/membros?${query}`);
    return members.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const orgaoSituacoes = async () => {
  try {
    const situations = await clientAPI.get('/referencias/orgaos/idSituacao');
    return situations.dados;
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
