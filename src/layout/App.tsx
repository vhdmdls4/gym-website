import { Outlet } from 'react-router-dom'
import AppFooter from 'layout/AppFooter'
import AppHeader from 'layout/AppHeader'
import stylesHome from '@/layout/components/Background.module.css'
import { Toaster } from '@/components/ui/toaster'

export default function App() {
  return (
    <div className="relative overflow-hidden overflow-y-auto min-h-dvh">
      <AppHeader />
      <div className="h-full sm:pb-40 pt-5 sm:pt-10 lg:pb-48 lg:pt-20">
        <div className={stylesHome.backgroundStripes} />
        <main className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <Outlet />
          <Toaster />
        </main>
      </div>
      <AppFooter />
    </div>
  )
}
