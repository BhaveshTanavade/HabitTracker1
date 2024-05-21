const deleteHabit= (habitId)=>{
    fetch(`/habits/${habitId}`,{
        method:"DELETE",
    })
    .then( response =>{
        if(!response.ok){
            throw new Error('Failed to delete habit');
        }
        location.reload();
    })
    .catch(error =>{
        console.error('Error deleting habit:', error);
    });
};