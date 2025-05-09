import { WalletContextProvider } from './solana/wallet';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import NoteForm from './components/NoteForm'

const App = () => {
  return (
    <WalletContextProvider>
      <div>
        <h1>Decentralized Notes</h1>
        <WalletMultiButton />
        <NoteForm />
      </div>
    </WalletContextProvider>
  );
};

export default App;