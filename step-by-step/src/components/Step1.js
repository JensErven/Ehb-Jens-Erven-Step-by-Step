import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../src/App.css";
import { button, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Step1({ onNext }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ name, email });
  };

  return (
    <>
      <div className="page-container">
        <button type="button" className="icon-back" style={{ opacity: 0 }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ scale: "1.2", color: "black" }}
          />
        </button>
        <div className="title-container">
          <h1>Stap 1</h1>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          <h4 style={{ textAlign: "center", marginBottom: "25px" }}>
            Vul je naam en email in
          </h4>
          <label>
            Naam:<br></br>
            <input
              className="text-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br></br>
          <label>
            Email:<br></br>
            <input
              className="text-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br></br>

          <button className="submit-button" type="submit">
           Volgende
          </button>
        </form>
      </div>
    </>
  );
}
