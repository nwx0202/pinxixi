export function Emoji() {
  return (target: object, key: string) => {
    console.log(target)
    console.log(key)
    let val = target[key];
    console.log(val);

    const getter = () => {
      return val;
    }

    const setter = (value: string) => {
      val = `呵${value}呵`;
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}