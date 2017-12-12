import React from 'react';

class Home extends React.Component {

  componentWillMount() {
    ('#map-europe').CSSMap({
      'size': 1450
    });
  }
  //
  // componentDidMount() {
  //   // console.log(this.mapCanvas);
  //   this.map = '#map-europe'(this.CSSMap, {
  //     size: 1450
  //   });
  // }


  render() {
    return (
      <div className="homePage">
        <img src="http://via.placeholder.com/1024x768" alt="placeholder"/>
        <div className="homePageText">
          <h2>POWER AFRICA<br />Aiming to increase financial inclusion for 480,000 individuals and their households</h2>
        </div>
        <div id="map-europe">
          <ul className="europe">
            <li className="eu1"><a href="#albania">Albania</a></li>
            <li className="eu2"><a href="#andorra">Andorra</a></li>
            <li className="eu3"><a href="#austria">Austria</a></li>
            <li className="eu4"><a href="#belarus">Belarus</a></li>
            <li className="eu5"><a href="#belgium">Belgium</a></li>
            <li className="eu6"><a href="#bosnia-and-herzegovina">Bosnia and Herzegovina</a></li>
            <li className="eu7"><a href="#bulgaria">Bulgaria</a></li>
            <li className="eu8"><a href="#croatia">Croatia</a></li>
            <li className="eu9"><a href="#cyprus">Cyprus</a></li>
            <li className="eu10"><a href="#czech-republic">Czech Republic</a></li>
            <li className="eu11"><a href="#denmark">Denmark</a></li>
            <li className="eu12"><a href="#estonia">Estonia</a></li>
            <li className="eu13"><a href="#france">France</a></li>
            <li className="eu14"><a href="#finland">Finland</a></li>
            <li className="eu15"><a href="#georgia">Georgia</a></li>
            <li className="eu16"><a href="#germany">Germany</a></li>
            <li className="eu17"><a href="#greece">Greece</a></li>
            <li className="eu18"><a href="#hungary">Hungary</a></li>
            <li className="eu19"><a href="#iceland">Iceland</a></li>
            <li className="eu20"><a href="#ireland">Ireland</a></li>
            <li className="eu21"><a href="#san-marino">San Marino</a></li>
            <li className="eu22"><a href="#italy">Italy</a></li>
            <li className="eu23"><a href="#kosovo">Kosovo</a></li>
            <li className="eu24"><a href="#latvia">Latvia</a></li>
            <li className="eu25"><a href="#liechtenstein">Liechtenstein</a></li>
            <li className="eu26"><a href="#lithuania">Lithuania</a></li>
            <li className="eu27"><a href="#luxembourg">Luxembourg</a></li>
            <li className="eu28"><a href="#macedonia">Macedonia <abbr title="The Former Yugoslav Republic of Macedonia">(F.Y.R.O.M.)</abbr></a></li>
            <li className="eu29"><a href="#malta">Malta</a></li>
            <li className="eu30"><a href="#moldova">Moldova</a></li>
            <li className="eu31"><a href="#monaco">Monaco</a></li>
            <li className="eu32"><a href="#montenegro">Montenegro</a></li>
            <li className="eu33"><a href="#netherlands">Netherlands</a></li>
            <li className="eu34"><a href="#norway">Norway</a></li>
            <li className="eu35"><a href="#poland">Poland</a></li>
            <li className="eu36"><a href="#portugal">Portugal</a></li>
            <li className="eu37"><a href="#romania">Romania</a></li>
            <li className="eu38"><a href="#russian-federation">Russian Federation</a></li>
            <li className="eu39"><a href="#serbia">Serbia</a></li>
            <li className="eu40"><a href="#slovakia">Slovakia</a></li>
            <li className="eu41"><a href="#slovenia">Slovenia</a></li>
            <li className="eu42"><a href="#spain">Spain</a></li>
            <li className="eu43"><a href="#sweden">Sweden</a></li>
            <li className="eu44"><a href="#switzerland">Switzerland</a></li>
            <li className="eu45"><a href="#turkey">Turkey</a></li>
            <li className="eu46"><a href="#ukraine">Ukraine</a></li>
            <li className="eu47"><a href="#united-kingdom">United Kingdom</a></li>
            {/* <!--
            <li className="eu48"><a href="#england">England</a></li>
            <li className="eu49"><a href="#isle-of-man">Isle of Man</a></li>
            <li className="eu50"><a href="#northern-ireland">Northern Ireland</a></li>
            <li className="eu51"><a href="#scotland">Scotland</a></li>
            <li className="eu52"><a href="#wales">Wales</a></li>
          --> */}
          </ul>
        </div>
        {/* <!-- END OF THE CSSMap - Europe --> */}

      </div>

    );
  }
}

export default Home;
