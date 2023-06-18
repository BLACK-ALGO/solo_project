import React, { Component } from "react";
import ReactToPrint from 'react-to-print';


export class Results extends Component{
    constructor(props){
        super(props);
        this.state={
            resiltSlip:[]
        };
        this.handlePrint = this.handlePrint.bind(this);
    }

    handlePrint() {
        this.componentRef.onPrint();
      }
    render(){
        return(
            <div className="">
                <div className="flex justify-around">
                    <button onClick={this.toggleModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Fill Marks
                    </button>
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Get Specific Results
                    </button>
                </div>
                <div className="scrol-div">
                    {/* Table start for results */}
                    <div className="t-font-size" ref={el => (this.componentRef = el)}>
                        <div className="s-table ">
                            {/* head of form */}
                        <div className="flex justify-around r-text-align r-border-botom">
                        <div className="s-left r-text-align ">
                            <h3>REPUBLIC OF CAMEROON</h3>
                            <p><i>Peace-Work-Fatherland</i></p>
                            <p>***************</p>
                            <h4>MINISTRY OF HIGHER EDUCATION</h4>
                            <p>***************</p>

                            <h4>BILINGUAL SUB-REGIONAL UNIVERSITY INSTITUTE AGENLA ACADEMY, YAOUNDE</h4>
                            <p><i>Professionalism-Excellence-Intergrity</i></p>

                        </div>
                        <div className="">
                            <img src={require('../photos/school-logo.png')} className="r-image" />

                        </div>
                        <div className="s-right r-text-align">
                            <h3>REPUBLIQUE DU CAMEROUN</h3>
                            <p><i>Paix-Travail-Patrie</i></p>
                            <p>***************</p>
                            <h4>MINISTRE DE L'ENSEIGNEMENT SURPERIEUR</h4>
                            <p>***************</p>

                            <h4>INSTITUTE UNIVERSITAIRE SOUS-REGIONAL BILENGUE AGENLA ACADEMY, YAOUNDE</h4>
                            <p><i>Professionalisme-Excellence-Intergrite</i></p>

                        </div>
                    </div>
                    {/* end of heasder */}
                    {/* ----------------------------------------------------------------------------- */}
                    {/* Middle of the form */}
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <div>
                                <tr className="r-text-middle">
                                    <p>Academic Year: <span className="ml-7">2020-2023</span></p>
                                    <p><i>Annee Accademique</i></p>
                                </tr>
                                <tr className="r-text-middle ">
                                    <p>Field: <span className="ml-7 mt-1">computer engineer</span></p>
                                    <p>Speciality: <span className="ml-7">network admin</span></p>

                                </tr>
                            </div>
                            <div>
                                <tr className="r-text-middle">
                                    <p>Semester: <span  className="ml-7">6</span></p>
                                    <p><i>Semestre: </i></p>
                                </tr>
                                <tr className="r-text-middle">
                                    <p>Level: <span className="ml-7"> Bachelor 3</span></p>
                                    <p><i>Niveau</i></p>
                                </tr>
                            </div>
                        </div>
                        {/* part 2 of middle */}
                        <div className="flex justify-center ">
                        <div className="">
                            <tr className="r-part-2">
                                <td>
                                    <p><b>Course Title:  <span className="ml-7">French</span></b></p>
                                    <p><i>Intitule de l'UE: </i></p>
                                </td>
                                <td>
                                    <p><b>Course Code: <span className="ml-7">SWE365</span></b></p>
                                    <p><i>Code: </i></p>
                                </td>
                                <td>
                                    <p><b>Credits: <span className="ml-7">2</span> </b></p>
                                    <p><i>Credits: </i></p>
                                </td>
                                
                            </tr>
                        </div>
                        </div>
                        {/* part 2 end */}
                        <h1 className="r-txt-bold center">RESULTS AT THE END OF THE NORMAL SESSION</h1>
                        <div className="flex justify-center mt-5">
                        <div className="w-table">
                            <table className="w-76">
                                <tr>
                                    <td rowSpan={3}><b>Statistics</b></td>
                                    <td className="flex"><p>Headcount:</p> <p className="txt-end ml-8">5</p></td>
                                </tr>
                                <tr >
                                    <td className="flex"><p>Success rate: </p> <p className="txt-end ml-8">5</p></td>
                                </tr>
                                <tr>
                                    <td className="flex"><p>Number {'>'}= 45/100 : </p> <p className="txt-end ml-8">5</p></td>
                                </tr>
                            </table>
                        </div>
                        </div>

                    </div>
                                {/* end of middle */}

                        {/* main table */}
                        <div className="mt-5">
                            <table className="">
                                <thead>
                                    <tr>
                                        <th rowSpan={3}>Matricule Number</th>
                                        <th rowSpan={3}>
                                            <p>Names and Surnames</p>
                                            <p>Noms et Prenoms</p>
                                        </th>
                                        <th>CA + P</th>
                                        <th>Exam</th>
                                        <th rowSpan={3}>Tot/100</th>
                                        <th rowSpan={3} className="oriented d-vertical">Grade</th>
                                        <th rowSpan={3}>Qual Point</th>
                                        <th rowSpan={2}>Point Acc</th>
                                        <th rowSpan={3}>Appreciation</th>
                                        <th rowSpan={3}>Credit Capitalize</th>
                                        <th rowSpan={3} className="oriented d-vertical">Session [N] or [R]</th>
                                    </tr>
                                    <tr>
                                        <th>20.00</th>
                                        <th>20.00</th>
                                    </tr>
                                    <tr>
                                        <th>30.00%</th>
                                        <th>90.00%</th>
                                        <th>0.75</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>10</td>
                                        <td>11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        </div>
                    </div>
                    <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => <button onClick={this.handlePrint} type="submit" className="mt-5 bg-blue-500  text-white font-bold py-2 px-4 rounded-full">Print List</button>}
                 />
                </div>
                {/* end scroll */}
            </div>
        )
    }
}