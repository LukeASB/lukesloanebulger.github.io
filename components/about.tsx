const About: React.FC = () => {
    return (
        <div id="about">
            <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-light">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1>Luke Sloane-Bulger</h1>
                        <p>
                            To be added
                        </p>
                        <p>
                            To be added
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            src="../assets/profile.jpg"
                            alt="Profile"
                            className="rounded-circle img-fluid"
                            style={{ width: "150px", height: "150px" }}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;