window.addEventListener('load', async function () {
    const URL = "https://restcountries.eu/rest/v2/all";
    fetch(URL)
        .then(res => res.json())
        .then(result => {
            const geoIpApi = 'http://ip-api.com/json/?fields=61439';
            fetch(geoIpApi)
                .then(res2 => res2.json())
                .then(ip => {
                    console.log(ip.countryCode);
                    ip.countryCode;
                    const select = document.getElementById('selectCountry');
                    console.log(selectCountry);
                    select.addEventListener("change", function (e) {
                        const callingCode = e.target.value.split('-')[1].split('=')[0];
                        console.log(callingCode);
                        const kidomet = document.getElementById('kidomet');
                        kidomet.value = callingCode
                    });
                    console.log(result);
                    select.innerHTML = "";
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].alpha2Code === ip.countryCode) {
                            select.innerHTML += `<option cc=${result[i].callingCodes[0]} selected value="${result[i].alpha2Code}-${result[i].callingCodes[0]}=${result[i].name}">${result[i].name}</option>`;
                            kidomet.value = result[i].callingCodes[0]
                        }
                        else {
                            select.innerHTML += `<option cc=${result[i].callingCodes[0]}  value="${result[i].alpha2Code}-${result[i].callingCodes[0]}=${result[i].name}">${result[i].name}</option>`;
                        }
                    }
                })
        })
    const form = document.getElementById('formf');
    form.addEventListener('submit', function () {
        const data = {
            İsim: document.getElementById('İsim').value,
            Soyadı: document.getElementById('Soyadı').value,
            Yaş: document.getElementById('Yaş').value,
            posta: document.getElementById('posta').value,
            selectCountry: document.getElementById('selectCountry').value,
            kidomet: document.getElementById('kidomet').value,
            Telefon: document.getElementById('Telefon').value,
        }
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data))
    })
})

