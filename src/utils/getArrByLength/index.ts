type Fn<T> = (id: number) => T

interface Options {
  start?: number
  step?: number
  end: number
}

export default function getArrByLength<T>(options: Options, fn: Fn<T>): T[] {
  const start = options.start ?? 1

  const isFn = typeof fn === "function"
  let arr = []
  for (let i = start; i <= options.end; i++) {
    if (typeof options.step === "number") {
      if (i % options.step === 0) {
        arr.push(isFn ? fn(i) : i)
      }
    } else {
      arr.push(isFn ? fn(i) : i)
    }
  }
  return arr as T[]
}
