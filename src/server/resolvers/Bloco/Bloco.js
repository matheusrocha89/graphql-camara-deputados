import clientAPI from '../../clients/deputados-api';
import { returnPagination, mountQueryString } from '../../utils/pagination';

const blocos = async (_, args) => {
  try {
    const query = mountQueryString(args);
    const { data } = await clientAPI.get(`/blocos?${query}`);
    const { pageInfo, current } = returnPagination(data.links);
    return {
      pageInfo,
      edges: data.dados.map(item => ({ node: item, cursor: current })),
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

const bloco = async (_, { id }) => {
  try {
    const { data } = await clientAPI.get(`/blocos/${id}`);
    return data.dados;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default {
  blocos,
  bloco,
};
