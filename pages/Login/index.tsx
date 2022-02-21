import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/user'
import { Checkbox, FormControlLabel } from '@mui/material';
import Styles from '../../styles/Login.module.css'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Login: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  
  const handleLogin = () => {
    dispatch(login({email:email, password: password}))
  }

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)
  const [active, setActive] = useState({
    buttonOne : false,
    buttonTwo : false,
    buttonThree : false
  })

  const CarouselImage = active.buttonOne? './LoginImage.png' : active.buttonTwo? './leeds.jpg' : './LoginImage.png'

  return (
    <div className='flex justify-start overflow-hidden'>
        <div className={`${Styles.Background} flex flex-col items-start justify-start h-screen`}>
            <div className='p-5'>
              <img src='./Logo.svg' alt='Logo' className='max-w-full' />
            </div>
            <div className='flex justify-center items-center w-full relative py-3'>
              <div className={Styles.Circle}></div>
              <object data={CarouselImage} className={`${Styles.Image} max-h-64`}/>
            </div>
            <div className={`flex flex-wrap mx-auto text-center mt-5 ${Styles.CarouselText}`}>
              <h6 className='text-xs md:text-lg mx-auto font-medium'>Gain visibility into your roles and control 
                  over your permissions</h6>
              <div className='flex justify-center items-center mt-4 mx-auto'>
              <button 
              className={active.buttonOne? `${Styles.ActiveCarousel}` : Styles.Carousel} 
              onClick = {() =>  setActive({buttonTwo : false, buttonThree : false, buttonOne : true})} >
              </button>
              <button 
              className={active.buttonTwo? `${Styles.ActiveCarousel} ml-2` : `${Styles.Carousel} ml-2`} 
              onClick = {() =>  setActive({buttonOne : false, buttonThree : false, buttonTwo : true})} >
              </button>
              <button 
              className={active.buttonThree? `${Styles.ActiveCarousel} ml-2` : `${Styles.Carousel} ml-2`} 
              onClick = {() =>  setActive({buttonOne : false, buttonTwo : false, buttonThree : true})}>
              </button>
              </div>
            </div>
        </div>
        <div className='flex flex-col h-screen flex-1'>
          <div className='p-5 ml-auto text-xs md:text-base'>
            Need Help? <a className={`${Styles.Link} no-underline hover:${Styles.Link} cursor-pointer`}>Contact us.</a>
          </div>
          <div className='mt-5 flex flex-col justify-center items-center'>
            <h6 className='text-sm md:text-2xl'>Login to your account</h6>
            <h6 className={`${Styles.Text} text-xs md:text-sm pt-2`}>Lorem Ipsum is simply dummy text of the printing</h6>
          </div>
          <div className='flex flex-col py-4 px-6 lg:px-16 xl:px-44'>
            <label htmlFor='email' className='font-semibold text-xs md:text-base'>Email ID* </label>
            <Input 
            type='email' 
            style={`${Styles.Input} mt-2 w-40 text-xs md:text-base md:w-auto`} 
            placeholder = 'someone@gmail.com' 
            id='email'
            required={true}
            onChange = {(e) => setEmail(e.target.value)}
            value = {email}
            />
            <label htmlFor='password' className='font-semibold pt-3 text-xs md:text-base'>Password* </label>
            <Input 
            type='password' 
            style={`${Styles.Input} mt-2 w-40 text-xs md:text-base md:w-auto`} 
            placeholder = '**************' 
            id='email'
            required={true}
            onChange = {(e) => setPassword(e.target.value)}
            value = {password}
            />
            <div className='flex justify-between mt-2 flex-wrap'>
              <div>
                <FormControlLabel 
                control={<Checkbox onClick={() => setChecked(!checked)} />} 
                label={<span className='text-xs'>I agree to the <a className={Styles.Link}>Terms & Conditions</a></span>}
                />
              </div>
              <div className='ml-2 md:ml-auto self-center'>
                <FormControlLabel control={<></>} label={<a className={`text-xs cursor-pointer ${Styles.Link}`}>Forgot Password</a>} />
              </div>
            </div>
            <Button execFunction={() => handleLogin()} text = {'Login'} style='mt-5 sm:text-xs md:text-lg font-semibold' />
          </div>
          <div className='mb-5 mt-auto ml-auto mr-auto'>
            <span className={`${Styles.Text} text-xs`}>@2022 EasyAudit. All Rights Reserved</span>
          </div>
        </div>
    </div>
  )
}

export default Login
