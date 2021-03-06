import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Layout from 'layout/Layout'

const CharacterCounter = () => {
	let [input, setInput] = useState('')
	let [toggleCode, setToggleCode] = useState(false)

	let charactersCount = input.split('').length
	let wordsCount = input ? input.split(' ').length : 0
	let spacesCount = input ? wordsCount - 1 : 0
	let sentenceCount = input ? input.split(/[.!?]+/).length - 1 : 0

	const codeString =
		"let [input, setInput] = useState('')\nlet wordsCount = input ? input.split(' ').length : 0\nlet spacesCount = input ? wordsCount - 1 : 0\nlet sentenceCount = input ? input.split(/[.!?]+/).length - 1 : 0"

	return (
		<Layout>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered is-centered">
							<div className="column is-two-thirds content">
								<h3>Character Counter</h3>
								<p>Just playing with React useState() and with JS data structures</p>
								<div className="box" style={{ marginTop: 10 }}>
									<textarea
										className="textarea"
										style={{ marginTop: 10 }}
										onChange={e => setInput(e.target.value)}
										placeholder="Start writing here..."
									/>
									<div className="columns is-mobile" style={{ marginTop: 10, overflowX: 'auto' }}>
										<div className="column has-text-centered">
											<p className="">Characters</p>
											<p>{charactersCount}</p>
										</div>
										<div className="column has-text-centered">
											<p>Spaces</p>
											<p>{spacesCount}</p>
										</div>
										<div className="column has-text-centered">
											<p>Words</p>
											<p>{wordsCount}</p>
										</div>
										<div className="column has-text-centered">
											<p>Sentences</p>
											<p>{sentenceCount}</p>
										</div>
									</div>
								</div>
								<div className="box" style={{ marginTop: 10 }}>
									<button
										className="button is-danger is-fullwidth"
										onClick={() => setToggleCode(!toggleCode)}>
										Show Code
									</button>
									{toggleCode && (
										<SyntaxHighlighter language="javascript" style={hopscotch}>
											{codeString}
										</SyntaxHighlighter>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default CharacterCounter
