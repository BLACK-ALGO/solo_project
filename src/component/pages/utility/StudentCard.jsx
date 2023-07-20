import { useState } from 'react';

const StudentCard = ({students}) =>{
    let i = 1;
    const [academicYear, setAcademicYear] = useState(null);
    // setAcademicYear(students[1].specialtyName)
    return(
        
        <div>
            
             <div className="t-font-size" >
                                        
                <div className="s-table">
                
                
                    <div className="flex justify-between m-auto">
                        <div className="s-left">
                            {/* <p>Field : <span>{students[1].specialtyName}</span></p> */}
                            {/* <p>Level : <span>{students[9].level}</span></p> */}
                            {/* <h2 className="d-name">{students[9].level}</h2> */}

                        </div>
                        <div className="top-table">
                            <img src={require('../../photos/school-logo.png')} alt="no logo" className="s-image"/>
                    <h2 className="text-center mean-heading">EVALUATION LIST</h2>

                        </div>
                        <div className="s-right">
                            <p className="mb-5">Academic Year : {academicYear}</p>
                            {/* <h2 className="d-name">{students[1].specialtyName}</h2> */}

                            
                        </div>
                    </div>
                
                

                </div>
                {/* Body  */}
                <div className="t-body">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={3}>
                                    <tr className="flex justify-between">
                                        <div className="flex">
                                       <div className="flex "> <td className="rectangle"></td> <span className="labels">CC</span></div>
                                       <div className="flex ml-3 "><td className="rectangle"></td> <span className="labels">TP</span></div>
                                       <div className="flex ml-3"><td className="rectangle"></td> <span className="labels">TPE</span></div>
                                       <div className="flex ml-3"><td className="rectangle"></td> <span className="labels">Exam</span></div>
                                       </div>
                                        <div className="flex">
                                            <span className="mr-3 labels">Session</span>
                                            <div>
                                            <td className="ml-2 s-border"></td> <h3  className="s-size">N</h3></div>
                                            <div className="ml-3">
                                            <td className="s-border"> </td><h3 className="s-size">R</h3></div>
                                        </div>
                                    </tr>
                                </th>
                                <th rowSpan={4} className="d-vertical oriented">Student's Signature</th>
                                <th rowSpan={4} className="d-vertical oriented">Number of Supplemtry Sheets</th>
                                <th rowSpan={4} className="d-vertical oriented">Anonymity</th>
                                <th rowSpan={4} className="d-vertical oriented">MARKS:...........</th>
                                <th rowSpan={4} className="d-vertical oriented">Observation</th>
                            </tr>
                            <tr>
                                <th colSpan={3} >
                                    <tr className="flex"><div> Course title: </div><div className="dash mt-5"></div></tr>
                                    <tr className="flex"><div>Lecturer's name: </div><div className="dash mt-5"></div></tr>
                                    <tr className="flex justify-around"> <div>Date of Evaluation: <span>....../...../.....</span></div> <div> Semester:.........</div></tr>
                                </th>
                                
                                
                            </tr>
                            <tr>
                                <th>N<sup>o</sup></th>
                                <th>Matricule</th>
                                <th>Name and Surname</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        { students.map(
                    student => 
                            <tr>
                                <td>{
                                    
                                    i++
                                    }</td>
                                <td>{student.matricule}</td>
                                <td>{student.studName}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                    
                </div>
                {/* Table Middle */}
                <div className="centre">
                    <h2 className="borde">Hall:............... from n<sup><span>o</span></sup>...........to n<sup>o</sup>..............</h2>
                </div>
                {/* bottom table  */}
                <div>
                    <table >
                        <tr>
                            <td className="w-1/3">
                                <div> <tr><p className="mr-5">Number of Students Register</p> <td className="rect ml-2"> </td></tr></div>
                            </td> 
                            <td rowSpan={5} className="align-top"> Invigilator Report:</td> 
                        </tr>
                        <tr>
                            <td className="w-1/3">
                                <div> <tr><p className="mr-5">Number of Students present</p> <td className="rect ml-2"> </td></tr></div>
                            </td> 
                        </tr>
                        <tr>
                            <td className="w-1/3">
                                <div> <tr><p className="mr-5">Number of Students absent</p> <td className="rect ml-2"> </td></tr></div>
                            </td> 
                        </tr>
                        <tr>
                            <td className="w-1/3">
                                <div> <tr><p className="mr-20">Student absent (n<sup>o</sup>)</p> <td className="rect ml-5"> </td></tr></div>
                            </td> 
                            
                        </tr>
                        <tr> 
                            <td className="w-1/3">
                                <div> <tr><p className="mr-5">Number of copies deposited </p><td className="rect ml-3"> </td></tr></div>
                            </td> 
                        </tr>
                    </table>
                </div>
                <div className="mt-3">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Name of signature of invigilators
                                </th>
                                <th>
                                    Name and signature of anonymator
                                </th>
                                <th>
                                    Name and signature of marker
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td>1</td>
                               <td>.................................................</td>
                               <td>.................................................</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Date:......................</td>
                                <td>Date:......................</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                
       

                
                </div>
            
        </div>
    )
}

export default StudentCard;