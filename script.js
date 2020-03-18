const explorers = [
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
    ["Mawson", "South Pole", "New Hebrides"],
    ["Hillary", "Everest", "South Pole"]
];

function yandex(explorers) {
    
    let output = []; //Массив для пар
    let places = []; //Массив для мест
    //Разбить массивы на пары Путешественник - место
    explorers.forEach(item => {
        for (let i = 1; i < item.length; i++) {
            output.push([item[0], item[i]]);
            places.push(item[i]);
        }
    });
    //Финальный массив
    let final = [];
    //Функция для записи соответствия месту людей, его посетивших и записи массива в финальный массив
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
//Для каждого места повторяем функцию
    new Set(places).forEach(place => {
        findPlace(place);
    });

    return(final);
}

yandex(explorers);

