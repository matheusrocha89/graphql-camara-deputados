import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const partidos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const parties = await clientAPI.get(`/partidos?${query}`);
    return parties.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const partido = async (_, { id }) => {
  try {
    const party = await clientAPI.get(`/partidos/${id}`);
    return party.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const partidoMembros = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const members = await clientAPI.get(`/partidos/${args.id}/membros?${query}`);
    return members.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  partidos,
  partido,
  partidoMembros,
};
