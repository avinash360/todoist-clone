import { Content } from './components/layout/content';
import { Header } from './components/layout/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
