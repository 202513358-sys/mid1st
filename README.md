 컴퓨터공학과 2학년 강윤서의 프로젝트와 학습 경험을 정리한 포트폴리오입니다. Hugo Coder 테마를 바탕으로 본문과 메뉴를 수정하고, 키보드 단축키 기능을 추가했습니다.

 공개 사이트 :  https://202513358-sys.github.io/mid1st/
 GitHub 저장소 :  https://202513358-sys.github.io/mid1st/

 ## 1. 사이트 구성
 - Home : 이름, 짧은 소개, 프로필 이미지, GitHub 및 이메일 링크
 - About : 자기소개, 게임 개발 관심 이유, 사용 기술과 학습 목표
 - Blog: AI를 활용한 문제 해결과 학습 경험
 - Projects: C언어 기반 편의점 POS 프로그램의 목적, 구현 기능, 수행 과정, 소스 코드, 실행 결과, 배운 점과 개선 방향

본문은 한국어로 작성하고 주요 메뉴 이름은 영어로 구성했으며 연락처는 Home의 GitHub 및 이메일 링크로 제공합니다.

## 2. 사용 기술과 실행 환경
 - 테마: Hugo Coder 기반 템플릿
 - 공개 사이트 배포: GitHub Pages
 - 자동 빌드·배포: GitHub Actions
 - 수정 방식: GitHub 웹 편집
 - 추가 기능 구현: JavaScript
 - 빌드 스크립트 실행: Python (버전 : 3.14)

## 3. 설치 및 빌드 방법
Git이 설치된 환경에서 다음 명령으로 저장소를 내려받습니다.

git clone https://github.com/202513358-sys/mid1st.git

cd mid1st

이후 빌드 명령은 저장소 최상위인 mid1st에서 실행합니다.

[ 빌드 환경 ]

첨부된 준비 스크립트가 생성하는 GitHub Actions 워크플로는 다음 환경을 설정합니다. 실제 저장소의 워크플로를 수정했다면 해당 파일의 값을 우선합니다.
- Python 3.12
- Node.js 24
- Go 1.27.1
- Hugo Extended: 준비 과정에서 선택된 버전
- Dart Sass 1.105.0

본 프로젝트에서 확인한 Actions 로그의 Hugo 버전은 v0.167.0+extended입니다.

[ 빌드 준비 및 실행 ]

저장소 최상위 폴더인 mid1st에서 다음 명령을 순서대로 실행합니다.

python .github/pages_build.py --dependencies

python .github/pages_build.py --build

첫 번째 명령은 사이트를 만드는 데 필요한 도구와 패키지를 준비하고, 두 번째 명령은 사이트 파일을 생성합니다. 빌드 결과는 실행 환경의 public 폴더에 생성되며, GitHub Actions는 이 폴더의 파일을 GitHub Pages로 배포합니다.

## 4. 주요 파일과 수정 위치
사이트 제목, 소개, 프로필 이미지 경로, 메뉴, SNS, 추가 스크립트 설정 : site/hugo.toml

- About 본문 : site/content/about.md
- Blog 본문 : site/content/posts/
- Projects 본문 : site/content/
- 프로필 및 프로젝트 실행 이미지 : site/static/images/
- POS 프로그램 소스 코드 압축파일 : site/static/pos-source.zip
- 페이지 이동 단축키 : site/assets/js/shortcuts.js
- 빌드 스크립트 : .github/pages_build.py
- 자동 배포 설정 : .github/workflows/
- 테마 파일 : site/themes/template/

## 5. 수정 및 배포 방법
본 프로젝트는 주로 GitHub 웹 편집 기능으로 수정했습니다.

1. 수정할 파일을 열고 편집합니다.

2. 변경 내용을 확인한 뒤 의미 있는 작업 단위로 커밋합니다.

3. 변경 사항을 main 브랜치에 반영합니다.

4. 저장소의 Actions 탭에서 해당 변경의 빌드·배포 결과를 확인합니다.

5. 실패하면 작업 로그의 오류 메시지를 확인하고 수정합니다.

6. 배포 성공 후 공개 사이트를 열어 실제 반영 여부를 확인합니다.

7. Git Bash에서 수정 내용을 반영하는 경우에는 변경 파일을 확인한 뒤 커밋하고 main으로 푸시합니다.

git status
git add <수정한 파일 경로>
git commit -m "변경 내용 설명"
git push origin main

## 6. 키보드 단축키
마우스 없이 주요 페이지로 이동할 수 있도록 단축키를 추가했습니다.

단축키 기능
- H	Home으로 이동
- A	About으로 이동
- B	Blog로 이동
- P	Projects로 이동
페이지 하단의 ON/OFF 버튼으로 단축키 사용 여부를 변경할 수 있습니다. 설정은 브라우저의 로컬 저장소를 사용할 수 있는 환경에서 유지됩니다.

사용 시 참고 사항:

- 문자 기준으로 키를 판별하는 구현에서는 영문 입력 상태에서 사용합니다.
- 주소창이나 개발자 도구가 아닌 웹페이지에 키보드 초점이 있어야 합니다.
- 다른 기능과 충돌하거나 단축키 사용을 원하지 않으면 OFF로 전환합니다.
- 이동 주소를 변경하면 shortcuts.js의 목적지 경로도 함께 수정합니다.

## 대표 프로젝트: 편의점 POS 프로그램
리눅스프로그래밍 수업에서 C언어로 제작한 개인 프로젝트입니다. Linux 환경에서 Vim을 사용해 재고 조회·추가, 상품 판매, 금액 계산, 예외 처리 등의 기능을 구현했습니다.

Projects 페이지에는 다음 자료를 제공합니다.

- 프로젝트 개요와 목적
- 담당 기능과 수행 과정
- 전체 소스 코드 ZIP 다운로드
- 재고 추가 전후 실행 화면
- 실행 결과 설명
- 배운 점과 개선 방향

공개한 실행 화면에서는 상품 코드 2001번의 재고를 30개에서 42개로 추가한 결과를 확인할 수 있습니다. 총 재고 금액도 547,900원에서 562,300원으로 변경되었습니다.
