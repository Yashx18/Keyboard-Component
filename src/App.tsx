import './App.css';

function App() {
  return (
    <div className="font-roboto flex min-h-screen w-full items-center justify-center bg-linear-to-b from-[#161718] to-[#0e0f12] text-white">
      {/* This is the Keyboard */}
      <div className="rounded-2xl bg-[#27272a] p-2">
        {/* Row-1 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1 text-xs">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-18 items-end justify-start rounded-md bg-[#0a090d] pb-1 pl-2 text-xs shadow-[inset_0_-0.5px_2px_0_rgb(13,13,15),inset_-0.5px_0_2px_0_rgb(13,13,15)]">
              esc
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 5l0 .01"></path>
                <path d="M17 7l0 .01"></path>
                <path d="M19 12l0 .01"></path>
                <path d="M17 17l0 .01"></path>
                <path d="M12 19l0 .01"></path>
                <path d="M7 17l0 .01"></path>
                <path d="M5 12l0 .01"></path>
                <path d="M7 7l0 .01"></path>
              </svg>
              F1
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 5l0 -2"></path>
                <path d="M17 7l1.4 -1.4"></path>
                <path d="M19 12l2 0"></path>
                <path d="M17 17l1.4 1.4"></path>
                <path d="M12 19l0 2"></path>
                <path d="M7 17l-1.4 1.4"></path>
                <path d="M6 12l-2 0"></path>
                <path d="M7 7l-1.4 -1.4"></path>
              </svg>
              F2
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                <path d="M3 10h18"></path>
                <path d="M10 3v18"></path>
              </svg>
              F3
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
              F4
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
                <path d="M5 10a7 7 0 0 0 14 0"></path>
                <path d="M8 21l8 0"></path>
                <path d="M12 17l0 4"></path>
              </svg>{' '}
              F5
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
              F6
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M21 5v14l-8 -7z"></path>
                <path d="M10 5v14l-8 -7z"></path>
              </svg>{' '}
              F7
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M4 5v14l12 -7z"></path>
                <path d="M20 5l0 14"></path>
              </svg>
              F8
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M3 5v14l8 -7z"></path>
                <path d="M14 5v14l8 -7z"></path>
              </svg>
              F9
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                <path d="M16 10l4 4m0 -4l-4 4"></path>
              </svg>
              F10
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M15 8a5 5 0 0 1 0 8"></path>
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
              </svg>
              F11
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M15 8a5 5 0 0 1 0 8"></path>
                <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
              </svg>
              F12
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0a090d] text-sm">
              <div className="relative h-2.5 w-2/5 rounded-full border-2 border-transparent bg-linear-to-b from-neutral-400/20 via-transparent to-neutral-400/20 bg-clip-border p-4">
                <div className="absolute top-1/2 left-1/2 h-9/10 w-9/10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#010101]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Row-2 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1 text-xs">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <span>~</span>
              <span>`</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 5l0 .01"></path>
                <path d="M17 7l0 .01"></path>
                <path d="M19 12l0 .01"></path>
                <path d="M17 17l0 .01"></path>
                <path d="M12 19l0 .01"></path>
                <path d="M7 17l0 .01"></path>
                <path d="M5 12l0 .01"></path>
                <path d="M7 7l0 .01"></path>
              </svg>
              1
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 5l0 -2"></path>
                <path d="M17 7l1.4 -1.4"></path>
                <path d="M19 12l2 0"></path>
                <path d="M17 17l1.4 1.4"></path>
                <path d="M12 19l0 2"></path>
                <path d="M7 17l-1.4 1.4"></path>
                <path d="M6 12l-2 0"></path>
                <path d="M7 7l-1.4 -1.4"></path>
              </svg>
              2
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                <path d="M3 10h18"></path>
                <path d="M10 3v18"></path>
              </svg>
              3
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
              4
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
                <path d="M5 10a7 7 0 0 0 14 0"></path>
                <path d="M8 21l8 0"></path>
                <path d="M12 17l0 4"></path>
              </svg>
              5
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
              6
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M21 5v14l-8 -7z"></path>
                <path d="M10 5v14l-8 -7z"></path>
              </svg>
              7
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M4 5v14l12 -7z"></path>
                <path d="M20 5l0 14"></path>
              </svg>
              8
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M3 5v14l8 -7z"></path>
                <path d="M14 5v14l8 -7z"></path>
              </svg>
              9
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
                <path d="M16 10l4 4m0 -4l-4 4"></path>
              </svg>
              0
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M15 8a5 5 0 0 1 0 8"></path>
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
              </svg>
              -
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[12px] w-[12px]"
              >
                <path d="M15 8a5 5 0 0 1 0 8"></path>
                <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
              </svg>
              =
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-20 flex-col items-end justify-end rounded-md bg-[#0a090d] pr-1.5 pb-1 text-xs">
              delete
            </div>
          </div>
        </div>
        {/* Row-3 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1 text-xs">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-18 flex-col items-start justify-end pb-1 rounded-md bg-[#0a090d] pl-1.5 text-xs">
              tab{' '}
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              Q
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              W
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              E
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              R
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              T
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              Y
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              U
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              I
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              O
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              P
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <span></span>
              <span>[</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d] text-xs">
              <span></span>
              <span> ]</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] text-xs">
              <span>|</span>
              <span>\</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
