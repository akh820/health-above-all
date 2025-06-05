import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* PWA 메타태그들 */}
        
        {/* 앱의 공식 이름 설정 - Windows/Android에서 표시되는 앱 이름 */}
        <meta name="application-name" content="Health Above All" />
        
        {/* iOS Safari에서 웹앱을 네이티브 앱처럼 실행 가능하게 설정 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* iOS에서 상태바 스타일 설정 (default/black/black-translucent) */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* iOS 홈 화면에 추가될 때 표시되는 앱 이름 */}
        <meta name="apple-mobile-web-app-title" content="Health Above All" />
        
        {/* 전화번호 자동 링크 생성 비활성화 (모바일에서 번호를 터치해도 전화 안 걸림) */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Android Chrome에서 웹앱을 네이티브 앱처럼 실행 가능하게 설정 */}
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* 브라우저 주소창과 상태바 색상 설정 (Android Chrome, iOS Safari) */}
        <meta name="theme-color" content="#000000" />
        
        {/* 모바일 최적화 */}
        
        {/* 모바일 화면 설정:
            - width=device-width: 화면 너비에 맞춤
            - initial-scale=1: 초기 확대/축소 비율 1배
            - maximum-scale=1: 최대 확대 1배로 제한
            - user-scalable=no: 사용자 확대/축소 비활성화 (모바일 앱처럼) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        
        {/* PWA 링크들 */}
        
        {/* PWA 매니페스트 파일 연결 - 앱 정보, 아이콘, 설정 등이 담긴 파일 */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* iOS 홈 화면 아이콘 설정 - iPhone/iPad에서 홈 화면에 추가할 때 사용되는 아이콘 */}
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}