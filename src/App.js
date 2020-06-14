import React from 'react';
import IntroSection from './components/IntroSection';
import Header from './components/Header';
import Card from './components/Card';
import './styles/index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <IntroSection />
      </div>
    );
  }
}
export default App;
