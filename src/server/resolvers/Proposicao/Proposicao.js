import querystring from 'query-string';

import clientAPI from '../../clients/deputados-api';

const proposicoes = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const propositions = await clientAPI.get(`/proposicoes?${query}`);
    return propositions.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicao = async (_, { id }) => {
  try {
    const proposition = await clientAPI.get(`/proposicoes/${id}`);
    return proposition.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoAutores = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const authors = await clientAPI.get(`/proposicoes/${args.id}/autores?${query}`);
    return authors;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoTramitacoes = async (_, args) => {
  try {
    const query = querystring.stringify(args);
    const processings = await clientAPI.get(`/proposicoes/${args.id}/tramitacoes?${query}`);
    return processings.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoVotacoes = async (_, { id }) => {
  try {
    const polls = await clientAPI.get(`/proposicoes/${id}/votacoes`);
    return polls.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

const proposicaoSituacoes = async () => {
  try {
    const situations = await clientAPI.get('/referencias/proposicoes/idSituacao');
    return situations.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};


export default {
  proposicoes,
  proposicao,
  proposicaoAutores,
  proposicaoTramitacoes,
  proposicaoVotacoes,
  proposicaoSituacoes,
};
