"use client"
import React, { useEffect, useState } from 'react'
import { drives, fetchDriveInfo } from './drives'
import { FolderWithIcon } from './folderWithIcon';
import { fetchDrive } from '@/lib/fetchDrive';
import { FileWithIcon } from './fileWithIcon';

export default function FolderView({accessToken,driveName,drivePath}:{accessToken:string,driveName:string,drivePath:string}) {
    const [folders, setFolders] = useState<{name:string,folder:{childCount:number},file:{}}[]>();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [drive, setDrive] = useState();
  
    useEffect(() => {
      const fetchDrives = async () => {
        try {
          const driveInfoPromises = drives.map(drive =>  fetchDriveInfo(drive, accessToken));
          const results = await Promise.all(driveInfoPromises);
          const drive = results.filter((e)=>e.name == driveName)[0];
          if(drive){
            setDrive(drive);


            let path = drive.parentReference.path + "/" + drivePath;
            const a = await fetchPath(path,accessToken)
            setFolders(a.children);
            

          }else{
            throw new Error("The Drive doesn't exit!");
            
          }
          
          
        } catch (err:any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDrives();
    }, [accessToken]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    
    if(folders){
        const onlyFolders = folders.filter((e)=>e.folder);
        const onlyFiles = folders.filter((e)=>e.file);
        return (

            <div className='flex flex-col gap-2 max-w-[40rem]'>
                {onlyFolders.map((folder, index) => (
                    <>
                        <FolderWithIcon key={index} name={folder.name} toPath={"/docs/" + drivePath + "/" + folder.name} />
                    </>
                ))}
                {onlyFiles.map((folder, index) => (
                    <>
                        <FileWithIcon key={index} name={folder.name} toPath={"/docs/" + drivePath + "/" + folder.name} file={folder} />
                    </>
                ))}
            </div>
        );
    }
    return (
        <div>Folder is empty</div>
    )
}


async function fetchPath(path:string,accessToken:string)  {
    const url = `https://graph.microsoft.com/v1.0${path}/?$expand=children&$select=folder,file,name,children`
    try {
        const response = await fetchDrive(url,accessToken);
        // console.log(response);
        return response;
        
    } catch (error) {
        // console.log("eeee", error);
        throw error
    }
}