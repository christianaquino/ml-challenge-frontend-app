const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const searchItems = async (searchText: string) => {
  const response = await fetch(`${apiBaseUrl}/api/items?q=${searchText}`);
  return response.json();
};

const getDetails = async (id: string) => {
  const response = await fetch(`${apiBaseUrl}/api/items/${id}`);
  return response.json();
};

export { searchItems, getDetails };
