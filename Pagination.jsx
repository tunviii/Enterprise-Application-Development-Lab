import React, { useState } from "react";

function PaginationTable() {
  const data = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@gmail.com`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 5;

  // Filter data based on search
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📄 Users Table</h2>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          style={styles.search}
        />

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td style={styles.td}>{item.id}</td>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={styles.pagination}>
          <button
            style={styles.btn}
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            ⏮ First
          </button>

          <button
            style={styles.btn}
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                ...styles.btn,
                ...(currentPage === i + 1 && styles.active),
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            style={styles.btn}
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>

          <button
            style={styles.btn}
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last ⏭
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9",
    fontFamily: "Arial",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "650px",
  },
  search: {
    padding: "10px",
    width: "80%",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    background: "#2563eb",
    color: "#fff",
    padding: "10px",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
  pagination: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "6px",
  },
  btn: {
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#e5e7eb",
  },
  active: {
    background: "#2563eb",
    color: "#fff",
  },
};

export default PaginationTable;