import { baseUrl } from '../app/shared/baseUrl';

export const mapImageURL = (arr) => {
	console.log(arr);
	return arr.map((item) => {
		return {
			...item,
			image: baseUrl + item.image,
		};
	});
};
