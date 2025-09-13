import js from '@eslint/js';
import { default as tsEslint } from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import vue from 'eslint-plugin-vue';
import globals from 'globals';

const tsConfig = tsEslint.config(
  ...tsEslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: false
        }
      }
    }
  }
);

const tsxConfig = tsEslint.config(
  ...tsEslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
);

export default [
  // 通用配置，适用于所有文件
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.min.js',
      '*.d.ts'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      // 通用规则
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-undef': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'arrow-spacing': ['error', { before: true, after: true }]
    }
  },

  // JavaScript 配置
  {
    files: ['**/*.js'],
    ...js.configs.recommended
  },

  // JSX 配置
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要显式导入React
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  // TypeScript 配置
  ...tsConfig.map(config => ({
    ...config,
    files: ['**/*.ts']
  })),

  // TSX 配置
  ...tsxConfig.map(config => ({
    ...config,
    files: ['**/*.tsx']
  })),

  // Vue 配置
  {
    files: ['**/*.vue'],
    ...vue.configs['flat/essential'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser
      }
    },
    rules: {
      ...vue.configs['flat/essential'].rules,
      'vue/multi-word-component-names': 'warn',
      'vue/script-setup-uses-vars': 'error',
      'vue/no-unused-vars': 'warn',
      'vue/require-prop-types': 'off'
    }
  }
];
    