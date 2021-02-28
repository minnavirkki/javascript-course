// Create a software that generate 1 random number between 0 - 100

// Determine the range of number
// 0 <= x <= 10
// 10 < x <= 19
// 100 sata
// 20 <= x < 99
// Create a software that will translate that number into text in FINNISH

// Example:10 - ten, 11 - eleven, 12 - twelve25 - twenty five122 - one hundred and twenty two, etc.235 - two hundredS and thirty five, 212 - two hundredS and twelve

const randomNo = Math.round(Math.random() * 100);
let result;

if (0 <= randomNo && randomNo <= 10) {
    switch (randomNo) {
        case 0:
            result = 'nolla';
            break;
        case 1:
            result = 'yksi';
            break;
        case 2:
            result = 'kaksi';
            break;
        case 3:
            result = 'kolme'
        case 4:
            result = 'neljä'
        case 5:
            result = 'viisi'
        case 6:
            result = 'kuusi'
        case 7:
            result = 'seitsemän'
        case 8:
            result = 'kahdeksan'
        case 9:
            result = 'yhdeksän'
        case 10:
            result = 'kymmenen';
            break;
        default:
            break;
    }
} else if (10 < randomNo && randomNo <= 19) {
    let remainer = randomNo - 10;
    switch (remainer) {
        case 1:
            result += 'yksi';
            break;
        case 2:
            result += 'kaksi';
            break;
        case 3:
            result += 'kolme'
            break;
        case 4:
            result += 'neljä'
            break;
        case 5:
            result += 'viisi'
            break;
        case 6:
            result += 'kuusi'
            break;
        case 7:
            result += 'seitsemän'
            break;
        case 8:
            result += 'kahdeksan'
            break;
        case 9:
            result += 'yhdeksän'
            break;
        default:
            break;
    }
    result += 'toista';
} else if (20 <= randomNo && randomNo <= 99) {
    let module = Math.floor(randomNo / 10);
    let remainer = randomNo % 10;

    switch (module) {
        case 1:
            result += 'yksi';
            break;
        case 2:
            result += 'kaksi';
            break;
        case 3:
            result += 'kolme'
            break;
        case 4:
            result += 'neljä'
            break;
        case 5:
            result += 'viisi'
            break;
        case 6:
            result += 'kuusi'
            break;
        case 7:
            result += 'seitsemän'
            break;
        case 8:
            result += 'kahdeksan'
            break;
        case 9:
            result += 'yhdeksän'
            break;
        default:
            break;
    }

    result += 'kymmentä';

    switch (remainer) {
        case 1:
            result += 'yksi';
            break;
        case 2:
            result += 'kaksi';
            break;
        case 3:
            result += 'kolme'
            break;
        case 4:
            result += 'neljä'
            break;
        case 5:
            result += 'viisi'
            break;
        case 6:
            result += 'kuusi'
            break;
        case 7:
            result += 'seitsemän'
            break;
        case 8:
            result += 'kahdeksan'
            break;
        case 9:
            result += 'yhdeksän'
            break;
        default:
            break;
    }
} else {
    result = 'sata'
}

console.log(result);