import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactForm from '../components/ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Select a reason')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByText('Send Message')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Please select a reason')).toBeInTheDocument()
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })
  })

  it('shows email validation error for invalid email', async () => {
    render(<ContactForm />)
    
    const emailInput = screen.getByPlaceholderText('Your Email')
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    
    const submitButton = screen.getByText('Send Message')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Email is invalid')).toBeInTheDocument()
    })
  })

  it('clears errors when user starts typing', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByText('Send Message')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    })
    
    const nameInput = screen.getByPlaceholderText('Your Name')
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })
})