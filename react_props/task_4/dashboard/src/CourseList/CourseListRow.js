import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            );
        }
        return (
            <tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </tr>
        );
    }
    return (
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
};