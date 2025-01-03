import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/indexRoute';
import { Fragment } from 'react';
import DefaultComponent from './components/DefaultComponent';
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((routes) => {
          const Page = routes.element;
          const Layout = routes.isShowHeader ? DefaultComponent : Fragment;
          return (
            <Route
              key={routes.path}
              path={routes.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
