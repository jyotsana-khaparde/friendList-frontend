const styles = () => ({
    search: {
        border: '1px solid black',
        width: 300,
        background: 'white',
        borderRadius: 20,
        borderColor: '#bcc1bc',
        boxShadow: '2px 1px 32px -15px'
    },
    searchIcon: {
        margin: '0px 5px 0px 8px',
        color: 'black'
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    container: { 
        margin: '5%', 
        border: '1px solid #f3f0f0' 
    },
    header: { 
        background: '#ece9e9', 
        padding: 10, 
        textAlign: 'left', 
        fontWeight: 'bold' 
    },
    input: {
        width: 300,
        border: '1px solid #bcc1bc',
        borderRadius: 2,
        boxShadow: '2px 1px 32px -15px'
    },
    headingContainer: { 
        display: 'flex', 
        justifyContent: 'space-evenly', 
        margin: '1% 0 1% 0%' 
    },
    deleteButton: {
        padding: 5, 
        borderRadius: 5, 
        background: 'whitesmoke', 
        color: 'black', 
        margin: 3 
    },
    starButton: {
        padding: 5, 
        borderRadius: 5, 
        background: 'whitesmoke', 
        color: 'black', 
        margin: 3 
    },
    favorite: {
        padding: 5, 
        borderRadius: 5, 
        background: '#f7e95d', 
        color: 'black', 
        margin: 3
    },
    listContainer: {
        display: 'flex',
        margin: '0px 230px 0px 230px',
        padding: 10,
        justifyContent: 'space-between',
        border: '1px solid #d2cdcd',
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        fontWeight: 500
    },
    info: {
        fontSize: 14,
        color: 'gray'
    },
    paginationContainer: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageNumber: {
        border: '1px solid grey',
        padding: 10,
        borderRadius: 15,
        margin: 3
    },
    activePageNumber: {
        border: '1px solid grey',
        padding: 10,
        borderRadius: 15,
        margin: 3,
        background: '#3f51b5',
        color: 'white',
        fontWeight: 'bold',
    }
})

export default styles