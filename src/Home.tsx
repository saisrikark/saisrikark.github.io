import "./Home.css"
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


function AboutHeading() {
    return (
    <div className="Heading">
        <div>
          <h1>Sai Srikar Komaravolu</h1>
        </div>
    </div>)
}

function AboutText() {
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <Box className="Text"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) ~ :not(style)': {
                ml: 2,
                },
            }}
            onClick={preventDefault}
            >
            <Link href="https://in.linkedin.com/in/srikar-k" underline="none">Linkedin</Link>
            <Link href="https://github.com/saisrikark" underline="none">GitHub</Link>
        </Box>
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