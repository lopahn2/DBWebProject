import {firestore} from 'C:/ReactWP/teamproject/src/firebase';


// widgets.js
// Actions
const LOAD = 'data/LOAD';





const initialState = {
    
    //기사 전처리한 데이터
    ptitle : ["1위","2위","3위","4위","5위","6위","7위","8위","9위","10위"],
    stitle : ["1위","2위","3위","4위","5위","6위","7위","8위","9위","10위"],
    etitle : ["1위","2위","3위","4위","5위","6위","7위","8위","9위","10위"],
    //커뮤니티 전처리 (경제) & 청원 상위 10개(기사 전처리 데이터와 키워드 일치시 색 빨간색)
    pntitle : ["n1위","n2위","n3위","n4위","n5위","n6위","n7위","n8위","n9위","n10위"],
    sntitle : ["n1위","n2위","n3위","n4위","n5위","n6위","n7위","n8위","n9위","n10위"],
    entitle : ["n1위","n2위","n3위","n4위","n5위","n6위","n7위","n8위","n9위","n10위"],

    //-------------policy-------------------------------------------------------------------------//
    //-------------policy-------------------------------------------------------------------------//
    //-------------policy-------------------------------------------------------------------------//
    //키워드에 대한 네이버 기사 url입니다.
    purl : {
        0 : ["a","b","c","d","e"],
        1 : ["a","b","c","d","e"],
        2 : ["a","b","c","d","e"],
        3 : ["a","b","c","d","e"],
        4 : ["a","b","c","d","e"],
        5 : ["a","b","c","d","e"],
        6 : ["a","b","c","d","e"],
        7 : ["a","b","c","d","e"],
        8 : ["a","b","c","d","e"],
        9 : ["a","b","c","d","e"],
    },
    //키워드에 대한 네이버 기사 제목입니다.
    purlTitle: {
        0 : ["A","B","C","D","E"],
        1 : ["A","B","C","D","E"],
        2 : ["A","B","C","D","E"],
        3 : ["A","B","C","D","E"],
        4 : ["A","B","C","D","E"],
        5 : ["A","B","C","D","E"],
        6 : ["A","B","C","D","E"],
        7 : ["A","B","C","D","E"],
        8 : ["A","B","C","D","E"],
        9 : ["A","B","C","D","E"],
    },
    //키워드에 대한 구글 관련검색어입니다.
    prelatedKeyword : {
        key1: ["1하나","1둘","1셋","1넷","1다섯"],
        key2: ["2하나","2둘","2셋","2넷","2다섯"],
        key3: ["3하나","3둘","3셋","3넷","3다섯"],
        key4: ["4하나","4둘","4셋","4넷","4다섯"],
        key5: ["5하나","5둘","5셋","5넷","5다섯"],
        key6: ["6하나","6둘","6셋","6넷","6다섯"],
        key7: ["7하나","7둘","7셋","7넷","7다섯"],
        key8: ["8하나","8둘","8셋","8넷","8다섯"],
        key9: ["9하나","9둘","9셋","9넷","9다섯"],
        key10: ["10하나","10둘","10셋","10넷","10다섯"],
    },
    //구글 관련검색어에 대한 트윗 수입니다.
    ptwitNum : {
        num1 : [1200,730,2250, 4420, 1000],
        num2 : [1200,730,2250, 4420, 1000],
        num3: [1200,730,2250, 4420, 1000],
        num4 : [1200,730,2250, 4420, 1000],
        num5 : [1200,730,2250, 4420, 1000],
        num6 : [1200,730,2250, 4420, 1000],
        num7 : [1200,730,2250, 4420, 1000],
        num8 : [1200,730,2250, 4420, 1000],
        num9 : [1200,730,2250, 4420, 1000],
        num10 : [1200,730,2250, 4420, 1000],
    },
    //-------------society-------------------------------------------------------------------------//
    //-------------society-------------------------------------------------------------------------//
    //-------------society-------------------------------------------------------------------------//
    surl : {
        0 : ["a","b","c","d","e"],
        1 : ["a","b","c","d","e"],
        2 : ["a","b","c","d","e"],
        3 : ["a","b","c","d","e"],
        4 : ["a","b","c","d","e"],
        5 : ["a","b","c","d","e"],
        6 : ["a","b","c","d","e"],
        7 : ["a","b","c","d","e"],
        8 : ["a","b","c","d","e"],
        9 : ["a","b","c","d","e"],
    },
    surlTitle: {
        0 : ["A","B","C","D","E"],
        1 : ["A","B","C","D","E"],
        2 : ["A","B","C","D","E"],
        3 : ["A","B","C","D","E"],
        4 : ["A","B","C","D","E"],
        5 : ["A","B","C","D","E"],
        6 : ["A","B","C","D","E"],
        7 : ["A","B","C","D","E"],
        8 : ["A","B","C","D","E"],
        9 : ["A","B","C","D","E"],
    },
    srelatedKeyword : {
        key1: ["1하나","1둘","1셋","1넷","1다섯"],
        key2: ["2하나","2둘","2셋","2넷","2다섯"],
        key3: ["3하나","3둘","3셋","3넷","3다섯"],
        key4: ["4하나","4둘","4셋","4넷","4다섯"],
        key5: ["5하나","5둘","5셋","5넷","5다섯"],
        key6: ["6하나","6둘","6셋","6넷","6다섯"],
        key7: ["7하나","7둘","7셋","7넷","7다섯"],
        key8: ["8하나","8둘","8셋","8넷","8다섯"],
        key9: ["9하나","9둘","9셋","9넷","9다섯"],
        key10: ["10하나","10둘","10셋","10넷","10다섯"],
    },
    stwitNum : {
        num1 : [1200,730,2250, 4420, 1000],
        num2 : [1200,730,2250, 4420, 1000],
        num3: [1200,730,2250, 4420, 1000],
        num4 : [1200,730,2250, 4420, 1000],
        num5 : [1200,730,2250, 4420, 1000],
        num6 : [1200,730,2250, 4420, 1000],
        num7 : [1200,730,2250, 4420, 1000],
        num8 : [1200,730,2250, 4420, 1000],
        num9 : [1200,730,2250, 4420, 1000],
        num10 : [1200,730,2250, 4420, 1000],
    },
    //-------------economy-------------------------------------------------------------------------//
    //-------------economy-------------------------------------------------------------------------//
    //-------------economy-------------------------------------------------------------------------//
    eurl : {
        0 : ["a","b","c","d","e"],
        1 : ["a","b","c","d","e"],
        2 : ["a","b","c","d","e"],
        3 : ["a","b","c","d","e"],
        4 : ["a","b","c","d","e"],
        5 : ["a","b","c","d","e"],
        6 : ["a","b","c","d","e"],
        7 : ["a","b","c","d","e"],
        8 : ["a","b","c","d","e"],
        9 : ["a","b","c","d","e"],
    },
    
    eurlTitle: {
        0 : ["A","B","C","D","E"],
        1 : ["A","B","C","D","E"],
        2 : ["A","B","C","D","E"],
        3 : ["A","B","C","D","E"],
        4 : ["A","B","C","D","E"],
        5 : ["A","B","C","D","E"],
        6 : ["A","B","C","D","E"],
        7 : ["A","B","C","D","E"],
        8 : ["A","B","C","D","E"],
        9 : ["A","B","C","D","E"],
    },
    erelatedKeyword : {
        key1: ["1하나","1둘","1셋","1넷","1다섯"],
        key2: ["2하나","2둘","2셋","2넷","2다섯"],
        key3: ["3하나","3둘","3셋","3넷","3다섯"],
        key4: ["4하나","4둘","4셋","4넷","4다섯"],
        key5: ["5하나","5둘","5셋","5넷","5다섯"],
        key6: ["6하나","6둘","6셋","6넷","6다섯"],
        key7: ["7하나","7둘","7셋","7넷","7다섯"],
        key8: ["8하나","8둘","8셋","8넷","8다섯"],
        key9: ["9하나","9둘","9셋","9넷","9다섯"],
        key10: ["10하나","10둘","10셋","10넷","10다섯"],
    },
    etwitNum : {
        num1 : [1200,730,2250, 4420, 1000],
        num2 : [1200,100,3250, 1420, 1000],
        num3: [1200,730,2250, 4420, 1000],
        num4 : [1200,730,2250, 4420, 1000],
        num5 : [1200,730,2250, 4420, 1000],
        num6 : [1200,730,2250, 4420, 1000],
        num7 : [1200,730,2250, 4420, 1000],
        num8 : [1200,730,2250, 4420, 1000],
        num9 : [1200,730,2250, 4420, 1000],
        num10 : [1200,730,2250, 4420, 1000],
    },



};


