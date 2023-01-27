# Teacher Cloud [![version](https://img.shields.io/badge/version-1.0.0-g.svg)](teachercloud.co)

<br>
<br>

<div align=center><h1>기술 스택</h1></div>

<div align=center>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  </a>
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  </a>
  <a href="https://aws.amazon.com/">
    <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
  </a>
  <br>
    
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
  </a>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <a href="https://postcss.org/">
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=PostCSS&logoColor=white">
  </a>
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <br>
</div>

<br>
<br>

## 1. 로컬 개발 환경 설정

### 1.1. 환경 구성

`node.js` 18 버젼, `yarn` 패키지 매니저 설치  
(Global 설치)

<br>

### 1.2. 의존성 설치

```bash
$ yarn install
```

<br>

### 1.3. 개발서버 기동

```bash
$ yarn dev
```

[http://localhost:3000](http://localhost:3000)확인

<br>
<br>

## 2. 컨벤션 규칙

### 2.1. 브랜치 이름

- 형식 : prefix/{개발 내용(영어)}
- 예시 : feature/dns-add
- prefix : `feature` / `bugfix`

<br>

### 2.2. Pull Request

- Title : Branch 명과 동일
- Desc : `.github` 폴더 내 정의 된 `pull_request_template.md` 형식에 맞추어 작성(PR시 자동 생성 됨)

<br>

### 2.3. CSS 클래스

- CSS Module을 이용하여 정의되기에, 해당 컴포넌트에서만 Unique 하면 됩니다.

Example

```js
import styles from './NavBar.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

...
<header className={cx('nav-bar')}>
...
```

<br>

### 2.4. 함수

- 특정 케이스를 제외하곤 화살표 함수 대신 일반 함수`function`을 사용  
  ※ 가독성, 호이스팅, 스코핑 등의 이유  
  ※ [참고링크](https://www.youtube.com/watch?v=5iGGvJn8K1U)
- 무기명 콜백 함수에서만 화살표 함수 사용

<br>

### 2.5. code Convention

- PascalCase : interface, type, enum, enum member, react component
- camelCase : file name, interface member, variable, function
- UPPER_SNAKE_CASE : grobal variable
- kebab-case : url path, css class name, app dir group name

<br>
<br>

## 3. 폴더 구조

### 3.1. Top-level directory

    .
    ├── .next                   # Compiled files (git ignored)
    ├── .vscode                 # VSCode Setting (git ignored)
    ├── node_modules            # VSCode Setting
    ├── public                  # Static files
    ├── src                     # Source files
    ├── .gitignore              #
    ├── .prettierrc             #
    ├── next-endv.d.ts          #
    ├── next.config.js          #
    ├── package.json            #
    ├── postcss.config.js       #
    ├── README.md               #
    ├── tsconfig.jsom           #
    └── yarn.lock               #

  <br>

### 3.2. src directory

실제 개발되는 내용 대부분이 `src` 디렉토리 하위에 포함 됨

    .
    ├── ...
    ├── src                     # Source files
    │   ├── app                 # app dir (Next.js 13ver)
    │   ├── client              # client modules(ex : hooks)
    │   ├── pages               # pages dir (Next.js, only for api routes)
    │   ├── server              # server modules(ex : apollo server)
    │   └── shared              # shared modules(ex : const)
    └── ...

  <br>

### 3.3. app directory

`Next.js` 13 버젼의 `app dir` 디렉토리<br>
파일 시스템 기반으로 라우팅 됩니다.<br>

    .
    ├── ...
    ├── src                     # Source files
    │   ├── app                 # app dir (Next.js 13ver)
    │   │   ├── (_components)   # components used in this page
    │   │   ├── (service) # service group
    │   │   ├── (admin)   # admin group
    │   │   ├── head.tsx        # head
    │   │   └── layout.tsx      # root layout
    │   └── ...
    └── ...

#### 3.3.1. 그룹핑

서비스 성격이 다르고, 레이아웃이 다르게 적용되어야 하는 등의 경우 그룹핑을 꼭 해야합니다.<br>
예를 들어, 고객 서비스 페이지와 백오피스(어드민) 페이지의 레이아웃이 다른경우 등은 꼭 구분하여 그룹핑 합니다.<br>
혹은 로그인이 꼭 필요한 페이지들 / 아닌 페이지들에 따른 기능 분리가 된 경우 등도 그룹핑이 필요합니다.<br>
※ `Next.js` 13 버젼 `app dir`의 `layout.js` 등은 그룹 하위에 모두 적용되기 떄문입니다.<br>

- 그룹핑 룰 : (그룹명)
- 예시 : (service)

#### 3.3.2. 페이지 컴포넌트

해당 페이지에서 사용할 컴포넌트들을 정의 합니다. <br>
매 페이지 디렉토리에 (\_components) 폴더 하위에 컴포넌트들을 저장합니다.
