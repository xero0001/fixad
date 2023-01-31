import { Mobile, Pc } from '@app/(_components)/mediaQuery'

import ServiceCard from './ServiceCard'

import classNames from 'classnames/bind'
import styles from './ServiceArea.module.css'
const cx = classNames.bind(styles)

const serviceContents = {
  data: [
    {
      id: 1,
      title: '놀이 교육계획안',
      subTitle: '전 연령 놀이 교육계획안 샘플',
      description: '주제별 전 연령 놀이계획 및 평가\n교육계획안 기반 활동지 제공\n놀이와 연계되는 교구 추천',
    },
    {
      id: 2,
      title: '관찰기록지',
      subTitle: '전 연령 하루일과 관찰기록 샘플',
      description: '연령별 다양한 사례 제공\n놀이상황별 교사지원 및 평가 예시\n놀이중심 놀이기록지 예시 및 양식',
    },
    {
      id: 3,
      title: '특성화 프로그램',
      subTitle: '주제별 중점교육연간계획안',
      description: '놀이중심 기반 비구조화 놀이계획안\n영아발달에 맞춘 특색프로그램\n계획안과 연계된 놀이매체 추천',
    },
    {
      id: 4,
      title: '미디어 컨텐츠',
      subTitle: '연령별 주제별 놀이 음원 및 영상',
      description: '교육계획안 기반 미디어 컨텐츠\n음원과 함께 받아보는 가사판\n실시간 스트리밍 서비스',
    },
    {
      id: 5,
      title: '활동지 & 도안',
      subTitle: '쉽게 고르고 바로 쓰는 도안',
      description: '교사 출신 디자이너가 만드는 도안\n주제별 200개 이상의 놀이도안\n그림책과 연계되는 확장놀이 활동지',
    },
    {
      id: 6,
      title: '특별활동',
      subTitle: '특기 교사 스케쥴 바로 체크 서비스',
      description:
        '인기 특기 교사님 수업 가능시간 확인\n지역별 주제별 특기강사 검색 기능\n특별활동 교사 구인 공고 업로드',
    },
    {
      id: 7,
      title: '쇼핑몰',
      subTitle: '교육계획안과 바로 연계된 스토어',
      description:
        '영유아의 발달을 고려한 선별된 교구몰\n선생님이 직접 개발한 아이디어 놀잇감\n교사실에 두고 매일 쓰는 사무용품',
    },
    {
      id: 8,
      title: '현장학습',
      subTitle: '가장 가까운 현장학습지 찾기',
      description: '주변 현장학습지 GPS 검색 기능\n현장학습 답사 보고서 공유 서비스\n주제별 연령별 견학지 추천',
    },
    {
      id: 9,
      title: '정보 커뮤니티',
      subTitle: '선생님들에 관한 모든 정보',
      description:
        '가장 빠르게 업데이트되는 정책 정보\n행사별 정보 교류를 통한 업무 간소화\n선생님이 직접 운영하는 생생한 현장 정보',
    },
    {
      id: 10,
      title: '통합 서류서식',
      subTitle: '공식 기관 발행 문서 양식',
      description: '개정누리과정 세부요소 한 눈에 보기\n공식 기관 발행 문서 양식\nPPT과 HWP로 제공되는 문서서식',
    },
  ],
}

export default function ServiceArea({ isActive }) {
  return (
    <div className={cx('container')}>
      <div className={cx('text_wrap', { active: isActive })}>
        <h2 className={cx('title')}>
          <Pc>전국 모든 선생님을 위한 단 하나의 통합서비스</Pc>
          <Mobile>
            전국 모든 선생님을 위한
            <br />단 하나의 통합서비스
          </Mobile>
        </h2>
        <p className={cx('desc')}>
          <Pc>
            <b>티처클라우드</b>는 구름처럼 선생님 곁에 떠있겠습니다.
            <br />
            아이들의 놀이와 선생님의 문서 작업에 필요한 정보가 있다면 바로 검색하세요.
          </Pc>
          <Mobile>
            <b>티처클라우드</b>는 구름처럼 선생님 곁에 떠있겠습니다.
            <br />
            아이들의 놀이와 선생님의 문서 작업에
            <br />
            필요한 정보가 있다면 바로 검색하세요.
          </Mobile>
        </p>
      </div>
      <div className={cx('card_wrap')}>
        {serviceContents.data.map(serviceContent => {
          return <ServiceCard key={serviceContent.id} serviceContent={serviceContent} active={isActive} />
        })}
      </div>
    </div>
  )
}