const bucket = firestore.collection("teamproject");
bucket.get().then((docs)=>{
    let item = [];
    docs.forEach((doc)=>{
        item.push(doc.data());
    })
    //-----------policy--------------------------------------------------
    initialState['ptitle'] = item[2]['policy']
    initialState['pntitle'] = item[3]['policy']

    initialState['purlTitle'][0]=item[1]['policy']['국민의힘']['urltitle'];
    initialState['purlTitle'][1]=item[1]['policy']['김부겸']['urltitle'];
    initialState['purlTitle'][2]=item[1]['policy']['민주당']['urltitle'];
    initialState['purlTitle'][3]=item[1]['policy']['바이든']['urltitle'];
    initialState['purlTitle'][4]=item[1]['policy']['송영길']['urltitle'];
    initialState['purlTitle'][5]=item[1]['policy']['오세훈']['urltitle'];
    initialState['purlTitle'][6]=item[1]['policy']['이재명']['urltitle'];
    initialState['purlTitle'][7]=item[1]['policy']['이준석']['urltitle'];
    initialState['purlTitle'][8]=item[1]['policy']['한미']['urltitle'];
    initialState['purlTitle'][9]=item[1]['policy']['홍준표']['urltitle'];

    initialState['purl'][0]=item[1]['policy']['국민의힘']['url'];
    initialState['purl'][1]=item[1]['policy']['김부겸']['url'];
    initialState['purl'][2]=item[1]['policy']['민주당']['url'];
    initialState['purl'][3]=item[1]['policy']['바이든']['url'];
    initialState['purl'][4]=item[1]['policy']['송영길']['url'];
    initialState['purl'][5]=item[1]['policy']['오세훈']['url'];
    initialState['purl'][6]=item[1]['policy']['이재명']['url'];
    initialState['purl'][7]=item[1]['policy']['이준석']['url'];
    initialState['purl'][8]=item[1]['policy']['한미']['url'];
    initialState['purl'][9]=item[1]['policy']['홍준표']['url'];

    initialState['prelatedKeyword']['key1'] = item[4]['policy']['국민의힘'];
    initialState['prelatedKeyword']['key2'] = item[4]['policy']['김부겸'];
    initialState['prelatedKeyword']['key3'] = item[4]['policy']['민주당'];
    initialState['prelatedKeyword']['key4'] = item[4]['policy']['바이든'];
    initialState['prelatedKeyword']['key5'] = item[4]['policy']['송영길'];
    initialState['prelatedKeyword']['key6'] = item[4]['policy']['오세훈'];
    initialState['prelatedKeyword']['key7'] = item[4]['policy']['이재명'];
    initialState['prelatedKeyword']['key8'] = item[4]['policy']['이준석'];
    initialState['prelatedKeyword']['key9'] = item[4]['policy']['한미'];
    initialState['prelatedKeyword']['key10'] = item[4]['policy']['홍준표'];

    initialState['ptwitNum']['num1'] = item[5]['policy']['국민의힘']
    initialState['ptwitNum']['num2'] = item[5]['policy']['김부겸']
    initialState['ptwitNum']['num3'] = item[5]['policy']['민주당']
    initialState['ptwitNum']['num4'] = item[5]['policy']['바이든']
    initialState['ptwitNum']['num5'] = item[5]['policy']['송영길']
    initialState['ptwitNum']['num6'] = item[5]['policy']['오세훈']
    initialState['ptwitNum']['num7'] = item[5]['policy']['이재명']
    initialState['ptwitNum']['num8'] = item[5]['policy']['이준석']
    initialState['ptwitNum']['num9'] = item[5]['policy']['한미']
    initialState['ptwitNum']['num10'] = item[5]['policy']['홍준표']

    //-----------society--------------------------------------------------
    initialState['stitle'] = item[2]['society']
    initialState['sntitle'] = item[3]['society']

    initialState['surlTitle'][0]=item[1]['Society']['검찰']['urltitle'];
    initialState['surlTitle'][1]=item[1]['Society']['경찰']['urltitle'];
    initialState['surlTitle'][2]=item[1]['Society']['대법']['urltitle'];
    initialState['surlTitle'][3]=item[1]['Society']['박범계']['urltitle'];
    initialState['surlTitle'][4]=item[1]['Society']['백신']['urltitle'];
    initialState['surlTitle'][5]=item[1]['Society']['서울과기대']['urltitle'];
    initialState['surlTitle'][6]=item[1]['Society']['속보']['urltitle'];
    initialState['surlTitle'][7]=item[1]['Society']['이성윤']['urltitle'];
    initialState['surlTitle'][8]=item[1]['Society']['정진웅']['urltitle'];
    initialState['surlTitle'][9]=item[1]['Society']['코로나19']['urltitle'];

    initialState['surl'][0]=item[1]['Society']['검찰']['url'];
    initialState['surl'][1]=item[1]['Society']['경찰']['url'];
    initialState['surl'][2]=item[1]['Society']['대법']['url'];
    initialState['surl'][3]=item[1]['Society']['박범계']['url'];
    initialState['surl'][4]=item[1]['Society']['백신']['url'];
    initialState['surl'][5]=item[1]['Society']['서울과기대']['url'];
    initialState['surl'][6]=item[1]['Society']['속보']['url'];
    initialState['surl'][7]=item[1]['Society']['이성윤']['url'];
    initialState['surl'][8]=item[1]['Society']['정진웅']['url'];
    initialState['surl'][9]=item[1]['Society']['코로나19']['url'];

    initialState['srelatedKeyword']['key1'] = item[4]['society']['검찰'];
    initialState['srelatedKeyword']['key2'] = item[4]['society']['경찰'];
    initialState['srelatedKeyword']['key3'] = item[4]['society']['대법'];
    initialState['srelatedKeyword']['key4'] = item[4]['society']['박범계'];
    initialState['srelatedKeyword']['key5'] = item[4]['society']['백신'];
    initialState['srelatedKeyword']['key6'] = item[4]['society']['서울과기대'];
    initialState['srelatedKeyword']['key7'] = item[4]['society']['속보'];
    initialState['srelatedKeyword']['key8'] = item[4]['society']['이성윤'];
    initialState['srelatedKeyword']['key9'] = item[4]['society']['정진웅'];
    initialState['srelatedKeyword']['key10'] = item[4]['society']['코로나19'];


    initialState['stwitNum']['num1'] = item[5]['society']['검찰']
    initialState['stwitNum']['num2'] = item[5]['society']['경찰']
    initialState['stwitNum']['num3'] = item[5]['society']['대법']
    initialState['stwitNum']['num4'] = item[5]['society']['박범계']
    initialState['stwitNum']['num5'] = item[5]['society']['백신']
    initialState['stwitNum']['num6'] = item[5]['society']['서울과기대']
    initialState['stwitNum']['num7'] = item[5]['society']['속보']
    initialState['stwitNum']['num8'] = item[5]['society']['이성윤']
    initialState['stwitNum']['num9'] = item[5]['society']['정진웅']
    initialState['stwitNum']['num10'] = item[5]['society']['코로나19']
    //-----------economy--------------------------------------------------
    initialState['etitle'] = item[2]['economy']
    initialState['entitle'] = item[0]['top10']

    initialState['eurlTitle'][0]=item[1]['economy']['1분기']['urltitle'];
    initialState['eurlTitle'][1]=item[1]['economy']['EPS']['urltitle'];
    initialState['eurlTitle'][2]=item[1]['economy']['경제']['urltitle'];
    initialState['eurlTitle'][3]=item[1]['economy']['공매도']['urltitle'];
    initialState['eurlTitle'][4]=item[1]['economy']['기업']['urltitle'];
    initialState['eurlTitle'][5]=item[1]['economy']['머스크']['urltitle'];
    initialState['eurlTitle'][6]=item[1]['economy']['삼성전자']['urltitle'];
    initialState['eurlTitle'][7]=item[1]['economy']['스마트폰']['urltitle'];
    initialState['eurlTitle'][8]=item[1]['economy']['이건희']['urltitle'];
    initialState['eurlTitle'][9]=item[1]['economy']['이재용']['urltitle'];

    initialState['eurl'][0]=item[1]['economy']['1분기']['url'];
    initialState['eurl'][1]=item[1]['economy']['EPS']['url'];
    initialState['eurl'][2]=item[1]['economy']['경제']['url'];
    initialState['eurl'][3]=item[1]['economy']['공매도']['url'];
    initialState['eurl'][4]=item[1]['economy']['기업']['url'];
    initialState['eurl'][5]=item[1]['economy']['머스크']['url'];
    initialState['eurl'][6]=item[1]['economy']['삼성전자']['url'];
    initialState['eurl'][7]=item[1]['economy']['스마트폰']['url'];
    initialState['eurl'][8]=item[1]['economy']['이건희']['url'];
    initialState['eurl'][9]=item[1]['economy']['이재용']['url'];

    initialState['erelatedKeyword']['key1'] = item[4]['economy']['1분기'];
    initialState['erelatedKeyword']['key2'] = item[4]['economy']['EPS'];
    initialState['erelatedKeyword']['key3'] = item[4]['economy']['경제'];
    initialState['erelatedKeyword']['key4'] = item[4]['economy']['공매도'];
    initialState['erelatedKeyword']['key5'] = item[4]['economy']['기업'];
    initialState['erelatedKeyword']['key6'] = item[4]['economy']['머스크'];
    initialState['erelatedKeyword']['key7'] = item[4]['economy']['삼성전자'];
    initialState['erelatedKeyword']['key8'] = item[4]['economy']['스마트폰'];
    initialState['erelatedKeyword']['key9'] = item[4]['economy']['이건희'];
    initialState['erelatedKeyword']['key10'] = item[4]['economy']['이재용'];

    initialState['etwitNum']['num1'] = item[5]['economy']['1분기']
    initialState['etwitNum']['num2'] = item[5]['economy']['EPS']
    initialState['etwitNum']['num3'] = item[5]['economy']['경제']
    initialState['etwitNum']['num4'] = item[5]['economy']['공매도']
    initialState['etwitNum']['num5'] = item[5]['economy']['기업']
    initialState['etwitNum']['num6'] = item[5]['economy']['머스크']
    initialState['etwitNum']['num7'] = item[5]['economy']['삼성전자']
    initialState['etwitNum']['num8'] = item[5]['economy']['스마트폰']
    initialState['etwitNum']['num9'] = item[5]['economy']['이건희']
    initialState['etwitNum']['num10'] = item[5]['economy']['이재용']

    
})

// const bucket = firestore.collection("teamproject");
// bucket.get().then((docs)=>{
//     let item = [];
//     docs.forEach((doc)=>{
//         item.push({id:doc.id, ...doc.data()})
//     })
//     initialState["testset"].push(item);
//     console.log(initialState["testset"]);
// })
setTimeout(() => {
    console.log('Async Hey There');
    console.log(initialState['surlTitle']);
  }, 2000);


//Action Creator
export const loadTest = (test) =>{
    return { type: LOAD, test};
}



// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    // do reducer stuff
    case "data/LOAD":
        
       
        return state;
            
    
    default: return state;
    }
    }