import React, { useState, useEffect } from 'react';

// Dynamically import all images or SVGs from the assets/icons folder
const images = import.meta.glob('/src/assets/*.{png,jpg,svg}');

const loadImageByName = async (filename) => {
    const matchingImageKey = Object.keys(images).find((path) => path.endsWith(filename));
    
    if (matchingImageKey) {
        const module = await images[matchingImageKey](); // Await the module promise
        return module.default; // Extract the default export, which is the URL string
    } else {
        console.error(`Image ${filename} not found`);
        return null;
    }
};

const IconLoader = ({ filename }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            const src = await loadImageByName(filename);
            setImageSrc(src);
        };
        
        fetchImage();
    }, [filename]);

    return (
        <div>
            {imageSrc ? <img src={imageSrc} alt={filename} className=" w-full" /> : <p>Image not found</p>}
        </div>
    );
};

export default IconLoader;
