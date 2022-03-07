export default function assertDefined<T>(
  x: T | undefined | null
): asserts x is NonNullable<T> {
  if (x === null || x === undefined) {
    throw new Error(`Expected a defined value but got ${x}`)
  }
}
