import qrCode from "../../Assets/Images/qrCode.png";

import "./style.scss";

export function QrCode() {
    return (
        <div className="container">
            <div className="qrCode">
                <div>
                    <img
                        src={qrCode}
                        alt="qrCode to frontendMentor.io"
                        className="qrCodeImg"
                    />
                </div>
                <div className="texts">
                    <h2>Improve your front-end skills by building projects</h2>
                    <p>
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </p>
                </div>
            </div>
        </div>
    );
}
