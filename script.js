const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let trackingSum=0, subArray=[], ans=[];
	for(let i=0;i<arr.length;i++){
		if(trackingSum+arr[i]<=n){
			subArray.push(arr[i]);
			trackingSum+=arr[i];
		}
		else{
			ans.push(subArray);
			subArray=[arr[i]];
			trackingSum=arr[i];
		}
		
	}
	ans.push(subArray);
		return ans;
		
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
