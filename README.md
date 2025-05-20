# 📦 Skins Trade Control Mobile (itens de CS-GO) - App Mobile

Um app mobile desenvolvido com **React Native + Expo Router**, que ajuda usuários a calcular quanto receberiam vendendo caixas e cápsulas de CS:GO. O projeto também implementa autenticação, proteção de rotas, navegação com parâmetros e uso de ActionSheet para facilitar a navegação entre funcionalidades.

## 🔧 Tecnologias Utilizadas

- [Expo Router](https://expo.github.io/router)
- React Native
- TypeScript
- Context API
- JSON Server (mock de dados)
- ActionSheet do `@expo/react-native-action-sheet`

---

## 📱 Funcionalidades

- ✅ **Login e Registro de Usuário**
- ✅ **Proteção de Rota** (acesso à calculadora somente autenticado)
- ✅ **Calculadora de Valor no PIX (0.65x ou 0.8x)**
- ✅ **Alternância entre modos de cálculo com parâmetros de rota**
- ✅ **Uso de `useSearchParams` na navegação**
- ✅ **Menu com ActionSheet para navegar entre páginas**
- ✅ **Listagem de Itens (caixas e cápsulas) a partir de um arquivo `db.json`**

---

## 🔐 Autenticação

O app utiliza Context API para gerenciar o estado de autenticação do usuário. Usuários não autenticados são redirecionados automaticamente ao tentar acessar rotas protegidas (como a calculadora).

---

## 📊 Calculadora

A Calculadora permite inserir a quantidade de cada item (caixa/cápsula) que o usuário possui e retorna o total a receber no PIX com base no modo de cálculo escolhido:

- **Modo Padrão:** 65% do valor (multiplicado por 0.65)
- **Modo Alternativo:** 80% do valor (multiplicado por 0.8), ativado via parâmetro na URL (`?modo=0.8`)

---

## 🧭 Navegação

A navegação é feita usando o **Expo Router**, com:

- Stack Navigation
- Tabs (opcional)
- Parâmetros de navegação (`useSearchParams`)
- `useRouter` para redirecionamentos
- ActionSheet para abrir opções rápidas de navegação

---

## 📁 Estrutura de Arquivos

```bash
app/
├── index.tsx                # Página inicial (home)
├── login.tsx                # Tela de login
├── register.tsx             # Tela de cadastro
├── calculadora.tsx         # Calculadora protegida
├── Itens/
│   ├── containers.tsx      # Listagem de caixas e cápsulas
│   ├── caixas.tsx          # Detalhes das caixas
│   └── capsulas.tsx        # Detalhes das cápsulas
components/
├── Header.tsx              # Header dinâmico com ActionSheet
├── Card.tsx                # Card simples
├── MainCard.tsx            # Card com imagem e detalhes
context/
├── AuthContext.tsx         # Contexto de autenticação
database/
├── db.json                 # Arquivo com lista de itens

▶️ Como Rodar o Projeto

# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# 2. Acesse a pasta
cd seu-repo

# 3. Instale as dependências
yarn install

# 4. Inicie o projeto
yarn web --clear




🙋‍♂️ Autor

Desenvolvido por Everton Souza Wience (Sowe)
[Linktree](https://linktr.ee/Soweoff)
```
# Prints da Tela
![Tela 1](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716641/projeto%20SKT/GITHUB%20dispositivos%20moveis/xnethrxyabow8fyqkjm1.png)
![Tela 2](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716640/projeto%20SKT/GITHUB%20dispositivos%20moveis/tgfojlxglutwtcbela5y.png)
![Tela 3](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716640/projeto%20SKT/GITHUB%20dispositivos%20moveis/dsz3yox2yqlwrxnn5xoy.png)
![Tela 4](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716640/projeto%20SKT/GITHUB%20dispositivos%20moveis/alt0dekyrv8u5yjereqk.png)
![Tela 5](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716640/projeto%20SKT/GITHUB%20dispositivos%20moveis/dpgjfbripyko0pqosdos.png)
![Tela 6](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716640/projeto%20SKT/GITHUB%20dispositivos%20moveis/wqhzykobneytiqgdq7db.png)
![Tela 7](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716640/projeto%20SKT/GITHUB%20dispositivos%20moveis/mgbznixj5oqa76btjzu4.png)
![Tela 8](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716639/projeto%20SKT/GITHUB%20dispositivos%20moveis/ctvzrloytquj8apcuw0q.png)
![Tela 9](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716639/projeto%20SKT/GITHUB%20dispositivos%20moveis/uuo2pdbvqrtiqwx7kkel.png)
![Tela 10](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716639/projeto%20SKT/GITHUB%20dispositivos%20moveis/qju6gdf25tie65om4arq.png)
![Tela 11](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716639/projeto%20SKT/GITHUB%20dispositivos%20moveis/z72yyafj6mbu1b5ihzhy.png)
![Tela 12](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716639/projeto%20SKT/GITHUB%20dispositivos%20moveis/sgtgk2cpsaiqv3puqsif.png)
![Tela 13](https://res.cloudinary.com/dvqbwddan/image/upload/v1747716639/projeto%20SKT/GITHUB%20dispositivos%20moveis/yavk5ecxh0wyq4lilrby.png)


