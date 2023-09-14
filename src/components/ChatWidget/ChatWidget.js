import React from "react";
// This is the way to import an SVG file and then pass it as a props
import { ReactComponent as CompanyIcon } from "../Header/logo.svg";

import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const ChatWidget = () => {
    return (
        <WhatsAppWidget
            CompanyIcon={CompanyIcon}
            phoneNumber="+918885816487"
            companyName="Petlevert Support"
        />
    );
};

export default ChatWidget;
