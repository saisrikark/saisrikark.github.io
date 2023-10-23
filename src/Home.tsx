import "./Home.css"
import * as marked from 'marked';
import DOMPurify from 'dompurify';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const introductionPlainText: string = ``;

const introductionHTMLText = marked.parse(introductionPlainText);
const sanitizedHTML = DOMPurify.sanitize(introductionHTMLText);

const Home = () => {
    return (
        <Stack className="Home">
            <div>
                <h1>Sai Srikar Komaravolu</h1>
            </div>
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
            </Box>
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
                <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
            </Box>
        </Stack>
    );
};

export default Home;