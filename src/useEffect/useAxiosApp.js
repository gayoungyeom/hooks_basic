import { useAxios } from './useAxios';

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts.am/api/v2/list_movies.json',
  });
  console.log(
    `Loading: ${loading}\n Error: ${error}\n Data: ${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>{data && data.state}</h1>
      <h2>{loading && 'Loading'}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
