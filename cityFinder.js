// get list of cities from latitude and longitude
function cityFinderConfig(latlng) {
    const params = {
        method: "get",
        url: `https://www.freemaptools.com/ajax/get-all-cities-inside.php?lat=${
            latlng.lat
        }&lng=${
            latlng.lng
        }&sortaplha=0&radius=32.18688`,
        headers: {
            Connection: "keep-alive",
            "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
            Accept: "*/*",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://www.freemaptools.com/find-cities-and-towns-inside-radius.htm",
            "Accept-Language": "en-US,en;q=0.9",
            Cookie: 'PHPSESSID=b6da54435261a6c6e5bcd6ade97af907; _ga=GA1.2.1956136640.1615859160; _gid=GA1.2.1771299969.1615859160; __gads=ID=616227d8e9ee20fd-22434438e7c60023:T=1615859160:RT=1615859160:S=ALNI_MbRch6Rm3UahmM-NkA5t3vwWxzcPQ; FCCDCF=[["AKsRol9zX5C2Or3RgrdUJfezmYdwVTLLYzwqyu7Q-gW2_9tXchI9QLskDQWONuHFPUJT5HHYRGcLu47TvDCxXVHJvTHMBm3sZd2Q1XH4lBvzplJx_6rBXBuOjj1SiGc96JjQLhTDO3DXc31jdaalz9Pt1UtSWgz5vA=="],null,["[[],[],[],[],null,null,true]",1615859178323],null]'
        }

    }
    return params
};

module.exports = cityFinderConfig
