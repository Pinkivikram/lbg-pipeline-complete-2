import React, { useEffect } from 'react';

const VatRateField = (props) => {

    // destructure to remove warning about useEffect and any prop causing it to fire
    const { updatePrices } = props;

    useEffect(() => {
        updatePrices();
    }, [props.value, updatePrices]);

    return (
        <div className={props.customstyle}>
            VAT Rate: &nbsp;
            <select value={props.value} onChange={(event) => { props.vatRateChanged(+event.target.value); }}>
                <option value="BR">20%</option>
                <option value="1275L">15%</option>
                <option value="756T">12.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>
    );
}

export default VatRateField;
