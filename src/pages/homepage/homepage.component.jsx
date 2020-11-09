import React, { Profiler } from 'react';

import Articles from '../../components/articles/articles.component';
import CardSection from '../../components/card-section/card-section.component';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
      // console.log({ id, phase, actualDuration });
    }}>
      <CardSection />
      <Articles />
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
