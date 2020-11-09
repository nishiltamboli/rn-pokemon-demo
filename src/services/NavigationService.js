import * as RootNavigation from './RootNavigation';

const NavigationService = {

  goToRoute(routeName, params) {
    RootNavigation.navigate(routeName, params);
  },

  goBack() {
    RootNavigation.goBack();
  },

  resetToRoute(routeName, params) {
    RootNavigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: routeName,
            params: params,
          }
        ],
      })
    );
  }
};

export default NavigationService;