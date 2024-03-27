import './Home.css'

export default function Home(){
    return(
        <section>
            <article id="left">
                <div className="introduction">
                    <div className="introduction-icons">
                        <a href="https://linkedin.com/in/arthur-risso" target='_blank' ><img src="icons/linkedin.svg" alt="LinkedIn Icon" /></a>
                        <a href="https://github.com/arthurrpr" target='_blank'><img src="icons/github.svg" alt="GitHub Icon" /></a>
                    </div>
                    <div className="introduction-text">
                        <h1>Hello World! I&#39;m a <span>Front-End</span> Developer.</h1>
                        <p className="text-description">Hello! I am Arthur Risso, a passionate about Front-End development.</p>
                    </div>
                </div>
                <div className="tecnologies">
                    <p>Tecnologies</p>
                    <div className="line"></div>
                    <div className="tecnologies-icons">
                        <img src="icons/html.svg" alt="HTML icon" />
                        <img src="icons/css.svg" alt="CSS icon" />
                        <img src="icons/js.svg" alt="JavaScript icon" />
                        <img src="icons/react.svg" alt="React icon" />
                    </div>
                </div>
                <div className="scroll">
                    <img className='mouse' src="icons/mouse-icon.svg" alt="Mouse icon" />
                    <p>Scroll down</p>
                    <img src="icons/arrow-down-icon.svg" alt="" />
                </div>
            </article>
            <article id="right">
                <img src="img/home-img.png" alt="Home image" /> 
            </article>
        </section>
    )
}

