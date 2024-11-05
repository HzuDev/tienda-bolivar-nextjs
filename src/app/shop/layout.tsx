import { Footer, Sidebar, TopMenu } from '@/components';
import Sponsors from '@/components/ui/sponsors/Sponsors';

export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">

      <TopMenu />
      <Sidebar />

      <div className="px-0 sm:px-10">
        { children }

      </div>
      <Sponsors/>
      <Footer />
    </main>
  );
}