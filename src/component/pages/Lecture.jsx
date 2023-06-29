import React, { Component } from "react";
import { AddLecture } from "../modals/lecture/AddLecture";
 
export class Lecture extends Component{
    constructor(){
        super();
        this.state={
            modal : false,
            searchModal: false,
            lectures: []
            // setModal : false
        }
    }   

    componentDidMount(){
        fetch('http://localhost:3000/getlecture')
        .then(response => response.json())
        .then((data) => this.setState({lectures: data}))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.lectures !== this.state.lectures) {
            fetch('http://localhost:3000/getlecture')
            .then(response => response.json())
            .then((data) => this.setState({lectures: data}))
        }
      }

    toggleSearch = () =>{
        this.setState({
            searchModal: !this.state.searchModal
        })
    }
    
     toggleLecModal = () =>{
        // this.state.setModal(!this.state.modal);
        this.setState({
            modal: !this.state.modal
        });
    }
    render(){
        const {lectures} = this.state;

        return(
            <div>

                {/* Modal start */}
                {
                    this.state.modal && (
                        <AddLecture toggleLecModal={this.toggleLecModal}/>

                    )
                }

                {
                    // this.state.searchModal && (
                    //     // < toggleSearch={this.toggleSearch}/>
                    // )
                }
                {/* Modal End */}

               <div>
                {/* top botton */}
               <div className="flex justify-around">
                    <button  
                    onClick={this.toggleLecModal}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                       Add Lecture
                    </button>
                    <button  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Search For Lecture
                    </button>

                </div>
                {/* End of botton */}
                <div className="scrol-div background-img">
                    <h1 className="lec-top">List Of Lectures</h1>
                    {/* { lectures.map(lecture =>(
                        <div>
                        <img src={lecture.LecImage} />
                        <p>{lecture.lecNumber}</p>
                        </div>
                    )
                        
                    )} */}
                    <div>
                        {/* <table className="table-text">
                            <thead>
                                <tr className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                    <th>ID Number</th>
                                    <th>Name</th>
                                    <th>Profile</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>ddvdsvdsfsdf</td>
                                        <td>ddvdsvdsfsdf</td>
                                        <td>ddvdsvdsfsdf</td>
                                        <td>dsdfsfdfdsffdsdgsfdgsg</td>
                                        <td>d</td>
                                    </tr>
                                </tbody>
                        </table> */}
                        
                        <div className="grid_display">
                            {/* box print */}
                            { lectures.map(lecture =>(
                            <div className="outer_box">
                                <div>
                                <h3 className="lec_name">{lecture.lecName}</h3>
                                </div>
                                <div className="image_boox">
                                    <img className="lectImgSize" src={lecture.LecImage} alt="no display" sizes="" srcset="" />

                                </div>
                                <div className="lec_details">
                                    <p>{lecture.lecNumber}</p>
                                    <p>{lecture.lecEmail}</p>
                                </div>
                                
                            </div>
                            ) 
                        ) }
                                                        
                                            
                        {/* End Point */}
                        </div>

                    </div>
                </div>
               </div>
            </div>
        );
    
        
    }

}