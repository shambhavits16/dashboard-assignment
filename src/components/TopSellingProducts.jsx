// eslint-disable-next-line no-unused-vars
import React from "react";

const TopSellingProducts = ({ products, theme }) => {
  const containerClass =
    theme === "light" ? "bg-[#F7F9FB] text-black" : "bg-[#282828] text-white";
  const rowClass =
    theme === "light"
      ? "bg-[#F7F9FB] text-[#1C1C1C66]"
      : "bg-[#282828] text-[#FFFFFF66]";

  return (
    <div
      title="Top Selling Products"
      className={`max-w-screen-lg mx-auto rounded-2xl p-6 font-inter ${containerClass} dark:border-none border`}
    >
      <div
        className={`text-sm font-semibold mb-3 mx-3 ${theme === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
          }`}
      >
        Top Selling Products
      </div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className={rowClass}>
            <th className="px-4 py-2 border-b text-left font-normal text-xs">
              Name
            </th>
            <th className="px-4 py-2 border-b text-left font-normal text-xs">
              Price
            </th>
            <th className="px-4 py-2 border-b text-left font-normal text-xs">
              Quantity
            </th>
            <th className="px-4 py-2 border-b text-left font-normal text-xs">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-normal text-xs">{product.name}</td>

              <td className="px-4 py-2 font-normal text-xs">
                ${product.price.toFixed(2)}
              </td>

              <td className="px-4 py-2 font-normal text-xs">
                {product.quantity}
              </td>

              <td className="px-4 py-2 font-normal text-xs">
                $
                {product.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
