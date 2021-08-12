    
function          getRandomState() {

                return {
                  "land-kadastr" : make_digits(12) + ':' +make_digits(3) +':' + make_digits(4),
                   "neruhome-reiestr-nomer": make_digits(13),
                    "neruhome-nomer-vlasnosti": make_digits(9),
                    "neruhome-data-vlasnosti": toUkrDateTime(new Date(Math.round(Date.now() - 10*365*24*60*60*1000*Math.random())))
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
                            <col style={{width: "15%"}}/>
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
                            <td>земельна ділянка</td>
                            <td>кадастровий номер</td>
                            <td><span className="land-kadastr">{this.state["land-kadastr"]}</span></td>
                        </tr>
                        <tr>
                            <td>нерухоме майно</td>
                            <td>реєстраційний номер обєкта нерухомого майна</td>
                            <td><span className="neruhome-reiestr-nomer">{this.state["neruhome-reiestr-nomer"]}</span></td>
                        </tr>
                         <tr>
                            <td>нерухоме майно</td>
                            <td>номер запису про право власності</td>
                            <td><span className="neruhome-nomer-vlasnosti">{this.state["neruhome-nomer-vlasnosti"]}</span></td>
                        </tr>
                         <tr>
                            <td>нерухоме майно</td>
                            <td>дата, час державної реєстрації</td>
                            <td><span className="neruhome-data-vlasnosti">{this.state["neruhome-data-vlasnosti"]}</span></td>
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
