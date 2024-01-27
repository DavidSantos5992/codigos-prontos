// ira dar erro pois esta importando coisas que não existem

import React, { useState } from "react";
import Container from "../../Components/Container";

import arrow_left from '../../Assets/images/arrow_left.svg'
import arrow_rigth from '../../Assets/images/arrow_rigth.svg'

export default function Teste() {
    const [buttonPosition, setButtonPosition] = useState(0);

    const handleArrowClick = (direction) => {
        const newPosition =
            direction === "right" ? buttonPosition + 1 : buttonPosition - 1;

        setButtonPosition(newPosition >= 0 && newPosition <= 3 ? newPosition : buttonPosition);
    };

    return (
        <div>
            <Container>
                <div className="w-full h-full box-border px-[3.64vw] flex flex-col justify-center">
                    <div className="w-[33.02vw] flex items-center relative justify-between h-[4.84vw] mt-[.78vw] bg-red-400 ">
                        <img
                            className="w-[.5vw] cursor-pointer"
                            src={arrow_left}
                            onClick={() => handleArrowClick("left")}
                        />
                        <div className="w-[30.83vw] bg-green-500 overflow-hidden h-full flex items-center">
                            <div
                                className="flex"
                                style={{ transform: `translateX(-${buttonPosition * 10.4}vw)` }}
                            >
                                <button className="min-w-[10.4vw] h-[2.76vw] ml-[.5vw] mr-[.5vw] tracking-[.1vw] bg-[#51545B] hover:bg-[#E02E2E] text-gray-100 rounded-md text-center text-[15px] font-bold capitalize">
                                    1
                                </button>
                                <button className="min-w-[10.4vw] h-[2.76vw] ml-[.5vw] mr-[.5vw] tracking-[.1vw] bg-[#51545B] hover:bg-[#E02E2E] text-gray-100 rounded-md text-center text-[15px] font-bold capitalize">
                                    2
                                </button>
                                <button className="min-w-[10.4vw] h-[2.76vw] ml-[.5vw] mr-[.5vw] tracking-[.1vw] bg-[#51545B] hover:bg-[#E02E2E] text-gray-100 rounded-md text-center text-[15px] font-bold capitalize">
                                    3
                                </button>
                                <button className="min-w-[10.4vw] h-[2.76vw] ml-[.5vw] mr-[.5vw] tracking-[.1vw] bg-[#51545B] hover:bg-[#E02E2E] text-gray-100 rounded-md text-center text-[15px] font-bold capitalize">
                                    4
                                </button>
                            </div>
                        </div>
                        <img
                            className="w-[.5vw] cursor-pointer"
                            src={arrow_rigth}
                            onClick={() => handleArrowClick("right")}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
