import React, { createContext, useState, useContext } from 'react';

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
    const [spes, setSpes] = useState([
        { url: 'myLessons', selected: true },
        { url: 'myTutes', selected: false },
        { url: 'al2026', selected: false },
        { url: 'al2025', selected: false },
        { url: 'al2024', selected: false },
        { url: 'grade11', selected: false },
        { url: 'grade10', selected: false },
        { url: 'git', selected: false },
        { url: 'alVideoModules', selected: false },
        { url: 'olVideoModules', selected: false },
        { url: 'alPastpapers', selected: false },
        { url: 'olPastpapers', selected: false },
        { url: 'paymentDetails', selected: false },
    ]);
    const ChangeSelection = (url) => {
        setSpes((prevSpes) => {
            const newSpes = prevSpes.map((item) =>
                item.url === url ? { ...item, selected: true } : { ...item, selected: false }
            );
            // Check if there is an actual change before updating state
            if (JSON.stringify(prevSpes) !== JSON.stringify(newSpes)) {
                return newSpes;
            }
            return prevSpes;
        });
    };

    return (
        <SelectionContext.Provider value={{ spes, ChangeSelection }}>
            {children}
        </SelectionContext.Provider>
    );
};

export const useSelection = () => { return useContext(SelectionContext) };
