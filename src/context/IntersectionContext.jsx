import { createContext, useState } from 'react';

const IntersectionContext = createContext();

const IntersectionProvider = ({ children }) => {
    const [observedItem, setObservedItem] = useState('intro')
    const data = { observedItem, setObservedItem};

    return <IntersectionContext.Provider value={data}>{children}</IntersectionContext.Provider>
};

export { IntersectionProvider };
export default IntersectionContext;