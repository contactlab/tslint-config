import {Configuration} from 'tslint';

const config: Configuration.RawConfigFile = {
  defaultSeverity: 'error',
  extends: ['tslint:recommended', 'tslint-eslint-rules'],
  rules: {
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'brace-style': true,
    deprecation: true,
    'linebreak-style': [true, 'LF'],
    'interface-name': false,
    'no-unused-expression': [true, 'allow-tagged-template'],
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'lowercase-last',
        'named-imports-order': 'lowercase-last'
      }
    ],
    quotemark: [true, 'single', 'avoid-template', 'avoid-escape'],
    'switch-default': false,
    'ter-arrow-body-style': [true, 'as-needed'],
    'ter-arrow-parens': [true, 'as-needed'],
    'ter-arrow-spacing': [
      true,
      {
        before: true,
        after: true
      }
    ],
    'ter-indent': [
      true,
      2,
      {
        VariableDeclarator: 2,
        SwitchCase: 1
      }
    ],
    'ter-no-script-url': true,
    'ter-prefer-arrow-callback': [true],
    'trailing-comma': false,
    'triple-equals': true
  }
};

export = config;
