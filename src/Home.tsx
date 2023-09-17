import "./Home.css"

function AboutHeading() {
    return (
    <div className="Heading">
        <div>
          <h1>Sai Srikar Komaravolu</h1>
        </div>

    </div>)
}

function AboutText() {
    return (
        <div className="Text">
            <div>
                <a href="https://in.linkedin.com/in/srikar-k">Linkedin</a> &nbsp;/&nbsp;
                <a href="https://github.com/saisrikark">GitHub</a> &nbsp;/&nbsp;
                <a href="https://twitter.com/foreversadhak">Twitter</a>
            </div>
        </div>
    )
}

const Home = () => {
    return (
    <div className='Home'>
        <AboutHeading></AboutHeading>
        <AboutText></AboutText>
    </div>
    );
};

export default Home;