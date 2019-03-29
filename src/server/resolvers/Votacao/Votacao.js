import querystring from 'query-string';
import omit from 'lodash/omit';

import clientAPI from '../../clients/deputados-api';

const votacao = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/votacoes/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const votacaoVotos = async (_, args) => {
  try {
    const query = querystring.stringify(omit(args, ['id']));
    const { data } = await clientAPI.get(`/votacoes/${args.id}/votos?${query}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  votacao,
  votacaoVotos,
};
