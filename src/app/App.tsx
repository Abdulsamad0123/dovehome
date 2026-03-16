import { RouterProvider } from 'react-router';
import { router } from './routes';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppWidget />
    </>
  );
}
