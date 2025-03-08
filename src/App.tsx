import Header from "./components/atoms/Header";
import AdCardList from "./components/molecules/AdCardList";
import ChangeAdButtonList from "./components/molecules/ChangeAdButtonList";

function App() {
    return (
        <div className="relative w-screen h-screen overflow-x-hidden pb-[50px]">
            <Header />
            <ChangeAdButtonList />
            <AdCardList />
        </div>
    );
}

export default App;
