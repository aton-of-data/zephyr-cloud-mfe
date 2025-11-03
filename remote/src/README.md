# Estrutura da Aplicação Remote

Esta aplicação segue os princípios do **Atomic Design Pattern** e boas práticas do React para garantir escalabilidade e manutenibilidade.

## 📁 Estrutura de Pastas

```
src/
├── components/           # Componentes React organizados por Atomic Design
│   ├── atoms/           # Componentes básicos e indivisíveis
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.css
│   │       └── index.ts
│   ├── molecules/       # Combinações simples de átomos
│   │   └── Card/
│   │       ├── Card.tsx
│   │       ├── Card.css
│   │       └── index.ts
│   ├── organisms/       # Componentes complexos
│   │   ├── Counter/
│   │   └── UserProfile/
│   └── index.ts         # Barrel export para todos os componentes
├── types/               # Tipos TypeScript compartilhados
│   └── index.ts
├── hooks/               # Custom hooks do React
├── utils/               # Funções utilitárias
├── assets/              # Imagens, ícones, etc.
├── App.tsx              # Componente raiz da aplicação
├── App.css
├── bootstrap.tsx        # Ponto de entrada para micro-frontend
├── main.tsx
└── index.css
```

## 🧩 Atomic Design Pattern

### Atoms (Átomos)
Componentes básicos e indivisíveis, não podem ser quebrados em componentes menores.

**Exemplos:**
- `Button` - Botão reutilizável com variantes e tamanhos

### Molecules (Moléculas)
Combinações simples de átomos que formam unidades funcionais básicas.

**Exemplos:**
- `Card` - Container que combina header, body e footer

### Organisms (Organismos)
Componentes complexos que combinam moléculas e átomos para formar seções funcionais da interface.

**Exemplos:**
- `Counter` - Contador completo com controles
- `UserProfile` - Perfil de usuário com avatar e detalhes

## 📦 Exportação de Componentes

Todos os componentes são exportados através de barrel exports (`index.ts`) para facilitar os imports:

```typescript
// Importando um componente
import { Button, Card, Counter, UserProfile } from './components';

// Importando tipos
import type { ButtonProps, CardProps } from './components';
```

## 🎯 Boas Práticas Implementadas

1. **Barrel Exports**: Cada componente tem um `index.ts` para exportação limpa
2. **Separação de Tipos**: Tipos compartilhados estão em `types/index.ts`
3. **Co-localização**: CSS e componente ficam na mesma pasta
4. **Estrutura Escalável**: Fácil adicionar novos componentes em cada nível
5. **Type Safety**: Uso de TypeScript com tipagem forte

## 🚀 Como Adicionar Novos Componentes

### Adicionar um Atom
```bash
src/components/atoms/NovoAtom/
├── NovoAtom.tsx
├── NovoAtom.css
└── index.ts
```

### Adicionar uma Molecule
```bash
src/components/molecules/NovaMolecule/
├── NovaMolecule.tsx
├── NovaMolecule.css
└── index.ts
```

### Adicionar um Organism
```bash
src/components/organisms/NovoOrganism/
├── NovoOrganism.tsx
├── NovoOrganism.css
└── index.ts
```

Lembre-se de:
1. Exportar o componente no `index.ts` do próprio componente
2. Adicionar o export no `components/index.ts`
3. Adicionar o tipo correspondente em `types/index.ts` se necessário

## 📝 Convenções de Nomenclatura

- **Componentes**: PascalCase (ex: `Button.tsx`)
- **Arquivos de estilo**: PascalCase.css (ex: `Button.css`)
- **Pastas**: PascalCase (ex: `Button/`)
- **Tipos**: PascalCase com sufixo Props (ex: `ButtonProps`)

## 🔗 Convenções de CSS

- Prefixo `mf-` para todas as classes CSS (micro-frontend)
- BEM-like naming quando necessário
- Classes específicas por componente para evitar conflitos

