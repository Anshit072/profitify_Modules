const BASE_URL = "http://localhost:8000";

export const fetchTables = async () => {
  const res = await fetch(`${BASE_URL}/tables`);
  return res.json();
};

export const fetchTableData = async (table) => {
  const res = await fetch(`${BASE_URL}/table/${table}`);
  return res.json();
};