# 브랜치 기반 CI/CD 설정 가이드

## 🌿 브랜치 전략

- **main**: 프로덕션 브랜치 (자동 배포)
- **develop**: 개발 브랜치 (개발 작업용)
- **feature/***: 기능 개발 브랜치

## 🚀 배포 워크플로우

1. **개발 작업**: `develop` 브랜치에서 작업
2. **기능 개발**: `feature/기능명` 브랜치 생성
3. **Pull Request**: `develop` → `main`으로 PR 생성
4. **코드 리뷰**: 팀원들의 리뷰 진행
5. **병합**: PR 병합 시 자동으로 Vercel에 배포

## ⚙️ GitHub Secrets 설정

GitHub 리포지토리의 Settings → Secrets and variables → Actions에서 다음 값들을 설정해야 합니다:

### 필수 Secrets:

1. **VERCEL_TOKEN**
   - Vercel 대시보드 → Settings → Tokens에서 생성
   - 새 토큰 생성 후 복사

2. **ORG_ID**
   ```
   team_IYOcGKmgO8OmkbLKicXwJ30b
   ```

3. **PROJECT_ID**
   ```
   prj_op9n5K70eFOasCkda9TWFoYiSQs1
   ```

## 📋 설정 단계

### 1. Vercel 토큰 생성
1. [Vercel Dashboard](https://vercel.com/account/tokens) 접속
2. "Create Token" 클릭
3. 토큰 이름 입력 (예: "GitHub Actions")
4. 생성된 토큰 복사

### 2. GitHub Secrets 설정
1. GitHub 리포지토리 → Settings → Secrets and variables → Actions
2. "New repository secret" 클릭
3. 위의 3개 값을 각각 추가

### 3. 브랜치 보호 규칙 설정 (선택사항)
1. GitHub 리포지토리 → Settings → Branches
2. "Add rule" 클릭
3. Branch name pattern: `main`
4. "Require pull request reviews before merging" 체크

## 🔄 사용 방법

### 새 기능 개발:
```bash
# develop 브랜치로 이동
git checkout develop

# 새 기능 브랜치 생성
git checkout -b feature/새기능명

# 개발 작업 후 커밋
git add .
git commit -m "feat: 새 기능 추가"

# GitHub에 푸시
git push -u origin feature/새기능명

# GitHub에서 develop으로 PR 생성
```

### 프로덕션 배포:
```bash
# develop에서 main으로 PR 생성
# PR 병합 시 자동으로 Vercel에 배포됨
```

## 🎯 현재 상태

- ✅ develop 브랜치 생성됨
- ✅ GitHub Actions 워크플로우 설정됨
- ⏳ GitHub Secrets 설정 필요
- ⏳ Vercel 토큰 생성 필요 