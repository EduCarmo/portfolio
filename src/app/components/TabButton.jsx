import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    default: { width: 0 },  // Corrigido "with" para "width"
    active: { width: "calc(100% - 0.75rem)" }  // Corrigido "with" para "width"
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

    return (
        <button onClick={selectTab}>
            <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                className="h-1 bg-blue-500 mt-2 mr-3"
                variants={variants}
                animate={active ? "active" : "default"}
            ></motion.div>
        </button>
    );
};

export default TabButton;
