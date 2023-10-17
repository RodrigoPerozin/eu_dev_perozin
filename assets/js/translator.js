const initTranslator = () => {
  i18next.init({
      lng: 'pt', 
      debug: false,
      resources: {
        pt: {
          translation: {
            "main-title": `EU DEV PEROZIN`,
            "headerButtonAbout": `Sobre`,
            "headerButtonStacks": `Habilidades`,
            "headerButtonContact": `Contato`,
            "abouttxt-1": `Olá, meu nome é Rodrigo Destri Perozin, tenho 20 anos, sou estudante e profissional da área de 
              Análise e Desenvolvimento de Sistemas (ADS). Se eu fosse me classificar em nível profissional, diria
              que sou Junior/Pleno, até porque estudo e me interesso pela área desde 2014.
              Minha formação atualmente é:`,
            "abouttxt-2": `Técnico de Análise e Desenvolvimento de Sistemas`,
            "abouttxt-3": `Bacharel em Análise e Desenvolvimento de Sistemas`,
            "abouttxt-4": `Sempre tive curiosidade de saber como funcionam os sistemas e sites, como eram criados, não fazia ideia, 
              até que um dia comecei a procurar tutoriais de como criar sistemas, sites, e a partir daí sempre mantive 
              contato com a área. Ao final do ensino médio, concluí o curso técnico (citado acima), e pude ter contato com diversos 
              tecnologias e conceitos na área de programação. Agora, estou me formando em Bacharelado em Análise e Desenvolvimento 
              de Sistemas, e além disso, já tive experiência no mercado de trabalho, e não parei desde então, abaixo estão meus 
              experiências no mercado de trabalho:`,
            "abouttxt-5": `Compania`,
            "abouttxt-6": `Ocupação`,
            "abouttxt-7": `Duração`,
            "abouttxt-8": `Categoria`,
            "abouttxt-9": `Desenvolvedor Full Stack`,
            "abouttxt-10": `1a 11m`,
            "abouttxt-11": `Híbrido`,
            "abouttxt-12": `Desenvolvedor Junior|Suporte ao usuário`,
            "abouttxt-13": `3m`,
            "abouttxt-14": `Remoto`,
            "abouttxt-15": `Ao longo da minha experiência profissional, aprendi a manter 
              em códigos, criar novas funções e telas em um sistema, analisar 
              de um sistema, tenha forte comunicação com a equipe para o bem 
              progresso do projeto, aprendi muito sobre análise de regras de negócios 
              e quão importantes são para o processo de trabalho baseado nas demandas. 
              Faz grande uso de metodologias para evoluir e organizar o trabalho, 
              tornando-os mais rápidos e completos, como a metodologia 
              <b>Kanban</b>, que funciona como ilustra a imagem abaixo:`,
            "abouttxt-16": `Kanban é uma metodologia visual de gerenciamento de processos que se baseia 
              em cartões visuais para representar tarefas em um quadro. Cada carta representa 
              uma atividade e percorre colunas indicando seu status no fluxo de trabalho, 
              geralmente dividido em etapas como "To Do", "In Progress" e "Done". 
              O sistema visa otimizar a eficiência limitando o trabalho em andamento para evitar 
              sobrecarregar e identificar gargalos. A abordagem permite uma resposta flexível às mudanças 
              prioridades, melhorando a transparência e a comunicação dentro da equipe. Kanban é 
              especialmente eficaz em contextos de desenvolvimento ágil, onde a visibilidade e o controle 
              do fluxo de trabalho são cruciais para a entrega contínua de valor.`,
            "abouttxt-17": `Também trabalhei com a metodologia Scrum de trabalho dividida em <b>sprints</b>, que funciona 
              da seguinte forma: O trabalho dividido em sprints é um conceito fundamental no framework ágil 
              Scrum. Um sprint é um período fixo de tempo, geralmente de duas a quatro semanas, durante o qual 
              uma equipe se compromete a entregar incrementos de produtos funcionais. No início de cada sprint, existem 
              metas definidas e itens prioritários para o backlog do produto. A equipe então planeja como alcançar 
              esses objetivos durante o sprint. Durante o sprint, reuniões diárias de sincronização convocadas 
              Scrum diário. Ao final do sprint, há uma revisão, onde é demonstrado o trabalho concluído 
              e o feedback é recebido.`,
            "abouttxt-18": `Agora que você leu um pouco sobre minhas experiências, que tal conhecer minhas intenções para o futuro? 
              Bom, daqui a alguns anos me vejo produzindo soluções e resolvendo problemas para o mundo, facilitando a vida 
              de pessoas e impactando o dia a dia de todos com minhas inovações. Quero me aventurar, descobrir, 
              me desafiar no meu próprio negócio, quem sabe? Talvez tudo dependa das minhas ações e da minha vontade de fazer 
              coisas acontecem. Todos estamos aprendendo constantemente, mesmo quando cometemos erros estamos aprendendo alguma coisa, portanto, 
              Tentarei aproveitar cada descoberta, erro ou acerto, para me fortalecer e ser um profissional mais completo!`,
            "abouttxt-19": `Voltar ao topo`
          }
        },
        en: {
          translation: {
            "main-title": `PEROZIN DEV`,
            "headerButtonAbout": `About`,
            "headerButtonStacks": `Stacks`,
            "headerButtonContact": `Contact`,
            "abouttxt-1": `Hello, my name is Rodrigo Destri Perozin, I am 20 years old, I am a student and professional in the field of
              Systems Analysis and Development (ADS). If I were to classify myself at a professional level, I would say
              I am Junior/Full, especially because I have been studying and interested in the area since 2014.
              My background is currently:`,
            "abouttxt-2": `Systems Analysis and Development Technician`,
            "abouttxt-3": `Bachelor in Systems Analysis and Development`,
            "abouttxt-4": `I was always curious to know how systems and websites work, how they were created, I had no idea,
              until one day I started looking for tutorials on how to create systems, websites, and from then on I always kept
              contact with the area. At the end of high school, I completed the technical course (mentioned above), and was able to have contact with several
              technologies and concepts in the area of programming. Now, I'm graduating with a Bachelor's degree in Analytics and Development
              of Systems, and in addition, I already had experience in the job market, and I haven't stopped since then, below are my
              experiences in the job market:`,
            "abouttxt-5": `Company`,
            "abouttxt-6": `Occupation`,
            "abouttxt-7": `Duration`,
            "abouttxt-8": `Category`,
            "abouttxt-9": `Full Stack Developer`,
            "abouttxt-10": `1a 11m`,
            "abouttxt-11": `Hybrid`,
            "abouttxt-12": `Junior Developer|User Support`,
            "abouttxt-13": `3m`,
            "abouttxt-14": `Remote`,
            "abouttxt-15": `Throughout my professional experience, I have learned to maintain 
              in codes, create new functions and screens in a system, analyze
              of a system, have strong communication with the team for the good
              project progress, I learned a lot about business rules analysis
              and how important they are to the demand-based work process.
              Makes great use of methodologies to evolve and organize work,
              making them faster and more complete, as the methodology
              <b>Kanban</b>, which works as illustrated in the image below:`,
            "abouttxt-16": `Kanban is a visual process management methodology that is based
              on visual cards to represent tasks on a board. Each card represents
              an activity and moves through columns indicating its status in the workflow,
              usually divided into steps such as "To Do", "In Progress" and "Done".
              The system aims to optimize efficiency by limiting work in progress to avoid
              overload and identify bottlenecks. The approach allows for a flexible response to changes
              priorities, improving transparency and communication within the team. Kanban is
              especially effective in agile development contexts, where visibility and control
              of workflow are crucial to the continuous delivery of value.`,
            "abouttxt-17": `I also worked with the Scrum work methodology divided into <b>sprints</b>, which works
              as follows: Work divided into sprints is a fundamental concept in the agile framework
              Scrum. A sprint is a fixed period of time, usually two to four weeks, during which
              a team commits to delivering functional product increments. At the start of each sprint, there are
              defined goals and priority items for the product backlog. The team then plans how to achieve
              these goals during the sprint. During the sprint, daily sync meetings called
              Daily Scrum. At the end of the sprint, there is a review, where the completed work is demonstrated
              and feedback is received.`,
            "abouttxt-18": `Now that you've read a little about my experiences, how about knowing my intentions for the future?
              Well, in a few years I see myself producing solutions and solving problems for the world, making life easier
              of people and impacting everyone's daily lives with my innovations. I want to venture out, discover,
              challenge myself in my own business, who knows? Maybe it all depends on my actions and my willingness to do
              things happen. We are all constantly learning, even when we make mistakes we are learning something, therefore,
              I will try to take advantage of each discovery, error or success, to strengthen myself and be a more complete professional!`,
            "abouttxt-19": `Back to top`
          }
        },
        es: {
          translation: {
            "main-title": `YO DEV PEROZIN`,
            "headerButtonAbout": `Acerca de`,
             "headerButtonStacks": `Habilidades`,
             "headerButtonContact": `Contacto`,
             "abouttxt-1": `Hola, mi nombre es Rodrigo Destri Perozin, tengo 20 años, soy estudiante y profesional en el campo de
               Análisis y Desarrollo de Sistemas (ADS). Si tuviera que clasificarme a nivel profesional diría
               que soy Junior/Pleno, sobre todo porque llevo estudiando e interesándome por el área desde el año 2014.
               Mi experiencia actualmente es:`,
             "abouttxt-2": `Técnico en Análisis y Desarrollo de Sistemas`,
             "abouttxt-3": `Licenciatura en Análisis y Desarrollo de Sistemas`,
             "abouttxt-4": `Siempre tuve curiosidad por saber cómo funcionan los sistemas y los sitios web, cómo se crean, no tenía idea,
               hasta que un día comencé a buscar tutoriales de como crear sistemas, sitios web, y de ahí en adelante siempre seguí
               contacto con la zona. Al terminar la secundaria, completé el curso técnico (mencionado anteriormente), y pude tener contacto con varios
               tecnologías y conceptos en el área de programación. Ahora me estoy graduando con una licenciatura en Análisis y Desarrollo.
               de Sistemas, y además ya tenía experiencia en el mercado laboral, y no he parado desde entonces, a continuación están mis
               Experiencias en el mercado laboral:`,
             "abouttxt-5": `Empresa`,
             "abouttxt-6": `Ocupación`,
             "abouttxt-7": `Duración`,
             "abouttxt-8": `Categoría`,
             "abouttxt-9": `Desarrollador Full Stack`,
             "abouttxt-10": `1a 11m`,
             "abouttxt-11": `Híbrido`,
             "abouttxt-12": `Desarrollador junior|Soporte al usuario`,
             "abouttxt-13": `3m`,
             "abouttxt-14": `Remoto`,
             "abouttxt-15": `A lo largo de mi experiencia profesional, he aprendido a mantener
               en códigos, crear nuevas funciones y pantallas en un sistema, analizar
               de un sistema, tener una fuerte comunicación con el equipo para el bien
               progreso del proyecto, aprendí mucho sobre el análisis de reglas de negocio
               y cuán importantes son para el proceso de trabajo basado en la demanda.
               Hace un gran uso de metodologías para evolucionar y organizar el trabajo,
               haciéndolos más rápidos y completos, ya que la metodología
               <b>Kanban</b>, que funciona como se ilustra en la siguiente imagen:`,
             "abouttxt-16": `Kanban es una metodología de gestión de procesos visuales que se basa
               en tarjetas visuales para representar tareas en una pizarra. Cada carta representa
               una actividad y se mueve a través de columnas que indican su estado en el flujo de trabajo,
               generalmente se divide en pasos como "Por hacer", "En curso" y "Listo".
               El sistema tiene como objetivo optimizar la eficiencia limitando el trabajo en curso para evitar
               sobrecargar e identificar cuellos de botella. El enfoque permite una respuesta flexible a los cambios.
               prioridades, mejorando la transparencia y la comunicación dentro del equipo. Kanban es
               especialmente eficaz en contextos de desarrollo ágil, donde la visibilidad y el control
               del flujo de trabajo son cruciales para la entrega continua de valor.`,
             "abouttxt-17": `También trabajé con la metodología de trabajo Scrum dividido en <b>sprints</b>, que funciona
               de la siguiente manera: El trabajo dividido en sprints es un concepto fundamental en el marco ágil
               Melé. Un sprint es un período de tiempo fijo, generalmente de dos a cuatro semanas, durante el cual
               un equipo se compromete a ofrecer incrementos funcionales del producto. Al comienzo de cada sprint, hay
               Objetivos definidos y elementos prioritarios para el backlog del producto. Luego, el equipo planifica cómo lograr
               estos objetivos durante el sprint. Durante el sprint, se convocan reuniones de sincronización diarias.
               Scrum diario. Al final del sprint, hay una revisión, donde se demuestra el trabajo completado.
               y se recibe retroalimentación.`,
             "abouttxt-18": `Ahora que has leído un poco sobre mis experiencias, ¿qué tal si conoces mis intenciones para el futuro?
               Bueno, en unos años me veo produciendo soluciones y resolviendo problemas para el mundo, haciendo la vida más fácil.
               de personas e impactando la vida diaria de todos con mis innovaciones. Quiero aventurarme, descubrir,
               desafiarme a mí mismo en mi propio negocio, ¿quién sabe? Quizás todo dependa de mis acciones y de mi voluntad de hacerlo.
               las cosas pasan. Todos estamos aprendiendo constantemente, incluso cuando cometemos errores estamos aprendiendo algo, por lo tanto,
               Intentaré aprovechar cada descubrimiento, error o acierto, para fortalecerme y ser un profesional más completo!`,
             "abouttxt-19": `Volver al inicio`,
          }
        },
      }
  })
}

const translate = (elementId, lang) => {
  var element = document.getElementById(elementId)
  if(element==null){
    return
  }else{
    element.innerHTML = i18next.t(elementId, {lng: lang})
  }
}