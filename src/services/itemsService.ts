const searchItems = (searText: string) => fetch(`https://localhost:7443/api/items?q=${searText}`).then((res) => res.json());

const getDetails = (id: string) => fetch(`https://localhost:7443/api/items/${id}`).then((res) => res.json());

export { searchItems, getDetails };
