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
- ✅ **Testes unitários** (Jest + Testing Library) — **59 testes** em **24 suítes** (componentes, páginas, API e infra SSR).
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
`ThemeProvider`. São **59 testes** em **24 suítes**:

| Arquivo                                                               | Escopo                     | O que é validado                                                                                                                   |
| --------------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `components/Button/Button.test.tsx`                                   | `Button`                   | Renderiza como `<button>` e dispara `onClick`; vira link com `href`; `isLoading` aplica `aria-busy`, desabilita e bloqueia clique. |
| `components/ButtonIcon/ButtonIcon.test.tsx`                           | `ButtonIcon`               | Botão de ícone acessível; alterna `aria-pressed`; estado desabilitado.                                                             |
| `components/Header/Header.test.tsx`                                   | `Header`                   | `nav` principal e links; `aria-current` na página atual; menu mobile alterna `aria-expanded`.                                      |
| `components/Link/Link.test.tsx`                                       | `Link`                     | Link interno; link externo com `rel` de segurança; estado `aria-disabled`.                                                         |
| `components/Input/Input.test.tsx`                                     | `Input`                    | Label associada; texto de ajuda; estado de erro; botão de limpar valor.                                                            |
| `components/Select/Select.test.tsx`                                   | `Select`                   | Label associada; texto de ajuda; estado de erro; opções/placeholder; `onChange`; desabilitado.                                     |
| `components/ProfessionalCard/ProfessionalCard.test.tsx`               | `ProfessionalCard`         | Nome, especialidade e pronomes; favorito alterna `aria-pressed`; ação para o perfil.                                               |
| `components/ProfessionalProfileCard/ProfessionalProfileCard.test.tsx` | `ProfessionalProfileCard`  | Informações do profissional; favorito; navegação para o perfil.                                                                    |
| `components/ProfessionalsExplorer/ProfessionalsExplorer.test.tsx`     | `ProfessionalsExplorer`    | Formulário acessível; carregamento inicial; erro de API; busca; estado vazio.                                                      |
| `components/ProfessionalsHero/ProfessionalsHero.test.tsx`             | `ProfessionalsHero`        | Título e descrição da página de profissionais.                                                                                     |
| `components/Hero/Hero.test.tsx`                                       | `Hero`                     | Título principal e CTAs da landing; diferenciais da plataforma.                                                                    |
| `components/HowItWorks/HowItWorks.test.tsx`                           | `HowItWorks`               | Três passos do fluxo; âncora para navegação interna.                                                                               |
| `components/Values/Values.test.tsx`                                   | `Values`                   | Título da seção e três pilares de valor.                                                                                           |
| `components/CtaBand/CtaBand.test.tsx`                                 | `CtaBand`                  | Convite e link para encontrar profissionais.                                                                                       |
| `components/Footer/Footer.test.tsx`                                   | `Footer`                   | Logo, links institucionais, redes sociais, aviso legal e copyright.                                                                |
| `components/BackToTop/BackToTop.test.tsx`                             | `BackToTop`                | Foco após scroll; scroll suave ao topo ao clicar.                                                                                  |
| `components/BackToTop/LazyBackToTop.test.tsx`                         | `LazyBackToTop`            | Carregamento lazy do botão voltar ao topo.                                                                                         |
| `components/Container/Container.test.tsx`                             | `Container`                | Renderização do conteúdo filho.                                                                                                    |
| `components/AppProviders/AppProviders.test.tsx`                       | `AppProviders`             | Providers globais renderizam o conteúdo.                                                                                           |
| `app/page.test.tsx`                                                   | Página `/`                 | Seções da landing page.                                                                                                            |
| `app/profissionais/page.test.tsx`                                     | Página `/profissionais`    | Metadata; hero, explorer e botão voltar ao topo.                                                                                   |
| `app/layout.test.tsx`                                                 | `RootLayout`               | Metadata/viewport globais; skip link, `main`, `nav` e estrutura do shell.                                                          |
| `app/api/professionals/route.test.ts`                                 | `GET /api/professionals`   | Lista e especialidades; filtros por texto e especialidade; `Cache-Control: no-store`.                                              |
| `lib/registry.test.tsx`                                               | `StyledComponentsRegistry` | Renderização dos filhos; callback de `useServerInsertedHTML` para injeção de estilos SSR.                                          |

