import React, { useState } from 'react';
import Modal from 'react-modal';
import video from './media/sampleVideo.mkv';
import { IconButton } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import PausePresentationIcon from '@material-ui/icons/PausePresentation';

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

  Modal.setAppElement('#root');

function Home() {

    const [ show, setShow ] = useState(true);
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
      <button className="btn btn-danger" onClick={openModal}>Talk Mail</button>
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
        <div  style={{marginTop: "-150px"}} className="d-flex justify-content-center">
            <div style={{color:'white', position: 'absolute',marginTop: "-20px"}}>
                {!show &&<p>00:04:27</p>}
            </div>
            <div>
                <IconButton className="m-1" style={{ backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton className="m-1" style={{ color:'white', backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>
                    <DeleteIcon/>
                </IconButton>
                {show?<IconButton onClick={()=>setShow(false)} style={{backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <FiberManualRecordIcon style={{ color: 'red'}}/>
                </IconButton>:
                <IconButton onClick={()=>{setShow(true); setAfterRecord(true)}} style={{backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <PausePresentationIcon style={{ color: 'red', backgroundColor: 'white', borderRadius:'50%', padding: '10%'}}/>
                </IconButton>}
                <IconButton className="m-1" style={{backgroundColor:'rgb(128,128,128,0.5)', borderRadius:"50%"}}>            
                    <SendIcon/>
                </IconButton>
            </div>
        </div>        
      </Modal>      
    </div>
    )
}

export default Home
