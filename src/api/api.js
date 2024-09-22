export const fetchApiData = async () => {
    fetch('https://api.coindesk.com/v1/bpi/1currentprice.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            console.log(data); // Handle the data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}