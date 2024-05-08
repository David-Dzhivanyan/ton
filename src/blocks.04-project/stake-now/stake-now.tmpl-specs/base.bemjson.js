module.exports = [
	{block: 'stake-now', attrs: {id: 'section2'}, content: [
			{elem: 'inner', content: [
					{elem: 'title', content: 'More than just a Gem in <br> the Ton network. We <span class="text-gradient">create</span>,<br> improve and <span class="text-gradient">evolving.</span>'},
					{elem: 'description', content: 'Stake ETH, get eETH - a natively restaked liquid staking token that\n' +
							'fuels DeFi and decentralizes Ethereum.'},
					{block: 'btn', cls: 'btn-primary', content: 'Buy Now'}
				]},
			{elem: 'bg', content: [
					{block: 'img', lazy: true, src: '/images/stake-now/main_bg.png'}
				]}
		]}
];