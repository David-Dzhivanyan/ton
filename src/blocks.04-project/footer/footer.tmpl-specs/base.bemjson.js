module.exports = [
	{block: 'footer', tag: 'footer', content: [
			{cls: 'container-xxl', content: [
					{elem: 'bg', content: [
							{elem: 'inner', content: [
									{elem: 'logo', content: [
											{content: 'Based on'},
											{elem: 'ton', content: [
													{block: 'fi', mods: {icon: 'TON'}},
												]},
											{content: 'TON'}
										]},
									{elem: 'image', content: [
											{block: 'img', lazy: true, src: '/images/header/NotGem.png'},
										]},
									{elem: 'date', content: '2024 © NotGem'},
								]},
						]},
			]},
		]}
];