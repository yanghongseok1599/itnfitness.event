/**
 * Google Sheets 연동 스크립트
 *
 * 사용법:
 * 1. Google Sheets 새 문서 생성
 * 2. 확장 프로그램 > Apps Script
 * 3. 이 코드를 복사하여 붙여넣기
 * 4. SPREADSHEET_ID를 실제 시트 ID로 변경
 * 5. 배포 > 새 배포 > 웹 앱 > 액세스: 모든 사용자
 * 6. 배포 URL을 환경변수 NEXT_PUBLIC_GOOGLE_SCRIPT_URL에 설정
 */

// 스프레드시트 ID (URL에서 /d/ 와 /edit 사이의 문자열)
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

/**
 * POST 요청 처리 함수
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0]; // 첫 번째 시트 사용

    // 한국 시간으로 접수일시 생성
    const koreaTime = Utilities.formatDate(
      new Date(),
      'Asia/Seoul',
      'yyyy-MM-dd HH:mm:ss'
    );

    // 새 행 데이터 (시트 열 순서에 맞게 수정)
    const newRow = [
      data.name || '',           // A열: 이름
      data.phone || '',          // B열: 전화번호
      koreaTime,                 // C열: 접수일시
      data.totalDiscount || 0,   // D열: 할인금액
      data.missionKakao || 'X',  // E열: 카카오 미션
      data.missionNaverSave || 'X',    // F열: 네이버 저장
      data.missionNaverReview || 'X',  // G열: 네이버 리뷰
      data.missionNaverNotify || 'X',  // H열: 네이버 알림
      // 필요에 따라 추가 필드...
    ];

    // 데이터 추가
    sheet.appendRow(newRow);

    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: '데이터 저장 완료' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET 요청 처리 (테스트용)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK', message: 'API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 시트 헤더 설정 (최초 1회 실행)
 */
function setupHeaders() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheets()[0];

  const headers = [
    '이름',
    '전화번호',
    '접수일시',
    '할인금액',
    '카카오친추',
    '네이버저장',
    '네이버리뷰',
    '네이버알림'
  ];

  // 첫 번째 행에 헤더 설정
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // 헤더 스타일링
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');

  // 열 너비 자동 조절
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
}
