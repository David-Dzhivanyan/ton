module.exports = [
	{block: 'stake-now', content: [
			{elem: 'inner', content: [
					{elem: 'main-text', content: 'Liquid Collective is the\n' +
							'<span class="text-gradient">trusted</span> and <span class="text-gradient">secure</span> liquid\n' +
							'staking standard.'},
					{elem: 'sub-text', content: 'Stake ETH, get eETH - a natively restaked liquid staking token that\n' +
							'fuels DeFi and decentralizes Ethereum.'},
					{block: 'btn', cls: 'btn-primary', content: 'Stake Now'}
				]},
			{elem: 'bg', content: [
					{block: 'img', lazy: true, src: '/images/stake-now/main_bg.png'}
				]}
		]}
];