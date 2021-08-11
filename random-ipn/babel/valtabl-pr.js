    
function          getRandomState() {

                return {
                  "land-kadastr" : make_digits(12) + ':' +make_digits(3) +':' + make_digits(4)
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
                        </tbody>
                    </table>
                </div>;
            }
        }


        ReactDOM.render(
            <LEValuesTable/>,
            document.getElementById("root")
        );
