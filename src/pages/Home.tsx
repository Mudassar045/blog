import React from 'react'

import SiteConfig from 'constants/SiteConfig'
import Layout from 'layout/Layout'
import ExternLink from 'components/Link'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<Layout>
			<section className="hero is-fullheight is-default" style={{ minHeight: '80vh' }}>
				<div className="hero-body" style={{ paddingTop: '0rem' }}>
					<div id="info-container" className="container has-text-centered">
						<div className="columns is-vcentered">
							<div className="column is-three-fifths is-centered has-nice-link">
								<div>
									<img
										id="profile-pic"
										src="images/mudassar-ali.jpeg"
										width="140"
										height="140"
										alt="avatar"
									/>
									<h1 className="title is-3">Hi, I&apos;m {SiteConfig.siteTitleAlt}</h1>
									<p className="is-size-5">{SiteConfig.homeDescription}</p>
								</div>
								<hr style={{ borderColor: 'grey' }} />
								<br />
								<div className="media">
									<div className="media-left">
										<a
											className="image is-64x64 is-marginless no-underline"
											href="https://labs.cerp.org.pk">
											<img className="is-rounded" src="images/mischool.ico" alt="avatar" />
										</a>
									</div>
									<div className="media-content">
										<p className="title is-5" style={{ marginBottom: '1.25rem' }}>
											Current Projects
										</p>
										<p>
											Leading and working on <ExternLink href="mischool.pk" title={'MISchool'} />{' '}
											and &nbsp;
											<ExternLink href="ilmexchange.com" title="IlmExchange" />, trying to make
											sustainable tools for Education at{' '}
											<a href="https://labs.cerp.org.pk"> CERP Labs</a>. Also planning and
											designing various other&nbsp;
											<ExternLink href="github.com/mudssrali" title="tools" /> to make this world
											to grow with technology.
										</p>
									</div>
								</div>
								<div className="media">
									<div className="media-left">
										<a
											className="image is-64x64 is-marginless no-underline"
											href={SiteConfig.userGitHub}>
											<img className="is-rounded" src="images/oss-heart.svg" alt="oss" />
										</a>
									</div>
									<div className="media-content">
										<p className="title is-5" style={{ marginBottom: '1.25rem' }}>
											Open-source
										</p>
										<p>
											Projects I&apos;ve contributed to include{' '}
											<ExternLink href="github.com/taniarascia/takenote" title="Takenote.dev" />
											,&nbsp;
											<ExternLink href="gridsome.com" title="Gridsome.org" />
											,&nbsp;
											<ExternLink href="github.com/microsoft/vscode" title="VS-Code" />
											,&nbsp;
											<ExternLink href="github.com/react-pdf" title="ReactPDF" /> and{' '}
											<ExternLink href="github.com/googlechromelabs" title="Google Chrome Labs" />
											.&nbsp; You can find more on&nbsp;
											<ExternLink href={SiteConfig.userGitHub} title="GitHub" />.
										</p>
									</div>
								</div>
								<div className="media">
									<div className="media-left">
										<a
											className="image is-64x64 is-marginless no-underline"
											href={SiteConfig.userGitHub}>
											<img className="is-rounded" src="images/oss-blog.png" alt="oss" />
										</a>
									</div>
									<div className="media-content">
										<p className="title is-5" style={{ marginBottom: '1.25rem' }}>
											Blog
										</p>
										<p>
											I write less, but you can find a few recent blog posts of mine about JS, TS
											and Elixir at <Link to="/blog">Blog</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Home
