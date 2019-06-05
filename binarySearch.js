function binarySearch(list, item) {
	let count = 0; 
	let low = 0;
	let high = list.length-1;
	while (low <= high) {
		let mid = Math.ceil((low + high) / 2);
		let quess = list[mid];
		if (quess === item) {
			console.log(`count: ${count}`);
			return mid;
		}
		if (quess > item) {
			high = mid -1;
			count++;
		} else {
			low = mid + 1;
			count++;
		}
	}
	 return null; 
}

const test1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('index:', binarySearch(test1, 4));
const test2 = [1, 10, 12, 34, 67, 98, 99, 107];
console.log('index:', binarySearch(test2, 99));
const test3 = [-100, -99, -66, -44, 0, 140, 525];
console.log('index:', binarySearch(test3, -66));
const test4 = [-12, -9, -6, -4, 0, 0, 0];
console.log('index:', binarySearch(test4, 0));
const test5 = test2;
console.log('index:', binarySearch(test5, 0));
