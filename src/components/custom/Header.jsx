import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json',
      },
      mode: "no-cors",
    }).then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data));
      setUser(resp.data);
      setOpenDialog(false);
    }).catch(error => console.log(error));
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('user'); // Only remove user data
    setUser(null);
    window.location.reload();
  };

  return (
    <div className='w-full p-3 shadow-sm flex justify-between items-center px-5'>
      <a href='/create-workout'>
      <img src='/logoipsum-226.svg' alt="App Logo" />
      </a>

      <div>
        {user ? (
          <div className='flex items-center gap-3'>
            <a href='/create-workout'>
            <Button variant="outline" className="rounded-full text-black">+ Create Workouts</Button>
            </a>
            <a href='/my-workouts'>
            <Button variant="outline" className="rounded-full text-black">My Workouts</Button>
            </a>
            <Popover>
              <PopoverTrigger className='bg-transparent rounded-full'>
                <img className='h-[35px] w-[35px] rounded-full' src={user?.picture} alt="User Profile" />
              </PopoverTrigger>
              <PopoverContent className="p-2">
                <h2 className='cursor-pointer text-red-500 font-medium hover:underline' onClick={handleLogout}>
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      {/* Login Dialog */}
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
  );
}

export default Header;
