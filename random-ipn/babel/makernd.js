var names = {
  "fn": {
    "m": ["Арес", "Августин", "Амбре", "Апалон", "Адам", "Аскольд", "Ангел", "Арон-Моісей", "Буржуй", "Богодар", "Братислав", "Вакула", "Вогнедар", "Грант", "Гедеон", "Гусман", "Дартан’ян", "Добриня", "Даміан-Меркурій", "Добре-Авенір", "Еней", "Єлісей", "Зеленський", "Київ", "Князь", "Лимон", "Мілан", "Марсель", "Матео", "Ніл", "Ной", "Людвік", "Оскар", "Одисей", "Омар", "Октавіан", "Платон", "Принц", "Парижан", "Пантелеймон", "Річард", "Расмад-Рой", "Светодар", "Сулейман", "Спартак", "Соломон", "Тігран", "Тамерлан", "Тор", "Тадеуш", "Шархан", "Шаміль", "Ясмін", "Ясон", "Ярволод", "Яросвіт", "Яник"],
    "f": ["Анфіса", "Аурора", "Афіна", "Асоль", "Аврора", "Аполлінарія", "Божена", "Беатріса", "Весна", "Всеслава", "Вальківія", "Жасмін", "Женев’єва", "Златовласа", "Златослава", "Золушка", "Земфіра", "Зоря", "Єсенія", "Євангеліна", "Ізабелла", "Імперія", "Ізольда", "Квітка", "Луна", "Ліана", "Мальва", "Магдалина", "Мануела", "Мірабелла", "Мія-Хенд", "Мія", "Мира-Слава", "Мадонна", "Мія-Соломія", "Настасья", "Нєва", "Ніца", "Росава", "Регіна", "Розалія", "Санта-Марія", "Суламіта", "Самара", "Санта", "Одарка", "Олімпіада", "Тереза", "Теона", "Флоренція", "Фрея", "Хадіжа", "Хрусталіна", "Цвітозара", "Шанель", "Ясмін", "Юріка"]
  }
};

function makernd(characters, length) {
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function make_alphas(length) {
    return makernd('abcdefghijklmnopqrstuvwxyz', length);
}

function make_ALPHAS(length) {
    return makernd('ABCDEFGHIJKLMNOPQRSTUVWXYZ', length);
}

function make_digits(length) {
    return makernd('0123456789', length);
}

function make_kved() {
    return makernd('ABCDEFGHIJKLMNOPQRSTU', 1) + '.' + make_digits(2) + '.' + make_digits(3) + '.' + make_digits(4);
}

function make_taxcode_fiz(dob) {
    let ipn = Math.ceil((dob - new Date('1899-12-31T23:59:59'))/(1000*60*60*24))+make_digits(4);
    let arr = ipn.toString(10).replace(/\D/g, '0').split('').map(Number)
    let c = arr[0] *(-1) + arr[1]*5+arr[2]*7+arr[3]*9+arr[4]*4+arr[5]*6+arr[6]*10+arr[7]*5+arr[8]*7;
    let cn = (c%11 > 9) ? (c%11 - 10) : c%11;
    return ipn + (cn)
}

function make_dem_index(dob) {
    let di = dob.toISOString().substr(0,10).replaceAll("-","") + make_digits(4);
    let arr = di.toString(10).replace(/\D/g, '0').split('').map(Number);
    let cn = (7 + 3 + 1 + 7 + 3 + 1 + arr.reduce((a,b) => a + b)) % 10;
    return di.substr(0, 8) + "-" + di.substr(8) + (cn.toString());
}

function make_data_vydachi() {
    let dob = new Date(Math.round(Math.random() * (Date.now() - (2014-1970)*365*24*60*60*1000) + ((2014-1970)*365*24*60*60*1000)));
    let dd = ((dob.getDate() < 10) ? '0' : '') + dob.getDate().toString()
    let mm = ["СІЧ/JAN", "ЛЮТ/FEB", "БЕР/MAR", "КВІ/APR", "ТРА/MAY", "ЧЕР/JUN", "ЛИР/JUL", "СЕР/AUG", "ВЕР/SEP", "ЖОВ/OCT", "ЛИС/NOV", "ГРУ/DEC"][dob.getMonth()];
    return dd + " "+ mm + " " + dob.getFullYear().toString();
}

function get_zakordon_place() {
    const cities = ["КИЇВ", "ЗАПОРІЖЖЯ", "ЛЬВІВ", "ЧЕРКАСИ", "ВІННИЦЯ"];
    return "М. " + cities[Math.round(Math.random() * cities.length) % cities.length] +"/UKR";
}

function get_id_place() {
    const cities_id = ["КИЇВ/KYIV", "ЛЬВІВ/LVIV", "ОДЕСА/ODESA", "ДНІПРО/DNIPRO", "ЛУЦЬК/LUTSK"];
    return cities_id[Math.round(Math.random() * cities_id.length) % cities_id.length];
}

function get_sex(ipn) {
    return ["Ж", "Ч"][Math.floor((ipn %100) /10) %2]
}

function make_iban() {
    
   let mfo = make_digits(6);
   let rahunok = make_digits(19);
   let cc = (97+1) - Number(mfo+rahunok)*100%97;
   return 'UA'+mfo+rahunok + ((cc < 9)? '0' : '') + cc;
}

function get_random_state() {
    let dob = new Date((Date.now() - 18*365*24*60*60*1000)*Math.random());
    let ipn = make_taxcode_fiz(dob);

    return {
        "bank-iban": make_iban(),
        "bank-mastercard": '5' + makernd('12345', 1) +  make_digits(16-2),
        "bank-visa": '4' + make_digits(16-1),
        "email": make_alphas(3 + Math.random() * 20) + "@example.com",
        "id-card-data-vydachi": make_data_vydachi(),
        "id-card-data-organ-vydachi": make_digits(4),
        "id-card-data-misce-vydachi": get_id_place(),
        "id-card-nomer": make_digits(13),
        "podatkova-kved": make_digits(2) +"." + make_digits(2),
        "podatkova-grupa-spd": 1 + Math.round(2 * Math.random()),
        "pensiinyi-nomer-soc-strah": make_digits(10),
        "podatkova-taxcode": ipn,
        "propiska-zip": make_digits(5),
        "prozhyvania-zip": make_digits(5),
        "contactna-telefon": "+380" + make_digits(9),
        "zagalna-data-narodgenia": dob.toISOString().substr(0,10),
        "zagalna-demindex": make_dem_index(dob),
        "zagalna-vaga": 50 + Math.round(100 * Math.random()),
        "zagalna-stat": get_sex(ipn),
        "zagalna-zrist": 150 + Math.round(50 * Math.random()),
        "zakordonnyi-card-nomer": make_ALPHAS(2) + make_digits(6),
        "zakordonnyi-data-misce-vydachi": get_zakordon_place(),
        "zakordonnyi-data-organ-vydachi": make_digits(4),
        "zakordonnyi-data-vydachi": make_data_vydachi()
    };
}
