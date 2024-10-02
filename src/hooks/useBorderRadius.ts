import { useState } from "react"
import { Borders } from "../types"
import { INITIAL_BORDER_RADIUS } from "../consts.d"

export const useBorderRadius = () => {
	const [borders, setBorders] = useState<number[]>(INITIAL_BORDER_RADIUS)

	const onChange =
		(border: Borders) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setBorders(prev => {
				const newBorders = [...prev]
				newBorders[border] = parseInt(e.target.value)
				return newBorders
			})
		}

	const reset = () => {
		if (borders === INITIAL_BORDER_RADIUS) return

		setBorders(INITIAL_BORDER_RADIUS)
	}

	const [topLeft, topRightt, bottomRight, bottomLeft] = borders

	return {
		topLeft,
		topRightt,
		bottomLeft,
		bottomRight,
		borders,
		onChange,
		reset,
	}
}
