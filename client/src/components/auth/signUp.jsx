// import React, {useEffect} from 'react';
// import { CREATE_USER } from '../../mutations/userMutations';
// import { useMutation } from '@apollo/client';
// import { useSelector, useDispatch } from 'react-redux'
// import { Box, FormControl, Input, InputLabel, Button } from '@mui/material';
// import { updateSignUpNameValue, updateSignUpEmailValue, updateSignUpPasswordValue, resetSignupValues } from '../../redux/slices/signUpSlice';

// const Signup = () => {

//     useEffect(() => () => dispatch(resetSignupValues()), [])

//     const { signUpEmailValue, signUpPasswordValue, signUpNameValue } = useSelector(state => state.signUp)
//     const dispatch = useDispatch()
//     const [createUser] = useMutation(CREATE_USER)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         createUser(
//             {
//                 variables: {
//                     name: signUpNameValue,
//                     email: signUpEmailValue,
//                     password: signUpPasswordValue
//                 }
//             })
//             .then(res => {
//                 console.log('succes', res)
//                 //show success message with link to login
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     return (
//         <Box>

//             <FormControl variant="standard" fullWidth>
//                 <InputLabel htmlFor="signup_name">Name</InputLabel>
//                 <Input
//                     id="signup_name"
//                     value={signUpNameValue}
//                     onChange={e => dispatch(updateSignUpNameValue(e.target.value))}
//                 />
//             </FormControl>

//             <FormControl variant="standard" fullWidth>
//                 <InputLabel htmlFor="signup_email">Email</InputLabel>
//                 <Input
//                     id="signup_email"
//                     value={signUpEmailValue}
//                     onChange={e => dispatch(updateSignUpEmailValue(e.target.value))}
//                 />
//             </FormControl>

//             <FormControl variant="standard" fullWidth>
//                 <InputLabel htmlFor='signup_password'>Password</InputLabel>
//                 <Input
//                     id="signup_password"
//                     value={signUpPasswordValue}
//                     onChange={e => dispatch(updateSignUpPasswordValue(e.target.value))}
//                 />
//             </FormControl>

//             <Box sx={{ m: 2 }} />

//             <Button
//                 variant="outlined"
//                 onClick={handleSubmit}
//             >
//                 Signup
//             </Button>

//         </Box>
//     );
// };

// export default Signup;
