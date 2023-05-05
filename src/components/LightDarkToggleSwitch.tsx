import {Switch, useTheme} from "@nextui-org/react";
import {DarkModeTwoTone, LightModeTwoTone} from "@mui/icons-material";
import {useTheme as useNextTheme} from "next-themes";
import * as React from "react";

function LightDarkToggleSwitch() {
    const {setTheme} = useNextTheme();
    // @ts-ignore
    return (
        <Switch
            iconOn={<LightModeTwoTone/>}
            iconOff={<DarkModeTwoTone/>}
            onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
            color="warning"
            checked={!useTheme().isDark}
        />
    )
}

export default LightDarkToggleSwitch