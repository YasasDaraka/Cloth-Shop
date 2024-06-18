import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import PropTypes from 'prop-types';
import walk from "../../../images/walk.gif";
interface WebCamPicProps {
    setImg: any;
    resetForm?: boolean;
}

const WebCamPic: React.FC<WebCamPicProps> = ({resetForm = false ,setImg}) => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(walk);
    const [isCameraOn, setIsCameraOn] = useState<boolean>(false);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
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
        if (resetForm) {
            setImgSrc(walk);
            setIsCameraOn(false);
        }
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
    resetForm: PropTypes.bool,
};

export default WebCamPic;
