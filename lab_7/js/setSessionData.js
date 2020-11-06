const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute;
     // Your code here

     const fetchTarget = fetch(busRouteURL);


    fetchTarget
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        let title = route.title;
        let latMax = route.lat_max;
        let latMin = route.lat_min;
        let lonMax = route.lon_max;
        let lonMin = route.lon_min;
        sessionStorage.setItem("Title", title);
        sessionStorage.setItem("Lat_Max", latMax);
        sessionStorage.setItem("Lat_Min", latMin);
        sessionStorage.setItem("Lon_Max", lonMax);
        sessionStorage.setItem("Lon_Min", lonMin);
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
        sessionStorage.setItem("Title", "Nothing set");
        sessionStorage.setItem("Lat_Max", "Nothing set");
        sessionStorage.setItem("Lat_Min", "Nothing set");
        sessionStorage.setItem("Lon_Max", "Nothing set");
        sessionStorage.setItem("Lon_Min", "Nothing set");
      });
  } else {
    main.innerHTML = "No value provided";
    sessionStorage.setItem("Title", "Nothing set");
    sessionStorage.setItem("Lat_Max", "Nothing set");
    sessionStorage.setItem("Lat_Min", "Nothing set");
    sessionStorage.setItem("Lon_Max", "Nothing set");
    sessionStorage.setItem("Lon_Min", "Nothing set");
  }
}
