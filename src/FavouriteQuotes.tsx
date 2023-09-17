import "./FavouriteQuotes.css"
import React, {useState} from "react";

const quotes = [
    <div>
        <p>
            ॐ भद्रं नो अपिवातय मनः <br></br>
            O Mind! May you bring about auspiciousness for us. <br></br>
            <br></br>
            -Ṛgveda-X.20.1 
        </p> 
    </div>,
    <div>
        <p>
            We are what our thoughts have made us. <br></br>
            So take care about what you think. <br></br>
            Words are secondary. <br></br>
            Thoughts live; they travel far. <br></br>
            <br></br>
            -Swami Vivekananda
        </p> 
    </div>
]

function Quote(props: {index: number}): React.ReactElement {
    return quotes[props.index];
}

export default function FavouriteQuotes() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    }

    const handleNextClick = () => {
        const totalItems = quotes.length
        if (activeIndex < totalItems - 1) {
            setActiveIndex(activeIndex + 1);
        }
    }

    return (
        <div className="FavouriteQuotes">
            <Quote index={activeIndex}></Quote>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    )
};
