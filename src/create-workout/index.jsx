import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { AI_PROMPT,GEMINI_PROMPT, SelectDailyActivity, dailyroutine, genderselect } from '@/constants/options'
import { Button } from '@/components/ui/button'
import { toast } from "sonner";
import { chatSession } from '@/service/AIModel';
import { FcGoogle } from "react-icons/fc";
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '@/service/firebaseConfig'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Footer from '@/view-workout/components/footer';


function CreateWorkout() {

  const [formData, setFormData] = useState([]);


  const [openDialog, setOpenDialog]=useState(false);


  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleInputChange=(name, value)=>{
    setFormData({
    ...formData,
    [name]:value
    })
  }

  useEffect(()=>{
  },[formData])


  const login = useGoogleLogin({
    onSuccess:(codeResp)=>GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const onGenerateFitnessPlan=async()=>{

        const user = localStorage.getItem('user');

        if(!user)
        {
            setOpenDialog(true);
            return;
        }

        if(!formData?.age||!formData?.gender||!formData?.height||!formData?.weight||!formData?.activity||!formData?.routine||!formData?.sleep)
        {
            toast("Please fill all the details")
            return;
        }    

        setLoading(true);
        const FINAL_PROMPT = GEMINI_PROMPT
        .replace('{gender}',formData?.gender)
        .replace('{age}',formData?.age)
        .replace('{height}',formData?.height)
        .replace('{weight}',formData?.weight)
        .replace('{activity}',formData?.activity)
        .replace('{routine}',formData?.routine)
        .replace('{sleep}',formData?.sleep)

        const result = await chatSession.sendMessage(FINAL_PROMPT);

        if (result && result.response?.candidates?.length > 0) {
            let responseText = null;

            for (const candidate of result.response.candidates) {
                if (candidate?.content?.parts?.length > 0) {
                    for (const part of candidate.content.parts) {
                        if (part.text) {
                            responseText = part.text;
                            break;
                        }
                    }
                }
            }

            if (responseText) {
                // Remove the ```json and ``` wrapper
                const jsonString = responseText.replace(/```json/g, "").replace(/```/g, "").trim();

                try {
                    const fitnessPlan = JSON.parse(jsonString);
                    console.log("Parsed Fitness Plan:", fitnessPlan);
                    setLoading(false);
                    SaveFitnessPlan(fitnessPlan);
                    
                } catch (jsonError) {
                    console.error("Error parsing JSON response:", jsonError);
                }
            } else {
                console.error("No valid text response found.");
            }
        } else {
            console.error("No valid response from Gemini API");
        }
    }

  const SaveFitnessPlan=async(FitnessData)=>{

    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId=Date.now().toString()
    await setDoc(doc(db, "FitnessData", docId), {
        userSelection: formData,
        fitnessData: FitnessData,
        userEmail: user?.email,
        userPic: user?.picture,
        userName: user?.given_name,
        id:docId
      });
      setLoading(false);
      navigate('/view-workout/'+docId)
  }

  const GetUserProfile=(tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
        headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'Application/json'
        },
        mode: "no-cors",
    }).then((resp)=>{
        localStorage.setItem('user',JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateFitnessPlan();
    })
  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your workout and diet preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information and our fitness planner will generate a customized itinery based on your preferences.</p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
            <h2 className='text-xl my-3 font-medium'>What is your age?</h2>
            <Input placeholder={'Ex.22'} type='number' onChange={(e)=>handleInputChange('age',e.target.value)}></Input>
        </div>

        <div>
            <h2 className='text-xl my-3 font-medium'>What is your Gender?</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                    {genderselect.map((item,index)=>(
                        <div key={index} onClick={()=>handleInputChange('gender', item.title)} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 ${formData?.gender==item.title&&'shadow-lg border-black'}`}>
                            <h2 className='text-4xl'>{item.icon}</h2><br/>
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                        </div>
                    ))}
                </div>
        </div>

        <div>
            <h2 className='text-xl my-3 font-medium'>What is your height?</h2>
            <Input placeholder={'Ex.178cm'} type='number' onChange={(e)=>handleInputChange('height',e.target.value)}></Input>
        </div>

        <div>
            <h2 className='text-xl my-3 font-medium'>What is your weight?</h2>
            <Input placeholder={'Ex.65kg'} type='number' onChange={(e)=>handleInputChange('weight',e.target.value)}></Input>
        </div>

        <div>
            <h2 className='text-xl my-3 font-medium'>What is your daily activity level?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {SelectDailyActivity.map((item,index)=>(
                    <div key={index} onClick={()=>handleInputChange('activity', item.desc)} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 ${formData?.activity==item.desc&&'shadow-lg border-black'}`}>
                        <h2 className='text-4xl'>{item.icon}</h2><br/>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h2 className='text-xl my-3 font-medium'>What is your daily routine?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 '>
                {dailyroutine.map((item,index)=>(
                    <div key={index} onClick={()=>handleInputChange('routine', item.title)} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 ${formData?.routine==item.title&&'shadow-lg border-black'}`}>
                        <h2 className='text-4xl'>{item.icon}</h2><br/>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h2 className='text-xl my-3 font-medium'>How many hours do you sleep on average per night?</h2>
            <Input placeholder={'Ex.8hrs'} type='number' onChange={(e)=>handleInputChange('sleep',e.target.value)}></Input>
        </div>
        
        <div className='my-10 justify-end flex'>
            <Button disabled={loading} onClick={onGenerateFitnessPlan}>
                {loading?<AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' />:'Generate Fitness Plan'}
            </Button>
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>          
                  <DialogHeader className="text-center">
                  </DialogHeader>
        
                  <DialogDescription className="text-center">
                    <img src='/logoipsum-226.svg' className="mx-auto mb-4" alt="Logo" />
                    <p className="font-bold text-lg">Sign In With Google</p>
                    <p className="text-gray-600">Sign in to the App with Google Authentication securely</p>
                    <Button onClick={login} className="w-full mt-5 flex gap-4 items-center bg-gray-900 hover:bg-gray-700 text-white">
                      <FcGoogle className="h-7 w-7" /> Sign In with Google
                    </Button>
                  </DialogDescription>
                </DialogContent>
        </Dialog>

      </div>

      <Footer/>
      
    </div> 

    
  )

}

export default CreateWorkout
