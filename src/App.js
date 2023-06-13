import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Homescreen from './screens/Homescreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Homescreen />
        </Container>
      </main>

    </>
  );
}

export default App;
