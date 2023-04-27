import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Card } from './Card';
import * as utils from '../../utils';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn()),
}));
jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
}));
jest.mock('../../store/selectors');
jest.mock('../../utils');

const cardProps = {
    id: 'testId',
    caption: 'Caption',
    text: 'Text',
    checked: false,
};

const mockProps = {
    card: cardProps,
    variant: 'card',
    onEdit: () => jest.fn,
};

describe('Card', () => {
    let props;

    beforeEach(() => {
        props = { ...mockProps };
    });

    test('Should render', () => {
        render(<Card {...props} />);
        const card = screen.getByTestId('CardId');
        expect(card).toHaveClass('card');
        expect(card).not.toHaveClass('page');
    });

    test('Should double click', async () => {
        const callback = jest.fn();
        jest.spyOn(require('react-router-dom'), 'useNavigate')
            .mockImplementation(() => callback);
        render(<Card {...props} />);

        const card = screen.getByTestId('CardId');
        userEvent.dblClick(card);

        expect(callback).toHaveBeenCalled();
    });

    test('Should render page', () => {
        props.variant = 'page';
        render(<Card {...props} />);

        const card = screen.getByTestId('CardId');
        expect(card).toHaveClass('page');
    });

    test('Should render in isEdit mode with save and exit', () => {
        jest.spyOn(props, 'onEdit');
        render(<Card {...props} />);

        const edit = screen.getByRole('button');
        userEvent.click(edit);

        const save = screen.getByRole('button', { name: /pencil/i });
        userEvent.click(save);

        userEvent.click(edit);
        const exit = screen.getByRole('button', { name: /exit/i });
        userEvent.click(exit);

        expect(props.onEdit).toHaveBeenCalledTimes(3);
    });

    test('Should render switch checked mode', () => {
        props.card.checked = true;
        render(<Card {...props} />);

        const checkbox = screen.getByTestId('checkboxId');
        expect(checkbox).toHaveStyle('background-color: rgb(0, 122, 126);');

        const card = screen.getByTestId('CardId');
        expect(card).toHaveStyle('background-color: rgb(37, 37, 37);');
        userEvent.click(checkbox);
    });

    test('Should call stopPropagation and onCheckCard on double click', () => {
        jest.spyOn(require('react-router-dom'), 'useNavigate')
            .mockImplementation(() => jest.fn());
        jest.spyOn(utils, 'stopPropagation');
        render(<Card {...props} />);

        const checkbox = screen.getByTestId('checkboxId');
        userEvent.dblClick(checkbox);
        expect(utils.stopPropagation).toHaveBeenCalled();
    });

    test('Should change cardHeader and CardBody', () => {
        jest.spyOn(props, 'onEdit');
        render(<Card {...props} />);

        const mockText = 'mockText';
        const edit = screen.getByRole('button');
        userEvent.click(edit);
        expect(props.onEdit).toHaveBeenCalledTimes(1);

        const inputCaption = screen.getByDisplayValue(props.card.caption);
        fireEvent.change(inputCaption, { target: { value: mockText } });
        expect(inputCaption.value).toBe(mockText);

        const inputText = screen.getByDisplayValue(props.card.text);
        fireEvent.change(inputText, { target: { value: mockText } });
        expect(inputText.value).toBe(mockText);
    });

    test('Should render in readonly mode', () => {
        jest.spyOn(require('react-redux'), 'useSelector')
            .mockImplementation(() => true);
        render(<Card {...props} />);

        const card = screen.getByTestId('CardId');
        const checkbox = screen.getByTestId('checkboxId');

        expect(card).toContainElement(checkbox);
    });

    test('Should check caption', () => {
        props.card.caption = '';
        props.card.text = '';
        render(<Card {...props} />);

        const card = screen.getByTestId('CardId');
        const save = screen.getByRole('button', { name: /pencil/i });
        const exit = screen.getByRole('button', { name: /exit/i });

        expect(card).toContainElement(save);
        expect(card).toContainElement(exit);
    });
});
