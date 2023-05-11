import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Contact() {
    const [day, setDay] = useState<Date | null>(null);
    const [date, setDate] = useState<number[] | []>([]);

    useEffect(() => {
        const now = new Date('1999-07-04');
        const temp = new Date('1999-07-04');

        setDay(now);
        setDate(
            [1, 2, 3, 4, 5].map((value: any, index: React.Key) => {
                if (index === 0) {
                    temp.setDate(temp.getDate() - 1);
                } else {
                    temp.setDate(temp.getDate() + 1);
                }
                return temp.getDate();
            })
        );
    }, []);

    return (
        <div className="h-full w-screen max-w-[375px] max-h-[768px] relative md:border-[rgb(60,64,67)] md:border-[1px] md:rounded-lg">
            <div className="flex justify-end">
                <div className="w-60 saturate-0 brightness-75">
                    <Image
                        src="/images/contact.png"
                        alt="ericgo contact"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="w-full lg:h-[55%] h-[60%] absolute bottom-0 left-0 px-4">
                <div className="relative h-full w-full">
                    <div className="flex items-center">
                        <div className="text-base uppercase tracking-[0.3rem]">Eric Go</div>
                        <div className="h-[1px] rounded-sm w-10 bg-white/50 ml-3"></div>
                    </div>
                    <div className="relative mt-4 w-full">
                        {day && (
                            <>
                                <div className="relative w-fit">
                                    <div
                                        className="h-min w-min leading-[1] text-[60px] relative uppercase text-black tracking-widest before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-t before:from-black before:via-black/90 before:font-bold before:z-10"
                                        style={{
                                            textShadow:
                                                '-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff',
                                        }}
                                    >
                                        <p>
                                            {day.toLocaleString('en-US', {
                                                weekday: 'long',
                                            })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="absolute text-[#cf3247] uppercase tracking-[0.2em] bottom-0 left-1/2 -translate-x-1/2 z-20">
                                            {day.toLocaleString('en-US', {
                                                weekday: 'long',
                                            })}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 z-20 w-full">
                                    <p
                                        className="text-white/30 leading-[1] text-[120px] font-secondary capitalize"
                                        style={{ fontFamily: 'april_j' }}
                                    >
                                        {day.toLocaleString('en-US', {
                                            month: 'short',
                                        })}
                                    </p>
                                    <div className="flex justify-end items-center gap-4 text-center text-sm font-bold text-white/40">
                                        {date && (
                                            <>
                                                {date.map((value: number, index: React.Key) => (
                                                    <p
                                                        className={`h-7 w-7 flex justify-center items-center rounded-[50%] ${
                                                            index === 1 ? 'bg-[#cf3247] text-white' : ''
                                                        }`}
                                                        key={value}
                                                    >
                                                        {value}
                                                    </p>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="left-0 absolute bottom-5 w-full">
                        <div
                            className="flex mb-4 h-fit flex-wrap gap-1 text-3xl text-center text-white/40"
                            style={{ fontFamily: 'april_j' }}
                        >
                            <Link href="mailto:thiennb.work@gmail.com" className="flex-1 hover:text-white duration-300">
                                <p>Email</p>
                            </Link>
                            <Link href="tel:84795803373" className="flex-1 hover:text-white duration-300">
                                <p>Phone</p>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/thiennguyen99/"
                                target="_blank"
                                className="flex-1 hover:text-white duration-300"
                            >
                                <p>Linkedin</p>
                            </Link>
                        </div>
                        <Link
                            href="https://static.topcv.vn/topcv-cv-uploads/c211294c28fce1ab707ae1de1d2299f6.pdf#toolbar=0&navpanes=0&scrollbar=0"
                            className="block flex-1 w-full font-bold text-white uppercase text-2xl tracking-wider bg-[#cf3247] rounded-lg text-center py-1 px-2"
                        >
                            <p>Resume</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
