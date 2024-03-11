import React, { useState } from 'react';

const Colorchanger = () => {
    const [color, setColor] = useState("olive");

    return (
        <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
            <div className="fixed flex justify-center bottom-12 bg-red-300 inset-x-0 px-2 mx-5 gap-3 rounded-lg">
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'red' }} onClick={() => setColor("red")}>Red</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'green' }} onClick={() => setColor("green")}>Green</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'blue' }} onClick={() => setColor("blue")}>Blue</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'yellow' }} onClick={() => setColor("yellow")}>Yellow</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'white', color: 'black' }} onClick={() => setColor("white")}>White</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'lavender' }} onClick={() => setColor("lavender")}>Lavender</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'pink' }} onClick={() => setColor("pink")}>Pink</button>
                <button className="rounded-md p-3 my-3 flex-wrap gap-3 " style={{ backgroundColor: 'black', color: 'white' }} onClick={() => setColor("black")}>Black</button>
            </div>
        </div>
    );
};

export default Colorchanger;
