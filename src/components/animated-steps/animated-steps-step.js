import React from 'react';
import { EuiIcon } from '@elastic/eui';
import classNames from 'classnames';

export default class Step extends React.Component {
  render() {
    const { checked, number, isInactive } = this.props;

    const classes = classNames('animatedSteps__number', {
      'animatedSteps__number-isInactive': isInactive,
    });

    return (
      <span className={classes}>
        {checked ? (
          <EuiIcon type="check" className="animatedSteps__number__icon" />
        ) : (
          number
        )}
      </span>
    );
  }
}
