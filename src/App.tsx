import './App.css';

function App() {
  return (
    <div className="font-roboto flex min-h-screen w-full items-center justify-center bg-linear-to-b from-[#161718] to-[#0e0f12] text-white">
      {/* This is the Keyboard */}
      <div className="rounded-2xl bg-[#27272a] p-2 text-xs">
        {/* Row-1 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-18 items-end justify-start rounded-md bg-[#0a090d] pb-1 pl-2 shadow-[inset_0_-0.5px_2px_0_rgb(13,13,15),inset_-0.5px_0_2px_0_rgb(13,13,15)]">
              esc
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
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

          {/* FINGER PRINT SCANNER */}
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#0a090d] text-sm">
              <div className="relative h-1 w-1 rounded-full border-2 border-transparent bg-linear-to-b from-neutral-400/20 from-20% via-transparent to-neutral-400/20 to-80% bg-clip-border p-3.5">
                <div className="absolute top-1/2 left-1/2 h-9/10 w-9/10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#010101]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Row-2 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              <span>~</span>
              <span>`</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>!</span>
              <span>1</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>@</span>
              <span>2</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>#</span>
              <span>3</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>$</span>
              <span>4</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>%</span>
              <span>5</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>^</span>
              <span>6</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>&</span>
              <span>7</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>*</span>
              <span>8</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>(</span>
              <span>9</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>)</span>
              <span>0</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>_</span>
              <span>-</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>+</span>
              <span>=</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-20 flex-col items-end justify-end rounded-md bg-[#0a090d] pr-1.5 pb-1">
              delete
            </div>
          </div>
        </div>
        {/* Row-3 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-18 flex-col items-start justify-end rounded-md bg-[#0a090d] pb-1 pl-1.5">
              tab
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              Q
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              W
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              E
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              R
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              T
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              Y
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              U
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              I
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              O
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              P
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>&#123;</span>
              <span>[</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>&#125;</span>
              <span>]</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d]">
              <span>|</span>
              <span>\</span>
            </div>
          </div>
        </div>
        {/* Row-4 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-22 flex-col items-start justify-end rounded-md bg-[#0a090d] pb-1 pl-1.5">
              caps lock
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              A
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              S
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              D
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              F
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              G
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              H
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              J
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              K
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              L
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]">
              <span>:</span>
              <span>;</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]">
              <span>"</span>
              <span>'</span>
            </div>
          </div>
          <div className="w-full cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-full flex-col items-end justify-end rounded-md bg-[#0a090d] pr-1.5 pb-1">
              return
            </div>
          </div>
        </div>

        {/* Row-5 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1">
          <div className="w-full cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-full flex-col items-start justify-end rounded-md bg-[#0a090d] pb-1 pl-1.5">
              shift
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              Z
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              X
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              C
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              V
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              B
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              N
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              M
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]">
              <span>&lt;</span>
              <span>,</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]">
              <span>&gt;</span>
              <span>,</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-[#0a090d]">
              <span>?</span>
              <span>,</span>
            </div>
          </div>
          <div className="w-full cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-full flex-col items-end justify-end rounded-md bg-[#0a090d] pr-1.5 pb-1">
              shift
            </div>
          </div>
        </div>
        {/* Row-6 */}
        <div className="mb-1 flex h-fit w-full items-center justify-between gap-1">
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d] pb-1 pl-1">
              <div className="flex w-full items-center justify-end px-1.5 pt-1 text-[10px]">fn</div>
              <span className="flex w-full items-center justify-start pl-0.5">
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
                  className="h-[14px] w-[14px]"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M3.6 9h16.8"></path>
                  <path d="M3.6 15h16.8"></path>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]">
              <span className="flex w-full items-center justify-end px-1">
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
                  <path d="M6 15l6 -6l6 6"></path>
                </svg>
              </span>
              <span>control</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d]">
              <span className="flex w-full items-center justify-end px-2">
                <svg
                  fill="none"
                  version="1.1"
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="h-[10px] w-[10px]"
                >
                  <rect
                    stroke="currentColor"
                    stroke-width="2"
                    x="18"
                    y="5"
                    width="10"
                    height="2"
                  ></rect>
                  <polygon
                    stroke="currentColor"
                    stroke-width="2"
                    points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
                  ></polygon>
                  <rect
                    id="_Transparent_Rectangle_"
                    className="st0"
                    width="32"
                    height="32"
                    stroke="none"
                  ></rect>
                </svg>
              </span>
              <span>option</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 animate-scale-up transition-transform  duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-fit flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d] p-2">
              <span className="flex w-full items-center justify-end">
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
                  <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
                </svg>
              </span>

              <span>command</span>
            </div>
          </div>
          <div className="w-full cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-full flex-col items-center justify-center gap-2 rounded-md bg-[#0a090d]"></div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-fit flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d] px-2">
              <span className="w-full">
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
                  <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
                </svg>
              </span>
              <span>command</span>
            </div>
          </div>
          <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
            <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md bg-[#0a090d]">
              <span className="w-full px-2">
                <svg
                  fill="none"
                  version="1.1"
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="h-[10px] w-[10px]"
                >
                  <rect
                    stroke="currentColor"
                    stroke-width="2"
                    x="18"
                    y="5"
                    width="10"
                    height="2"
                  ></rect>
                  <polygon
                    stroke="currentColor"
                    stroke-width="2"
                    points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
                  ></polygon>
                  <rect
                    id="_Transparent_Rectangle_"
                    className="st0"
                    width="32"
                    height="32"
                    stroke="none"
                  ></rect>
                </svg>
              </span>
              <span>option</span>
            </div>
          </div>
          {/* NAVIGATION KEYS */}
          <div className="flex h-12 w-fit flex-col items-end justify-center gap-0.5">
            {/* UPPER ROW */}
            <div className="flex w-full items-center justify-center">
              <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
                <div className="flex h-auto w-12 items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
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
                    <path
                      d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* BOTTOM ROW */}
            <div className="flex items-center justify-center gap-0.5">
              {/* Left button */}
              <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
                <div className="flex h-auto w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
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
                    <path
                      d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* Down Button */}
              <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
                <div className="flex h-auto w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
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
                    <path
                      d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                </div>
              </div>
              {/* Right Button */}
              <div className="cursor-pointer rounded-lg bg-white/20 pt-0.5 pl-0.5 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
                <div className="flex h-auto w-12 flex-col items-center justify-center gap-1 rounded-md bg-[#0a090d] py-[5px]">
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
                    <path
                      d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
                      fill="currentColor"
                      stroke-width="0"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
