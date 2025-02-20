import './App.css';
import ServerSideComponent from './components/serverSideComponent';
import HuggingFaceComponent from './components/huggingFaceComponent';
import { Typography } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">
          My Very Own AI Assistant
        </Typography>
        <HuggingFaceComponent />
        <ServerSideComponent />
      </header>
    </div>
  );
}

export default App;
