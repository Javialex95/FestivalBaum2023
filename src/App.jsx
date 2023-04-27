import { BackgroundPrincipal } from "./Components/Backgrounds/BackgroundPrincipal";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { HedaerInternal } from "./Components/Header/HedaerInternal";
import { Menu } from "./Components/Menu/Menu";
import { Notification } from "./Components/Notification";
import { BlogProvider } from "./context/BlogContext/BlogProvider";
import { HomeProvider } from "./context/HomeContext/homeProvider";
import { AppRouter } from "./Router/AppRouter";
import { ScrollToTop } from "./Router/ScrollToTop";

function App() {
  return (
    <HomeProvider>
      <BlogProvider>
        <ScrollToTop />
        <BackgroundPrincipal />
        <Header />
        <HedaerInternal />
        <Menu />
        {/* <Notification /> */}
        {/* Principal routes */}
        <AppRouter />

        <Footer />
      </BlogProvider>
    </HomeProvider>
  );
}

export default App;
