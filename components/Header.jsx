import Link from 'next/link';

export default function Header() {
	return (
		<header className="min-w-full text-cyan-600 pt-14 pb-16 px-4 md:px-0 bg-background">
				<div className="justify-center flex items-center container mx-auto max-w-5xl h-full">
					<Link href="/" passHref className='font-coiny text-xl md:text-3xl font-bold'>
							<div className="mx-5 mb-[-1rem]">
							<span className='pr-2 bg-clip-text text-cyan-400 text-4xl md:text-4xl'>
								NoogaNaega
							</span>
							</div>
					</Link>
				</div>
			</header>
	)
}
