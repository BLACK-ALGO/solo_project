import React, { Component } from "react";
import { AddCourse } from "../modals/course/AddCourse";

export class Course extends Component{
    constructor(){
        super();
        this.state={
            modal : false,
            searchModal: false,
            courses: [],
            // setModal : false
        }
    }

    // controllers
  


    // modal handling
    toggleSearch = () =>{
        this.setState({
            searchModal: !this.state.searchModal
        })
    }
    
     toggleCourModal = () =>{
        // this.state.setModal(!this.state.modal);
        this.setState({
            modal: !this.state.modal
        });
    }

    deleteCourse = async (courseCode) =>{
        try {           
           await fetch(`http://localhost:3000/deletecourse/${courseCode}`,{
            method: 'DELETE'
           })
        } catch (error) {
            console.log({error, msg:'Unable to delete'});
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/getcourse')
        .then(response => response.json())
        .then( (data) => this.setState({courses: data}))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.courses !== this.state.courses) {
            fetch('http://localhost:3000/getcourse')
            .then(response => response.json())
            .then( (data) => this.setState({courses: data}))
        }
      }

    

    render(){
        const {courses} = this.state;
        return(
            <div>
                {/* Start Modal */}
                
                {
                    this.state.modal && (
                        <AddCourse toggleCourModal={this.toggleCourModal}/>

                    )
                }

                {/* End Modal */}

                <div className="flex justify-around">
                    <button onClick={this.toggleCourModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Course
                    </button>
                    {this.state.courses.length}
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Get A Course
                    </button>
                </div>
                {/* Table start */}
                <div className="scrol-div">
                    <div className="mt-4">
                    <div class=" overflow-x-auto shadow-md sm:rounded-lg ">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Cousrse Code
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Course Name
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Cousrse Credit
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Course Specialty
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Course Level
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                        {courses.map( course =>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {course.courseCode}
                                                </th>
                                                <td class="px-6 py-4">
                                                    {course.courseName}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {course.courseCradit}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {course.courseSpecialty}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {course.courseLevel}
                                                </td>

                                                <td class="px-6 py-4 text-right">
                                                    <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline
                                                    edit_btn
                                                    
                                                    ">Edit</button>
                                                     <button onClick={() => {this.deleteCourse(course.courseCode)}} class="font-medium text-blue-600 dark:text-blue-500 hover:underline delete_btn">Delete</button>
                                                 </td>
                                                                                                
                                            </tr>
                                        )}
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>

                    </div>


                </div>
            </div>
        )
    }
}