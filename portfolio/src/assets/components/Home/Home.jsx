export default function Home(){
    return(
        <section>
            <article>
                <div className="introduction">
                    <div className="introduction-icons">
                        <img src="icons/linkedin.svg" alt="LinkedIn Icon" />
                        <img src="icons/github.svg" alt="GitHub Icon" />
                    </div>
                    <div className="introduction-text">
                        <h1>Hello World! Im a <span>Front-End</span> Developer.</h1>
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
                    <img src="icons/mouse-icon.svg" alt="Mouse icon" />
                    <p>Scroll down</p>
                    <img src="icons/arrow-down-icon.svg" alt="" />
                </div>
            </article>
            <article>
                <img src="img/home-img.png" alt="Home image" />
            </article>
        </section>
    )
}

