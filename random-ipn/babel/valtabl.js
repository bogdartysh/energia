
function get_random_state(neededDob) {
    let dob = (neededDob === null)? new Date((Date.now() - 18*365*24*60*60*1000)*Math.random()): neededDob;
    let ipn = make_taxcode_fiz(dob);
    let idx_name = Math.floor(Math.random()*names["ім'я"][get_sex(ipn)].length);
    let idx_lastname = Math.floor(Math.random()*names["прізвище"][get_sex(ipn)].length);

    return {
        "neededDob": neededDob,
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
        "propiska-address": make_legal_address(),
        "propiska-zip": make_digits(5),
        "prozhyvania-zip": make_digits(5),
        "contactna-telefon": "+380" + make_digits(9),
        "zagalna-data-narodgenia": dob.toISOString().substr(0,10),
        "zagalna-demindex": make_dem_index(dob),
        "zagalna-firstname-ukr": names["ім'я"][get_sex(ipn)][idx_name],
         "zagalna-firstname-lat": names["ім'я-lat"][get_sex(ipn)][idx_name],
        "zagalna-secondname-ukr": rnd_arr_element(names["по-батькові"][get_sex(ipn)]),
        "zagalna-lastname-ukr": names["прізвище"][get_sex(ipn)][idx_lastname],
        "zagalna-lastname-lat": names["прізвище-lat"][get_sex(ipn)][idx_lastname],
        "zagalna-vaga": 50 + Math.round(100 * Math.random()),
        "zagalna-stat": get_sex(ipn),
        "zagalna-zrist": 150 + Math.round(50 * Math.random()),
        "zakordonnyi-card-nomer": make_ALPHAS(2) + make_digits(6),
        "zakordonnyi-data-misce-vydachi": get_zakordon_place(),
        "zakordonnyi-data-organ-vydachi": make_digits(4),
        "zakordonnyi-data-vydachi": make_data_vydachi()
    };
}   ;     

class ValuesTable extends React.Component {
            constructor() {
                super();
                this.state = get_random_state(null);
                this.nextRandomState = this.nextRandomState.bind(this);
                this.setNeededDob = this.setNeededDob(this);
            };

            nextRandomState() {
                let dob = this.state['neededDob'];
                this.setState(get_random_state());
            };
    
            setNeededDob(event) {                 
                 try { 
                     console.log(event);
                     let dob = new Date(event.target.value);
                     this.setState(get_random_state(dob));
                 } catch (err) {
                     console.log(err);
                 }
            };

