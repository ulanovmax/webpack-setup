module.exports = {
  // maximum number of characters in a line
  printWidth: 80,
  // Specify the number of spaces per indentation level
  tabWidth: 4,
  // use tabs instead of spaces to indent lines
  useTabs: false,
  // Do you need a semicolon at the end of the statement
  semi: true,
  // whether to use single quotes
  singleQuote: true,
  // use single quotes instead of double quotes in JSX
  jsxSingleQuote: false,
  // Print trailing commas when possible on multiple lines. (For example, single-line arrays will never have a trailing comma.) optional"<none|es5|all> ", default none
  trailingComma: 'es5',
  // print spaces between parentheses in object literals
  bracketSpacing: true,
  // The back angle brackets of jsx tags need to wrap
  jsxBracketSameLine: false,
  // include parentheses around individual arrow function arguments always: (x) => x \ avoid: x => x
  arrowParens: 'always',
  // Specify global whitespace sensitivity for HTML files css\strict\ignore
  htmlWhitespaceSensitivity: 'css',
  // Vue file script and style tag indentation
  vueIndentScriptAndStyle: true,
  // Plugins (TailwindCSS-Prettier)
  plugins: ["prettier-plugin-tailwindcss"],
};
