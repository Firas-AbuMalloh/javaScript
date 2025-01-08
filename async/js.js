




async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    try {
        const data = await response.json();
  
        console.log(data);
        document.getElementById('weather').innerText=data;
        console.log(data);

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  

  fetchData();
