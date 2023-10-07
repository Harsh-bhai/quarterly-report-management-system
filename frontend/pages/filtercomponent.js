// components/FilterComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedCollection, setSelectedCollection] = useState(''); // Store selected collection

  const handleFilter = async () => {
    try {
      const response = await axios.post('/api/filter', {
        collection: selectedCollection,
        filters,
      });
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

//   useEffect(() => {
//     handleFilter();
//   }, [selectedCollection, filters]);

  return (
    <div>
      {/* UI elements to select collection and set filters */}
      {/* Render filteredData in your UI */}
    </div>
  );
};

export default FilterComponent;
