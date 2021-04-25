function bestVelocity(arr) {

    arr = arr.map(Number);

    let bestThreeSprints = {
        'sequence': [],
        'sum': 0
    }

    if (arr.length < 3) {
        return 'error';
    } else {
        for (let i = 0; i < arr.length; i++) {
            let first = arr[i];
            let second = arr[i + 1];
            let third = arr[i + 2];
            let currentSum = first + second + third;

            if (currentSum != NaN) {
                if (currentSum >= bestThreeSprints.sum) {
                    bestThreeSprints.sum = currentSum;
                    bestThreeSprints.sequence = [first, second, third];
                }
            }
        }
    }

    return `Sequence: ${bestThreeSprints.sequence}
Sum: ${bestThreeSprints.sum}`;
}
bestVelocity([11, 14, 10, 12])
bestVelocity([12, 9, 1, 5, 11, 5])
bestVelocity([76, 80])
bestVelocity([76, 80, 81, 77, 83, 78, 80])