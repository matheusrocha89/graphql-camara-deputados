import querystring from 'query-string';
import omit from 'lodash/omit';

export const encodeBase64 = data => Buffer.from(String(data)).toString('base64');

export const decodeBase64 = data => Buffer.from(data, 'base64').toString('ascii');

export const mountQueryString = (args) => {
  if (args.after) {
    return querystring.stringify(omit({
      ...args,
      pagina: decodeBase64(args.after),
      itens: args.first,
    }, ['first', 'after']));
  }

  return querystring.stringify(omit({
    ...args,
    itens: args.first,
  }, ['first', 'after']));
};

export const returnPagination = (links) => {
  const current = links.filter(item => item.rel === 'self')[0];
  const currentPage = querystring.parse(current.href.split('?')[1]).pagina || 1;
  const next = links.filter(item => item.rel === 'next')[0];
  const endCursor = next ? encodeBase64(querystring.parse(next.href.split('?')[1]).pagina) : null;
  const hasNextPage = !!next;

  return {
    current: encodeBase64(currentPage),
    pageInfo: {
      endCursor,
      hasNextPage,
    },
  };
};
