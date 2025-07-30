import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'
import { ThemeProvider } from '../contexts/ThemeContext'

const renderWithProviders = (component) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </ThemeProvider>
  )
}

describe('Navigation', () => {
  it('renders navigation links', () => {
    renderWithProviders(<App />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('navigates to About page when About link is clicked', () => {
    renderWithProviders(<App />)
    
    const aboutLink = screen.getByText('About')
    fireEvent.click(aboutLink)
    
    expect(screen.getByText('About Anamol')).toBeInTheDocument()
  })

  it('navigates to Portfolio page when Portfolio link is clicked', () => {
    renderWithProviders(<App />)
    
    const portfolioLink = screen.getByText('Portfolio')
    fireEvent.click(portfolioLink)
    
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()
  })

  it('navigates to Contact page when Contact link is clicked', () => {
    renderWithProviders(<App />)
    
    const contactLink = screen.getByText('Contact')
    fireEvent.click(contactLink)
    
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })
})