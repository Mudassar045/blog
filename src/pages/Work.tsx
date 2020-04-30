import React from 'react'
import { Link } from 'react-router-dom'

import Layout from 'layout/Layout'

const Work = () => {

    return <Layout>
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered is-centered">
                        <div className="column is-half is-narrow content">
                            <h1 id="about-mudassar">What I really DO</h1>
                            <p>
                                Most of the time I only do programming, learning about new technologies and explore something new every day.
                                Below are some works that I practiced and made demo of them.
                            </p>
                            <h3 id="more">My Works</h3>
                            <ul>
                                <li><a href="https://github.com/Mudassar045/typescript-cheatsheet" target="_blank" rel="noopener noreferrer">Easy Typescript Cheatsheet</a></li>
                                <li><Link to="/works/image-gallery">Image Gallery with React Motion</Link></li>
                                <li><Link to="/works/transliterate">Check out Transliteration Example</Link></li>
                                <li><Link to="/works/emoji-explorer">Explore Emojis</Link></li>
                                <li><Link to="/works/character-counter">Character Counter</Link></li>
                                <li><Link to="/works/random-string-generator">Random String Generator</Link></li>
                                <li><Link to="/works/react-bootstrap">Playing With React Bootstrap</Link></li>
                                <li><Link to="/works/d3-learning">Learning D3</Link></li>
                                <li><Link to="/works/printing/sample-1">Sample-1: Generating and Downloading Document using React PDF Renderer</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}

export default Work