import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import redux from 'react-redux';

import { Card } from './Card';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn()),
}));
jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
}));
jest.mock('../../store/selectors');

const cardProps = {
    id: 'testId',
    caption: 'Caption',
    text: 'Text',
    checked: false,
};

const mockProps = {
    card: cardProps,
    variant: 'card',
    onEdit: () => {},
};

describe('Card', () => {
    let props;

    beforeEach(() => {
        props = { ...mockProps };
    });

    test('Should render', () => {
        render(<Card {...props} />);
    });

    test('Should double click', () => {
        render(<Card {...props} />);
        const card = screen.getByTestId('CardId');
        userEvent.dblClick(card);
    });

    test('Should render page', () => {
        props.variant = 'page';
        render(<Card {...props} />);
        const card = screen.getByTestId('CardId');
        expect(card).toHaveClass('page');
    });

    test('Should render in isEdit mode with save and exit', () => {
        render(<Card {...props} />);
        const edit = screen.getByRole('button');
        userEvent.click(edit);

        const save = screen.getByRole('button', { name: /pencil/i });
        userEvent.click(save);

        userEvent.click(edit);
        const exit = screen.getByRole('button', { name: /exit/i });
        userEvent.click(exit);
    });

    test('Should render switch checked mode', () => {
        props.card.checked = true;
        render(<Card {...props} />);
    });

    test('Should call stopPropagation and onCheckCard on double click', () => {
        render(<Card {...props} />);
        const checkbox = screen.getByTestId('checkboxId');
        userEvent.dblClick(checkbox);
    });

    test('Should change cardHeader and CardBody', () => {
        render(<Card {...props} />);
        const edit = screen.getByRole('button');
        userEvent.click(edit);

        const inputCaption = screen.getByDisplayValue(props.card.caption);
        fireEvent.change(inputCaption, { target: { value: 'new card Caption' } });

        const inputText = screen.getByDisplayValue(props.card.text);
        fireEvent.change(inputText, { target: { value: 'new card Caption' } });
    });

    test('Should render in readonly mode', () => {
        jest
            .spyOn(redux, 'useSelector')
            .mockImplementation(() => true);
        render(<Card {...props} />);
    });

    test('Should check caption', () => {
        props.card.caption = '';
        props.card.text = '';
        render(<Card {...props} />);
    });
});
