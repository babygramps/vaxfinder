function latlngGeocoder(zipCode) {
    const formatted = {method: 'get',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyB2bY6r2daBs8DgHJHM-u93pz1uETW4LXE`
}
return formatted
  }

  module.exports = latlngGeocoder