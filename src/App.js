import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout/layout';
import Root from './pages/root/root';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<Layout/>}>
          <Route index element={<Root/>}/>
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
