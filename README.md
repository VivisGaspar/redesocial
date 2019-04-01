# EducaLab
#### Rede Social Educacional

#### Índice 
1. O Projeto
2. Objetivo 
3. Tema e mercado
4. Definição do usuário e Personas 
5. Protótipos
6. Definição do produto
7. Implementação

### 1. O Projeto 
Projeto desenvolvido no bootcamp da Laboratória - Brasil. O projeto consiste em desenvolver uma aplicação de uma rede social que seja web responsiva e onde pode-se ler e gravar dados.

### 2. Objetivos
#### Objetivos de aprendizagem 
-  Entender e resolver as necessidades dos usuários de forma criativa e assertiva.
-   Trabalhar em grupo e promover feedbacks constantes.
-   Definir como criar sua própria estrutura de dados e de que forma serão exibidos no produto.
#### Considerações
-   A lógica do projeto foi implementada totalmente em JavaScript (ES6+), HTML e CSS.
-   Foi utilizada a biblioteca jQuery para manipulação de DOM.
-   Foi utilizado o _framework_  Bootstrap v4 para elementos de leiaute e responsividade.
-   Código escrito seguindo o  [guia de estilos da Laboratória](https://github.com/JulianaAmoasei/js-style-guide/blob/pt-translation/README-PT.md).
#### Requisitos
- Esse ReadMe completo
- Criação de conta (sign up)
- Início de sessão (sign in)
- Timeline - Publicações (criar, apagar, editar, filtrar público/privado)
- Timeline - Likes (curtir e visualizar quantidade de curtidas)
- Hacker Edition | Amigos (adicionar e deletar)
- Hacker Edition |  Publicações (compartilhar e comentar)
- Hacker Edition | Perfil (editar e ver)

### 3. Tema e mercado

O tema foi escolhido a partir do entendimento que o contexto educacional poderia se beneficiar de uma plataforma que contribuísse para a otimização das relações entre professor e alunos na busca por um aprendizado mais dinâmico e condizente com o nível de exigência tecnológica dos alunos e da sociedade. 

##### Mercado
Foram levantadas as iniciativas existentes para entendimento das demandas ainda não atendidas. Alguns dos sites (brasileiros e estrangeiros) encontrados dentro do contexto educacional foram: Edmodo, Schoology, Teamie e Passei Direto. 

Algumas das opções encontradas oferecem para escolas ferramentas de gestão de salas de aula, comunicação entre professor e aluno a qualquer momento e funcionalidades para avaliação dos alunos. Outras, focam no compartilhamento de conteúdos entre estudantes de quaisquer níveis e instituições e as dúvidas e discussões são organizadas por áreas de conhecimento.

A partir do estudo das soluções mapeadas percebeu-se que o organização, a responsabilização e o autoaprendizado não são dimensões estimuladas nos alunos. De forma que para estudantes de nível médio que logo entrarão no mercado de trabalho, tenham lacunas no aprendizado de habilidades importantes para o mundo do trabalho.

Dessa forma, a escolha do grupo foi a de trabalhar o desenvolvimento da aplicação de forma a atender esse contexto ainda negligenciado pelas redes sociais existentes. 


### 4. Definição do usuário 
O perfil de usuário escolhidos foi o de alunos e professores do ensino médio, principalmente de escolas de centros urbanos e escolas particulares. 
A escolha foi feita considerando a idade mínima necessária para que os alunos se responsabilizem pelo próprio estudo e também que todos os alunos precisariam acessar a internet facilmente no computador ou celular. 

A partir do usuários foram definidas duas personas - uma de um professor e outro de um aluno. 

#### As personas 

- Persona 1


![Persona 1 - Professora](https://res.cloudinary.com/mkeu/image/upload/v1553103544/Persona_Professora_Marcela.png)

_________
- Persona 2


![Persona 2 - Aluna](https://res.cloudinary.com/mkeu/image/upload/v1553103419/Persona_aluna_Mirela.png)


### 5. Protótipos

Protótipo com a primeira versão e a versão revisada: [https://marvelapp.com/4h25586](https://marvelapp.com/4h25586)

### Testes de usabilidade
O primeiro protótipo foi testado com potenciais usuários (professores e alunos do ensino médio ou de níveis próximos) a partir do roteiro abaixo:

#### Cenário do aluno:
Você é um aluno(a) de ensino médio não pôde ir na aula no dia anterior, porém entrou em contato um amigo(a) de sala que lhe informou que o professor irá utilizar uma rede social para ajudar nos estudos.
Como não estava presente tentará sozinho(a) realizar algumas tarefas através do link que seu amigo(a) enviou.

#### Cenário do professor:
Como professor tem o hábito de ler sites de educação. Nessas leituras conheceu um site que pode ajudar seus alunos a estudar. Será seu primeiro contato com o site e você precisará efetuar algumas tarefas.

#### Tarefas:

1.  Como esta é a sua primeira vez no site, por favor realize seu cadastro;
2.  Uma vez cadastrado, realize seu login no site;
3.  Faça uma postagem em modo privado (apenas amigos);
4.  Encontre suas notificações e avisos.

Foi solicitado que os usuários respondessem sobre o nível de facilidade de realizar o protótipo e considerações sobre o layout. Também foram fornecidas informações sobre o produto para que fosse averiguada a sua relevância.

Informações fornecidas: O site será uma rede social com foco em promover a comunicação entre alunos e professores do ensino médio. Entre as funcionalidades que serão disponibilizadas, estão: postagem de tarefas, trabalhos e testes a serem realizados ou enviados pela própria rede; compartilhamento de fotos, vídeos e arquivos com conteúdos pertinentes às aulas; um calendário compartilhado e outro individual para organização de prazos e a possibilidade de colocar avisos para manter os prazos em dia; tanto alunos quanto professores poderão criar fóruns de discussão; os professores serão mediadores e poderão criar grupos específicos para cada sala.

#### Resultados do teste:

Foram entrevistados potenciais alunos e uma professora.
Feedbacks:

- Cadastro: dúvida se teria a opção de se cadastrar como professor ou aluno, considerou que essa opção era relevante para moderação das publicações;

- Timeline: gostariam de visualizar a postagem em feeds de notícia (não ficou claro como a timeline foi apresentada - a professora achou mais relevante deixar os posts e interações restritos ao grupo da sala. Também gostariam de saber em qual sala/turma estão;

- Post: o cadeado para optar pela privacidade do post não foi identificado por praticamente nenhum usuário;

- Notificações: gostaram que quando clica-se em notificações elas permaneceram na mesma tela e sugeriram uma funcionalidade para horário das notificações;

- Relevância do produto: todos consideraram relevante. A professora atribuiu essa relevância à possibilidade de whatsapp que a sobrecarrega com muitos grupos (um de cada turma) que a notifica fora do horário comercial.

#### Reorganização do protótipo

Sobre o cadastro, foi informado que a opção de cadastro por professor ou aluno seria desenvolvida em uma próxima versão. Desta forma, a reorganização do protótipo ficou restrita à restruturação da timeline.

Mudanças do protótipo 1 para o 2:

- Post: opção de privacidade

![Mudança botão privacidade](https://res.cloudinary.com/mkeu/image/upload/v1554147455/redesocial_reorganizacao_post.png)

- Timeline: feed de notícias
  
  ![Mudança timeline](https://res.cloudinary.com/mkeu/image/upload/v1554147444/redesocial_reorganizacao_timeline.png)

Após as alterações os usuários conseguiram identificar o select para alterar a privacidade e compreenderam a estrutura da timeline.

#### Definição interface do usuário

A interface é a apresentada nos protótipos (imagem abaixo), considerando as limitações de cada versão e pequenas melhoras possibilitadas com CSS.


![Interface](https://res.cloudinary.com/mkeu/image/upload/v1554148120/redesocial_interface.png)



### 6.  Definição do produto

A rede social EducaLab foi idealizada pensando em alunos e professores de ensino médio de escolas particulares dos centros urbanos. Além das funcionalidades básicas de uma rede social como postagem, adicionar amigos, visualizar timeline, a EducaLab também propõe funcionalidades específicas para o contexto educacional. São elas: criação de um ambiente específico para cada sala/turma, moderação do professor, possibilidade de realizar testes e demandar tarefas e organização de agenda e notificações.

Com essas funcionalidades pretende-se incentivar a responsabilidade e senso de organização nos alunos e facilitar a gestão da turma pelos professores, além de garantir uma dinâmica mais atraente e atual/tecnológica de aprendizagem.  


### 7. Implementação
 
#### Versionamento

#### Histórias dos usuários

#### Execução

-   HTML    
-   CSS  
-   JavaScript 
    
