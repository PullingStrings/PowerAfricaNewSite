import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="homePage">
          <img src="http://via.placeholder.com/1024x768" alt="placeholder"/>
          <div className="homePageText">
            <h2>POWER AFRICA<br />Aiming to increase financial inclusion for 480,000 individuals and their households</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8">
              CARE international in partnership with The MasterCard Foundation is implementing a multi-country financial inclusion project in promoting opportunities for women’s economic empowerment in rural Africa (POWER Africa).

              The project is implemented in four countries: Rwanda, Burundi, Ethiopia and Cote d’Ivoire. This four-year project aims to increase the financial inclusion of 480,000 direct beneficiaries and their households through forming savings groups, financial education, and linking mature groups to formal financial institutions.
            </div>
            <div className=" col-md-4 col-lg-4">
              <img hrefe="./images/picOne.jpg" alt="girl selling food"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
