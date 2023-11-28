import { render, screen } from '@/test-utils'

import { Profile } from './Profile'

describe('Profile component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Profile />)
    expect(screen.getByText('this guide')).toHaveAttribute('href', 'https://mantine.dev/guides/next/')
  })
})
