import { useState } from "react";
import webpackLogo from './assets/webpack-logo.svg';

const App = () => {
    const [webpackLogoImg] = useState(webpackLogo);
    return (
        <>
            <img
                src={webpackLogoImg}
                alt="webpack-logo"
            />
            <h1>Webpack Starter Template</h1>
        </>
    );
};

export default App;