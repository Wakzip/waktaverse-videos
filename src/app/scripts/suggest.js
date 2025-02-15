async function getData() {
	const response = await fetch('https://api.wakzip.kr/v2/suggest/');
    
    if (!response.ok) {
 		throw new Error('Failed to fetch data')   
    }
    
    return response.json()
}

export default async function Page() {
	const data = await getData()
    
    return data
}