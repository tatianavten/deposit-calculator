/**
 * Enable `@testing-library/jest-dom` matchers such as toHaveTextContent or toHaveAttribute.
 */
import '@testing-library/jest-dom';
/**
 * Enable `jest-axe` for accessibility testing.
 */
import 'jest-axe/extend-expect';

const matchMediaMock = jest.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: matchMediaMock,
  });
});

beforeEach(() => {
  matchMediaMock.mockClear();
});
