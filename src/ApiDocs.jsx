import { useEffect, useState } from 'react';
import './ApiDocs.css';
const ApiDocs = () => {
  const [specData, setSpecData] = useState(null);

  // Function to load and parse the JSON spec file
  // const loadSpec = (specUrl) => {
  //   console.log('Loading JSON spec from URL:', specUrl); // Log the URL being loaded

  //   fetch(specUrl)
  //     .then((response) => {
  //       console.log('Response status:', response.status); // Log the response status
  //       return response.json(); // Get JSON from the response
  //     })
  //     .then((jsonData) => {
  //       console.log('Parsed JSON data:', jsonData); // Log the parsed JSON data
  //       setSpecData(jsonData); // Set the parsed JSON to state
  //     })
  //     .catch((error) => {
  //       console.error('Error loading JSON spec:', error); // Log any fetch errors
  //     });
  // };

  const loadSpec = (specFileName) => {
    const specUrl = `/redocvite/${specFileName}`; // Use the correct base path
    console.log('Loading JSON spec from URL:', specUrl); // Log the URL being loaded
  
    fetch(specUrl)
      .then((response) => {
        console.log('Response status:', response.status); // Log the response status
        return response.json(); // Get JSON from the response
      })
      .then((jsonData) => {
        console.log('Parsed JSON data:', jsonData); // Log the parsed JSON data
        setSpecData(jsonData); // Set the parsed JSON to state
      })
      .catch((error) => {
        console.error('Error loading JSON spec:', error); // Log any fetch errors
      });
  };
  

  // Dynamically load the Redoc script into the page
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Set default spec on load
  useEffect(() => {
    console.log('Component mounted, loading default spec');
    loadSpec('astroj.json'); // Load the default JSON file on initial load
  }, []);

  const handleDropdownChange = (event) => {
    const selectedSpec = event.target.value;
    console.log('Dropdown changed, selected spec:', selectedSpec); // Log selected spec from dropdown
    loadSpec(selectedSpec); // Load the spec based on dropdown selection
  };

  useEffect(() => {
    if (specData) {
      console.log('Initializing Redoc with spec data');
      try {
        // Ensure Redoc is loaded and available
        if (window.Redoc) {
          console.log('Redoc is available');
          // eslint-disable-next-line no-undef
          Redoc.init(
            specData, // Pass the specData directly (which is now parsed JSON)
            {},
            document.getElementById('container') // Pass the container for Redoc
          );
        } else {
          console.error('Redoc is not available on window object');
        }
      } catch (error) {
        console.error('Error initializing Redoc:', error); // Log Redoc initialization errors
      }
    }
  }, [specData]);

  return (
    <div>
      <h1>API Documentation</h1>

      {/* Dropdown for selecting the JSON file */}
      <select id="dropdown" onChange={handleDropdownChange}>
        <option value="astroj.json">Astro</option>
        <option value="hp-agri.json">Agri</option>
        <option value="hpsamb.json">API 3</option>
        {/* Add more options for additional JSON files */}
      </select>

      {/* ReDoc container */}
      <div id="container" style={{ width: '100%', height: '80vh', marginTop: '20px' }}></div>
    </div>
  );
};

export default ApiDocs;
