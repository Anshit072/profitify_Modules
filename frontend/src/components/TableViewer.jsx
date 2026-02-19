import React, { useEffect, useState } from "react";

export default function TableViewer() {
  const [tables, setTables] = useState([]);
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Load table names when app loads
  useEffect(() => {
    fetch("http://localhost:8000/tables")
      .then((res) => res.json())
      .then(setTables)
      .catch((err) => console.error(err));
  }, []);

  // Load selected table data
  const loadTable = (tableName) => {
    setSelectedTable(tableName);

    fetch(`http://localhost:8000/table/${tableName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setShowPopup(true); // open popup
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Database Tables</h2>

      {/* TABLE BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        {tables.map((table) => (
          <button
            key={table}
            onClick={() => loadTable(table)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              borderRadius: "6px",
              border: "none",
              background: "#1976d2",
              color: "white",
              cursor: "pointer",
            }}
          >
            {table}
          </button>
        ))}
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <button
              onClick={() => setShowPopup(false)}
              style={styles.close}
            >
              ✖ Close
            </button>

            <h3>{selectedTable}</h3>

            {data.length > 0 ? (
              <table border="1" cellPadding="8">
                <thead>
                  <tr>
                    {Object.keys(data[0]).map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {data.map((row, i) => (
                    <tr key={i}>
                      {Object.values(row).map((val, j) => (
                        <td key={j}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* POPUP STYLES */
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    maxHeight: "80vh",
    overflow: "auto",
    minWidth: "70%",
  },
  close: {
    marginBottom: "10px",
    cursor: "pointer",
    padding: "6px 10px",
    border: "none",
    background: "#e53935",
    color: "white",
    borderRadius: "5px",
  },
};