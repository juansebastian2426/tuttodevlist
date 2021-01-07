import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import App from '../../App';
import { Provider as ThemeProvider } from '../../contexts/ThemeContext';
import { Provider as ShapeListProvider } from '../../contexts/ShapeListContext';

describe('Aplication', () => {

  beforeEach(() => {
    render(
      <ThemeProvider>
        <ShapeListProvider>
          <App />
        </ShapeListProvider>
      </ThemeProvider>
    );
  });


  test('Render aplication without crashing', () => {
    expect(screen.getByText('TuttoDevList')).toBeInTheDocument();
  });
  
  test('Initialize with 2 items', () => {
    const items = screen.getAllByTestId('item');
    expect(items.length).toEqual(2);
  });

  test('Delete Item/s', async () => {
    const btnRemoveItems = await screen.findAllByTestId('remove-item');
    useEvent.click(btnRemoveItems[0]);

    let items = await screen.findAllByTestId('item');

    expect(items.length).toEqual(1);

    useEvent.click(btnRemoveItems[1]);

    items = screen.queryAllByTestId('item');

    expect(items.length).toEqual(0);
    expect(screen.getByText("You don't have items yet")).toBeInTheDocument();
  });
});


export {};