Botão do pânico
===============

Este projeto cria uma forma de uma vítima de violência doméstica pedir socorro
durante um ataque e gravar o som ambiente, servindo como provas para um
processo judicial.

Desenvolvido no [II Hackathon da Câmara dos Deputados][ii-hackathon].

Justificativa
-------------

Uma mulher que sofre de violência doméstica tem poucas opções para se defender.
Durante um ataque, esperar por atendimento no 190, passar seu endereço e
explicar a situação é impraticável, vizinhos que ouçam a luta podem não querer
"meter a colher", tanto por cultura quanto por medo de uma represália do
agressor. A vítima está sozinha.

A solução de algumas cidades foi criar um "botão do pânico", um aparelho com o
qual a vítima de violência consegue pedir socorro a polícia em uma emergência.
Vitória, capital do Espírito Santo, implantou esse sistema em 2013. O
dispositivo que usam lembra um controle remoto de portão de garagens, só que
maior. Com ele, a vítima pode discretamente apertar um botão que,
automaticamente, envia um pedido de socorro à polícia com a localização da
pessoa e grava o som ambiente para ser usado como provas.

A juíza Clésia dos Santos Barros da 11ª Vara Criminal de Vitória cita um caso
em [uma matéria para o Fantástico][mulher-agredida-filho] onde o botão do
pânico salvou a vida de uma mulher. Ela sofria de agressões de um filho
dependente de drogas e recebeu um botão do pânico. Algum tempo depois, o filho
a procurou novamente batendo na porta de sua casa, e ela acionou o botão. A
guarda chegou minutos depois, conseguindo evitar o ataque. "Esse botão salvou
minha vida porque, naquele dia, se eu não tivesse o botão ele ia me matar",
conta ela.

Apesar de diversos casos de sucesso do uso dessa tecnologia, ela ainda é pouco
acessível. João Pessoa, por exemplo, tem um programa semelhante ao do Espírito
Santo chamado SOS Mulher. Segundo uma [matéria para o jornal Correio da
Paraíba de 11 de agosto de 2014][correio-da-paraiba], existem 900 medidas
protetivas solicitadas à Justiça e, ao mesmo tempo, só 15 aparelhos foram
disponibilizados. Por isso, entendemos que há uma demanda para esse programa
muito maior que a oferta de aparelhos.

Entendendo esse problema, outras pessoas estão tentando criar uma forma de
universalizar o acesso a essa tecnologia. O projeto XXX, premiado em 500
mil reais pelo Google, desenvolveu um aplicativo para smartphones Android que
replica a funcionalidade do botão do pânico, ACIONANDO BLA BLA BLA

Apesar dessa iniciativa ser mais acessível do que os atuais botões do pânico,
ela tem outro problema: requer que essa mulher tenha um smartphone Android e um
plano de dados ativo. Segundo [estimativas do eMarketer de dezembro de
2013][uso-smartphone], cerca de 20% dos brasileiros possuem smartphone em 2014.
Esse número diminui quando pensamos em pessoas com smartphone e plano de
dados.

Um aplicativo para smartphone é importante e permite funcionalidades como
repassar a localização exata por GPS para a polícia, mas impossibilita o acesso
por mulheres carentes, que são as em maior situação de risco e que mais se
beneficiariam de um sistema assim (CITATION NEEDED)

Nosso projeto tem como público-alvo pessoas nessas situações. De classes
econômicas mais baixas e possivelmente analfabetas. O único requisito é que
essa pessoa tenha um celular, independente de marca ou modelo.

Funcionamento
-------------

O primeiro passo para uma mulher que queira usar nosso projeto é efetuar um
cadastro. Nele, teremos informações como seu nome, telefone e endereço da sua
residência.

Estando cadastrada, ela precisará adicionar nosso número de telefone na lista
de discagem rápida no seu celular. A discagem rápida serve para configurar um
número que, pressionado por alguns segundos, disque automaticamente para um
número pré-definido.

Essa etapa prévia se dá quando ela não está em uma situação de risco. Isso
sendo feito, quando houver a necessidade de pedir socorro, basta ela segurar o
botão definido no seu celular por alguns segundos. Automaticamente, esse número
aceitará sua chamada, começará a gravação e avisará a sua rede de apoio (O QUE
E REDE DE APOIO).

