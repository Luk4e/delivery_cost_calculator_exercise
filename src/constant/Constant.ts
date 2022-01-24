// minimum value of cart to don't pay extra fees
export const MINCARTVALUE: number = 10;
// 1km distance, the minimum distance that cost 2€ and will be always add to the cart also for distance < 1km
export const MINDISTANCEVALUE: number = 1000;
// default cost for the first 1km distance
export const DEFAULTDELIVERYCOST: number = 2;
// step of 0.5km that cost 1€
export const DEFAULTDELIVERYSTEP: number = 500;
// max number of items where you don't pay extra fees
export const MAXITEMS: number = 4;
// cost in € added for each elements after maxItems value
export const ADDITIONALSURCHARGE: number = 0.5;
// max delivery fee applicable
export const MAXDELIVERYFEE: number = 15;
// max value of the cart after which you don't pay delivery fees
export const MAXCARTVALUE: number = 100;
// number that identify Friday
export const RUSHDAY: number = 5;
// start of rush (15:00)
export const RUSHHOURRANGEFROM: number = 15;
// end of rush (17:00)
export const RUSHHOURRANGETO: number = 19;
// rush hours 10% extra fee
export const RUSHHOURSUPP: number = 1.1;
