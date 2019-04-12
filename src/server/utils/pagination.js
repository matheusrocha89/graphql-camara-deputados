import querystring from 'query-string';

export const returnPagination = (links) => {
  const current = links.filter(item => item.rel === 'self')[0];
  const next = links.filter(item => item.rel === 'next')[0];
  const first = links.filter(item => item.rel === 'first')[0];
  const last = links.filter(item => item.rel === 'last')[0];

  return {
    current: querystring.parse(current.href).pagina,
    next: next ? querystring.parse(next.href).pagina : null,
    first: querystring.parse(first.href).pagina,
    last: querystring.parse(last.href).pagina,
  };
};
