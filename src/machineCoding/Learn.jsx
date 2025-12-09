import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'


const Learn = () => {

    const queryClient = useQueryClient();

    const { data:userData, error, isLoading } = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/users`)
            return res.json()
        },
        
    })

    const {mutate:addUser} = useMutation({
        mutationKey:['addUser'],
        mutationFn: async(newUser)=>{
            const res = await fetch(`http://localhost:5000/users`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newUser)
            })
            return res.json()
        },
        onSuccess:()=>{
            alert('User added successfully')
            queryClient.invalidateQueries(["users"]);
        }
    })
    const {mutate:deleteUser} = useMutation({
        mutationKey:['deleteUser'],
        mutationFn: async(userId)=>{
            const res = await fetch(`http://localhost:5000/users/${userId}`,{
                method:'DELETE',
            })
            return res.json()
        },
        onSuccess:()=>{
            alert('User deleted successfully')
            queryClient.invalidateQueries(["users"]);
        }
    })

    console.log("usres",userData);
    
  return (
    <div>
      {isLoading && <p>Loading...</p>}
        {error && <p>Error occurred: {error.message}</p>}
        {
            userData?.map((user)=><div key={user.id}>{user.name} <button onClick={() => deleteUser(user.id)}>delete</button></div>)
        }

        <button onClick={() => addUser({ name: 'New User' })}>Add User</button>
    </div>
  )
}

export default Learn
