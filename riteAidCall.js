var axios = require('axios');

var getRiteAidStoreIDs = {
  method: 'get',
  url: 'https://www.riteaid.com/services/ext/v2/stores/getStores?address=94610&attrFilter=PREF-112&fetchMechanismVersion=2&radius=50',
  headers: { 
    'authority': 'www.riteaid.com', 
    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
    'accept': '*/*', 
    'x-requested-with': 'XMLHttpRequest', 
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://www.riteaid.com/pharmacy/apt-scheduler', 
    'accept-language': 'en-US,en;q=0.9', 
    'cookie': 'check=true; AMCVS_3B2A35975CF1D9620A495FA9%40AdobeOrg=1; AMCV_3B2A35975CF1D9620A495FA9%40AdobeOrg=77933605%7CMCIDTS%7C18710%7CMCMID%7C50639347314004799972528774534519213369%7CMCAAMLH-1617119176%7C9%7CMCAAMB-1617119176%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1616521576s%7CNONE%7CvVersion%7C4.5.1; _gcl_au=1.1.2102774344.1616514376; _gid=GA1.2.1904571882.1616514376; _ga=GA1.2.1998243569.1616514376; _dc_gtm_UA-1427291-1=1; _gat_UA-1427291-1=1; _mibhv=anon-1616514377125-2473102079_7189; __rutmb=149436981; __ruid=149436981-c1-6o-4m-1p-luf06dyw8slkzmfaj65l-1616514377149; __rcmp=0u0021bj1fZ2MsZj1nYyxzPTAsYz0xNDgsdHI9MCxybj02MjEsdHM9MjAyMTAzMjMuMTU0NixkPXBj; _gat_rfk=1; s_cc=true; _scid=1c9ca58c-cab8-4925-9bf3-321f378c83a4; _fbp=fb.1.1616514377401.168330410; _pin_unauth=dWlkPVlUTmtObVZtTXpjdE1qazNOeTAwT1dVeUxXRTRaRGN0WldOalpUSTVNMk15TnpFNQ; _sctr=1|1616482800000; _elevaate_session_id=e802de9c-f80e-4bf5-a4ea-c6bd01e6158a; mage-cache-storage-section-invalidation=%7B%7D; mage-cache-storage=%7B%7D; s_campaign=%7Cstate%7Cweb%7CCovid19%7C%7CCovid19scheduler_CA_2_12_21%7C; _gali=learnmorebttn; gpv_Page=web%3Apharmacy%3Aapt-scheduler; s_sq=%5B%5BB%5D%5D; _derived_epik=dj0yJnU9QzBBcFJ2RXljcFBleWJ1Z2dhTjRWSVVyZkx6Q1JnODQmbj05RTBORkFIMDE5b1M1N2pGTzNkVnJnJm09NyZ0PUFBQUFBR0JhRFhFJnJtPTQmcnQ9QUFBQUFHQVNCeUU; s_plt=2.13; s_pltp=web%3Apharmacy%3Aapt-scheduler; mbox=session#811840f4bd1e4ee4a2fac0dc1742fe89#1616516293|PC#811840f4bd1e4ee4a2fac0dc1742fe89.35_0#1679759177; adcloud={%22_les_v%22:%22y%2Criteaid.com%2C1616516233%22}; __rutma=149436981-c1-6o-4m-1p-luf06dyw8slkzmfaj65l-1616514377149.1616514377149.1616514377149.1.6.6; __rpckx=0u0021eyJ0NyI6eyIzIjoxNjE2NTE0Mzg4MzQ0LCI2IjoxNjE2NTE0NDMzMzUxfSwidDd2Ijp7IjMiOjE2MTY1MTQzODgzNDQsIjYiOjE2MTY1MTQ0MzMzNTF9LCJpdGltZSI6IjIwMjEwMzIzLjE1NDYifQ~~; __rpck=0u0021eyJwcm8iOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsImJ0Ijp7IjAiOnRydWUsIjEiOjAsIjIiOm51bGwsIjMiOjF9LCJDIjp7fSwiTiI6e30sImR0cyI6LTIyODEuNSwiY3NwIjp7ImIiOjUzNjA4LCJ0IjozNDAsInNwIjoxMjYxMzY0LCJjIjoxfX0~'
  }
};

