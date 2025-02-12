import { useCopy } from "../hooks/useCopy"
import { BorderRadiusTemplate } from "../types"

interface Props {
	borderRadius: BorderRadiusTemplate
}

export const CssContainer: React.FC<Props> = ({ borderRadius }) => {
	const { copy, inputRef, value, isCopied } = useCopy({ borderRadius })

	return (
		<section>
			<label htmlFor="css">CSS</label>
			<div className="flex flex-col gap-2 sm:flex-row">
				<input
					className="border-2 border-indigo-50 bg-transparent outline-indigo-50 selection:bg-indigo-600 selection:text-indigo-50"
					type="text"
					ref={inputRef}
					name="css"
					id="css"
					value={value}
					readOnly
				/>
				<button
					className="borderIndigo min-w-[100px]"
					onClick={copy}
				>
					{isCopied ? "copied" : "copy"}
				</button>
			</div>
		</section>
	)
}
