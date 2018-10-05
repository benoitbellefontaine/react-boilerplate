import React from 'react';
import PropTypes from 'prop-types';
import fakeItem from './fakeItem';
import ItemDetails from 'components/ItemDetails';

export default class ItemPage extends React.Component {
    render() {
        return (
            <ItemDetails item={fakeItem} />
        );
    }
}