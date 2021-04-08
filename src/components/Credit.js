
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext";
import { useEffect,useState } from "react";

const GetCredit=()=>{
    const { currentUser } = useAuth()
        const userRefCredit = firebase.database().ref('users/' + window.btoa(currentUser.email))
        const [currentCredit, setCurrentCredit] = useState(0)

        useEffect(() => {
            userRefCredit.child('credit').on('value', (snapshot) => {
                setCurrentCredit(snapshot.exportVal());
            })

        }, [currentCredit,userRefCredit])
        
        //return <div align="left" style={{ margin: 20 }}>Current credit: {currentCredit.toFixed(2)} $</div>
        return currentCredit.toFixed(2);
  
    
  }
  
  export default GetCredit;