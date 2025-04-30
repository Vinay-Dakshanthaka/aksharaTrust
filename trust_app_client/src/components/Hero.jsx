// import hero_image from '../assets/children/children_infront_hut.jpg'
// import children from '../assets/children/children_with_slate.jpg'
import { useEffect, useState } from 'react';
import hero_image from '../assets/hero_img.jpeg'
import { useGlobalData } from '../GlobalDataContext';
export default function Hero() {
    const globalData = useGlobalData();
    const [appName, setAppName] = useState()
    const [tagLine, setTagLine] = useState()
    // const appName = ;
    useEffect(() => {
        if (globalData.length > 0) {
            const appNameData = globalData.find(item => item.dataKey === 'app_name');
            const tagLineData = globalData.find(item => item.dataKey === 'tagline');
            setAppName(appNameData?.dataValue);
            setTagLine(tagLineData?.dataValue);
        }
    }, [globalData]);    

    return (
        <div className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={hero_image}
                    alt="Background Image"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-0" />
            </div>
            <div className="relative z-10 flex  flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4 ">
                    {/* Akshara Charitable Trust */}
                    {appName}
                </h1>
                <p className="text-2xl font-bold text-gray-300 mb-8">
                    {/* Akshara Charitable Trust is committed to making education accessible to all, especially in underserved communities. We provide scholarships, resources, and training to build a brighter, more equitable future. */}
                    {tagLine}
                </p>
                
            </div>
        </div>
    );
}