function formatRiteAidStores(storeNumber) {
    const formattedForStore = {
        method: 'get',
      url: `https://www.riteaid.com/services/ext/v2/vaccine/checkSlots?storeNumber=${storeNumber}`,
      headers: { 
        'authority': 'www.riteaid.com', 
        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
        'accept': '*/*', 
        'x-requested-with': 'XMLHttpRequest', 
        'sec-ch-ua-mobile': '?0', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-dest': 'empty', 
        'referer': 'https://www.riteaid.com/pharmacy/apt-scheduler', 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': 'check=true; AMCVS_3B2A35975CF1D9620A495FA9%40AdobeOrg=1; AMCV_3B2A35975CF1D9620A495FA9%40AdobeOrg=77933605%7CMCIDTS%7C18710%7CMCMID%7C50639347314004799972528774534519213369%7CMCAAMLH-1617119176%7C9%7CMCAAMB-1617119176%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1616521576s%7CNONE%7CvVersion%7C4.5.1; _gcl_au=1.1.2102774344.1616514376; _gid=GA1.2.1904571882.1616514376; _ga=GA1.2.1998243569.1616514376; _mibhv=anon-1616514377125-2473102079_7189; __rutmb=149436981; __ruid=149436981-c1-6o-4m-1p-luf06dyw8slkzmfaj65l-1616514377149; __rcmp=0u0021bj1fZ2MsZj1nYyxzPTAsYz0xNDgsdHI9MCxybj02MjEsdHM9MjAyMTAzMjMuMTU0NixkPXBj; s_cc=true; _scid=1c9ca58c-cab8-4925-9bf3-321f378c83a4; _fbp=fb.1.1616514377401.168330410; _pin_unauth=dWlkPVlUTmtObVZtTXpjdE1qazNOeTAwT1dVeUxXRTRaRGN0WldOalpUSTVNMk15TnpFNQ; _sctr=1|1616482800000; _elevaate_session_id=e802de9c-f80e-4bf5-a4ea-c6bd01e6158a; mage-cache-storage=%7B%7D; mage-cache-storage-section-invalidation=%7B%7D; s_campaign=%7Cstate%7Cweb%7CCovid19%7C%7CCovid19scheduler_CA_2_12_21%7C; gpv_Page=web%3Apharmacy%3Aapt-scheduler; mbox=session#811840f4bd1e4ee4a2fac0dc1742fe89#1616516293|PC#811840f4bd1e4ee4a2fac0dc1742fe89.35_0#1679759177; adcloud={%22_les_v%22:%22y%2Criteaid.com%2C1616516233%22}; __rutma=149436981-c1-6o-4m-1p-luf06dyw8slkzmfaj65l-1616514377149.1616514377149.1616514377149.1.6.6; __rpck=0u0021eyJwcm8iOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsImJ0Ijp7IjAiOnRydWUsIjEiOjAsIjIiOm51bGwsIjMiOjF9LCJDIjp7fSwiTiI6e30sImR0cyI6LTIyODEuNSwiY3NwIjp7ImIiOjUzNjA4LCJ0IjozNDAsInNwIjoxMjYxMzY0LCJjIjoxfX0~; _derived_epik=dj0yJnU9cE1veUdCbmxFSGF3MERHdFdxdkFreUQ1WlJRVlVPM0cmbj1zRklObVpfRDduQVhTX1l4RFZPWmt3Jm09NyZ0PUFBQUFBR0JhRFg4JnJtPTQmcnQ9QUFBQUFHQVNCeUU; s_plt=2.45; s_pltp=web%3Apharmacy%3Aapt-scheduler; __rpckx=0u0021eyJ0NyI6eyIzIjoxNjE2NTE0Mzg4MzQ0LCI2IjoxNjE2NTE0NDMzMzUxfSwidDd2Ijp7IjMiOjE2MTY1MTQzODgzNDQsIjYiOjE2MTY1MTQ0OTMzOTh9LCJpdGltZSI6IjIwMjEwMzIzLjE1NDYifQ~~; _gat_UA-1427291-1=1; s_sq=rtaidglobalproduction%3D%2526c.%2526a.%2526activitymap.%2526page%253Dweb%25253Apharmacy%25253Aapt-scheduler%2526link%253DNext%2526region%253Dskip-content%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dweb%25253Apharmacy%25253Aapt-scheduler%2526pidt%253D1%2526oid%253DNext%2526oidt%253D3%2526ot%253DSUBMIT; _gali=continue'
      }
    }
    return formattedForStore
}



axios(getRiteAidStoreIDs)
.then(function (response) {
    const stores = response.data.Data.stores
    const storesData = stores.map(store => {
        const storeData = {
            number: store.storeNumber,
            city: store.city
        }
        return storeData
    })
    for (i =0; i<storesData.length; i++){
        axios(formatRiteAidStores(storesData[i].number)).then(response => {
            // for(j=0; j< response)
            const slotData = response.data.Data.slots
            for (const property in slotData) {
                if (slotData[property] === true) {
                    console.log(`there's a shot!`)
                }
                // console.log(`${property}: ${slotData[property]}`)
            }
        })
    }
//   console.log(console.log(storeIDs));
})
.catch(function (error) {
  console.log(error);
});

