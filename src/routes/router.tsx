import Home from 'domains/Home'
import Plans from 'domains/Plans'
import WhyUs from 'domains/WhyUs'
import App from 'layout/App'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

// const loader = async () => {
//   if (!navigator.onLine) {
//     return redirect('/login')
//   }
//   return null
// }

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
          path="/gym-website"
          element={<Home />}
          // errorElement={<GenericErrorPage />}
          // handle={{
          //   crumb: () => <Link to="/login">Messages</Link>,
          // }}
        />
        <Route path="/plans" element={<Plans />} />
        <Route
          path="/why-us"
          element={<WhyUs />}
          // errorElement={<GenericErrorPage />}
          // handle={{
          //   crumb: () => <Link to="/login">Messages</Link>,
          // }}
        />
        <Route
          path="/our-work"
          element={<Home />}
          // errorElement={<GenericErrorPage />}
          // handle={{
          //   crumb: () => <Link to="/login">Messages</Link>,
          // }}
        />
        {/* <Route
          path="/service"
          element={<Home />}
          // errorElement={<GenericErrorPage />}
          // handle={{
          //   crumb: () => <Link to="/login">Messages</Link>,
          // 
         />
         */}
      </Route>
    </>
  )
)
