import React from 'react';
import styles from './Formulaire.module.css'

const FormContainer = ({children}) => {
    return <div className={styles.FormContainer}>
        {children}
    </div>
}


const Input = ({type, onChange, placeholder, accept, children, style}) => {
    return <div className={styles.InputContainer}>
        <label style={style} className={styles.labelInput}>{children}</label>
        <input style={style} className={styles.InputForm} type={type} onChange={onChange} placeholder={placeholder} accept={accept}/>
    </div>
}

const InputImg = ({type, onChange, accept, style}) => {
    return <div className={styles.InputContainer}>
        <input style={style} type={type} onChange={onChange} accept={accept}/>
    </div>
}

const LabelForm = ({children}) => {
    return <label className={styles.LabelForm}>Choisir une image du bien immobilier 
        {children}
    </label>
}

const DisplayImg = ({path}) => {
    return <div className={styles.DisplayImg}>
        <img className={styles.ImgLogement} src={path} alt=""/>
    </div>
}

const ImageUploader = ({ fileToDisplay, setfileToDisplay, setfileName }) => {
    return (
      <>
        <LabelForm>
          <InputImg
            type="file"
            onChange={(e) => {
              setfileToDisplay(URL.createObjectURL(e.target.files[0]));
              setfileName(e.target.files[0].name);
            }}
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
          />
        </LabelForm>
        {fileToDisplay ? (
          <DisplayImg path={fileToDisplay}></DisplayImg>
        ) : (
          <NoImage></NoImage>
        )}
      </>
    );
  };

const NoImage = () => {
    return (
      <div className={styles.DisplayNoImage}>
        <div className={styles.NoImage}>Aucune image uploadée</div>
      </div>
    );
  };

const Button = ({onClick, children}) => {
    return <div onClick={onClick} className={styles.btn}>{children}</div>
}

const RightForm = ({children}) => {
    return <div className={styles.RightForm}>
        {children}
    </div>
}

const LeftForm = ({children}) => {
    return <div className={styles.LeftForm}>
        {children}
    </div>
}

export {
    FormContainer,
    Input,
    Button,
    RightForm,
    LeftForm,
    LabelForm,
    DisplayImg,
    InputImg,
    NoImage,
    ImageUploader
}