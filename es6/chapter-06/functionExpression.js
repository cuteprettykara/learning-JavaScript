

const g = function f(stop) {
    if (stop) {
        console.log('f stopped');
        return;
    }
    f(true);
};

g(false);