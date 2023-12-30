import "./Home.css"

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Intro = () => {
    return (
        <Box className="Text"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'left',
                '& > :not(style) ~ :not(style)': {
                    ml: 2,
                },
            }}
            >
            <Stack spacing={1}>
                <div>
                    <h4>ABOUT</h4>
                    <p>
                        I'm a software engineer specializing in backend development and scaling distributed systems. <br></br> <br></br>

                        These days, apart from my work, I've been experimenting with frontend development to challenge myself. <br></br>
                        Might move onto AI once I get a feel of frontend development :) <br></br> <br></br>

                        If you have a problem to tackle and feel I might be interested, do reach out.
                    </p>
                </div> 
                <div>
                    <h4>TECHNICAL SKILLS</h4>
                    <ul>
                        <li>Backend: Golang, Python </li>
                        <li>Frontend: React, Javascript, Typescript, Material-UI </li>
                        <li>DB: PostgreSQL, MySQL, Redis</li>
                        <li>DevOps: AWS, Jenkins, Prometheus, Grafana, Kubernetes, Terraform, Docker, Linux</li>
                        <li>Tools: Git, Postman, k6</li>
                    </ul>
                </div>
            </Stack>
        </Box>
    )
}

const Home = () => {
    return (
        <Stack className="Home" spacing={4}>
            <div>
                <h1>Sai Srikar Komaravolu</h1>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        '& > :not(style) ~ :not(style)': {
                        ml: 2,
                        },
                    }}
                    >
                    <Link target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/srikar-k" underline="none"><LinkedInIcon color="primary"></LinkedInIcon></Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://github.com/saisrikark" underline="none"><GitHubIcon color="action"></GitHubIcon></Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/sai_srikar_k" underline="none"><TwitterIcon color="primary"></TwitterIcon></Link>
                </Box>
            </div>
            <Intro></Intro>
            <Box className="Ending"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                >
                <div>
                    Thank you for visiting my page. <br></br>
                    Please connect with me on 
                    <Link href="https://in.linkedin.com/in/srikar-k" target="_blank" rel="noopener noreferrer" underline="none">
                    &nbsp;Linkedin&nbsp;
                    </Link>
                     if you'd like to chat. <br></br>
                     auf wiedersehen
                </div>
            </Box>
        </Stack>
    );
};

export default Home;