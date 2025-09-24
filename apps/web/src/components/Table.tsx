import type { ReactNode } from "react";
import styles from "./Table.module.css";

interface TableColumn<T> {
  key: string;
  header: ReactNode;
  render: (item: T) => ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  keyExtractor: (item: T) => string | number;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string | ((item: T, index: number) => string);
  cellClassName?: string;
  emptyMessage?: ReactNode;
  onRowClick?: (item: T, index: number) => void;
}

export function Table<T>({
  data,
  columns,
  keyExtractor,
  className = styles.table,
  headerClassName = styles.header,
  bodyClassName = styles.body,
  rowClassName = styles.row,
  cellClassName = styles.cell,
  emptyMessage = "データがありません",
  onRowClick,
}: TableProps<T>) {
  const handleRowClick = (item: T, index: number) => {
    if (onRowClick) {
      onRowClick(item, index);
    }
  };

  return (
    <div className={className}>
      <table>
        <thead className={headerClassName}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  width: column.width,
                  textAlign: column.align || "left",
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={bodyClassName}>
          {data.length === 0 ? (
            <tr className={styles.emptyRow}>
              <td colSpan={columns.length} className={styles.emptyCell}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              const key = keyExtractor(item);
              const rowClass =
                typeof rowClassName === "function"
                  ? rowClassName(item, index)
                  : rowClassName || styles.row;

              return (
                <tr
                  key={key}
                  className={rowClass}
                  onClick={() => handleRowClick(item, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleRowClick(item, index);
                    }
                  }}
                  style={{ cursor: onRowClick ? "pointer" : undefined }}
                  tabIndex={onRowClick ? 0 : undefined}
                  role={onRowClick ? "button" : undefined}
                >
                  {columns.map((column) => (
                    <td
                      key={`${key}-${column.key}`}
                      className={cellClassName}
                      style={{ textAlign: column.align || "left" }}
                    >
                      {column.render(item)}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
