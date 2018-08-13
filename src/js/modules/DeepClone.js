function DeepClone(source) {
    const res = ( source instanceof Array ) ? [] : {};
    Object.keys(source).forEach(key => {
        const value = source[key];
        if( value instanceof Object && !(value instanceof Function) ) {
            res[key] = DeepClone(value);
        } else {
            if( value instanceof Array ){
                res[key] = value.map(item => DeepClone(item))
            } else {
                res[key] = value;
            }
        }
    });
    return res;
}