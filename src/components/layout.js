import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import * as euiLightVars from '@elastic/eui/dist/eui_theme_light.json';
import * as euiDarkVars from '@elastic/eui/dist/eui_theme_dark.json';
import {
  EuiPage,
  EuiPageBody,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiIcon,
  EuiNavDrawerGroup,
  EuiNavDrawer,
  EuiHorizontalRule,
  EuiShowFor,
  EuiFocusTrap,
  EuiHeaderBreadcrumbs,
  EuiButtonToggle,
} from '@elastic/eui';
import { ThemeProvider } from 'styled-components';
import { keyCodes } from '@elastic/eui/lib/services';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import {
  topLinks,
  exploreLinks,
  solutionsLinks,
  adminLinks,
  breadcrumbs,
} from '../data/data';

export default class extends Component {
  state = {
    toggleLight: localStorage.getItem('theme') === 'light',
    theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
    ssrDone: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      toggleLight: localStorage.getItem('theme') === 'light',
      theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
      ssrDone: false,
    };
  }

  // componentDidMount() {
  //   const { theme } = this.state;

  //   try {
  //     if (theme === 'light') {
  //       console.log('theme light?', theme);
  //       this.theme = require('../themes/theme_light.scss');
  //     } else if (theme === 'dark') {
  //       console.log('theme dark?', theme);
  //       this.theme = require('../themes/theme_dark.scss');
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   this.setState({ ssrDone: true });
  // }

  setTheme = () => {
    this.setState(
      {
        theme: this.state.theme === 'light' ? 'dark' : 'light',
        toggleLight: this.state.theme === 'light',
        hemeIsLoading: true,
      },
      () => {
        localStorage.setItem('theme', this.state.theme);
        window.location.reload();
      }
    );
  };

  onKeyDown = event => {
    if (event.keyCode === keyCodes.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      this.closeFullScreen();
    }
  };

  renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoKibana"
        href="#/layout/nav-drawer"
        aria-label="Goes to home"
      />
    );
  }

  renderMenuTrigger() {
    return (
      <EuiHeaderSectionItemButton
        aria-label="Open nav"
        onClick={() => this.navDrawerRef.toggleOpen()}>
        <EuiIcon type="apps" href="#" size="m" />
      </EuiHeaderSectionItemButton>
    );
  }

  renderBreadcrumbs() {
    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  }

  setNavDrawerRef = ref => (this.navDrawerRef = ref);

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    console.log('euiLightVars', euiLightVars);

    return (
      <ThemeProvider
        theme={theme === 'light' ? euiLightVars.default : euiDarkVars.default}>
        <Helmet>
          {theme === 'light' ? (
            <link rel="stylesheet" href={'/eui_theme_light.min.css'} />
          ) : (
            <link rel="stylesheet" href={'/eui_theme_dark.min.css'} />
          )}
        </Helmet>
        <EuiFocusTrap>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
            onKeyDown={this.onKeyDown}>
            <EuiHeader>
              <EuiHeaderSection grow={true}>
                <EuiShowFor sizes={['xs', 's']}>
                  <EuiHeaderSectionItem border="right">
                    {this.renderMenuTrigger()}
                  </EuiHeaderSectionItem>
                </EuiShowFor>
                <EuiHeaderSectionItem border="right">
                  {this.renderLogo()}
                </EuiHeaderSectionItem>

                {this.renderBreadcrumbs()}

                <EuiHeaderSection side="right">
                  <EuiHeaderSectionItem>
                    <EuiButtonToggle
                      label="Toggle Me"
                      iconType={this.state.toggleLight ? moon : sun}
                      onChange={this.setTheme}
                      isSelected={this.state.toggleOn}
                      isEmpty
                      isIconOnly
                    />
                  </EuiHeaderSectionItem>
                </EuiHeaderSection>
              </EuiHeaderSection>
            </EuiHeader>
            <EuiNavDrawer ref={this.setNavDrawerRef}>
              <EuiNavDrawerGroup listItems={topLinks} />
              <EuiHorizontalRule margin="none" />
              <EuiNavDrawerGroup listItems={exploreLinks} />
              <EuiHorizontalRule margin="none" />
              <EuiNavDrawerGroup listItems={solutionsLinks} />
              <EuiHorizontalRule margin="none" />
              <EuiNavDrawerGroup listItems={adminLinks} />
            </EuiNavDrawer>
            <EuiPage className="euiNavDrawerPage" restrictWidth>
              <EuiPageBody className="euiNavDrawerPage__pageBody">
                {children}
              </EuiPageBody>
            </EuiPage>
          </div>
        </EuiFocusTrap>
      </ThemeProvider>
    );
  }
}
