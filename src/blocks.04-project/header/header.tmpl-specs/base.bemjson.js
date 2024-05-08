module.exports = [
	{block: 'header', tag: 'header', content: [
			{cls: 'container-xxl', content: [
					{elem: 'inner', content: [
							{elem: 'logo', content: [
									{content: [
											{block: 'img', cls: 'me-24', lazy: true, src: '/images/header/logo.png'},
											{block: 'img', lazy: true, src: '/images/header/NotGem.png'}
										]},
								]},
							{elem: 'nav', tag: 'ul', content: [
									{tag: 'li', content: [
											{block: 'a', attrs: {href: '#'}, content: 'Home'},
										]},
									{tag: 'li', content: [
											{block: 'a', attrs: {href: '#'}, content: 'About'},
										]},
									{tag: 'li', content: [
											{block: 'a', attrs: {href: '#'}, content: 'Tokenomics'},
										]},
								]},
							{block: 'btn', cls: 'btn-outline-light', content: 'Dex Tools'}
						]}
				]},
		]},
];