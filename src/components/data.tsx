let data : {
	id: number,
	icon: any,
	name: string,
	shortname: string,
	price: number,
	percentage: number,
	tvl: number,
	pairings: {
		id: number,
		img: string,
		name: string,
	}[],
}[]

data = [
	{
		id: 0,
		icon: 'https://cdn-icons-png.flaticon.com/128/1490/1490849.png',
		name: 'Bitcoin',
		shortname: 'BTC',
		price: 32812.80,
	  percentage: +10,
	  tvl: 60000,
		pairings: [
			{
				id: 0,
				img: 'https://cdn-icons-png.flaticon.com/128/6001/6001527.png',
				name: 'solana',
			},
			{
				id: 1,
				img: 'https://cdn-icons-png.flaticon.com/128/7016/7016523.png',
				name: 'ethereum',
			},{
				id: 2,
				img: 'https://cdn-icons-png.flaticon.com/128/2794/2794204.png',
				name: 'binance',
			}],
	},
	{
		id: 1,
		icon: 'https://cdn-icons-png.flaticon.com/128/6001/6001527.png',
		name: 'Solana',
		shortname: 'SOL',
		price: 32.83,
	  percentage: -12.32,
	  tvl: 60000,
		pairings: [
			{
				id: 4,
				img: 'https://cdn-icons-png.flaticon.com/128/1490/1490849.png',
				name: 'bitcoin',
			},
			{
				id: 5,
				img: 'https://cdn-icons-png.flaticon.com/128/7016/7016523.png',
				name: 'ethereum',
			},{
				id: 6,
				img: 'https://cdn-icons-png.flaticon.com/128/2794/2794204.png',
				name: 'binance',
			}],
	},
	{
		id: 2,
		icon: 'https://cdn-icons-png.flaticon.com/128/7016/7016523.png',
		name: 'Ethereum',
		shortname: 'ETH',
		price: 1466.45,
	  percentage: -11.93,
	  tvl: 60000,
		pairings: [
			{
				id: 7,
				img: 'https://cdn-icons-png.flaticon.com/128/6001/6001527.png',
				name: 'solana',
			},
			{
				id: 8,
				img: 'https://cdn-icons-png.flaticon.com/128/7016/7016523.png',
				name: 'ethereum',
			},{
				id: 9,
				img: 'https://cdn-icons-png.flaticon.com/128/1490/1490849.png',
				name: 'bitcoin',
			}],
	},
	{
		id: 3,
		icon: 'https://cdn-icons-png.flaticon.com/128/2794/2794204.png',
		name: 'Binance',
		shortname: 'BUSD',
		price: 1.00,
	  percentage: +0.26,
	  tvl: 60000,
		pairings: [
			{
				id: 10,
				img: 'https://cdn-icons-png.flaticon.com/128/6001/6001527.png',
				name: 'solana',
			},
			{
				id: 11,
				img: 'https://cdn-icons-png.flaticon.com/128/7016/7016523.png',
				name: 'ethereum',
			},{
				id: 12,
				img: 'https://cdn-icons-png.flaticon.com/128/2794/2794204.png',
				name: 'binance',
			}],
	},
	{
		id: 4,
		icon: 'https://cdn-icons-png.flaticon.com/128/2171/2171947.png',
		name: 'Shiba Inu',
		shortname: 'SHIB',
		price: 0.00000001948,
	  percentage: -8.1,
	  tvl: 60000,
		pairings: [
			{
				id: 13,
				img: 'https://cdn-icons-png.flaticon.com/128/6001/6001527.png',
				name: 'solana',
			},
			{
				id: 14,
				img: 'https://cdn-icons-png.flaticon.com/128/7016/7016523.png',
				name: 'ethereum',
			},{
				id: 15,
				img: 'https://cdn-icons-png.flaticon.com/128/2794/2794204.png',
				name: 'binance',
			}],
	}
]

export default data;
