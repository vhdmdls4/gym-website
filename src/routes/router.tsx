import Home from 'domains/Home'
import App from 'layout/App'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    //father route can be used to define a layout for the app
    <>
      {/* <Route>
        <Route
          path="/login"
          // loader={({ params }: any) => {
          //   console.log(params["lang"]);
          //   //should return value
          //   return null;
          // }}
          // action={() => {
          //   return null;
          // }}
          // <Route path="/project/task?/:taskId" />

          element={<Login />}
          // errorElement={<GenericErrorPage />}
        />
      </Route> */}
      <Route element={<App />}>
        <Route
          path="/"
          element={<Home />}
          // errorElement={<GenericErrorPage />}
          // handle={{
          //   crumb: () => <Link to="/login">Messages</Link>,
          // }}
        />
      </Route>
    </>
  )
)
