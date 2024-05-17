Este é um projeto incrível construído com Next.js.
Ele foi construído usando MongoDB como banco de dados,
NextAuth como solução de autenticação e
Cloudinary como host de imagens e
Prisma como sulução ORM de banco de dados
Para executá-lo em sua máquina local, siga estas etapas:

**Clone o repositório:**
git clone https://github.com/PedroML71/Airbnb-clone.git

**Instale as dependências:**
npm install

**Crie um arquivo `.env` na raiz do projeto:**

**Adicione as seguintes variáveis de ambiente ao arquivo `.env`:**
DATABASE_URL=seu-url-do-banco-de-dados
NEXTAUTH_SECRET=sua-chave-secreta-do-nextauth
GITHUB_ID=seu-id-do-aplicativo-GitHub
GITHUB_SECRET=sua-chave-secreta-do-aplicativo-GitHub
GOOGLE_CLIENT_ID=seu-id-do-cliente-Google
GOOGLE_CLIENT_SECRET=sua-chave-secreta-do-cliente-Google
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu-nome-da-conta-no-Cloudinary

**Inicie o prisma:**
npx prisma db push

**Inicie o servidor de desenvolvimento:**
npm run dev
