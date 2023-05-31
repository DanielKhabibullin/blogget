const generateRandomId = () =>
	Math.random().toString(36).substring(2, 8) +
	Date.now().toString().substring(9);

export default generateRandomId;

export const asssignId = obj => ({...obj, id: generateRandomId()});
