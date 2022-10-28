import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])
    return [inventorys, setInventorys];
};

export default useInventory;