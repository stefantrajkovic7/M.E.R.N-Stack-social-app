import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';

const SelectList = ({
                      name,
                      value,
                      error,
                      info,
                      options,
                      onChange
                  }) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.name}>
            {option.label}
        </option>
    ));
    return (
        <div className="form-group">
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                name={name}
                value={value}
                onChange={onChange}
            >
                {selectOptions}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (
                <div className="invalid-feedback">{error}</div>
            )}
        </div>
    )
};

SelectList.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectList;