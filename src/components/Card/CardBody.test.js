import { fireEvent, render, screen } from '@testing-library/react';

import CardBody from './CardBody';

const mockProps = {
    text: 'Text',
    editedText: 'editedText',
    isEdit: false,
    onEdit: () => {},
};

describe('CardBody', () => {
    let props;

    beforeEach(() => {
        props = { ...mockProps };
    });

    test('Should render', () => {
        render(<CardBody {...props} />);
        const element = screen.getByText(mockProps.text);
        expect(element).toHaveClass('cardText');
    });

    test('Should render in edit mode', () => {
        props.isEdit = true;
        const { container } = render(<CardBody {...props} />);
        const element = container.querySelector('div');
        expect(element).toHaveClass('cardTextarea');
    });

    test('Should render in edit mode with onEdit', () => {
        props.isEdit = true;
        render(<CardBody {...props} />);
        const element = screen.getByDisplayValue(mockProps.editedText);
        fireEvent.change(element, { target: { value: 'new card Text' } });
    });
});
