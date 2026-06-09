# Lacrei Saúde — Desafio Técnico Front-end

Aplicação web com **duas páginas interativas** focadas em **acessibilidade, responsividade, performance e impacto visual**, respeitando a identidade da Lacrei Saúde e sua missão de garantir que cada pessoa se sinta segura ao buscar cuidado. 🌈

> Construído com **Next.js 16 (App Router) + TypeScript + Styled-Components**.

---

## ✨ Visão geral

| Rota                 | Descrição                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| `/`                  | Landing page institucional: hero, valores, "como funciona" e CTA.                                      |
| `/profissionais`     | Busca de profissionais de saúde com filtro por especialidade e texto, consumindo uma **API simulada**. |
| `/api/professionals` | Route Handler que serve os dados mock (filtragem por `q` e `specialty`).                               |

### Itens obrigatórios atendidos

- ✅ **Header e Footer personalizados** com identidade visual (logo, cores, faixa arco-íris, navegação).
- ✅ **Três (ou mais) botões interativos com ação real**:
  1. **Navegação** — botão "Encontrar profissionais" (`<Link>` com prefetch) leva de `/` para `/profissionais`.
  2. **Menu mobile** — botão sanduíche no Header abre/fecha a navegação (`aria-expanded`).
  3. **Busca** — botão "Buscar" + campos `Input`/`Select` disparam requisição à API mock e mostram estado de carregamento.
  4. **Favoritar** — botão de coração em cada card (`aria-pressed`).
  5. **Voltar ao topo** — botão flutuante que rola a página suavemente (carregado via lazy loading).
- ✅ **Responsividade mobile-first** com `clamp()`, grids fluidos e breakpoints (`480/768/1024/1200`).
- ✅ **Acessibilidade**: HTML semântico (`header`, `nav`, `main`, `footer`, `article`, listas), `aria-*` aplicados, foco visível, _skip link_, `prefers-reduced-motion`, `lang="pt-BR"` e contraste validado.
- ✅ **Performance**: páginas estáticas pré-renderizadas, fontes self-hosted (`next/font`, `display: swap`), SVGs inline (sem requisições extras), code-splitting e lazy loading de componente cliente.
- ✅ **Next.js + TypeScript + Styled-Components** (SSR de estilos via registry + compilador).
- ✅ **Testes unitários** (Jest + Testing Library) — **57 testes** em **23 suítes** (componentes, páginas e API).
- ✅ **Mock de integração com API** (bônus) via Route Handler + JSON local.

---

## 🧰 Stack técnica

- **Next.js 16.2.7** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Styled-Components 6** (com `compiler.styledComponents` do Next + registry SSR)
- **Jest** + **@testing-library/react** + **user-event**
- **next/font** (Nunito Sans, self-hosted)
- **Husky** + **lint-staged** + **Prettier** (formatação no pre-commit)

---

## 🚀 Rodando localmente

