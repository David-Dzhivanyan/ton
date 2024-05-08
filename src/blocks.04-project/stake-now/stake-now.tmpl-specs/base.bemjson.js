module.exports = [
	{block: 'stake-now', attrs: {id: 'section2'}, content: [
			{elem: 'inner', content: [
					{elem: 'title', content: 'Liquid Collective is the\n' +
							'<span class="text-gradient">trusted</span> and <span class="text-gradient">secure</span> liquid\n' +
							'staking standard.'},
					{elem: 'description', content: 'Stake ETH, get eETH - a natively restaked liquid staking token that\n' +
							'fuels DeFi and decentralizes Ethereum.'},
					{block: 'btn', cls: 'btn-primary', content: 'Stake Now'}
				]},
			{elem: 'bg', content: [
					{block: 'img', lazy: true, src: '/images/stake-now/main_bg.png'}
				]}
		]}
];