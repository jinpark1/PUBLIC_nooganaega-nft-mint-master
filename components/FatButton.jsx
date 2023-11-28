import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function FatButton(props) {
	const [isAndroid, setIsAndroid] = useState(false);

	useEffect(() => {
		let isAndroid = navigator.userAgent.match(/Android/i);
		setIsAndroid(isAndroid);
	}, [])

	return (
		<div style={props.style}>
			{!isAndroid ?
				<p className="mt-[4rem] text-center text-lg leading-8 text-cyan-400 font-coiny">
					{props.link ?
						 <Link href={props.href}
							className="
							text-center 
							align-middle 
							mx-2 
							rounded-md 
							bg-gradient-to-r 
							from-cyan-500 
							via-cyan-200 
							to-cyan-600 
							px-3
							pt-3
							pb-3
							mb-1
							text-2xl 
							lg:text-2xl
							font-semibold 
							text-white 
							shadow-lg
							hover:shadow-cyan-400/50 
							hover:bg-indigo-400 
							focus-visible:outline 
							focus-visible:outline-2 
							focus-visible:outline-offset-2 
							focus-visible:outline-indigo-400
							"
							>
								{props.text}
							</Link> : 
						<button
							disabled
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className=" 
								text-center 
								align-middle 
								mx-2 
								rounded-md 
								bg-gradient-to-r 
								from-cyan-500 
								via-cyan-200 
								to-cyan-600 
								px-3
								pt-1
								pb-1
								mb-1
								text-2xl 
								uppercase
								lg:text-2xl
								font-semibold 
								text-white 
								shadow-lg
								hover:shadow-cyan-400/50 
								hover:bg-indigo-400 
								focus-visible:outline 
								focus-visible:outline-2 
								focus-visible:outline-offset-2 
								focus-visible:outline-indigo-400"
							>
								{props.text}
							</button>
					}
				</p> :
				<p className="mt-20 text-center text-lg leading-8 text-cyan-400 font-coiny">
					{props.link ? 
						<Link
						href={props.href}
						className="
						mx-2
						text-center
						rounded-md 
						bg-gradient-to-r 
						from-cyan-500 
						via-cyan-200 
						to-cyan-600 
						px-3
						pt-3
						pb-5
						mb-10
						text-2xl
						lg:text-2xl
						text-coiny
						font-semibold 
						text-white 
						shadow-sm 
						uppercase
						hover:bg-indigo-400 
						focus-visible:outline 
						focus-visible:outline-2 
						focus-visible:outline-offset-2 
						focus-visible:outline-indigo-400" 
						>
							{props.text}
						</Link> : 
						<button
							disabled
							href=""
							target="_blank"
							rel="noopener noreferrer"
							className="
							mx-2
							text-center
							rounded-md 
							bg-gradient-to-r 
							from-cyan-500 
							via-cyan-200 
							to-cyan-600 
							px-3
							pt-1
							pb-3
							mb-10
							text-2xl
							lg:text-2xl
							text-coiny
							font-semibold 
							text-white 
							shadow-sm 
							uppercase
							hover:bg-indigo-400 
							focus-visible:outline 
							focus-visible:outline-2 
							focus-visible:outline-offset-2 
							focus-visible:outline-indigo-400" 
						>
							{props.text}
						</button>
						}
				</p> }
		</div>
	)
}
