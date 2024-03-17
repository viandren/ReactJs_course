
import './MovieForm.css';

import React from "react";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import DatePicker from "react-datepicker";

export default function MovieForm({ movie: m ,onSubmit}) {

    if (m === undefined) {
        m = {
            "id": "0",
            "imageUrl": "Raiders of the lost ark.jpg",
            "title": "Raiders of the lost ark",
            "releaseYear": "1981",
            "genres": ["Horror","Adventure"],
            "rating": "8.4",
            "duration": "1h 55min",
            "url": "testurl",
            "description": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers."
        }
    }


    const [formData, setFormData] = useState(m);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleGenreChange = (event) => {
    setFormData((prevFormData) => ({ ...prevFormData, ["genres"]: event.map(g => g.value) }));
  }
  const handleYearChange = (event) => {
    setFormData((prevFormData) => ({ ...prevFormData, ["releaseYear"]: '' + event.getFullYear() }));
    setSelectedDate(event)
  }
  const [selectedDate, setSelectedDate] = useState(Date.parse(formData.releaseYear));


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData)
  }


    return  <div data-testid="movieForm">
    <form onSubmit={handleSubmit}>
        <div className='movie-form-first-column'>
            <div className='movie-form-label'>title</div>
            <input className='movie-form-input' value={formData.title} name="title" onChange={handleChange}></input>
            <div className='movie-form-label'>movie url</div>
            <input className='movie-form-input' value={formData.url} name="url" onChange={handleChange}></input>
            <div className='movie-form-label'>genre</div>
            <MultiSelect
                className='movie-form-genre-input'
                name="genres"
                placeholder="Select Genre"
                value={formData.genres.map(g => {return {label: g, value: g, name: g};})}
                options={["Horror","Comedy","Fantasy","Docu","Adventure","Action","Drama"].map(g => {return {label: g, value: g, name: g};})}
                onChange={handleGenreChange}
            />
        </div>
        <div className='movie-form-second-column'>
            <div className='movie-form-label'>release date</div>
            <DatePicker
               type="string"
               className="movie-form-input"
               selected={selectedDate}
               onChange={handleYearChange}
               showYearPicker
               dateFormat="yyyy"
               yearItemNumber={9}
            />
            <div className='movie-form-label'>rating</div>
            <input className='movie-form-input' value={formData.rating} name="rating" onChange={handleChange}></input>
            <div className='movie-form-label'>runtime</div>
            <input className='movie-form-input' value={formData.duration} name="duration" onChange={handleChange}></input>
        </div>
        <div className='movie-form-textarea-column'>
            <div className='movie-form-label'>overview</div>
            <textarea className='movie-form-textarea movie-form-input' rows="5"  
                    value={formData.description} name="description" onChange={handleChange}></textarea>
        </div>
        <div className='movie-form-control-column'>
            <button className='movie-form-submit-button movie-form-button' type="submit" >submit</button>
            <button className='movie-form-reset-button movie-form-button'>reset</button>
        </div>
    </form>
    </div>;
}