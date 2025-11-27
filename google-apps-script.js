/**
 * ITN 피트니스 신년 이벤트 - Google Apps Script
 *
 * 사용 방법:
 * 1. Google Sheets에서 확장 프로그램 > Apps Script 클릭
 * 2. 이 코드를 붙여넣기
 * 3. 저장 후 "배포" > "배포 관리" > 새 버전 배포
 *
 * ⚠️ 코드 수정 후 반드시 "배포 관리"에서 새 버전으로 배포해야 적용됩니다!
 *
 * 구글 시트 헤더 (A~H열):
 * 이름 | 전화번호 | 접수일시 | 할인금액 | 카카오친추 | 네이버저장 | 네이버리뷰 | 네이버알림
 */

// 스프레드시트 ID
const SPREADSHEET_ID = '1LkBP9tF6wBlCaQC9uk8K41LVQcLYkQrsEaoanILvQWI';

// POST 요청 처리 (폼 데이터 수신)
function doPost(e) {
  try {
    // 요청 데이터 파싱
    const data = JSON.parse(e.postData.contents);

    // 스프레드시트 열기 - 첫 번째 시트 사용
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0];

    // 현재 시간 (한국 시간)
    const now = new Date();
    const koreaTime = Utilities.formatDate(now, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

    // 데이터 추가 (이름, 전화번호, 접수일시, 할인금액, 카카오친추, 네이버저장, 네이버리뷰, 네이버알림)
    const newRow = [
      data.name || '',
      data.phone || '',
      koreaTime,
      data.totalDiscount || 0,
      data.missionKakao || 'X',
      data.missionNaverSave || 'X',
      data.missionNaverReview || 'X',
      data.missionNaverNotify || 'X'
    ];

    sheet.appendRow(newRow);

    // 성공 응답
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: '신청이 완료되었습니다.',
      timestamp: koreaTime
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 응답
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: '오류가 발생했습니다: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 처리 (테스트용)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'ITN 피트니스 신년 이벤트 API가 정상 작동 중입니다.',
    spreadsheetId: SPREADSHEET_ID
  })).setMimeType(ContentService.MimeType.JSON);
}

// 테스트 함수 (Apps Script 에디터에서 실행)
function testPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: '테스트',
        phone: '010-1234-5678',
        totalDiscount: 100000,
        missionKakao: 'O',
        missionNaverSave: 'O',
        missionNaverReview: 'X',
        missionNaverNotify: 'O'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
