import { FrameProvider } from '../src';
import React from 'react';
import Header from './components/Header';
// import Demo from './Demo';
import {
  RefViewportScroll,
  FramedScrollMotion,
  ContainerRef,
} from './examples';

function App() {
  return (
    <FrameProvider>
      <div className="container">
        <Header />

        <main>
          <section>
            <FramedScrollMotion />
          </section>

          <section>
            <RefViewportScroll />
          </section>

          <section>
            <ContainerRef />
          </section>
          {/* <Demo /> */}
        </main>

        <footer>
          <a
            href="https://github.com/leifarriens/framed-scroll-motion"
            target="_blank"
          >
            github
          </a>
        </footer>
      </div>
    </FrameProvider>
  );
}

export default App;
