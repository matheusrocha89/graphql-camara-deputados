# GraphQL - Câmara dos Deputados
API GraphQL com os dados da câmara de deputados do Brasil

# Demo

[Demo](https://graphql-camara-deputados.herokuapp.com/)

# Install

Install all the dependencies with: `yarn`

# Run dev server

To run the server just run: `yarn start:dev`

# Run production server

To run the production version of the server already transpiled and without the need of `babel-node`, follow these steps.

You just need to run one commend and the transpiled code will be created on `./dist` folder. And run the production code:

```
yarn start
```

If you just want to build the production mode you can just run:

```
yarn build
```

# Some examples of queries

```
# List of deputies
query {
  deputados (pagina: 1, itens: 20) {
    pageInfo {
      current
      next
      first
      last
    }
    edges {
      node {
        id
        siglaPartido
        urlFoto
      }
    }
  }
}
```

```
# Data from one deputy
query {
  deputado(id: "178912") {
    id
    escolaridade
    cpf
    dataNascimento
    nomeCivil
    municipioNascimento
  }
}
```

```
# Expenses of a deputy
query {
  deputadoDespesas(id: "178912", pagina: 1, itens: 15) {
    pageInfo {
      current
      next
      first
      last
    }
    edges {
      node {
        ano
        valorDocumento
        valorLiquido
        cnpjCpfFornecedor
        dataDocumento
        tipoDespesa
        urlDocumento
      }
    }
  }
}
```
