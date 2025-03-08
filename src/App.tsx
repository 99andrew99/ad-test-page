import AdCardList from "./components/molecules/AdCardList";

function App() {
    return (
        <div className="w-screen h-screen">
            <AdCardList unitId={"PUBLIC_TEST_UNIT_ID_NATIVE"} count={12} />
        </div>
    );
}

export default App;
