import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "./redux/actions/action";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cards = () => {
  const [user, setuser] = useState(Cardsdata);

  const [data, setData] = useState({
    itemName: "",
    price: "",
    rating: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8087/newcake/${id}`);
    setData(result.data);
  };

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {user.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Body>
                  <Card.Title>Item Name:{element.itemName}</Card.Title>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <Card.Text> Rating: {element.rating}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      onClick={() => send(element)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
