import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Set(){
    return(
        <div data-cy="set" className="set">
            <Link to="/set/2">
                <Button>Go to specyfic button</Button>
            </Link>
            <p>Set page</p>
        </div>
    )
}

export default Set;