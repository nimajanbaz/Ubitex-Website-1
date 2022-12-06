import React from "react";
import { useTable } from "react-table";

export const Table = ({ columns, data, titleCenter, showIndex }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table
      {...getTableProps()}
      className="rtl-grid mx-auto w-full overflow-scroll">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {showIndex === true ? (
              <th
                className={`dark:text-gray-400 text-gray-600 text-sm ${
                  titleCenter ? "text-center" : "text-right"
                }`}>
                ردیف
              </th>
            ) : null}
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className={`dark:text-gray-400 text-gray-600 ${
                  titleCenter ? "text-center" : "text-right"
                }`}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="border-b dark:border-b-[#072349]">
              {showIndex === true ? (
                <td className="p-3 dark:text-gray-400 text-gray-600 text-sm">
                  {i + 1}
                </td>
              ) : null}
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="p-3 dark:text-gray-400 text-gray-600">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