Resultado esperado: `Test Suites: 24 passed`, `Tests: 59 passed`.

### Cobertura de testes

Última execução: `npm run test:coverage` (13/06/2026).

| Métrica    | Cobertura  |
| ---------- | ---------- |
| Statements | **99,85%** |
| Branches   | **98,59%** |
| Functions  | **91,77%** |
| Lines      | **99,85%** |

**Sobre o `% Funcs` (91,77%):** statements e lines (~99,8%) cobrem o comportamento exercitado pelos testes. A diferença em _functions_ vem do Istanbul contabilizar funções internas geradas pelo styled-components em arquivos `*.styled.ts` — eles têm **100% de lines** e são validados indiretamente pelos testes dos componentes (`Button`, `ButtonIcon`, etc.). O registry SSR (`lib/registry.test.tsx`) cobre explicitamente o callback de `useServerInsertedHTML`.

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

**Recomendado:** auditar a URL de produção na Vercel (janela anônima, sem extensões):

```
https://tech-challenge-lacrei-saude.vercel.app/
```

Alternativa local:

```bash
npm run build && npm run start
# Chrome > DevTools > Lighthouse > Mobile ou Desktop
# Obrigatório: janela anônima, sem extensões e servidor de produção
```

Metas do desafio: **Acessibilidade ≥ 90** e **Performance ≥ 80**.

### Resultados Lighthouse (evidências)

Auditorias em **13/06/2026** sobre a landing page (`/`) em **produção (Vercel)**, com **Lighthouse 13.2.0** (Chrome 149), janela anônima e sem extensões.

| Página | Dispositivo | Performance | Acessibilidade | Best Practices | SEO | Relatório                                                                                          |
| ------ | ----------- | ----------- | -------------- | -------------- | --- | -------------------------------------------------------------------------------------------------- |
| `/`    | Mobile      | **99** ✅   | **96** ✅      | 100            | 100 | [landing-mobile-vercel-2026-06-13.html](public/lighthouse/landing-mobile-vercel-2026-06-13.html)   |
| `/`    | Desktop     | **100** ✅  | **96** ✅      | 100            | 100 | [landing-desktop-vercel-2026-06-13.html](public/lighthouse/landing-desktop-vercel-2026-06-13.html) |

