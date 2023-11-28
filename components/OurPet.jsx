import SectionTitle from "./SectionTitle"

const people = [
  {
    name: 'Star',
    role: 'Since Year 2006',
    imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2Fpet%2Fstar%20byul.jpg?alt=media&token=7f432ae6-2502-4f15-8b08-c7372d6b2b84',
		twitterUrl: '#',
    linkedinUrl: '#',
  },
	{
    name: 'Game',
    role: 'Since Year 2013',
    imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2Fpet%2FGame.jpg?alt=media&token=e2150c4b-2d46-4edc-9892-dc0d9beded03',
		twitterUrl: '#',
    linkedinUrl: '#',
  },
	{
    name: 'Acorn',
    role: 'Since Year 2021',
    imageUrl:
      'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2Fpet%2Facorn.jpg?alt=media&token=737a16a0-80c9-4bb4-ac88-f98d66b0d170',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sing',
    role: 'Since Year 2022',
    imageUrl:
      'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2Fpet%2FSingx2.png?alt=media&token=b29cd392-9d25-4d44-8b8f-068e526f8b94',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mountain',
    role: 'Since Year 2018',
    imageUrl:
      'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2Fpet%2FMountain.png?alt=media&token=859a00e1-cd97-4baf-b40e-ed711105338d',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'River',
    role: 'Since Year 2018',
    imageUrl:
      'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2FredDapp%2Fpet%2FRiver.png?alt=media&token=299acf3c-8e3c-4b82-81f8-eaaee5456d0b',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export default function OurPet() {
  return (
		
    <div className="
			border-t 
			text-cyan-400 
			border-zinc-100
			bg-background 
			py-24 
			sm:py-32
			mt-[1rem]
			pt-[8rem]
		">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <SectionTitle title="Advisors" />      
          <p className="mt-6 text-lg leading-8 text-cyan-400 font-coiny">
            Our advisory board is here to help us achieve our goals and save the world from bad ideas. 
					</p>

        </div>
        <ul
          role="list"
          className="text-center mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-56 w-56 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-base leading-7 tracking-tight text-primary font-coiny">{person.name}</h3>          
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
