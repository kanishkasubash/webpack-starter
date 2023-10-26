import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { webpackLogo } from './assets';
import { sliderImages } from './constants';

const App = () => {
    return (
        <>
            <main className="container grid grid-cols-1 mx-auto">
                <div className="flex flex-row justify-center my-5">
                    <img
                        src={webpackLogo}
                        alt="webpack-logo"
                        width={200}
                        height={100}
                    />
                </div>                
                <h1 className="text-4xl text-center text-malibu">Starter Template</h1>
                <div className="flex flex-row justify-center my-5">
                    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false} className=" lg:w-[70%]" >
                        {sliderImages.map((image, index) => (
                            <div key={index}>
                                <img src={image.url} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <p>Webpack 5 is a popular open-source JavaScript module bundler that is widely used in modern web development. It is an evolution of earlier versions of Webpack, and it brings several new features and improvements over its predecessors.</p>
                <p>It's worth noting that Webpack is highly configurable, and its configuration can be complex for larger projects. To make it more accessible, there are tools and boilerplates like Create React App and Vue CLI that abstract much of the configuration away and provide a streamlined development experience.</p>
            </main>
        </>
    );
};

export default App;