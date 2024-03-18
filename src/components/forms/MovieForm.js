
import './MovieForm.css';

import React from "react";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import DatePicker from "react-datepicker";
import FocusTrap from "focus-trap-react";

export default function MovieForm({ movie: m ,onSubmit}) {

    if (m === undefined) {
      m = {
        "id": generateGuid(),
        "imageUrl": "",
        "title": "",
        "releaseYear": "",
        "genres": [],
        "rating": "",
        "duration": "",
        "description": ""
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

  const reset = () => {
    m = {
      "id": generateGuid(),
      "imageUrl": "",
      "title": "",
      "releaseYear": "",
      "genres": [],
      "rating": "",
      "duration": "",
      "description": ""
    }
    setFormData(m);
  }

    return  <div data-testid="movieForm" id="movieform">
    <FocusTrap 
    focusTrapOptions={{
      fallbackFocus: '#movieform',
      clickOutsideDeactivates: true
    }}>
    <form onSubmit={handleSubmit} className='movie-form'>
        <div className='movie-form-first-column'>
            <div className='movie-form-label'>title</div>
            <input className='movie-form-input' value={formData.title} name="title" onChange={handleChange} data-testid="titleInput"></input>
            <div className='movie-form-label'>movie url</div>
            <input className='movie-form-input' value={formData.imageUrl} name="imageUrl" 
            placeholder="https://" onChange={handleChange} data-testid="urlInput"></input>
            <div className='movie-form-label'>genre</div>
            <MultiSelect
                data-testid="genreSelect"
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
               name="datePicker"
               placeholderText="Select Date"
               type="string"
               className="movie-form-input"
               selected={selectedDate}
               onChange={handleYearChange}
               showYearPicker
               dateFormat="yyyy"
               yearItemNumber={9}
            />
            <div className='movie-form-label'>rating</div>
            <input className='movie-form-input' value={formData.rating} name="rating" 
            data-testid="ratingInput" onChange={handleChange}></input>
            <div className='movie-form-label'>runtime</div>
            <input className='movie-form-input' value={formData.duration} 
            data-testid="durationInput" name="duration" onChange={handleChange}></input>
        </div>
        <div className='movie-form-textarea-column'>
            <div className='movie-form-label'>overview</div>
            <textarea className='movie-form-textarea movie-form-input' rows="5" data-testid="descriptionInput"
                    value={formData.description} name="description" onChange={handleChange}></textarea>
        </div>
        <div className='movie-form-control-column'>
            <button className='movie-form-submit-button movie-form-button' type="submit" data-testid="submitButton">submit</button>
            <button className='movie-form-reset-button movie-form-button' type="button" data-testid="resetButton" onClick={reset}>reset</button>
        </div>
    </form>
    </FocusTrap>
    </div>;
}


function generateGuid() {
  return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }