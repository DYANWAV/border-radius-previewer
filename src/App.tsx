import "./App.css"
import { CssContainer } from "./components/CssContainer"
import { ExampleBox } from "./components/ExampleBox"
import { InputsContainer } from "./components/InputsContainer"
import { useBorderRadius } from "./hooks/useBorderRadius"
import { BorderRadiusTemplate } from "./types"

function App() {
	const {
		bottomLeft,
		bottomRight,
		topLeft,
		topRightt,
		borders,
		onChange,
		reset,
	} = useBorderRadius()

	const borderRadius: BorderRadiusTemplate = `${topLeft}% ${topRightt}% ${bottomRight}% ${bottomLeft}%`

	return (
		<>
			<main>
				<header>
					<h1 className="m-auto w-max text-2xl sm:text-4xl">
						Border Radius Previewer
					</h1>
				</header>

				<article className="card">
					<ExampleBox borderRadius={borderRadius} />
					<CssContainer borderRadius={borderRadius} />
					<InputsContainer
						borders={borders}
						reset={reset}
						onChange={onChange}
					/>
				</article>
			</main>
		</>
	)
}

export default App
