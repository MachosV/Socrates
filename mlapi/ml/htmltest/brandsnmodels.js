var brands = `{"Brands": [
        "Rover", 
        "Dacia", 
        "Maserati", 
        "Chevrolet", 
        "Porsche", 
        "Lincoln", 
        "Abarth", 
        "Mercedes-Benz", 
        "Jaguar", 
        "Volkswagen", 
        "Suzuki", 
        "Smart", 
        "Piaggio", 
        "Alfa Romeo", 
        "Lada", 
        "Isuzu", 
        "Honda", 
        "Hyundai", 
        "Ford", 
        "Mazda", 
        "Bmw", 
        "Rolls Royce", 
        "Kia", 
        "Mitsubishi", 
        "Peugeot", 
        "Daewoo", 
        "Land Rover", 
        "Fiat", 
        "Dodge", 
        "Mg", 
        "Saab", 
        "Renault", 
        "Jeep", 
        "Nissan", 
        "Toyota", 
        "Daihatsu", 
        "Volvo", 
        "Ferrari", 
        "Chrysler", 
        "Citroen", 
        "DS", 
        "Lancia", 
        "SsangYong", 
        "Mini", 
        "Bentley", 
        "Corvette", 
        "Skoda", 
        "Seat", 
        "Subaru", 
        "Lexus", 
        "Opel", 
        "Audi"
    ]
}`

var brandsnmodels = `{
    "Rover": [
        "25", 
        "214", 
        "200", 
        "416", 
        "75", 
        "414", 
        "45", 
        "400", 
        "114"
    ], 
    "Dacia": [
        "Sandero", 
        "Duster", 
        "Dokker", 
        "Logan", 
        "Logan Pick-Up", 
        "Pick up"
    ], 
    "Maserati": [
        "Quattroporte"
    ], 
    "Chevrolet": [
        "Spark", 
        "Matiz", 
        "Aveo", 
        "Kalos", 
        "Cruze", 
        "Lacetti", 
        "Nubira", 
        "Captiva", 
        "Trailblazer", 
        "Blazer"
    ], 
    "Porsche": [
        "Cayenne", 
        "Boxster", 
        "911", 
        "Panamera", 
        "Cayman", 
        "Macan", 
        "997", 
        "996", 
        "944"
    ], 
    "Lincoln": [
        "Continental"
    ], 
    "Abarth": [
        "500", 
        "Grande Punto", 
        "Punto Evo"
    ], 
    "Mercedes-Benz": [
        "CLA 45 AMG", 
        "A 140", 
        "CLC 200", 
        "A 160", 
        "CLS 350", 
        "E 200", 
        "180", 
        "C 180", 
        "SLK 200", 
        "CLK 200", 
        "S 400", 
        "E 240", 
        "ML 350", 
        "B 180", 
        "Citan", 
        "200", 
        "A 170", 
        "A 150", 
        "Sprinter", 
        "C 200", 
        "A 180", 
        "GLA 180", 
        "SL 500", 
        "GLA 200", 
        "C 250", 
        "CLC 180", 
        "Vito", 
        "190", 
        "CLA 180", 
        "ML 320", 
        "E 280", 
        "S 500", 
        "C 220", 
        "B 170", 
        "Vaneo", 
        "GLK 280", 
        "ML 270", 
        "Viano", 
        "E 220", 
        "S 350", 
        "CL 500", 
        "S 280", 
        "C 230", 
        "SLK 350", 
        "B 150", 
        "A 45 AMG", 
        "E 300", 
        "E 320", 
        "SL 350", 
        "CLA 200", 
        "E 350", 
        "A 200", 
        "E 250", 
        "B 200", 
        "S 320", 
        "SL 320", 
        "350", 
        "230", 
        "V 250", 
        "E 230", 
        "GLE 350", 
        "170", 
        "CLS 500", 
        "220", 
        "ML 250", 
        "500", 
        "280", 
        "300", 
        "GLC 250", 
        "E 270", 
        "E 180", 
        "250", 
        "320", 
        "416"
    ], 
    "Jaguar": [
        "X-Type", 
        "S-Type", 
        "XJ6"
    ], 
    "Volkswagen": [
        "Golf", 
        "Beetle (New)", 
        "Polo", 
        "Scirocco", 
        "Passat", 
        "Eos", 
        "Caddy", 
        "Lupo", 
        "T3", 
        "Sharan", 
        "Touareg", 
        "Golf Plus", 
        "Tiguan", 
        "Taro", 
        "T4", 
        "Up", 
        "Beetle", 
        "T-Roc", 
        "T5", 
        "Passat Variant", 
        "Bora", 
        "Fox", 
        "Jetta", 
        "Passat CC", 
        "T2", 
        "Kaefer", 
        "Touran", 
        "Amarok", 
        "Golf Sportsvan", 
        "Crafter", 
        "Vento"
    ], 
    "Suzuki": [
        "Swift", 
        "Splash", 
        "Grand Vitara", 
        "Alto", 
        "Ignis", 
        "Jimny", 
        "Baleno", 
        "Celerio", 
        "Liana", 
        "Vitara", 
        "SX4", 
        "Wagon R+", 
        "SX4 S-Cross", 
        "SJ Samurai"
    ], 
    "Smart": [
        "ForTwo", 
        "ForFour", 
        "Roadster"
    ], 
    "Piaggio": [
        "Porter"
    ], 
    "Alfa Romeo": [
        "Alfa 147", 
        "Alfa 159", 
        "Alfa 156", 
        "Mito", 
        "Giulietta", 
        "Alfa 75", 
        "Alfa 146", 
        "Alfetta", 
        "Junior", 
        "Spider", 
        "Brera", 
        "GT", 
        "GTV", 
        "Alfa 145", 
        "Giulia", 
        "Alfa 155", 
        "Alfa 33"
    ], 
    "Lada": [
        "Niva"
    ], 
    "Isuzu": [
        "D-Max", 
        "Pick up", 
        "Campo"
    ], 
    "Honda": [
        "HR-V", 
        "Civic", 
        "Jazz", 
        "CR-V", 
        "S 2000", 
        "Insight", 
        "Accord", 
        "CRX"
    ], 
    "Hyundai": [
        "i 10", 
        "Getz", 
        "Accent", 
        "Coupe", 
        "i 20", 
        "Atos", 
        "Matrix", 
        "Lantra", 
        "i 30", 
        "Tucson", 
        "Elantra", 
        "Santa Fe", 
        "ix20", 
        "iX35", 
        "Sonata", 
        "H-1", 
        "Trajet", 
        "Kona", 
        "Galloper", 
        "Excel", 
        "S-Coupe"
    ], 
    "Ford": [
        "Maverick", 
        "Ka", 
        "Fiesta", 
        "Mondeo", 
        "Focus", 
        "C-Max", 
        "Ranger", 
        "Fusion", 
        "S-Max", 
        "Kuga", 
        "Escort", 
        "Grand C-Max", 
        "Courier", 
        "Transit", 
        "Focus C-Max", 
        "Galaxy", 
        "Transit Connect", 
        "Taunus", 
        "B-Max", 
        "EcoSport", 
        "Mustang", 
        "Puma", 
        "Transit Custom", 
        "Tourneo Connect", 
        "Tourneo", 
        "Sierra", 
        "Streetka", 
        "GT", 
        "Orion"
    ], 
    "Mazda": [
        "2", 
        "3", 
        "RX-8", 
        "BT-50", 
        "6", 
        "CX-7", 
        "323", 
        "MX-5", 
        "B 2500", 
        "Tribute", 
        "B series", 
        "RX-7", 
        "MX-3"
    ], 
    "Bmw": [
        "318", 
        "316", 
        "118", 
        "116", 
        "X6", 
        "320", 
        "X3", 
        "X5", 
        "730", 
        "645", 
        "M3", 
        "520", 
        "Z4", 
        "i3", 
        "325", 
        "X4", 
        "X1", 
        "523", 
        "518", 
        "216 Active Tourer", 
        "Z3", 
        "525", 
        "735", 
        "530", 
        "750", 
        "335", 
        "M5", 
        "420", 
        "218 Active Tourer", 
        "230", 
        "330", 
        "328", 
        "M4", 
        "i8", 
        "323", 
        "M2", 
        "630", 
        "X5 M50", 
        "740", 
        "X6 M50", 
        "120", 
        "2002", 
        "114", 
        "745", 
        "X2", 
        "220"
    ], 
    "Rolls Royce": [
        "Silver Shadow"
    ], 
    "Kia": [
        "Picanto", 
        "ProCeed", 
        "Ceed", 
        "Shuma", 
        "Rio", 
        "Sportage", 
        "Sorento", 
        "Cerato", 
        "Venga", 
        "Sephia", 
        "Pride", 
        "Roadster", 
        "Stonic"
    ], 
    "Mitsubishi": [
        "Colt", 
        "L200", 
        "Lancer", 
        "Space Star", 
        "Outlander", 
        "Carisma", 
        "Asx", 
        "L300", 
        "Pajero", 
        "Eclipse Cross", 
        "Pajero Pinin", 
        "L400", 
        "Canter"
    ], 
    "Peugeot": [
        "207", 
        "307", 
        "107", 
        "308", 
        "206", 
        "301", 
        "3008", 
        "106", 
        "208", 
        "2008", 
        "108", 
        "Partner", 
        "306", 
        "407", 
        "Bipper", 
        "807", 
        "405", 
        "508", 
        "Expert", 
        "1007", 
        "406", 
        "5008", 
        "205", 
        "Partner Tepee"
    ], 
    "Daewoo": [
        "Matiz", 
        "Lanos", 
        "Kalos", 
        "Lacetti", 
        "Nubira", 
        "Korando"
    ], 
    "Land Rover": [
        "Range Rover Sport", 
        "Discovery", 
        "Freelander", 
        "Range Rover", 
        "Defender", 
        "Range Rover Evoque"
    ], 
    "Fiat": [
        "Panda", 
        "Grande Punto", 
        "Idea", 
        "500", 
        "Punto Evo", 
        "Punto", 
        "Doblo", 
        "Multipla", 
        "Stilo", 
        "New Panda", 
        "Fiorino", 
        "Bravo", 
        "Seicento", 
        "500L", 
        "Strada", 
        "Scudo", 
        "Sedici", 
        "Ducato", 
        "Barchetta", 
        "Qubo", 
        "Tipo", 
        "Coupe", 
        "500X", 
        "500L Trekking", 
        "Cinquecento", 
        "500L Living", 
        "Brava", 
        "Marea", 
        "126", 
        "Linea", 
        "Uno"
    ], 
    "Dodge": [
        "Caliber", 
        "RAM", 
        "Nitro"
    ], 
    "Mg": [
        "ZR", 
        "TF", 
        "MGF"
    ], 
    "Saab": [
        "9-3", 
        "9-5", 
        "9000"
    ], 
    "Renault": [
        "Megane", 
        "Clio", 
        "Laguna", 
        "Twingo", 
        "Kangoo", 
        "Scenic", 
        "Grand Scenic", 
        "Kadjar", 
        "Modus", 
        "Captur", 
        "Trafic", 
        "Espace", 
        "Master", 
        "R 19", 
        "Thalia", 
        "Rapid", 
        "R 5", 
        "Coupe", 
        "Spider"
    ], 
    "Jeep": [
        "Patriot", 
        "Cherokee", 
        "Wrangler", 
        "Renegade", 
        "Compass", 
        "Willys", 
        "Grand Cherokee", 
        "CJ"
    ], 
    "Nissan": [
        "Qashqai", 
        "Evalia", 
        "NV 200", 
        "Micra", 
        "Note", 
        "Sunny", 
        "350Z", 
        "Navara", 
        "Pixo", 
        "Pulsar", 
        "Primera", 
        "Almera", 
        "Pathfinder", 
        "Juke", 
        "NP300", 
        "Qashqai+2", 
        "Primastar", 
        "X-Trail", 
        "Terrano", 
        "PickUp", 
        "King Cab", 
        "Vanette", 
        "Tiida", 
        "Cabstar", 
        "Patrol", 
        "GT-R", 
        "Datsun", 
        "200 SX"
    ], 
    "Toyota": [
        "Yaris", 
        "Verso", 
        "Aygo", 
        "Corolla", 
        "Hilux", 
        "RAV 4", 
        "Auris", 
        "iQ", 
        "Verso-S", 
        "Starlet", 
        "Celica", 
        "Dyna", 
        "Hiace", 
        "Corolla Verso", 
        "Land Cruiser", 
        "Prius", 
        "Carina", 
        "Proace", 
        "Avensis", 
        "Urban Cruiser", 
        "MR 2", 
        "C-HR"
    ], 
    "Daihatsu": [
        "Terios", 
        "Sirion", 
        "Feroza/Sportrak", 
        "Cuore", 
        "Trevis"
    ], 
    "Volvo": [
        "V50", 
        "V40", 
        "V60", 
        "XC 60", 
        "V40 Cross Country", 
        "S60", 
        "S40", 
        "XC 90", 
        "C30", 
        "S80", 
        "XC40", 
        "740", 
        "C70", 
        "Amazon"
    ], 
    "Ferrari": [
        "328", 
        "208"
    ], 
    "Chrysler": [
        "PT Cruiser", 
        "Sebring", 
        "Stratus", 
        "Voyager"
    ], 
    "Citroen": [
        "C3 Picasso", 
        "C4 Grand Picasso", 
        "C2", 
        "DS4", 
        "C3", 
        "Saxo", 
        "C4", 
        "C1", 
        "C3 Pluriel", 
        "Xsara Picasso", 
        "DS-3", 
        "C5", 
        "Berlingo", 
        "Xantia", 
        "Nemo", 
        "C4 Picasso", 
        "Xsara", 
        "Jumper", 
        "Jumpy", 
        "ZX", 
        "BX", 
        "C4 Cactus", 
        "C-Elysee", 
        "2 CV", 
        "AX", 
        "C3 Aircross", 
        "DS5", 
        "C5 Aircross", 
        "C-Crosser"
    ], 
    "DS": [
        "DS3", 
        "DS4", 
        "DS5"
    ], 
    "Lancia": [
        "MUSA", 
        "Ypsilon", 
        "Delta", 
        "Dedra", 
        "Lybra"
    ], 
    "SsangYong": [
        "Actyon", 
        "Rexton", 
        "Korando", 
        "Kyron"
    ], 
    "Mini": [
        "1000", 
        "Cooper S", 
        "Cooper D", 
        "Cooper", 
        "ONE", 
        "Clubman", 
        "Cabrio", 
        "Countryman", 
        "1300", 
        "Coupe"
    ], 
    "Bentley": [
        "Continental"
    ], 
    "Corvette": [
        "C5", 
        "C6", 
        "C3"
    ], 
    "Skoda": [
        "Fabia", 
        "Octavia", 
        "Superb", 
        "Roomster", 
        "Yeti", 
        "Citigo", 
        "Kodiaq", 
        "Rapid", 
        "Scala", 
        "Pick up", 
        "Karoq", 
        "Felicia", 
        "Scout", 
        "Favorit", 
        "120"
    ], 
    "Seat": [
        "Cordoba", 
        "Leon", 
        "Ibiza", 
        "Arosa", 
        "Mii", 
        "Toledo", 
        "Alhambra", 
        "Altea", 
        "Arona", 
        "Tarraco", 
        "Inca"
    ], 
    "Subaru": [
        "Forester", 
        "Trezia", 
        "WRX STI", 
        "Legacy", 
        "Outback", 
        "Impreza", 
        "Justy", 
        "Vivio"
    ], 
    "Lexus": [
        "RX 400", 
        "RX450", 
        "IS 200", 
        "CT 200h"
    ], 
    "Opel": [
        "Insignia", 
        "Astra", 
        "Corsa", 
        "Meriva", 
        "Agila", 
        "Zafira", 
        "Vectra", 
        "Grandland X", 
        "Tigra", 
        "Combo", 
        "Adam", 
        "Mokka", 
        "Antara", 
        "Crossland X", 
        "Mokka X", 
        "Vivaro", 
        "GT", 
        "Kadett", 
        "Campo", 
        "Manta", 
        "Frontera", 
        "Zafira Tourer", 
        "Ascona", 
        "Omega"
    ], 
    "Audi": [
        "A2", 
        "A4", 
        "S3", 
        "A4 allroad", 
        "RS6", 
        "A5", 
        "A6", 
        "A3", 
        "TT", 
        "Q3", 
        "Q5", 
        "A6 allroad", 
        "Q7", 
        "S4", 
        "A1", 
        "RS4", 
        "A8", 
        "TTS", 
        "Q2", 
        "R8", 
        "S5", 
        "80", 
        "Quattro", 
        "100", 
        "200"
    ]
}`


