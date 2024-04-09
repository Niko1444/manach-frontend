import Menu from '../../components/Menu'

function Setting() {
	return (
		<>
			<div className="flex flex-row items-center justify-center">
				<Menu />
				<div className="flex h-full flex-grow flex-col items-center justify-center">
					<h1 className="text-4xl font-bold">Setting</h1>
				</div>
			</div>
		</>
	)
}

export default Setting
