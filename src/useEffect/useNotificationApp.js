import { useNotification } from './useNotification';

function App() {
  const trigerNotif = useNotification('Can I eat sth?', {
    body: 'I love that',
  });
  return (
    <div>
      <button onClick={trigerNotif}>Hello</button>
    </div>
  );
}

export default App;
