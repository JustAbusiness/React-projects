import React from 'react';

const CardTailWind = () => {
    return (
        <div className="relative ">
            <div className="w-full rounded-lg h-[400px] ">
                <img className="block w-full h-full object-cover rounded-lg" src="https://cdn.dribbble.com/users/2400293/screenshots/17040958/media/4962f801be5fbfd65d807df3f7eff4ae.png?compress=1&resize=1000x750&vertical=top" alt="" />
            </div>

            <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)] ">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-x-3">
                        <img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <span className="font-light text-base text-[#333]">@robert2703</span>
                    </div>
                    <div className="flex items-center gap-x-3">256</div>
                </div>

                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-blue-700">Huysanti</h3>
                    <span className="text-lg font-bold">10000 PSL</span>
                </div>
            </div>

        </div>

    );
};

export default CardTailWind;