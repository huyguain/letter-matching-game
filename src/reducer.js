const suffle = cards => {
    return cards.sort(() => Math.random() - 0.5);
}

const getRamdomChars = length => {
    return Math.random().toString(36).split('').filter((value, index, self) => {
        return self.indexOf(value) === index;
    }).join('').substr(2, 8).toUpperCase().split('');
}

const getCards = _ => {
    const chars = getRamdomChars(8);
    const cards = chars.reduce((result, item, index) => {
        return [
            ...result,
            { id: index * 2, type: item, show: false },
            { id: index * 2 + 1, type: item, show: false },
        ]
    }, []);
    return suffle(cards);
}

const initialState = {
    cards: getCards()
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export { reducer, initialState }