import React, { createContext, useState, useRef, useContext } from 'react';

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
    const [spes, speUpdater] = useState([
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

    const prevSelectionRef = useRef(null);

    const ChangeSelection = (newSelection) => {
        if (newSelection !== prevSelectionRef.current) {
            console.log('change to ' + newSelection.url);
            speUpdater(prevState => prevState.map(item => item.url === newSelection.url ? { ...item, selected: true } : { ...item, selected: false }));
            prevSelectionRef.current = newSelection;
        }
    };

    return (
        <SelectionContext.Provider value={{ spes, ChangeSelection }}>
            {children}
        </SelectionContext.Provider>
    );
};

export const useSelection = () => useContext(SelectionContext);
