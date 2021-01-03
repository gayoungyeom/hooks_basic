import { useTitle } from './useTitle';

function App() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
