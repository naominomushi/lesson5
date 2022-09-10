for (let count = 1; count <=50; count++){

    let a = count % 10;
    if ( a == 0){
        console.log('今'+count+'回ループしました');
    }

    let b = count % 4;
    if ( b == 0){
        console.log('4で割れる数です'+count);
    }

    if (count == 50){
        alert('50回カウントが終わりました');
    }
}
