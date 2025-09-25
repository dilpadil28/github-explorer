import { Toaster, type ToasterProps } from 'sonner';
import { PGitHubExplorer } from './components/pages/PGithubExplorer';

const toasterOptions: ToasterProps = {
  position: 'top-center',
  richColors: true,
};

function App() {
  return (
    <>
      <PGitHubExplorer />
      <Toaster {...toasterOptions} />
    </>
  );
}

export default App;
