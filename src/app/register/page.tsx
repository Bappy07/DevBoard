export default function RegisterPage(){
    return (
        <form >
            <input type="text" 
            placeholder="Username" 
            />
            <input type="email" 
            placeholder="Email" 
            />
            <input type="password" 
            placeholder="Password" 
            />
            <button type="submit">Register</button> 
        </form>
    );
}