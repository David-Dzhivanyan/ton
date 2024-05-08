module.exports = [
	{block: 'diagram', attrs: {id: 'section3'}, content: [
			{elem: 'inner', content: [
					{elem: 'title', content: 'Stake ETH, <span class="fw-bold">get</span> eETH - a natively \n' +
							'restaked liquid <span class="fw-bold">staking</span> token that\n' +
							'fuels <span class="fw-bold">DeFi and decentralizes</span> Ethereum.'},
					{elem: 'main', content: [
							{elem: 'info', content: [
									{elem: 'description', content: [
											{elem: 'logo', content: [
													{block: 'img', lazy: true, src: '/images/diagram/economics.png'},
													{content: 'Tokenomics'}
												]},
											{elem: 'supply', content: [
													{content: 'Supply'},
													{content: '100.000.000'}
												]},
											{elem: 'about', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'},
										]},
								]},
							{elem: 'img', content: [
									{block: 'img', lazy: true, src: '/images/diagram/diagram.png'}
								]}
						]}
				]},
		]},
];