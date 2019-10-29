import styled from 'styled-components';

export const stepCircleSize = 24;

export const AnimatedSteps = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.theme.euiSizeL};

  .animatedSteps__mainSection {
    display: flex;
  }

  .animatedSteps__mainContent {
    flex: 1;
    padding: ${props => props.theme.euiSizeL};
  }

  .animatedSteps__illustration {
    padding: ${props => props.theme.euiSizeM};
    margin-right: ${props => props.theme.euiSizeL};
  }

  .animatedSteps__list {
    padding-top: ${props => props.theme.euiSizeL};

    li {
      display: flex;
      flex-direction: row;
      padding-bottom: ${props => props.theme.euiSizeL};
    }

    p {
      flex: 1;
      padding-left: ${props => props.theme.euiSizeS};
      max-width: 400px;
      font-weight: ${props => props.theme.$euiFontWeightRegular};
      line-height: 1.5;
    }
  }

  .animatedSteps__number {
    width: ${stepCircleSize}px;
    height: ${stepCircleSize}px;
    display: inline-block;
    line-height: ${stepCircleSize}px;
    border-radius: 50%;
    text-align: center;
    color: ${props => props.theme.euiColorEmptyShade};
    background-color: ${props => props.theme.euiColorPrimary};
    font-size: ${props => props.theme.euiSizeM};
    font-weight: ${props => props.theme.euiSizeM};
    border: 2px solid ${props => props.theme.euiColorPrimary};

    .animatedSteps__number__icon {
      position: relative;
      top: -2px;
    }

    .animatedSteps__number-isInactive {
      background-color: transparent;
      border-color: ${props => props.theme.euiColorDarkShade};
      color: ${props => props.theme.euiColorDarkShade};
    }
  }

  .animatedSteps__moreSection {
    background: ${props => props.theme.euiColorLightestShade};
    padding: ${props => props.theme.euiSizeL};

    h2 {
      padding-bottom: ${props => props.theme.euiSizeM};
    }

    .animatedSteps__moreSection__list {
      display: flex;

      li {
        display: flex;
        padding: 0 ${props => props.theme.euiSizeL};
        align-items: center;

        > span {
          padding-left: ${props => props.theme.euiSizeS};
        }

        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
`;
