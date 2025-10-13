import React from 'react'

export const Header = () => {
     return (
        // 1. 최상위 div에 통일된 배경색(bg-gray-900)을 적용하여 헤더/푸터와 자연스럽게 연결
        <div className="min-h-screen bg-gray-900">
            <div className="relative">
                {/* 2. HEADER: z-index를 유지하여 다른 요소 위에 표시 */}
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
                                <span className="sr-only">Open main menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a href="#" className="text-sm/6 font-semibold text-white">Product</a>
                            <a href="#" className="text-sm/6 font-semibold text-white">Features</a>
                            <a href="#" className="text-sm/6 font-semibold text-white">Marketplace</a>
                            <a href="#" className="text-sm/6 font-semibold text-white">Company</a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>
                    {/* ElDialog / Mobile Menu Part (Tailwind UI 컴포넌트 가정) */}
                    <el-dialog>
                        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
                            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                                <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                                    <div className="flex items-center justify-between">
                                        <a href="#" className="-m-1.5 p-1.5">
                                            <span className="sr-only">Your Company</span>
                                            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
                                        </a>
                                        <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-200">
                                            <span className="sr-only">Close menu</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-white/10">
                                            <div className="space-y-2 py-6">
                                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Product</a>
                                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Features</a>
                                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Marketplace</a>
                                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Company</a>
                                            </div>
                                            <div className="py-6">
                                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">Log in</a>
                                            </div>
                                        </div>
                                    </div>
                                </el-dialog-panel>
                            </div>
                        </dialog>
                    </el-dialog>
                </header>

                {/* 3. BODY/MAIN CONTENT: 헤더 높이만큼 패딩을 주고 배경색을 흰색으로 변경 */}
                {/* Tailwind UI 예제에서 가져오신 섹션이므로 bg-white를 유지합니다. */}
                <main className="pt-24"> 
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {/* Product items... */}
                                {/* ... (이하 생략) */}
                            </div>
                        </div>
                    </div>
                </main>

                {/* 4. FOOTER */}
                <footer>
                    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                        {/* Footer Content... */}
                        {/* ... (이하 생략) */}
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                                <div className="max-w-xl lg:max-w-lg">
                                    <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
                                    <p className="mt-4 text-lg text-gray-300">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                                    <div className="mt-6 flex max-w-md gap-x-4">
                                        <label htmlFor="email-address" className="sr-only">Email address</label>
                                        <input id="email-address" type="email" name="email" required placeholder="Enter your email" autoComplete="email" className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                        <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
                                    </div>
                                </div>
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                    <div className="flex flex-col items-start">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 text-white">
                                                <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                                        <dd className="mt-2 text-base/7 text-gray-400">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 text-white">
                                                <path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                                        <dd className="mt-2 text-base/7 text-gray-400">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        </div>
    )
}  
