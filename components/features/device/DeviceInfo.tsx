// components/features/device/DeviceInfo.tsx

// 기기 정보 타입 정의
export type DeviceInfo = {
    userAgent: string;
    platform: string;
    language: string;
    screenWidth: number;
    screenHeight: number;
    windowWidth: number;
    windowHeight: number;
    cookieEnabled: boolean;
    onlineStatus: boolean;
    timezone: string;
  };
  
  // 기기 정보를 수집하는 함수들
  export const getDeviceInfo = (): DeviceInfo => {
    return {
      // 기본 정보
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      
      // 화면 정보
      screenWidth: screen.width,
      screenHeight: screen.height,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      
      // 기타
      cookieEnabled: navigator.cookieEnabled,
      onlineStatus: navigator.onLine,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  };