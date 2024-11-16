import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import '@radix-ui/themes/styles.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes/router'
import { Theme } from '@radix-ui/themes'
import './index.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Theme appearance="dark" radius="full">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
)
