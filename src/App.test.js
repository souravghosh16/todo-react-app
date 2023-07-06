import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom/client';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("rendered without crashing", ()=>{
  render(<App />);
  const linkElement = screen.getByText('Hi There!')
  expect(linkElement).toBeInTheDocument()
})

it("rendered test with test-id", ()=>{
  const {container} = render(<App />)
  const foo = container.querySelector('[data-test="bar"]')
  expect(foo.innerHTML).toContain('Ki go')
 // expect(linkElement).toBeInTheDocument()
})

it("rendered test with test id ====", ()=>{
  const {container} = render(<App />)
  const foo = container.querySelector('[id="bar"]')
  expect(foo.innerHTML).toContain('Ki go id')
 // expect(linkElement).toBeInTheDocument()
})

it("rendered test with class ====", ()=>{
  const {container} = render(<App />)
  const foo = container.querySelector('[class="bar"]')
  expect(foo.innerHTML).toContain('Ki go class9')
 // expect(linkElement).toBeInTheDocument()
})
