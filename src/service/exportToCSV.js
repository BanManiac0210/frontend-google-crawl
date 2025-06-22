export function exportToCSV(data) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    alert("No data available to export.");
    return;
  }

  // Lấy header từ keys của phần tử đầu tiên
  const headers = Object.keys(data[0]);
  const csvRows = [];

  // Thêm dòng header
  csvRows.push(headers.join(","));

  // Thêm các dòng dữ liệu
  for (const row of data) {
    const values = headers.map((header) => {
      let val = row[header];

      // Escape dấu nháy và dấu phẩy
      if (typeof val === "string") {
        val = `"${val.replace(/"/g, '""')}"`;
      }

      return val;
    });

    csvRows.push(values.join(","));
  }

  const csvContent = csvRows.join("\n");

  const bom = "\uFEFF";
  const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "search_results.csv");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
