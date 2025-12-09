import React, { useState } from "react";

const FolderStructure = ({ folderData }) => {
  const [newFolderData, setNewFolderData] = useState(folderData);
  const [show, setShow] = useState(false);
  const [addNew, setAddNew] = useState({
    isVisible: false,
    isFolder: null,
  });

  const handleAddNew = (isFolder) => {
    setAddNew({
      isVisible: true,
      isFolder: isFolder,
    });
  };

const onKeyDown=(e)=>{  
  if(e.key === "Enter" && e.target.value){
    const newIndexes = [...newFolderData.indexes];
    const newData = {
      id: Date.now(),
      name: e.target.value,
      indexes: [],
      isFolder: addNew.isFolder,
    };
    newIndexes.unshift(newData);
    setNewFolderData({
      ...newFolderData,
      indexes: newIndexes,
    });
    setAddNew({
      isVisible: false,
      isFolder: null,
    });
    setShow(true);
  }
}

  return (
    <div>
      {newFolderData.isFolder ? (
        <div>
          {!addNew.isVisible ? (
            <div style={{ display: "flex" }}>
              <p onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
                📁{newFolderData.name}
              </p>
              <button onClick={() => handleAddNew(true)}>add Folder</button>
              <button onClick={() => handleAddNew(false)}>add File</button>
            </div>
          ) : (
            <input onBlur={()=>setAddNew({isVisible:false,isFolder:null})} autoFocus onKeyDown={(e)=>onKeyDown(e)} />
          )}
          {newFolderData.indexes.map((data) => (
            <div
              key={data.id}
              style={{ paddingLeft: "10px", display: show ? "block" : "none" }}
            >
              <FolderStructure folderData={data} />
            </div>
          ))}
        </div>
      ) : (
        <div>📄{newFolderData.name}</div>
      )}
    </div>
  );
};

export default FolderStructure;
