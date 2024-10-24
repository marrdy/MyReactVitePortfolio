import React, { useState, useEffect } from 'react';

// Dynamically import all images or SVGs from the assets/icons folder
const images = import.meta.glob('/src/GalleryImages/*.{png,jpg,svg}');

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

const ImageLoader = ({ filename,index,titleImage,Description, OnclickImage}) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [orientation, setOrientation] = useState(''); // State to track image orientation

    useEffect(() => {
        const fetchImage = async () => {
            const src = await loadImageByName(filename);
            if (src) {
                const img = new Image();
                img.src = src;

                img.onload = () => {
                    const aspectRatio = img.width / img.height;
                    // Check if image is landscape or portrait
                    if (aspectRatio > 1) {
                        setOrientation('landscape');
                    } else {
                        setOrientation('portrait');
                    }
                };
                
                setImageSrc(src);
            }
        };
        
        fetchImage();
    }, [filename]);

    return (
        <div className="">
            {/* Background image div */}
            <div
                className={`
                    ${orientation === 'landscape' ? 'w-64 h-48' : 'w-48 h-64'} 
                    bg-center bg-cover rounded-lg 
                    ${imageSrc ? '' : 'bg-gray-200'}
                `}
                style={{
                    backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
                }}
            >
                <div role="button" onClick={OnclickImage} className='w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg relative'>
                    {/* Positioned the h1 to the bottom-left */}
                    <h1 className='absolute bottom-2 left-2 text-white'>{titleImage}</h1>
                </div>
            </div>
        </div>
    );
};

export default ImageLoader;
