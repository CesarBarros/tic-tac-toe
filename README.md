# Jogo da Velha - React

## Visão Geral do Projeto

Este é um Jogo da Velha (Tic Tac Toe) desenvolvido em React puro com JavaScript para o desafio técnico para vaga de desenvolvedor Web Sênior (React), implementando funcionalidades avançadas como temporizador automático, sistema de pontuação, personalização de cores e hooks customizados para gerenciamento de estado.

### Funcionalidades Principais

- **Jogo da Velha Clássico**: Implementação completa com detecção de vitória e empate
- **Sistema de Pontuação**: Partida melhor de 11 (primeiro a ganhar 11 jogos vence)
- **Temporizador Automático**: 5 segundos por jogada com movimento automático
- **Personalização Visual**: Menu flutuante para customizar cores em tempo real
- **Interface Responsiva**: Design limpo e intuitivo com feedback visual

## Estrutura de Pastas

```
src/
├── pages/
│   └── game              # Componente principal e lógica de integração
├── hooks/
│   ├── useGameState      # Hook para estado do jogo
│   ├── useScore          # Hook para sistema de pontuação
│   ├── useTimer          # Hook para temporizador
│   └── useCustomization  # Hook para personalização
├── components/
│   ├── Button            # Componente génerico de botão
│   ├── Card              # Componente génerico de card
│   ├── Cell              # Componente de célula individual
│   ├── CustomizationMenu # Menu de personalização das cores
│   ├── GameBoard         # Componente do tabuleiro
│   ├── GameStatusMessage # Compoente de status da partida
│   ├── ScoreBoard        # Componente do placar
│   └── Timer             # Componente do temporizador
├── styles/
│   └── Theme             # Tema inicial/padrão para ser usado no styled-components
└── README.md
```

## Justificativa das Decisões Técnicas

### Arquitetura de Hooks Customizados

**1. useGameState**

- **Responsabilidade**: Gerenciar estado do tabuleiro, jogador atual, detecção de vitória
- **Decisão**: Centralizou toda a lógica do jogo em um único hook para facilitar manutenção
- **Benefícios**: Reutilização, testabilidade e separação de responsabilidades

**2. useScore**

- **Responsabilidade**: Controlar pontuação e determinar vencedor da partida
- **Decisão**: Hook separado para manter a lógica de pontuação independente do jogo
- **Benefícios**: Permite diferentes sistemas de pontuação sem afetar a lógica do jogo

**3. useTimer**

- **Responsabilidade**: Gerenciar temporizador e executar ações automáticas
- **Decisão**: Hook dedicado com cleanup automático de intervals
- **Benefícios**: Evita memory leaks e centraliza lógica temporal

**4. useCustomization**

- **Responsabilidade**: Gerenciar cores e estado do menu de personalização
- **Decisão**: Hook isolado para permitir temas dinâmicos
- **Benefícios**: Facilita adição de novas opções de personalização

### Gerenciamento de Estado

**Estratégia Escolhida**: useState + hooks customizados

- **Justificativa**: Para um jogo simples, useState oferece simplicidade sem overhead
- **Alternativas Consideradas**: useReducer (complexidade desnecessária), Context API (prop drilling mínimo)

### Estrutura de Componentes

**Princípios Aplicados**:

- **Single Responsibility**: Cada componente tem uma responsabilidade específica
- **Composição**: Componentes pequenos e reutilizáveis
- **Props Drilling Controlado**: Estado centralizado nos hooks customizados

### Algoritmo de Detecção de Vitória

**Implementação**: Array de combinações vencedoras + verificação linear

- **Complexidade**: O(1) - sempre verifica 8 combinações
- **Justificativa**: Simples, eficiente e legível para um tabuleiro 3x3

### Temporizador e Jogada Automática

**Estratégia**: setInterval com cleanup e movimento aleatório

- **Decisão**: Movimento aleatório em posições disponíveis quando tempo expira
- **Considerações**: Reset automático do timer a cada jogada

## Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios

1. **JavaScript puro** - Sem TypeScript
2. **Hooks customizados** - 4 hooks implementados (useGameState, useScore, useTimer, useCustomization)
3. **Tipagem correta** - PropTypes implícitas via JavaScript
4. **Sem bibliotecas externas** - Apenas React puro
5. **Menu flutuante** - Personalização de cores em tempo real
6. **Temporizador** - 5 segundos por jogada com movimento automático
7. **Cálculo de resultado** - Sistema completo de pontuação até 11 vitórias
8. **Área de pontuação** - Placar persistente com reset
9. **Documentação** - README completo
10. **Git repository** - Pronto para versionamento

### 🚀 Diferenciais Implementados

- **Hooks nativos criativos**: Uso eficaz de useCallback, useEffect, useMemo
- **Organização por responsabilidades**: Separação clara entre lógica e apresentação
- **Estilização coesa**: Sistema de cores dinâmico e design responsivo
- **UX aprimorada**: Animações hover, feedback visual, transitions CSS
- **Acessibilidade**: Botões semânticos, cores contrastantes, feedback temporal

## Instruções para Build e Execução

### Pré-requisitos

- Node.js (versão 22+)
- yarn

### Instalação e Execução

```bash
# Clonar o repositório
git clone git@github.com:CesarBarros/tic-tac-toe.git
cd tic-tac-toe

# Instalar dependências
yarn install

# Executar em desenvolvimento
yarn dev

# Build para produção
yarn run build
```

### Estrutura de Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## Como Jogar

1. **Objetivo**: Seja o primeiro jogador a conseguir 11 vitórias
2. **Jogabilidade**: Clique em uma célula vazia para fazer sua jogada
3. **Temporizador**: Você tem 5 segundos para jogar, senão o jogo faz uma jogada aleatória
4. **Personalização**: Clique no botão 🎨 para abrir o menu de cores
5. **Reset**: Use "Nova Partida" para reiniciar o jogo ou "Zerar Placar" para resetar pontuação

## Tecnologias Utilizadas

- **React 18+** - Framework principal
- **JavaScript ES6+** - Linguagem de programação
- **Styled-components** - Estilização
- **Hooks Customizados** - Gerenciamento de estado modular

## Arquitetura e Padrões

### Padrões Aplicados

- **Custom Hooks Pattern**: Lógica reutilizável e testável
- **Composition Pattern**: Componentes pequenos e focados
- **Controlled Components**: Estado centralizado
- **Separation of Concerns**: Lógica separada da apresentação

### Performance

- **useCallback**: Otimização de re-renders em funções
- **useMemo**: Memoização de cálculos custosos (quando necessário)
- **Cleanup de Effects**: Prevenção de memory leaks

## Futuras Melhorias

- [ ] Histórico de partidas
- [ ] Diferentes tamanhos de tabuleiro
- [ ] Estatísticas detalhadas
- [ ] Temas pré-definidos
- [ ] Animações mais elaboradas
