import HeroHome from "./components/HeroHome";
import { TopMenu } from '../components/ui/top-menu/TopMenu';
import { Footer, Sidebar } from "@/components";
import NoticeHome from "./components/NoticeHome";
import HomeParties from "./components/HomeParties";
import Sponsors from "@/components/ui/sponsors/Sponsors";

export default function Home() {
    return (
        <>
            <TopMenu />
            <Sidebar />
            <HeroHome />
            <NoticeHome />
            <HomeParties />
            <Sponsors />
            <Footer />
        </>
    );
}