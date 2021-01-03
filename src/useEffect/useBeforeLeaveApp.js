import { useBeforeLeave } from './useBeforeLeave';

function App() {
  const begForLife = () => console.log('Plz dont leave');
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
