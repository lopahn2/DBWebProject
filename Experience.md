#What do you learn?
- Concept : Cluster Team Architecture\
  A: Preprocessing / B: Crawling / C: DataBase / D: Front
- Tech. Stack : React.js / Node.js / Firebase / Hadoop / SQL 
  
1. 팀 협업 능력
    - 팀원들에게 명확히 의사전달을 하는 법을 배움
    - 진행 과정을 명문화 하고 과업을 분배해서 역할을 정해주는 방식을 익힘
    - 의견 충돌시 원만히 나의 의견을 주장할 수 있게 됨
2. 프론트엔드
    - 컴포넌트들을 모듈화 해서 다양한 페이지에 적용 할 수 있음
    - Router 패키지를 이용해 페이지 전환을 할 수 있음
    - Redux를 이용해 데이터를 전역관리 할 수 있음
    - 서버단과 연결하여 데이터를 비동기 방식으로 불러올 수 있음
3. 데이터
    - 필요로 하는 데이터를 크롤링 해올 수 있음 (Crawling repository 참조)
    - 데이터들을 원하는 형태로 전처리 하는 알고리즘을 구현할 수 있음 (Preprocessing repository 참조)
    - 리눅스 환경의 VMWare에 설치된 Hadoop 환경을 이용해 빅 데이터를 저장, 관리 할 수 있음
    - Sqoop을 이용해 SQL로 필요한 데이터를 옮길 수 있음
4. 백엔드
    - Local to Local 환경에서 express 를 통해 front단으로 데이터를 보내줄 수 있음
    - node to node 환경에서 서버리스 서비스 플랫폼인 Firebase를 이용해서 데이터를 저장하고 front에 전송할 수 있음

#What are bothering you?

- 서버리스를 선택한 이유 : Node to Node 환경에서 포트포워딩을 통한 서버접속이 필요한데 발표하는 장소 특성상 고정 IP가 존제하지 않아서 불안정한 서비스가 될 가능성이 있기 때문
- VMWare의 버전 이슈 : 16버전에서는 NAT를 이용한 포트포워딩을 통해 로컬환경과 가상로컬환경 사이 서버 접속 세팅이 불가함. 
    - C의 컴퓨터에 있는 VMWare 버전이 15버전이라 쉽게 해결
- 비동기 then() 이슈 : Operating System Design Course에서 Synchronize 이슈에 대해선 다루어 보았지만 Asynchronize 이슈에 대해선 다루어 보지 못함. 
    - 구글링을 통해 바로 적용 가능할 정도의 지식을 습득 (MDN 참조) 
    - 그에 따라 데이터를 로딩할 충분한 시간을 확보하기 위해 데이터 페이지 접근과정을 복잡화 함 
    - [홈페이지 -> 카테고리선택 -> 데이터 페이지]
    

***첫 프로젝트였던 것 만큼 미숙한 점도 많으나 이 프로젝트를 시작으로 자신감이 붙어 더 많은 상상들을 현실로 구현할 자신감이 생김
