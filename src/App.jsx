import { useState } from "react";
import laughing from './assets/laughing.svg'

const App = () => {
    const [laughingImg] = useState(laughing);
    return (
        <>
            <h1>Webpack Starter Template</h1>
            <h2>React App with Webpack</h2>
            <img
                src={laughingImg}
                alt="laughing-emoji"
                width={50}
                height={50}
            />
        </>
    );
};

export default App;