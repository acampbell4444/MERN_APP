// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { useQuery } from '@apollo/client';
// import { CHECK_USER_CREDENTIALS } from '../../queries/userQueries';

// const SignIn = () => {
//     const { signUpEmailValue, signUpPasswordValue, signUpNameValue } = useSelector(state => state.auth)
//     console.log(911, signUpEmailValue, signUpPasswordValue, signUpNameValue)
//     const { loading, errors, data } = useQuery(CHECK_USER_CREDENTIALS, {
//         variables: {
//             email: 'EMAIL1',
//             password: 'PASSWORD1'
//         }
//     })

//  console.log(911, data)
//  console.log(912, errors)


// const handleSubmit = (e) => {
//     e.preventDefault();

// }


//     return (
//         <div>
//            SignIn Component
//            <button onClick={handleSubmit}>Sign In</button>

//         </div>
//     );
// };

// export default SignIn;
