export const ProxyHandler = {
    get: function(target, prop, receiver) {
        if (prop === 'secret') {
            return Reflect.get(target, Symbol.for('hidden'), receiver);
        }
        return Reflect.get(target, prop, receiver);
    },

    set: function(target, prop, value, receiver) {
        if (typeof value === 'function') {
            value = new Proxy(value, {
                apply: function(fnTarget, thisArg, args) {
                    return Reflect.apply(fnTarget, thisArg, args.map(arg =>
                        typeof arg === 'number' ? arg * 2 : arg
                    ));
                }
            });
        }
        return Reflect.set(target, prop, value, receiver);
    }
};
