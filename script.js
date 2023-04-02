// função que é chamada quando a posição do usuário é obtida com sucesso
navigator.geolocation.getCurrentPosition((position)=>{
    // desestruturação dos valores da posição para as variáveis latitude e longitude
    let {latitude, longitude} = position.coords;

    // cria um novo objeto de mapa Leaflet.js com a posição do usuário definida como o centro do mapa
    // a configuração '13' define o nível de zoom inicial do mapa
    var map = L.map('map').setView([latitude, longitude], 13);

    // adiciona uma camada de mapa usando a URL de azulejos do OpenStreetMap
    // {z}/{x}/{y} são marcadores de posição que serão substituídos pelos valores de zoom, x e y do mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // define o zoom máximo e mínimo, bem como a atribuição para o mapa
        maxZoom: 19, minZoom: 1, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // adiciona a camada de mapa ao objeto de mapa Leaflet.js criado acima
    }).addTo(map);
    
    // adiciona um marcador na posição atual do usuário no mapa
    L.marker([latitude, longitude]).addTo(map);
})
