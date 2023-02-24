<div className="w-full max-w-screen-md p-5">
  <div className="Create">
    <header className="mb-5 border border-transparent rounded-2xl overflow-hidden">
      <div className="h-3 bg-rose-400"></div>
      <div className="bg-white flex flex-col p-7"><input type="text" name="title" placeholder="제목 없는 설문지"
                                                         className="focus-visible:outline-none border-b-2 focus:border-rose-400 text-2xl mb-5"
                                                         value="제목 없는 설문지"><input type="text" name="desc"
                                                                                  placeholder="설문지 설명"
                                                                                  className="focus-visible:outline-none border-b-2 focus:border-rose-400"
                                                                                  value="설문지 설명"></div>
    </header>
    <main>
      <div data-rbd-droppable-id="createList" data-rbd-droppable-context-id="0">
        <div data-rbd-draggable-context-id="0" data-rbd-draggable-id="itemId-1"
             className="bg-white mb-5 py-7 border rounded-xl border-transparent">
          <div tabIndex="0" role="button" aria-describedby="rbd-hidden-text-0-hidden-text-0"
               data-rbd-drag-handle-draggable-id="itemId-1" data-rbd-drag-handle-context-id="0" draggable="false"
               className="flex justify-center text-rose-400 opacity-50 mb-4 hover:opacity-100">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                 width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path>
            </svg>
          </div>
          <div className="flex justify-between px-7"><input type="text" placeholder="질문"
                                                            className="focus-visible:outline-none border-b-2 focus:border-rose-400 w-3/5"
                                                            value="질문">
            <div className="dropdown dropdown-end w-1/3"><label tabIndex="0"
                                                                className="btn btn-outline w-full border-gray-300 hover:bg-transparent hover:text-black hover:border-gray-300 flex justify-between">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                   width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              </svg>
              <span className="inline-block text-sm">객관식 질문</span>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                   width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </svg>
            </label>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full hidden" tabIndex="0">
                <li>
                  <button type="button" className="active:bg-rose-400 hover:bg-rose-400 hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                         width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"></path>
                    </svg>
                    <span className="inline-block text-sm">단답형</span></button>
                </li>
                <li>
                  <button type="button" className="active:bg-rose-400 hover:bg-rose-400 hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                         width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path>
                    </svg>
                    <span className="inline-block text-sm">장문형</span></button>
                </li>
                <li>
                  <button type="button" className="active:bg-rose-400 hover:bg-rose-400 hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                         width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    </svg>
                    <span className="inline-block text-sm">객관식 질문</span></button>
                </li>
                <li>
                  <button type="button" className="active:bg-rose-400 hover:bg-rose-400 hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                         width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                    <span className="inline-block text-sm">체크박스</span></button>
                </li>
                <li>
                  <button type="button" className="active:bg-rose-400 hover:bg-rose-400 hover:text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                         width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path>
                    </svg>
                    <span className="inline-block text-sm">드롭다운</span></button>
                </li>
              </ul>
            </div></div>
          <div>
            <div data-rbd-droppable-id="itemId-1-showOptions" data-rbd-droppable-context-id="1">
              <div data-rbd-draggable-context-id="1" data-rbd-draggable-id="itemId-1-optionId-1"
                   className="flex pt-6 pr-7">
                <div tabIndex="0" role="button" aria-describedby="rbd-hidden-text-1-hidden-text-3"
                     data-rbd-drag-handle-draggable-id="itemId-1-optionId-1" data-rbd-drag-handle-context-id="1"
                     draggable="false" className="text-rose-400 opacity-50 hover:opacity-100">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                       width="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path
                      d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                </div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                     width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
                <input type="text" placeholder="옵션"
                       className="focus-visible:outline-none border-b-2 focus:border-rose-400 grow pb-1 ml-2 mr-8"
                       value="옵션 1">
                  <button type="button" className="flex text-gray-300 hover:text-black">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                         width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                  </button></div>
            </div>
            <button type="button" className="flex pt-6 pb-1 text-rose-400 px-7">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                   width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
              <span className="ml-2">옵션</span></button>
          </div>
          <div className="flex justify-end mt-4 pt-4 border-t mx-7">
            <div className="tooltip tooltip-bottom flex" data-tip="복사">
              <button type="button" className="mr-4">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                     width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                </svg>
              </button>
            </div>
            <div className="tooltip tooltip-bottom flex" data-tip="삭제">
              <button type="button" className="mr-4">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                     width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
                </svg>
              </button>
            </div>
            <div className="tooltip tooltip-bottom flex" data-tip="추가">
              <button type="button" className="mr-4">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
                     width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </button>
            </div>
            <div className="pl-4 border-l"><label className="label cursor-pointer"><span
              className="label-text pr-2">필수</span><input type="checkbox"
                                                          className="toggle toggle-sm checked:bg-rose-400 checked:border-rose-400"></label>
            </div>
          </div>
        </div>
      </div>
      <a className="inline-block" href="/preview">
        <button type="button" className="p-2 flex bg-rose-400 text-white border-1 rounded-md">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em"
               width="1.5em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M12 6.5a9.77 9.77 0 018.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0112 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"></path>
          </svg>
        </button>
      </a></main>
  </div>
</div>
