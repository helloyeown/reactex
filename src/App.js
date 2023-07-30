import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import SampleLayoust from './layout/SampleLayout';
import SampleLayout from './layout/SampleLayout';
import Kiosk from './components/kiosk';

function App() {
  return (
    <div className="App">
      <SampleLayout>
        <Kiosk></Kiosk>
      </SampleLayout>
    </div>
  );
}

export default App;
