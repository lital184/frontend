import React, { useState } from 'react';
import { Product } from './hooks/useProducts';
import './ProductsList.css';


export const ProductsList: React.FC <{ products: Product[]; }> = ({
    products
}) => {
    console.log("products",products , typeof(products))
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="products-table">
        <thead>
          <tr>
            <th>PN</th>
            <th>Test Type</th>
            <th>Pass</th>
            <th>Test Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product._id}>
              <td>{product.PN}</td>
              <td>{product.TEST_TYPE}</td>
              <td>{product.PASS}</td>
              <td>{product.TEST_DATE}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

