/* eslint-disable @typescript-eslint/no-explicit-any */
import '@mantine/core/styles.css'
import { AppProvider } from '@/src/contexts'
import { PrivateRoute } from '@/src/routes/PrivateRoutes'
import { theme } from '@/theme'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import '@mantine/notifications/styles.css'

export const metadata = {
  title: {
    default: 'Xearch Hub',
    template: '%s | Xearch Hub',
  },
  description: 'Painel de buscas de dados por documento',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProvider>
          <PrivateRoute>
            <MantineProvider theme={theme} defaultColorScheme="light">
              <Notifications /> {children}
            </MantineProvider>
          </PrivateRoute>
        </AppProvider>
      </body>
    </html>
  )
}
