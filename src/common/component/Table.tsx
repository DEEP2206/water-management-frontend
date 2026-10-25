import React from "react";

export interface TableColumn<T = any> {
  key: string;
  header: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  render?: (row: T, index: number) => React.ReactNode;
}

export interface TableProps<T = any> extends React.TableHTMLAttributes<HTMLTableElement> {
  headers?: string[];
  columns?: TableColumn<T>[];
  data?: T[];
  emptyMessage?: string;
}

export const Table: React.FC<TableProps> = ({
  headers,
  columns,
  data,
  children,
  emptyMessage = "No records found",
  className = "",
  ...props
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full text-left text-xs ${className}`} {...props}>
        {columns ? (
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-500">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`pb-3 pt-1 px-3.5 first:pl-0 last:pr-0 font-medium ${
                    col.align === "center"
                      ? "text-center"
                      : col.align === "right"
                      ? "text-right"
                      : "text-left"
                  } ${col.className || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
        ) : headers ? (
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-500">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="pb-3 pt-1 px-3.5 first:pl-0 last:pr-0 font-medium text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}

        <tbody className="divide-y divide-slate-100">
          {columns && data ? (
            data.length > 0 ? (
              data.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="transition-colors hover:bg-slate-50/70"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`py-3 px-3.5 first:pl-0 last:pr-0 text-slate-700 ${
                        col.align === "center"
                          ? "text-center"
                          : col.align === "right"
                          ? "text-right"
                          : "text-left"
                      } ${col.className || ""}`}
                    >
                      {col.render ? col.render(row, rowIdx) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-6 text-center text-slate-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            )
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
