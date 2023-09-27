module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