Pré-requisitos: **Node.js 18.18+** (recomendado 20+) e npm.

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento (http://localhost:3000)
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Build e execução em produção

```bash
# Gera o build otimizado
npm run build

# Sobe o servidor de produção (http://localhost:3000)
npm run start
```

---

## ✅ Testes

```bash
# Roda toda a suíte
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test:coverage
```

### Registro dos testes aplicados

Arquivos de teste **colocalizados** ao lado do código (`*.test.tsx` / `*.test.ts`).
Componentes com tema usam o helper `test-utils/renderWithTheme.tsx`, que injeta o
`ThemeProvider`. São **57 testes** em **23 suítes**:

| Arquivo                                                               | Escopo                    | O que é validado                                                                                                                   |
| --------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `components/Button/Button.test.tsx`                                   | `Button`                  | Renderiza como `<button>` e dispara `onClick`; vira link com `href`; `isLoading` aplica `aria-busy`, desabilita e bloqueia clique. |
| `components/ButtonIcon/ButtonIcon.test.tsx`                           | `ButtonIcon`              | Botão de ícone acessível; alterna `aria-pressed`; estado desabilitado.                                                             |
| `components/Header/Header.test.tsx`                                   | `Header`                  | `nav` principal e links; `aria-current` na página atual; menu mobile alterna `aria-expanded`.                                      |
| `components/Link/Link.test.tsx`                                       | `Link`                    | Link interno; link externo com `rel` de segurança; estado `aria-disabled`.                                                         |
| `components/Input/Input.test.tsx`                                     | `Input`                   | Label associada; texto de ajuda; estado de erro; botão de limpar valor.                                                            |
| `components/Select/Select.test.tsx`                                   | `Select`                  | Label associada; texto de ajuda; estado de erro; opções/placeholder; `onChange`; desabilitado.                                     |
| `components/ProfessionalCard/ProfessionalCard.test.tsx`               | `ProfessionalCard`        | Nome, especialidade e pronomes; favorito alterna `aria-pressed`; ação para o perfil.                                               |
| `components/ProfessionalProfileCard/ProfessionalProfileCard.test.tsx` | `ProfessionalProfileCard` | Informações do profissional; favorito; navegação para o perfil.                                                                    |
| `components/ProfessionalsExplorer/ProfessionalsExplorer.test.tsx`     | `ProfessionalsExplorer`   | Formulário acessível; carregamento inicial; erro de API; busca; estado vazio.                                                      |
| `components/ProfessionalsHero/ProfessionalsHero.test.tsx`             | `ProfessionalsHero`       | Título e descrição da página de profissionais.                                                                                     |
| `components/Hero/Hero.test.tsx`                                       | `Hero`                    | Título principal e CTAs da landing; diferenciais da plataforma.                                                                    |
| `components/HowItWorks/HowItWorks.test.tsx`                           | `HowItWorks`              | Três passos do fluxo; âncora para navegação interna.                                                                               |
| `components/Values/Values.test.tsx`                                   | `Values`                  | Título da seção e três pilares de valor.                                                                                           |
| `components/CtaBand/CtaBand.test.tsx`                                 | `CtaBand`                 | Convite e link para encontrar profissionais.                                                                                       |
| `components/Footer/Footer.test.tsx`                                   | `Footer`                  | Logo, links institucionais, redes sociais, aviso legal e copyright.                                                                |
| `components/BackToTop/BackToTop.test.tsx`                             | `BackToTop`               | Foco após scroll; scroll suave ao topo ao clicar.                                                                                  |
| `components/BackToTop/LazyBackToTop.test.tsx`                         | `LazyBackToTop`           | Carregamento lazy do botão voltar ao topo.                                                                                         |
| `components/Container/Container.test.tsx`                             | `Container`               | Renderização do conteúdo filho.                                                                                                    |
| `components/AppProviders/AppProviders.test.tsx`                       | `AppProviders`            | Providers globais renderizam o conteúdo.                                                                                           |
| `app/page.test.tsx`                                                   | Página `/`                | Seções da landing page.                                                                                                            |
| `app/profissionais/page.test.tsx`                                     | Página `/profissionais`   | Metadata; hero, explorer e botão voltar ao topo.                                                                                   |
| `app/layout.test.tsx`                                                 | `RootLayout`              | Metadata/viewport globais; skip link, `main`, `nav` e estrutura do shell.                                                          |
| `app/api/professionals/route.test.ts`                                 | `GET /api/professionals`  | Lista e especialidades; filtros por texto e especialidade; `Cache-Control: no-store`.                                              |

Resultado esperado: `Test Suites: 23 passed`, `Tests: 57 passed`.

---

## ♿ Acessibilidade

- **HTML semântico**: `header`, `nav` (com `aria-label`), `main#conteudo-principal`, `footer`, `article`, listas e títulos hierárquicos.
- **Skip link** "Pular para o conteúdo principal" visível ao focar via teclado.
- **`aria-*`**: `aria-expanded`/`aria-controls` no menu, `aria-pressed` no favoritar, `aria-current` na navegação, `aria-busy`/`aria-disabled` no botão, `aria-live` na contagem de resultados, `aria-invalid`/`aria-describedby` em `Input`/`Select`, `aria-hidden` em ícones decorativos.
- **Foco visível** padronizado (`:focus-visible`) e ordem de tabulação coerente.
- **Movimento reduzido**: respeita `prefers-reduced-motion`.
- **Contraste**: paleta com verde-petróleo `#0B6B5B` sobre branco e texto `#16201D`, garantindo razão de contraste AA (alvo ≥ 90 no Lighthouse de acessibilidade).
- **Teste com leitor de tela**: recomendado validar com **VoiceOver** (macOS: `Cmd+F5`) ou **NVDA** (Windows), navegando por landmarks e pelos botões interativos.

---

## ⚡ Performance

- **Páginas estáticas** (`/` e `/profissionais`) pré-renderizadas no build.
- **Fontes otimizadas** com `next/font` (self-hosted, `display: swap`, sem requisição ao Google).
- **Imagens enxutas**: logo horizontal em **SVG** (`next/image`); favicon em **ICO/PNG** (`app/favicon.ico`); ícones de interface são SVG inline — sem biblioteca de ícones pesada.
- **Code-splitting**: cada seção é uma _client island_; o botão "voltar ao topo" é carregado via **`next/dynamic` (lazy loading, `ssr: false`)**, ficando fora do bundle inicial.
- **SSR de estilos** com styled-components (registry + `useServerInsertedHTML`), evitando _flash_ de conteúdo sem estilo.

### Como medir (Lighthouse)

```bash
npm run build && npm run start
# Abra o Chrome em http://localhost:3000, DevTools > Lighthouse > Analyze
```

Metas do desafio: **Acessibilidade ≥ 90** e **Performance ≥ 80**.

---

## 🔌 Mock de integração com API

- Dados em `lib/professionals.ts` (tipados) + helper de filtragem.
- Endpoint em `app/api/professionals/route.ts`:
  - `GET /api/professionals` — lista completa
  - `GET /api/professionals?specialty=Psicologia` — filtra por especialidade
  - `GET /api/professionals?q=recife` — busca por nome/cidade/UF/especialidade
- Simula latência de rede (~400ms) para exercitar os estados de **carregamento** (skeletons), **erro** (com "tentar novamente") e **vazio** na página `/profissionais`.

---

## 🚢 Deploy (Vercel)

> **🔗 Deploy:** `https://tech-challenge-lacrei-saude.vercel.app/`

---

## 🎨 Justificativas visuais e técnicas

### Visuais

- **Identidade Lacrei Saúde**: o **Marsha Design System (Figma)** é privado e não editável; sem acesso aos tokens internos, a paleta foi construída a partir da **identidade pública** da marca — verde esmeralda (`#018762`) como cor primária e o **acento arco-íris** (bandeira LGBTQIAPN+) em detalhes decorativos. Ver camada de tokens abaixo.
- **Contraste como prioridade**: o verde primário foi escurecido para `#0B6B5B` a fim de garantir contraste AA de texto branco sobre os botões e do texto sobre fundos claros.
- **Tipografia**: **Nunito Sans** (via `next/font`), por ter ótima legibilidade, sensação acolhedora e ampla gama de pesos — coerente com um produto de saúde inclusivo.
- **Tom de voz inclusivo**: uso de linguagem neutra ("para todes", pronomes nos cards) reforçando a missão da plataforma.

### Técnicas

- **Styled-Components com SSR**: habilitado `compiler.styledComponents` no `next.config.ts` e criado um **registry** (`lib/registry.tsx`) com `useServerInsertedHTML` — abordagem oficial para o App Router, evitando _flash_ de estilo. Props de estilo usam **transient props (`$`)** para não vazarem ao DOM.
- **Server vs Client Components**: páginas e `layout` permanecem **Server Components**; apenas as ilhas que precisam de tema/interatividade são `"use client"`, reduzindo o JS enviado.
- **Tema tipado**: `lib/styled.d.ts` estende o `DefaultTheme`, dando autocompletar e segurança de tipos em todos os styled components.
- **Design tokens em camadas**: primitivos → semânticos → componentes → `theme` (ver seção abaixo). Componentes consomem apenas `theme.*`, nunca cores soltas.
- **Componentes do handoff**: `Button`, `ButtonIcon`, `Input`, `Select` e `ProfessionalProfileCard` seguem tokens de `lib/tokens/components.ts` (estados default/hover/focus/error, etc.).
- **Adapter fino**: `ProfessionalCard` mapeia o tipo `Professional` para as props de `ProfessionalProfileCard`, separando dados da UI.
- **Acessibilidade no componente, não como remendo**: `Button` polimórfico (`<button>` ou `<Link>`), `Input`/`Select` com label associada e estados comunicados por `aria-*`.
- **API mock realista**: Route Handler com latência e filtros, permitindo exercitar carregamento/erro/vazio de forma fiel a um cenário de produção.

---

## 🎨 Design tokens

Tokens organizados em **três camadas** em `lib/tokens/`, expostos por uma API única em `lib/theme.ts`:

| Camada          | Arquivo         | Papel                                                                                                                         |
| --------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Primitivos**  | `primitives.ts` | Valores brutos — paleta (emerald, gray, red…), spacing, tipografia, breakpoints, sombras. **Não usar direto em componentes.** |
| **Semânticos**  | `semantic.ts`   | Papéis reutilizáveis: `color.background.accent`, `color.text.default`, `gradient.primary`, `typography.headline.xl`, etc.     |
| **Componentes** | `components.ts` | Tokens por peça de UI: `button`, `buttonIcon`, `input`, `card`, `header`, `footer`, `hero`, `link`, `backToTop`, `logo`.      |

**Uso nos styled components:**

```ts
import { theme } from '@/lib/theme';

// ✅ Correto — token semântico ou de componente
color: ${({ theme }) => theme.color.text.accent};
background: ${({ theme }) => theme.button.primary.background.default};

// ❌ Evitar — primitivo ou hex solto no componente
color: #018762;
```

`GlobalStyle.ts` aplica reset, foco visível e variáveis de fonte; breakpoints e layout máximo vêm de `theme.breakpoints` e `theme.layout`.

---

## 🧩 Componentes

| Grupo                  | Pastas                                                                                      | Responsabilidade                                              |
| ---------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Shell**              | `AppProviders`, `Header`, `Footer`, `Container`                                             | Providers, navegação, rodapé e largura máxima                 |
| **Ações e formulário** | `Button`, `ButtonIcon`, `Link`, `Input`, `Select`                                           | CTAs, favoritar, links internos/externos e campos do explorer |
| **Landing**            | `Hero`, `Values`, `HowItWorks`, `CtaBand`                                                   | Seções da página `/`                                          |
| **Profissionais**      | `ProfessionalsHero`, `ProfessionalsExplorer`, `ProfessionalProfileCard`, `ProfessionalCard` | Busca, listagem e card (adapter → profile card)               |
| **Utilitários**        | `BackToTop`                                                                                 | Botão flutuante com lazy load (`LazyBackToTop`)               |

Cada pasta segue o padrão `Component.tsx`, `Component.styled.ts`, `index.ts` e `*.test.tsx` (quando coberto).

---

## 📁 Estrutura

```
app/
  layout.tsx                  # Root layout: fontes, metadata, favicon, providers
  favicon.ico                 # Ícone LS (App Router)
  page.tsx                    # Home (Server Component compondo as seções)
  profissionais/
    page.tsx                  # Página de busca de profissionais
    SectionSpacing.tsx        # Espaçamento da seção do explorer
  api/professionals/route.ts  # API mock (Route Handler)
components/
  AppProviders/               # Registry + ThemeProvider + GlobalStyle
  Header/  Footer/  Container/  Link/
  Button/  ButtonIcon/  Input/  Select/
  Hero/  Values/  HowItWorks/  CtaBand/           # Seções da landing
  ProfessionalsHero/  ProfessionalsExplorer/      # Página de profissionais
  ProfessionalProfileCard/  ProfessionalCard/     # Card + adapter de dados
  BackToTop/                  # Botão + wrapper lazy (next/dynamic)
lib/
  theme.ts  styled.d.ts  GlobalStyle.ts  registry.tsx  professionals.ts
  tokens/primitives.ts  semantic.ts  components.ts   # Design tokens
hooks/useMediaQuery.ts        # Hook de media query (disponível para layouts responsivos)
public/images/                # lacrei-horizontal-gradiente2.svg, lacrei-ls-mark.png
test-utils/renderWithTheme.tsx
jest.config.ts  jest.setup.ts  # Jest + next/jest + matchMedia mock
next.config.ts                # compiler.styledComponents
eslint.config.mjs
.husky/pre-commit             # lint-staged + Prettier
# Testes colocalizados: *.test.tsx / *.test.ts ao lado de cada módulo
```

---

## 📜 Scripts

| Script                  | Ação                        |
| ----------------------- | --------------------------- |
| `npm run dev`           | Servidor de desenvolvimento |
| `npm run build`         | Build de produção           |
| `npm run start`         | Servidor de produção        |
| `npm run lint`          | ESLint                      |
| `npm run format`        | Prettier em todo o projeto  |
| `npm test`              | Testes unitários            |
| `npm run test:watch`    | Testes em watch             |
| `npm run test:coverage` | Testes com cobertura        |
