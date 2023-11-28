const noogaNaega = [
	{
		name: '1',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F1.png?alt=media&token=7d9d621a-6914-406b-abfd-430541992179',
	},
	{
		name: '2',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F2.png?alt=media&token=c452dd4d-d252-4960-aff3-b8278e40d342',
	},
	{
		name: '3',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F3.png?alt=media&token=a89fb821-f7a7-405f-a711-87134e9d9d1e',
	},
	{
		name: '4',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F4.png?alt=media&token=77b7e214-07d2-4f12-bb37-1744064e0635',
	},
	{
		name: '5',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F5.png?alt=media&token=cb5e0747-b4ed-47d1-9039-578f6427ca9e',
	},
	{
		name: '6',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F6.png?alt=media&token=1adaad63-2eb0-4dd9-ae80-1b03944387cf',
	},
	{
		name: '7',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F7.png?alt=media&token=32de2cdc-b4fb-4cc0-a0d9-4751e0c11176',
	},
	{
		name: '8',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F8.png?alt=media&token=0de60161-f5c5-4bca-8190-ddd867ba0e65',
	},
	{
		name: '9',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F9.png?alt=media&token=1a5a776d-b25c-445e-896e-e9695c983e6a',
	},
	{
		name: '10',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F10.png?alt=media&token=5f21ba6d-5450-432f-ab21-e6f1fee65f31',
	},
	{
		name: '11',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F11.png?alt=media&token=7f5eb35a-3aa4-40c8-9efc-2ee30e773b08',
	},
	{
		name: '12',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F12.png?alt=media&token=68f5f35f-5c7a-4d83-8919-f6adc6b51d01',
	},
	{
		name: '13',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F13.png?alt=media&token=583d8702-3b4d-4d96-bebb-d4ef13bd0da9',
	},
	{
		name: '14',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F14.png?alt=media&token=91e982e8-9198-45ad-b826-fb9d82f3a1dc',
	},
	{
		name: '15',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F15.png?alt=media&token=ee2acf37-9ee0-4338-b488-929622202e23',
	},
	{
		name: '16',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F16.png?alt=media&token=758230e4-bcb0-4a43-8285-5408f5971abf',
	},
	{
		name: '17',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F17.png?alt=media&token=54422c64-cd65-4775-a398-423fbeac367b',
	},
	{
		name: '18',
		imageUrl:
			'https://ik.imagekit.io/gx9wdlr977/nooganaega//o/media%2F18.png?alt=media&token=26f5c014-6429-4e34-a4d7-727571314ad8',
	},
]

export default function NoogaNaegaRedCollection() {
  return (
		<div className="
			border-zinc-100	
			text-cyan-400 
			bg-background 
			mt-[1rem]
			"
		>
      <div>
        <ul
          role="list"
          className="px-7 mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-y-10 gap-x-10 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {noogaNaega.map(nooga => (
            <li key={nooga.name}>
              <img className="mx-auto h-26 w-26 rounded-full" src={nooga.imageUrl} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
