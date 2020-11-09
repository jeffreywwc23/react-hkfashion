import React, { useEffect, lazy, Suspense } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Navbar from './components/navbar/navbar.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import NextPageToTop from './components/next-page-to-top/nextpagetotop.component';

import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Navbar />
      <GlobalStyle />

      <ErrorBoundary>
        <NextPageToTop />
        <Suspense fallback={<Spinner />}>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/shop' component={ShopPage} />
                  <Route exact path='/checkout' component={CheckoutPage} />
                  <Route
                    exact
                    path='/signin'
                    render={() =>
                      currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                    } />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
