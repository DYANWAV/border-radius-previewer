import React from "react"
import { BorderRadiusInput } from "./BorderRadiusInput"
import { Borders } from "../types"

interface Props {
	onChange: (
		border: Borders,
	) => (e: React.ChangeEvent<HTMLInputElement>) => void
	borders: number[]
	reset: () => void
}

export const InputsContainer: React.FC<Props> = ({
	onChange,
	reset,
	borders,
}) => {
	const [tl, tr, br, bl] = borders

	return (
		<div>
			<section className="boxShadow mx-auto my-4 flex w-full max-w-[440px] flex-col items-center gap-6 rounded-xl border-2 border-sky-50 p-6 text-sky-50 sm:p-8">
				<BorderRadiusInput
					name="top-left"
					value={tl}
					onChange={onChange(0)}
				/>

				<BorderRadiusInput
					name="top-right"
					value={tr}
					onChange={onChange(1)}
				/>

				<BorderRadiusInput
					name="bottom-right"
					value={br}
					onChange={onChange(2)}
				/>

				<BorderRadiusInput
					name="bottom-left"
					value={bl}
					onChange={onChange(3)}
				/>
			</section>

			<button
				className="borderIndigo"
				onClick={reset}
			>
				Reset
			</button>
		</div>
	)
}
