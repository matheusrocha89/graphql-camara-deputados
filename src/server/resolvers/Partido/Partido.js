import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const partidos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/partidos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const partido = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/partidos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const partidoMembros = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const { data } = await clientAPI.get(`/partidos/${args.id}/membros?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  partidos,
  partido,
  partidoMembros,
};
