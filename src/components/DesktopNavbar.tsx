import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

async function DesktopNavbar() {

    const user = await currentUser();
    console.log("User is Here", user);
    
  return (
    <div>DesktopNavbar</div>
  )
}

export default DesktopNavbar