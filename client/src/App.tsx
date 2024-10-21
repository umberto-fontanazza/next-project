import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="home" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
}

export default App;
