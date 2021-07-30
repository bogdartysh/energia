    
function          getRandomState() {
                let dob = new Date((Date.now() - 18*365*24*60*60*1000)*Math.random());
                let edrpou = make_edrpou();
                return {"bank-iban": make_iban(),
                  "contactna-telefon": "+380" + make_digits(9),
                  "email": make_alphas(3 + Math.random() * 20) + "@example.com",
                  "podatkova-kved": make_digits(2) +"." + make_digits(2),
                  "podatkova-edrpou": edrpou,
                  "podatkova-pdv": edrpou.substring(0, 7) + make_digits(12-7),
                  "propiska-zip": make_digits(5),
                  "zagalna-data-narodgenia": dob.toISOString().substr(0,10)
                };
           };



    class LEValuesTable extends React.Component {
            constructor() {
                super();
                this.nextRandomState = this.nextRandomState.bind(this);
                this.state = getRandomState();
            };

   

            nextRandomState() {
                this.setState(getRandomState());            
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
                            <td>ЄДРПОУ</td>
                            <td><span className="podatkova-edrpou">{this.state["podatkova-edrpou"]}</span></td>
                        </tr>   
                        <tr>
                            <td>податкова інфо</td>
                            <td>Індивідуа́льний податко́вий но́мер платника податку на додану вартість</td>
                            <td><span className="podatkova-pdv">{this.state["podatkova-pdv"]}</span></td>
                        </tr> 
                        <tr>
                            <td>податкова інфо</td>
                            <td>КВЕД</td>
                            <td><span className="podatkova-kved">{this.state["podatkova-kved"]}</span></td>
                        </tr>                        
                        <tr>
                            <td>загальна інфо</td>
                            <td>дата створення</td>
                            <td><span className="zagalna-data-narodgenia">{this.state["zagalna-data-narodgenia"]}</span></td>
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
                            <td>місце реєстрації</td>
                            <td>поштовий індекс</td>
                            <td><span className="propiska-zip">{this.state["propiska-zip"]}</span></td>
                        </tr>
                        <tr>
                            <td>платіжна інфо</td>
                            <td>IBAN</td>
                            <td><span className="bank-iban">{this.state["bank-iban"]}</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>;
            }
        }


        ReactDOM.render(
            <LEValuesTable/>,
            document.getElementById("root")
        );
