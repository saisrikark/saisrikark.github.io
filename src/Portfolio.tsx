import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Portfolio.css";

interface Project {
    link: string;
    name: string;
    description: string;
    tags: string[];
}

const projects: Project[] = [
    {
        link: "https://github.com/saisrikark/my-opensource-contributions",
        name: "my opensource contributions",
        description: "My OpenSource Contributions",
        tags: ["README"]
    },
    {
        link: "https://github.com/saisrikark/pproftoggle",
        name: "pprof toggle",
        description: "A package to toggle pprof on go applications",
        tags: ["go", "package"]
    },
    {
        link: "https://github.com/saisrikark/payments-backend-app",
        name: "payments backend",
        description: "Backend application for handling payments.",
        tags: ["go", "unit testing", "backend"]
    },
    {
        link: "https://github.com/saisrikark/calc",
        name: "calc",
        description: "A terminal based calculator using go and cobra",
        tags: ["go", "cobra", "terminal"]
    },
    {
        link: "https://github.com/saisrikark/saisrikark.github.io",
        name: "portfolio website",
        description: "My github portfolio website",
        tags: ["React", "TypeScript"]
    },
    {
        link: "https://github.com/saisrikark/whack-a-mole",
        name: "whack a mole",
        description: "Whack a mole game designed to run on PC",
        tags: ["TypeScript", "rust", "Tauri"]
    }
];

type CardContentProps = {
    project: Project;
    index: number;
};

const handleCardClick = (project: Project) => {
    console.log(`Card clicked: ${project.name}`);
    window.location.href = project.link;
};

const generateCardContent: React.FC<CardContentProps> = ({ project, index }) => (
    <Tooltip title={project.link} placement="top" arrow>
        <Card
            className="PortfolioCard"
            onClick={() => handleCardClick(project)}
            sx={{ cursor: 'pointer' }}
        >
            <CardContent className="PortfolioCardContent">
                <Typography variant="h6">
                    {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Tags: {project.tags.join(", ")}
                </Typography>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link}
                </a>
            </CardContent>
        </Card>
    </Tooltip>
);

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>("");

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const handleClearFilter = () => {
        setFilter("");
    };

    const filteredProjects = projects.filter(project => 
        project.link.includes(filter) ||
        project.name.toLowerCase().includes(filter.toLowerCase()) ||
        project.description.toLowerCase().includes(filter.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
    );

    return (
        <div>
            <Stack spacing={10}>
                <div className="FilterControls" style={{  textAlign: 'center' }}>
                    <TextField
                        label="Filter"
                        variant="outlined"
                        value={filter}
                        onChange={handleFilterChange}
                        style={{ marginRight: '10px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleClearFilter}>
                        Clear <br></br>Filter
                    </Button>
                </div>
                <Grid container spacing={2} className="Portfolio">
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            {generateCardContent({ project, index })}
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </div>
    );
}

export default Portfolio;
