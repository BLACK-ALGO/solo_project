import React, { Component } from "react";

export class AddLecture extends Component{
    constructor(props) {
        super(props);
        this.state={
            lec_name:'',
            lec_img: '',
            lect_Number: '',
            lect_email: ''
            
        }
        
    }

    onLecNameChannge = (event) =>{
        this.setState({
            lec_name: event.target.value
        })
    }

    onLecImgChannge = (event) =>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            this.setState({
            lec_img: reader.result
        });
        };
        console.log(this.state.lec_img);

        
    }

    onLecNumberChannge = (event) =>{
        this.setState({
            lect_Number: event.target.value
        })
    }

    onLecEmailChannge = (event) =>{
        this.setState({
            lect_email: event.target.value
        })
    }


    AddLecture = ()=>{
        // const fd =  new FormData();
        // fd.append('image', this.state.lec_img, this.state.lec_img.name)
        
        console.log(this.state.lec_img);

        fetch('http://localhost:3000/addlecture',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                lecname: this.state.lec_name,
                lecimg: this.state.lec_img,
                lecnumber: this.state.lect_Number,
                lecemail: this.state.lect_email
            })
        })
        console.log();
    }


    render(){
        return(
            <div className="modal mar">
                <div className="overlay" onClick={this.props.toggleLecModal}></div>
                <div className="modal-content">
                    <h2 className="student-heading">Add New Lecture</h2>
                    {/* form start */}
                    <div className="m-5 scrol-s-form">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="col-span-full">
                                      <label for="lecture-name" className="block text-sm font-medium leading-6 text-gray-900 left-aligment">Lecture name</label>
                                      <div className="mt-2">
                                        <input onChange={this.onLecNameChannge} type="text" name="lecture-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>

                                <div className="col-span-full">
                                    <label for="lecture-image" class="block text-sm font-medium leading-6 text-gray-900 left-aligment">Lecture Image</label>

                                <div className="mt-2">
                                          <div className="flex items-center justify-center w-full image-height">
                                            <label for="lecture-image" class="flex flex-col items-center justify-center w-full left-aligment border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input  onChange={this.onLecImgChannge} id="lecture-imagee" name="lecture-image" type="file" className="" />
                                            </label>
                                          </div> 
                                          <img className="lect_img_prview" src={this.state.lec_img} alt="" srcset="" />
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="lecture-number" className="block text-sm font-medium left-aligment leading-6 text-gray-900">Phone Number</label>
                                      <div className="mt-2">
                                        <input onChange={this.onLecNumberChannge} type="text" name="lecture-number" id="lecture-number" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>

                                <div className="col-span-full">
                                      <label for="lecture-email" className="block text-sm font-medium leading-6 left-aligment text-gray-900">Email</label>
                                      <div className="mt-2">
                                        <input onChange={this.onLecEmailChannge} type="email" name="lecture-email" id="lecture-email" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                      </div>
                                </div>

                                


                            </div>
                        </div>
                            
                    </div>
                    <button onClick={this.AddLecture} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Save</button>

                    {/* End start */}


                    <button className="close-modal" onClick={this.props.toggleLecModal}>Close</button>
                </div>

            </div>
        )
    }
}