const BASE_URL =process.env.REACT_APP_API_URL ;

export const fetchTables = async () => {
  const res = await fetch(`${BASE_URL}/tables`);
  if (!res.ok) {
    throw new Error("Failed to fetch tables");
  }
  return res.json();
};

export const fetchTableData = async (table) => {
  const res = await fetch(`${BASE_URL}/table/${table}`);
  if (!res.ok) {
    throw new Error("Failed to fetch table data");
  }
  return res.json();
};