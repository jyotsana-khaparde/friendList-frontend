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
        margin: '4%', 
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
        borderRadius: 2
    },
    headingContainer: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '1%' 
    }
})

export default styles