const importRegex = fileType => [`^(@|app/${fileType})`, `^(@|./${fileType})`];

const REACT = ['react', 'react-dom', 'react-router-dom', 'recoil', 'react-dock-menu', 'framer-motion'];
const REACT_LIBRARIES = ['^react-', '^@react-'];
const NEXT_LIBRARIES = ['^next', '^@next'];
const EXTERNAL_LIBRARIES = ['^@?\\w'];

const STYLES = ['^.+\\.?(.styles)$', '^.+\\.?(.scss)$', '^.+\\.?(.css)$'];

const CORE_LAYER = ['core'];
const LIB_LAYER = ['lib'];
const UI = [`^(@|app/components)`, `^(@|app/_components)`, `^(@|./components)`, `^(@|./_components)`];
const TOOLS = ['hooks', 'stores', 'utils'].map(item => importRegex(item));

const NOT_MATCHED = ['^'];
const TYPES = [['^\\.'], ['^.+\\u0000$']];

const defaultGroups = [
  REACT,
  REACT_LIBRARIES,
  NEXT_LIBRARIES,
  EXTERNAL_LIBRARIES,
  STYLES,
  UI,
  ...TOOLS,
  LIB_LAYER,
  CORE_LAYER,
  ...TYPES,
  NOT_MATCHED
];

module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'monk'],
  settings: { react: { version: 'detect' } },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'warn',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-default-props': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'error',
    'react/no-unused-state': 'warn',
    semi: ['error', 'always'],
    'monk/imports': ['error', { groups: defaultGroups }],
    'monk/exports': 'error'
  }
};
