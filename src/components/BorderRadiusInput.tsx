import { useId } from "react"

interface Props {
	value: number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	name: string
}

export const BorderRadiusInput: React.FC<Props> = ({
	value,
	onChange,
	name,
}) => {
	const inputID = useId()

	return (
		<section className="grid w-full grid-cols-[1fr_0.2fr] gap-2 text-xs sm:grid-cols-[1fr_1fr_0.5fr] sm:gap-4 sm:text-base">
			<label htmlFor={inputID}>{name}: </label>
			<input
				className="col-span-2 col-start-1 w-full sm:col-span-1"
				type="range"
				name={name}
				id={inputID}
				onChange={onChange}
				value={value}
			/>
			<span className="col-start-2 row-start-1 text-center sm:col-start-3">
				{value}%
			</span>
		</section>
	)
}
