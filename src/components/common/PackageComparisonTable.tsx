import React from "react";

export default function PackageComparisonTable({
  planNames,
}: {
  planNames: string[];
}) {
  const rows: [string, ...number[]][] = [
    ["Initial SEO audit", 1, 1, 1],
    ["Prioritized roadmap", 1, 1, 1],
    ["Monthly report and call", 1, 1, 1],
    ["Live ranking dashboard", 0, 1, 1],
    ["Technical SEO fixes", 0, 1, 1],
    ["Link building", 0, 1, 1],
    ["Digital PR", 0, 0, 1],
    ["Dedicated strategist", 0, 0, 1],
  ];

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="shead">
          <h2 className="h2" data-lines>
            Compare plans
          </h2>
          <p data-r>What changes as you scale.</p>
        </div>
        <div data-r style={{ overflowX: "auto" }}>
          <table className="cmp">
            <thead>
              <tr>
                <th>Feature</th>
                {planNames.map((n, i) => (
                  <th key={i}>{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  <td>{row[0]}</td>
                  {row.slice(1).map((val, cIdx) => (
                    <td className={val ? "y" : "n"} key={cIdx}>
                      {val ? "✓" : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
