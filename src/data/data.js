export const faveExtraAction = {
  color: 'subdued',
  iconType: 'starEmpty',
  iconSize: 's',
  'aria-label': 'Add to favorites',
};

export const pinExtraAction = {
  color: 'subdued',
  iconType: 'pin',
  iconSize: 's',
  'aria-label': 'Pin to top',
};

export const topLinks = [
  {
    label: 'Recently viewed',
    iconType: 'clock',
    flyoutMenu: {
      title: 'Recent items',
      listItems: [
        {
          label: 'My dashboard',
          href: '#/layout/nav-drawer',
          iconType: 'dashboardApp',
          extraAction: faveExtraAction,
        },
        {
          label: 'Workpad with title that wraps',
          href: '#/layout/nav-drawer',
          iconType: 'canvasApp',
          extraAction: faveExtraAction,
        },
        {
          label: 'My logs',
          href: '#/layout/nav-drawer',
          iconType: 'loggingApp',
          'aria-label': 'This is an alternate aria-label',
          extraAction: faveExtraAction,
        },
      ],
    },
  },
  {
    label: 'Favorites',
    iconType: 'starEmpty',
    flyoutMenu: {
      title: 'Favorite items',
      listItems: [
        {
          label: 'My workpad',
          href: '#/layout/nav-drawer',
          iconType: 'canvasApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starFilled',
            iconSize: 's',
            'aria-label': 'Remove from favorites',
            alwaysShow: true,
          },
        },
        {
          label: 'My logs',
          href: '#/layout/nav-drawer',
          iconType: 'loggingApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starFilled',
            iconSize: 's',
            'aria-label': 'Remove from favorites',
            alwaysShow: true,
          },
        },
      ],
    },
  },
];

export const exploreLinks = [
  {
    label: 'Canvas',
    href: '#/layout/nav-drawer',
    iconType: 'canvasApp',
    isActive: true,
    extraAction: {
      ...pinExtraAction,
      alwaysShow: true,
    },
  },
  {
    label: 'Discover',
    href: '#/layout/nav-drawer',
    iconType: 'discoverApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Visualize',
    href: '#/layout/nav-drawer',
    iconType: 'visualizeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Dashboard',
    href: '#/layout/nav-drawer',
    iconType: 'dashboardApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Machine learning',
    href: '#/layout/nav-drawer',
    iconType: 'machineLearningApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Custom Plugin (no icon)',
    href: '#/layout/nav-drawer',
    extraAction: pinExtraAction,
  },
];

export const solutionsLinks = [
  {
    label: 'APM',
    href: '#/layout/nav-drawer',
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Infrastructure',
    href: '#/layout/nav-drawer',
    iconType: 'infraApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Log viewer',
    href: '#/layout/nav-drawer',
    iconType: 'loggingApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    href: '#/layout/nav-drawer',
    iconType: 'upgradeAssistantApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    href: '#/layout/nav-drawer',
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    href: '#/layout/nav-drawer',
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
];

export const adminLinks = [
  {
    label: 'Admin',
    iconType: 'managementApp',
    flyoutMenu: {
      title: 'Tools and settings',
      listItems: [
        {
          label: 'Dev tools',
          href: '#/layout/nav-drawer',
          iconType: 'devToolsApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
          },
        },
        {
          label: 'Stack Monitoring',
          href: '#/layout/nav-drawer',
          iconType: 'monitoringApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
          },
        },
        {
          label: 'Stack Management',
          href: '#/layout/nav-drawer',
          iconType: 'managementApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
          },
        },
      ],
    },
  },
];

export const breadcrumbs = [
  {
    text: 'Management',
    href: '#',
    onClick: e => {
      e.preventDefault();
      console.log('You clicked management');
    },
    'data-test-subj': 'breadcrumbsAnimals',
    className: 'customClass',
  },
  {
    text: 'Truncation test is here for a really long item',
    href: '#',
    onClick: e => {
      e.preventDefault();
      console.log('You clicked truncation test');
    },
  },
  {
    text: 'hidden',
    href: '#',
    onClick: e => {
      e.preventDefault();
      console.log('You clicked hidden');
    },
  },
  {
    text: 'Users',
    href: '#',
    onClick: e => {
      e.preventDefault();
      console.log('You clicked users');
    },
  },
  {
    text: 'Create',
  },
];
