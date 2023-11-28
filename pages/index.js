import { config } from '../dapp.config';
import { Dialog } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Index() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isAndroid, setIsAndroid] = useState(false);


	useEffect(() => {
		let isAndroid = navigator.userAgent.match(/Android/i);
		setIsAndroid(isAndroid);
	}, [])

	return (
		<div className="isolate bg-background">
			<Head>
				<title>{config.title}</title>
				<meta name="description" content={config.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" />
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-400"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
					</Dialog.Panel>
				</Dialog>
			</div>
			<main>
				<div className="relative py-5 sm:py-5 lg:pb-5">
				<div className="mx-auto max-w-2xl text-center">							
							<h1 className="mb-5 text-4xl font-semibold tracking-tight text-cyan-400 sm:text-6xl">
								<span className="flex justify-center align-middle">
									<span className="font-coiny">NoogaNaega</span>
								</span>
							</h1>
							</div>
					<div className="flex 
						flex-col 
						items-center 
						mx-auto 
						max-w-7xl 
						px-5 
						lg:px-0"
					>
						<img 
								src='/images/diamondNoogaNaega.png' 
								alt="diamond nooga"
								className="md:w-3/6 lg:w-3/6"
								priority
							/>
						<div className="mx-auto max-w-2xl text-center">							
							<div className="justify-center mt-12 flex items-center justify-start md:justify-center gap-x-6">	
								<div className='font-coiny text-primary '>
									<div className='flex items-center'>
										{!isAndroid ?
										<div className='text-center'>
											<Link
												href="red"
												className="block 
													text-center 
													align-middle 
													mx-2 
													rounded-md 
													bg-gradient-to-r 
													from-cyan-500 
													via-cyan-200 
													to-cyan-600 
													px-7
													pt-3
													pb-2
													mb-1
													text-2xl 
													lg:text-4xl
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
												ENTER!
											</Link>
										</div>
									:
									<Link className="
										mx-2
										text-center
										rounded-md 
										bg-gradient-to-r 
										from-cyan-500 
										via-cyan-200 
										to-cyan-600 
										px-10
										pt-[12px]
										pb-[18px]
										mt-[10px]
										text-2xl
										lg:text-4xl
										leading-5
										text-coiny
										font-semibold 
										text-white 
										shadow-lg
										hover:shadow-cyan-400/50 
										hover:bg-indigo-400 
										focus-visible:outline 
										focus-visible:outline-2 
										focus-visible:outline-offset-2 
										focus-visible:outline-indigo-400" 
										href="red"
										passHref
									>
										<div className=''>MEFF</div>
									</Link>
										}
									</div>
							</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
