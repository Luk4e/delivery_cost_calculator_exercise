import React, { ReactElement } from 'react';


interface DateInputI {
	dateValue: string;
	timeValue: string;
	setDateValue: (value: string) => void;
	setTimeValue: (value: string) => void;
	gridRow: string;
	labelName: string;
}

const DateInput: React.FC<DateInputI> = ({ dateValue, timeValue, setDateValue, setTimeValue, gridRow, labelName }): ReactElement => {

	const inputStyle: React.CSSProperties = {
		marginBottom: '15px',
		marginRight: '20px',
		height: '30px',
		textIndent: '10px',
		border: '1px solid #444',
		borderRadius: '5px',
		display: 'inline-block',
	};

	const handelChangeDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setDateValue(event.target.value);
	};
	const handelChangeTime = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setTimeValue(event.target.value);
	};

	return (
		<>
			<div style={{ marginTop: '8px', gridRow: `${gridRow}`, gridColumn: '1/2', textAlign: 'left' }}>
				<label htmlFor="dateinput">{labelName}</label>
			</div>

			<div style={{ gridRow: `${gridRow}`, gridColumn: '2/2', textAlign: 'right' }}>
				<input
					type="date"
					name=""
					id="dateinput"
					value={dateValue}
					style={inputStyle}
					onChange={handelChangeDate}
				/>
				<input
					type="time"
					name=""
					id="timeinput"
					value={timeValue}
					style={inputStyle}
					onChange={handelChangeTime}
				/>
			</div>
		</>
	);
};

export default DateInput;
