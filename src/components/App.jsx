import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
};
