var backspaceCompare = function(s, t) {
    const sStack = [];
    const tStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            sStack.pop();  // 빈 배열 pop해도 undefined만 반환, 에러 안 남
        } else {
            sStack.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            tStack.pop();
        } else {
            tStack.push(t[i]);
        }
    }

    return sStack.join('') === tStack.join('');
};