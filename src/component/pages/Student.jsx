import React, { Component } from "react";
import {StudentReg} from '../modals/StudentReg';
import ReactToPrint from 'react-to-print';
import StudentCard from "./utility/StudentCard";
import StudentSearch from "../modals/StudentSearch";

// import { ComponentToPrint } from '.';

export class Student extends Component{
    constructor(){
        super();
        this.state={
            modal : false,
            searchModal: false,
            // setModal : false
            student:[],
            searchField: ''
        };
        this.handlePrint = this.handlePrint.bind(this);

    }   

    handlePrint() {
        this.componentRef.onPrint();
      }
    

    toggleSearch = () =>{
        this.setState({
            searchModal: !this.state.searchModal
        })
    }
    
     toggleModal = () =>{
        // this.state.setModal(!this.state.modal);
        this.setState({
            modal: !this.state.modal
        });
    }

    onSearchChange(event){
        console.log(event);
    }

    render(){ 
        return(
            
            <div className="body">
                {/* Modal start */}
                {
                    this.state.modal && (
                        <StudentReg toggleModal={this.toggleModal} />

                    )
                }

                {
                    this.state.searchModal && (
                        <StudentSearch toggleSearch={this.toggleSearch} />
                    )
                }
                {/* Modal End */}
                
                <div className="flex justify-around">
                    <button onClick={this.toggleModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Studen
                    </button>
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Search For Students
                    </button>
                </div>
                <div className="scrol-div">

                {/* table start */}
                <div ref={el => (this.componentRef = el)}> 
                    <StudentCard students={this.state.student} />

                </div>
                {/* end of table */}
                <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => <button onClick={this.handlePrint} type="submit" className="mt-5 bg-blue-500  text-white font-bold py-2 px-4 rounded-full">Print List</button>}
                 />
            
                
                </div>
            </div>
        );
    }
} 