import { useQuery } from '@tanstack/react-query';
import { getFundsData } from './services/getFundsData';
import Datatable from './components/Datatable';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["get funds data"],
    queryFn: getFundsData,
    enabled: true
  });

  if (isPending) {
    return <div className='App'>
      <Header />
      <div className='loading-block'>
        <p className='loading-text'>Loading</p>
        <span className='loader-animation'></span>
      </div>
      <Footer />
    </div>
  }

  if (isError) {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      <Header />
      <Datatable fundData={data} />
      <Footer />
    </div>
  );
}

export default App;
