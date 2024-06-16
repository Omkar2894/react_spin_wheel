import React, { useEffect, useState } from 'react'
import "./spinwheel.css"
import banner from "../assets/images/Group 1600660.jpg"

const SpinWheel = () => {
    const [options, setOptions] = useState([]);
    const [rotation, setRotation] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [spinning, setSpinning] = useState(false);



    useEffect(() => {
        fetch('https://terra-staging.letsterra.com/mvp5/getSpinwheelOptions?username=enigmaobby_1718347466')
            .then(response => response.json())
            .then(data => {
                const predefinedColors = [
                    '#3f51b5', '#ff9800', '#e91e63', '#4caf50',
                ];

                const optionsWithColors = data.options.map((option, index) => ({
                    ...option,
                    color: predefinedColors[index % predefinedColors.length]
                }));

                setOptions(optionsWithColors);
            })
            .catch(error => console.error('Error fetching options:', error));
    }, []);


    const spinWheel = () => {
        setSelectedOption(null)
        setSpinning(true);
        fetch('http://terra-staging.letsterra.com/mvp5/chooseFromSpinwheelOptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "enigma0_1713507898",
                options: options
            }),
        })
            .then(response => response.json())
            .then(data => {
                let selectedVal = options.findIndex((segment) => segment.id === data.id);
                const maxSegments = options.length;
                const segmentAngle = 360 / maxSegments;
                const additionalSpins = 5;
                const newRotation = 360 * additionalSpins - (selectedVal * segmentAngle);
                setRotation(newRotation);

                let timeOut = setTimeout(() => {
                    setSpinning(false);
                    setSelectedOption(data)
                }, 3000);

                return () => clearTimeout(timeOut);
            })
            .catch(error => console.error('Error choosing option:', error));
    };


    const maxSegments = options.length;
    const segmentAngle = 360 / maxSegments;

    return (
        <div className='my-4'>
            {/* //Banner// */}
            <div className='  mb-14'>
                <img src={banner} alt='banner' className='w-[20vw] h-[12vh] mx-auto' />
            </div>

            {/* //Spin wheel// */}
            <div className="relative border-8 border-orange-200 rounded-full">
                <button
                    id="spin"
                    disabled={spinning ? true : false}
                    className="absolute top-[50%] left-2/4 z-30 bg-[#FFA95E] uppercase border-8 border-amber-100 font-semibold text-blue-600 w-20 h-20 rounded-full cursor-pointer"
                    onClick={spinWheel}
                >
                    Spin
                </button>
                <div className="arrows z-30 w-[8vw] h-[15vh] absolute -top-[8vh] left-2/4">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 110 101"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter
                                id="filter0_dii_1_630"
                                x="0.858204"
                                y="-0.0597299"
                                width="73.4679"
                                height="101.713"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="0.489957" />
                                <feGaussianBlur stdDeviation="5.24453" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.255944 0 0 0 0 0.0921398 0 0 0 0 0 0 0 0 0 1 0"
                                />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_630" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_630" result="shape" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="-1.01136" />
                                <feGaussianBlur stdDeviation="1.51704" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.521321 0 0 0 0 0.17052 0 0 0 0 0.0597403 0 0 0 1 0"
                                />
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_630" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="-1.51704" />
                                <feGaussianBlur stdDeviation="3.03293" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.720238 0 0 0 0 0 0 0 0 1 0"
                                />
                                <feBlend mode="normal" in2="effect2_innerShadow_1_630" result="effect3_innerShadow_1_630" />
                            </filter>
                            <filter
                                id="filter1_ii_1_630"
                                x="20.4048"
                                y="16.792"
                                width="34.0799"
                                height="41.6651"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="7.07951" />
                                <feGaussianBlur stdDeviation="5.0568" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.573172 0 0 0 0 0.0721135 0 0 0 1 0"
                                />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_630" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="-0.50568" />
                                <feGaussianBlur stdDeviation="2.49978" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.512886 0 0 0 0 0.184639 0 0 0 0 0 0 0 0 1 0"
                                />
                                <feBlend mode="normal" in2="effect1_innerShadow_1_630" result="effect2_innerShadow_1_630" />
                            </filter>
                            <filter
                                id="filter2_f_1_630"
                                x="14.8853"
                                y="10.933"
                                width="44.7466"
                                height="44.7466"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="3.57983" result="effect1_foregroundBlur_1_630" />
                            </filter>
                            <filter
                                id="filter3_d_1_630"
                                x="19.1099"
                                y="18.0908"
                                width="36.2974"
                                height="36.2974"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="2.93328" />
                                <feGaussianBlur stdDeviation="1.46753" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.398882 0 0 0 0 0.143597 0 0 0 0 0 0 0 0 0.7 0"
                                />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_630" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_630" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_1_630" x1="37.5922" y1="90.6742" x2="37.5922" y2="9.93939" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF8A00" stopOpacity="1" />
                                <stop offset="1" stopColor="#FFE382" stopOpacity="1" />
                            </linearGradient>
                            <radialGradient
                                id="paint1_radial_1_630"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(37.2586 33.3063) rotate(88.6571) scale(16.6336)"
                            >
                                <stop offset="0.46457" stopColor="#FFFAEC" stopOpacity="1" />
                                <stop offset="0.802284" stopColor="#FBC860" stopOpacity="1" />
                                <stop offset="1" stopColor="#FF8B71" stopOpacity="1" />
                            </radialGradient>
                        </defs>
                        <g filter="url(#filter0_dii_1_630)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M32.7585 87.5312C34.7143 91.7217 40.6728 91.7219 42.6288 87.5316L62.0564 45.9126L61.9743 45.9142C63.1761 42.9054 63.8371 39.622 63.8371 36.1843C63.8371 21.6896 52.0868 9.93938 37.5922 9.93938C23.0975 9.93938 11.3473 21.6896 11.3473 36.1843C11.3473 41.164 12.7341 45.8197 15.1427 49.7864L32.7585 87.5312Z"
                                fill="url(#paint0_linear_1_630)"
                            />
                        </g>
                        <g filter="url(#filter1_ii_1_630)">
                            <circle cx="37.4447" cy="34.3377" r="17.0399" fill="#FFB800" />
                        </g>
                        <g filter="url(#filter2_f_1_630)">
                            <circle cx="37.2587" cy="33.3063" r="15.2136" transform="rotate(0.717596 37.2587 33.3063)" fill="#FFD874" />
                        </g>
                        <g filter="url(#filter3_d_1_630)">
                            <circle cx="37.2587" cy="33.3063" r="15.2136" transform="rotate(0.717596 37.2587 33.3063)" fill="url(#paint1_radial_1_630)" />
                        </g>
                    </svg>

                </div>
                <div
                    className={`${spinning ? "animate-spin" : ""} w-[80vw] h-[80vw] max-w-[31rem] max-h-[31rem] bg-gray-400 rounded-full border-[5%] border-orange-200 relative overflow-hidden transition duration-500`}
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {options.map((segment, index) => (
                        <div
                            key={index}
                            className="h-[50%] w-[40%] absolute flex items-center justify-center text-sm mx-auto font-semibold text-white left-[30%] segment"
                            style={{
                                backgroundColor: segment?.color,
                                transform: `rotate(${index * segmentAngle}deg)`,
                                transformOrigin: 'bottom',
                            }}
                        >
                            <div className="segment-text absolute top-[10%] left-[22%] text-white text-sm font-semibold capitalize" style={{ transform: `skewY(0deg)` }}>
                                {segment.rarity}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* //Selected Option// */}
            {selectedOption != null ?
                <p className='mx-auto text-center animate-bounce my-4 py-2 w-64 bg-green-600 text-white capitalize'>Selected Option : {selectedOption?.rarity}</p>
                : ""}
        </div>
    )
}

export default SpinWheel