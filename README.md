# 🤖 Chatbot com IA - OpenRouter Integration

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

2. Edite o `.env` e adicione sua chave da API do OpenRouter:

   ```env
   VITE_OPENROUTER_API_KEY=sua-chave-da-api-openrouter-aqui
   ```

   ### 🚀 Como obter uma chave do OpenRouter:

   1. Acesse [OpenRouter.ai](https://openrouter.ai/)
   2. Crie uma conta ou faça login
   3. Vá em "API Keys" no menu
   4. Clique em "Create API Key"
   5. Dê um nome para sua chave e copie-a
   6. Cole no arquivo `.env`

   ### 🤖 Sistema de IA Otimizado:

   O projeto está configurado com:

   - **Modelo padrão:** `meta-llama/llama-3.2-3b-instruct:free` (gratuito)
   - **Respostas longas:** Até 500 tokens (300-400 palavras)
   - **Personalidade:** Assistente virtual amigável em português
   - **Parâmetros otimizados:** Temperature 0.7, Top-p 0.9

   ### 💰 Modelos Disponíveis:

   **Modelos Gratuitos:**

   - `meta-llama/llama-3.2-3b-instruct:free` ✅ (Configurado)
   - `google/gemma-7b-it:free`
   - `huggingface/zephyr-7b-beta:free`

   **Modelos Pagos (Recomendados):**

   - `gpt-4o-mini` - Econômico e rápido
   - `claude-3-haiku` - Inteligente e eficiente
   - `gpt-4` - Máxima qualidade

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

- Acesse [OpenRouter.ai](https://openrouter.ai/)
- Vá em "Billing" ou "Credits"
- Adicione créditos à sua conta ou verifique seu plano atual
- Alguns modelos gratuitos têm limitações de uso

**Erro de chave inválida:**

- Verifique se a chave está correta no arquivo `.env`
- Certifique-se de que a chave começa com `sk-or-v1-`
- Regenerar a chave se necessário no painel do OpenRouter

**Erro 404 (Modelo não encontrado):**

- Alguns modelos podem não estar disponíveis na sua região
- Tente modelos alternativos da lista acima
- Entre em contato com o suporte do OpenRouter se persistir

**Erro 403 (Forbidden):**

- Sua chave pode não ter acesso a modelos pagos
- Verifique se você tem créditos suficientes
- Alguns modelos exigem verificação de conta

## Posso conectar um domínio personalizado ao meu projeto Lovable?

Sim, você pode!

Para conectar um domínio, navegue até Project > Settings > Domains e clique em Connect Domain.

Leia mais aqui: [Configurando um domínio personalizado](https://docs.lovable.dev/features/custom-domain#custom-domain)
