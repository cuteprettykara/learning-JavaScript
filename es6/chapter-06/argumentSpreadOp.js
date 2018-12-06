function addPrefix(prefix, ...words) {
    // 나중에 더 좋은 방법을 배웁니다.
    const prefixWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixWords[i] = prefix + words[i];
    }

    return prefixWords;
}

console.log(addPrefix("con", "verse", "vex"));   // ["converse", "convex"]
