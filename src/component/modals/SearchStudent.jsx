import {GrClose} from 'react-icons/gr';
import{GoSearch} from 'react-icons/go';

 const SearchStudent = () =>{
    
    
        return(
            <div>
            <div className="modal">
                <div className="overlay" onClick={this.props.toggleSearch}></div>
                <div className="modal-search">
                    <div className="border-b border-gray-900/10 pb-12 flex">
                    <div className="sm:col-span-2">
                        <label for="emergency-number" class="block text-sm font-medium leading-6 text-gray-900">Starting Year</label>
                        <div class="mt-2">
                        <input type="search" name="emergency-number" id="emergency-number" 
                        autoComplete="emergency-number" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        /> 
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="emergency-number" class="block text-sm font-medium leading-6 text-gray-900">Ending  Year</label>
                        <div class="mt-2">
                        <input type="search" name="emergency-number" id="emergency-number" autoComplete="emergency-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="emergency-number" class="block text-sm font-medium leading-6 text-gray-900">Level</label>
                        <div class="mt-2">
                        <input type="search" name="emergency-number" id="emergency-number" autoComplete="emergency-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="emergency-number" class="block text-sm font-medium leading-6 text-gray-900">Speciality</label>
                        <div class="mt-2">
                        <input type="search" name="emergency-number" id="emergency-number" autoComplete="emergency-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    </div>
                    <div className="flex justify-center">
                        <buton className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " >Seacrh <GoSearch className="search-icon-size" size={25}/></buton>
                    </div>
                <buton className="close-modal ml-7" onClick={this.props.toggleSearch}><GrClose /></buton>
                </div>
            </div>
            </div>

        )
    }

    export default SearchStudent;