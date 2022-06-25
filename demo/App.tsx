import { ReziseProvider } from '../src';
import Demo from './Demo';
import {
  RefScrollProgress,
  RefViewportScroll,
  FramedScrollMotion,
} from './examples';

function App() {
  return (
    <ReziseProvider>
      <div className="container">
        <header>Hero</header>
        <main>
          <Demo />
          <RefScrollProgress />
          <RefViewportScroll />
          <FramedScrollMotion />
        </main>
        <footer>footer 2</footer>
      </div>
    </ReziseProvider>
  );
}

export default App;
