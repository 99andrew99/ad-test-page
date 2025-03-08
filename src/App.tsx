import Header from "./components/atoms/Header";
import AdCardList from "./components/molecules/AdCardList";

function App() {
    return (
        <div className="relative w-screen h-screen overflow-x-hidden pb-[20px]">
            <Header />

            <AdCardList unitId={"PUBLIC_TEST_UNIT_ID_NATIVE"} count={12} />
        </div>
    );
}

export default App;
