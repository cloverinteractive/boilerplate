import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Alert from 'main/components/Alert';

const defaultProps = {
    colors: { success: true },
    message: {
        header: 'Success!',
        content: 'Operation successful.'
    },
    onDismiss: (f => f),
};

let wrapper;

describe('<Alert />', () => {
    before(() => {
        wrapper = mount(
            <Alert {...defaultProps} />
        )
    })

    it('renders', () => {
        expect(wrapper).to.exist;
    });

    it('renders message', () => {
        expect(wrapper.text()).to.eql('Success!Operation successful.');
    });
});