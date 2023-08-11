import React, { Component } from "react";
import {StudentReg} from '../modals/StudentReg';
import ReactToPrint from 'react-to-print';
import StudentCard from "./utility/StudentCard";
// import StudentSearch from "../modals/StudentSearch";
import SearchStudent from "../modals/SearchStudent";


export class Student extends Component{
    constructor(){
        super();
        this.state={
            modal : false,
            searchModal: false,
            students:[],
            level: 'Level 2',
            specialtyName: 'SWE',
            startyear: '2022',
            endyear: '2023' ,
        };
        this.handlePrint = this.handlePrint.bind(this);

    }   
    
    componentDidMount(){
        console.log(this.state.startyear, this.state.endyear, this.state.level, this.state.specialtyName);
        fetch(`http://localhost:3000/studentlist?startyear=${this.state.startyear}&endyear=${this.state.endyear}
        &level=${this.state.level}&specialtyName=${this.state.specialtyName}`)
        .then(response => response.json())
        .then( (data) => this.setState({students: data}))
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

   
    onSearchChange = (startYear, endYear, Level, specility) =>{
        console.log('parent component'+startYear,endYear , Level , specility );
       
        fetch(`http://localhost:3000/studentlist?startyear=${startYear}&endyear=${endYear}
        &level=${Level}&specialtyName=${specility}`)
        .then(response => response.json())
        .then( (data) => this.setState({students: data}));

        this.changeState(startYear,endYear, Level,specility);

      }

      changeState = (sYear, eYear, level, Speciality) =>{
        this.setState({
            endyear : eYear
        })
            console.log('chaging state'+ sYear, eYear,level,Speciality);
            console.log('changed' + this.state.endyear);
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
                        <SearchStudent toggleSearch={this.toggleSearch}  onSearchChange={this.onSearchChange}/>
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
                    {this.state.students.length}
                    {this.state.students.level}
                    <StudentCard Students={this.state.students} search={this.onSearchChange}/>

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