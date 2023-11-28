import { config } from '../dapp.config';
import Head from 'next/head';

import Header from '../components/Header';
import NoogaNaegaRedCollection from '../components/NoogaNaegaRedCollection';
import OurPet from '../components/OurPet';
export default function Red() {
	return (
		<div className="min-h-screen h-full w-full flex flex-col bg-background overflow-hidden">
			<Head>
				<title>{config.title}</title>
				<meta name="description" content={config.description} />
				<link rel="icon" href="/favicon.ico" />
				<link 
					rel="preload" 
					href="https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2FLofi_Nooga.png?alt=media&token=337a5cdc-8c52-4c31-83d7-62bf6c018b49" 
					as="image" 
  				/>
			</Head>
			<Header />
			<div className='h-full w-full container max-w-5xl mx-auto flex flex-col items-center'>
				<div className='flex flex-col items-center max-w-[62rem] w-full'>
					<div className='
						flex 
						flex-col 
						md:flex-col 
						md:space-x-16 
						items-center 
						w-full'
					>
          <img
            src='https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2FLofi_Nooga.png?alt=media&token=337a5cdc-8c52-4c31-83d7-62bf6c018b49'
            alt='nooganaega lofi image'
            className='rounded-[60px] h-50 px-5 sm:h-25 md:h-25 lg:h-25'
          />
					</div>
					<NoogaNaegaRedCollection />
					<OurPet />
				</div>
			</div>
		</div>
	)
}
