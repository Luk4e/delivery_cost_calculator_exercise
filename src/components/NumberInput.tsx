import React, { ReactElement } from 'react';

interface NumberInputI {
	placeholder: string;
	name: string;
	value: number | string;
	min: number;
	setValue: (value: number) => void;
	parseInput: (value: string) => number;
	id: string;
	gridRow: string;
	labelName: string;
}

const NumberInput: React.FC<NumberInputI> = ({ placeholder, name, value, min, setValue, parseInput, id, gridRow, labelName }): ReactElement => {

	const inputStyle: React.CSSProperties = {
		marginBottom: '15px',
		marginRight: '20px',
		height: '30px',
		textIndent: '10px',
		border: '1px solid #444',
		borderRadius: '5px',
		display: 'inline-block',
	};

	const checkInputNumber = (event: React.ChangeEvent<HTMLInputElement>): string => {
		let tempVal: string = event.target.value;
		if (tempVal === '') {
			tempVal = '0';
		}
		return tempVal;
	};

	const handelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(parseInput(checkInputNumber(event)));
	};

	return (
		<>
			<div style={{ marginTop: '8px', gridRow: `${gridRow}`, gridColumn: '1/2', textAlign: 'left' }}>
				<label htmlFor={id}>{labelName}</label>
			</div>

			<div style={{ gridRow: `${gridRow}`, gridColumn: '2/2', textAlign: 'right' }}>
				<input
					type="number"
					placeholder={placeholder}
					name={name}
					value={value}
					min={min}
					style={inputStyle}
					onChange={handelChange}
					id={id}
				/>
			</div>
		</>
	);
};

export default NumberInput;
