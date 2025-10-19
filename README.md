# Bem-vindo ao seu projeto Lovable

## Informações do Projeto

**URL**: https://lovable.dev/projects/ceaceab2-b827-45f3-91f6-2980b2b33355

## Como editar este código?

Existem várias maneiras de editar sua aplicação.

**Usar Lovable**

Basta visitar o [Projeto Lovable](https://lovable.dev/projects/ceaceab2-b827-45f3-91f6-2980b2b33355) e começar a fazer prompts.

As alterações feitas via Lovable serão commitadas automaticamente neste repositório.

**Usar sua IDE preferida**

Se você quiser trabalhar localmente usando sua própria IDE, pode clonar este repositório e fazer push das alterações. As alterações enviadas também serão refletidas no Lovable.

O único requisito é ter o Node.js e npm instalados - [instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Siga estes passos:

```sh
# Passo 1: Clone o repositório usando a URL do Git do projeto.
git clone <SUA_GIT_URL>

# Passo 2: Navegue até o diretório do projeto.
cd <SEU_NOME_DO_PROJETO>

# Passo 3: Instale as dependências necessárias.
npm i

# Passo 4: Inicie o servidor de desenvolvimento com recarregamento automático e preview instantâneo.
npm run dev
```

**Editar um arquivo diretamente no GitHub**

- Navegue até o(s) arquivo(s) desejado(s).
- Clique no botão "Edit" (ícone de lápis) no canto superior direito da visualização do arquivo.
- Faça suas alterações e commit as mudanças.

**Usar GitHub Codespaces**

- Navegue até a página principal do seu repositório.
- Clique no botão "Code" (botão verde) próximo ao canto superior direito.
- Selecione a aba "Codespaces".
- Clique em "New codespace" para iniciar um novo ambiente Codespace.
- Edite arquivos diretamente no Codespace e faça commit e push das suas alterações quando terminar.

## Quais tecnologias são usadas neste projeto?

Este projeto é construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🔒 Configuração de Segurança

**Importante**: Antes de executar este projeto, você precisa configurar suas variáveis de ambiente:

1. Copie o arquivo de exemplo de ambiente:

   ```sh
   cp .env.example .env
   ```

2. Edite o `.env` e adicione sua chave da API do OpenAI:

   ```env
   VITE_OPENAI_API_KEY=sua-chave-real-da-api-openai-aqui
   ```

   **Nota**: Este projeto é compatível com qualquer chave da OpenAI e detecta automaticamente o tipo de chave e modelo disponível.

   ### 🤖 Sistema Inteligente de API:

   O projeto automaticamente:

   - **Detecta o tipo de chave** (GPT-5-nano ou chaves tradicionais)
   - **Tenta primeiro** com o endpoint Responses API (para chaves modernas)
   - **Faz fallback** para Chat Completions API (para chaves tradicionais)
   - **Funciona com qualquer modelo** disponível na sua chave

3. **Nunca faça commit do seu arquivo `.env` no controle de versão!** O `.gitignore` já está configurado para excluí-lo.

## Como fazer deploy deste projeto?

Basta abrir o [Lovable](https://lovable.dev/projects/ceaceab2-b827-45f3-91f6-2980b2b33355) e clicar em Share -> Publish.

### Notas de Segurança para Deploy:

- Certifique-se de que seu arquivo `.env` não está incluído nos deployments
- Use variáveis de ambiente na sua plataforma de hospedagem para chaves de API
- Rotacione regularmente suas chaves de API
- Monitore seu uso da API e custos

### 🔧 Resolução de Problemas:

**Erro de cota excedida (insufficient_quota):**

- Acesse [OpenAI Platform](https://platform.openai.com/)
- Vá em Settings > Billing
- Adicione créditos à sua conta ou verifique seu plano atual
- Chaves de teste geralmente têm cotas limitadas

**Erro de chave inválida:**

- Verifique se a chave está correta no arquivo `.env`
- Certifique-se de que a chave começa com `sk-proj-` ou `sk-`
- Regenerar a chave se necessário na plataforma OpenAI

## Posso conectar um domínio personalizado ao meu projeto Lovable?

Sim, você pode!

Para conectar um domínio, navegue até Project > Settings > Domains e clique em Connect Domain.

Leia mais aqui: [Configurando um domínio personalizado](https://docs.lovable.dev/features/custom-domain#custom-domain)
