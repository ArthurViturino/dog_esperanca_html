// js/templates.js

export const templates = {

  // 1. PÁGINA INICIAL
  inicio: () => `
    <section>
        <h2>Quem Somos</h2>
        <p>
            A <strong>Dog Esperança</strong> surgiu em 2020 a partir da união de voluntários comprometidos com o bem-estar animal. Nosso objetivo principal é resgatar, reabilitar e promover a destinação responsável de cães em situação de vulnerabilidade.
        </p>
        <p>
            Buscamos combater o grave problema do abandono e dos maus-tratos urbanos, oferecendo assistência direta a cães de rua, animais feridos ou em condições desfavoráveis. Acreditamos que a transformação desse cenário depende da conscientização da comunidade e da prática da adoção responsável, garantindo que cada animal resgatado encontre um lar seguro, com respeito e amor para toda a vida.
        </p>
    </section>

    <section>
        <h2>Nossos Desafios Diários</h2>
        <article class="problema-item">
            <h3>1. Resgate e Acolhimento nas Ruas</h3>
            <p>
                Todos os dias, muitos animais são encontrados abandonados, atropelados ou vítimas de maus-tratos. 
                O resgate desses animais pode ser difícil devido à falta de espaço, transporte e voluntários, 
                tornando necessário priorizar os casos mais graves e urgentes.
            </p>
        </article>

        <article class="problema-item">
            <h3>2. Altos Custos com Alimentação</h3>
            <p>
                A alimentação é uma das principais necessidades dos animais acolhidos. 
                Os gastos com ração podem representar uma parte importante dos custos da organização, 
                tornando as doações fundamentais para garantir uma alimentação adequada.
            </p>
        </article>

        <article class="problema-item">
            <h3>3. Vacinas, Castração e Tratamentos Médicos</h3>
            <p>
                Muitos animais resgatados precisam de cuidados veterinários antes de serem encaminhados 
                para adoção. Vacinação, castração, exames, medicamentos e tratamentos podem gerar custos 
                elevados e são importantes para garantir a saúde e o bem-estar dos animais.
            </p>
        </article>

        <article class="problema-item">
            <h3>4. Infraestrutura e Proteção no Frio</h3>
            <p>
                Durante os períodos de frio, os animais precisam de espaços protegidos e materiais adequados, 
                como cobertores, caminhas e casinhas. A manutenção desses espaços também é importante para 
                garantir um ambiente seguro e confortável.
            </p>
        </article>

        <article class="problema-item">
            <h3>5. Sustentabilidade Financeira da ONG</h3>
            <p>
                Manter uma organização de proteção animal envolve diversos custos, como alimentação, 
                atendimento veterinário, medicamentos e manutenção da infraestrutura. 
                Por isso, as doações e o apoio de voluntários e parceiros são importantes para a continuidade das ações.
            </p>
        </article>
    </section>

    <section>
        <h2>O Que Fazemos</h2>
        <article class="acao-item">
            <h3>1. Resgate Responsável</h3>
            <p>
                Atuamos no resgate e atendimento de cães abandonados, feridos ou em situação de vulnerabilidade nas ruas. 
                Nossa equipe realiza o recolhimento com segurança, oferecendo os primeiros socorros e garantindo o transporte 
                adequado até o abrigo, onde o animal recebe o acolhimento necessário.
            </p>
        </article>

        <article class="acao-item">
            <h3>2. Cuidados e Reabilitação</h3>
            <p>
                Após o resgate, os animais passam por uma avaliação veterinária, recebendo vacinas, vermífugos e castração. 
                Além dos cuidados com saúde e alimentação de qualidade, oferecemos um espaço seguro para que se recuperem fisicamente 
                e voltem a confiar nas pessoas antes de irem para um novo lar.
            </p>
        </article>

        <article class="acao-item">
            <h3>3. Adoção Consciente</h3>
            <p>
                Promovemos o encontro entre os animais reabilitados e novas famílias por meio do nosso processo de adoção responsável. 
                Realizamos uma triagem cuidadosa com entrevistas e orientações para garantir que cada cão seja acolhido em um ambiente 
                seguro, amoroso e definitivo.
            </p>
        </article>
    </section>

    <section>
        <h2>Nossos Projetos</h2>
        <article class="projeto-item">
            <h3>1. Projeto Em Boas Patas</h3>
            <p>
                Iniciativa voltada para encontrar lares permanentes e amorosos para os animais reabilitados da ONG.
                Por meio de eventos de adoção, programas de apadrinhamento e acompanhamento das famílias adotantes,
                buscamos tornar o processo de transição seguro, consciente e benéfico tanto para os animais quanto para os tutores.
            </p>
        </article>

        <article class="projeto-item">
            <h3>2. Projeto Patinha Solidária</h3>
            <p>
                Campanha contínua voltada para a arrecadação de recursos essenciais, como ração, medicamentos,
                cobertores e doações financeiras. O projeto busca envolver a comunidade, empresas parceiras e
                pontos de coleta para garantir os recursos necessários para os animais acolhidos e apoiar as ações de resgate.
            </p>
        </article>
    </section>

    <section>
        <h2>Como Ajudar</h2>
        <p>Existem várias formas de contribuir com o trabalho da Dog Esperança. Você pode:</p>
        <ul>
            <li>Fazer uma doação financeira para apoiar nossas ações;</li>
            <li>Realizar o apadrinhamento de um animal em acolhimento;</li>
            <li>Participar de eventos e campanhas de conscientização;</li>
            <li>Oferecer seu tempo como voluntário para ajudar nos resgates e na reabilitação;</li>
            <li>Divulgar nossa causa nas redes sociais e em sua comunidade.</li>
        </ul>

        <div class="contato-info">
            <h3>Entre em Contato</h3>
            <p><strong>E-mail:</strong> contato@dogesperanca.org.br</p>
            <p><strong>Telefone/WhatsApp:</strong> (11) 99999-8888</p>
            <p><strong>Redes Sociais:</strong> @dogesperanca</p>
        </div>

        <div class="cadastro-chamada">
            <h3>Faça Parte da Nossa Rede</h3>
            <p>
                Quer fazer a diferença na vida de um animal? Acesse nossa área de cadastro para se inscrever como 
                <strong>colaborador</strong> (voluntário ou doador) ou para registrar seu interesse como <strong>adotar um animal</strong>:
            </p>
            <p>
                <!-- Ajustado para usar o hash (#) da SPA em vez de cadastro.html -->
                <a href="#cadastro" class="btn btn-sucesso">Cadastre-se</a>
            </p>
        </div>
    </section>
  `,

  // PÁGINA PROJETOS
  projetos: () => `<section>
        <h2>Nossos Projetos</h2>

        <!-- PROJETO 1: EM BOAS PATAS -->
        <article class="projeto-item">
            <h3>1. Projeto Em Boas Patas</h3>
            <img src="imagens/projeto-em-boas-patas.jpg" alt="Cães participando de uma feira de adoção do projeto Em Boas Patas" />
            <p>
                Iniciativa voltada para encontrar lares permanentes e amorosos para os animais reabilitados da ONG.
                Por meio de eventos de adoção, programas de apadrinhamento e acompanhamento das famílias adotantes,
                buscamos tornar o processo de transição seguro, consciente e benéfico tanto para os animais quanto para os tutores.
            </p>
        </article>

        <!-- PROJETO 2: PATINHA SOLIDÁRIA -->
        <article class="projeto-item">
            <h3>2. Projeto Patinha Solidária</h3>
            <img src="imagens/projeto-patinha-solidaria.jpg" alt="Cães recebendo ração e cobertores arrecadados pelo projeto Patinha Solidária" />
            <p>
                Campanha contínua voltada para a arrecadação de recursos essenciais, como ração, medicamentos,
                cobertores e doações financeiras. O projeto busca envolver a comunidade, empresas parceiras e
                pontos de coleta para garantir os recursos necessários para os animais acolhidos e apoiar as ações de resgate.
            </p>
        </article>
    </section>
  `,

  // PÁGINA CADASTRO
  cadastro: () => `
    <section class="secao-cadastro">
        <h2>Cadastro para Adotantes</h2>
        <form>
            <div>
                <label for="nome-adotante">Nome:</label><br>
                <input type="text" id="nome-adotante" name="nome-adotante" 
                    required
                    maxlength="100"
                    minlength="3"
                    placeholder="Seu nome completo"
                >
            </div><br>

            <div>
                <label for="email-adotante">Email:</label><br>
                <input type="email" id="email-adotante" name="email-adotante" 
                    required 
                    maxlength="100"
                    minlength="5"
                    placeholder="seu.email@exemplo.com"
                >
            </div><br>

            <div>
                <label for="telefone-adotante">Telefone:</label><br>
                <input type="tel" id="telefone-adotante" name="telefone-adotante"
                    required
                    maxlength="15" 
                    pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" 
                    title="Digite no formato: (00) 00000-0000"
                    placeholder="(00) 00000-0000"
                >
            </div><br>

            <button type="submit">Cadastrar</button>
        </form>
    </section>

     <section class="secao-cadastro">
        <h2>Cadastro para Voluntários</h2>

        <form>
            <div>
                <label for="nome-voluntario">Nome Completo:</label><br>
                <input type="text" id="nome-voluntario" name="nome-voluntario" 
                    required
                    maxlength="100"
                    minlength="3"
                    placeholder="Seu nome completo"
                >
            </div><br>

            <div>
                <label for="email-voluntario">Email:</label><br>
                <input type="email" id="email-voluntario" name="email-voluntario" 
                    required
                    maxlength="100"
                    minlength="5"
                    placeholder="seu.email@exemplo.com"
                >
            </div><br>

            <div>
                <label for="telefone-voluntario">Telefone:</label><br>
                <input type="tel" id="telefone-voluntario" name="telefone-voluntario"
                    required
                    maxlength="15" 
                    pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" 
                    title="Digite no formato: (00) 00000-0000"
                    placeholder="(00) 00000-0000"
                >
            </div><br>

            <div>
                <label for="cpf">CPF:</label><br>
                <input type="text" id="cpf" name="cpf"
                    required
                    maxlength="14"
                    pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                    title="Digite no formato: 000.000.000-00"
                    placeholder="000.000.000-00"
                >
            </div><br>

            <div>
                <label for="data_nascimento">Data de Nascimento:</label><br>
                <input type="date" id="data_nascimento" name="data_nascimento"
                    required
                >
            </div><br>

            <div>
                <label for="cep">CEP:</label><br>
                <input type="text" id="cep" name="cep"
                    required
                    maxlength="9"
                    pattern="\\d{5}-\\d{3}"
                    title="Digite no formato: 00000-000"
                    placeholder="00000-000"
                >
            </div><br>

            <div>
                <label for="cidade">Cidade:</label><br>
                <input type="text" id="cidade" name="cidade"
                    required
                    maxlength="50"
                    minlength="2"
                    placeholder="Sua cidade"
                >
            </div><br>

            <div>
                <label for="ajuda">Como deseja ajudar?</label><br>
                <select id="ajuda" name="ajuda" required>
                    <option value="" disabled selected>Selecione uma opção...</option>
                    <option value="resgates">Resgates</option>
                    <option value="cuidados">Cuidados com os animais</option>
                    <option value="eventos">Eventos</option>
                    <option value="divulgacao">Divulgação</option>
                    <option value="doacoes">Doações</option>
                    <option value="outro">Outro</option>
                </select>
            </div><br>

            <div>
                <label>Disponibilidade:</label><br>
                
                <input type="checkbox" id="seg-sex" name="disponibilidade" value="segunda-sexta">
                <label for="seg-sex">Segunda a sexta</label><br>

                <input type="checkbox" id="fds" name="disponibilidade" value="finais-semana">
                <label for="fds">Finais de semana</label><br>

                <input type="checkbox" id="manha" name="disponibilidade" value="manha">
                <label for="manha">Manhã</label><br>

                <input type="checkbox" id="tarde" name="disponibilidade" value="tarde">
                <label for="tarde">Tarde</label><br>

                <input type="checkbox" id="noite" name="disponibilidade" value="noite">
                <label for="noite">Noite</label>
            </div><br>

            <div>
                <label>Já possui experiência com animais?</label><br>

                <input type="radio" id="exp-sim" name="experiencia" value="sim" required>
                <label for="exp-sim">Sim</label><br>

                <input type="radio" id="exp-nao" name="experiencia" value="nao">
                <label for="exp-nao">Não</label>
            </div><br>

            <div>
                <label for="mensagem">Conte um pouco sobre sua experiência ou interesse em ajudar:</label><br>
                <textarea id="mensagem" name="mensagem" 
                    rows="5" 
                    cols="30"
                    placeholder="Escreva aqui sua mensagem..."
                ></textarea>
            </div><br>

            <button type="submit">Cadastrar</button>
        </form>
    </section>
  `,

  // PÁGINA NÃO ENCONTRADA
  naoEncontrado: () => `
    <section>
        <h2>Página não encontrada</h2>
        <p>O conteúdo que você procura não existe ou foi removido.</p>
        <p><a href="#inicio" class="btn">Voltar para o Início</a></p>
    </section>
  `
};