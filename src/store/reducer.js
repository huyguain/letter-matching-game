const suffle = arr => {
    return arr.sort(() => Math.random() - 0.5);
}

// const getRamdomChars = length => {
//     return Math.random().toString(36).split('').filter((value, index, self) => {
//         return self.indexOf(value) === index;
//     }).join('').substr(2, length).toUpperCase().split('');
// }

const getCards = length => {
    let chars = suffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')).slice(0, length);
    const cards = chars.reduce((result, item, index) => {
        return [
            ...result,
            { id: index * 2, type: item, show: false, completed: false },
            { id: index * 2 + 1, type: item, show: false, completed: false },
        ]
    }, []);
    return suffle(cards);
}

const initialState = {
    cards: getCards(8),
    level: '0',
    remainning: false,
    won: 0,
    lose: 0,
    takeTime: 0,
    bestEasy: null,
    bestNormal: null,
    bestHard: null
};

function reducer(state, action) {
    switch (action.type) {
        case 'RESET_CARDS':
            return { ...state, cards: getCards(action.payload) };
        case 'SET_NEW_CARDS':
            return { ...state, cards: action.payload };
        case 'SET_LEVEL':
            return { ...state, level: action.payload };
        case 'SET_REMAINNING':
            return { ...state, remainning: action.payload };
        case 'SET_LOSE':
            return { ...state, lose: state.lose + 1 };
        case 'SET_WON':
            return { ...state, won: state.won + 1 };
        case 'SET_TAKE_TIME':
            return { ...state, takeTime: state.takeTime + 1 };
        case 'RESET_TAKE_TIME':
            return { ...state, takeTime: 0 };
        case 'SET_BEST_EASY':
            return { ...state, bestEasy: action.payload };
        case 'SET_BEST_NORMAL':
            return { ...state, bestNormal: action.payload };
        case 'SET_BEST_HARD':
            return { ...state, bestHard: action.payload };
        default:
            throw new Error();
    }
}

export { reducer, initialState }