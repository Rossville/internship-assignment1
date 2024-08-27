import Filter from "./filter";

const Parent = () => {

    const dropdownContent = [
        {
            name : 'Date of Resigning'
        },
        {
            name : 'Vendor Score'
        },
        {
            name : 'Rating'
        },
        {
            name : 'Status'
        },
        {
            name : 'Type of Business'
        },
        {
            name : 'Location'
        },
        {
            name : 'Assign to'
        }
    ];

    return(
        <>
            <Filter buttonname="Filter" dropdownContent={dropdownContent}/>
        </>
    )
}

export default Parent;