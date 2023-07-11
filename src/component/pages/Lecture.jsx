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
    deleteLecture = (lecemail) =>{
        console.log('this is the lect email '+lecemail);
        try {
            fetch(`http://localhost:3000/deletelecturer/${lecemail}`,{
                method: 'DELETE'
            })
        } catch (error) {
            console.log({error, msg: 'Unable to delete'})
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
                    
                    <div>
                        
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
                                <div className="btn">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline edit_btn">Edit</button>
                                    <button onClick={() =>{this.deleteLecture(lecture.lecEmail)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline delete_btn">Delete</button>
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