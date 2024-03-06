import {Provider} from 'react-redux';
import store from './store';
import Counter from './features/counter/counter.js';

 export default function App() {
  return (
      <Counter />
  );
 }