function Main({ children }) {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-20 gap-10">
      <Header />
      <Progress />
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center gap-4">
      <span className="text-6xl">🖥️</span>
      <h1 className="text-4xl font-bold">Programming Quiz App</h1>
    </header>
  );
}

function Progress() {
  return (
    <div className="w-1/2">
      <progress 
        value="10" 
        max="100" 
        className="
          appearance-none border-none w-full p-0 m-0 h-5
          [&::-webkit-progress-bar]:rounded-full 
          [&::-webkit-progress-bar]:bg-slate-200
          [&::-webkit-progress-value]:rounded-full 
          [&::-webkit-progress-value]:bg-indigo-500
          [&::-moz-progress-bar]:bg-green-500
        "
      />
    </div>
  );
}

export default Main;
