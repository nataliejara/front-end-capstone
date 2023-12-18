import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom';



test('Renders the BookingForm heading', () => {
  const mockProps = {
    availableTimes: {
      availableTimes: ["17:00", "18:00", "19.00", "20:00", "21:00", "22:00"]
    },
    submitForm: jest.fn(),
    dispatch: jest.fn()
  };

  render(<BookingForm {...mockProps} />);
  const headingElement = screen.getByLabelText("Choose Date");
  expect(headingElement).toBeInTheDocument();

  const bookButton = screen.getByRole("button")
  fireEvent.click(bookButton);


})

