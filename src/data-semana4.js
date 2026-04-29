// SEMANA 4 — 22 a 27 de maio
// Protocolo CEO Digital · 7 dias após anunciar oferta

export const SEMANA_4 = [
  {
    id: 29, ph: "s4", dt: "22/05", dn: "Qui, 22 mai",
    fmt: "Reel", fn: "fundo",
    proto: "CEO Digital · Pós-oferta · Dia 1 — Abertura com punch",
    tipo: "Abertura com punch | Urgência emocional",
    vis: "Você falando direto pra câmera. Tom de quem está abrindo uma oportunidade real. 50 segundos.",
    cap: `Eu não vendo promessas. Abro portas.

Hoje uma delas está aberta para você.

Faltam 9 dias.

Me chama no direct. 🤍`,
    rot: `Pensei em guardar isso só para quem já estava comigo.

Mas resolvi abrir.

Carrinho aberto não significa pressa. Significa que existe uma janela, e ela tem data para fechar.

Quem entrar em maio vai ter a pantufa personalizada, o app exclusivo, a condição especial em privado, e concorre à viagem pra Gramado.

Essa janela fecha no dia 31.

Me chama no direct agora.`,
    st: [
      { f: "S1. Abertura | Última semana", mostrar: "Você direto pra câmera, ambiente quente", arte: "Última semana de maio.", fala: "Senhoras, hoje começa a contagem regressiva final. 9 dias." },
      { f: "S2. Headline | Punch", mostrar: "Tipografia forte", arte: "Eu não vendo promessas. Abro portas.", fala: "E hoje uma porta está aberta. Mas não vai ficar." },
      { f: "S3. Convite ao reel", mostrar: "Capa do reel", arte: "Reel novo no feed.", fala: "Toca lá. É o reel mais direto da campanha." },
      { f: "S4. Caixinha", mostrar: "Tela limpa", sticker: "Você vai entrar nessa porta?", arte: "[Sim] [Tô considerando] [Ainda não decidi]" },
      { f: "S5. Recap urgente", mostrar: "Tela com lista visual", arte: "Pantufa. Viagem (sorteio). App. Condição especial.", fala: "Tudo isso vai junto se você entrar até dia 31. Junho começa do zero, sem campanha." },
      { f: "S6. Provocação", mostrar: "Você direto pra câmera", arte: "Senhoras, eu não tô empurrando.", fala: "Tô avisando. Quem quiser, eu tô aqui. Quem deixar pra depois, vai ver outras noivas vivendo o que podia ser dela." },
      { f: "S7. CTA forte", mostrar: "Tela com link", sticker: "Me chama agora.", arte: "" },
      { f: "S8. Acolhimento", mostrar: "Sua foto íntima", arte: "Mas eu não tô julgando.", fala: "Decisão é sua. Eu só tô deixando claro o que tá em jogo." },
      { f: "S9. Fechamento", mostrar: "Tela neutra", sticker: "Quer que eu te explique uma das coisas em particular?", arte: "Me chama no direct." },
    ],
    acao: "Início dos 7 dias finais. Mensagem privada para TODOS os leads abertos. Hoje é dia de retomada.",
  },

  {
    id: 30, ph: "s4", dt: "23/05", dn: "Sex, 23 mai",
    fmt: "Post estático", fn: "fundo",
    proto: "CEO Digital · Pós-oferta · Dia 2 — Produto como transformação",
    tipo: "Produto como transformação | Âncora emocional",
    vis: "Foto sua mais marcante da campanha.",
    cap: `Não vai receber só uma maquiagem de noiva.

Vai receber um processo que te leva de 'não sei exatamente o que quero, mas sei que não quero parecer outra pessoa' para 'essa sou eu, só que mais eu ainda.'

É isso que o Método Noiva ID entrega.

Maio ainda tem vagas. Faltam 8 dias.
Me chama.`,
    st: [
      { f: "S1. Abertura | Sexta", mostrar: "Você direto pra câmera", arte: "Sexta-feira. Faltam 8 dias.", fala: "Senhoras, hoje quero te mostrar o que você de fato leva quando fecha comigo." },
      { f: "S2. Headline", mostrar: "Tipografia forte", arte: "Não é maquiagem. É transformação.", fala: "Você entra com dúvida. Sai com clareza. Esse é o produto." },
      { f: "S3. A jornada interna", mostrar: "Tela com tipografia", arte: "Antes: 'Não sei o que quero, mas sei que não quero parecer outra pessoa.'", fala: "Toda noiva chega com essa frase, em algum nível. É a expressão da insegurança." },
      { f: "S4. O depois", mostrar: "Tela com tipografia diferente", arte: "Depois: 'Sou eu. Só que mais eu ainda.'", fala: "Essa é a frase do reconhecimento. E é o objetivo de tudo que eu faço aqui." },
      { f: "S5. Convite ao feed", mostrar: "Capa do post", arte: "Postei essa transformação no feed.", fala: "Toca lá. Lê devagar." },
      { f: "S6. Caixinha", mostrar: "Tela limpa", sticker: "Você está mais no antes ou já caminhando pro depois?", arte: "" },
      { f: "S7. Reforço da campanha", mostrar: "Tela elegante", arte: "Maio caminha pro fim.", fala: "Faltam 8 dias. Pantufa, viagem por sorteio, app, condição especial em privado. Quem entrar até dia 31 garante." },
      { f: "S8. Acolhimento", mostrar: "Sua foto serena", arte: "Esse depois pode ser o seu.", fala: "Mas só se você decidir agora." },
      { f: "S9. CTA", mostrar: "Tela com link", sticker: "Me chama no direct.", arte: "" },
    ],
    acao: "Post de ancoragem final da proposta.",
  },

  {
    id: 31, ph: "s4", dt: "24/05", dn: "Sáb, 24 mai",
    fmt: "Carrossel", fn: "fundo",
    proto: "CEO Digital · Pós-oferta · Dia 3 — Bônus como fator de decisão",
    tipo: "Bônus | Fator de decisão rápida",
    vis: "Carrossel mais elaborado. Cada benefício em slide próprio.",
    cap: `Podia cobrar só pelos bônus e já valeria o investimento.

Mas eles fazem parte de tudo, não são extras.

Faltam 7 dias.

Arrasta pra ver o que ainda está disponível em maio. 👉`,
    slides: [
      { n: "Capa", c: "Isso ainda está disponível em maio.\nSó até o dia 31." },
      { n: "Pantufa", c: "Pantufa personalizada com o seu hobby.\n\nNão é mimo. É a diferença entre quem entra agora e quem decide esperar.\n\nFeita para você. Entregue no dia do casamento." },
      { n: "Viagem", c: "Viagem pra Gramado, em setembro, pro casal.\n\n5 dias. Passagem aérea e hotel pagos.\n\nSorteio entre todas as noivas que fecharem em maio." },
      { n: "App", c: "App exclusivo do Noiva ID.\n\nVocê usa ao longo de todo o processo, antes mesmo de sentar na cadeira.\n\nSó as noivas que trabalham comigo têm acesso." },
      { n: "Condição especial", c: "A condição especial de maio.\n\nAlgo que faz parte da experiência. Trato em privado, com cada noiva.\nNão existe fora desse período." },
      { n: "O processo", c: "E o Método Noiva ID completo:\n\nLeitura da Essência · Direção Estética · Estrutura com Intenção · Refinamento de Imagem · Presença no Grande Dia\n\nO único processo que garante que você vai se reconhecer no altar." },
      { n: "CTA", c: "Faltam 7 dias.\n\nMe chama agora no direct.\nVamos conversar sobre o seu casamento. 🤍" },
    ],
    st: [
      { f: "S1. Abertura | Sábado", mostrar: "Você direto pra câmera, presença firme", arte: "Faltam 7 dias.", fala: "Senhoras, sábado. E só faltam 7 dias da campanha." },
      { f: "S2. Headline", mostrar: "Tipografia forte", arte: "Recap completo. Última oportunidade.", fala: "Vou repassar tudo que tá em jogo. Pra ninguém perder por falta de informação." },
      { f: "S3. Pantufa", mostrar: "Imagem da pantufa", arte: "Pantufa personalizada.", fala: "Pra todas que fecharem. Sua pra vida." },
      { f: "S4. Viagem", mostrar: "Imagem de Gramado", arte: "Viagem pra Gramado.", fala: "Sorteio entre todas. Pro casal. 5 dias em setembro com tudo pago." },
      { f: "S5. App", mostrar: "Tela do app", arte: "App exclusivo do Noiva ID.", fala: "Pra todas. Acesso completo." },
      { f: "S6. Condição especial", mostrar: "Tipografia delicada", arte: "Condição especial em privado.", fala: "Eu trato no direct. E é peso de verdade." },
      { f: "S7. Convite ao carrossel", mostrar: "Capa do carrossel", arte: "Tudo isso no carrossel do feed.", fala: "Toca lá. Salva. Compartilha." },
      { f: "S8. Caixinha", mostrar: "Tela limpa", sticker: "Qual desses bônus mais te chamou atenção?", arte: "" },
      { f: "S9. Provocação", mostrar: "Você direto pra câmera", arte: "Senhoras, eu não vou esperar você se decidir em junho.", fala: "Junho a campanha já encerrou. Tudo isso vai com ela." },
      { f: "S10. CTA", mostrar: "Tela com link", sticker: "Me chama agora.", arte: "" },
      { f: "S11. Acolhimento", mostrar: "Sua foto serena", arte: "Eu tô aqui. Mas só até dia 31.", fala: "" },
    ],
    acao: "Carrossel de conversão. Considerar impulsionar.",
  },

  {
    id: 32, ph: "s4", dt: "25/05", dn: "Dom, 25 mai",
    fmt: "Post estático", fn: "meio",
    proto: "CEO Digital · Pós-oferta · Dia 4 — Prova social como movimento",
    tipo: "Prova social | Movimento coletivo",
    vis: "Print de depoimento real ou foto sua com caption de prova de consistência.",
    cap: `Não é sobre acreditar em mim.

É sobre o que já aconteceu com as noivas que passaram por esse processo.

Resultados não mentem: olha o que está se repetindo em cada atendimento.

Se fosse sorte, teria acontecido uma vez.

Mas está acontecendo sempre.`,
    st: [
      { f: "S1. Abertura | Domingo", mostrar: "Você num momento real, ambiente quente", arte: "Domingo. Faltam 6 dias.", fala: "Senhoras, hoje quero descansar de mim e deixar elas falarem." },
      { f: "S2. Print 1 | Depoimento", mostrar: "Print real de WhatsApp ou comentário (se tiver autorização)", arte: "Senhoras, escutem.", fala: "Esse é o tipo de mensagem que eu recebo depois de cada atendimento." },
      { f: "S3. Print 2 | Outro depoimento", mostrar: "Outro print de noiva", arte: "Outra noiva. Outra história.", fala: "Mesma sensação." },
      { f: "S4. Headline", mostrar: "Tipografia forte", arte: "Resultados não mentem.", fala: "Quando histórias diferentes se repetem com o mesmo resultado, é método. Não é sorte." },
      { f: "S5. Convite ao feed", mostrar: "Capa do post", arte: "Postei sobre isso no feed.", fala: "Vai lá." },
      { f: "S6. Caixinha", mostrar: "Tela limpa", sticker: "Você quer ser uma dessas histórias?", arte: "" },
      { f: "S7. Reforço da campanha", mostrar: "Tela elegante", arte: "Maio fechando.", fala: "Faltam 6 dias. Pantufa, viagem por sorteio, app, condição especial. Quem fechar até dia 31 entra." },
      { f: "S8. Acolhimento", mostrar: "Sua foto íntima", arte: "Senhoras, vocês não vão se arrepender.", fala: "Cada uma que passou por aqui me confirma isso. E vocês podem ser as próximas." },
      { f: "S9. CTA", mostrar: "Tela com link", sticker: "Me chama no direct.", arte: "" },
    ],
    acao: "Se tiver depoimento real, usar como imagem. Print de WhatsApp converte mais do que copy.",
  },

  {
    id: 33, ph: "s4", dt: "26/05", dn: "Seg, 26 mai",
    fmt: "Reel", fn: "fundo",
    proto: "CEO Digital · Pós-oferta · Dia 5 — Benefícios ocultos",
    tipo: "Benefícios ocultos | Última sedução",
    vis: "Você falando direto. Tom mais direto. 40 segundos.",
    cap: `Faltam 5 dias de maio.

Se você está considerando, esse é o momento.

Me chama no direct.`,
    rot: `Você entra pelo resultado principal: uma maquiagem que é sua, no dia mais importante da vida.

Mas fica pelo que ninguém te contou antes de contratar:

Fica pela clareza. Pela segurança emocional. Pela certeza de que, quando olhar as fotos daqui a 20 anos, vai continuar se reconhecendo.

Esses ganhos não têm linha no orçamento.

São o que fica quando tudo passa.

Faltam 5 dias de maio.

Me chama agora.`,
    st: [
      { f: "S1. Abertura | Segunda", mostrar: "Você direto pra câmera, presença firme", arte: "5 dias.", fala: "Senhoras, faltam 5 dias. E hoje vou ser direta sobre o que vocês ganham além da maquiagem." },
      { f: "S2. Convite ao reel", mostrar: "Capa do reel", arte: "Reel novo. Curto. Direto.", fala: "Toca no feed." },
      { f: "S3. Headline", mostrar: "Tipografia forte", arte: "Você entra pela maquiagem. Fica pelo que ninguém te contou.", fala: "Clareza. Segurança. Certeza. Esses ganhos não estão no orçamento, mas são o que fica." },
      { f: "S4. Caixinha", mostrar: "Tela limpa", sticker: "O que mais te atrai: o resultado visual ou a transformação interna?", arte: "" },
      { f: "S5. Reforço da campanha", mostrar: "Tela elegante", arte: "Maio caminha pro fim.", fala: "Pantufa, viagem por sorteio, app, condição especial. Tudo isso pra noiva que fechar até dia 31." },
      { f: "S6. Provocação", mostrar: "Você direto pra câmera", arte: "Senhoras, sou eu. E sou agora.", fala: "Eu não vou ficar pedindo. Eu tô esperando. Quem quiser, sabe onde me achar." },
      { f: "S7. CTA forte", mostrar: "Tela com link", sticker: "Me chama agora.", arte: "" },
      { f: "S8. Acolhimento final", mostrar: "Sua foto serena", arte: "Mas eu confio em vocês.", fala: "" },
    ],
    acao: "Follow-up em todas as leads abertas. Último push de sedução antes do fechamento.",
  },

  {
    id: 34, ph: "s4", dt: "27/05", dn: "Ter, 27 mai",
    fmt: "Post estático", fn: "fundo",
    proto: "CEO Digital · Pós-oferta · Dia 6 — Escassez real",
    tipo: "Escassez real | Urgência sem clichê",
    vis: "Foto sua de autoridade. Caption de escassez real.",
    cap: `Se você esperar, vai assistir outras noivas conquistando o que poderia ser seu.

Não é ameaça. É fato.

A porta vai se fechar no dia 31 e as condições especiais, a pantufa, o app e o sorteio da viagem vão junto.

Faltam 4 dias.

A decisão é sua.`,
    st: [
      { f: "S1. Abertura | 4 dias", mostrar: "Você direto pra câmera, presença firme", arte: "4 dias.", fala: "Senhoras, terça-feira. E faltam 4 dias pra essa janela fechar." },
      { f: "S2. Headline | Escassez real", mostrar: "Tipografia forte", arte: "Se você esperar, vai assistir outras noivas conquistando o que poderia ser seu.", fala: "Não é ameaça. É fato. Em junho, eu não tenho mais isso pra oferecer." },
      { f: "S3. Recap rápido", mostrar: "Tela com lista visual", arte: "Pantufa. Viagem. App. Condição especial.", fala: "Quem fechar até dia 31, garante. Ponto." },
      { f: "S4. Convite ao feed", mostrar: "Capa do post", arte: "Postei essa escassez real no feed.", fala: "Vai lá." },
      { f: "S5. Caixinha", mostrar: "Tela limpa", sticker: "Você ainda tá considerando?", arte: "Me chama. Vamos conversar." },
      { f: "S6. Provocação", mostrar: "Você direto pra câmera", arte: "Senhoras, vocês decidem.", fala: "Eu fiz minha parte. Mostrei o método, mostrei o app, mostrei tudo que tá em jogo. A decisão é sua." },
      { f: "S7. CTA", mostrar: "Tela com link", sticker: "Me chama no direct.", arte: "" },
      { f: "S8. Acolhimento", mostrar: "Sua foto serena", arte: "Mas eu confio. Vocês sabem o que fazer.", fala: "" },
    ],
    acao: "Leads que abriram conversa mas não fecharam, retomar hoje com mensagem direta e personalizada.",
  },
];

export default SEMANA_4;
