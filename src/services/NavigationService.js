import * as RootNavigation from './RootNavigation';

const NavigationService = {

  goToRoute(routeName, params) {
    RootNavigation.navigate(routeName, params);
  },

  goBack() {
    RootNavigation.goBack();
  },
};

export default NavigationService;