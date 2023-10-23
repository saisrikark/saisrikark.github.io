import "./FavouriteQuotes.css"
import React, {useState} from "react";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const quotes = [
    <div>
        <p>
            We are what our thoughts have made us. <br></br>
            So take care about what you think. <br></br>
            Words are secondary. <br></br>
            Thoughts live; they travel far. <br></br>
            <br></br>
            - Swami Vivekananda
        </p> 
    </div>,
    <div>
        <p>
            The world is the great gymnasium where we come to make ourselves strong. <br></br>
            <br></br>
            - Swami Vivekananda
        </p> 
    </div>,
    <div>
        <p>
            We suffer more in imagination than in reality. <br></br>
            <br></br>
            - Seneca
        </p> 
    </div>,
    <div>
        <p>
        Focused, hard work is the real key to success. <br></br>
        Keep your eyes on the goal, and just keep taking the next step towards completing it. <br></br>
        If you aren't sure which way to do something, do it both ways and see which works better. <br></br>
        <br></br>
        - John Carmack
        </p> 
    </div>,
    <div>
        <p>
        To live is to suffer, to survive is to find some meaning in the suffering. <br></br>
        <br></br>
        -  Friedrich Nietzsche 
        </p> 
    </div>
]

function Quote(props: {index: number}): React.ReactElement {
    let quote = quotes[props.index]
    return quote;
}

function FavouriteQuotes() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrevClick = () => {
        if ((activeIndex - 1) < 0) {
            setActiveIndex(quotes.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    const handleNextClick = () => {
        if ((activeIndex + 1) > quotes.length-1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    return (
        <Stack>
            <Grid item xs={6} sm={12} className="FavouriteQuotes">
                <Quote index={activeIndex}></Quote>
            </Grid>
            <Grid item xs={6} className="Navigate">
                    <Button onClick={handlePrevClick} color="primary" size="medium">Prev</Button>
                    <Button onClick={handleNextClick} color="primary" size="medium">Next</Button>
            </Grid>
        </Stack>
    );
};

export default FavouriteQuotes;