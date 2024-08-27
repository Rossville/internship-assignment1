import {useState} from 'react';

const Dropdown = ({dropdownContent}) => {

    const [dropdowndata,setDropdownData] = useState(dropdownContent);

    const clearData = () => {
        setDropdownData([{}]);
    }
    return(
        <div className='bg-red mx-6 '>
            <div className="flex justify-between">
                <div className="text-lg">Refine by</div>
                <div className="text-blue-600">
                    <button onClick={clearData}>Clear</button>
                </div>
            </div>
            { 
              dropdowndata.map((value,idx)=>{
                    return (
                        <div key={idx} className="flex border-b-2 cursor-pointer hover-dropdown justify-between">
                            <div className='dropdown'>{value.name}</div>
                            <div>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dropdown;