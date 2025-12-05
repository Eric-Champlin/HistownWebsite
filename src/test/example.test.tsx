import { describe, it, expect } from 'vitest'
import { render, screen, setMobileViewport, setDesktopViewport } from './utils'

/**
 * Example test to verify testing infrastructure is working
 * This file can be deleted once real tests are written
 */

describe('Testing Infrastructure', () => {
  it('should render a simple component', () => {
    const TestComponent = () => <div>Hello World</div>
    render(<TestComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('should support viewport testing', () => {
    setMobileViewport()
    expect(window.innerWidth).toBe(390)
    expect(window.innerHeight).toBe(844)

    setDesktopViewport()
    expect(window.innerWidth).toBe(1024)
    expect(window.innerHeight).toBe(768)
  })

  it('should have jest-dom matchers available', () => {
    const TestComponent = () => <button disabled>Click me</button>
    render(<TestComponent />)
    const button = screen.getByRole('button')
    
    // These matchers come from @testing-library/jest-dom
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
    expect(button).toHaveTextContent('Click me')
  })
})
