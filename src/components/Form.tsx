import React, { ReactElement, useState } from 'react';
import NumberInput from './NumberInput';
import DateInput from './DateInput';
import Button from './Button';

const Form: React.FC = (): ReactElement => {

	const [cartValue, setCartValue] = useState<number>(0);
	const [distanceValue, setDistanceValue] = useState<number>(0);
	const [itemsNum, setItemsNum] = useState<number>(0);
	const [dateValue, setDateValue] = useState<string>('');
	const [timeValue, setTimeValue] = useState<string>('');
	const [deliveryPrice, setDeliveryPrice] = useState<string>('0 €');

	const formStyle: React.CSSProperties = {
		marginTop: '10px',
		borderRadius: '10px',
		background: '#17BEBB',
		padding: '1.5em',
		width: 'auto',
		height: 'auto',
		display: 'inline-block',
	};

	return (
		<form style={formStyle}>
			<div style={{ display: 'grid', gridRowGap: '50px', padding: '2.0em' }}>

				<div style={{ gridRow: '1', gridColumn: '1/6' }}>
					<h1>Delivery Fee Calculator</h1>
				</div>

				<NumberInput
					placeholder="Value"
					name="setCartValue"
					value={cartValue}
					setValue={setCartValue}
					parseInput={parseFloat}
					min={0}
					id="cartvalue"
					gridRow="2"
					labelName="Cart Value (€)"
				/>

				<NumberInput
					placeholder="Distance"
					name="setDistanceValue"
					value={distanceValue}
					setValue={setDistanceValue}
					parseInput={parseFloat}
					min={0}
					id="distancevalue"
					gridRow="3"
					labelName="Delivery distance (m.)"
				/>

				<NumberInput
					placeholder="Items"
					name="setItemsNum"
					value={itemsNum}
					setValue={setItemsNum}
					parseInput={parseInt}
					min={0}
					id="itemsnumber"
					gridRow="4"
					labelName="Amount of items"
				/>

				<DateInput
					dateValue={dateValue}
					timeValue={timeValue}
					setDateValue={setDateValue}
					setTimeValue={setTimeValue}
					gridRow="5"
					labelName="Time"
				/>

				<Button
					cartValue={cartValue}
					distanceValue={distanceValue}
					itemsNum={itemsNum}
					dateValue={dateValue}
					timeValue={timeValue}
					setDeliveryPrice={setDeliveryPrice}
					gridRow="6"
					id="calculateprice"
				/>

				<div style={{ gridRow: '7', gridColumn: '1/6' }}>
					<h2>
						Delivery Price: {deliveryPrice}
					</h2>
				</div>
			</div>
		</form>
	);
};

export default Form;
