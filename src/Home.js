import React, { useState } from 'react';
import Modal from 'react-modal';
import video from './media/sampleVideo.mkv';
import { IconButton } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import "./Home.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      overflow: 'hidden',
    },
  };

//   const disableDelete = {
//     backgroundColor:'rgb(128,128,128,0.5)', 
//     borderRadius:"50%"
//   };

//   const activeDelete = {
//         color: 'white',
//         backgroundColor:'rgb(128,128,128,0.5)', 
//         borderRadius:"50%"
//   }

  Modal.setAppElement('#root');

function Home() {

    const [ record, setRecord ] = useState(true);
    const [ afterRecord, setAfterRecord ] = useState(true);

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div>
      <button className="btn btn-danger mt-5" onClick={openModal}>Talk Mail</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >        
        {/* Start from here...  */}
        <video style={{width:"320", height:"240", borderRadius:"10px"}} controls>  
            <source src={video} type="video/ogg"/>                         
        </video>
        {!afterRecord && 
                <IconButton className="play-icon" style={{marginTop:'-70vh', marginLeft: '-58vh', color:'white', backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <PlayArrowIcon style={{color:'white'}}/>
                </IconButton>}
        <div style={{marginTop: "-150px"}} className="d-flex justify-content-center">                  

                {/* {!afterRecord && <PlayArrowIcon style={{color:'white'}}/>} */}

            <div style={{color:'white', position: 'absolute',marginTop: "-25px"}}>
                {!record &&<p><small><FiberManualRecordIcon className="timerBall" /></small>00:04:27</p>}
            </div>
            <div>
                {afterRecord?
                <IconButton  className="m-1" style={{ backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>
                    <DeleteIcon/>
                </IconButton>:
                <IconButton className="m-1" style={{color:'white', backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}} onClick={()=>setAfterRecord(true)}>
                    <DeleteIcon/>
                </IconButton>}

                {record?
                <IconButton onClick={()=>setRecord(false)} style={{backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <FiberManualRecordIcon style={{ color: 'red', width:'40px', height:'40px'}}/>
                </IconButton>:
                <IconButton onClick={()=>{setRecord(true); setAfterRecord(false)}} style={{backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <PausePresentationIcon style={{ color: 'red', backgroundColor: 'white', borderRadius:'50%', padding:'10px', width:'40px', height:'40px'}}/>
                </IconButton>}

                {afterRecord?
                <IconButton className="m-1" style={{backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <SendIcon/>
                </IconButton>:
                <IconButton className="m-1" style={{color:'white', backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <SendIcon/>
                </IconButton>}

                            
            </div>
        </div>

        {/* {!afterRecord && 
        <IconButton className="play-icon" style={{marginTop:'-60vh', marginLeft: '47%',color:'white', backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
            <PlayArrowIcon style={{color:'white'}}/>
        </IconButton>} */}
        
            <IconButton style={{color:'white', backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%", padding:'10px', marginTop:'-750px', marginLeft:'790px'}}>            
                <SettingsIcon/>
            </IconButton>

            <IconButton onClick={()=>closeModal()} style={{marginTop:'-850px'}}>
                <CloseIcon/>
            </IconButton>
            
        
        
        
      </Modal>      
    </div>
    )
}

export default Home
