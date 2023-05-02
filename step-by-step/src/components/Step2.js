import React, { useState } from "react";
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

export default function Step2({ selectedCourses, onSelect, onBack, onNext }) {
  const handleSelect = (courseId) => {
    if (selectedCourses.length < 4) {
      onSelect(courseId);
    }
  };

  const handleDeselect = (courseId) => {
    onSelect(courseId, true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
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
          <h1>Stap 2</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <h4 style={{ textAlign: "center", marginBottom: "25px" }}>
            Kies uit de keuzevakken
          </h4>

          <ul>
            {courseList.map((course) => {
              const isSelected = selectedCourses.includes(course.id);
              return (
                <li key={course.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() =>
                        isSelected
                          ? handleDeselect(course.id)
                          : handleSelect(course.id)
                      }
                    />
                    {course.name}
                  </label>
                </li>
              );
            })}
          </ul>
          <button className="submit-button" type="submit">
           Volgende
          </button>
        </form>
      </div>
    </>
  );
}
