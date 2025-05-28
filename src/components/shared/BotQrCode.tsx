"use client"
import { QRCode } from 'react-qrcode-logo';
import BotQrCode from "@/assets/images/qrcode.png"

const BotQrcode = () => {
  return (
      <QRCode
        value={'https://t.me/Abusahiytez_bot'}
        size={255}
        logoImage={BotQrCode.src}
        logoWidth={255}
        removeQrCodeBehindLogo={true}
        style={{borderRadius: '10%'}}
      ecLevel='H'
      fgColor='#fff'
      />
  );
};

export default BotQrcode;
