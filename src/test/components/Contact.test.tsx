import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '@/components/contact';
import { createContactMessage } from '@/lib/actions';
import { ContactFormState } from '@/lib/actions';

jest.spyOn(require('@/lib/actions'), 'createContactMessage').mockResolvedValue({} as ContactFormState);

test('devrait afficher un message de succès lorsque le formulaire est soumis avec des données valides', async () => {
  const mockSuccessResponse: ContactFormState = {
    email: { value: 'test@example.com' },
    subject: { value: 'Test Subject' },
    description: { value: 'This is a valid message with more than 20 characters.' },
    status: { message: 'Your message has been sent successfully!', type: 'success' },
  };

  (createContactMessage as jest.Mock).mockResolvedValue(mockSuccessResponse);

  render(<Contact />);

  userEvent.type(screen.getByLabelText(/your email/i), 'test@example.com');
  userEvent.type(screen.getByLabelText(/subject/i), 'Test Subject');
  userEvent.type(screen.getByLabelText(/your message/i), 'This is a valid message with more than 20 characters.');

  userEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => screen.getByText(/Your message has been sent successfully!/i));
  expect(screen.getByText(/Your message has been sent successfully!/i)).toBeInTheDocument();
});

test('devrait afficher des erreurs lorsque les champs sont invalides', async () => {
  const mockErrorResponse: ContactFormState = {
    email: { value: 'invalid-email' },
    subject: { value: 'Short' },
    description: { value: 'Short msg' },
    status: { message: 'Please correct the errors in the form.', type: 'error' },
  };

  (createContactMessage as jest.Mock).mockResolvedValue(mockErrorResponse);

  render(<Contact />);

  userEvent.type(screen.getByLabelText(/Your email/i), 'invalid-email');
  userEvent.type(screen.getByLabelText(/Subject/i), 'Short');
  userEvent.type(screen.getByLabelText(/Your message/i), 'Short msg');

  userEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => screen.getByText(/Please correct the errors in the form./i));

  expect(screen.getByText(/Please correct the errors in the form./i)).toBeInTheDocument();
});






