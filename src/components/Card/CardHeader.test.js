import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import CardHeader from './CardHeader';

const mockProps = {
    caption: 'Caption',
    editedCaption: 'editedCaption',
    isEdit: false,
    readonly: false,
    children: null,
    checkbox: null,
    onEdit: () => jest.fn,
};

describe('CardHeader', () => {
    let props;

    beforeEach(() => {
        props = { ...mockProps };
    });

    test('Should render', () => {
        render(<CardHeader {...props} />);

        const element = screen.getByText(mockProps.caption);
        expect(element).toHaveClass('cardCaption');
    });

    test('Should render in readonly mode', () => {
        props.readonly = true;
        render(<CardHeader {...props} />);

        const element = screen.getByText(mockProps.caption);
        expect(element).toHaveClass('cardCaption');
    });

    test('Should render in edit mode', () => {
        props.isEdit = true;
        const { container } = render(<CardHeader {...props} />);

        const element = container.querySelector('div');
        expect(element).toHaveClass('cardCaption');
    });

    test('Should render in edit mode with onEdit', () => {
        jest.spyOn(props, 'onEdit');
        props.isEdit = true;
        render(<CardHeader {...props} />);

        const element = screen.getByDisplayValue(mockProps.editedCaption);
        fireEvent.change(element, { target: { value: 'new card Caption' } });
        expect(props.onEdit).toHaveBeenCalledTimes(1);
    });
});
