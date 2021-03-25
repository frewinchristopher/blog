import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { rhythm } from "../utils/typography"
import Sparkles from "./Sparkles"

export default function Bio() {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED)
                }
            }
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <>
            <GatsbyImage
                image={data.avatar.childImageSharp.gatsbyImageData}
                alt={data.site.siteMetadata.author}
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    minWidth: 260,
                    maxWidth: 260,
                    minHeight: 260,
                    maxHeight: 260,
                    borderRadius: `100%`,
                    marginTop: "2rem",
                    marginBottom: "1rem",
                }}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <div
                style={{
                    display: `flex`,
                    marginBottom: rhythm(2.5),
                    position: `relative`, // for canvas issue
                    zIndex: 10, // for canvas issue
                }}
            >
                <div>
                    <p className="bio-lead">
                        Hi! I'm Chris Frewin, I'm going to be COURSE MASTER for
                        2021!
                    </p>
                    <br />
                    <p>
                        Ha! I can prove that I'm a{" "}
                        <span style={{ fontWeight: "bold" }}>
                            COURSE MASTER
                        </span>{" "}
                        now! Check out all my courses and content on:
                        <br />
                        <a href="https://www.skillshare.com/user/christopherfrewin">
                            Skillshare
                        </a>
                        <br />
                        <a href="https://www.udemy.com/user/chris-frewin">
                            Udemy
                        </a>
                        <br />
                        <a href="https://www.tutorialspoint.com/videotutorials/profile/christopher_frewin">
                            Tutorialspoint
                        </a>
                        <br />
                        <a href="https://www.youtube.com/channel/UCLaNEXFBI1wpGtxvGVjfHKw">
                            YouTube
                        </a>
                        <br />
                        You can also check out
                        <a
                            href="https://fullstackcraft.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
                            <Sparkles>Full Stack Craft</Sparkles>
                        </a>
                        , the company I put all my full stack educational
                        content under!
                        <br />
                    </p>
                    <p>
                        If I'm not building or teaching full stack software,
                        I'll be found hiking, skiing, taking pictures, losing
                        money on options, spoiling homebrew, or creating music
                        and art. I (mostly) live in Austria.
                    </p>
                    <div className="socials-container">
                        <a href="https://instagram.com/_chrisfrewin_" rel="me">
                            Instagram
                        </a>
                        &nbsp; | &nbsp;
                        <a href="https://chrisfrewin.medium.com" rel="me">
                            Medium
                        </a>
                        &nbsp; | &nbsp;
                        <a href="https://twitter.com/Galt_" rel="me">
                            Twitter
                        </a>
                        &nbsp; | &nbsp;
                        <a href="https://github.com/princefishthrower" rel="me">
                            GitHub
                        </a>
                        &nbsp; | &nbsp;
                        <a
                            href="https://reddit.com/user/trollerroller"
                            rel="me"
                        >
                            Reddit
                        </a>
                        &nbsp; | &nbsp;
                        <a
                            className="u-email"
                            href="mailto:frewin.christopher@gmail.com"
                            rel="me"
                        >
                            Email
                        </a>
                    </div>
                    <p>
                        <br />
                        I'm a proud member of the{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://dev.to/frewinchristopher"
                        >
                            DEV Community
                        </a>
                        , and{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://producthunt.com/@galt_"
                        >
                            Product Hunt's Makers Community
                        </a>
                        !<br />
                        <br />
                        <span>
                            Sites and products I've built solo:
                        </span>
                        <br />
                        <br />
                        <a
                            href="https://wheelscreener.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            wheelscreener.com
                        </a>{" "}
                        <br/>
                        <a
                            href="https://rœst.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            rœst.com
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://rœst.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            rœst.coffee
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://sirenapparel.us"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sirenapparel.us
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://nlp-champs.chrisfrew.in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            nlp-champs.chrisfrew.in (formerly nlp-champs.com)
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://seelengeflüster-tirol.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            seelengeflüster-tirol.com
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://wallstreetbetswally.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            wallstreetbetswally.github.io
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://princefishthrower.github.io/invaders/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            princefishthrower.github.io/invaders
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://portfolio.chrisfrew.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            portfolio.chrisfrew.in
                        </a>{" "}
                        
                        <br />
                        <a
                            href="https://fullstackcraft.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            fullstackcraft.com
                        </a>{" "}
                        
                        <br />
                        
                        
                    </p>
                </div>
            </div>
        </>
    )
}
