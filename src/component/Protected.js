import { Navigate,  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({children}) => {
  const user = useSelector((state)=>state.user)
  
  

  if (user === null) {
    return  <Navigate to= "/"/>
  } else {
    return children
  }
}

export default Protected


// const Protected = ({chidren}) => {
//     // destructure componet that is pass in this protected component ;
//     const {Componet} = props;
//     const nevigete = useNavigate();
//     useEffect(()=>{
//         let login = localStorage.getItem("login");
//         if(!login){
//             nevigete("/");
//         }
//     })
//   return (
//     <div>
//         <p> inside protected component</p>
//       <Componet/>
//     </div>
//   )
// }

// export default Protected
