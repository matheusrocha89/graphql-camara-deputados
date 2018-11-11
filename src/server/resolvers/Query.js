import Bloco from './Bloco/Bloco';
import Deputado from './Deputado/Deputado';
import Evento from './Evento/Evento';
import Legislatura from './Legislatura/Legislatura';
import Orgao from './Orgao/Orgao';
import Partido from './Partido/Partido';
import Proposicao from './Proposicao/Proposicao';
import Votacao from './Votacao/Votacao';

export default {
  ...Bloco,
  ...Deputado,
  ...Evento,
  ...Legislatura,
  ...Orgao,
  ...Partido,
  ...Proposicao,
  ...Votacao,
};
