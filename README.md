# Desafio NG7 - Resposta
`Sabemos que a tomada de decisão, em qualquer área de negócio, é algo de extrema importância se você quiser que a sua empresa esteja em um lugar de destaque, por isso a diretoria acabou de solicitar à sua equipe para desenvolver um painel de dashboard que traga as informações dos possíveis clientes, para a expansão dos negócios da empresa em outros países:`

 * Clientes por gênero;
 * Clientes por idade;
 * Quais países possuem mais possíveis clientes;
 * Quais das mulheres possuem mais de 18 anos.


## Getting started
Primeiro, foi escolhido o framework ViteJS para uso da biblioteca React na sua versão em Typescript. Os arquivos foram estruturados em pastas seguindo uma adpatção do padrão MVC com componentização funcional.


### Antes de iniciar o projeto você precisa instalar as dependências
npm i ou yarn i


### Em seguida, para inciar o projeto, usado o comando:
npm run dev


### Primeira etapa de desenvolvimento
Foi feita a estruturação da aplicação


### Segunda etapa 
Foi Criar o layout incial do cabeçalho (NavBar e MobileMenu). Nessa parte, foi proposto o design tanto mobile, quanto o desktop, prezando pela UI e pela UX. Cores foram adicionadas de acordo com a acessibilidade e o constrate. Também foi proposto dois temas, para se adequar ao modo dark do dispositivo. Por fim, foi proposto um tema base para implamentação de PWA, futuramente. Ah, tanto a respomsividade, quanto as animações, seguem boas práticas.


### Terceira etapa 
Nessa etapa optei em adicionar roteamento, assim, dependendo de qual botão o usuário clique, ele será direcionado para a tela respectiva. Para isso, foi instalado o pacote com o comando abaixo e criado também as telas:
npm install react-router-dom


### Quarta etapa 
Criar o arquivo de configuração de rotas para o componente Main possa gerenciar. Também foi alterado algumas pages por conta que algumas estavam nomeadas de forma repetida. Para isso, utilizou do componente Outlet no App, para ele servir de molde para todas as paginas, e o routes foi colocado no Main com uso de um componente do router-DOM, paraque ele pudesse gerenciar as rotas.


### Quinta etapa 
Nessa etapa, foi preciso ajustar os NavItens para que pudessem transitar entre as telas, fazendo assim o roteamento do site. Alterado o NavItemModel para adicionar a propriedade de url, que é nada mais do que a url para qual irá ser redirecionado o usuário, ao clicar num navItem.


### Sexta etapa 
Nessa parte foi preciso remover do estilo global os estilos reutilizaveis, transformando eles em componentes.

### Sétima etapa 
Inicio do dashboard, comtemplado a seção de titulo e dois botões

### Oitava etapa 
Criar os cards e alterar as cores por conta da acessibilidade

### Nona etapa 
Foi criado o service para consumir a api e utilizar nos cards. Também foi preciso alterar a model Card e criar novas models de personagem e totalPersonData.




## Dificuldades e desafios que tive