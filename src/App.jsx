import { useState } from "react";
import webpackLogo from './assets/webpack-logo.svg';
import webpackChart from './assets/webpack-chart.png';

const App = () => {
    const [img, setImg] = useState({
        logo: webpackLogo,
        heroImg: webpackChart
    });
    return (
        <>
            <main className="container mx-auto">
                <div className="flex flex-row justify-center py-5">
                    <img
                        src={img.logo}
                        alt="webpack-logo"
                        width={200}
                        height={100}
                    />
                </div>
                <h1 className="text-4xl text-malibu text-center">Starter Template</h1>
                <div className="flex flex-row justify-center py-5">
                    <img
                        src={img.heroImg}
                        alt="webpack-chart"
                    />
                </div>
            </main>
        </>
    );
};

export default App;