import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventorys, setInventorys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://warehouse-management-app.onrender.com/inventory')
            .then(res => res.json())
            .then(data => {
                setInventorys(data);
                setIsLoading(false);
            });
    }, [])
    return [inventorys, setInventorys, isLoading, setIsLoading];
};

export default useInventory;