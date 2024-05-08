module.exports = {
  block: 'page',
  title: 'Notgem',
  content: [
    require('../blocks.04-project/header/header.tmpl-specs/base.bemjson'),
    {block: 'main', content: [
        {cls: 'mb-18', content: [
            require('../blocks.04-project/stake-now/stake-now.tmpl-specs/base.bemjson'),
          ]},
        {content: [
            require('../blocks.04-project/diagram/diagram.tmpl-specs/base.bemjson'),
          ]},
      ]},
    require('../blocks.04-project/footer/footer.tmpl-specs/base.bemjson'),
    ],
};
