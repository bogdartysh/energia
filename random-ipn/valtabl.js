        class ValuesTable extends React.Component {
            constructor() {
                super();
                this.state = get_random_state();
                this.nextRandomState = this.nextRandomState.bind(this);
            };

            nextRandomState() {
                this.setState(get_random_state());
            };

            render() {
                return <div>
                    <table className="table table-striped thead-dark">
                        <colgroup>
                            <col/>
                            <col/>
                            <col style={{width: "33%"}}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th>БЛОК</th>
                            <th>КЛЮЧ</th>
                            <th>ЗНАЧЕННЯ <button onClick={this.nextRandomState}>(ОНОВИТИ)</button></th>
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
                            <td><span className="contactna-email">{this.state.email}</span></td>
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
                            <td>поштовий індекс</td>
                            <td><span className="propiska-zip">{this.state["propiska-zip"]}</span></td>
                        </tr>
                        <tr>
                            <td>місце проживання</td>
                            <td>поштовий індекс</td>
                            <td><span className="prozhyvania-zip">{this.state["prozhyvania-zip"]}</span></td>
                        </tr>
                        <tr>
                            <td>пенсійна/сос інфо</td>
                            <td>номер соціального страхування</td>
                            <td><span className="pensiinyi-nomer-soc-strah">{this.state["pensiinyi-nomer-soc-strah"]}</span></td>
                        </tr>
                        <tr>
                            <td>платіжна інфо</td>
                            <td>IBAN</td>
                            <td><span className="bank-iban">{this.state["bank-iban"]}</span></td>
                        </tr>   
                        </tbody>
                    </table >
                    <button onClick={this.nextRandomState}>ОНОВИТИ</button>
                </div>;
            }
        }


        ReactDOM.render(
            <ValuesTable/>,
            document.getElementById("root")
        );
