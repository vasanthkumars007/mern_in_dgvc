import React, { useEffect } from 'react';

function Product() {
  useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          console.log(item.name); // Extract and print the name in the console
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <p>Check the console for product names fetched from the API.</p>
    </div>
  );
}

export default Product;
