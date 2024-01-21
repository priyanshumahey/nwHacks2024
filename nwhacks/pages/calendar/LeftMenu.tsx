import React, {useState} from "react";
import styles from "./styles.module.css";
import { IconButton } from '@mui/material';
import { createContext } from 'react';

export const LeftMenu = (props : any) => {

    //onclick handlers
    const toggleVisibility = (value: string) => {
        let el : HTMLImageElement | null = document.getElementById(value);
        if (el) {
            const isVisible = el.src.endsWith("visibility.png");
            if (isVisible) {
                el.src = "visibility_off.png";
            }
            else {
                el.src="visibility.png";
            }
        }
        // Iterate through each image element and append the id of all elements
        // that have src ending with "visibility.png" to visibleList
        const imageElements = document.querySelectorAll("img"); // Assuming all images are considered
        const visibleImageIds : string[] = [];

        imageElements.forEach((imageElement) => {
        if (imageElement.src.endsWith("visibility.png")) {
            visibleImageIds.push(imageElement.id);
        }
    });

    props.func(visibleImageIds);
    }

  return (
    <div className={styles.leftMenu}>
      <div className={`${styles.leftMenu} ${styles.top}`}>
        <div className={`${styles.leftMenu} ${styles.dots}`}>
          <div className={`${styles.leftMenu} ${styles.ellipse}`} />
          <div className={`${styles.leftMenu} ${styles.div}`} />
          <div className={`${styles.leftMenu} ${styles.ellipse2}`} />
        </div>
      </div>
      <div className={`${styles.leftMenu} ${styles.textwrapper4}`}>Browser History</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper5}`}>Email</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper6}`}>Location</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper7}`}>Bank</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper8}`}>Shopping</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper9}`}>Weather</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper10}`}>Photos</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper11}`}>Focus</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper12}`}>Music</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper13}`}>Social Media</div>
      <div className={`${styles.leftMenu} ${styles.textwrapper14}`}>Notes</div>
      <IconButton sx={{width: '20px', left:'0px'}} onClick={() => toggleVisibility('Browser History')}>
        <img id='Browser History' className={`${styles.leftMenu} ${styles.visibility}`} alt="Visibility" src="visibility.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-20px'}} onClick={() => toggleVisibility('Email')}>
      <img id='Email' className={`${styles.leftMenu} ${styles.visibility4}`} alt="Visibility" src="visibility.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-40px'}} onClick={() => toggleVisibility('Location')}>
      <img id='Location' className={`${styles.leftMenu} ${styles.visibility1}`} alt="Visibility" src="visibility.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-60px'}} onClick={() => toggleVisibility('Bank')}>
      <img id='Bank' className={`${styles.leftMenu} ${styles.visibility2}`} alt="Visibility" src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-80px'}} onClick={() => toggleVisibility('Shopping')}>
      <img id='Shopping' className={`${styles.leftMenu} ${styles.visibility3}`} src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-100px'}} onClick={() => toggleVisibility('Weather')}>
      <img id='Weather' className={`${styles.leftMenu} ${styles.visibilityoff}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-120px'}} onClick={() => toggleVisibility('Photos')}>
      <img id='Photos' className={`${styles.leftMenu} ${styles.visibilityoff2}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-140px'}} onClick={() => toggleVisibility('Focus')}>
      <img id='Focus' className={`${styles.leftMenu} ${styles.visibilityoff3}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-160px'}} onClick={() => toggleVisibility('Music')}>
      <img id='Music' className={`${styles.leftMenu} ${styles.visibilityoff4}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-180px'}} onClick={() => toggleVisibility('Social Media')}>
      <img id='Social Media' className={`${styles.leftMenu} ${styles.visibilityoff5}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-200px'}} onClick={() => toggleVisibility('Notes')}>
      <img id='Notes' className={`${styles.leftMenu} ${styles.visibilityoff6}`}src="visibility_off.png" />
      </IconButton>
      <img className={`${styles.leftMenu} ${styles.language}`} alt="Language" src="language.png" />
      <img className={`${styles.leftMenu} ${styles.mail}`} alt="Mail" src="mail.png" />
      <img className={`${styles.leftMenu} ${styles.assistantNavigation}`} alt="Assistant navigation" src="assistant_navigation.png" />
      <img className={`${styles.leftMenu} ${styles.attachMoney}`} alt="Attach money" src="attach_money.png" />
      <img className={`${styles.leftMenu} ${styles.barcode}`} alt="Barcode" src="barcode.png" />
      <img className={`${styles.leftMenu} ${styles.clearNight}`} alt="Clear night" src="clear_night.png" />
      <img className={`${styles.leftMenu} ${styles.crop}`} alt="Crop" src="crop.png" />
      <img className={`${styles.leftMenu} ${styles.mindfulness}`} alt="Mindfulness" src="mindfulness.png" />
      <img className={`${styles.leftMenu} ${styles.musicNote}`} alt="Music note" src="music_note.png" />
      <img className={`${styles.leftMenu} ${styles.mms}`} alt="Mms" src="mms.png" />
      <img className={`${styles.leftMenu} ${styles.formatListBulleted}`} alt="Format list bulleted" src="format_list_bulleted.png" />
      <div className={`${styles.leftMenu} ${styles.rectangle}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle2}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle3}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle4}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle5}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle6}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle7}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle8}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle9}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle10}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle11}`} />
      <div className={`${styles.leftMenu} ${styles.rectangle12}`} />
    </div>
  );
};
