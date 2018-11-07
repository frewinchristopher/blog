import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { CanvasSpace, Pt, World, Create, Particle, Num } from 'pts';
import Emoji from 'react-emoji-render';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iWindowWidth: 0,
      iWindowHeight: 0,
      iCount: 0,
      height: 0,
      width: 0,
      oHeader: null,
      ptsCanvas: null
    }
    this.activateCanvas = this.activateCanvas.bind(this);
  }
  render() {
    // BTC: <code>1D6aFgTLZrV4QAJ5ZhjDxV8Rj78LLjKvcm</code><br/>
    // ETH: <code>0x1bc3850619803C48b79481A3Aee167141be20432</code><br/>
    // XRB: <code>xrb_1s8s4bpucoseodz3oqmzenecimoe6rntpgsnpdfg6yequd1hibraghznxwga</code><br/>
    const sYear = new Date().getFullYear();
    return (
      <div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
        {this.state.oHeader}
        {this.props.children}
        <footer>
          <h5>
            Copyright © {sYear} Chris Frewin.<br/>
            Based at one point on <a href="https://github.com/gatsbyjs/gatsby-starter-blog">this blog template.</a><br/>
            Static site generated by <a href="https://reactjs.org/">React</a> & <a href="https://www.gatsbyjs.org/">Gatsby.js</a><br/>
            Code highlighting by <a href="http://prismjs.com">Prism.js</a><br/>
            Colors inspired by the Monokai color scheme (I <Emoji text=":two_hearts:"/>{'\u00A0'}{'\u00A0'}Sublime Text <Emoji text=":smile:" /> )<br/>
            Hosted independently (i.e. on an old Dell laptop <Emoji text=":joy:" />) with Node.js & express.<br/>
            Copy icon in code copypastas from flaticon.<br/>
          <style dangerouslySetInnerHTML={{__html: ".bmc-button img{width: 27px !important;margin-bottom: 3px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-block !important;color:#000000 !important;background-color:#FFDD00 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 23px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#000000 !important;}" }} /><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" /><a className="bmc-button" target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/chrisfrewin"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a cappucino" /><span style={{marginLeft: 5}}>Buy me a cappucino</span></a><br/>
          <code><a href="http://paypal.me/chrisfrewin">http://paypal.me/chrisfrewin</a><br/></code>
          <style dangerouslySetInnerHTML={{__html: ".acfp-button img{width: 27px !important;margin-bottom: 3px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.acfp-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-block !important;color:#000000 !important;background-color:red !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 23px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Pacifico', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.acfp-button:hover, .acfp-button:active, .acfp-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#000000 !important;}" }} /><link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" /><a className="acfp-button" target="_blank" rel="noopener noreferrer" href="https://chrisfrew.in/introducing-chrisfrewin-productions"><img src="https://www.chrisfrew.in/digital-avatar.svg"/><span style={{marginLeft: 5}}>a chrisfrew.in production</span></a><br/>
          </h5>
        </footer>
      </div>
    </div>
    );
  }
  activateCanvas() {
    this.space = new CanvasSpace( this.state.ptsCanvas ).setup({ bgcolor: "transparent", resize: true, retina: true });
    this.form = this.space.getForm();
    var world;
    this.space.add( {
      start: (bound, space) => {
        // Create world and 50 random points
        world = new World( space.innerBound, 1, 0 );
        let pts = Create.distributeRandom( space.innerBound, 50 );

        // Create particles and hit them with a random impulse
        for (let i=0, len=pts.length; i<len; i++) {
          let p = new Particle( pts[i] ).size( 30 );
          p.hit( Num.randomRange(-50,50), Num.randomRange(-50, 50) );
          world.add( p );
        }
        world.particle( 0 ).lock = true; // lock it to move it by pointer later on
      },
      animate: (time, ftime) => {
        world.drawParticles( (p, i) => {
          let color = (i===0) ? "black" : ["#F92672", "#66D9EF", "#A6E22E"][i%3];
          //let color = (i===0) ? "black" : "white";
          this.form.fillOnly( color ).point( p, p.radius, "circle" )
        });

        world.update( ftime );
      },
      action:( type, px, py) => {
        if (type === "move") {
          world.particle( 0 ).position = new Pt(px, py);
        }
      }
    });

    this.space.bindMouse().bindTouch();
    this.space.play();
  }
  componentDidMount() {
    let oHeader;
    let rootPath = `/`
    if (window.innerWidth >= 768) {
      oHeader = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <div
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
          <div ref={ (divElement) => this.divElement = divElement}>
            <canvas 
              height={this.state.height} 
              width={this.state.width} 
              className="particlesCanvas" 
              ref={(canvas) => { this.setState({ptsCanvas: canvas}, () => this.activateCanvas()) }}> // we use the ptsCanvas object in the activateCanvas() function, so we use activateCanvas as a callback (can only use ptsCanvas after it actually exists!)
            </canvas>
            <div className="padding">
              Chris's<br/>
              <span style={{color:'#F92672'}}>Full Stack</span>,<br/>
              <span style={{color:'#66D9EF'}}>Web Development</span>,<br/>
              <span style={{color:'#A6E22E'}}>ABAP</span>,<br/>
              <span style={{color:'#F92672'}}>SAPUI5</span>,<br/>
              <span style={{color:'#66D9EF'}}>Machine Learning</span>,<br/>
              &<br/>
              <span style={{color:'#A6E22E'}}>Natural Language Processing</span><br/>
              <span style={{color:'#F92672'}}>Blog</span>.
              <br/>
            </div>
          </div>
          </div>
        </h1>
      );
    } else {
      oHeader = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <div
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
          Chris's<br/>
          <span style={{color:'#F92672'}}>Full Stack</span>,<br/>
          <span style={{color:'#66D9EF'}}>Web Development</span>,<br/>
          <span style={{color:'#A6E22E'}}>ABAP</span>,<br/>
          <span style={{color:'#F92672'}}>SAPUI5</span>,<br/>
          <span style={{color:'#66D9EF'}}>Machine Learning</span>,<br/>
          &<br/>
          <span style={{color:'#A6E22E'}}>Natural Language Processing</span><br/>
          <span style={{color:'#F92672'}}>Blog</span>.
          <br/>
          </div>
        </h1>
      )
    }
    this.setState({oHeader: oHeader});
  }
}

export default ({ children, location }) => (
  <div>
    <Layout children={children} location={location}/>
  </div>
)
