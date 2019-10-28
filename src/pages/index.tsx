import React from 'react';
import { Link } from 'gatsby';
import AnimatedSteps from '../components/animated-steps/animated-steps';
import { EuiPage, EuiPageBody, EuiButton, EuiSpacer } from '@elastic/eui';

export default class Index extends React.Component<any, any> {
  render() {
    return (
      <EuiPage restrictWidth>
        <EuiPageBody>
          <AnimatedSteps />

          <EuiSpacer size="m" />

          <div>
            <EuiButton
              iconSide="right"
              iconType="arrowRight"
              size="s"
              onClick={() => window.alert('Button clicked')}>
              Complete Step
            </EuiButton>
          </div>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
