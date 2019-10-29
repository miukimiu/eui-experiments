import React from 'react';
import { Link } from 'gatsby';
import {
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiPageContentBody,
} from '@elastic/eui';
// @ts-ignore
import AnimatedSteps from '../components/animated-steps/animated-steps';

export default class Index extends React.Component {
  render() {
    return <AnimatedSteps />;
  }
}
