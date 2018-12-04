// for..in 루프는 [객체]의 [프로퍼티]에 루프를 실행
const player = {
    name: 'Thomas',
    rank: 'Midshipman',
    age: 25
};

for (let prop in player) {
    if (player.hasOwnProperty(prop)) {
        console.log(prop + ' : ' + player[prop]);
    }
}

