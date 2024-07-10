import { Outlet } from 'react-router-dom'
import AppFooter from 'layout/AppFooter'
import AppHeader from 'layout/AppHeader'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

function App() {
  return (
    <div className="relative overflow-hidden">
      <AppHeader />

      <div className="h-full sm:pb-40 sm:pt-10 lg:pb-48 lg:pt-20">
        <main className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <AppFooter />
    </div>
  )
}

export default App
