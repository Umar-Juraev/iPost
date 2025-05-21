"use client"
import React from 'react';

import { QRCode } from 'react-qrcode-logo';
import BotQrCode from "@/assets/images/qrcode.png"
interface Props {
  value: string; 
  logoImage: string;
}

const BotQrcode = () => {
  return (
      <QRCode
        value={'https://t.me/Abusahiytez_bot'}
        size={260}
        logoImage={BotQrCode.src}
              logoWidth={260}
              removeQrCodeBehindLogo={true}
              style={{borderRadius: '10%'}}
              ecLevel='H'
      />
  );
};

export default BotQrcode;
