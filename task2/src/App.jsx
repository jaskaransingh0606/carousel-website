import React, { useState, useEffect } from 'react';
import Page1 from './AllPages/Page1';
import Page2 from './AllPages/Page2';
import Page3 from './AllPages/Page3';
import Page4 from './AllPages/Page4';
import Page5 from './AllPages/Page5';
import Page6 from './AllPages/Page6';
import Page7 from './AllPages/Page7';

function App() {
  const totalPages = 7; // Total number of pages
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && activePage < totalPages) {
        setActivePage(activePage + 1);
      } else if (event.deltaY < 0 && activePage > 1) {
        setActivePage(activePage - 1);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activePage]);

  return (
    <div className="App">
      {activePage === 1 && <Page1 />}
      {activePage === 2 && <Page2 />}
      {activePage === 3 && <Page3 />}
      {activePage === 4 && <Page4 />}
      {activePage === 5 && <Page5 />}
      {activePage === 6 && <Page6 />}
      {activePage === 7 && <Page7 />}
    </div>
  );
}

export default App;


