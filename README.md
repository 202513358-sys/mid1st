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

About 본문 : site/content/about.md

Blog 본문 : site/content/posts/

Projects 본문 : site/content/

프로필 및 프로젝트 실행 이미지 : site/static/images/

POS 프로그램 소스 코드 압축파일 : site/static/pos-source.zip

페이지 이동 단축키 : site/assets/js/shortcuts.js

빌드 스크립트 : .github/pages_build.py

자동 배포 설정 : .github/workflows/

테마 파일 : site/themes/template/
