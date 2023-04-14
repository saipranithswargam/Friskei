import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectCheckmarks(props) {
 
    return (
        <div>
            <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">Weight</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={props.variantName}
                    onChange={props.handleChange}
                    input={<OutlinedInput label="Weight" />}
                    renderValue={(selected) =>
                        selected.map((x) => x.name).join(", ")
                    }
                    MenuProps={MenuProps}
                >
                    {props.variants.map((variant) => (
                        <MenuItem key={variant.id} value={variant}>
                            <Checkbox
                                checked={
                                    props.variantName.findIndex(
                                        (item) => item.id === variant.id
                                    ) >= 0
                                }
                            />
                            <ListItemText primary={variant.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
