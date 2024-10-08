export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const dataView = new DataView(buffer);
    dataView.setInt8(position, value);
    return dataView;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
