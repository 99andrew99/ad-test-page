import Header from "./components/atoms/Header";
import AdCardList from "./components/molecules/AdCardList";
import ChangeAdButtonList from "./components/molecules/ChangeAdButtonList";
import { useDarkStore } from "./store/darkStore";

function App() {
    const { isDarkMode } = useDarkStore();

    return (
        <div
            className={`relative w-screen h-screen overflow-x-hidden pb-[50px] ${
                isDarkMode ? "text-white bg-black" : "text-black bg-white"
            }`}
        >
            <Header />
            <ChangeAdButtonList />
            <AdCardList />
        </div>
    );
}

export default App;
