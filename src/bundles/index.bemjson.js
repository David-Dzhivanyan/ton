module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('../blocks.04-project/header/header.tmpl-specs/base.bemjson'),
    {block: 'main', content: [
        require('../blocks.04-project/stake-now/stake-now.tmpl-specs/base.bemjson'),
      ]},
    // require('./../blocks.04-base/footer/footer.tmpl-specs/base.bemjson'),
    ],
};
