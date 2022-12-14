import JoinRoom from "./pages/JoinRoom";
import Chat from "./pages/Chat";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <JoinRoom />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
function App() {

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
