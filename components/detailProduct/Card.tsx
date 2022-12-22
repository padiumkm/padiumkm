 
import { IProductCard } from "../productCard/IProductCard";

const Card: React.FC<IProductCard> = ({
    price,
    name,
    avail,
    sold,
    rating,
    
}) => {
    return (
        <div className="w-full space-y-6">
            <div className="w-full space-y-2">
                <div className="font-bold text-2xl">{price}</div>
                <div className="font-semibold">{name}</div>
                <div className="flex items-center space-x-1">
                    <div className="text-sm flex-nowrap">{avail} Tersedia</div>
                    <div className="text-borderCard-textFieldBoarder">•</div>
                    <div className="text-sm flex-nowrap">{sold} Terjual</div>
                    <div className="text-borderCard-textFieldBoarder">•</div>
                    <div className="flex items-center justify-center bg-borderCard-card border-[1px] p-1 border-borderCard-textFieldBorder rounded-md">
                        <div className="text-xs flex-nowrap">{rating}</div>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 576 512"
                            className="text-[#F89E35]"
                            height="12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex w-auto space-x-3">
                    <div className="flex items-center p-1 bg-categoryBg-milkyWay text-secondary-70 rounded-md">
                        <div className="text-xs flex-nowrap font-bold text-secondaryBlue">PPh22</div>
                    </div>
                    <div className="flex items-center p-1 bg-categoryBg-milkyWay text-secondary-70 rounded-md">
                        <div className="text-xs flex-nowrap font-bold text-secondaryBlue">Non PKP</div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default Card;