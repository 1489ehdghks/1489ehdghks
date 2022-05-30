import React, { useState } from "react";
import { ReactDOM } from "react";

const CheckList = () => {
    const [checked, setChecked] = useState(true);

    return(
        <input name="checked" type="checkbox" checked={checked}
        onChange={e =>setChecked(!checked)} />
    )
}
ReactDOM.render(<CheckList/>, document.getElementById('root'))