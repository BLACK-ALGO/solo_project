import React, { Component } from "react";
import {GrClose} from 'react-icons/gr';

export class StudentReg extends Component{
  constructor(props){
    super(props);
    this.state={
      firstName : '',
      lastName: '',
      matricule: '',
      birthDate: '',
      placeOfBirth: '',
      emailAddress: '',
      Level: '',
      Speciality:'',
      Country: '',
      City: '',
      studentNumber : '',
      emergencyNumber: '',
      postalCode: '',
      stundentImage:'',


    }
  }

  onfirstNameChange =(event) =>{
    this.setState({
      firstName : event.target.value
    })
  }

  onlastNameChange =(event) =>{
    this.setState({
      lastName : event.target.value
    })
  }
  onMatriculeChange =(event) =>{
    this.setState({
      matricule : event.target.value
    })
  }

  onbirthDayChange =(event) =>{
    this.setState({
      birthDate : event.target.value
    })
  }

  onpalceOfBirthChange =(event) =>{
    this.setState({
      placeOfBirth : event.target.value
    })
  }

  onemailAddressChange =(event) =>{
    this.setState({
      emailAddress : event.target.value
    })
  }

  onLevelChange =(event) =>{
    this.setState({
      Level : event.target.value
    })
  }

  onSpecialityChange =(event) =>{
    this.setState({
      Speciality : event.target.value
    })
  }

  onCountryChange =(event) =>{
    this.setState({
      firstName : event.target.value
    })
  }

  onCityChange =(event) =>{
    this.setState({
      firstName : event.target.value
    })
  }

  onstudentNumberChange =(event) =>{
    this.setState({
      studentNumber : event.target.value
    })
  }

  onemergencyNumberChange =(event) =>{
    this.setState({
      emergencyNumber : event.target.value
    })
  }

  onpostalCodeChange =(event) =>{
    this.setState({
      postalCode : event.target.value
    })
  }

  onstudentImageChange =(event) =>{
    this.setState({
      stundentImage : event.target.value
    })
  }

  onRegister = () =>{
    console.log(this.state.firstName + " " + this.state.lastName + this.state.birthDate);

    fetch('http://localhost:3000/addstudent',{
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        matricule: this.state.matricule,
        birthDate: this.state.birthDate,
        placeOfBirth: this.state.placeOfBirth,
        emailAddress: this.state.emailAddress,
        Level: this.state.Level,
        Speciality: this.state.Speciality,
        Country: this.state.Country,
        City: this.state.City,
        studentNumber: this.state.studentNumber,
        emergencyNumber: this.state.emergencyNumber,
        postalCode: this.state.postalCode,
        stundentImage: this.state.stundentImage,
        
      })
    })
  }




    render(){
        return(
            <div>
                <div className="modal mt-20">
                    <div className="overlay" onClick={this.props.toggleModal}></div> 
                        <div className="modal-content">
                            <h2 className="student-heading" >Student  Registration</h2>
                            {/* Registration Form For Student */}
                            <div>
                                {/* form start */}
                                <div className="m-5 scrol-s-form">
                                <div className="border-b border-gray-900/10 pb-12">

                                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                      <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                      <div className="mt-2">
                                        <input onChange={this.onfirstNameChange} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                      <div className="mt-2">
                                        <input onChange={this.onlastNameChange} type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    

                                    <div className="col-span-full">
                                      <label for="matricule" className="block text-sm font-medium text-gray-900 left-aligment">Matricule</label>
                                      <div className="mt-2">
                                        <input onChange={this.onMatriculeChange} id="matricule" name="matricule" type="text" autoComplete="matricule" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="date-of-birth" className="block text-sm font-medium leading-6 text-gray-900">Date of birth</label>
                                      <div className="mt-2">
                                        <input onChange={this.onbirthDayChange} type="date" name="date-birth" id="date-birth" autoComplete="date-birth" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="place-of-birth" className="block text-sm font-medium leading-6 text-gray-900">Place of birth</label>
                                      <div className="mt-2">
                                        <input onChange={this.onpalceOfBirthChange} type="text" name="placr-birth" id="placr-birth" autoComplete="placr-birth" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="col-span-full">
                                      <label for="email" className="block text-sm font-medium text-gray-900 left-aligment">Email address</label>
                                      <div className="mt-2">
                                        <input onChange={this.onemailAddressChange} id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="level" className="block text-sm font-medium leading-6 text-gray-900">Level</label>
                                      <div className="mt-2">
                                      <select onChange={this.onLevelChange} id="level" name="level" autoComplete="level" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                          <option>Level 1</option>
                                          <option>Level 2</option>
                                          <option>Level 3</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="speciality" className="block text-sm font-medium leading-6 text-gray-900">Speciality</label>
                                      <div className="mt-2">
                                        <select onChange={this.onSpecialityChange} id="speciality" name="speciality" autoComplete="speciality" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                          <option>SWE</option>
                                          <option>LMT</option>
                                          <option>BTS</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="country" class="block text-sm font-medium  text-gray-900 left-aligment">Country</label>
                                      <div className="mt-2">
                                        <select onChange={this.onCountryChange} id="country" name="country" autoComplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                          <option>United States</option>
                                          <option>Canada</option>
                                          <option>Mexico</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                      <label for="city" class="block text-sm font-medium  text-gray-900 left-aligment">City</label>
                                      <div className="mt-2">
                                        <select onChange={this.onCityChange} id="city" name="city" autoComplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                          <option>United States</option>
                                          <option>Canada</option>
                                          <option>Mexico</option>
                                        </select>
                                      </div>
                                    </div>                                    

                                    <div className="sm:col-span-2 sm:col-start-1">
                                      <label for="student-number" className="block text-sm font-medium leading-6 text-gray-900">Student number</label>
                                      <div className="mt-2">
                                        <input onChange={this.onstudentNumberChange} type="number" name="student-number" id="student-number" autoComplete="student-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                      <label for="emergency-number" class="block text-sm font-medium leading-6 text-gray-900">Emergency number</label>
                                      <div class="mt-2">
                                        <input onChange={this.onemergencyNumberChange} type="number" name="emergency-number" id="emergency-number" autoComplete="emergency-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                      <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                      <div className="mt-2">
                                        <input onChange={this.onpostalCodeChange} type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                    </div>

                                    <div className="col-span-full">
                                    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900 left-aligment">Student Image</label>

                                      <div className="mt-2">
                                          <div className="flex items-center justify-center w-full image-height">
                                            <label for="student-image" class="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input onChange={this.onstudentImageChange} id="student-image" name="student-image" type="file" className="hidden" />
                                            </label>
                                          </div> 
                                      </div>
                                    </div>

                                  </div>
                         </div>
                                </div>
                                 {/*Subting data button  */}
                                <div className="flex justify-around">
                                  <botton onClick={this.onRegister}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer " >Add New Student</botton>
                                  <botton  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ">Reset Fields</botton>
                                </div>
                            </div>
                            <buton className="close-modal ml-7" onClick={this.props.toggleModal}><GrClose /></buton>
                        </div>
                    </div>
            </div>
        )
    }
}