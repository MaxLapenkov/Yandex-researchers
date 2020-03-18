const explorers = [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
    ["Mawson", "South Pole", "New Hebrides"],
    ["Hillary", "Everest", "South Pole"]
];

function yandex(explorers) {
    //Разбить массивы на пары Путешественник - место
    let output = [];
    let places = [];
    explorers.forEach(item => {
        for (let i = 1; i < item.length; i++) {
            output.push([item[0], item[i]]);
            places.push(item[i]);
        }
    });

    let final = [];

    function findPlace(place) {
        let arrPlace = [];
        output.forEach(item => {

            if (item[1] === place) {
                arrPlace.push(item[1])
                arrPlace.push(item[0]);
            }

        });
        const set = new Set(arrPlace);
        final.push([...set]);
    }

    new Set(places).forEach(place => {
        findPlace(place);
    });

    console.log(final);
}

yandex(explorers);