As pessoas da rede de apoio receberão uma mensagem avisando que essa pessoa
está pedindo socorro, com seu nome e endereço. A partir daí, elas precisarão
acionar a polícia pelo 190, ou tomar alguma outra providência que seja
necessária.

Quando o perigo passar, ela desliga a ligação. Tudo já estará gravado e
disponível para ser usado como prova caso necessário.

Limitações
----------

O fato de usarmos celulares burros (não smartphones) nos dá vantagens, ao
possibilitar mais pessoas terem acesso a esse serviço, mas também nos dá
desvantagens. O maior problema é que não conseguimos a localização da vítima.
Se esse ataque acontecer fora de sua residência, não sabemos onde ela está e a
polícia não vai conseguir ajudá-la. Nesse caso, a funcionalidade do botão se
limita a gravação do ataque para uso como provas.

Apesar disso, há estatísticas que apontam que mais de 70% dos ataques ocorrem
na residência da vítima, então esperamos conseguir enviar ajuda na maior parte
dos casos (CITATION NEEDED)

Rede de apoio
-------------

Inicialmente pensávamos em permitir a cada mulher definir qual é sua rede de
apoio a ser avisada em emergências. Assim, ela poderia definir amigos ou
familiares para, quando pedisse ajuda pelo botão do pânico, serem avisados e
acionarem a polícia.

Entretanto, a Secretária da Mulher de Santa Rita na Paraíba, Camila XXXX, que
implantou um programa com 5 botões do pânico (lá chamados de programa SOS
Mulher), levantou o problema do medo dos familiares em se envolver e sofrer
represálias do agressor. Há um exemplo recente em João Pessoa de uma mulher que
foi [assassinada pelo ex-marido de sua irmã por falar que foi ela a culpada pela
sua separação][cunhada-assassinada].  

Para resolver isso, inicialmente cogitamos criar uma rede em que as próprias
usuárias do botão do pânico formassem a sua rede de apoio. Assim, quando uma
mulher pedisse socorro, as outras usuárias do sistema seriam avisadas e
acionariam a polícia. Garantindo que não fosse possível saber quem acionou a
polícia, e também que essa pessoa estivesse geograficamente longe do agressor,
garantiriamos a sua segurança. Entretanto, desistimos dessa ideia por causa da
privacidade das mulheres que acionam o botão, para que os nomes e endereços
delas não sejam expostos a pessoas desconhecidas, e por uma preocupação que, em
um momento delicado como esse, essa pessoa não agisse corretamente.

A solução que nos parece mais viável até agora é fazer uma parceria com ONGs e
entidades que já trabalham nessa área. Assim, além de minimizar o problema do
cuidado com a privacidade dos dados da vítima, também encontramos um caminho
para divulgar o sistema e auxiliar mulheres a se cadastrar e configurar seus
celulares. Nesse caso, o cadastro de uma mulher poderia ser feito através de
uma entidade local.

Licença
-------

Este projeto está licenciado sob a GNU Affero General Public License (AGPL)
v3.0 ou superior.

[ii-hackathon]: http://edemocracia.camara.gov.br/web/hackathon-de-genero-e-cidadania/inicio#.VHcr0lzN-kB
[mulher-agredida-filho]: http://g1.globo.com/fantastico/noticia/2014/09/mulher-agredida-pelo-proprio-filho-so-tem-paz-apos-receber-botao-do-panico.html
[correio-da-paraiba]: http://portalcorreio.uol.com.br/noticias/policia/seguranca/2014/08/11/NWS,244558,8,409,NOTICIAS,2190-BAYEUX-CABEDELO-RECEBEM-APARELHOS-PROGRAMA-SOS-MULHER.aspx
[uso-smartphone]: http://idgnow.com.br/blog/circuito/2014/01/22/base-de-usuarios-de-smartphones-na-america-latina-vai-aumentar-283-em-2014/
[cunhada-assassinada]: http://g1.globo.com/pb/paraiba/noticia/2014/11/professora-e-assassinada-na-pb-e-suspeito-diz-ser-ex-cunhado-da-vitima.html
