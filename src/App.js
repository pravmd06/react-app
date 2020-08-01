import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { DataProvider } from './DataContext';
import SiteHeader from './SiteHeader';
import GlobalStyles from './GlobalStyles';
import Spinner from './Spinner';
import ListPage from './ListPage';
import DetailsPage from './DetailsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DataProvider>
          <div>
            <GlobalStyles />
            <SiteHeader />
            <Suspense fallback={<Spinner>Please wait</Spinner>}>
              <Route exact path="/" component={ListPage} />
              <Route exact path="/country/:code" component={DetailsPage} />
            </Suspense>
          </div>
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
