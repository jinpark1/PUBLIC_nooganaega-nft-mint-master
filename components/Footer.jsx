import { Container } from './Container'
import clsx from 'clsx'
import Link from 'next/link'

import {
	TwitterIcon,
} from '../components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				target="_blank"
				rel="noreferrer"
				href={href}
				className="group flex text-sm font-medium text-cyan-200 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
			>
				<Icon className="h-6 w-6 flex-none fill-cyan-400 transition group-hover:fill-teal-500" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	)
}

export function Footer() {
  return (
    <footer className="bg-background">
      <Container.Outer>
        <div className="
				
				 border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6">
							<div className="mt-2 flex gap-2 flex-wrap justify-center">
								<SocialLink
									href="https://twitter.com/nooganaega"
									aria-label="Follow on Twitter"
									icon={TwitterIcon}
								/>
						</div>
              <p className="font-bold text-sm text-cyan-400">
                &copy; {new Date().getFullYear()} NoogaNaega. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
