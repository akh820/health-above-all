'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getDeviceInfo, type DeviceInfo } from "@/components/features/device/DeviceInfo";

export default function Home() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);

  const handleDeviceCheck = () => {
    const info = getDeviceInfo();
    setDeviceInfo(info);
    console.log('기기 정보:', info);
  };

  return (
    <div>
      <Button onClick={handleDeviceCheck}>기기 정보 확인</Button>
    </div>
  );
}