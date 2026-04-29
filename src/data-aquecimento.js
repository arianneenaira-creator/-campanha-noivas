// THE BRIDAL ELEGANCE — DADOS DA CAMPANHA MÊS DAS NOIVAS
// Cada story tem: f (label), mostrar, arte, fala (e às vezes sticker)

export const D = [
  // ════════════════════════════════════════════════════════
  // AQUECIMENTO (24–30 abr) — Vitale + suspense da viagem
  // ════════════════════════════════════════════════════════

  {
    id: 1, ph: "aq", dt: "24/04", dn: "Qui, 24 abr",
    fmt: "Post estático", fn: "topo",
    proto: "Vitale · Aquecimento · Antecipação + Suspense viagem",
    tipo: "Antecipação | Mistério",
    vis: "Foto sua olhando para câmera em ambiente do studio. Fundo limpo. Sem texto sobreposto.",
    cap: `Maio vai ser diferente aqui.

Decidi dedicar esse mês inteiro para as noivas que passam pelo meu perfil.

Vou mostrar coisas que nunca mostrei, contar histórias que sempre ficaram nos bastidores e abrir espaço para quem está planejando o casamento e quer mais do que uma maquiagem.

Se você está noiva, ou conhece alguém que está, acompanha.`,
    st: [
      { f: "S1. Abertura | Provocação", mostrar: "Detalhe do studio em luz natural ou você de costas olhando algo", arte: "Faltam 7 dias.", fala: "Senhoras, eu venho preparando algo há semanas. E começa em maio." },
      { f: "S2. Curiosidade | Headline", mostrar: "Fundo neutro com tipografia elegante", arte: "Quem fechar em maio vai ter algo que ninguém vê por aqui.", fala: "Eu construí esse mês pensando nas noivas que estão me acompanhando. Tem condições especiais que ficam só entre mim e a noiva. E tem uma surpresa que vai virar a chave da decisão de muita gente." },
      { f: "S3. Incômodo | Toca a dor", mostrar: "Noiva no celular rolando referências (foto sua ou de bastidor)", arte: "Você passa horas no Pinterest e ainda não sabe quem você quer ser nesse dia.", fala: "É a noiva mais comum que chega aqui. Cheia de referências lindas. E nenhuma delas é ela." },
      { f: "S4. Conexão | Identificação", mostrar: "Print de áudio ou conversa de noiva (real ou simulada)", arte: '"Tenho medo de ficar bonita, mas não ser eu."', fala: "Se você já sentiu isso, presta atenção essa semana. O que vem em maio foi pensado pra essa noiva." },
      { f: "S5. Caixinha | Abertura de conversa", mostrar: "Tela limpa com sticker de caixinha", sticker: "Qual é o seu maior medo na sua maquiagem de noiva?", arte: "Me conta. Vou ler todas." },
      { f: "S6. Suspense | Pista da viagem", mostrar: "Vídeo curto de bagagem sendo preparada, mala, ou paisagem (sem dar a localização)", arte: "Tem uma surpresa em maio que ninguém imagina.", fala: "Não vou contar agora. Mas se eu te disser que pode mudar a forma como você vai começar a vida de casada, você acreditaria? Aguarda o dia 1." },
      { f: "S7. Direção | O que fazer", mostrar: "Você sorrindo, calma, olhando para câmera", arte: "Não saia daqui essa semana.", fala: "Cada dia até o dia primeiro eu vou contar uma parte. Quando maio chegar, você vai entender por que vai valer a pena ter ficado." },
      { f: "S8. Acolhimento | Conexão final", mostrar: "Foto sua mais íntima ou cena de cuidado", arte: "A caminhada não foi fácil. Mas valeu a pena.", fala: "Você está há meses planejando cada detalhe. Quando chegar aqui, eu quero que a primeira coisa que sinta seja, vai dar certo." },
      { f: "S9. Caixinha de fechamento | Qualificação", mostrar: "Tela neutra", sticker: "Você está noiva 2026 ou 2027?", arte: "Marca aqui. Quero saber quem está comigo." },
    ],
    acao: "Responder cada resposta da caixinha individualmente. Esse é o início da lista de leads quentes.",
  },

  {
    id: 2, ph: "aq", dt: "25/04", dn: "Sex, 25 abr",
    fmt: "Carrossel", fn: "topo",
    proto: "Vitale · Aquecimento + CEO: Erro comum",
    tipo: "Erro comum | Consciência inicial",
    vis: "Slides com fundo branco ou creme, tipografia elegante. Texto como protagonista. Máximo 8 slides.",
    cap: `Contratar uma maquiadora parece simples.

Mas existe uma diferença enorme entre uma maquiagem bonita e uma maquiagem que é sua.

Salva esse carrossel e usa quando estiver pesquisando.`,
    slides: [
      { n: "Capa", c: "5 perguntas que toda noiva deveria fazer antes de contratar uma maquiadora." },
      { n: "Slide 2", c: "Ela te conhece ou só conhece maquiagem?\n\nUma boa maquiadora não começa pelo produto. Começa por você. Se no primeiro contato ela só falou sobre técnica e portfólio, é um sinal de alerta." },
      { n: "Slide 3", c: "Ela vai estar lá no dia do casamento?\n\nParece óbvio, mas não é. Muitas maquiadoras fazem a produção e somem. O grande dia precisa de alguém presente, não só de uma maquiagem pronta." },
      { n: "Slide 4", c: "Como ela lida com o que você não gosta em você?\n\nSe você tem algo no rosto que te incomoda e ela nunca perguntou sobre isso, ela não está fazendo uma maquiagem sua. Está fazendo uma maquiagem qualquer." },
      { n: "Slide 5", c: "O que acontece se a maquiagem não for o que você esperava no dia?\n\nVocê precisa ter segurança de que dá para ajustar. Uma maquiadora que trabalha com método não entrega e sai. Ela acompanha." },
      { n: "Slide 6", c: "Você vai se reconhecer ou vai parecer diferente?\n\nEssa é a pergunta mais importante. A maquiagem do casamento não é sobre ficar irreconhecível. É sobre ser você, no seu melhor." },
      { n: "CTA", c: "Se você está planejando o casamento e ainda tem dúvidas sobre isso, me manda uma mensagem. Vamos conversar sobre o seu grande dia." },
    ],
    st: [
      { f: "S1. Abertura | Provocação", mostrar: "Detalhe sutil — caderno aberto, anel, copo de café", arte: "6 dias.", fala: "Senhoras, antes de qualquer coisa eu queria abrir uma reflexão com vocês." },
      { f: "S2. Headline | Curiosidade", mostrar: "Tela neutra com tipografia", arte: "Você está fazendo as perguntas certas?", fala: "Toda noiva pesquisa muito. Mas nem toda noiva pesquisa com critério." },
      { f: "S3. Incômodo | Padrão", mostrar: "Noiva olhando portfólios no celular", arte: "Você olha o portfólio e acha bonito.", fala: "Aí marca o preview. Aí fecha. Aí chega no dia e percebe que aquela maquiagem não fala sobre você." },
      { f: "S4. Quebra de padrão", mostrar: "Você falando direto pra câmera", arte: "Ver portfólio é o último passo.", fala: "Não o primeiro. Senhoras, antes do portfólio existem cinco perguntas. Postei elas no feed agora." },
      { f: "S5. Convite ao feed (com peso)", mostrar: "Print do carrossel ou capa com sobreposição", arte: "Salva. Você vai usar isso na sua pesquisa.", fala: "Não é teoria. É roteiro de quem está na frente do trabalho há anos." },
      { f: "S6. Caixinha | Qualificação", mostrar: "Tela limpa com sticker", sticker: "Você já fez essas 5 perguntas pra alguma maquiadora?", arte: "Me conta. Sem julgamento." },
      { f: "S7. Suspense | Pista da viagem", mostrar: "Detalhe atmosférico — luz dourada, paisagem desfocada", arte: "E em maio tem mais.", fala: "Quem fechar em maio entra em algo que ninguém imagina ainda. Aguarda o dia primeiro." },
      { f: "S8. Conexão | Acolhimento", mostrar: "Você no studio, sorrindo", arte: "Eu não construo maquiagem em série.", fala: "Cada noiva que entra aqui é tratada como única. Por isso essas perguntas existem." },
      { f: "S9. Direção", mostrar: "Tela com seta para o feed", arte: "Toca no feed. Salva. Compartilha com a noiva ou madrinha que precisa ler.", fala: "Senhoras, mandem isso pra outras mulheres. Toda noiva merece chegar no altar se reconhecendo." },
      { f: "S10. Caixinha de fechamento", mostrar: "Tela neutra", sticker: "Você quer que eu te mande quando o dia 1 chegar?", arte: "Me chama no direct." },
    ],
    acao: "Salvar respostas da caixinha. Quem responde 'sim' vira lista pra mensagem privada no dia 1.",
  },

  {
    id: 3, ph: "aq", dt: "26/04", dn: "Sáb, 26 abr",
    fmt: "Reel", fn: "topo",
    proto: "Vitale · Aquecimento · Reel emocional",
    tipo: "Narrativa de dor | Posicionamento emocional",
    vis: "Talking head de 40 a 50 segundos. Studio ou fundo clean, boa iluminação. Tom de conversa próxima.",
    cap: `O que faz uma noiva se emocionar ao se ver pronta?

Não é a técnica. É o reconhecimento.

A sensação de que aquela é ela, no dia mais importante da vida.`,
    rot: `Você não precisa de uma maquiagem perfeita no dia do seu casamento.

Você precisa de uma maquiagem que seja sua.

E existe uma diferença enorme entre as duas.

Maquiagem perfeita é aquela que impressiona todo mundo na sala. Que o fotógrafo ama. Que fica bonita em qualquer foto.

Maquiagem que é sua é aquela que, quando você se olha antes de sair, você pensa: sou eu. Só que no meu melhor.

A segunda é muito mais rara.

Ela exige que a maquiadora te conheça. De verdade.

Não só o seu rosto. Você.`,
    st: [
      { f: "S1. Provocação", mostrar: "Noiva de costas, segurando o vestido", arte: "Existe uma diferença entre ficar bonita e ser você.", fala: "" },
      { f: "S2. Continuação", mostrar: "Você falando direto pra câmera", arte: "E a segunda é muito mais rara.", fala: "Senhoras, eu fiz um reel sobre isso. Se você está noiva, precisa ouvir." },
      { f: "S3. Convite ao reel", mostrar: "Capa do reel", arte: "Toca no feed.", fala: "É curtinho. Mas eu prometo que muda a forma como você vai ver o seu próprio casamento." },
      { f: "S4. Identificação | Print de áudio", mostrar: "Print de mensagem de noiva (real ou simulada)", arte: '"Eu não quero parecer outra pessoa no altar."', fala: "Foi isso que ela me disse antes do preview. E foi exatamente isso que mudou tudo no resultado." },
      { f: "S5. Caixinha | Reflexão", mostrar: "Tela limpa com sticker", sticker: "O que você mais quer sentir quando se ver pronta no seu casamento?", arte: "Me conta. Vou guardar cada resposta." },
      { f: "S6. Conexão | Bastidor", mostrar: "Mão sua trabalhando, ambiente concentrado", arte: "Aqui nada é no automático.", fala: "Cada escolha tem propósito. Cada produto foi pensado pra noiva específica que está sentada na cadeira." },
      { f: "S7. Madrinhas", mostrar: "Foto ou bastidor com madrinhas", arte: "E quando elas chegam, o ar muda.", fala: "As madrinhas entram, o studio vira casa de mulher. É risada, é abraço, é foto. Esse making of é um dos capítulos mais bonitos do casamento." },
      { f: "S8. Suspense | Pista da viagem", mostrar: "Detalhe atmosférico — café, livro, manhã", arte: "E tem algo em maio que vai além de tudo isso.", fala: "Aguarda o dia primeiro. Eu vou contar tudo." },
      { f: "S9. Acolhimento", mostrar: "Foto sua mais íntima", arte: "A caminhada não foi fácil.", fala: "Mas valeu a pena. Quando você chegar aqui, eu quero que a primeira coisa que sinta seja, vai dar certo." },
      { f: "S10. Direção", mostrar: "Tela com indicação para o feed", arte: "Toca no reel. Salva. Compartilha.", fala: "Manda pra noiva ou pra madrinha que precisa ouvir isso hoje." },
      { f: "S11. Caixinha de fechamento", mostrar: "Tela neutra", sticker: "Você está noiva de 2026 ou 2027?" },
    ],
    acao: "Comentários e respostas da caixinha são ouro. Responder cada uma com atenção real.",
  },

  {
    id: 4, ph: "aq", dt: "27/04", dn: "Dom, 27 abr",
    fmt: "Post estático", fn: "meio",
    proto: "Vitale · Aquecimento · Apresentação da experiência",
    tipo: "Posicionamento de produto | Apresentação da experiência",
    vis: "Foto do studio ou foto sua em ambiente premium. Caption apresenta a experiência como narrativa.",
    cap: `Não é só uma maquiagem. É uma experiência.

O The Bridal Elegance começa com uma conversa. Quero saber quem você é, seu estilo, sua história, o que você quer guardar de si mesma nesse dia. Isso vira a base de tudo que vem depois.

Nada aqui é padronizado. Cada detalhe da sua maquiagem foi pensado para você, não para uma noiva genérica.

No dia do casamento, estou lá. Do início ao fim da preparação. Sem pressa, sem tensão.

Maio é o Mês das Noivas aqui no estúdio. Se você está planejando o casamento, me chama.`,
    st: [
      { f: "S1. Abertura", mostrar: "Ambiente do studio em luz natural", arte: "Domingo.", fala: "Senhoras, hoje é dia de mostrar pra vocês como é uma experiência aqui dentro." },
      { f: "S2. Headline", mostrar: "Tela limpa com tipografia", arte: "O The Bridal Elegance não é uma maquiagem.", fala: "É uma experiência inteira. Que começa muito antes do dia do casamento." },
      { f: "S3. Construção | O que muda", mostrar: "Detalhe de produto, cabelo, paleta", arte: "Antes de abrir qualquer produto, eu preciso saber quem você é.", fala: "Por isso o The Bridal Elegance começa com uma conversa. E não com uma agenda." },
      { f: "S4. Convite ao feed", mostrar: "Capa do post", arte: "Postei a experiência inteira no feed.", fala: "Toca lá. Vale a pena ler com calma." },
      { f: "S5. Conexão | Bastidor", mostrar: "Ambiente do studio, atmosfera", arte: "Aqui nada acontece com pressa.", fala: "Você não chega pra ser produzida. Você chega pra viver um momento que vai começar a primeira página da sua história de casada." },
      { f: "S6. Caixinha | Qualificação", mostrar: "Tela limpa com sticker", sticker: "Você quer entender mais sobre o The Bridal Elegance?", arte: "Me chama no direct. Vou te explicar." },
      { f: "S7. Suspense | Pista da viagem", mostrar: "Detalhe sugestivo — relógio, ponteiros marcando algo", arte: "Faltam 4 dias.", fala: "E eu já te adianto: o que vem aí, vai mudar a forma como você vai pensar em maio." },
      { f: "S8. Posicionamento", mostrar: "Foto sua falando direto", arte: "Existe um motivo pelo qual minhas noivas chegam ao altar sem medo.", fala: "Não é sorte. É processo." },
      { f: "S9. Caixinha de fechamento", mostrar: "Tela neutra", sticker: "Qual é a maior dúvida sua sobre a sua maquiagem de noiva?" },
    ],
    acao: "Respostas da caixinha viram conteúdo dos próximos dias. Nomear medos sem identificar noivas.",
  },

  {
    id: 5, ph: "aq", dt: "28/04", dn: "Seg, 28 abr",
    fmt: "Carrossel", fn: "meio",
    proto: "Vitale · Aquecimento · Método Noiva ID",
    tipo: "Autoridade | Apresentação do método",
    vis: "Layout premium, clean. 5 pilares numerados. Paleta branco, nude e dourado. Texto fluido e elegante.",
    cap: `Faz tempo que queria mostrar o que está por trás do meu trabalho com noivas.

Não é técnica. É método.

Salva esse carrossel.`,
    slides: [
      { n: "Capa", c: "Toda noiva quer estar bonita.\nA minha quer se reconhecer.\n\nO Método Noiva ID — os 5 pilares." },
      { n: "Pilar 1 — Leitura da Essência", c: "Antes de abrir qualquer produto, preciso saber quem você é.\n\nSeu estilo, sua energia, o que te incomoda, o que te deixa confiante.\n\nNão é protocolo. É o começo de tudo." },
      { n: "Pilar 2 — Direção Estética", c: "Com base em quem você é, construo a direção visual da sua maquiagem.\n\nNão é uma referência copiada do Pinterest.\nÉ uma estética desenhada para você, para esse dia específico." },
      { n: "Pilar 3 — Estrutura com Intenção", c: "Cada passo tem propósito. Cada produto foi escolhido pensando na sua pele, na durabilidade, na iluminação do seu casamento.\n\nNada aqui é aleatório." },
      { n: "Pilar 4 — Refinamento de Imagem", c: "Detalhe por detalhe, refinamos até que o resultado seja exatamente você, com o melhor que você pode ser.\n\nNão mais. Não menos." },
      { n: "Pilar 5 — Presença no Grande Dia", c: "No dia do casamento, estou lá.\n\nNão só para fazer a maquiagem. Para garantir que você entre no altar se sentindo inteira, segura e reconhecível." },
      { n: "CTA", c: "Quando você passa pelo Noiva ID, não contrata uma maquiadora.\n\nVocê garante que vai ser você mesma no dia mais importante da sua vida.\n\nEsse método é aplicado dentro do The Bridal Elegance. Se quiser entender mais, me chama." },
    ],
    st: [
      { f: "S1. Abertura", mostrar: "Capa do carrossel ou tipografia elegante", arte: "Hoje eu vou te mostrar o que está por trás do meu trabalho.", fala: "Senhoras, segunda-feira pedindo um conteúdo de peso. Aqui está." },
      { f: "S2. Headline | Quebra", mostrar: "Tela neutra", arte: "Não é técnica. É método.", fala: "Existe uma diferença enorme entre ter experiência e ter um método. E hoje eu vou te explicar essa diferença." },
      { f: "S3. Pilar 1 | Provocação", mostrar: "Detalhe de mão trabalhando", arte: "Antes de abrir qualquer produto, eu preciso saber quem você é.", fala: "Esse é o primeiro pilar. Leitura da Essência. Sem isso, nenhuma maquiagem fica realmente sua." },
      { f: "S4. Pilar 3 | Quebra de mito", mostrar: "Produtos escolhidos no balcão", arte: "Cada escolha de produto foi pensada pra você.", fala: "Não é maquiagem em série. Não é produto que tá na moda. É escolha consciente, de acordo com a sua pele, sua iluminação, seu casamento." },
      { f: "S5. Convite ao feed", mostrar: "Capa do carrossel", arte: "Os 5 pilares completos estão no feed.", fala: "É o conteúdo mais completo que eu já publiquei sobre o meu trabalho. Toca lá. Salva." },
      { f: "S6. Caixinha", mostrar: "Tela limpa", sticker: "Qual desses 5 pilares mais te chamou atenção?", arte: "Me conta." },
      { f: "S7. Conexão | Por que fiz isso", mostrar: "Você falando direto pra câmera", arte: "Eu construí esse método porque eu cansei de ver o oposto.", fala: "Cansei de ver noiva sair de produção sem se reconhecer. Cansei de ouvir: ficou linda, mas não sou eu. E aí eu decidi mudar como eu trabalho." },
      { f: "S8. Suspense | Pista da viagem", mostrar: "Detalhe sugestivo — passagem, mala, paisagem", arte: "Faltam 3 dias.", fala: "E o que vem em maio é a aplicação prática desse método. Com algo que ninguém imagina ainda." },
      { f: "S9. Acolhimento", mostrar: "Foto sua mais íntima", arte: "Você merece chegar ao altar se reconhecendo.", fala: "Não menos. Não diferente. Você. No seu melhor." },
      { f: "S10. Madrinhas", mostrar: "Bastidor com madrinhas", arte: "E suas madrinhas também merecem ser cuidadas no dia.", fala: "O dia não é só de quem casa. É de quem foi escolhida pra estar ao lado." },
      { f: "S11. Direção", mostrar: "Tela com indicação", arte: "Toca no carrossel do feed. Salva. Manda pra alguém que precisa ler.", fala: "" },
      { f: "S12. Caixinha de fechamento", mostrar: "Tela neutra", sticker: "Você gostaria de passar pelo Método Noiva ID?", arte: "Me chama no direct." },
    ],
    acao: "Conteúdo de maior autoridade do aquecimento. Repostar nos stories ao longo do dia.",
  },

  {
    id: 6, ph: "aq", dt: "29/04", dn: "Ter, 29 abr",
    fmt: "Post estático", fn: "meio",
    proto: "Vitale · Aquecimento · Prova social + bastidor",
    tipo: "Prova social | Bastidor real",
    vis: "Foto de atendimento recente ou detalhe de produção. Tom quente, real, próximo.",
    cap: `O studio já está preparado para o que vem em maio.

Essa semana recebi muitas mensagens de noiva, e isso me deixa feliz demais.

Cada noiva que passa por aqui leva com ela mais do que uma maquiagem pronta. Leva a tranquilidade de ter sido cuidada de verdade.

Amanhã tem novidade. Acompanha.`,
    st: [
      { f: "S1. Abertura | Bastidor real", mostrar: "Clipe do studio, detalhe da preparação", arte: "O studio já está preparado.", fala: "Senhoras, o que vem em maio começa a ser construído aqui dentro desde semanas atrás." },
      { f: "S2. Conexão", mostrar: "Mensagens de noivas (com contraste de cor sobre)", arte: "Essa semana eu recebi muitas mensagens.", fala: "E isso me deixa de coração quentinho. Cada noiva que me procura, eu trato como única." },
      { f: "S3. Caixinha | Identificação", mostrar: "Tela limpa", sticker: "Você está pesquisando ou já decidiu fechar com alguém?" },
      { f: "S4. Posicionamento", mostrar: "Print de mensagem real (se tiver autorização) ou seu rosto sereno", arte: "Cada noiva que passa por aqui leva mais do que uma maquiagem pronta.", fala: "Leva a tranquilidade de ter sido cuidada de verdade. Isso não tem preço." },
      { f: "S5. Provocação", mostrar: "Você falando direto", arte: "Senhoras, o que vem amanhã é o anúncio oficial.", fala: "E eu vou usar todos os meus stories pra revelar." },
      { f: "S6. Suspense | Pista da viagem", mostrar: "Algo que sugere viagem — mala, calendário em setembro, relógio", arte: "Faltam 2 dias.", fala: "E o que vem em maio, vocês não imaginam ainda. Aguarda o dia primeiro." },
      { f: "S7. Acolhimento", mostrar: "Foto sua mais íntima", arte: "Eu estou aqui pra te servir.", fala: "No dia mais importante da sua vida. E talvez também em outros que vêm depois dele." },
      { f: "S8. Madrinhas", mostrar: "Bastidor com madrinhas (se tiver)", arte: "Senhoras, marca aqui aquela amiga.", fala: "A madrinha que está acompanhando o casamento da noiva. Esse mês também é dela." },
      { f: "S9. Direção", mostrar: "Tela com indicação", arte: "Não saia daqui amanhã.", fala: "Eu vou contar tudo. E o que eu vou abrir, é maior do que tudo que eu já ofereci." },
      { f: "S10. Caixinha de fechamento", mostrar: "Tela neutra", sticker: "Você quer que eu te avise quando for o anúncio?", arte: "Me chama no direct." },
    ],
    acao: "Anotar quem responde a caixinha de aviso. Mandar mensagem privada amanhã às 7h45.",
  },

  {
    id: 7, ph: "aq", dt: "30/04", dn: "Qua, 30 abr",
    fmt: "Reel", fn: "meio",
    proto: "Vitale · Aquecimento · Anúncio oficial (véspera)",
    tipo: "Antecipação máxima | Abertura do mês",
    vis: "Talking head de 40 a 50 segundos. Tom mais solene, íntimo. Posta perto das 18h.",
    cap: `Amanhã começa o Mês das Noivas aqui no estúdio.

Vou passar maio inteiro mostrando o que está por trás do meu trabalho com noivas. Histórias reais, método, bastidores, e muito conteúdo para quem está planejando o casamento e quer entender o que é uma experiência de verdade.

Se você está noiva, ou conhece alguém que está, manda esse post. Maio vai ser especial. 🤍`,
    rot: `Amanhã começa o Mês das Noivas aqui no meu perfil.

E eu começo esse reel dizendo algo que a maioria das profissionais de beleza bridal não diz:

O objetivo não é você ficar bonita.

O objetivo é você entrar no altar, se ver pronta, e sentir que aquele rosto é o seu. Com toda a sua identidade, sua história, sua forma de ser.

Esse mês vou mostrar o método, os bastidores e as histórias reais por trás de cada noiva que passou por aqui.

E vou apresentar condições especiais, e uma surpresa que vai mudar o jogo, pra quem fechar em maio.

Se você está noiva, ou conhece alguém que está, marca aqui nos comentários.

Nos vemos amanhã.`,
    st: [
      { f: "S1. Abertura | Quebra", mostrar: "Você direto pra câmera, calma, presença forte", arte: "Amanhã.", fala: "Senhoras, amanhã começa o Mês das Noivas. E eu venho preparando isso há semanas." },
      { f: "S2. Headline", mostrar: "Tela neutra", arte: "Não é uma campanha comum.", fala: "É a primeira vez que eu vou abrir condições assim aqui dentro. E eu preciso que vocês prestem atenção em cada story de hoje." },
      { f: "S3. Construção | A noiva que eu chamo", mostrar: "Detalhe sutil — flor, vestido, ambiente", arte: "Esse mês foi pensado pra noiva que não quer só ficar bonita.", fala: "Foi pensado pra noiva que quer entrar no altar se reconhecendo. Que quer chegar nessas fotos daqui a 20 anos e continuar enxergando ela mesma ali." },
      { f: "S4. Convite ao reel", mostrar: "Capa do reel", arte: "Postei o reel oficial no feed.", fala: "Toca lá. Compartilha. Marca quem precisa ver." },
      { f: "S5. Caixinha | Qualificação", mostrar: "Tela limpa", sticker: "Você está noiva e quer entender se faz sentido pro seu casamento?" },
      { f: "S6. Suspense | Pista da viagem (forte)", mostrar: "Vídeo sugestivo — paisagem, vinho, algo de Gramado mas sem entregar", arte: "E uma das minhas noivas de maio vai ter algo que vai além do casamento.", fala: "Não vou contar agora. Mas é grande. É o tipo de coisa que muda como você vai começar a vida de casada." },
      { f: "S7. Os outros benefícios | Sem entregar tudo", mostrar: "Ícones ou tela elegante com a lista", arte: "Pantufa personalizada. Condição especial em privado. App exclusivo do Noiva ID.", fala: "Tudo isso pra quem fechar em maio. Mais o que eu vou revelar amanhã." },
      { f: "S8. Provocação", mostrar: "Tela com tipografia forte", arte: "Imagina chegar do casamento e ainda estar vivendo a recompensa em setembro.", fala: "Esse pode ser o seu setembro. Aguarda o dia primeiro." },
      { f: "S9. Posicionamento", mostrar: "Você falando direto, com peso", arte: "Eu não construí essa campanha pra encher agenda.", fala: "Construí pra entregar valor. Pra noiva que está acompanhando aqui há tempo, e merece ser tratada com peso." },
      { f: "S10. Madrinhas", mostrar: "Foto ou bastidor com madrinhas", arte: "E suas madrinhas, marca elas aqui.", fala: "Esse mês também é delas. Toda noiva que fechar tem prioridade no atendimento das madrinhas no dia do casamento." },
      { f: "S11. Acolhimento | Frase real", mostrar: "Foto sua mais íntima", arte: "A caminhada não foi fácil. Mas valeu a pena.", fala: "Você está há meses planejando cada detalhe desse dia. Quando chegar aqui, eu quero que a primeira coisa que sinta seja, vai dar certo." },
      { f: "S12. Direção | CTA suave", mostrar: "Tela com tipografia", arte: "Senhoras, amanhã às 8 da manhã eu solto o anúncio oficial.", fala: "Não saia daqui. Não desliga as notificações. O que vem amanhã, vale cada minuto da sua atenção." },
      { f: "S13. Caixinha | Ativação", mostrar: "Tela neutra", sticker: "Você vai estar aqui amanhã?", arte: "Me responde sim." },
      { f: "S14. Fechamento emocional", mostrar: "Sua foto mais íntima ou cena de uma noiva pronta", arte: "Não tem preço. Eterniza por gerações.", fala: "Senhoras, amanhã eu estarei aqui esperando vocês. E o que eu vou abrir, eu construí pensando em cada uma." },
    ],
    acao: "Postar o reel às 18h. Antes de dormir, mensagem privada para todas que pediram aviso.",
  },
];

export default D;
