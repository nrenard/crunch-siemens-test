import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { http } from './helpers';

import Header from './components/Header';
import ActiveContent from './components/ActiveContent';
import Carousel from './components/Carousel';

import theme from './styles/theme';
import Global from './styles/global';

import { ITemplate } from './types/templates';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const requestTemplates = async (): Promise<void> => {
    try {
      const response = await http.get('/templates');
      setLoading(false);
      setTemplates(JSON.parse(response.data));
    } catch (err) {
      console.error(err);
      alert('We have some error see this in the console!');
    }
  };

  useEffect(() => {
    requestTemplates();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div className="body-container">
        <Header />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ActiveContent selectedItemId={templates[selectedPage - 1]?.id} />
            <Carousel
              items={templates}
              changePage={setSelectedPage}
              selectedPage={selectedPage}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
