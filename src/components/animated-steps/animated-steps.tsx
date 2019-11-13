import React from 'react';
import { EuiTitle, EuiIcon } from '@elastic/eui';

// @ts-ignore
import GraphIllustration from './graph-illustration';

// @ts-ignore
import Step from './animated-steps-step';

import { AnimatedSteps } from './animated-steps.styled';

export default class StepsCard extends React.Component<any, any> {
  render() {
    return (
      <AnimatedSteps className="euiPanel">
        <div className="animatedSteps__mainSection">
          <div className="animatedSteps__mainContent">
            <EuiTitle size="s">
              <h2>Three steps to your graph</h2>
            </EuiTitle>

            <ul className="animatedSteps__list">
              <li>
                <Step number={1} checked />
                <p>
                  Select a <a href="/">data source</a>
                </p>
              </li>
              <li>
                <Step number={2} />
                <p>
                  <a href="/">Add fields</a>
                </p>
              </li>
              <li>
                <Step number={3} isInactive />
                <p>
                  Enter a query in the search bar to start exploring. Don't know
                  where to start? <a href="/">Graph the top terms</a>
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
            <h2>Want to learn more?</h2>
          </EuiTitle>
          <ul className="animatedSteps__moreSection__list">
            <li>
              <EuiIcon type="videoPlayer" />
              <span>Watch video</span>
            </li>
            <li>
              <EuiIcon type="training" />
              <span>Read documentation</span>
            </li>
          </ul>
        </div>
      </AnimatedSteps>
    );
  }
}
