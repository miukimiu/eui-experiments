import React from 'react';
import { EuiTitle, EuiIcon } from '@elastic/eui';

// @ts-ignore
import GraphIllustration from './graph-illustration';

// @ts-ignore
import Step from './animated-steps-step';

export default class StepsCard extends React.Component<any, any> {
  render() {
    return (
      <div className="euiPanel animatedSteps">
        <div className="animatedSteps__mainSection">
          <div className="animatedSteps__mainContent">
            <EuiTitle size="s">
              <h2>Three steps to your graph</h2>
            </EuiTitle>

            <ul className="animatedSteps__list">
              <li>
                <Step number={1} checked />
                <p>Select a data source </p>
              </li>
              <li>
                <Step number={2} />
                <p>Add fields</p>
              </li>
              <li>
                <Step number={3} isInactive />
                <p>
                  Enter a query in the search bar to start exploring. Don't know
                  where to start? Graph the top terms
                </p>
              </li>
            </ul>
          </div>
          <div className="animatedSteps__illustration">
            <GraphIllustration />
          </div>
        </div>
        <div className="animatedSteps__moreSection">
          <EuiTitle size="xs">
            <h2>Three steps to your graph</h2>
          </EuiTitle>
          <ul className="animatedSteps__moreSection__list">
            <li>
              <EuiIcon type="videoPlayer" />
              <span>Watch video tutorial</span>
            </li>
            <li>
              <EuiIcon type="training" />
              <span>Read documentation</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
