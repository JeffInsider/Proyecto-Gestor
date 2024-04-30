import { useContext, useEffect, useState } from 'react';
import { Folders } from '../components/Folders';
import Modal from '../components/Modal';
import { Navbar } from '../components/Navbar';
import { getFolders } from '../helpers/getFolders';
import { AuthContext } from '../context/index';
import { FolderItem } from '../components/FolderItem';

export const FilePage = () => {

  const [ folders, setFolders ] = useState([]);
  const { refreshToken } = useContext(AuthContext);

  const allFolders = async () => {

    const { data } = await getFolders();
    setFolders(data);

  };

  useEffect(() => {

    refreshToken();
    allFolders();

  }, []);

  const onAddFolder = (folder) => {

    setFolders([...folders, folder]);

  };

  return (
    <>
      <div>
        <Navbar onNewFolder={ onAddFolder } />
      </div>

      {/* <Folders folders={ folders } /> */}

      <div key="items" className="grid grid-cols-5 gap-5">

        { 
          folders.map((folder) => (
            <FolderItem key={ folder.id } { ...folder } />
          ))
        }

      </div>     
    </>
  );
}

