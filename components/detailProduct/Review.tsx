const Review = () => {
    return (
        <div className="lg:mx-28 py-8">
            <div className="space-y-1">
                <div className="flex flex-col items-center xl:items-start space-y 8 xl:space-y-0 xl:space-x-14 xl:flex-row">
                    <div className="md:flex space-x-14">
                        <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-[152px]">
                            <div className="width: 125px; height: 125px;">
                                <svg className="CircularProgressbar font-[700]" viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                                    <path className="CircularProgressbar-trail stroke: rgb(241, 243, 247); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: 0px;" d="M 50,50m 0,-46a 46,46 1 1 1 0,92a 46,46 1 1 1 0,-92" stroke-width="8" fill-opacity="0">
                                    </path><path className="CircularProgressbar-path stroke: rgb(247, 147, 30); stroke-dasharray: 289.027px, 289.027px; stroke-dashoffset: -289.027px;" d="M 50,50m 0,-46a 46,46 1 1 1 0,92a 46,46 1 1 1 0,-92" stroke-width="8" fill-opacity="0"></path>
                                    <text className="CircularProgressbar-text fill: rgb(68, 75, 85);" x="50" y="50">0</text>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 px-5 w-[300px] flex-1"></div>
                    </div>
                    <div className="flex flex-col space-y-6 xl:pt-5"></div>
                </div>
            </div>
        </div>
    );
};

export default Review;