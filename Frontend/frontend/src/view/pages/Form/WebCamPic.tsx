import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import PropTypes from 'prop-types';
import walk from "../../../images/walk.gif";
interface WebCamPicProps {
    setImg: any;
    resetForm?: string;
}

const WebCamPic: React.FC<WebCamPicProps> = ({resetForm = '' ,setImg}) => {
    const webcamRef = useRef<Webcam>(null);
    let [imgSrc, setImgSrc] = useState<string | null>(walk);
    const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
    const [reset, setReset] = useState(false)
    const capture = useCallback(() => {
        if (webcamRef.current) {
            let imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
            setImg(imageSrc);
            setIsCameraOn(false);
        }
    }, [webcamRef, setImg]);

    const retake = () => {
        setImgSrc(null);
        setIsCameraOn(true);
    };

    const startCamera = () => {
        setIsCameraOn(true);
    };

    useEffect(() => {
          setImgSrc(walk);
          setIsCameraOn(false);
    }, [resetForm]);

    return (
        <div className="w-[14vw] h-[10vw] flex flex-col items-center">
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                isCameraOn && <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
            )}
            <div className="mt-5">
                {imgSrc ? (
                    <button type="button" onClick={retake}>Capture</button>
                ) : (
                    <button type="button" onClick={isCameraOn ? capture : startCamera}>
                        {isCameraOn ? 'Take Picture' : 'Start Camera'}
                    </button>
                )}
            </div>
        </div>
    );
};

WebCamPic.propTypes = {
    setImg: PropTypes.func.isRequired,
    resetForm: PropTypes.string,
};

export default WebCamPic;
