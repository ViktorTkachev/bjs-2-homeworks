function cachingDecoratorNew(func) {
  let cache = [];
  return (...args) => {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({hash: hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = true;
  let state = 1;
  wrapper.allCount = 0;
  wrapper.count = 0;
  function wrapper (...args) {
    clearTimeout(timeoutId);
    wrapper.allCount++;
    if(timeoutId || state === 1) {
      timeoutId = setTimeout(() => {func(...args), wrapper.count++}, (state -1) * delay);
      state = 2;
    }
  }
  return wrapper;
}
