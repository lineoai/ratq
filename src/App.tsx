import AppLayout from "./components/layouts/AppLayout";
import Explorer from "./components/modules/Explorer/Explorer";
import EditorView from "./components/modules/EditorArea/EditorView";
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <AppLayout>
      <Explorer />
      <EditorView />
      <Analytics />
    </AppLayout>
  );
}

export default App;
