import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const votacoes = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const polls = await clientAPI.get(`/votacoes?${query}`);
    return polls.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const votacao = async (_, { id }) => {
  try {
    const poll = await clientAPI.get(`/votacoes/${id}`);
    return poll.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const votacaoVotos = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const votes = await clientAPI.get(`/votacoes/${args.id}/votos?${query}`);
    return votes.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  votacoes,
  votacao,
  votacaoVotos,
};
