import React, { Component } from "react";

export class AddCourse extends Component{
    constructor(props){
      super(props);
      this.state ={
        course_code: "",
        course_name: "",
        course_credit: "",
        course_speciality: "",
        course_level: "",
        specialties: [],
        levels: []
    
      }
    }

    OnCourseCode = (event) =>{
      this.setState({course_code :event.target.value});
    }
    OnCourseName = (event) =>{
      this.setState({course_name :event.target.value});
    }
    OnCourseSpecialty = (event) =>{
      this.setState({course_speciality :event.target.value});
    }
    OnCourseCredit = (event) =>{
      this.setState({course_credit :event.target.value});
    }
    OnCourseLevel = (event) =>{
      this.setState({course_level :event.target.value});
    }

    OnSaveCourse =()=>{
      fetch('http://localhost:3000/addcourse',{
        method: 'post',
        headers: {'Content-Type' :'application/json' },
        body: JSON.stringify({
          courseCode: this.state.course_code,
          courseName: this.state.course_name,
          CourseCredit: this.state.course_credit,
          CourseSpeciality: this.state.course_speciality,
          courseLevel: this.state.course_level

        })
      })

      console.log(this.state.course_code);
      console.log(this.state.course_name);
      console.log(this.state.course_credit);
      console.log(this.state.course_speciality);
      console.log(this.state.course_level);

    }

    componentDidMount(){
      fetch('http://localhost:3000/getspacialty')
      .then(response => response.json())
      .then((data) => this.setState({specialties: data}));

      fetch('http://localhost:3000/getlevel')
      .then(response => response.json())
      .then((data) => this.setState({levels : data}))
    }



    render(){
      const {specialties, levels} = this.state;
        return(
            <div>
                <div className="modal mar">
                <div className="overlay" onClick={this.props.toggleCourModal}></div>
                <div className="modal-content">
                    <h2 className="student-heading">Add New Course</h2>
                    {/* form start */}
                    <div className="m-5 scrol-s-form">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="col-span-full">
                                      <label for="course-code" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Course Code</label>
                                      <div className="mt-2">
                                        <input type="text" 
                                        name="course-code" 
                                        id="course-code" 
                                        autoComplete="given-name" 
                                        onChange={this.OnCourseCode}                                        
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="course-name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Course Name</label>
                                      <div className="mt-2">
                                        <input type="text" 
                                        name="course-name" 
                                        id="course-name" 
                                        onChange={this.OnCourseName}                                        
                                        autoComplete="given-name" 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="coourse-credit" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Course Cardit</label>
                                      <div className="mt-2">
                                        <input type="text" 
                                        name="course-cradit" 
                                        id="course-cradit" 
                                        autoComplete="given-name" 
                                        onChange={this.OnCourseCredit}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>


                                <div className="col-span-full">
                                      <label for="course-speciality" className="block text-sm font-medium left-aligment leading-6 text-gray-900">Course Specialty</label>
                                      <div className="mt-2">
                                      <select  onChange={this.OnCourseSpecialty} id="country" name="country" autoComplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        { specialties.map( specialty =>
                                          <option >{specialty.specialtyName}</option>
                                        )}
                                        </select>  
                                       </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="course-level" className="block text-sm font-medium leading-6 left-aligment text-gray-900">Course Level</label>
                                      <div className="col-span-full">
                                      <select  onChange={this.OnCourseLevel} id="course_level" name="course_level" autoComplete="course_level" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {levels.map( level =>
                                          <option >{level.levelName}</option>
                                        )}
                                        </select>
                                      </div>
                                </div>

                                


                            </div>
                        </div>
                            
                    </div>
                    <button  onClick={this.OnSaveCourse}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Save</button>

                    {/* End start */}


                    <button className="close-modal" onClick={this.props.toggleCourModal}>Close</button>
                </div>

            </div>
            </div>
        )
    }
}