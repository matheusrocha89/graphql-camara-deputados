// import path from 'path';
// import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// const typesArray = fileLoader(path.join(__dirname, '.'), { recursive: true });

// export default mergeTypes(typesArray, { all: true });

import BlocoTypes from './Bloco/types.graphql';
import DeputadoTypes from './Deputado/types.graphql';
import EventoTypes from './Evento/types.graphql';
import LegislaturaTypes from './Legislatura/types.graphql';
import MesaTypes from './Mesa/types.graphql';
import OrgaoTypes from './Orgao/types.graphql';
import PartidoTypes from './Partido/types.graphql';
import PautaTypes from './Pauta/types.graphql';
import ProposicaoTypes from './Proposicao/types.graphql';
import QueryTypes from './Query/types.graphql';
import SituacaoTypes from './Situacao/types.graphql';
import VotacaoTypes from './Votacao/types.graphql';

export default () => `
  ${BlocoTypes}
  ${DeputadoTypes}
  ${EventoTypes}
  ${LegislaturaTypes}
  ${MesaTypes}
  ${OrgaoTypes}
  ${PartidoTypes}
  ${PautaTypes}
  ${ProposicaoTypes}
  ${QueryTypes}
  ${SituacaoTypes}
  ${VotacaoTypes}
`;
