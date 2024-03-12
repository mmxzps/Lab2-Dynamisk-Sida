import data from '../assets/data.json'
import React, { useState, useEffect } from 'react';

const Educations = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    setEducationData(data[0].educations);
  }, []);
  return (
    <>
      <main>
        <div className="edutimeline">
          {educationData.map((education) =>
          (
            <div className="educontainer right-container">
              <img src={education.img} alt="school-logo" className="edupic" />
              <div className="text-box">
                <h2>{education.school}</h2>
                <small>{education.year}</small>
                <p className="eduinfo">{education.major}</p>
              </div>
            </div>
          ))}
        </div>
      </main >
    </>
  )
}

export default Educations
