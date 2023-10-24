import { useState } from "react";
import webpackLogo from "./assets/webpack-logo.svg";
import webpackChart from "./assets/webpack-chart.png";

const App = () => {
    const [img] = useState({
        logo: webpackLogo,
        heroImg: webpackChart
    });
    return (
        <>
            <main className="container mx-auto">
                <div className="flex flex-row justify-center py-5">
                    <img
                        src={webpackLogo}
                        alt="webpack-logo"
                        width={200}
                        height={100}
                    />
                </div>
                <h1 className="text-4xl text-center text-malibu">Starter Template</h1>
                <div className="flex flex-row justify-center py-5">
                    <img
                        src={img.heroImg}
                        alt="webpack-chart"
                    />
                </div>
                <p>Webpack 5 is a popular open-source JavaScript module bundler that is widely used in modern web development. It is an evolution of earlier versions of Webpack, and it brings several new features and improvements over its predecessors.</p>
                <p>It's worth noting that Webpack is highly configurable, and its configuration can be complex for larger projects. To make it more accessible, there are tools and boilerplates like Create React App and Vue CLI that abstract much of the configuration away and provide a streamlined development experience.</p>
            </main>
        </>
    );
};

export default App;