**URL auditada:** [https://tech-challenge-lacrei-saude.vercel.app/](https://tech-challenge-lacrei-saude.vercel.app/)

**Critérios atendidos:** Performance **99** (mobile) e **100** (desktop) — ambos ≥ 80. Acessibilidade **96** (meta ≥ 90) em ambos os dispositivos.

| Dispositivo | FCP   | LCP   | TBT  | CLS | Speed Index |
| ----------- | ----- | ----- | ---- | --- | ----------- |
| Mobile      | 0,8 s | 2,0 s | 0 ms | 0   | 0,8 s       |
| Desktop     | 0,2 s | 0,4 s | 0 ms | 0   | 0,2 s       |

**Como visualizar os relatórios HTML**

A pasta `public/` é a raiz de arquivos estáticos — **não** inclua `/public/` na URL.

| Onde                                          | URL                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Local (após `npm run dev` ou `npm run start`) | http://localhost:3000/lighthouse/landing-mobile-vercel-2026-06-13.html                          |
| Vercel (após deploy dos arquivos)             | https://tech-challenge-lacrei-saude.vercel.app/lighthouse/landing-mobile-vercel-2026-06-13.html |

> **Importante:** o Next.js lê a pasta `public/` apenas na **inicialização** do servidor. Se os arquivos foram adicionados com o servidor já rodando, pare e suba de novo (`Ctrl+C` → `npm run dev` ou `npm run start`).

Alternativa sem servidor: abra o arquivo direto no Chrome (duplo clique em `public/lighthouse/*.html` no Finder).

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

### Aplicação publicada

| Ambiente      | URL                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Produção      | **[https://tech-challenge-lacrei-saude.vercel.app/](https://tech-challenge-lacrei-saude.vercel.app/)**                               |
| Landing       | [https://tech-challenge-lacrei-saude.vercel.app/](https://tech-challenge-lacrei-saude.vercel.app/)                                   |
| Profissionais | [https://tech-challenge-lacrei-saude.vercel.app/profissionais](https://tech-challenge-lacrei-saude.vercel.app/profissionais)         |
| API mock      | [https://tech-challenge-lacrei-saude.vercel.app/api/professionals](https://tech-challenge-lacrei-saude.vercel.app/api/professionals) |

**Plataforma:** Vercel, conectada ao repositório Git. Cada push na branch principal dispara build e deploy automático.

### Estratégia de rollback funcional

Em caso de falha após um deploy, a reversão segue esta ordem (do mais rápido ao mais estruturado):

1. **Rollback instantâneo na Vercel (recomendado em produção)**
   - Acesse o [dashboard do projeto](https://vercel.com/) → **Deployments**.
   - Localize o último deploy **estável** (status _Ready_, smoke test OK).
   - Menu **⋯** → **Promote to Production** (ou **Instant Rollback**, conforme a UI).
   - A Vercel passa a servir o artefato anterior **sem novo build**; o domínio público volta ao estado funcional em segundos.

2. **Rollback via CLI**

   ```bash
   vercel rollback
   ```

   Reverte a produção para o deployment imediatamente anterior.

3. **Rollback via Git (correção definitiva)**
   - Identifique o commit problemático (`git log`).
   - Reverta com `git revert <commit>` ou restaure a branch principal ao commit estável.
   - Push dispara novo deploy; a Vercel mantém histórico de deployments para auditoria.

4. **Validação antes de promover (prevenção)**
   - Cada PR/branch gera **Preview Deployment** com URL única.
   - Smoke test manual (navegação, busca em `/profissionais`, API mock) antes de merge na main.
   - Só após validação o merge aciona o deploy de produção.

**Critério de sucesso do rollback:** URLs públicas respondendo HTTP 200, landing e `/profissionais` renderizando, e `GET /api/professionals` retornando JSON — equivalente ao último deploy estável conhecido.

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

Cada pasta segue o padrão `Component.tsx`, `Component.styled.ts`, `Component.types.ts` (quando há props tipadas), `index.ts` e `*.test.tsx`. Exceção: `Container` exporta apenas o styled component via `Container.styled.ts`.

---

## 📁 Estrutura

```
app/
  layout.tsx                    # Root layout: fontes, metadata, providers
  layout.test.tsx
  page.tsx                      # Home (Server Component compondo as seções)
  page.test.tsx
  favicon.ico                   # Ícone LS (App Router)
  profissionais/
    page.tsx                    # Página de busca de profissionais
    page.test.tsx
    SectionSpacing.tsx          # Espaçamento da seção do explorer
  api/professionals/
    route.ts                    # API mock (Route Handler)
    route.test.ts
components/
  AppProviders/                 # Registry + ThemeProvider + GlobalStyle
  Header/  Footer/  Container/  Link/
  Button/  ButtonIcon/  Input/  Select/   # UI base (com *.types.ts)
  Hero/  Values/  HowItWorks/  CtaBand/   # Seções da landing
  ProfessionalsHero/  ProfessionalsExplorer/
  ProfessionalProfileCard/  ProfessionalCard/
  BackToTop/                    # Botão + wrapper lazy (LazyBackToTop)
lib/
  theme.ts                      # API única de tokens
  styled.d.ts                   # Tipagem do DefaultTheme
  GlobalStyle.ts                # Reset e estilos globais
  registry.tsx                  # SSR de styled-components
  registry.test.tsx
  professionals.ts              # Dados mock tipados
  tokens/
    primitives.ts               # Valores brutos (paleta, spacing…)
    semantic.ts                 # Papéis reutilizáveis
    components.ts               # Tokens por peça de UI
hooks/
  useMediaQuery.ts              # Hook de media query
public/
  images/                       # lacrei-horizontal-gradiente2.svg, lacrei-ls-mark.png
  lighthouse/                   # Relatórios Lighthouse (evidências Performance/A11y)
test-utils/
  renderWithTheme.tsx           # Helper de testes com ThemeProvider
  mockMatchMedia.ts             # Mock reutilizável de matchMedia
jest.config.ts  jest.setup.ts   # Jest + next/jest
next.config.ts                  # compiler.styledComponents
eslint.config.mjs
.husky/pre-commit               # lint-staged + Prettier
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
