import Switch from "react-switch";
import { useDarkStore } from "../../store/darkStore";

function MaterialDesignSwitch() {
    const { isDarkMode, setIsDarkMode } = useDarkStore();

    return (
        <label
            htmlFor="material-switch"
            className="flex items-center justify-center"
        >
            <Switch
                checked={isDarkMode}
                onChange={setIsDarkMode}
                onColor="#f5ff88"
                offColor="#86d3ff"
                onHandleColor="#f2ff00"
                offHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
            />
        </label>
    );
}

export default MaterialDesignSwitch;
