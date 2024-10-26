"use client"
import React, { useEffect, useState } from 'react'
import { fetchDrive } from '@/lib/fetchDrive'
import { FolderWithIcon } from './folderWithIcon'

export const drives = [
    // "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvMjI0ODFhMDVmMl9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRW9pQ0VUUTlRTmxNdjFjSE91ZHliUU1CcXFrNVlBNlFmU05pbGdXV3JsY1d1Zw",
    // "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvMjI0ODFhMDVmMl9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRW9pQ0VUUTlRTmxNdjFjSE91ZHliUU1CU3JQWUFvd3ZyMFkzYV82M3R0TzJ0dw",
    // "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvMjI0ODFhMDVmMl9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRW9pQ0VUUTlRTmxNdjFjSE91ZHliUU1CcXFrNVlBNlFmU05pbGdXV3JsY1d1Zw", // cs moved
    "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvbGlicmFyeV9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRW5Xb2t4OFdRN3RJdGE3VDNoNlNhX1FCMjdvSnp2RDVFY0ZpQ1V5bklaQjNXZw",// IT
    "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvbGlicmFyeV9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRW1RMkROLTBWU0JNb0gyZkpiSmVOLWNCenhkRzdNZm5JS1JrZFd2Y1JYZEZVdw",
    "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvbGlicmFyeV9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRWpFZjh3RExhckJBbGlJMU1DcVRFd2NCUWVJUFJreWMzTl9oX1I5ZUNqeUxUQQ",
    "u!aHR0cHM6Ly9nZWNndWRsYXZhbGxlcnVtaWMtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvbGlicmFyeV9nZWNndWRsYXZhbGxlcnVtaWNfaW4vRXNma3pCakF1cVpIaUozZVNlMXBXTzBCaUZ3RWJYdUJRTVU3cDMxX2FucVNlZw",
]

export default function DrivesComponent({ accessToken }:{accessToken:string}) {
    const [folders, setFolders] = useState([{name:"oh",parentReference:{path:"/33"}}]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchDrives = async () => {
        try {
          const driveInfoPromises = drives.map(drive =>  fetchDriveInfo(drive, accessToken));
          const results = await Promise.all(driveInfoPromises);
          setFolders(results);
        } catch (err:any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDrives();
    }, [accessToken]);
  
    if (loading) {
      return <div>Loading Drives...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      
      <>
        {folders.map((folder, index) => (
          <FolderWithIcon key={index} name={folder.name} toPath={"/docs/"+folder.name}/>
        ))}
      </>
    );
  }


export async function fetchDriveInfo(shareId:string,accessToken:string)  {
    const url = `https://graph.microsoft.com/v1.0/shares/${shareId}/driveItem?$select=parentReference,name`
    try {
        const response = await fetchDrive(url,accessToken);
        // console.log(response);
        return response;
        
    } catch (error) {
        // console.log("eeee", error);
        throw error
    }
  }
