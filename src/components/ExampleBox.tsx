import { BorderRadiusTemplate } from "../types"

interface Props {
	borderRadius: BorderRadiusTemplate
}

export const ExampleBox: React.FC<Props> = ({ borderRadius }) => {
	return (
		<div
			className="box boxShadow"
			style={{
				borderRadius: borderRadius,
			}}
		></div>
	)
}
