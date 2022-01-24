import React, { ReactElement, useState } from 'react';
import * as Constant from '../constant/Constant';
import toast, { Toaster } from 'react-hot-toast';

interface ButtonI {
	setDeliveryPrice: (value: string) => void;
	dateValue: string;
	timeValue: string;
	cartValue: number;
	distanceValue: number;
	itemsNum: number;
	gridRow: string;
	id: string;
}

const Button: React.FC<ButtonI> = ({ cartValue, distanceValue, itemsNum, dateValue, timeValue, setDeliveryPrice, gridRow, id }): ReactElement => {

	const [bgColour, setBgColour] = useState<string>('#465191');
	const [bgColouText, setBgColourText] = useState<string>('#FFFFFF');

	const buttonStyle: React.CSSProperties = {
		background: `${bgColour}`,
		border: `2px solid #465191`,
		borderRadius: '6px',
		boxShadow: 'rgba(0, 0, 0, 0.1) 1px 2px 4px',
		boxSizing: 'border-box',
		color: `${bgColouText}`,
		cursor: 'pointer',
		display: 'inline-block',
		fontFamily: 'nunito,roboto,proxima-nova,"proxima nova",sans-serif',
		fontSize: '16px',
		fontWeight: '800',
		lineHeight: '16px',
		minHeight: '40px',
		outline: '0',
		padding: '12px 14px',
		textAlign: 'center',
		textTransform: 'none',
		userSelect: 'none',
		touchAction: 'manipulation',
		verticalAlign: 'middle',
	};

	const checkTime = (insertedDate: Date): boolean => {
		const tempDataNow = new Date(Date.now());
		tempDataNow.setSeconds(0, 0);
		let resultCheck: boolean = false;

		if (tempDataNow.getTime() <= insertedDate.getTime()) {
			resultCheck = true;
		}
		return resultCheck;
	};

	const checkZeroValueOnInput = (): void => {
		let toastString: string = '';
		if (cartValue === 0){
			toastString += 'Cart Value is 0. Maybe you forgot to insert value.\n\n';
		}
		if (distanceValue === 0){
			toastString += 'Delivery distance is 0. Maybe you forgot to insert value.\n\n';
		}
		if (itemsNum === 0){
			toastString += 'Amount of items is 0. Maybe you forgot to insert value.\n\n';
		}
		toast(toastString,
			{
				duration: 4000,
			}
		);
	};

	const deliveryFeeCalculation = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		//  prevent page refresh
		event.preventDefault();
		//  delivery fee result
		let result: number = 0;
		//  temp date
		const tmpData: Date = new Date(`${dateValue} ${timeValue}`);

		//  check if date and time were added
		if (dateValue && timeValue) {
			//  check if the time are after the current time
			if (checkTime(tmpData)) {
				//  check if the cart value is more than maxCartValue
				if (cartValue > Constant.MAXCARTVALUE) {
					//  set result to FREE
					setDeliveryPrice('Free!!');
				} else {
					//  check if the cart value is less than minCartValue
					if (cartValue < Constant.MINCARTVALUE) {
						//  add the difference to the fee
						result += (Constant.MINCARTVALUE - cartValue);
					}
					//  check if the distance is more than minDistanceValue
					if (distanceValue > Constant.MINDISTANCEVALUE) {
						//  temp distance
						const tempDist: number = distanceValue - Constant.MINDISTANCEVALUE;
						//  add 1€ for every 500m and 2€ for the firs 1km
						result += Math.ceil(tempDist / Constant.DEFAULTDELIVERYSTEP) + Constant.DEFAULTDELIVERYCOST;
					} else {
						//  add just 2€ for the first 1km
						result += Constant.DEFAULTDELIVERYCOST;
					}
					//  check if the items are more than maxItems
					if (itemsNum > Constant.MAXITEMS) {
						//  add additionalSurcharge for each elements after the 4th
						result += (itemsNum - Constant.MAXITEMS) * Constant.ADDITIONALSURCHARGE;
					}
					//  check if the order's time is in the rush hours(rushHourRangeFrom-rushHourRangeTo) and the day is rushDay
					if ((new Date(dateValue)).getDay() === Constant.RUSHDAY
						&& Constant.RUSHHOURRANGEFROM <= tmpData.getHours()
						&& tmpData.getHours() < Constant.RUSHHOURRANGETO) {
						//  add an extra rushHoursSupp fee
						result *= Constant.RUSHHOURSUPP;
					}
					//  check if the result fee value is more then maxDeliveryFee
					if (result > Constant.MAXDELIVERYFEE) {
						//  change result with maxDeliveryFee
						result = Constant.MAXDELIVERYFEE;
					}
					//  set result
					setDeliveryPrice(`${result.toFixed(2)} €`);
				}
			} else {
				//  alert for wrong date
				toast.error(`The date couldn't be before the current time!`,
					{
						style: {
							borderRadius: '14px',
							background: '#333',
							color: '#fff',
						},
					}
				);
			}
		} else {
			//  alert for missing date and time
			toast.error(`You need to insert date and time to calculate the delivery fee!`,
				{
					style: {
						borderRadius: '14px',
						background: '#333',
						color: '#fff',
					},
				});
		}

		checkZeroValueOnInput();
	};

	return (
		<div style={{ gridRow: `${gridRow}`, gridColumn: '1/6' }}>
			<button
				id={id}
				style={buttonStyle}
				onClick={deliveryFeeCalculation}
				onMouseEnter={() => { setBgColour('#ffffff'); setBgColourText('#000000'); }}
				onMouseLeave={() => { setBgColour('#465191'); setBgColourText('#ffffff'); }}
			>
				Calculate delivery price
			</button>
			<Toaster
				position="bottom-center"
				reverseOrder={false}
			/>
		</div>
	);
};

export default Button;
