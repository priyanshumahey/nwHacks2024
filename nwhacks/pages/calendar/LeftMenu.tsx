import React from "react";
import styles from "./styles.module.css";
import { IconButton } from '@mui/material';

export const LeftMenu = () => {

    //onclick handlers
    const toggleVisibility = (value: number) => {
        let el : HTMLImageElement | null = document.getElementById(value.toString());
        if (el) {
            const isVisible = el.src.endsWith("visibility.png");
            if (isVisible) {
                el.src = "visibility_off.png";
            }
            else {
                el.src="visibility.png";
            }
        }
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
      <IconButton sx={{width: '20px', left:'0px'}} onClick={() => toggleVisibility(1)}>
        <img id='1' className={`${styles.leftMenu} ${styles.visibility}`} alt="Visibility" src="visibility.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-20px'}} onClick={() => toggleVisibility(2)}>
      <img id='2' className={`${styles.leftMenu} ${styles.visibility4}`} alt="Visibility" src="visibility.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-40px'}} onClick={() => toggleVisibility(3)}>
      <img id='3' className={`${styles.leftMenu} ${styles.visibility2}`} alt="Visibility" src="visibility.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-60px'}} onClick={() => toggleVisibility(4)}>
      <img id='4' className={`${styles.leftMenu} ${styles.visibility3}`} alt="Visibility" src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-80px'}} onClick={() => toggleVisibility(5)}>
      <img id='5' className={`${styles.leftMenu} ${styles.visibilityoff}`} src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-100px'}} onClick={() => toggleVisibility(6)}>
      <img id='6' className={`${styles.leftMenu} ${styles.visibilityoff2}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-120px'}} onClick={() => toggleVisibility(7)}>
      <img id='7' className={`${styles.leftMenu} ${styles.visibilityoff3}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-140px'}} onClick={() => toggleVisibility(8)}>
      <img id='8' className={`${styles.leftMenu} ${styles.visibilityoff4}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-160px'}} onClick={() => toggleVisibility(9)}>
      <img id='9' className={`${styles.leftMenu} ${styles.visibilityoff5}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-180px'}} onClick={() => toggleVisibility(10)}>
      <img id='10' className={`${styles.leftMenu} ${styles.visibilityoff6}`}src="visibility_off.png" />
      </IconButton>
      <IconButton sx={{width: '20px', left:'-200px'}} onClick={() => toggleVisibility(11)}>
      <img id='11' className={`${styles.leftMenu} ${styles.visibilityoff7}`}src="visibility_off.png" />
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
