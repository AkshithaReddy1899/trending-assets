import React from 'react';
import data from './data';

const Card = () => {
	return (
		<div className="flex justify-center items-center flex-col h-full w-full">
			<h1 className="text-gray-300 text-lg font-normal pl-28 py-12 text-left w-full">Trending Assets</h1>
			<div className="text-blue-100 flex justify-center items-center flex-col lg:flex-row flex-wrap">
			  {
					data.map((obj) => (
						<div key={obj.id} className="w-60 flex justify-center items-center flex-col bg-slate-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 m-4 py-2 px-4 border border-slate-700">
							<div className="">
							  <img src={obj.icon} alt={obj.name} className="w-16 my-4" />
							</div>
							<div className="h-full w-full bg-slate-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 text-center">
								<p className="text-slate-600">
									<span className="font-bold">{obj.name}</span>
									&nbsp;&nbsp;
									<span>[{obj.shortname}]</span>
								</p>
								<p className="flex justify-around items-center bg-gray-900 rounded-xl p-1 my-2 px-auto mx-auto font-bold w-full">
									<span>${obj.price}</span>
									<span className={(obj.percentage > 0)? "text-green-400 text-sm" : "text-red-400 text-sm"}>{obj.percentage}%</span>
								</p>
								<p className="text-gray-600 font-medium text-xs my-2">Price</p>
								<p className="flex justify-around items-center bg-gray-900 rounded-xl p-1 my-2 px-auto mx-auto w-full">
									<span className="font-bold">${obj.tvl}</span>
								</p>
								<p className="text-gray-600 font-medium text-xs my-2">TVL</p>
								<div className="flex justify-around items-center bg-gray-900 rounded-xl p-1 my-2 px-auto mx-auto w-3/4">
									{
										obj.pairings.map((arr) => (
											<img src={arr.img} alt={arr.name} className="w-8" key={arr.id} />
										))
									}
								</div>
								<p className="text-gray-600 font-medium text-xs my-2">Popular pairs</p>
							</div>
						</div>
					))
			  }
			</div>
		</div>
	)
}

export default Card;