            render() {
                return <div> 
                    <form onSubmit={this.nextRandomState}>
                    <table className="table table-striped thead-dark">
                        <colgroup>
                            <col style={{width: "15%"}}/>
                            <col/>
                            <col style={{width: "33%"}}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th>БЛОК</th>
                            <th>КЛЮЧ</th>
                            <th>ЗНАЧЕННЯ <input type="submit" value="(ОНОВИТИ)"/></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>податкова інфо</td>
                            <td>реєстраційний номер облікової картки платника податків</td>
                            <td><span className="podatkova-taxcode">{this.state["podatkova-taxcode"]}</span></td>
                        </tr>
                        <tr>
                            <td>податкова інфо</td>
                            <td>квед</td>
                            <td><span className="podatkova-kved">{this.state["podatkova-kved"]}</span></td>
                        </tr>
                        <tr>
                            <td>податкова інфо</td>
                            <td>група платника податків (СПД)</td>
                            <td><span className="podatkova-grupa-spd">{this.state["podatkova-grupa-spd"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>унікальний номер запису у Єдиному державному демографічному реєстрі</td>
                            <td><span className="zagalna-demindex">{this.state["zagalna-demindex"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>ім'я</td>
                            <td><span className="zagalna-firstname-ukr">{this.state["zagalna-firstname-ukr"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>ім'я (латиниця)</td>
                            <td><span className="zagalna-firstname-ukr">{this.state["zagalna-firstname-lat"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>по батькові</td>
                            <td><span className="zagalna-secondname-ukr">{this.state["zagalna-secondname-ukr"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>прізвище</td>
                            <td><span className="zagalna-lastname-ukr">{this.state["zagalna-lastname-ukr"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>прізвище (латиниця)</td>
                            <td><span className="zagalna-lastname-ukr">{this.state["zagalna-lastname-lat"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>дата народження</td>
                            <td><span className="zagalna-data-narodgenia">{this.state["zagalna-data-narodgenia"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>стать</td>
                            <td><span className="zagalna-stat">{this.state["zagalna-stat"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>зріст [см]</td>
                            <td><span className="zagalna-zrist">{this.state["zagalna-zrist"]}</span></td>
                        </tr>
                        <tr>
                            <td>загальна інфо</td>
                            <td>вага [кг]</td>
                            <td><span className="zagalna-vaga">{this.state["zagalna-vaga"]}</span></td>
                        </tr>
                        <tr>
                            <td>контактна інфо</td>
                            <td>телефон</td>
                            <td><span className="contactna-telefon">{this.state["contactna-telefon"]}</span></td>
                        </tr>
                        <tr>
                            <td>контактна інфо</td>
                            <td>email</td>
                            <td><span className="contactna-email">{this.state["email"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт у вигляді ід-карти</td>
                            <td>номер</td>
                            <td><span className="id-card-nomer">{this.state["id-card-nomer"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт у вигляді ід-карти</td>
                            <td>дата видачі</td>
                            <td><span className="id-card-data-vydachi">{this.state["id-card-data-vydachi"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт у вигляді ід-карти</td>
                            <td>орган, що видав</td>
                            <td><span className="id-card-data-organ-vydachi">{this.state["id-card-data-organ-vydachi"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт у вигляді ід-карти</td>
                            <td>місце видачі</td>
                            <td><span className="id-card-data-misce-vydachi">{this.state["id-card-data-misce-vydachi"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт для виїзду закордон</td>
                            <td>номер</td>
                            <td><span className="zakordonnyi-card-nomer">{this.state["zakordonnyi-card-nomer"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт для виїзду закордон</td>
                            <td>дата видачі</td>
                            <td><span className="zakordonnyi-data-vydachi">{this.state["zakordonnyi-data-vydachi"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт для виїзду закордон</td>
                            <td>орган, що видав</td>
                            <td><span className="zakordonnyi-data-organ-vydachi">{this.state["zakordonnyi-data-organ-vydachi"]}</span></td>
                        </tr>
                        <tr>
                            <td>паспорт для виїзду закордон</td>
                            <td>місце видачі</td>
                            <td><span className="zakordonnyi-data-misce-vydachi">{this.state["zakordonnyi-data-misce-vydachi"]}</span></td>
                        </tr>
                        <tr>
                            <td>місце реєстрації</td>
                            <td>поштовий aдреса</td>
                            <td><span className="propiska-addres">{this.state["propiska-address"]}</span></td>
                        </tr>
                        <tr>
                            <td>місце реєстрації</td>
                            <td>поштовий індекс</td>
                            <td><span className="propiska-zip">{this.state["propiska-zip"]}</span></td>
                        </tr>
                        <tr>
                            <td>пенсійна/соц інфо</td>
                            <td>номер соціального страхування</td>
                            <td><span className="pensiinyi-nomer-soc-strah">{this.state["pensiinyi-nomer-soc-strah"]}</span></td>
                        </tr>
                        <tr>
                            <td>платіжна інфо</td>
                            <td>IBAN</td>
                            <td><span className="bank-iban">{this.state["bank-iban"]}</span></td>
                        </tr> 
                        <tr>
                            <td>платіжна інфо</td>
                            <td>Mastercard</td>
                            <td><span className="bank-mastercard">{this.state["bank-mastercard"]}</span></td>
                        </tr> 
                        <tr>
                            <td>платіжна інфо</td>
                            <td>Visa</td>
                            <td><span className="bank-visa">{this.state["bank-visa"]}</span></td>
                        </tr>   
                        </tbody>
                    </table >
                    <p>
                       <label> потрібна дата народження (yyyy-mm-dd):        
                       <input type="text" onChange={this.setNeededDob} value={this.state['neededDob']} />
                       </label>
                    </p>
                  </form>
                </div>;
            }
        }


        ReactDOM.render(
            <ValuesTable/>,
            document.getElementById("root")
        );
