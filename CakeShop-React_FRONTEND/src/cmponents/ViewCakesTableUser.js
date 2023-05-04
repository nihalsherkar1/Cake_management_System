import React from "react";
import { Link } from "react-router-dom";
import "../cascading/ViewCakesTableUser.css";
import Header from "./Header";
import Navbar from "./navbar";
import NavbarPayment from "./NavbarPayment";
import AfterLoginNavBar from "./AfterLoginNavBar";
import { Button } from "react-bootstrap";

class ViewCakesTableUser extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { cakesavailable: [] };
    fetch("http://localhost:8087/cakedata")
      .then((response) => response.json())
      .then(
        (cakesavailable) => (
          console.log(cakesavailable), this.setState({ cakesavailable })
        )
      );
  }

  handleOrderSelect = (available) => {
    console.log(available);

    this.props.history.push({
      pathname: `/payment`,
      state: { cake: available },
    });
  };

  deleteCake(cakeId) {
    this.setState({
      cakesavailable: this.state.cakesavailable.filter(
        (cake) => cake.cakeId !== cakeId
      ),
    });
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <Header /> */}
        <AfterLoginNavBar />
        <br />
        <h1 className="text-secondary text-lg-center shadow-md">
          Cakes Available
        </h1>
        <br />
        <br />
        <br />
        <table className="table table-striped table text-danger border   bg-white">
          <thead>
            <tr>
              {/* <th className="text-center">CakeId</th> */}
              <th className="text-center">Cake Name</th>
              <th className="text-center">Cake Category</th>
              <th className="text-center">Cake Weight</th>
              <th className="text-center">Cake Price</th>
              <th className="text-center"> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.cakesavailable.map((available) => (
              <tr key={available.cakeId}>
                {/* <td className="text-primary text-center">{available.cakeid}</td> */}
                <td className="text-dark text-center">{available.name}</td>
                <td className="text-info text-center">{available.category}</td>
                <td className="text-danger text-center">{available.weight}</td>
                <td className="text-info text-center">{available.price}</td>
                <td>
                  <button
                    className="btn btn-primary   "
                    onClick={() => this.handleOrderSelect(available)}
                  >
                    PlaceOrder
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger   "
                    onClick={() => this.deleteCake(available.cakeId)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <Link to="/login">Back</Link>
        </table>
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    );
  }
}

export default ViewCakesTableUser;
