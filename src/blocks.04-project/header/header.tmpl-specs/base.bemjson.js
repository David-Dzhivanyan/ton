module.exports = [
	{block: 'header', tag: 'header', attrs: {id: 'section1'}, content: [
			{cls: 'container-xxl', content: [
					{elem: 'inner', content: [
							{elem: 'logo', content: [
									{content: [
											{block: 'img', cls: 'me-24', lazy: true, src: './images/header/logo.png'},
											{block: 'img', lazy: true, src: './images/header/NotGem.png'}
										]},
								]},
							{elem: 'nav', tag: 'ul', content: [
									{tag: 'li', content: [
											{block: 'a', attrs: {href: 'https://twitter.com/NotgemTon'}, content: 'Twitter'},
										]},
									{tag: 'li', content: [
											{block: 'a', attrs: {href: 'https://t.me/notgemton'}, content: 'Telegram'},
										]},
									{tag: 'li', content: [
											{block: 'a', attrs: {href: '#section3'}, content: 'Tokenomics'},
										]},
								]},
							{block: 'btn', cls: 'btn-outline-light', attrs: {href: 'https://dedust.io/'}, content: 'Dex Tools'}
						]}
				]},
		]},
];