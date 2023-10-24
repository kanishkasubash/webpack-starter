import { useState } from "react";
import webpackLogo from './assets/logo.png';

const App = () => {
    const [webpackLogoImg] = useState(webpackLogo);
    return (
        <>
            <main>
                <div className="flex flex-row justify-center container mx-auto py-5">
                    <img
                        src={webpackLogoImg}
                        alt="webpack-logo"
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className="text-4xl uppercase text-center">Webpack Starter Template</h1>
            </main>
        </>
    );
};

export default App;