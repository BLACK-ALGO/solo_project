import React, { Component } from "react";
import { AddField } from "../modals/fieldOfStudy/AddField";

export class FieldStudy extends Component{
    constructor(){
        super();
        this.state={
            Fieldmodal: false,
            searchField: false,
            fields:[]
        }


        
    }

    toggleFieldModal = () =>{
        this.setState({
            Fieldmodal : !this.state.Fieldmodal
        })
    }

    deleteField = async (fieldname) =>{
        console.log(fieldname);
        try {
            await fetch(`http://localhost:3000/deletefield/${fieldname}`,{
                method: 'DELETE'
            })
        } catch (error) {
            console.log({error, msg:'Unable to delete'});
        }

    }

    componentDidMount(){
        fetch('http://localhost:3000/getfield')
        .then(response => response.json())
        .then((data) =>this.setState({fields: data}))
        // console.log(this.state.fields[0]);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fields !== this.state.fields) {
            fetch('http://localhost:3000/getfield')
            .then(response => response.json())
            .then((data) =>this.setState({fields: data}))
        }
      }

    render(){
        const {fields} = this.state;
        return(
            <div>
                {
                    this.state.Fieldmodal && (
                        <AddField  toggleFieldModal={this.toggleFieldModal}/>
                    )
                }

                <div className="flex justify-around mb-5">
                    <button onClick={this.toggleFieldModal}  
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add  Fields Of Studies
                    </button>
                    <button  onClick={this.toggleSearch}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded">
                        Search For Fields
                    </button>
                </div>
                <div className="scrol-div">
                    
<div class=" overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Field Name
                </th>
                <th scope="col" class="px-6 py-3">
                    School Study
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
                
            </tr>
        </thead>
        <tbody>{fields.map( field =>
            <tr key={field.objectID} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <td class="px-6 py-4">
                {field.fieldName}

                </td>
                <td class="px-6 py-4">
                {field.hName}

                </td>
                <td class="px-6 py-4">
                   {field.fieldDescription}

                </td>
                <td class="px-6 py-4 text-right btn_flex">
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline
                    edit_btn
                    
                    ">Edit</button>
                        <button onClick={() =>{this.deleteField(field.fieldName)}}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline delete_btn">Delete</button>
                </td>
            </tr>
            )}
        </tbody>
    </table>
</div>

                </div>
            </div>
        )
    }
}