var brandsjson = JSON.parse(brands)
var brandsnmodelsjson = JSON.parse(brandsnmodels)
var brandSelect = document.getElementById("brands")
var modelSelect = document.getElementById("models")
var hasDamage = false;
var damageLegend = document.getElementById("damageLegend")
var resultP = document.getElementById("result")

$( document ).ready(function() {
    for(i=0;i<brandsjson.Brands.length;i++){
        var opt = document.createElement("option")
        opt.text = brandsjson.Brands[i]
        opt.value = brandsjson.Brands[i]
        brandSelect.append(opt)
    }
});

$(document).on('change','#brands',function(){
    modelSelect.innerHTML=""
    var opt = document.createElement("option")
    opt.text = "Διαλέξτε μάρκα"
    opt.value = ""
    opt.classList.add("selected")
    opt.disabled = true
    for(i=0;i<brandsnmodelsjson[brandSelect.value].length;i++){
        var opt = document.createElement("option")
        opt.text = brandsnmodelsjson[brandSelect.value][i]
        opt.value = brandsnmodelsjson[brandSelect.value][i]
        modelSelect.append(opt)
    }
    try{
        modelSelect.removeAttribute("disabled")
    }catch{
        console.log("failed to remove class!")
    }
});

$(document).on('change','#hasDamage',function(){
    hasDamage = !hasDamage;
    damageLegend.innerHTML = "";
    if (hasDamage){
        damageLegend.innerHTML = "Ναι";
    }else{
        damageLegend.innerHTML = "Όχι";
    }
});

$(document).on('click','#estimatorBtn',function(){
    var brand = brandSelect.value;
    var model = modelSelect.value;
    var year = document.getElementById("year").value;
    var transmission = document.getElementById("transmission").value;
    var fuel = document.getElementById("fuel").value;
    var mileage = document.getElementById("mileage").value;
    var horsepower = document.getElementById("horsepower").value;
    var displacement = document.getElementById("displacement").value;
    var damage = 0
    if (hasDamage){
        damage = 1;
    }
    var postData = new Object();
    postData.Brand = brand;
    postData.Model = model;
    postData.Year = parseInt(year);
    postData.Year = postData.Year % 100;
    postData.Transmission = transmission;
    postData.Fuel = fuel;
    postData.Mileage = parseInt(mileage);
    postData.Horsepower = parseInt(horsepower);
    postData.Displacement = parseInt(displacement);
    postData.Damage = damage
    var data = JSON.stringify(postData)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            renderResult(this.responseText)
        }
      };
      xhttp.open("POST", "http://localhost/api/carPriceEstimate", true);
      xhttp.send(data);
});

function renderResult(data){
    var data = JSON.parse(data)
    document.getElementById("result").innerHTML = data.estimation+" ευρώ";
}