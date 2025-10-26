import './App.css';

const row1 = [
  { content: 'esc', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F1', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F2', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F3', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F4', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F5', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F6', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F7', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F8', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F9', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F10', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F11', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'F12', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
  { content: 'FP', className: 'bg-[#0a090d] h-full w-full p-4 rounded-md' },
];

function App() {
  return (
    <div className="font-roboto flex min-h-screen w-full items-center justify-center bg-linear-to-b from-[#161718] to-[#0e0f12] text-white">
      <div className="rounded-2xl border border-slate-400 p-4">
        <div className="flex h-fit w-full items-center justify-between gap-2">
          {row1.map((item, index) => (
            <div key={index} className="rounded-lg border border-slate-400 p-0.5">
              <div className={item.className}>{item.content}</div>
            </div>
          ))}
          <div className="h-full w-full rounded-full border-2 border-transparent bg-linear-to-b from-neutral-400 via-transparent to-neutral-400 bg-clip-border p-5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
