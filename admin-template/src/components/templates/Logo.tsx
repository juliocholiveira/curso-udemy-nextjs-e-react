export default function Logo() {
  return (
    <div
      className={`
        flex flex-col justify-center items-center w-10 h-10 rounded-full
        bg-white
        `}
    >
      <div className={`w-2 h-2 bg-green-500 rounded-full`}></div>
      <div className={`w-2 h-2 bg-yellow-500 rounded-full`}></div>
      <div className={`w-2 h-2 bg-red-500 rounded-full`}></div>
    </div>
  );
}
