import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../../src/App.css";
import { motion } from "framer-motion";
const courseList = [
  { id: 1, name: "Backend" },
  { id: 2, name: "Frontend" },
  { id: 3, name: "Motion" },
  { id: 4, name: "Virtual Reality" },
  { id: 5, name: "3D Animation" },
  { id: 6, name: "Android" },
  { id: 7, name: "IoS" },
];

export default function Step3({
  name,
  email,
  selectedCourses,
  onBack,
  onConfirm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };
  return (
    <>
      <div className="page-container">
        <button type="button" onClick={onBack} className="icon-back">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ scale: "1.2", color: "black" }}
          />
        </button>
        <div className="title-container">
          <h1>Stap 3</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <h4 style={{ textAlign: "center", marginBottom: "25px" }}>
            Bevestig
          </h4>
          <p>
            <span>Naam:</span> {name}
          </p>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Keuzevakken:</span>
          </p>
          <ul>
            {selectedCourses.map((courseId) => {
              const course = courseList.find((c) => c.id === courseId);
              return <li key={course.id}>{course.name}</li>;
            })}
          </ul>
          <button className="submit-button" type="submit">
            Bevestigen
          </button>
        </form>
      </div>
    </>
  );
}
